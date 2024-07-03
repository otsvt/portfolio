import { useState } from "react";
import { Pages } from "../types/enums";

export const usePages = () => {
  const [currentPage, setCurrentPage] = useState(Pages.Menu);
  const changePage = (address: Pages) => setCurrentPage(address);

  return { currentPage, changePage };
};
