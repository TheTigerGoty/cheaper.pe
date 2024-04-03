
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import { ShoppingCart, TrendingDown } from 'lucide-react'
import type { Product } from "@/types/api-ripley";

interface Props {
  product: Product;
  size?: "sm" | "md" | "lg";
}

export const ProductCard: React.FC<Props> = ({ product, size = "lg" }) => {

  const sizes = {
    lg: "w-82",
    md: "w-72",
    sm: "w-64",
  };

  return (
    <Card className={`cn("w-[380px]") ${sizes[size]} border rounded-2xl`}>
      <CardHeader>
        <Image src={product.image} alt={"ayuda"} width={340} height={340} className="rounded-xl" />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex space-x-4 p-4">
          <div className="flex-1 space-y-1 flex flex-col items-center">
            <p className="text-md font-medium leading-none">
              {product.brand}
            </p>
            <p className="text-2xl text-muted-foreground">
              {product.title}
            </p>
          </div>
        </div>
        <div>

          <div
            className="mb-4 grid  pb-4 last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-3 flex flex-col items-center">
              <p className="text-sm font-medium leading-none">
                {product.price}
              </p>
              <div className="text-sm text-muted-foreground flex space-x-3 items-center">
                <TrendingDown />
                <p>{product.discount}</p>
                <ShoppingCart />
              </div>
            </div>
          </div>

        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  )
};
