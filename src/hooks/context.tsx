import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";

interface ContextProviderProp {
  children: ReactNode;
}

export interface ProductsProps {
  id: string;
  photo_url: string;
  name: string;
  variant: string;
  value: number;
  description: string;
  qtyInCart: number;
}

export interface OrderProps {
  subTotal: number;
  discont: number;
  total: number;
}

interface ContextProps {
  cart: ProductsProps[];
  order: OrderProps;
  setOrder: (value: OrderProps) => void;
  orderStorage: (data: OrderProps) => void;
  handleAddProductInCart: (item: ProductsProps) => void;
  handleRemoveProductInCart: (id: string) => void;
  handleAddQtyProduct: (id: string) => void;
  handleRemoveQtyProduct: (id: string) => void;
}

export const ContextRoot = createContext({} as ContextProps);

export function ContextProvider({ children }: ContextProviderProp) {
  const [cart, setCart] = useState<ProductsProps[]>([]);
  const [order, setOrder] = useState<OrderProps>({
    subTotal: 0,
    discont: 0,
    total: 0,
  });

  useEffect(() => {
    function loadStorage() {
      const cartStorage = localStorage.getItem("@charlotte:cart");
      const orderStorage = localStorage.getItem("@charlotte:order");

      if (cartStorage) {
        const cartData = JSON.parse(cartStorage) as ProductsProps[];
        setCart(cartData);
      }

      if (orderStorage) {
        const orderData = JSON.parse(orderStorage) as OrderProps;
        setOrder(orderData);
      }
    }

    loadStorage();
  }, []);

  function handleAddProductInCart(item: ProductsProps) {
    const alreadyAdded = cart.find((product) => product.id === item.id);

    if (alreadyAdded) {
      console.log("Produto já está no seu carrinho.");
      return;
    }

    const newOrder: OrderProps = {
      subTotal: (order.subTotal += item.value),
      discont: order.discont,
      total: order.subTotal - order.discont,
    };

    item.qtyInCart = 1;

    setOrder(newOrder);
    orderStorage(newOrder);
    setCart([...cart, item]);
    cartStorage([...cart, item]);

    window.scrollTo(0, 0);
  }

  function handleRemoveProductInCart(id: string) {
    const product = cart.find((product) => product.id === id);

    if (!product) {
      console.log("Produto não encontrado");
      return;
    }

    const newOrder: OrderProps = {
      subTotal: (order.subTotal -= product.value * product.qtyInCart),
      discont: order.discont,
      total: order.subTotal - order.discont,
    };

    const newCart = cart.filter((product: ProductsProps) => product.id !== id);

    setOrder(newOrder);
    orderStorage(newOrder);
    setCart(newCart);
    cartStorage(newCart);
  }

  function handleAddQtyProduct(id: string) {
    const product = cart.find((item) => item.id === id);

    if (!product) {
      console.log("Produto não encontrado.");
      return;
    }

    if (product.qtyInCart === 10) {
      console.log("Limite de produtos atingido.");
      return;
    }

    const newOrder: OrderProps = {
      subTotal: (order.subTotal += product.value),
      discont: order.discont,
      total: order.subTotal - order.discont,
    };

    const newCart: ProductsProps[] = cart.map((item) => {
      if (item.id === product.id) {
        item.qtyInCart += 1;
      }

      return item;
    });

    setOrder(newOrder);
    orderStorage(newOrder);
    setCart(newCart);
    cartStorage(newCart);
  }

  function handleRemoveQtyProduct(id: string) {
    const product = cart.find((item) => item.id === id);

    if (!product) {
      console.log("Produto não encontrado.");
      return;
    }

    if (product.qtyInCart === 1) {
      console.log("Não é possível diminuir a quantidade do produto.");
      return;
    }

    const newOrder: OrderProps = {
      subTotal: (order.subTotal -= product.value),
      discont: order.discont,
      total: order.subTotal - order.discont,
    };

    const newCart: ProductsProps[] = cart.map((item) => {
      if (item.id === product.id) {
        item.qtyInCart -= 1;
      }

      return item;
    });

    setOrder(newOrder);
    orderStorage(newOrder);
    setCart(newCart);
    cartStorage(newCart);
  }

  function orderStorage(data: OrderProps) {
    localStorage.setItem("@charlotte:order", JSON.stringify(data));
  }

  function cartStorage(data: ProductsProps[]) {
    localStorage.setItem("@charlotte:cart", JSON.stringify(data));
  }

  return (
    <ContextRoot.Provider
      value={{
        cart,
        order,
        setOrder,
        orderStorage,
        handleAddProductInCart,
        handleRemoveProductInCart,
        handleAddQtyProduct,
        handleRemoveQtyProduct,
      }}
    >
      {children}
    </ContextRoot.Provider>
  );
}

export function useHook() {
  const context = useContext(ContextRoot);

  return context;
}
