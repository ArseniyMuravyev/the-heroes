import { FC } from "react";
import { RiSearchLine } from "@remixicon/react";

export const Search: FC = () => {
  return (
    <button className="text-white">
      <RiSearchLine size={24} />
    </button>
  );
};
