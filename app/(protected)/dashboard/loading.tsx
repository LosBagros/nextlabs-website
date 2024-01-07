import SkeletonCard from "@/components/skeleton-card";

const loading = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <br></br> {/* NEUMIM CSS */}
      <h1 className="flex flex-col items-center text-6xl font-semibold m-4 text-white">
        Rooms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-6">
        {"abcdefgh".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default loading;
