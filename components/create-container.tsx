"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { createContainer } from "@/actions/containerActions";
import { useTransition } from "react";
import { auth } from "@/auth";

const FormSchema = z.object({
  image: z.string({
    required_error: "Please select an image to start container",
  }),
});

export default function CreateLab({ userEmail }: { userEmail: string }) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(() => {
      createContainer(userEmail, data.image).then((res) => {
        if (res.error) {
          toast({
            title: "Error starting container",
            description: res.error,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Started container:",
            description: (
              <pre className="overflow-x-auto">
                {JSON.stringify(res, null, 2)}
              </pre>
            ),
          });
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center">
              <FormLabel className="w-full mt-2">Start lab:</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isPending}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select image" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="nextlabs:default">
                    nextlabs:default
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="w-full" />
            </FormItem>
          )}
        />
        <Button className="mx-4 mt-2" type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
