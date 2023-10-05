import Form from "@/components/form";
import { Twitter } from "@/components/icons";
import PhotoBooth from "@/components/photo-booth";
import { CountDisplay, GeneratedCount } from "./generated-count";
import { Suspense } from "react";
import Image from "next/image";

export default function FormRSC({
  prompt,
  pattern,
  image,
  newsletter,
}: {
  prompt?: string;
  pattern?: string;
  image: string | null;
  newsletter?: boolean;
}) {
  return (
    <div className="z-10 w-full max-w-xl px-2.5 xl:px-0">

      <Image
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem] mx-auto"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        src="/Flipkart-header-logo.png"
                alt="Logo image of Flipkart"
                width="100"
                height="100"
      >
      </Image>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        Generate beautiful Flipkart Art with one click.
      </p>
      <Form promptValue={prompt} patternValue={pattern} />
      <Suspense fallback={<CountDisplay />}>
        <GeneratedCount />
      </Suspense>
      <PhotoBooth image={image} />
    </div>
  );
}
