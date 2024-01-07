import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { signOut } from "@/auth";
import { cn } from "@/lib/utils";

interface Room {
  id: string;
  title: string;
  image: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  dockerContainer?: {
    id: string;
    image: string;
    ip: string;
    port: number;
  };
}

const roomsJson: Room[] = [
  {
    id: "1",
    title: "Lorem Ipsum",
    image: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    difficulty: "Easy",
    dockerContainer: {
      id: "1",
      image: "ubuntu",
      ip: "192.168.1.1",
      port: 8080,
    },
  },
  {
    id: "1",
    title: "Lorem Ipsum",
    image: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    difficulty: "Medium",
    dockerContainer: {
      id: "1",
      image: "ubuntu",
      ip: "192.168.1.1",
      port: 8080,
    },
  },
  {
    id: "1",
    title: "Lorem Ipsum",
    image: "https://via.placeholder.com/150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    difficulty: "Hard",
    dockerContainer: {
      id: "1",
      image: "ubuntu",
      ip: "192.168.1.1",
      port: 8080,
    },
  },
];

async function getRooms() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return roomsJson;
}

const Dashboard = async () => {
  const rooms = await getRooms();
  return (
    <div className="max-w-6xl mx-auto">
      <br></br> {/* NEUMIM CSS */}
      <h1 className="flex flex-col items-center text-6xl font-semibold m-4 text-white">
        Rooms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-6">
        {rooms.map((room) => (
          <Card key={room.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <CardTitle>{room.title}</CardTitle>
              <Badge
                className={cn({
                  "bg-green-600": room.difficulty === "Easy",
                  "bg-orange-600": room.difficulty === "Medium",
                  "bg-red-600": room.difficulty === "Hard",
                })}
              >
                {room.difficulty}
              </Badge>
            </CardHeader>
            <CardContent>
              <p>{room.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Vstoupit do Místnosti</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
          className="flex flex-col items-center"
        >
          <Button type="submit" variant={"secondary"}>
            Sign Out
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
