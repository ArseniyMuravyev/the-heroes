import { FC } from "react";
import { RiSearchLine } from "@remixicon/react";

type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const Search: FC<Props> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full">
      <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search for a hero..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 border rounded-xl w-full md:w-1/2"
      />
    </div>
  );
};
