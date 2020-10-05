/* eslint-disable camelcase */
import client from '@services/http';
import { AxiosResponse } from 'axios';
import { IPaginatedResponse } from '@models/paginated.response';

interface IOtpResponse {
  expirationTimeStamp: number;
}

interface IVerifyResponse {
  account: {
    addresses: string[];
    family?: string;
    name?: string;
    id: number;
    isProfileCompleted: boolean;
  };
  token: {
    access_token: string;
    expires_in: number;
    token_type: string;
  };
}

class AuthApiService {
  public static otp(body: {
    mobile: number;
  }): Promise<AxiosResponse<IPaginatedResponse<IOtpResponse>>> {
    return client.request({ method: 'POST', url: '/auth/otp/send', data: body });
  }

  public static verify(body: {
    mobile: string;
    code: number | string;
  }): Promise<AxiosResponse<IPaginatedResponse<IVerifyResponse>>> {
    return client.request({ method: 'POST', url: '/auth/otp/verify', data: body });
  }

}

export default AuthApiService;
