const Comment = () => {
  return (
    <div className='bg-slate-50 flex flex-col gap-8 p-4 rounded-xl'>
        <div className="flex gap-4 items-center ">
        <img src="/l1.jpg" alt="" className="h-10 w-10 rounded-full"/>
        <span className="text-gray-500 text-sm">John Doe</span>
        <span className="text-purple-400 ">2 days ago</span>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi at voluptas nihil vitae suscipit esse recusandae perferendis veniam neque!</p>
        </div>
    </div>
  )
}

export default Comment