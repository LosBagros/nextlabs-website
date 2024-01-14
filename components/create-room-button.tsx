import { Button } from "@/components/ui/button";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import Link from "next/link";

const CreateRoomButton = async () => {
  const role = await currentRole();
  if (role === UserRole.ADMIN) {
    return (
      <Link href="/dashboard/create">
        <Button className="flex m-4 mx-auto" variant={"secondary"}>
          Vytvořit Místnost
        </Button>
      </Link>
    );
  }
};

export default CreateRoomButton;
