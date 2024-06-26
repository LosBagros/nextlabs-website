import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/auth/login" });
        // redirect to /
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Odhlásit se!
      </Button>
    </form>
  );
}
