import { FC } from "react";

import searchIcon from "../../assets/icons/search.svg";
import { Input } from "../../ui/input";

interface SearchProps {
  setSearch: (search: string) => void;
  search: string;
}

export const Search: FC<SearchProps> = ({ setSearch, search }) => {

  return (
      <div className="mb-4">
        <Input value={search} onChange={(value) => setSearch(value)} placeholder="Найти розы" icon={searchIcon} />
      </div>
  );
};