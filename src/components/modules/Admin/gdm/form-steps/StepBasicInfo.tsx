'use client';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { GdmFormValues } from '@/zod/gdm';
import { UseFormReturn } from 'react-hook-form';

interface Props {
  form: UseFormReturn<GdmFormValues>;
  onNext: () => void;
}

const StepBasicInfo = ({ form, onNext }: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold">Patient Basic Information</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
        {[
          { name: 'patientId', label: 'Patient ID', type: 'text' },
          { name: 'counselingDate', label: 'Counseling Date', type: 'date' },
          { name: 'name', label: 'Name', type: 'text' },
          { name: 'age', label: 'Age', type: 'number' },
          { name: 'weight', label: 'Weight (kg)', type: 'number' },
          { name: 'height', label: 'Height (cm)', type: 'number' },
          { name: 'complication', label: 'Complication', type: 'text' },
          { name: 'occupation', label: 'Occupation', type: 'text' },
          {
            name: 'familyIncome',
            label: 'Family Income (H+W)',
            type: 'number',
          },
          { name: 'address', label: 'Address', type: 'text' },
          { name: 'phone', label: 'Phone Number', type: 'tel' },
          { name: 'emergencyContact', label: 'Emergency Contact', type: 'tel' },
        ].map(({ name, label, type }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as keyof GdmFormValues}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input
                    type={type}
                    {...field}
                    value={field.value?.toString() || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <FormField
          control={form.control}
          name="maritalStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marital Status</FormLabel>
              <FormControl>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex gap-4"
                >
                  <RadioGroupItem value="married" /> Married
                  <RadioGroupItem value="unmarried" /> Unmarried
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button type="button" onClick={onNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default StepBasicInfo;
