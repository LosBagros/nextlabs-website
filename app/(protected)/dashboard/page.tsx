import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { auth, signOut } from "@/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Room {
  id: string;
  title: string;
  image: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

const fallbackImage = "https://placekitten.com/300/300";

const roomsJson: Room[] = [
  {
    id: "1",
    title: "Room 1",
    image: "https://placekitten.com/600/300",
    description:
      "Příliš žluťoučký kůň úpěl ďábelské ódy. Vlk zdrhl, buřt pěl. Chmýří plná žížala četla v údolí čínské básně. Běžící veverka překvapivě vyhrála kvíz o životě v lesní čistině.",
    difficulty: "Easy",
  },
  {
    id: "2",
    title: "Room 2",
    image: "https://placekitten.com/600/300",
    description:
      "Čtyři strakapoudi řešili hádanku o šťavnatých hmyzích larvách pod kůrou starého dubu. Měsíční svit kreslil stíny na zvlněnou hladinu rybníka, kde se stříbrné ryby tichounce pohupovaly mezi vodními rostlinami.",
    difficulty: "Medium",
  },
  {
    id: "3",
    title: "Room 3",
    image: "https://placekitten.com/600/300",
    description:
      "Jelen šumavský z pozorovatelny skrytě sleduje hravé veverky, zatímco slunce zapadá za kopce, kreslící dlouhé stíny mezi stromy. Na obzoru se pomalu rozsvěcují první hvězdy, zatímco osamělý myslivec vypráví příběhy o starých legendách lesa.",
    difficulty: "Hard",
  },
];

async function getRooms() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return roomsJson;
}

const Dashboard = async () => {
  const rooms = await getRooms();
  const session = await auth();

  return (
    <div className="max-w-6xl mx-auto">
      <br></br> {/* NEUMIM CSS */}
      <h1 className="flex flex-col items-center text-6xl font-semibold m-4 text-white">
        Rooms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-6">
        {rooms.map((room) => (
          <Card key={room.id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{room.title}</CardTitle>
              <Badge
                className={cn({
                  "bg-green-600": room.difficulty === "Easy",
                  "bg-orange-600": room.difficulty === "Medium",
                  "bg-red-600": room.difficulty === "Hard",
                  "w-min": true,
                })}
              >
                {room.difficulty}
              </Badge>

              <Image
                className="rounded"
                src={room.image}
                width={600}
                height={300}
                alt={"Image of " + room.title}
              />
            </CardHeader>
            <CardContent>
              <CardDescription>{room.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Vstoupit do Místnosti</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <Avatar className="mb-3 ">
          <AvatarImage src={session?.user.image || fallbackImage} />
          <AvatarFallback>
            {session?.user.name
              ?.toUpperCase()
              .match(/\b(\w)/g)
              ?.join("") || "??"}
          </AvatarFallback>
        </Avatar>
        <form
          action={async () => {
            "use server";

            await signOut();
          }}
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
