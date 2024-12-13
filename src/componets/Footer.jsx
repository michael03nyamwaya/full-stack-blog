import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="mt-12 p-6 flex flex-col lg:flex-row justify-between gap-8 text-gray-600">
      {/* Footer Info Section */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img src="/lf.jpg" alt="Logo" width={50} height={50} />
          <h1 className="text-3xl font-semibold text-blue-600">Logo</h1>
        </div>
        <p className="font-light text-gray-800 text-lg">
          A place to discover how to start, grow, and monetize your business. Here, you will find guides, reviews, case studies, and tools that help beginners succeed in their entrepreneurial journey.
        </p>
        <div className="flex gap-4 mt-4">
          <img src="/facebook.png" alt="facebook" width={20} height={20} />
          <img src="/instagram.png" alt="instagram" width={20} height={20} />
          <img src="/tiktok.png" alt="tiktok" width={20} height={20} />
          <img src="/youtube.png" alt="youtube" width={20} height={20} />
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="flex-1 flex justify-between gap-12">
        {/* Links Column */}
        <div className="flex flex-col gap-4">
          <span className="font-bold text-lg text-blue-600">Quick Links</span>
          <Link href="/" className="text-gray-800 hover:text-blue-500">Homepage</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-500">About</Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link>
          <Link href="/privacy" className="text-gray-800 hover:text-blue-500">Privacy Policy</Link>
        </div>

        {/* Tags Column */}
        <div className="flex flex-col gap-4">
          <span className="font-bold text-lg text-blue-600">Tags</span>
          <Link href="/tags/start" className="text-gray-800 hover:text-blue-500">Start</Link>
          <Link href="/tags/grow" className="text-gray-800 hover:text-blue-500">Grow</Link>
          <Link href="/tags/monetize" className="text-gray-800 hover:text-blue-500">Monetize</Link>
          <Link href="/tags/reviews" className="text-gray-800 hover:text-blue-500">Reviews</Link>
        </div>

        {/* Social Links Column */}
        <div className="flex flex-col gap-4">
          <span className="font-bold text-lg text-blue-600">Follow Us</span>
          <Link href="/" className=" text-gray-800  hover:text-blue-500">Facebook</Link>
          <Link href="/" className=" text-gray-800  hover:text-blue-500">Instagram</Link>
          <Link href="/" className=" text-gray-800  hover:text-blue-500">Tiktok</Link>
          <Link href="/" className=" text-gray-800  hover:text-blue-500">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
