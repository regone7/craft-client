// import { Link, useLoaderData } from "react-router-dom";
import Sliders from "../components/Sliders";
import UserReview from "../components/UserReview";
import Contructus from "../components/Contructus";
import Designstext from "../components/Designstext";
import CategoriesArt from "../components/CategoriesArt";
import Carditemsix from "../components/Carditemsix";
import { Outlet } from "react-router-dom";

const Home = () => {
    // const craftsix = useLoaderData()
    // console.log(craftsix)
    return (
        <div>
            <div >
                <Sliders></Sliders>
            </div>
            <div className="container mx-auto font-bold text-2xl text-center my-5">
                <Designstext></Designstext>
            </div>
            <div className="container mx-auto">
                <h1 className="text-3xl text-center font-bold mt-5 mb-3">Craft Items</h1>
                <div >
                    <Carditemsix></Carditemsix>
                </div>
            </div>
            <div>
                <CategoriesArt></CategoriesArt>
            </div>
            
            <div >
                <UserReview></UserReview>
            </div>
            <div>
                <Contructus></Contructus>
            </div>
        </div>
    );
};

export default Home;