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

export interface TodoItem {
  id: string;
  title: string;
  desc: string;
  modId: string;
  modDt: string;
  regId: string;
  regDt: string;
}