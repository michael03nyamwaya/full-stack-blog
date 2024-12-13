import { useUser } from "@clerk/clerk-react"
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';

const Write = () => {
  const {isLoaded, isSignedIn} =useUser()
   if(!isLoaded){
    return(<div className="">Loading</div>)
   }
   if(isLoaded && !isSignedIn){
    return(<div className="">You should login</div>)
   }
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-8'>
      <h1 className="text-gray-500 text-lg font-light">Create a New Post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-8" >
        <button className="w-max py-2 px-4 bg-white rounded-lg">Add a cover image</button>
        <input type="text" placeholder="My Awesome Story" className="bg-transparent text-xl outline-none text-gray-600" />
        <div className="flex gap-4">
          <label htmlFor="" className="text-sm">Choose a category</label>
           <select name="cat" id="" className="p-2 shadow-md rounded-xl">
            <option value="general">General</option>
            <option value="monetazization">Monetazization</option>
            <option value="startups">startups</option>
            <option value="guides">Guides</option>
           </select>
        </div>
        <textarea name="desc" placeholder="a short description" className="p-4 shadow-md rounded-xl bg-white"/>
        <ReactQuill theme="snow" className="flex-1 shadow-md rounded-xl bg-white"/>
        <button className="p-2 w-36 bg-blue-600 rounded-md mt-4">send</button>
      </form>
    </div>
  )
}

export default Write