import { DirectionAwareHover } from "@/components/ui/HoverCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full items-center justify-center">
      <DirectionAwareHover imageUrl="/images/alexander-the-great.jpg">
        <p className="font-bold text-xl">Alexander The Great</p>
      </DirectionAwareHover>
    </main>
  );
}
