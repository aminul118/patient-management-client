/* eslint-disable @typescript-eslint/no-explicit-any */
export type { MenuGroup } from './admin-menu';
export type { Auth, IBanner, IBlog, IContact, IUser } from './api.types';
export type { MetaConfig, MetaProps, Routes } from './meta.types';
export type {
  Children,
  DivProps,
  IGlobalError,
  Params,
  SearchParams,
  SectionProps,
} from './next.types';

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
  meta?: IMeta;
}

export interface IModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface SuccessToastOptions {
  res: any;
  message?: string;
  onSuccess?: () => void;
  path?: string;
  modalClose?: () => void;
}
