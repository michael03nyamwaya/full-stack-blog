import { Link } from "react-router-dom"
import Search from "./Search"

const SideMenu = () => {
  return (
    <div className='p-4 flex flex-col gap-4 h-max sticky'>
        <Search/>
        <h1 className="mb-2 mt-3 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm">
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input 
                type="radio" 
                name="sort"
                value="newest"
                className="appearance-none h-4 w-4 rounded-sm border-[1.5px] bg-w checked:bg-blue-700 border-blue-500 cursor-pointer"
                />
                Newest
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input 
                type="radio" 
                name="sort"
                value="most popular"
                className="appearance-none h-4 w-4 rounded-sm border-[1.5px] bg-w checked:bg-blue-700 border-blue-500 cursor-pointer"
                />
                Most popular
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input 
                type="radio" 
                name="sort"
                value="trending"
                className="appearance-none h-4 w-4 rounded-sm border-[1.5px] bg-w checked:bg-blue-700 border-blue-500 cursor-pointer"
                />
                Trending
            </label>
            <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                <input 
                type="radio" 
                name="sort"
                value="oldest"
                className="appearance-none h-4 w-4 rounded-sm border-[1.5px] bg-w checked:bg-blue-700 border-blue-500 cursor-pointer"
                />
                Oldest
            </label>
        </div>
        <h1 className="mb-2 mt-3 text-sm font-medium">Categories</h1>
        <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/post">All</Link>
            <Link className="underline" to="/posts?cat=startups">Startups</Link>
            <Link className="underline" to="/posts?cat=monetization">Monetization</Link>
            <Link className="underline" to="/posts?cat=guides">Guides</Link>
            <Link className="underline" to="/posts?cat=digital-marketing">Digital Marketing</Link>
        </div>
    </div>
  )
}

export default SideMenu