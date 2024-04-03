import SkeletonCard from "@/components/skeleton-card";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {"abc".split("").map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default loading;
