import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center px-0.5">
        <p>Sumergete en una experencia unica</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Café Exquisito
        </h4>
        <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="h-[350px] md:h-[600px] bg-[url('/3.png')] bg-cover mt-5"></div>
    </>
  );
};
