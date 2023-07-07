import { AirplaneTilt } from "@phosphor-icons/react";

import { NavBar } from "../components/NavBar";
import { useHook } from "../hooks/context";
import { CartItem } from "../components/CartItem";
import { Footer } from "../components/Footer";

export function Cart() {
  const { cart, order } = useHook();

  return (
    <div className="flex flex-col">
      <div className="bg-primary-900 flex items-center justify-center gap-2 p-1">
        <span className="text-primary-100">FRETE GRATIS PARA TODO BRASIL</span>
        <AirplaneTilt className="text-primary-100 text-xl" />
      </div>

      <NavBar />

      <section className="m-8 min-h-screen">
        <h2 className="font-bold text-primary-900 text-2xl self-start">
          Carrinho de compras
        </h2>

        <div
          className={`flex flex-row p-8 ${
            cart.length > 0 ? "justify-center" : "justify-between items-center"
          }`}
        >
          {cart.length > 0 ? (
            <table className="table-auto basis-full border-separate border-spacing-y-8">
              <thead>
                <tr>
                  <th className="basis-full text-left">PRODUTO</th>
                  <th className="basis-1/4">QUANTIDADE</th>
                  <th className="basis-1/4">VALOR</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      photo_url={item.photo_url}
                      name={item.name}
                      variant={item.variant}
                      value={item.value}
                      qtyInCart={item.qtyInCart}
                      description={item.description}
                    />
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="w-full text-center">
              <span className="font-bold text-2xl">
                Carrinho de compras vazio!
              </span>
            </div>
          )}
          <div className="flex flex-col gap-4 items-center justify-center p-8 border-2 border-primary-900/20 h-60 basis-1/2 rounded mt-8">
            <div className="flex w-full justify-between">
              <span className="text-xl text-zinc-500">Subtotal</span>
              <span className="text-2xl text-zinc-900">
                R${order.subTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex w-full justify-between">
              <span className="text-xl text-zinc-500">Desconto</span>
              <span className="text-2xl text-zinc-500">R${order.discont}</span>
            </div>

            <div className="flex h-1 w-full bg-primary-900/20">
              <hr />
            </div>

            <div className="flex w-full justify-between">
              <span className="text-xl text-zinc-500">Total</span>
              <span className="text-2xl text-zinc-900">
                R${order.total.toFixed(2)}
              </span>
            </div>

            <button className="bg-primary-900 hover:bg-primary-900/80 w-full py-2 text-white text-xl font-bold rounded-lg ease-in-out duration-200">
              Finalizar compra
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
