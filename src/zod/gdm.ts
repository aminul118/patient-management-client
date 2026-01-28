import { z } from 'zod';

export const gdmFormSchema = z.object({
  // Step 1
  patientId: z.string().min(1, 'Patient ID is required'),
  name: z.string().min(2, 'Name is required'),
  age: z.string().min(1),
  maritalStatus: z.enum(['married', 'unmarried']),
  height: z.string().min(1),
  weight: z.string().min(1),
  occupation: z.string().min(2),
  familyIncome: z.string().min(1),
  address: z.string().min(5),
  phone: z.string().min(10),
  emergencyContact: z.string().min(10),

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

  // ✅ NEW: OGTT at 6 weeks
  ogttDoneAt6Weeks: z.enum(['yes', 'no']).optional(),
  ogttFastingValue: z.string().optional(),
  ogtt2HourValue: z.string().optional(),
});

export type GdmFormValues = z.infer<typeof gdmFormSchema>;
