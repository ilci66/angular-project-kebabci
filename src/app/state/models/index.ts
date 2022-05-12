export interface Item {
    price: number,
    id: number,
    name: string
}

export interface Cart {
    totalPrice: number;
    names: string[];
}