import { useState } from "react"
import CardList from "../componets/CardList"
import SideMenu from "../componets/SideMenu"

const PostListPage = () => {
  const [open, setOpen ]=useState()
  return (
    <div className="">
      <button className="bg-blue-800 py-2 px-4 text-sm rounded-md" onClick={()=>setOpen((prev)=>!prev)}>{open ?"close":"Filter or Serarch"}</button>
    <div className='flex flex-col-reverse gap-8 md:flex-row'>

      <div className="">
        <CardList />
      </div>
      {/* sidemenu */}
      <div className={`${open ? "block": "hidden"} md:block `}>
        <SideMenu/>
      </div>
    </div>
    </div>
  )
}

export default PostListPage