import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nutvana/Nav";
import { Hero } from "@/components/nutvana/Hero";
import { TrustStrip } from "@/components/nutvana/TrustStrip";
import { Products } from "@/components/nutvana/Products";
import { Spotlight } from "@/components/nutvana/Spotlight";
import { Why } from "@/components/nutvana/Why";
import { Packaging } from "@/components/nutvana/Packaging";
import { GlobalReach } from "@/components/nutvana/GlobalReach";
import { Quiz } from "@/components/nutvana/Quiz";
import { Testimonials } from "@/components/nutvana/Testimonials";
import { FAQ } from "@/components/nutvana/FAQ";
import { FinalCTA } from "@/components/nutvana/FinalCTA";
import { EnquiryForm } from "@/components/nutvana/EnquiryForm";
import { Footer } from "@/components/nutvana/Footer";
import { Floaters } from "@/components/nutvana/Floaters";
import { IntroLoader } from "@/components/nutvana/IntroLoader";
import { PRODUCTS } from "@/components/nutvana/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nutvana | Premium Dry Fruits & Foxnuts (Makhana) Exporter from India",
      },
      {
        name: "description",
        content:
          "Nutvana by Anant Overseas exports premium foxnuts (makhana), almonds, cashews, walnuts, pistachios and hazelnuts from India to the UAE, USA, UK, Europe, Africa and Asia. Request a free sample or get a quote today.",
      },
      {
        property: "og:title",
        content: "Nutvana | Premium Dry Fruits & Foxnuts (Makhana) Exporter from India",
      },
      {
        property: "og:description",
        content:
          "Handpicked almonds, cashews, walnuts, pistachios, hazelnuts and light, crisp foxnuts — premium quality, hygienically packed and delivered worldwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nutvana | Premium Dry Fruits & Foxnuts Exporter from India" },
      {
        name: "twitter:description",
        content:
          "Premium foxnuts (makhana) and dry fruits from India. Request a free sample or a quote from Nutvana by Anant Overseas.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Anant Overseas",
          brand: { "@type": "Brand", name: "Nutvana", slogan: "Pure Crunch. Premium Life." },
          url: "https://anantoverseas.com",
          email: "info@anantoverseas.com",
          telephone: "+91-79999-50100",
          address: {
            "@type": "PostalAddress",
            streetAddress: "135-136 Vaishali Parisar, Polipather, Narmada Road, Gwarighat",
            addressLocality: "Jabalpur",
            addressRegion: "Madhya Pradesh",
            postalCode: "482 008",
            addressCountry: "IN",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Nutvana Products",
            itemListElement: PRODUCTS.map((p) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: p.name,
                description: p.short,
                brand: { "@type": "Brand", name: "Nutvana" },
              },
            })),
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <IntroLoader />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Products />
        <Spotlight />
        <Why />
        <Packaging />
        <GlobalReach />
        <Quiz />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <EnquiryForm />
      </main>
      <Footer />
      <Floaters />
    </>
  );
}
