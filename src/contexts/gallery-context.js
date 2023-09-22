import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    isLike: false,
  },
];

const GalleryContext = createContext();

function GalleyProvider(props) {
  const [storedValue, setValue] = useLocalStorage("photos", fakeData);
  const [storedCart, setCart] = useLocalStorage("cart", []);
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart || storedCart);
  const [favoriteList, setFavoriteList] = useState([]);
  const value = {
    photos,
    cartItems,
    favoriteList,
    setPhotos,
    setCartItems,
    setFavoriteList,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };

  function toggleFavorite(photoId) {
    const updatedArr = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isLike: !photo.isLike };
      }
      return photo;
    });
    setPhotos(updatedArr);
    setValue(updatedArr);
  }

  function addToCart(photo) {
    setCartItems((prevItem) => {
      const isExited = prevItem.some((item) => item.id === photo.id);
      if (isExited) {
        setCart([...prevItem]);
        return [...prevItem];
      }
      setCart([...prevItem, photo]);
      return [...prevItem, photo];
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => {
      let result = prevItems.filter((item) => item.id !== id);
      setCart(result);
      return result;
    });
  }
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleyProvider");
  return context;
}

export { GalleyProvider, useGallery };
