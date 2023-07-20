import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotalPrice: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeItemQuantityCart: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFE_ITEMS_STORAGE_KEY = "coffeDelivery: cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length;
  const cartItemsTotalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price + cartItem.quantity;
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExists = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExists].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeItemQuantityCart(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeExistInCart >= 0) {
        const item = draft[coffeExistInCart];
        draft[coffeExistInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeExistInCart >= 0) {
        draft.splice(coffeExistInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem(COFFE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeItemQuantityCart,
        removeCartItem,
        cartItemsTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
