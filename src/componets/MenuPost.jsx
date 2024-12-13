import { Link } from "react-router-dom"

const MenuPost = () => {
  return (
    <div className=''>
        <div className="flex flex-col gap-6">
        <Link href="/" className="flex gap-6 items-center justify-center hover:bg-gray-100 p-4 rounded-lg transition-all duration-300">
          {/* Image Section */}
          
          {/* Text Section */}
          <div className="flex-1 items-center justify-center">
            <span className="block text-sm text-gray-600 mb-2 ">Start your own business</span>
            <h3 className="text-sm font-semibold text-gray-800 hover:text-crimson transition-all duration-300">
              Lorem ipsum dolor sit amet consectetur
            </h3>
            <div className="flex gap-4 mt-2 text-sm text-gray-600">
              <span className="font-medium">John Doe</span>
              <span>10.06.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuPost