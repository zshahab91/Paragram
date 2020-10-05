import { IMiddleware } from '@services/http/client';
import { AxiosRequestConfig } from 'axios';
import nookies from 'nookies';

export class AuthMiddleware implements IMiddleware {
  onRequest(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> {
    if (process.browser === true) {
      const { token } = nookies.get();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  }

  onResponseError(error: any): any {
    if (process.browser === true && error.response.status === 401 && error.response.config.url.includes('/auth/otp') === false) {
      nookies.destroy(null, 'token')
      window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  }
}
