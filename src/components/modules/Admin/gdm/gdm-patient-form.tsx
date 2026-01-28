'use client';

import { Form } from '@/components/ui/form';
import useActionHandler from '@/hooks/useActionHandler';
import { createGdmPatient } from '@/services/patient-management/gdm';
import { gdmFormSchema, GdmFormValues } from '@/zod/gdm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StepBasicInfo from './form-steps/StepBasicInfo';
import StepMedicalInfo from './form-steps/StepMedicalInfo';

const GdmMultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { executePost } = useActionHandler();

  const form = useForm<GdmFormValues>({
    resolver: zodResolver(gdmFormSchema),
    defaultValues: {
      patientId: '',
      name: '',
      age: '',
      maritalStatus: 'married',
      height: '',
      weight: '',
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
      'name',
      'age',
      'weight',
      'address',
      'phone',
      'emergencyContact',
      'maritalStatus',
    ]);

    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: GdmFormValues) => {
    console.log('FINAL SUBMIT:', data);
    await executePost({
      action: () => createGdmPatient(data),
      success: {
        onSuccess: () => {
          form.reset();
          setStep(1);
        },
        message: 'GDM Patient created successfully',
        loadingText: 'Creating GDM Patient...',
        redirectPath: '/admin/gdm',
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

export default GdmMultiStepForm;
