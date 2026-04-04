"use client";
import Image from "next/image";

const logos = [
  { src: "/images/halal.svg", alt: "halal" },
  { src: "/images/snackbiru.svg", alt: "Sosnack" },
  { src: "/images/produkfresh.svg", alt: "ProdukFresh" },
  { src: "/images/premium.svg", alt: "Premium" },
  { src: "/images/higenis.svg", alt: "Higenis" },
  { src: "/images/shiping.svg", alt: "Shiping" },
  { src: "/images/preser.svg", alt: "Preser" },
  { src: "/images/original.svg", alt: "Original" },
   { src: "/images/bangga.svg", alt: "Bangga" },
];

export function LogoCarousel() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Quality Assurance</h2>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8" style={{ minWidth: '150px' }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}