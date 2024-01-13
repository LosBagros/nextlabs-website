import { ImLab } from "react-icons/im";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const NextLabs = () => {
  return (
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
  );
};

export default NextLabs;
