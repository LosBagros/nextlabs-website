import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <p className="text-white">{JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button type="submit" variant={"secondary"}>
          Odhlásit se!
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
