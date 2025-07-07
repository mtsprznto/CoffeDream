import { useGetProductoField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterOriginProps = {
  setFilterOrigin: (origin: string) => void;
};

export const FilterOrigin = (props: FilterOriginProps) => {
  const { setFilterOrigin } = props;
  const { result, loading }: FilterTypes = useGetProductoField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Origen</p>
      {loading && result == null && <p>Cargando origen...</p>}

      <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
        {result.origin.map((origin) => (
          <div key={origin.id} className="flex items-center space-x-2">
            <RadioGroupItem value={origin.name} id={origin.id}></RadioGroupItem>
            <Label htmlFor={origin.name}>{origin.name}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
