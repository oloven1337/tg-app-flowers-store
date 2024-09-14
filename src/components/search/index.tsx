import { useState } from "react";

import searchIcon from "../../assets/icons/search.svg";
import { Input } from "../../ui/input";

export const Search = () => {
  const [search, setSearch] = useState("");
  
  return (
      <div className="mb-4">
        <Input value={search} onChange={(value) => setSearch(value)} placeholder="Найти розы" icon={searchIcon} />
      </div>
  );
};