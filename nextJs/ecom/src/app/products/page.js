
import ProductCard from "@/components/ProductCard";   
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 }, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

const Page = async () => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {products.map((elem) => (
        <ProductCard key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default Page;