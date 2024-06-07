import SettingsPage from "@/components/ui/users-table";
import db from "@/lib/db";

const UsersTable = async () => {
  const users = await db?.user.findMany({
    select: { name: true, email: true },
  });
  return (
    <div className="m-12 mx-auto max-w-6xl p-4 bg-slate-200 rounded">
      <SettingsPage data={users ?? []} />
    </div>
  );
};

export default UsersTable;
