import { CreateRoomForm } from "@/components/create-room-form";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { redirect } from "next/navigation";

import { UserRole } from "@prisma/client";
import { currentRole } from "@/lib/auth";

const CreateRoom = async () => {
  const role = await currentRole();
  if (role !== UserRole.ADMIN) {
    return redirect(DEFAULT_LOGIN_REDIRECT);
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <CreateRoomForm />
    </div>
  );
};

export default CreateRoom;
