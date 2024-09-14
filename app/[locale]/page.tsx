import { FocusCards } from "@/components/ui/FocusCard";
import { heroCards } from "@/data";

export default function Home() {
  return (
    <>
      <FocusCards cards={heroCards} />
    </>
  );
}