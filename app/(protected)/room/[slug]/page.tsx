import db from "@/lib/db";

const RoomTest = async () => {
  const rooms = await db.room.findMany({});
  return rooms.map((room) => {
    return (
      <div key={room.id}>
        <h1>{room.name}</h1>
        <p>{room.description}</p>
      </div>
    );
  });
};

export default RoomTest;
