'use client';

import { Form } from '@/components/ui/form';
import useActionHandler from '@/hooks/useActionHandler';
import { updateInfertilityPatient } from '@/services/patient-management/infertility';
import {
  infertilityFormSchema,
  InfertilityFormValues,
} from '@/zod/infertility';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import StepBasicInfo from './form-steps/StepBasicInfo';
import StepMedicalInfo from './form-steps/StepMedicalInfo';

type Props = {
  slug: string;
  defaultValues: InfertilityFormValues;
  onCancel: () => void;
  onSuccess: () => void;
};

const InfertilityEditMultiStepForm = ({
  slug,
  defaultValues,
  onCancel,
  onSuccess,
}: Props) => {
  const [step, setStep] = useState(1);
  const { executePost } = useActionHandler();

  const form = useForm<InfertilityFormValues>({
    resolver: zodResolver(infertilityFormSchema),
    defaultValues,
  });

  useEffect(() => {
    form.reset(defaultValues);
    setStep(1);
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

  const onSubmit = async (data: InfertilityFormValues) => {
    await executePost({
      action: () => updateInfertilityPatient(slug, data),
      success: {
        onSuccess: () => onSuccess(),
        message: 'Infertility Patient updated successfully',
        loadingText: 'Updating Infertility Patient...',
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

export default InfertilityEditMultiStepForm;
