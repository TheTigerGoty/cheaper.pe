import Grid from "@/components/main/Grid";
import Hero from "@/components/main/Hero";
import Marquee from "@/components/main/Marquee";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Grid />
      <Products />
    </main>
  );
}
