'use client';

import SubmitButton from '@/components/common/button/submit-button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import ImageDrop from '@/components/ui/image-drop';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useActionHandler from '@/hooks/useActionHandler';
import { createBanner } from '@/services/hero-banner/hero-banner';
import { bannerSchemaZodValidation } from '@/zod/banner';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof bannerSchemaZodValidation>;
export function AddBannerDialog() {
  const [open, setOpen] = useState(false);
  const { executePost } = useActionHandler();
  const form = useForm<FormValues>({
    resolver: zodResolver(bannerSchemaZodValidation),
    defaultValues: {
      buttonText: '',
      description: '',
      url: '',
      title: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formdata = new FormData();
    formdata.append('data', JSON.stringify(data));
    formdata.append('file', data.photo);

    await executePost({
      action: () => createBanner(formdata),
      success: {
        onSuccess: () => {
          form.reset();
          setOpen(false);
        },
        message: 'Hero banner added successfully.',
        loadingText: 'Hero banner adding...',
      },
      errorMessage: ' Failed to added banner',
    });
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" /> Add Banner
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="scrollbar-thin max-h-[80vh] w-full overflow-y-auto sm:max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Banner</AlertDialogTitle>
          <AlertDialogDescription>
            Fill in the form below to create a hero banner showing in the home
            page.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex flex-col gap-6">
          <div className="mx-auto w-full max-w-3xl p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Title */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Escalator" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-36"
                          placeholder="John"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Photo */}
                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Photo</FormLabel>
                      <FormControl>
                        <ImageDrop onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Redirect Url*/}
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Redirect URL</FormLabel>
                      <FormControl>
                        <Input placeholder="/contact" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Redirect Url*/}
                <FormField
                  control={form.control}
                  name="buttonText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Button Text</FormLabel>
                      <FormControl>
                        <Input placeholder="Contact" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <AlertDialogFooter>
                  <AlertDialogCancel asChild>
                    <Button variant="destructive" type="button">
                      Cancel
                    </Button>
                  </AlertDialogCancel>
                  <SubmitButton loading={form.formState.isSubmitting} />
                </AlertDialogFooter>
              </form>
            </Form>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
