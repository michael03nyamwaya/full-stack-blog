
import MenuPost from "./MenuPost";

const Menu = () => {
  return (
    <div className="flex-1 mt-4 p-4">
      <h1 className="text-2xl font-semibold mb-6">Most Popular</h1>
      <MenuPost />
      <MenuPost />
      <MenuPost />
      <h1 className="text-2xl font-semibold mb-6 mt-8">
        Trending
      </h1>

    </div>
  );
};

export default Menu;
