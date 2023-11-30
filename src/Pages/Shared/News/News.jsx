import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
const [news, setNews] =useState([]);
useEffect(() =>{
    fetch('news.json')
    .then(res =>res.json())
    .then(data =>
        setNews(data)
   )
},[])
console.log(news)
    return (
        <div>
          
            {
                news?.map(item => <NewsItem
               key={item._id}
               item={item} 
                ></NewsItem>)
            }
        </div>
    );
};

export default News;