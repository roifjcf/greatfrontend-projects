'use client';

import { useMemo, useState } from "react";
import { ProductInfo } from "./type";


interface Props {
  info: ProductInfo,
};

const capitalizeWords = (s: string) => s.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");


export default function ProductCard(props: Props) {

  const [currentColor, setCurrentColor] = useState<string>(props.info.colors[0]);

  const getPriceByColor = (currColor: string, mode: "list_price" | "sale_price") => {
    for (const i of props.info.inventory) {
      if (i.color === currColor) {return i[mode];}
    }
    return "";
  };  
  const showDiscount = getPriceByColor(currentColor, "sale_price") < getPriceByColor(currentColor, "list_price");

  const imgURL = useMemo(() => {
    return props.info.images.find(i=>i.color===currentColor)?.image_url ?? "";
  }, [currentColor, props.info.images]);
  const originalPrice = useMemo(()=> getPriceByColor(currentColor, "list_price"), [currentColor, getPriceByColor]);
  const salePrice = useMemo(()=> getPriceByColor(currentColor, "sale_price"), [currentColor, getPriceByColor]);


  return (
  <div className="productcard-container">
    <img
      className="product-image"
      src={imgURL}
      alt="product image"
      draggable={false}
      loading="lazy"
    />
    
    <p>{capitalizeWords(currentColor)}</p>
    <p className="product-name">{props.info.name}</p>

    <div className="price-container">
      {showDiscount && <p className="current-price">${salePrice}</p>}
      <p className={showDiscount?"old-price":"current-price"}>${originalPrice}</p>
    </div>

    <div className="color-buttons">
      {props.info.colors.map((c, i) =>
      <button key={i} className="color-dot" style={{background: c}} onClick={()=>setCurrentColor(c)}></button>)}
    </div>
  </div>);
}