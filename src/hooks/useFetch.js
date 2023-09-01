import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return [data];
};

export const useGetApiToken = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    var AuthParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=bdc1a1c2a0bb4091bb8d73f137f1e0d6&client_secret=da14b9de445945ae9d8ca0e29781a7c9`,
    };
    fetch("https://accounts.spotify.com/api/token", AuthParams)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return [data];
};