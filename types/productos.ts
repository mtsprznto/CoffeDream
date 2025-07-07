export type ProductType = {
  id: number
  productName: string
  slug: string
  description?: string
  images: string[]
  price: number
  taste?: { name: string } | null
  origin?: { name: string } | null
  category?: {
    categoryName: string
    slug: string
    mainImage?: string
  } | null
}




export type ImageType = {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width: number;
    height: number;
    formats?: {
      large?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      thumbnail?: ImageFormat;
    };
    mime: string;
    size: number;
    url: string;
    previewUrl?: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
};

export type CategoryType = {
  id: number
  categoryName: string
  slug: string
  mainImage?: string | null
}
