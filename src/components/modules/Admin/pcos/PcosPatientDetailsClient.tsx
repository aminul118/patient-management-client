'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PcosFormValues } from '@/zod/pcos';
import {
  Activity,
  Baby,
  Briefcase,
  Calendar,
  CreditCard,
  FileText,
  MapPin,
  PencilLine,
  Phone,
  Syringe,
  User,
  Weight,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import PcosEditMultiStepForm from './PcosEditMultiStepForm';

type Props = {
  patient: any;
  slug: string;
};

const toYesNo = (v: unknown): 'yes' | 'no' => {
  const s = String(v ?? '')
    .trim()
    .toLowerCase();
  return s === 'yes' ? 'yes' : 'no';
};

const PcosPatientDetailsClient = ({ patient, slug }: Props) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const defaultValues = useMemo<PcosFormValues>(
    () => ({
      patientId: patient?.patientId ?? '',
      counselingDate: patient?.counselingDate
        ? new Date(patient.counselingDate).toISOString().split('T')[0]
        : '',
      name: patient?.name ?? '',
      age: patient?.age ?? '',
      maritalStatus:
        patient?.maritalStatus === 'unmarried' ? 'unmarried' : 'married',
      height: patient?.height ?? '',
      weight: patient?.weight ?? '',
      complication: patient?.complication ?? '',
      occupation: patient?.occupation ?? '',
      familyIncome: patient?.familyIncome ?? '',
      address: patient?.address ?? '',
      phone: patient?.phone ?? '',
      emergencyContact: patient?.emergencyContact ?? '',

      diabetesKnownSince:
        patient?.diabetesKnownSince === 'before_pregnancy'
          ? 'before_pregnancy'
          : patient?.diabetesKnownSince === 'custom'
            ? 'custom'
            : 'during_pregnancy',

      diabetesDuration: patient?.diabetesDuration ?? '',
      insulin: toYesNo(patient?.insulin),
      comorbidity: patient?.comorbidity ?? '',
      deliveryTimeInWeek: patient?.deliveryTimeInWeek ?? '',
      deliveryType:
        patient?.deliveryType === 'c-section' ? 'c-section' : 'normal',
      babyWeight: patient?.babyWeight ?? '',

      BabyNICUNeed: toYesNo(patient?.BabyNICUNeed),

      sugarLevel2to3DayAfterDelivery:
        patient?.sugarLevel2to3DayAfterDelivery ?? '',

      ogttDoneAt6Weeks: toYesNo(patient?.ogttDoneAt6Weeks),

      ogttFastingValue: patient?.ogttFastingValue ?? '',
      ogtt2HourValue: patient?.ogtt2HourValue ?? '',
    }),
    [patient],
  );

  const bmi = useMemo(() => {
    const hStr = String(patient?.height ?? '').replace(/,/g, '.');
    const wStr = String(patient?.weight ?? '').replace(/,/g, '.');

    const h = parseFloat(hStr);
    const w = parseFloat(wStr);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return '—';

    const heightInMeters = h > 3 ? h / 100 : h;

    const val = w / (heightInMeters * heightInMeters);
    return val.toFixed(2);
  }, [patient?.height, patient?.weight]);

  const heightInFeetInches = useMemo(() => {
    const hStr = String(patient?.height ?? '').replace(/,/g, '.');
    const h = parseFloat(hStr);

    if (isNaN(h) || h <= 0) return null;

    const heightInCm = h > 3 ? h : h * 100;
    const totalInches = heightInCm * 0.393701;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);

    return `${feet}' ${inches}"`;
  }, [patient?.height]);

  if (isEditing) {
    return (
      <div className="container mx-auto space-y-4 px-2">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Edit PCOS Patient</h1>
          <Button variant="destructive" onClick={() => setIsEditing(false)}>
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
        </div>

        <PcosEditMultiStepForm
          slug={slug}
          defaultValues={defaultValues}
          onCancel={() => setIsEditing(false)}
          onSuccess={() => {
            setIsEditing(false);
            router.refresh();
          }}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-6 p-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-2xl font-bold tracking-tight">
            Patient Overview
          </h1>
          <p className="text-muted-foreground text-sm">
            View and manage patient health records
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => setIsEditing(true)}>
            <PencilLine className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="space-y-6 md:col-span-4 lg:col-span-3">
          <Card className="overflow-hidden border-none pt-0 shadow-md">
            <div className="bg-primary/10 text-primary flex h-32 items-center justify-center">
              <User size={64} className="opacity-80" />
            </div>
            <CardContent className="relative pt-0 text-center">
              <div className="mt-4">
                <h2 className="text-foreground text-xl font-bold capitalize">
                  {patient?.name || 'Unknown Name'}
                </h2>
                <Badge variant="secondary" className="mt-2 text-xs font-normal">
                  ID: {patient?.patientId || 'N/A'}
                </Badge>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4 text-left">
                <DetailItem
                  icon={Calendar}
                  label="Age"
                  value={patient?.age ? `${patient.age} Years` : undefined}
                  compact
                />
                <DetailItem
                  icon={User}
                  label="Marital Status"
                  value={patient?.maritalStatus}
                  compact
                />
                <DetailItem
                  icon={Briefcase}
                  label="Occupation"
                  value={patient?.occupation}
                  compact
                />
                <DetailItem
                  icon={CreditCard}
                  label="Income"
                  value={patient?.familyIncome}
                  compact
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Phone className="text-primary h-4 w-4" /> Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <DetailItem icon={Phone} label="Phone" value={patient?.phone} />
              <DetailItem
                icon={Phone}
                label="Emergency"
                value={patient?.emergencyContact}
              />
              <DetailItem
                icon={MapPin}
                label="Address"
                value={patient?.address}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 md:col-span-8 lg:col-span-9">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatsCard
              label="Height"
              value={patient?.height}
              unit="cm"
              icon={Activity}
              subValue={heightInFeetInches}
            />
            <StatsCard
              label="Weight"
              value={patient?.weight}
              unit="kg"
              icon={Weight}
            />
            <StatsCard
              label="BMI"
              value={bmi}
              icon={Activity}
              highlight={Number(bmi) > 25}
            />
            <StatsCard
              label="Delivery Week"
              value={patient?.deliveryTimeInWeek}
              icon={Calendar}
            />
          </div>

          <Card className="overflow-hidden border-none py-0 shadow-md">
            <CardHeader className="bg-muted/30 border-b px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 text-primary rounded-full p-2">
                  <Syringe size={18} />
                </div>
                <CardTitle className="text-lg">
                  Diabetes & Medical History
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
              <DetailItem
                icon={Calendar}
                label="Diagnosis Timing"
                value={
                  patient?.diabetesKnownSince === 'fasting'
                    ? 'Known prior to pregnancy'
                    : 'Diagnosed during pregnancy'
                }
              />
              <DetailItem
                icon={Activity}
                label="Duration of Diabetes"
                value={patient?.diabetesDuration}
              />
              <DetailItem
                icon={Syringe}
                label="Insulin Required"
                value={toYesNo(patient?.insulin).toUpperCase()}
              />
              <DetailItem
                icon={FileText}
                label="Comorbidities"
                value={patient?.comorbidity}
                fullWidth
              />
              <DetailItem
                icon={Activity}
                label="Other Complications"
                value={patient?.complication}
                fullWidth
              />
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden border-none py-0 shadow-md">
              <CardHeader className="bg-muted/30 border-b px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary text-secondary-foreground rounded-full p-2">
                    <Baby size={18} />
                  </div>
                  <CardTitle className="text-lg">Delivery & Baby</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 p-6">
                <DetailItem
                  icon={Activity}
                  label="Delivery Type"
                  value={patient?.deliveryType}
                />
                <DetailItem
                  icon={Weight}
                  label="Baby Weight"
                  value={patient?.babyWeight}
                />
                <DetailItem
                  icon={Activity}
                  label="NICU Admission"
                  value={toYesNo(patient?.BabyNICUNeed).toUpperCase()}
                />
                <DetailItem
                  icon={Activity}
                  label="Postpartum Sugar (2-3 Days)"
                  value={patient?.sugarLevel2to3DayAfterDelivery}
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none pt-0 shadow-md">
              <CardHeader className="bg-muted/30 border-b px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="bg-accent text-accent-foreground rounded-full p-2">
                    <Activity size={18} />
                  </div>
                  <CardTitle className="text-lg">
                    OGTT Results (6 Weeks)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 p-6">
                <DetailItem
                  icon={Calendar}
                  label="OGTT Performed"
                  value={toYesNo(patient?.ogttDoneAt6Weeks).toUpperCase()}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-border bg-card hover:bg-muted/50 rounded-lg border p-3 text-center transition-colors">
                    <p className="text-muted-foreground text-xs uppercase">
                      Fasting
                    </p>
                    <p className="text-foreground text-xl font-bold">
                      {patient?.ogttFastingValue || '--'}
                    </p>
                  </div>
                  <div className="border-border bg-card hover:bg-muted/50 rounded-lg border p-3 text-center transition-colors">
                    <p className="text-muted-foreground text-xs uppercase">
                      2 Hour
                    </p>
                    <p className="text-foreground text-xl font-bold">
                      {patient?.ogtt2HourValue || '--'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({
  label,
  value,
  unit,
  icon: Icon,
  highlight,
  subValue,
}: {
  label: string;
  value: string | number;
  unit?: string;
  icon: any;
  highlight?: boolean;
  subValue?: string | null;
}) => (
  <Card
    className={`relative border-none shadow-sm transition-shadow hover:shadow-md ${highlight ? 'bg-destructive/10 ring-destructive/20 ring-1' : 'bg-card'}`}
  >
    <CardContent className="p-4 pb-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground font-medium tracking-wider uppercase">
          {label}
        </p>
        <Icon
          size={16}
          className={highlight ? 'text-destructive' : 'text-primary/60'}
        />
      </div>
      <div className="mt-2 flex items-end gap-1">
        <h3 className="text-foreground text-2xl font-bold tracking-tight">
          {value || '--'}
        </h3>
        {unit && value && (
          <span className="text-muted-foreground mb-1 text-xs font-medium">
            {unit}
          </span>
        )}
      </div>
      {subValue && (
        <p className="text-muted-foreground absolute right-3 bottom-3 text-xs font-medium">
          {subValue}
        </p>
      )}
    </CardContent>
  </Card>
);

const DetailItem = ({
  icon: Icon,
  label,
  value,
  compact = false,
  fullWidth = false,
}: {
  icon: any;
  label: string;
  value?: string | number | null;
  compact?: boolean;
  fullWidth?: boolean;
}) => (
  <div
    className={`hover:bg-muted/50 flex items-start gap-4 rounded-lg p-2 transition-colors ${fullWidth ? 'col-span-full' : ''}`}
  >
    <div
      className={`bg-muted text-muted-foreground shrink-0 rounded-full ${compact ? 'p-1.5' : 'p-2'}`}
    >
      <Icon size={compact ? 14 : 18} />
    </div>
    <div className="flex-1 space-y-0.5">
      <p className="text-muted-foreground text-xs font-medium uppercase">
        {label}
      </p>
      <p className="text-foreground text-sm leading-relaxed font-semibold break-words">
        {value || '—'}
      </p>
    </div>
  </div>
);

export default PcosPatientDetailsClient;
