import axios from 'axios';

/**
 * 環境変数NEXT_PUBLIC_API_URLが定義されていない場合、エラーをスローします。
 */
if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

/**
 * axiosインスタンスを作成し、ベースURLとヘッダーを設定します。
 * ベースURLは環境変数NEXT_PUBLIC_API_URLから取得します。
 * ヘッダーにはContent-Typeとして'application/json'を設定します。
 */
export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
