"use client";

import Image from "next/image";
import type { Product } from "@/db/schema";
import { useCartStore } from "@/store/cart-store";

export function ProductList({ products }: { products: Product[] }) {
  const addItem = useCartStore((s) => s.addItem);
  const cartItemCount = useCartStore((s) =>
    s.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Showing {products.length} products
        </p>
        <div className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
          Cart ({cartItemCount})
        </div>
      </div>

      {products.length === 0 ? (
        <div className="rounded-lg border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-500 dark:text-zinc-400">
            No products found. Run the seed script to add products.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-lg border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <span className="mb-1 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {product.category}
                </span>
                <h3 className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
                  {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addItem(product)}
                    className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
