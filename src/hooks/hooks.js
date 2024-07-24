import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/const/data";

export const useFetchMultipleAPIs = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        const responses = await Promise.all(
          urls.map((url) => axios.get(`${BASE_URL}${url}`))
        );
        const resultData = responses.map((response) => response.data);
        setData(resultData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAPIs();
  }, [...urls]);

  return { data, loading, error };
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${BASE_URL}${url}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
