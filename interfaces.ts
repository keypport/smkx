export interface Company {
  '부스 위치': string;
  '카테고리': string;
  '업체': string;
  '링크': string;
  '썸네일': string;
  '전시 제품': string;
  '부스 이벤트': string;
  '판매 제품': string;
  '경품': string;
}

export interface Image {
  url: string;
  name: string;
}

export interface Prize {
  "시간": string;
  "경품": string;
  "브랜드": string;
  "수량": string;
}

export interface Product {
  '시간': string;
  '경품': string;
  '브랜드': string;
  '수량': string;
  '가격': string;
}

export interface ButtonName {
  'kr': string;
  'en': string;
}
