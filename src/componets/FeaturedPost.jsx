import { Link } from "react-router-dom";

const FeaturedPost = () => {
  return (
    <div className="mt-8 ">
       <h1 className="text-3xl font-semibold mb-8 text-blue-600">Featured</h1>
      <div className="flex flex-col lg:flex-row gap-8">
      {/* First post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <img src="/f1.jpg" className="rounded-3xl object-cover" alt="Featured" />
        
        {/* Post details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">1</h1>
          <Link className="text-blue-700 lg:text-lg">Business Strategies</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        
        {/* Post title */}
        <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </Link>
      </div>
      
      {/* Other posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
       {/* second */}
       <div className="lg:h-1/3 flex justify-between gap-4">
       <img src="/gs.jpg" className="rounded-3xl object-cover w-1/3 aspect-video" alt="Featured" />
       {/* details & title */}
       <div className="2/3">
      {/*  details */}
      <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
        <h1 className="font-semibold ">2</h1>
        <Link className="text-blue-700">Online marketing</Link>
        <span className="text-gray-500 text-sm"> 4days ago</span>
      </div>
     {/*  title */}
     <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, odio?</Link>
       </div>
       </div>
       {/* Third */}
       <div className="lg:h-1/3 flex justify-between gap-4">
       <img src="/f3.jpg" className="rounded-3xl object-cover w-1/3 aspect-video" alt="Featured" />
       {/* details & title */}
       <div className="2/3">
      {/*  details */}
      <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
        <h1 className="font-semibold ">2</h1>
        <Link className="text-blue-700">Online marketing</Link>
        <span className="text-gray-500 text-sm"> 4days ago</span>
      </div>
     {/*  title */}
     <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, odio?</Link>
       </div>
       </div>
       {/* Fourth */}
       <div className="lg:h-1/3 flex justify-between gap-4">
       <img src="/f4.jpg" className="rounded-3xl object-cover w-1/3 aspect-video" alt="Featured" />
       {/* details & title */}
       <div className="2/3">
      {/*  details */}
      <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
        <h1 className="font-semibold ">2</h1>
        <Link className="text-blue-700">Online marketing</Link>
        <span className="text-gray-500 text-sm"> 4days ago</span>
      </div>
     {/*  title */}
     <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, odio?</Link>
       </div>
       </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
