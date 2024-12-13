import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Start Your Business',
    description: 'Get foundational knowledge on starting a business.',
    image: 'gs.jpg',
    subcategories: [
      { name: 'Business Planning', link: '/business-planning' },
      { name: 'Legal & Licensing', link: '/legal-licensing' },
    ]
  },
  {
    name: 'Grow Your Business',
    description: 'Learn how to scale your business and reach more customers.',
    image: '/gg.jpg',
    subcategories: [
      { name: 'Customer Acquisition', link: '/customer-acquisition' },
      { name: 'Product Development', link: '/product-development' },
    ]
  },
  {
    name: 'Monetize Your Business',
    description: 'Maximize your business profitability and revenue streams.',
    image: '/ms.jpg',
    subcategories: [
      { name: 'Revenue Models', link: '/revenue-models' },
      { name: 'Pricing Strategies', link: '/pricing-strategies' },
    ]
  }
];

const CategorySection = () => {
  return (
    <div className="py-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-blue-600">Categories</h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative  p-6 rounded-lg shadow-lg overflow-hidden">
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-lg transition-all duration-300 ease-in-out"
              />

              {/* Title and Description */}
              <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-500">{category.name}</h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>

              {/* Links Section (hidden by default) */}
              <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <div className="space-y-2 text-center">
                  {category.subcategories.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.link}
                      className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
