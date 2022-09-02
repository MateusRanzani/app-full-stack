import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import { useEffect, useState } from "react";
import Component from "../components/login-btn";
import Image from "next/image";
import api from "../utils/api";
import NewsComponent from "../components/newsComponent";

const NewsPage: NextPage = () => {
  const { data: session, status } = useSession();
  let [dataNews, setDataNews] = useState<any[]>([]);

  const fetchNews = () => {
    if (session !== undefined) {
      api("http://servicodados.ibge.gov.br/api/v3/noticias/")
        .then((res) => {
          dataNews = res.data.items;
          setDataNews(dataNews);
        })
        .catch((error) => {});
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="totalPageNews">
      {/* <div className="contentNewsPage flex flex-wrap justify-center">
        <NewsComponent news={dataNews} />
      </div> */}
    </div>
  );
};

export default NewsPage;
