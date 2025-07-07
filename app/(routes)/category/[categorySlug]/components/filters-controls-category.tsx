import { FilterOrigin } from "./filter-origin";
import { FilterTaste } from "./filter-taste";

type FilterControlsCategoryProps = {
  setFilterOrigin: (origin: string) => void;
  setFilterTaste: (taste: string) => void;
};

export const FiltersControlsCategory = (props: FilterControlsCategoryProps) => {
  const { setFilterOrigin, setFilterTaste } = props;

  return (
    <div className="sm:w-[350px] sm:mt-5">
      <FilterOrigin setFilterOrigin={setFilterOrigin}></FilterOrigin>
      <FilterTaste setFilterTaste={setFilterTaste}></FilterTaste>
    </div>
  );
};
