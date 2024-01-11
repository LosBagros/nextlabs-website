import { Poppins } from "next/font/google";
import { ImLab } from "react-icons/im";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex felx-row items-center">
        <ImLab size={22} className="text-black mr-2" />
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          NextLabs
        </h1>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
