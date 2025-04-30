interface Category {
  category_id: string,
  name: string,
  created_at: string,
};

// interface Collection {
//   collection_id: string,
//   name: string,
//   description: string,
//   image_url: string,
//   created_at: string,
// };

interface Image {
  color: string,
  image_url: string,
};

interface Inventory {
  sku: string,
  color: string,
  size: number | string | null,
  list_price: number,
  discount: number | null, // not sure about the type
  discount_percentage: number,
  sale_price: number,
  sold: number,
  stock: number,
};

interface PriceRange {
  highest: number,
  lowest: number,
}

export interface ProductInfo {
  product_id: string,
  name: string,
  description: string,
  category: Category,
  created_at: string,
  colors: string[],
  images: Image[],
  inventory: Inventory[],
  priceRange: PriceRange,
  rating: number,
  reviews: number,
  sizes: number[] | string[],
  sold: number,
};