export interface ProductDoc {
  _id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  addons: {
    name: string;
    price: number;
  }[];
  spiceLevel: boolean;
  processingTime: number;
  disable?: boolean;
}

export interface CategoryDoc {
  _id: string;
  name: string;
  description: string;
  image: string;
}
