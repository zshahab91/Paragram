import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IMiddleware<R = {}> {
  environment?: string;

  onRequest?(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig>;

  onRequestError?(error: any): any;

  onResponse?(response: AxiosResponse<R>): AxiosResponse<R> | Promise<AxiosResponse<R>>;

  onResponseError?(error: any): any;
}

/**
 * Http client service
 */
export class Client {
  private readonly _adapter: AxiosInstance;

  private readonly _middlewares: Set<IMiddleware>;

  private _isBooted: boolean = false;

  public constructor(options?: AxiosRequestConfig) {
    this._middlewares = new Set();
    this._adapter = Axios.create(options);
  }

  public get middlewares(): Set<IMiddleware> {
    return this._middlewares;
  }

  public boot(): void {
    this._middlewares.forEach((mw) => {
      const env = mw.environment || process.env.NODE_ENV;
      if (env === process.env.NODE_ENV) {
        this._adapter.interceptors.request.use(mw.onRequest, mw.onRequestError);
        this._adapter.interceptors.response.use(mw.onResponse, mw.onResponseError);
      }
    });

    this._isBooted = true;
  }

  public request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    if (!this._isBooted) {
      throw new Error('Http client not yet booted!');
    }

    return this._adapter.request(config);
  }
}
