const Pagination = () => {
    return (
      <div className="flex justify-between p-4">
        <button className="w-[100px] py-4 bg-red-400 rounded-md text-white cursor-pointer">
          Previous
        </button>
        <button className="w-[100px] py-4 bg-red-400 rounded-md text-white cursor-pointer ">
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  