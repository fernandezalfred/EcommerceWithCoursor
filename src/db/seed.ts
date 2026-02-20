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
    price: 135.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/162a6319-5b63-4ef4-befd-c83f79b0963f/AIR+MAX+90.png",
    category: "Running",
  },
  {
    name: "Nike Air Force 1 Low Protro 1",
    description:
      "The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.",
    price: 150.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/44e570da-a0a5-4f2d-a26c-517bf7914278/AIR+FORCE+1+LOW+PROTRO.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Air Max Plus",
    description:
      "The Nike Air Max Plus features a gradient upper with signature plastic caging and visible Max Air units for lightweight cushioning.",
    price: 190.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/94cef7bd-f891-443a-81fe-48c5d81682ff/NIKE+AIR+MAX+PLUS.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Structure Plus",
    description:
      "The Nike Structure Plus offers a smooth, stable ride for everyday road running with responsive cushioning and a supportive fit.",
    price: 170.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/adc83762-a7aa-4ca8-bc83-6c3454a9b24e/NIKE+STRUCTURE+PLUS.png",
    category: "Running",
  },
  {
    name: "Nike Zoom Fly 6 Glam",
    description:
      "Built for speed on race day and tempo runs, the Zoom Fly 6 Glam delivers a propulsive ride with a full-length carbon fiber plate.",
    price: 190.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cdf50c3f-02c5-4635-89a4-b5c31ffac397/ZOOM+FLY+6+GLAM.png",
    category: "Running",
  },
  {
    name: "Air Jordan 1 Low SE",
    description:
      "Inspired by the original that debuted in 1985, the Air Jordan 1 Low SE offers a clean, classic look that goes with everything.",
    price: 130.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d910b1a3-3fb8-4a47-a6d7-6addca152f8c/AIR+JORDAN+1+LOW+SE.png",
    category: "Basketball",
  },
  {
    name: "Nike Air Max 270 Premium",
    description:
      "The Air Max 270 Premium features Nike's biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.",
    price: 180.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1556bd4c-d914-4fe4-bbaf-8f8b704528f2/AIR+MAX+270+PREMIUM.png",
    category: "Lifestyle",
  },
  {
    name: "Nike Vaporfly 4",
    description:
      "Designed to help you chase new goals and records, the Vaporfly 4 builds on the legacy of the shoe that changed marathon racing forever.",
    price: 270.0,
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/685cdbbd-24db-4ece-b401-f32c48b04392/ZOOMX+VAPORFLY+NEXT%25+4.png",
    category: "Running",
  },
];

async function seed() {
  console.log("Clearing existing products...");
  await db.delete(products);
  console.log("Seeding products...");
  await db.insert(products).values(nikeProducts);
  console.log(`Seeded ${nikeProducts.length} Nike products.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
