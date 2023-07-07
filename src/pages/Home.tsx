import { useHook } from "../hooks/context";
import { AirplaneTilt } from "@phosphor-icons/react";

import { Product } from "../components/Product";
import { NavBar } from "../components/NavBar";

import { products } from "../utils/products";
import { mostPopular } from "../utils/mostPopular";
import { Footer } from "../components/Footer";

import banner from "../assets/Banner.png";

export function Home() {
  const { handleAddProductInCart } = useHook();

  return (
    <div className="flex flex-col">
      <div className="bg-primary-900 flex items-center justify-center gap-2 p-1">
        <span className="text-primary-100">FRETE GRATIS PARA TODO BRASIL</span>
        <AirplaneTilt className="text-primary-100 text-xl" />
      </div>

      <NavBar />

      <section className="bg-primary-900 m-8 h-60 rounded flex items-center justify-center overflow-hidden">
        <img src={banner} alt="Banner" />
      </section>

      <section className="m-8">
        <h2 className="font-bold text-primary-900 text-2xl self-start">
          Ofertas
        </h2>

        <div className="flex overflow-x-scroll no-scrollbar p-4">
          <div className="flex flex-nowrap space-x-10">
            {mostPopular.map((item) => {
              return (
                <Product
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  value={item.value}
                  photo_url={item.photo_url}
                  onClick={() => handleAddProductInCart(item)}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex flex-col m-8 items-center gap-4">
        <h2 className="font-bold text-primary-900 text-2xl self-start">
          Produtos
        </h2>

        <div className="grid grid-cols-4 gap-10">
          {products.map((item) => {
            return (
              <Product
                key={item.id}
                name={item.name}
                description={item.description}
                value={item.value}
                photo_url={item.photo_url}
                onClick={() => handleAddProductInCart(item)}
              />
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
