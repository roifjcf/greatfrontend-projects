'use client';

import "./styles.css";

import { useEffect, useState } from "react";
import { getLatestArrivals } from "./helper";
import { ProductInfo } from "./type";

import ProductCard from "./productCard";

export default function Page() {

  const [latestProducts, setLatestProducts] = useState<ProductInfo[]>([]);
  
  useEffect(() => {
    
    getLatestArrivals()
    .then((data) => {
      // console.log(data);
      let product = [];
      for (const d of data["data"]) {
        const newProductData: ProductInfo = {
          product_id: d["product_id"],
          name: d["name"],
          description: d["description"],
          category: d["category"],
          created_at: d["created_at"],
          colors: d["colors"],
          images: d["images"],
          inventory: d["inventory"],
          priceRange: d["priceRange"],
          rating: d["rating"],
          reviews: d["reviews"],
          sizes: d["sizes"],
          sold: d["sold"]
        };
        product.push(newProductData);
      }
      setLatestProducts(product);
    })
    .catch((error)=> {
      console.log(error)
    });

  }, []);
  return (
  <main>
    <div className="container">
      <div className="container-top">
        <h3>Latest Arrivals</h3>
        <button>View all</button>
      </div>
      <div className="container-bottom">
        {latestProducts.map((p, i) => <ProductCard key={i} info={p}/>)}
      </div>
    </div>
  </main>
  );
}