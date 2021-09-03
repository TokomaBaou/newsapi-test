import { Wrap, WrapItem } from "@chakra-ui/react";

import { memo, useEffect, VFC } from "react";

import { useNews } from "./useNews";

import { NewsCard } from "./NewsCard";

export const Home: VFC = memo(() => {
  const { getNews, news } = useNews();

  //画面表示にgetNews起動（最初の１回）
  useEffect(() => getNews(), []);

  return (
    <>
      <Wrap className="App">
        {news.map((articles) => (
          <WrapItem key={articles.id} mx="auto">
            <NewsCard
              id={articles.id}
              urlToImage={articles.urlToImage}
              title={articles.title}
              description={articles.description}
              name={articles.name}
              url={articles.url}
            />
          </WrapItem>
        ))}
        <h1>News</h1>
      </Wrap>
    </>
  );
});
