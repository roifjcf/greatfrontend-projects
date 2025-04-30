'use client';

import { useEffect, useState } from "react";
import "./styles.css";

import { getLatestArrivals } from "./helper";

export default function Page() {

  const [latestProducts, setLatestProducts] = useState(null);
  
  useEffect(() => {
    
    getLatestArrivals()
    .then((data) => {
      console.log(data);
    })
    .catch((error)=> {
      console.log(error)
    });

  }, []);
  
  return (
  <main>

  </main>
  );
}