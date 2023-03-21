import useSWR from "https://esm.sh/swr@2.1.0?alias=react:preact/compat&deps=preact@10.11.0";

import fetcher from "../utils/fetcher.ts";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/me", fetcher);

  return { data, error, isLoading, mutate };
};

export default useCurrentUser;
