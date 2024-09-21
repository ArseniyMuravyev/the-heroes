import { FC } from "react";
import { RiSearchLine } from "@remixicon/react";

type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const Search: FC<Props> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full md:w-1/2 flex justify-center items-center">
      <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-900" />

      <input
        type="text"
        placeholder="Search for a hero..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-transparent p-2 pr-10 border rounded-xl w-full focus:outline-none border-zinc-900 dark:border-zinc-300 border-1"
      />
    </div>
  );
};
