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
import { Textarea } from '@/components/ui/textarea';
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {[
          ['patientId', 'Patient ID'],
          ['name', 'Name'],
          ['age', 'Age'],
          ['weight', 'Weight (kg)'],
        ].map(([name, label]) => (
          <FormField
            key={name}
            control={form.control}
            name={name as keyof GdmFormValues}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {['phone', 'emergencyContact'].map((name) => (
          <FormField
            key={name}
            control={form.control}
            name={name as keyof GdmFormValues}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{name}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>

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

      <div className="flex justify-end pt-4">
        <Button type="button" onClick={onNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default StepBasicInfo;
