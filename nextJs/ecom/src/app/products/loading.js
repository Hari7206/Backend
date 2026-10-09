import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

// Mirrors ProductCard layout 1:1 — shadcn theme aware
const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden border border-border">
      {/* Image + Badge */}
      <div className="p-4 pb-0 flex justify-center">
        <div className="relative w-full h-64 bg-muted rounded-xl overflow-hidden">
          <Skeleton className="h-full w-full rounded-xl" />
          {/* Category badge */}
          <Skeleton className="absolute top-3 left-3 h-6 w-24 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Title (2 lines) */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>

        {/* Rating + Price row */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1.5">
            {/* Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-4 rounded-sm" />
              ))}
            </div>
            {/* Rating count pill */}
            <Skeleton className="h-5 w-16 rounded-full" />
          </div>
          {/* Price */}
          <Skeleton className="h-6 w-20" />
        </div>

        {/* Description (3 lines) */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        {/* Add to cart button */}
        <Skeleton className="mt-2 h-10 w-full rounded-xl" />
      </div>
    </div>
  );
};

export default Loading;