import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import dotenv from "dotenv";
import { products } from "./schema";

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
    price: 130.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx4dohp9a0/W+AIR+MAX+90.png",
    category: "Running",
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: 115.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: 115.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b133-4e5dab9f834f/NIKE+DUNK+LOW+RETRO.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Pegasus 41",
    description:
      "Responsive cushioning in the Pegasus provides an energized ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units.",
    price: 140.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a667a5b0-e14d-4be6-8e46-3490984e1ece/NIKE+PEGASUS+41.png",
    category: "Running",
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    description:
      "In the '77, Nike was just getting started. The Blazer Mid '77 Vintage harnesses the old-school look with a vintage midsole finish.",
    price: 105.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/BLAZER+MID+%2777+VINTAGE.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Air Jordan 1 Retro High OG",
    description:
      "The Air Jordan 1 Retro High remakes the classic sneaker with new colors and fresh details, while icons like the Wings logo and Nike Air remain.",
    price: 180.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/W+AIR+JORDAN+1+RETRO+HIGH+OG.png",
    category: "Basketball",
  },
  {
    name: "Nike Vomero 18",
    description:
      "Cushioned comfort for long runs. The Vomero 18 delivers a plush, smooth ride with ZoomX foam and a wider forefoot.",
    price: 160.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4950e7c-e12d-470f-b36f-5175c7cc5fe7/NIKE+VOMERO+18.png",
    category: "Running",
  },
  {
    name: "Nike Metcon 9",
    description:
      "The Nike Metcon 9 is the gold standard for weight training with a wide, flat heel and firm rubber outsole for stability during lifts.",
    price: 150.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4950e7c-e12d-470f-b36f-5175c7cc5fe7/NIKE+METCON+9.png",
    category: "Training",
  },
];

async function seed() {
  console.log("Seeding products...");
  await db.insert(products).values(nikeProducts);
  console.log(`Seeded ${nikeProducts.length} Nike products.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
