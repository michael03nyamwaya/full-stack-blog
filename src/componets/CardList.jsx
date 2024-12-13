import { Link } from "react-router-dom"


const CardList = ({}) => {
  return (
    <div className='mt-6'>
        <div className="">
        <div className="flex mb-12 gap-12">
      {/* Image Container */}
      <div className="flex-1 relative h-[350px]">
        <img src="/l1.jpg" alt="" className="object-cover w-full h-full" />
      </div>

      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Date and Category */}
        <div className="flex gap-2 text-sm">
          <span className="text-gray-500">12.08.2024</span>
          <span className="text-crimson font-medium">Culture</span>
        </div>

        {/* Title */}
        <Link href="/">
          <h1 className="text-2xl font-semibold text-gray-800 hover:text-crimson transition-all duration-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, quas.
          </h1>
        </Link>

        {/* Description */}
        <p className="text-lg font-light text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptatem mollitia iusto quo sequi quod dolorum,
          necessitatibus velit cupiditate cumque!
        </p>

        {/* Read More Link */}
        <Link href="/" className="border-b-2 border-crimson pb-1 text-crimson hover:text-gray-800">
          Read More
        </Link>
      </div>
    </div>
        <div className="flex mb-12 gap-12">
      {/* Image Container */}
      <div className="flex-1 relative h-[350px]">
        <img src="/l4.jpg" alt="" className="object-cover w-full h-full" />
      </div>

      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Date and Category */}
        <div className="flex gap-2 text-sm">
          <span className="text-gray-500">12.08.2024</span>
          <span className="text-crimson font-medium">Culture</span>
        </div>

        {/* Title */}
        <Link href="/">
          <h1 className="text-2xl font-semibold text-gray-800 hover:text-crimson transition-all duration-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, quas.
          </h1>
        </Link>

        {/* Description */}
        <p className="text-lg font-light text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptatem mollitia iusto quo sequi quod dolorum,
          necessitatibus velit cupiditate cumque!
        </p>

        {/* Read More Link */}
        <Link href="/" className="border-b-2 border-crimson pb-1 text-crimson hover:text-gray-800">
          Read More
        </Link>
      </div>
    </div>
        <div className="flex mb-12 gap-12">
      {/* Image Container */}
      <div className="flex-1 relative h-[350px]">
        <img src="/l1.jpg" alt="" className="object-cover w-full h-full" />
      </div>

      {/* Text Container */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Date and Category */}
        <div className="flex gap-2 text-sm">
          <span className="text-gray-500">12.08.2024</span>
          <span className="text-crimson font-medium">Culture</span>
        </div>

        {/* Title */}
        <Link href="/">
          <h1 className="text-2xl font-semibold text-gray-800 hover:text-crimson transition-all duration-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, quas.
          </h1>
        </Link>

        {/* Description */}
        <p className="text-lg font-light text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos voluptatem mollitia iusto quo sequi quod dolorum,
          necessitatibus velit cupiditate cumque!
        </p>

        {/* Read More Link */}
        <Link href="/" className="border-b-2 border-crimson pb-1 text-crimson hover:text-gray-800">
          Read More
        </Link>
      </div>
    </div>
        </div>
        {/* <Pagination/> */}
    </div>
  )
}

export default CardList