// import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { News } from "./news";
// import { useMessage } from "./useMessage";

export const useNews = () => {
  // const {showMessage} = useMessage();

  // const [loading, setLoading] = useState(false);

  const [news, setNews] = useState<Array<News>>([]);

  const getNews = useCallback(() => {
    const url =
      "https://newsapi.org/v2/everything?q=bitcoin&from=2021-09-02&sortBy=publishedAt&apiKey=5b316991d5d44588a52e85671c97867a";
    let req = new Request(url);
    fetch(req).then(async (response) => {
      setNews(await response.json());
    });
  }, []);

  // const getNews = useCallback(() => {
  //   setLoading(true);
  //   axios
  //     .get<Array<News>>(
  //       "http://newsapi.org/v2/top-headlines?" +
  //         "country=ja&" +
  //         `apiKey=5b316991d5d44588a52e85671c97867a`
  //     )
  //     .then((res) => setNews(res.data))
  //     .catch(() => {
  //       console.log(news);
  //       // showMessage({title:"ニュース取得に失敗しました。",status:"error"});
  //     })
  //     .finally(() => {
  //       // setLoading(false);
  //     });
  // }, []);

  return { news, getNews };
  // return{getNews,news,loading};
};

// useEffect(()=>{
//   axios.get("http://newsapi.org/v2/top-headlines?country=ja&"+"apiKey=5b316991d5d44588a52e85671c97867a").then(()=>()).catch(()=>{}).finally(()=>{});
// },[])
