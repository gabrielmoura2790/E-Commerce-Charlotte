import { useNavigate } from "react-router-dom";

import {
  FlowerLotus,
  MagnifyingGlass,
  User,
  ShoppingCart,
} from "@phosphor-icons/react";
import { useHook } from "../hooks/context";

export function NavBar() {
  const navigate = useNavigate();

  const { cart } = useHook();

  return (
    <nav
      className="flex justify-start items-center gap-4 py-4 px-8"
      id="navbar"
    >
      <button
        onClick={() => navigate("/")}
        className="flex items-center font-bold mr-12 text-xl text-primary-900  gap-2"
      >
        <FlowerLotus className="text-primary-900 text-3xl" />
        CHARLOTTE
      </button>
      <a
        href=""
        className="text-primary-900 text-md hover:text-primary-500 ease-in duration-200"
      >
        Categorias
      </a>
      <a
        href=""
        className="text-primary-900 text-md hover:text-primary-500 ease-in duration-200"
      >
        Ofertas
      </a>
      <a
        href=""
        className="text-primary-900 text-md hover:text-primary-500 ease-in duration-200"
      >
        Produtos
      </a>

      <div className="flex items-center bg-background-100 px-4 py-2 rounded-full gap-2">
        <input
          type="text"
          className="bg-transparent text-primary-900 focus:outline-none focus:outline-0 w-48 hover:w-80 duration-200 transition-all ease-in-out"
          placeholder="Buscar produtos"
        />
        <button>
          <MagnifyingGlass className="text-xl text-primary-900" />
        </button>
      </div>

      <button className="flex items-center gap-2 ml-auto">
        <User className="text-3xl" />
        Sua conta
      </button>

      <button
        className="flex items-center gap-2"
        onClick={() => navigate("/cart")}
      >
        <div className="relative">
          {cart.length > 0 && (
            <span className="absolute right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-900"></span>
            </span>
          )}
          <ShoppingCart className="text-3xl" />
        </div>
        Carrinho
      </button>
    </nav>
  );
}
