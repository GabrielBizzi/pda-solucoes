import React, { CSSProperties, ReactElement } from 'react';
import { GroupedOptionsType, OptionsType, OptionTypeBase } from 'react-select';

export type PropType = number | string;

export interface IColumn<T> {
  title: string;
  delimiter?: string;
  cssProps?: CSSProperties;
  cssText?: CSSProperties;
  cssRow?: CSSProperties;
  cssTitle?: CSSProperties;
  formatter?: (row: IRow<T>) => string;
  orderable?: boolean;
  id?: PropType;
  rowSpan?: boolean | number;
  props: PropType[];
  className?: React.HTMLAttributes<HTMLDivElement> | undefined;
  filterRef?: React.MutableRefObject<HTMLInputElement | undefined>;
  type?:
    | 'currency'
    | 'number'
    | 'date'
    | 'string'
    | 'boolean'
    | 'datetime'
    | 'time';
  trunc?: number;
  renderItem?: (row: IRow<T>) => string | ReactElement;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IRow<T = any> = T;

export type IAction<T> = {
  onClick: (
    row: IRow<T>[],
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
  renderItem: () => string | ReactElement;
};
export type IRowAction<T> = {
  onClick: (
    row: IRow<T>,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
  renderItem: (row?: IRow<T>) => string | ReactElement;
};

export interface ITableProps<T> {
  columns: Array<IColumn<T>>;
  rowActions?: Array<IRowAction<T>>;
  rows: Array<IRow<T>>;
  actions?: Array<IAction<T>>;
  loading?: boolean;
  exportList?: boolean;
  exportOptions?(): React.ReactNode;
  defaultSort?: string;
  selectBox?: boolean;
  hidePagination?: boolean;
  paginationOptions?:
    | GroupedOptionsType<OptionTypeBase>
    | OptionsType<OptionTypeBase>
    | undefined;
  defaultPage?: number;
  defaultNumberOfRows?: number;
  onDeleteRow?: (
    row: IRow<T>,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onEditRow?: (
    row: IRow<T>,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export interface TableCellProps<T> {
  column: IColumn<T>;
  row: IRow<T>;
  rowSpan?: number;
}
