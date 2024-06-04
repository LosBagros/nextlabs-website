"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormSchema } from "@/schemas";
import { addKey } from "@/actions/addKey";
import { useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { listKey } from "@/actions/addKey";
import { toast } from "@/components/ui/use-toast";

export function ProfileForm() {
  const [isPending, startTransition] = useTransition();

  listKey().then((key) => {
    if (key) {
      form.setValue("sshPublicKey", key);
    }
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sshPublicKey: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      addKey(values).then(() => {
        toast({
          title: "Your SSH Public Key has been added to your account",
        });
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-white p-6 rounded-2xl"
      >
        <FormField
          control={form.control}
          name="sshPublicKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SSH Public Key</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQE..."
                  {...field}
                  className="h-48"
                  disabled={isPending}
                />
              </FormControl>
              <FormDescription>
                Paste your SSH public key here. It should start with `ssh-rsa`
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
