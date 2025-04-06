export type ReplaceLabelKey<T extends { label: string }, NewKey extends string> =
  Omit<T, 'label'> & { [K in NewKey]: string };