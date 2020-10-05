import { IMiddleware } from '@services/http/client';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import moment from 'moment';

export class LoggerMiddleware implements IMiddleware {
  environment = 'development';

  private static now() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }

  public onRequest(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> {
    const { baseURL, url, data, method } = config;

    console.log(
      `%c[REQUEST] %c[${LoggerMiddleware.now()}] %c${method.toUpperCase()} ${baseURL + url} ${data || ''}`,
      'color:green',
      'color:gray',
      'color:orange',
    );

    return config;
  }

  public onRequestError(error: any): any {
    const { config: { method, baseURL, url } } = error;

    console.log(
      `%c[REQUEST][ERROR] %c[${LoggerMiddleware.now()}] %c${method} %c${baseURL + url}`,
      'color:red',
      'color:gray',
      'color:orange',
      error?.response,
    );

    return Promise.reject(error);
  }

  public onResponse(response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> {
    const { config: { baseURL, url, method } } = response;

    console.log(
      `%c[RESPONSE] %c[${LoggerMiddleware.now()}] %c${method} ${baseURL + url}`,
      'color:green',
      'color:gray',
      'color:orange',
      response.data,
    );

    return response;
  }

  public onResponseError(error: any): any {
    const method = error?.response?.config?.method || '';
    const url = error?.response?.config?.baseURL + error?.response?.config?.url;
    console.log(
      `%c[RESPONSE][ERROR] %c[${LoggerMiddleware.now()}] %c${method.toUpperCase()} ${url || ''}`,
      'color:red',
      'color:gray',
      'color:orange',
      error?.response,
    );

    return Promise.reject(error);
  }
}
