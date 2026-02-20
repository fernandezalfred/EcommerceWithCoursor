import { db } from "@/db";
import { products } from "@/db/schema";
import { ProductList } from "./product-list";

export const dynamic = "force-dynamic";

export default async function Home() {
  const allProducts = await db.select().from(products);

  const serializedProducts = allProducts.map((p) => ({
    ...p,
    createdAt: p.createdAt.toISOString(),
  }));

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Nike Store
          </h1>
          <nav className="flex items-center gap-4">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              {serializedProducts.length} products
            </span>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            All Products
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Browse our latest Nike collection
          </p>
        </div>

        <ProductList products={serializedProducts} />
      </main>
    </div>
  );
}
