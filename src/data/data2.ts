import { ArticleType } from "../types/article";

// prettier-ignore
const DEFAULT_ITEMS: ArticleType[] = [
  { id: 1, name: "Computer", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 3, name: "Tablet", category: "Electronics", price: 500, inStock: true },
  { id: 4, name: "Book", category: "Literature", price: 20, inStock: true },
  { id: 5, name: "Notebook", category: "Literature", price: 15, inStock: true },
  { id: 6, name: "Magazine", category: "Literature", price: 8, inStock: false },
  { id: 7, name: "Bike", category: "Transportation", price: 300, inStock: false },
  { id: 8, name: "Scooter", category: "Transportation", price: 150, inStock: true },
  { id: 9, name: "Skateboard", category: "Transportation", price: 80, inStock: true },
  { id: 10, name: "Keyboard", category: "Accessories", price: 50, inStock: true },
  { id: 11, name: "Mouse", category: "Accessories", price: 25, inStock: true },
  { id: 12, name: "Headphones", category: "Accessories", price: 100, inStock: false },
  { id: 13, name: "Cup", category: "Kitchenware", price: 10, inStock: true },
  { id: 14, name: "Plate", category: "Kitchenware", price: 12, inStock: false },
  { id: 15, name: "Fork", category: "Kitchenware", price: 5, inStock: true },
];

export { DEFAULT_ITEMS };
