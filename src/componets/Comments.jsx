import Comment from "./Comment"

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 mt-8 lg:w-3/5'>
        <h1 className="text-xl text-gray-800 underline ">Comments</h1>
        <div className="flex items-center justify-between gap-8  w-full "> 
            <textarea name="" id="" className="p-4 w-full rounded-3xl" />
            <button className="text-white py-2 px-3 bg-blue-700 rounded-2xl">send</button>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments