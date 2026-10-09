import Link from "next/link";

// components/ProductCard.jsx
export default function ProductCard({ product }) {
  const { title, price, description, category, image, rating } = product;

  // Build star array based on rating.rate
  const stars = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    if (rating.rate >= value) return "full";
    if (rating.rate >= value - 0.5) return "half";
    return "empty";
  });

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Image + Badge */}
      <div className="p-4 pb-0 flex justify-center">
        <div className="relative w-full h-64 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
          <Link href={`/products/${product.id}`}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
          </Link>
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-3 py-1 rounded-full shadow-sm border border-gray-200/60">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-lg font-bold text-gray-800 leading-snug line-clamp-2">
          {title}
        </h2>

        {/* Rating + Price */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400 text-sm">
              {stars.map((type, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  {type === "full" && (
                    <path d="M12 17.27l5.18 3.13-1.37-5.9 4.6-3.98-6.05-.52L12 4.5 9.64 9.99l-6.05.52 4.6 3.98-1.37 5.9L12 17.27z" />
                  )}
                  {type === "half" && (
                    <>
                      <defs>
                        <linearGradient id={`half-${i}`}>
                          <stop offset="50%" stopColor="currentColor" />
                          <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                      </defs>
                      <path
                        fill={`url(#half-${i})`}
                        d="M12 17.27l5.18 3.13-1.37-5.9 4.6-3.98-6.05-.52L12 4.5 9.64 9.99l-6.05.52 4.6 3.98-1.37 5.9L12 17.27z"
                      />
                    </>
                  )}
                  {type === "empty" && (
                    <path
                      fill="#e5e7eb"
                      d="M12 17.27l5.18 3.13-1.37-5.9 4.6-3.98-6.05-.52L12 4.5 9.64 9.99l-6.05.52 4.6 3.98-1.37 5.9L12 17.27z"
                    />
                  )}
                </svg>
              ))}
            </div>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
              {rating.rate} ({rating.count})
            </span>
          </div>

          <span className="text-xl font-extrabold text-gray-900 tracking-tight">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Add to cart */}
        <button className="mt-2 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}