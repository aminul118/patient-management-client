'use client';

import SubmitButton from '@/components/common/button/submit-button';
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
  onBack: () => void;
}

const StepMedicalInfo = ({ form, onNext, onBack }: Props) => {
  const diabetesType = form.watch('diabetesKnownSince');
  const ogttDone = form.watch('ogttDoneAt6Weeks');

  return (
    <>
      <h2 className="text-xl font-semibold">Medical Information</h2>

      {/* Diabetes Known Since */}
      <FormField
        control={form.control}
        name="diabetesKnownSince"
        render={({ field }) => (
          <FormItem>
            <FormLabel>When did you know you have diabetes?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="before_pregnancy" />
                  Before pregnancy
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="during_pregnancy" />
                  During pregnancy
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="custom" />
                  Other (weeks)
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Custom Duration */}
      {diabetesType === 'custom' && (
        <FormField
          control={form.control}
          name="diabetesDuration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 1 week, 2 weeks" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {/* Insulin */}
      <FormField
        control={form.control}
        name="insulin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>On Insulin?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" /> Yes
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" /> No
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Co-morbidity */}
      <FormField
        control={form.control}
        name="comorbidity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Co-morbidity</FormLabel>
            <FormControl>
              <Textarea placeholder="e.g. Hypertension, Thyroid" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Delivery Time */}
      <FormField
        control={form.control}
        name="deliveryTimeInWeek"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              At how many weeks of gestation was your delivery?
            </FormLabel>
            <FormControl>
              <Input placeholder="2  " {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Delivery Type */}
      <FormField
        control={form.control}
        name="deliveryType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Delivery Type?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="normal" /> Normal
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="c-section" /> C Section
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Baby Weight */}
      <FormField
        control={form.control}
        name="babyWeight"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Baby Weight (kg)</FormLabel>
            <FormControl>
              <Input placeholder="2 Kg" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Insulin */}
      <FormField
        control={form.control}
        name="BabyNICUNeed"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Does the baby need NICU?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="Yes" /> Yes
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="No" /> No
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sugarLevel2to3DayAfterDelivery"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sugar Level 2/3 Days after Delivery </FormLabel>
            <FormControl>
              <Input placeholder="5" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* OGTT done at 6 weeks */}
      <FormField
        control={form.control}
        name="ogttDoneAt6Weeks"
        render={({ field }) => (
          <FormItem>
            <FormLabel>OGTT test done at 6 weeks?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" /> Yes
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" /> No
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* If OGTT Yes → show values */}
      {ogttDone === 'yes' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="ogttFastingValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fasting Value (mmol/L or mg/dL)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 5.1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ogtt2HourValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>2 hours after 75 g glucose</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 7.8" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}

      <div className="flex justify-between space-x-2 pt-4">
        <SubmitButton />
        <div className="space-x-2">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepMedicalInfo;
