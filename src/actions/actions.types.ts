export type ActionFormState<T extends object> = {
  errors: Partial<Record<keyof T, string[]>> & { general?: string };
};
