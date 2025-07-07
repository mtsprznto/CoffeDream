import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { components } from "./categories-static";

export const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu></Menu>
      </PopoverTrigger>
      <PopoverContent>
        {components.map((component) => (
          <Link href={component.href} className="block" key={component.title}>
            {component.title}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};
