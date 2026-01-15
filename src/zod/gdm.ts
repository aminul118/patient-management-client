import { z } from 'zod';

export const gdmFormSchema = z.object({
  // Step 1
  patientId: z.string().min(1, 'Patient ID is required'),
  name: z.string().min(2, 'Name is required'),
  age: z.string().min(1),
  maritalStatus: z.enum(['married', 'unmarried']),
  weight: z.string().min(1),
  address: z.string().min(5),
  phone: z.string().min(10),
  emergencyContact: z.string().min(10),

  // Step 2
  diabetesKnownSince: z.enum([
    'before_pregnancy',
    'during_pregnancy',
    'custom',
  ]),
  diabetesDuration: z.string().optional(),
  insulin: z.enum(['yes', 'no']),
  comorbidity: z.string().optional(),

  deliveryTimeInWeek: z.string().optional(),
  deliveryType: z.enum(['normal', 'c-section']),
  babyWeight: z.string().min(1),
  BabyNICUNeed: z.enum(['yes', 'no']),
  sugarLevel2to3DayAfterDelivery: z.string().optional(),
  sugarLevelAfter6Week: z.string().optional(),
});

export type GdmFormValues = z.infer<typeof gdmFormSchema>;
