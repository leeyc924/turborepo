export interface Category {
  id: string;
  krName: string;
  enName: string;
}

export interface Menu {
  id: string;
  krName: string;
  enName: string;
  price: number;
  desc: string;
  imgPath: string;
  categoryId: string;
}