import { IResponse } from '@models/response';

export type Nullable<T> = T | undefined;

export interface IHierarchy {
  id: number;
  code: string;
  title: string;
  level: number;
  hasChildren: boolean;
  children: IHierarchy[];
}

export interface IMetas {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

export interface IPaginatedResponse<Entity, Extra = {}> extends IResponse<Entity> {
  metas: Extra & {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
  };
}
