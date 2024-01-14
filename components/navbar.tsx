import { ImLab } from "react-icons/im";
import { Poppins } from "next/font/google";
import UserButton from "@/components/user-button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import CreateRoomButton from "./create-room-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Navbar = () => {
  return (
    <div>
      <br></br> {/* NEUMIM CSS */}
      <nav className="flex items-center justify-between rounded-2xl bg-white mb-6">
        <Link href="/dashboard" className="flex items-center ml-4 my-4">
          <ImLab size={35} className="text-black mr-2" />
          <h1
            className={cn(
              "text-5xl font-semibold text-black drop-shadow-md",
              font.className
            )}
          >
            NextLabs
          </h1>
        </Link>
        <UserButton />
      </nav>
      <CreateRoomButton />
    </div>
  );
};

export default Navbar;
