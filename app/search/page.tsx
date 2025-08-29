import SearchContent from "@/component/SearchContent";
import Spinner from "@/component/Spinner";
import { Suspense } from "react";

const SearchedMoviesPage = () => {

  return (
    <Suspense fallback={<Spinner />}>
      <SearchContent />
    </Suspense>
    
  );
};

export default SearchedMoviesPage;
