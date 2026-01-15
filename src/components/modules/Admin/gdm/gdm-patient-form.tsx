'use client';

import { Form } from '@/components/ui/form';
import { gdmFormSchema, GdmFormValues } from '@/zod/gdm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StepBasicInfo from './form-steps/StepBasicInfo';
import StepMedicalInfo from './form-steps/StepMedicalInfo';

const GdmMultiStepForm = () => {
  const [step, setStep] = useState(1);

  const form = useForm<GdmFormValues>({
    resolver: zodResolver(gdmFormSchema),
    mode: 'onBlur',
    defaultValues: {
      // Step 1
      patientId: '',
      name: '',
      age: '',
      weight: '',
      address: '',
      phone: '',
      emergencyContact: '',
      maritalStatus: 'married',

      // Step 2
      diabetesKnownSince: 'before_pregnancy',
      diabetesDuration: '',
      insulin: 'no',
      comorbidity: '',
      deliveryTimeInWeek: '',
      deliveryType: 'normal',
      babyWeight: '',
      BabyNICUNeed: 'no',
      sugarLevel2to3DayAfterDelivery: '',
      sugarLevelAfter6Week: '',
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

  const onSubmit = (values: GdmFormValues) => {
    console.log('FINAL SUBMIT:', values);
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
