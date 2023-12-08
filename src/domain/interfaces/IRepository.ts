export interface IRepository<T> {
  find: (criteria: any) => Promise<T[] | T | null>
  save: (data: any) => Promise<T | void | null>
}
