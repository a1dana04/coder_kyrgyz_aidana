import { useEffect, useState } from "react";
import { API } from "../constants/intex";
import { useQuery } from "@tanstack/react-query";

const useFetch = (
  { url } = {
    url: `${API}/jobs`,
  }
) => {
 
  const { data, isLoading } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await fetch(url);
      const result = await response.json();
      if (result.statusCode === 200) {
        return result.data.sort((a: any, b: any) => b.id - a.id);
      } else {
        throw new Error("Failed to fetch data");
      }
    },
  });

 
  return { data, loading: isLoading };
  
  
};

export default useFetch;
