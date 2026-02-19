'use client';

import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { GdmFormValues } from '@/zod/gdm';
import { PencilLine, X } from 'lucide-react';
import GdmEditMultiStepForm from './GdmEditMultiStepForm';

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

const GdmPatientDetailsClient = ({ patient, slug }: Props) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const defaultValues = useMemo<GdmFormValues>(
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

      // must be 'yes' | 'no'
      BabyNICUNeed: toYesNo(patient?.BabyNICUNeed),

      sugarLevel2to3DayAfterDelivery:
        patient?.sugarLevel2to3DayAfterDelivery ?? '',

      // must be 'yes' | 'no' if your schema is that
      ogttDoneAt6Weeks: toYesNo(patient?.ogttDoneAt6Weeks),

      ogttFastingValue: patient?.ogttFastingValue ?? '',
      ogtt2HourValue: patient?.ogtt2HourValue ?? '',
    }),
    [patient],
  );

  // BMI Calculate
  const bmi = useMemo(() => {
    const hStr = String(patient?.height ?? '').replace(/,/g, '.');
    const wStr = String(patient?.weight ?? '').replace(/,/g, '.');

    const h = parseFloat(hStr);
    const w = parseFloat(wStr);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return '—';

    // Heuristically detect if height is in cm.
    // If height > 3, assume cm.
    const heightInMeters = h > 3 ? h / 100 : h;

    const val = w / (heightInMeters * heightInMeters);
    return val.toFixed(2);
  }, [patient?.height, patient?.weight]);

  if (isEditing) {
    return (
      <div className="container mx-auto space-y-4 px-2">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Edit GDM Patient</h1>
          <Button variant="destructive" onClick={() => setIsEditing(false)}>
            <X />
            Cancel
          </Button>
        </div>

        <GdmEditMultiStepForm
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
    <div className="container mx-auto px-2">
      <div className="mb-4 flex items-center justify-end">
        <Button onClick={() => setIsEditing(true)}>
          <PencilLine /> Edit
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-base">
              Basic Information
              <Badge variant="outline">GDM</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <InfoRow label="Patient ID" value={patient?.patientId} />
            <InfoRow
              label="Counseling Date"
              value={
                patient?.counselingDate
                  ? new Date(patient.counselingDate).toLocaleDateString()
                  : ''
              }
            />
            <InfoRow label="Name" value={patient?.name} />
            <InfoRow label="Age" value={patient?.age} />
            <InfoRow label="Marital Status" value={patient?.maritalStatus} />
            <InfoRow label="Occupation" value={patient?.occupation} />
            <InfoRow label="Family Income" value={patient?.familyIncome} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Contact</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <InfoRow label="Phone" value={patient?.phone} />
            <InfoRow
              label="Emergency Contact"
              value={patient?.emergencyContact}
            />
            <InfoRow label="Address" value={patient?.address} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Anthropometry</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <InfoRow label="Height" value={patient?.height} />
            <InfoRow label="Weight" value={patient?.weight} />
            <InfoRow label="Complication" value={patient?.complication} />
            <Separator />
            <InfoRow label="BMI" value={bmi} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Diabetes History</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <InfoRow
              label="Diabetes Known Since"
              value={patient?.diabetesKnownSince}
            />
            <InfoRow label="Duration" value={patient?.diabetesDuration} />
            <InfoRow label="Insulin" value={patient?.insulin} />
            <InfoRow label="Comorbidity" value={patient?.comorbidity} />
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Delivery & Postpartum</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <InfoRow
              label="Delivery Week"
              value={patient?.deliveryTimeInWeek}
            />
            <InfoRow label="Delivery Type" value={patient?.deliveryType} />
            <InfoRow label="Baby Weight" value={patient?.babyWeight} />
            <InfoRow label="NICU Required" value={patient?.BabyNICUNeed} />
            <InfoRow
              label="Sugar (2–3 days after delivery)"
              value={patient?.sugarLevel2to3DayAfterDelivery}
            />
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">OGTT at 6 Weeks</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <InfoRow label="OGTT Done" value={patient?.ogttDoneAt6Weeks} />
            <InfoRow label="Fasting Value" value={patient?.ogttFastingValue} />
            <InfoRow label="2 Hour Value" value={patient?.ogtt2HourValue} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex items-start justify-between gap-2 text-sm">
    <span className="text-muted-foreground shrink-0">{label}</span>
    <span className="text-right font-medium break-words">{value || '—'}</span>
  </div>
);

export default GdmPatientDetailsClient;
