/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SelectItem {
  codigo?: number | string;
  descricao?: string;
  label?: string;
  value?: number | string;
  uf?: string;
  nome?: string;
}

export const transformToSelect = (array: any) => {
  return array.map((item: SelectItem) => ({
    code: item.codigo || item.uf,
    description: item.descricao || item.nome,
    label: item.descricao || item.nome,
    value: item.codigo || item.uf,
  }));
};
