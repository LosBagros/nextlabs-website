import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import NextLabs from "@/components/nextlabs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
      <NextLabs />
      <p className="text-white text-lg">Interaktivní Platforma pro Výuku!</p>
      <div>
        <LoginButton>
          <Button variant={"secondary"} size={"lg"}>
            Začít!
          </Button>
        </LoginButton>
      </div>
    </div>
  );
}
