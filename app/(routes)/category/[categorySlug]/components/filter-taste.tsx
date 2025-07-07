import { useGetProductoField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterTasteProps = {
  setFilterTaste: (taste: string) => void;
};

export const FilterTaste = (props: FilterTasteProps) => {
  const { setFilterTaste } = props;
  const { result, loading }: FilterTypes = useGetProductoField();

  return (
    <div className="my-5">
      <p className="mb-3 font-bold">Tostado</p>
      {loading && result == null && <p>Cargando tostado...</p>}

      <RadioGroup onValueChange={(value) => setFilterTaste(value)}>
        {result.taste.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <RadioGroupItem value={item.name} id={item.name} />
            <Label htmlFor={item.name}>{item.name}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
