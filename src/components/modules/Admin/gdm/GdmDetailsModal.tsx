'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { IGdm, IModal } from '@/types';

interface Props extends IModal {
  patient: IGdm;
}

const InfoRow = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium">{value || '—'}</span>
  </div>
);

const GdmDetailsModal = ({ open, setOpen, patient }: Props) => {
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="rounded-2xl lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Patient Details
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                Basic Information
                <Badge variant="outline">GDM</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <InfoRow label="Patient ID" value={patient.patientId} />
              <InfoRow label="Name" value={patient.name} />
              <InfoRow label="Age" value={patient.age} />
              <InfoRow label="Marital Status" value={patient.maritalStatus} />
              <InfoRow label="Occupation" value={patient.occupation} />
              <InfoRow label="Family Income" value={patient.familyIncome} />
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Contact</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <InfoRow label="Phone" value={patient.phone} />
              <InfoRow
                label="Emergency Contact"
                value={patient.emergencyContact}
              />
              <Separator />
              <InfoRow label="Address" value={patient.address} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Anthropometry</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <InfoRow label="Height" value={patient.height} />
              <InfoRow label="Weight" value={patient.weight} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Diabetes History</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <InfoRow
                label="Diabetes Known Since"
                value={patient.diabetesKnownSince}
              />
              <InfoRow label="Duration" value={patient.diabetesDuration} />
              <InfoRow label="Insulin" value={patient.insulin} />
              <InfoRow label="Comorbidity" value={patient.comorbidity} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Delivery & Postpartum</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <InfoRow
                label="Delivery Week"
                value={patient.deliveryTimeInWeek}
              />
              <InfoRow label="Delivery Type" value={patient.deliveryType} />
              <InfoRow label="Baby Weight" value={patient.babyWeight} />
              <InfoRow label="NICU Required" value={patient.BabyNICUNeed} />
              <InfoRow
                label="Sugar (2–3 days after delivery)"
                value={patient.sugarLevel2to3DayAfterDelivery}
              />
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">OGTT at 6 Weeks</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <InfoRow label="OGTT Done" value={patient.ogttDoneAt6Weeks} />
              <InfoRow label="Fasting Value" value={patient.ogttFastingValue} />
              <InfoRow label="2 Hour Value" value={patient.ogtt2HourValue} />
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GdmDetailsModal;
