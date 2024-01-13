import SkeletonCard from "@/components/skeleton-card";

const loading = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-6">
        {"abcdefgh".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default loading;
