'use client';

import { Form } from '@/components/ui/form';
import useActionHandler from '@/hooks/useActionHandler';
import { updateGdmPatient } from '@/services/patient-management/gdm';
import { gdmFormSchema, GdmFormValues } from '@/zod/gdm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import StepBasicInfo from './form-steps/StepBasicInfo';
import StepMedicalInfo from './form-steps/StepMedicalInfo';

type Props = {
  slug: string;
  defaultValues: GdmFormValues;
  onCancel: () => void;
  onSuccess: () => void;
};

const GdmEditMultiStepForm = ({
  slug,
  defaultValues,
  onCancel,
  onSuccess,
}: Props) => {
  const [step, setStep] = useState(1);
  const { executePost } = useActionHandler();

  const form = useForm<GdmFormValues>({
    resolver: zodResolver(gdmFormSchema),
    defaultValues,
  });

  // if patient changes or reopen edit, ensure form resets to current patient
  useEffect(() => {
    form.reset(defaultValues);
    setStep(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, JSON.stringify(defaultValues)]);

  const nextStep = async () => {
    const isValid = await form.trigger([
      'patientId',
      'counselingDate',
      'name',
      'age',
      'weight',
      'height',
      'complication',
      'address',
      'phone',
      'emergencyContact',
      'maritalStatus',
    ]);

    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: GdmFormValues) => {
    await executePost({
      action: () => updateGdmPatient(slug, data),
      success: {
        onSuccess: () => onSuccess(),
        message: 'GDM Patient updated successfully',
        loadingText: 'Updating GDM Patient...',
      },
      errorMessage: 'Failed to update patient.',
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && <StepBasicInfo form={form} onNext={nextStep} />}

        {step === 2 && (
          <StepMedicalInfo form={form} onNext={nextStep} onBack={prevStep} />
        )}
      </form>
    </Form>
  );
};

export default GdmEditMultiStepForm;
