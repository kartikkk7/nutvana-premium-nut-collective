// Central content for the Nutvana landing page. Edit copy here, not in components.
import foxnutsImg from "@/assets/product-foxnuts.jpg";
import almondsImg from "@/assets/product-almonds.jpg";
import cashewsImg from "@/assets/product-cashews.jpg";
import walnutsImg from "@/assets/product-walnuts.jpg";
import pistachiosImg from "@/assets/product-pistachios.jpg";
import hazelnutsImg from "@/assets/product-hazelnuts.jpg";

export type Product = {
  id: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  packs: string[];
  tags: string[];
  img: string;
  imgAlt: string;
  category: "foxnuts" | "dryfruits";
  featured?: boolean;
  grades?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "foxnuts",
    name: "Premium Foxnuts (Makhana)",
    short: "Light, snow-white puffs from the still ponds of Bihar.",
    description:
      "Lotus seeds from the still ponds of Bihar, hand-harvested, sun-dried and popped into light, snow-white puffs. Mild, nutty and satisfyingly crisp. Rich in plant protein and fibre, low in fat and sodium, gluten-free, with a low glycemic index. Enjoy plain, roasted with ghee, in kheer, in curries or as a guilt-free snack.",
    benefits: [
      "Rich in plant protein and fibre",
      "Low in fat and sodium",
      "Gluten-free, low glycemic index",
      "Light, guilt-free everyday snack",
    ],
    packs: ["250 g retail pouch", "500 g retail pouch", "5 kg bulk pack", "10 kg export carton"],
    grades: ["4 Suthi", "5 Suthi", "6 Suthi+"],
    tags: ["Gluten-free", "Vegan", "Low GI"],
    img: foxnutsImg,
    imgAlt: "Snow-white popped foxnuts (makhana) piled in a gold-rimmed dark green bowl",
    category: "foxnuts",
    featured: true,
  },
  {
    id: "almonds",
    name: "Premium Almonds",
    short: "Plump kernels with a sweet, buttery bite.",
    description:
      "Plump, crunchy kernels with a sweet, buttery bite. A daily source of vitamin E, healthy fats and protein, perfect for snacking, milk, sweets and baking.",
    benefits: ["Natural source of vitamin E", "Healthy fats and protein", "Great for snacking and baking"],
    packs: ["250 g retail pouch", "500 g retail pouch", "10 kg bulk carton"],
    tags: ["Vegan", "Hand-graded"],
    img: almondsImg,
    imgAlt: "Plump brown almonds in a gold-rimmed dark green bowl on marble",
    category: "dryfruits",
  },
  {
    id: "cashews",
    name: "Premium Cashews",
    short: "Creamy, naturally sweet whole kernels.",
    description:
      "Creamy, naturally sweet whole kernels with a uniform pale colour. They make gravies velvety, desserts rich and roasted snacks irresistible.",
    benefits: ["Uniform pale colour, whole W-grade kernels", "Velvety texture for gravies and desserts", "Naturally sweet"],
    packs: ["250 g retail pouch", "500 g retail pouch", "10 kg bulk carton"],
    tags: ["Vegan", "Hand-graded"],
    img: cashewsImg,
    imgAlt: "Creamy whole cashew kernels in a gold-rimmed dark green bowl",
    category: "dryfruits",
  },
  {
    id: "walnuts",
    name: "Premium Walnuts",
    short: "Light golden halves, mellow and earthy.",
    description:
      "Light golden halves with a mellow, earthy flavour. One of the best plant sources of omega-3 for brain and heart health. Great in breakfast bowls, salads and brownies.",
    benefits: ["Plant source of omega-3", "Light golden halves", "Great for breakfast bowls and baking"],
    packs: ["250 g retail pouch", "500 g retail pouch", "10 kg bulk carton"],
    tags: ["Vegan", "Omega-3"],
    img: walnutsImg,
    imgAlt: "Light golden walnut halves in a gold-rimmed dark green bowl",
    category: "dryfruits",
  },
  {
    id: "pistachios",
    name: "Premium Pistachios",
    short: "Naturally split shells, vivid green kernels.",
    description:
      "Naturally split shells with vivid green, rich, slightly sweet kernels. Perfect for snacking, ice cream, baklava and festive platters.",
    benefits: ["Naturally split shells", "Vivid green, rich kernels", "Perfect for desserts and platters"],
    packs: ["250 g retail pouch", "500 g retail pouch", "10 kg bulk carton"],
    tags: ["Vegan", "Roasted or raw"],
    img: pistachiosImg,
    imgAlt: "Pistachios with naturally split shells and green kernels in a dark green bowl",
    category: "dryfruits",
  },
  {
    id: "hazelnuts",
    name: "Premium Hazelnuts",
    short: "Round, aromatic and deeply nutty.",
    description:
      "Round, aromatic and deeply nutty with a smooth, sweet finish. A chocolatier's favourite, great roasted, ground into spreads or scattered over desserts.",
    benefits: ["Deep, sweet, aromatic flavour", "A chocolatier's favourite", "Great roasted or ground"],
    packs: ["250 g retail pouch", "500 g retail pouch", "10 kg bulk carton"],
    tags: ["Vegan", "Hand-graded"],
    img: hazelnutsImg,
    imgAlt: "Round brown hazelnuts, some shelled, in a gold-rimmed dark green bowl",
    category: "dryfruits",
  },
];

