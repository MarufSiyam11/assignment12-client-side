import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import AnotherCategory from '../Category/AnotherCategory'
import News from "../../Shared/News/News";
// import NewsItem from "../../NewsItem/NewsItem";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Category></Category>
        <AnotherCategory></AnotherCategory>
        {/* <NewsItem></NewsItem> */}
        <News></News>
        </div>
    );
};

export default Home;