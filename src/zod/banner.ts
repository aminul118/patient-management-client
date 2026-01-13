import z from 'zod';

export const bannerSchemaZodValidation = z.object({
  title: z.string().min(2, 'Name is too short').max(50, 'Name is too long'),
  description: z
    .string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long'),
  url: z.string().min(1, 'Subject is required'),
  buttonText: z.string().min(1, 'Message is required'),
  photo: z.instanceof(File, { message: 'Must upload an image file' }),
});
