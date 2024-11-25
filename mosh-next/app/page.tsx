import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello Other Worlds!</h1>
      <Link href="/users">Who will rise from their slumber?</Link>
      <ProductCard />
    </main>
  );
}
