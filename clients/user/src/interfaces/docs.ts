export interface ProductDoc {
  _id: string;
  name: string;
  images: string[];
  description: string;
  price: number;
  addons: {
    name: string;
    price: number;
  }[];
  spiceLevel: boolean;
  processingTime: number;
  disable?: boolean;
  category: string;
}

export interface CategoryDoc {
  _id: string;
  name: string;
  description: string;
  image: string;
}
