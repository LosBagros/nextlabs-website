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

const FormSchema = z.object({
  image: z.string({
    required_error: "Please select an image to start container",
  }),
});

export default function CreateLab({
  userEmail,
  images,
}: {
  userEmail: string;
  images: string[];
}) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="flex flex-row space-y-0  space-x-2 items-center">
              <FormLabel className="w-full ">Start lab:</FormLabel>
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
                  {images.map((image: string) => (
                    <SelectItem key={image} value={image}>
                      {image}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="w-full" />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Start!
        </Button>
      </form>
    </Form>
  );
}
