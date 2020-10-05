import { destroyCookie, parseCookies, setCookie } from 'nookies';

export function saveToken(token: string, maxAge: number): void {
  setCookie(null, 'token', token, {
    maxAge,
    path: '/',
  });
}

export function removeToken(): void {
  destroyCookie(null, 'token', {
    path: '/',
  });
}

export function readToken(): string {
  const cookies = parseCookies();
  // @ts-ignore
  return cookies.get('token');
}
