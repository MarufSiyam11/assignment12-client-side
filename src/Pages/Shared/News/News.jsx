import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {
const [news, setNews] =useState([]);
useEffect(() =>{
    fetch('http://localhost:5000/news')
    .then(res =>res.json())
    .then(data =>
        setNews(data)
   )
},[])
console.log(news)
    return (
        <div>
          <h3 className="text-4xl text-center font-bold">All Articles </h3>
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