export const PRODUCT_NAMES = PRODUCTS.map((p) => p.name);

/* Placeholder testimonials — replace the quotes, names and companies with real ones. */
export const TESTIMONIALS = [
  {
    quote:
      "The makhana arrived crisp, clean and beautifully packed. Our retail customers repurchase faster than any snack we stock.",
    name: "Rahul Mehta",
    company: "Gulf Foods Trading",
    country: "UAE",
  },
  {
    quote:
      "Consistent grades, honest communication and export documents that never cause customs delays. A supplier we trust.",
    name: "Sarah Whitfield",
    company: "Whitfield Fine Foods",
    country: "United Kingdom",
  },
  {
    quote:
      "Their private-label pouches look genuinely premium on our shelves. The almonds and cashews always taste fresh.",
    name: "Daniel Okafor",
    company: "Lagos Gourmet Imports",
    country: "Nigeria",
  },
];

export const FAQS = [
  {
    q: "Can I get a sample before ordering?",
    a: "Yes. We send pre-shipment samples of every grade so you can check quality, packing and taste before you commit. Request one through the enquiry form or on WhatsApp.",
  },
  {
    q: "Do you offer private label?",
    a: "We do. Retail-ready pouches, gifting packs and bulk cartons can carry your brand, with full support on artwork, labelling compliance and packaging formats.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We ship worldwide, with regular consignments to the UAE, the USA, the UK, Europe, Africa and Asia. Sea and air freight options are available.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "MOQs depend on the product and pack format. Retail and private-label orders typically start at 500 kg per SKU, while sample orders are, of course, much smaller. Ask us for exact figures.",
  },
  {
    q: "How are the products packed and kept fresh?",
    a: "Products are machine-packed in food-grade, nitrogen-flushed or vacuum-sealed pouches inside export cartons, with moisture barriers to lock in freshness from our facility to your warehouse.",
  },
  {
    q: "What are Suthi grades of makhana?",
    a: "Suthi is the traditional sizing grade for foxnuts, based on the diameter of the popped puff. 6 Suthi is the largest and most premium, followed by 5 and 4 Suthi. We supply all three grades.",
  },
];

export const SPOTLIGHT_STEPS = [
  {
    title: "Grown in still ponds",
    text: "Foxnuts grow as lotus seeds in the calm, shallow ponds of Bihar, nourished by mineral-rich water.",
  },
  {
    title: "Hand-harvested in monsoon",
    text: "Farmers wade through the water by hand, gathering ripe seed pods season after season.",
  },
  {
    title: "Sun-dried",
    text: "The seeds are cleaned and dried under the open sun to lock in their mild, nutty character.",
  },
  {
    title: "Roasted and popped",
    text: "Careful roasting at high heat pops each seed into the light, snow-white puff you know.",
  },
  {
    title: "Graded and packed",
    text: "Puffs are graded by size — 4 to 6+ Suthi — then sealed fresh for their journey to you.",
  },
];

export const SPOTLIGHT_BENEFITS = [
  { title: "Protein and fibre", text: "A satisfying plant-based boost of protein and dietary fibre in every bowl." },
  { title: "Weight-friendly", text: "Light, airy puffs that fill you up without heaviness. Snack smart." },
  { title: "Heart healthy", text: "Naturally low in fat and sodium, a kind choice for your heart." },
  { title: "Brain support", text: "A traditional brain food, valued in Ayurveda for focus and calm." },
  { title: "Low glycemic", text: "A low glycemic index means steady energy, no sugar spikes." },
  { title: "Gluten-free", text: "100% gluten-free and vegan — gentle on almost every diet." },
];

export const WHY_CARDS = [
  { title: "Sourced at origin", text: "We buy directly from farmers and pond cooperatives — no long, quality-eroding chains." },
  { title: "Hygienic processing", text: "Food-grade facilities with strict hygiene at every step from drying to packing." },
  { title: "Freshness-lock packaging", text: "Nitrogen-flushed, moisture-barrier pouches that keep the crunch intact." },
  { title: "Certified facilities", text: "FSSAI, APEDA and ISO 22000 certified processes you can audit." },
  { title: "Private label ready", text: "Your brand on premium pouches, gift boxes and cartons, fully customisable." },
  { title: "Reliable delivery", text: "Sea and air freight with complete export documentation, on schedule." },
];

export type Region = {
  name: string;
  note: string;
  x: number; // % from left on the map image
  y: number; // % from top
};

export const MAP_ORIGIN = { name: "India", x: 67.2, y: 49.5 };

export const REGIONS: Region[] = [
  { name: "UAE", note: "Fast-growing retail & gifting demand", x: 62.0, y: 50.5 },
  { name: "United Kingdom", note: "Premium grocers & Asian food stores", x: 46.5, y: 30.5 },
  { name: "Europe", note: "Health-food & private-label buyers", x: 49.8, y: 32.0 },
  { name: "USA", note: "Superfood & snack aisle listings", x: 21.0, y: 37.0 },
  { name: "Africa", note: "Distributors in West & East Africa", x: 49.5, y: 56.0 },
  { name: "Asia", note: "Duty-free, e-commerce & retail chains", x: 75.5, y: 56.0 },
];
