'use client';

import { Form } from '@/components/ui/form';
import useActionHandler from '@/hooks/useActionHandler';
import { createPcosPatient } from '@/services/patient-management/pcos';
import { pcosFormSchema, PcosFormValues } from '@/zod/pcos';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StepBasicInfo from './form-steps/StepBasicInfo';
import StepMedicalInfo from './form-steps/StepMedicalInfo';

const PcosMultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { executePost } = useActionHandler();

  const form = useForm<PcosFormValues>({
    resolver: zodResolver(pcosFormSchema),
    defaultValues: {
      patientId: '',
      counselingDate: '',
      name: '',
      age: '',
      maritalStatus: 'married',
      height: '',
      weight: '',
      complication: '',
      occupation: '',
      familyIncome: '',
      address: '',
      phone: '',
      emergencyContact: '',
      diabetesKnownSince: 'during_pregnancy',
      diabetesDuration: '',
      insulin: 'no',
      comorbidity: '',
      deliveryTimeInWeek: '',
      deliveryType: 'normal',
      babyWeight: '',
      BabyNICUNeed: 'no',
      sugarLevel2to3DayAfterDelivery: '',
      ogttDoneAt6Weeks: 'no',
      ogttFastingValue: '',
      ogtt2HourValue: '',
    },
  });

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

  const onSubmit = async (data: PcosFormValues) => {
    await executePost({
      action: () => createPcosPatient(data),
      success: {
        onSuccess: () => {
          form.reset();
          setStep(1);
        },
        message: 'PCOS Patient created successfully',
        loadingText: 'Creating PCOS Patient...',
        redirectPath: '/admin/pcos',
      },
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

export default PcosMultiStepForm;
