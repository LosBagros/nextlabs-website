import { Button } from "@/components/ui/button";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

const CreateRoomButton = async () => {
  const role = await currentRole();
  if (role === UserRole.ADMIN) {
    return (
      <Button className="flex items-center justify-center">
        Vytvořit Místnost
      </Button>
    );
  }
};

export default CreateRoomButton;
