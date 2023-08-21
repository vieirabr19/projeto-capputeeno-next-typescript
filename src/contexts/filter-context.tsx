"use client";

import { ReactNode, createContext, useState } from "react";

import { FilterTypes } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
  setPriority: (value: PriorityTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState(FilterTypes.ALL);
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setPage,
        setType,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
