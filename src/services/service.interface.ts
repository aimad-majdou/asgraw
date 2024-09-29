export interface Service<T, TCreateInput, TUpdateInput> {
  getAll(): Promise<T[]>;
  getOne(slug: string): Promise<T | null>;
  create(data: TCreateInput): Promise<T>;
  update(id: string, data: TUpdateInput): Promise<T>;
  delete(id: string): Promise<T>;
}
