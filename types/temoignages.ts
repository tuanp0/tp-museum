export interface TemoignagesInterface {
  temoignages: TemoignageItemInterface[];
}

export interface TemoignageItemInterface {
  id: number;
  x: number;
  y: number;
  url: string;
  alt: string;
  width: number;
  height:number;
  author: string;
  zIndex: number;
  rotation: number;
  message: string;
  font: number;
}