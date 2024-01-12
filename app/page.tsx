import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import { ImLab } from "react-icons/im";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
      <div className="flex felx-row items-center">
        <ImLab size={40} className="text-white mr-2" />
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          NextLabs
        </h1>
      </div>
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
