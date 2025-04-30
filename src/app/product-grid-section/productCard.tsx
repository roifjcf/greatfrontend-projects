'use client';

import { useState } from "react";
import { ProductInfo } from "./type";


interface Props {
  info: ProductInfo,
  key: number
};

export default function ProductCard(props: Props) {

  const [currentColor, setCurrentColor] = useState<string>(props.info.colors[0]);
  const capitalizeWords = (s: string) => {
    return s
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  };

  const getPriceByColor = (currColor: string, mode: "list_price" | "sale_price") => {
    for (const i of props.info.inventory) {
      if (i.color === currColor) {return i[mode];}
    }
    return "";
  };
  const showDiscount = getPriceByColor(currentColor, "sale_price") < getPriceByColor(currentColor, "list_price");

  const getImageByColor = (currColor: string) => {
    /**
     * Gets the first image of the specified color from images[]
     */
    for (const i of props.info.images) {
      if (i.color === currColor) {return i.image_url;}
    }
    return "";
  };

  return (
  <div className="productcard-container">
    <img
      className="product-image"
      src={getImageByColor(currentColor)}
      alt="product image"
      draggable={false}
      loading="lazy"
    />
    
    <p>{capitalizeWords(currentColor)}</p>
    <p className="product-name">{props.info.name}</p>

    <div className="price-container">
      {showDiscount && <p className="current-price">${getPriceByColor(currentColor, "sale_price")}</p>}
      <p className={showDiscount?"old-price":"current-price"}>${getPriceByColor(currentColor, "list_price")}</p>
    </div>

    <div className="color-buttons">
      {props.info.colors.map((c, i) =>
      <button key={i} className="color-dot" style={{background: c}} onClick={()=>setCurrentColor(c)}></button>)}
    </div>
  </div>);
}