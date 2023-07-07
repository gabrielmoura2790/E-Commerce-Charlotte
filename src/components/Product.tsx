import { ButtonHTMLAttributes, useState } from "react";
import { Heart, Star, StarHalf } from "@phosphor-icons/react";

interface ProductsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  photo_url: string;
  name: string;
  value: number;
  description: string;
}

export function Product({
  photo_url,
  name,
  value,
  description,
  ...rest
}: ProductsProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-80 gap-2">
      <div className="flex h-64 bg-zinc-300 items-center justify-center rounded-lg relative overflow-hidden">
        <button
          className="bg-white absolute top-4 right-4 p-2 rounded-full z-10"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            weight={isFavorite ? "fill" : "regular"}
            className={`text-3xl ease-in-out duration-200 ${
              isFavorite ? "text-red-600" : "text-zinc-500"
            }`}
          />
        </button>

        {photo_url ? (
          <img
            src={photo_url}
            alt="Foto do produto"
            className="object-cover h-64 hover:scale-125 ease-in-out duration-200"
          />
        ) : (
          <span className="font-bold text-primary-900">FOTO DO PRODUTO</span>
        )}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xl font-bold basis-1/2">{name}</span>
        <span className="text-lg">R$ {value.toFixed(2)}</span>
      </div>

      <span className="font-light text-zinc-600">{description}</span>

      <div className="flex">
        <Star weight="fill" className="text-green-600 text-lg" />
        <Star weight="fill" className="text-green-600 text-lg" />
        <Star weight="fill" className="text-green-600 text-lg" />
        <StarHalf weight="fill" className="text-green-600 text-lg" />
        <Star className="text-green-600 text-lg" />
      </div>

      <button
        {...rest}
        className="border-2 border-primary-900 rounded-full w-48 py-2 hover:bg-primary-900 hover:text-white ease-in duration-200"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
