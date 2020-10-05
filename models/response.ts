export interface IResponse<Entity> {
  succeed: boolean;
  message: string;
  results: Entity;
  metas: { [key: string]: unknown };
}

export interface IMessages {
  [key: string]: string[];
}

export interface IState<Entity> {
  loading: boolean;
  error?: boolean;
  response?: Entity;
}
