import { useHook, ProductsProps } from "../hooks/context";
import { Trash, Plus, Minus } from "@phosphor-icons/react";

export function CartItem({
  id,
  name,
  variant,
  value,
  photo_url,
  qtyInCart,
}: ProductsProps) {
  const {
    handleRemoveProductInCart,
    handleAddQtyProduct,
    handleRemoveQtyProduct,
  } = useHook();

  return (
    <tr className="ease-linear duration-200">
      <td className="basis-full">
        <div className="flex items-center gap-4 ">
          <div className="bg-zinc-300 h-40 w-40 rounded-md flex items-center justify-center overflow-hidden">
            {photo_url ? (
              <img
                src={photo_url}
                alt="Foto do produto"
                className="object-contain h-64 scale-150"
              />
            ) : (
              <span>foto do produto</span>
            )}
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-xl">{name}</span>
            <span className="font-thin">{variant}</span>
          </div>
        </div>
      </td>

      <td className="basis-1/2">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-around border-2 py-3 px-2 rounded w-28">
            <button onClick={() => handleRemoveQtyProduct(id)}>
              <Minus
                className="ease-in-out duration-200 text-zinc-600 hover:text-red-500 text-lg"
                weight="bold"
              />
            </button>
            <span>{qtyInCart}</span>
            <button onClick={() => handleAddQtyProduct(id)}>
              <Plus
                className="ease-in-out duration-200 text-zinc-600 hover:text-primary-900 text-lg"
                weight="bold"
              />
            </button>
          </div>

          <button
            onClick={() => handleRemoveProductInCart(id)}
            className="flex items-center gap-1 hover:text-red-500 ease-in-out duration-200"
          >
            <Trash className="text-xl" />
            Remover
          </button>
        </div>
      </td>

      <td className=" w-44">
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold text-xl">
            R${(value * qtyInCart).toFixed(2)}
          </span>
        </div>
      </td>
    </tr>
  );
}
