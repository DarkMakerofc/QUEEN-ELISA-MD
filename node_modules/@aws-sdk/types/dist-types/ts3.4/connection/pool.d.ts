export interface ConnectionPool<T> {
  poll(): T | void;
  offerLast(connection: T): void;
  destroy(connection: T): void;
  [Symbol.iterator](): Iterator<T>;
}
export interface CacheKey {
  destination: string;
}
