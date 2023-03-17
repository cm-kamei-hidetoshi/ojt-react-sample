let data: { [key: string]: any } = {};

export function useQuery<T>(url: string) {
  if (data[url] === undefined) {
    throw fetch(url)
      .then((res) => res.json())
      .then((res) => {
        data[url] = res;
      });
  }

  return data[url] as T;
}
