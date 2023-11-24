export const useSearchParam = (key: string, value: string): void => {
  const {
    location: { protocol, pathname, host, search },
  } = window;

  const searchParams = new URLSearchParams(search);
  const encodedSearchQuery = encodeURIComponent(value);
  searchParams.set(key, encodedSearchQuery);
  const url = `${protocol}//${host}${pathname}?${searchParams.toString()}`;
  window.history.replaceState(
    {
      path: url,
    },
    '',
    url,
  );
};
