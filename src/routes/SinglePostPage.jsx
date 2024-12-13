import { Link } from "react-router-dom";
import PostActions from "../componets/PostActions";
import Search from "../componets/Search";
import Comments from "../componets/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8"> 
     {/* Section1 */} 
     <div className="flex ">
      <div className="flex flex-col gap-4 lg:w-3/5">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-8 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima magni obcaecati repudiandae.</h1>
        <div className="flex gap-8 mt-8">
        <span className="text-gray-600">written by</span>
         <Link className="text-blue-500">John Doe</Link> 
         <span>on</span> 
         <Link className="text-blue-500">Business Strategies</Link> 
         <span className="text-gray-600">2days ago</span>
         </div>
         <p className="text-lg md:text-2xl lg:text-2xl mt-8 w-full"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis possimus officiis reprehenderit dolorum pariatur, nihil velit aut odio deleniti reiciendis enim eum doloribus neque nisi? Corrupti consequuntur iste consectetur tenetur!</p>
      </div>
      <div className="hidden lg:block w-2/5">
        <img src="/l4.jpg" alt=""  className="w-100 h-100 rounded-md"/>
      </div>
     </div>
     {/* Section2 */} 
     <div className="flex flex-col md:flex-row gap-8">
     {/*  details */}
     <div className="flex flex-col gap-8">
        <p className=" lg:text-xl md:text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet perspiciatis necessitatibus illum incidunt nobis. Earum delectus ut suscipit debitis, in assumenda voluptates porro repellendus nam eveniet nesciunt eos commodi quo, a saepe ipsam at optio, ab est. Soluta officiis, sunt tenetur quidem velit possimus nesciunt distinctio laborum quod sequi.</p>
        <p className=" lg:text-xl md:text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi voluptas veniam minima, obcaecati dolorum similique at voluptatibus et, sed tempore in vel, laudantium nulla praesentium placeat quos deleniti tenetur repudiandae asperiores rem? Explicabo ut deleniti eaque perferendis illo. Perspiciatis aspernatur sapiente cumque et, veniam sunt ipsam dolorum! Dolorum inventore ratione eveniet sint et reprehenderit. Ut ex omnis delectus odit!</p>
        <p className=" lg:text-xl md:text-lg text-gray-900">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sit veniam impedit deserunt et aperiam accusamus laudantium nesciunt quae sint excepturi consequatur, fugit ipsa culpa odio hic quisquam voluptatibus accusantium maxime velit perspiciatis nostrum dicta dignissimos. Esse vitae ullam aliquam quo fugiat accusamus voluptate quas eum, itaque et labore. Dolor accusamus odit aperiam nulla necessitatibus.</p>
        <p className=" lg:text-xl md:text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet perspiciatis necessitatibus illum incidunt nobis. Earum delectus ut suscipit debitis, in assumenda voluptates porro repellendus nam eveniet nesciunt eos commodi quo, a saepe ipsam at optio, ab est. Soluta officiis, sunt tenetur quidem velit possimus nesciunt distinctio laborum quod sequi.</p>
        <p className=" lg:text-xl md:text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi voluptas veniam minima, obcaecati dolorum similique at voluptatibus et, sed tempore in vel, laudantium nulla praesentium placeat quos deleniti tenetur repudiandae asperiores rem? Explicabo ut deleniti eaque perferendis illo. Perspiciatis aspernatur sapiente cumque et, veniam sunt ipsam dolorum! Dolorum inventore ratione eveniet sint et reprehenderit. Ut ex omnis delectus odit!</p>
        <p className=" lg:text-xl md:text-lg text-gray-900">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil sit veniam impedit deserunt et aperiam accusamus laudantium nesciunt quae sint excepturi consequatur, fugit ipsa culpa odio hic quisquam voluptatibus accusantium maxime velit perspiciatis nostrum dicta dignissimos. Esse vitae ullam aliquam quo fugiat accusamus voluptate quas eum, itaque et labore. Dolor accusamus odit aperiam nulla necessitatibus.</p>
     </div>
     {/* menu */}
     <div className="h-max sticky gap-4">
        <h1 className="mt-6 mb-6 text-sm font-medium">Author</h1>
        <div className="flex flex-col mt-4 gap-2">
          <div className="flex items-center gap-4 ">
          <img src="p.jpeg" alt="" className="h-10 w-10 rounded-full" />
          <Link href='/' className="text-blue-500">John Doe</Link>
          </div>
          <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet 
          </p>
          <div className="flex gap-4 mt-2 items-center ">
            <img src="/instagram.png" alt="" className="w-6 h-6" />
            <img src="/tiktok.png" alt="" className="w-6 h-6" />
         </div>
         </div>
         <PostActions />
         <div className="mt-4 ">
         <h1 className="mt-6 mb-6 text-sm font-medium">Categories</h1>
         <div className="flex flex-col gap-2 text-sm">
          <Link className="underline" to='/'>All</Link>
          <Link className="underline" to='/'>Business strategies</Link>
          <Link className="underline" to='/'>Monetization</Link>
          <Link className="underline" to='/'>Grow your business</Link>
         </div>
         </div>
         <Search />
     </div>
     </div>
     <Comments />
    </div>
  );
};

export default SinglePostPage;
