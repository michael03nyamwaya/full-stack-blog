const PostActions = () => {
  return (
    <div className='flex flex-col mt-8 '>
        <h1 className="mt-6 mb-6 text-sm font-medium">Actions</h1>
        <div className="flex items-center mt-4">
        <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m5 22v-19c0-.55228.44772-1 1-1h12c.5523 0 1 .44772 1 1v19l-7-6.1111z" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        <span>save this post</span>
        
        </div>
        <div className="flex items-center mt-4">
        <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m3 6h18m-16 0v14c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-14m-11 0v-2c0-1.10457.89543-2 2-2h4c1.1046 0 2 .89543 2 2v2"/><path d="m14 11v6"/><path d="m10 11v6"/></g></svg>
        <span>Delete this post</span>
        
        </div>
    </div>
  )
}

export default PostActions