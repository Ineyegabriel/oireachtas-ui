import { QueryPayload } from 'src/types/http';

/**
 * Simple Util function to builder url with query parameters
 * ```js
 * urlBuilder('www.baseurl.com/',{
 * keyword: 'asdf
 * testKey: triple
 * })
 * // returns: www.baseurl.com/?keyword=asdf&testKey=triple
 * ```
 * @param baseUrl
 * @param query
 * @returns
 */
export const urlBuilder = (baseUrl: string, query: QueryPayload) => {
  if (!baseUrl) {
    throw new Error('baseUrl is required');
  }

  if (typeof query !== 'object') {
    throw new Error('query must be an object');
  }

  const queryParams = Object.entries(query)
    .map(([key, value]) => (value === undefined ? null : `${key}=${value}`))
    .filter(Boolean) // Remove null values
    .join('&');

  return `${baseUrl}?${queryParams}`;
};
