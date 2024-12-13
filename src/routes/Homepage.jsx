import { Link } from "react-router-dom";
import Introduction from "../componets/Introduction";
import FeaturedPost from "../componets/FeaturedPost";
import Category from "../componets/Category";
import CardList from "../componets/CardList";
import Menu from "../componets/Menu";
import Footer from "../componets/Footer";
import Pagination from "../componets/Pagination";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4"> {/* Ensure the whole page can scroll */}
      {/* Breadcrumbs */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span></span>
        <span className="text-blue-600">Blog & Articles</span>
      </div>

      {/* Introduction */}
      <Introduction />
      <Category />
      
      {/* FeaturedPost */}
      <FeaturedPost />
      
      {/* Flex container for CardList and Menu */}
      <div className="flex gap-14">
        {/* CardList takes up 5/7ths of the space */}
        <div className="flex-5 mt-10">
          <h1 className="text-3xl font-semibold mb-8 text-blue-600">Latest Posts</h1>
          <CardList />
        </div>

        {/* Menu takes up 2/7ths of the space */}
        <div className="flex-2">
          <Menu />
        </div>
      </div>
      <Pagination />
      <Footer />
    </div>
  );
};

export default Homepage;
