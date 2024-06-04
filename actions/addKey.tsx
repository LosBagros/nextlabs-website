"use server";
import { z } from "zod";
import { FormSchema } from "@/schemas";
import { auth } from "@/auth";
import db from "@/lib/db";
import { redirect } from "next/navigation";

export async function addKey(values: z.infer<typeof FormSchema>) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    throw new Error("User not found");
  }

  // Add key to user
  await db.user.update({
    where: { id: userId },
    data: {
      sshPublicKey: values.sshPublicKey,
    },
  });

  redirect("/account");
}

export async function listKey() {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    throw new Error("User not found");
  }

  const user = await db.user.findUnique({
    where: { id: userId },
  });

  return user?.sshPublicKey;
}
