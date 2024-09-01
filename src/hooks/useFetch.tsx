import { log } from "console";
import { useEffect, useState } from "react";
import { FaLess } from "react-icons/fa";

import { API } from "../constants/intex"




const useFetch = (
  { url } = {
    url: `${API}/jobs`,
  }
) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url); const data = await response.json();
      if (data.statusCode === 200) {
        console.log(data);

        setData(data.data.sort((a: any, b: any) => b.id - a.id));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useFetch;
