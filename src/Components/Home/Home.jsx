import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
    const lists = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <CategoryList lists={lists}></CategoryList>
        </div>
    );
};

export default Home;