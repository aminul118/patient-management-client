import { z } from 'zod';

export const infertilityFormSchema = z.object({
  // Step 1
  patientId: z.string().min(1, 'Patient ID is required'),
  name: z.string().min(1, 'Name is required'),
  age: z.string().min(1, 'Age is required'),
  maritalStatus: z.enum(['married', 'unmarried']),
  height: z.string().min(1, 'Height is required'),
  weight: z.string().min(1, 'Weight is required'),
  occupation: z.string().min(1, 'Occupation is required'),
  familyIncome: z.string().min(1, 'Family Income is required'),
  address: z.string().min(1, 'Address is required'),
  phone: z.string().min(1, 'Phone Number is required'),
  emergencyContact: z.string().optional(),

  // Step 2
  diabetesKnownSince: z
    .enum(['before_pregnancy', 'during_pregnancy', 'custom'])
    .optional(),
  diabetesDuration: z.string().optional(),
  insulin: z.enum(['yes', 'no']).optional(),
  comorbidity: z.string().optional(),

  deliveryTimeInWeek: z.string().optional(),
  deliveryType: z.enum(['normal', 'c-section']).optional(),
  babyWeight: z.string().optional(),
  BabyNICUNeed: z.enum(['yes', 'no']).optional(),
  sugarLevel2to3DayAfterDelivery: z.string().optional(),

  counselingDate: z.string().optional(),
  complication: z.string().optional(),

  // OGTT at 6 weeks
  ogttDoneAt6Weeks: z.enum(['yes', 'no']).optional(),
  ogttFastingValue: z.string().optional(),
  ogtt2HourValue: z.string().optional(),
});

export type InfertilityFormValues = z.infer<typeof infertilityFormSchema>;
