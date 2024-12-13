import { useState } from "react";


const MainCategory = () => {
  // Array of main categories with their subcategories
  const categories = [
    {
      name: "ALL Posts",
    },
    {
      name: "Business Startups",
      subcategories: [
        "Choosing a Business Idea",
        "Business Planning",
      ],
    },
    {
      name: "Marketing & Sales",
      subcategories: [
        "Social Media Marketing",
        "Email Marketing",
        "Content Marketing",
      ],
    },
    {
      name: "Monetization Strategies",
      subcategories: [
        "Affiliate Marketing",
        "Subscription Models",
        "Freelancing Opportunities",
      ],
    },
  ];

  // State to handle which category's subcategories are open
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle function for opening and closing subcategories
  const toggleSubcategory = (index) => {
    if (openCategoryIndex === index) {
      setOpenCategoryIndex(null); // Close the category if it's already open
    } else {
      setOpenCategoryIndex(index); // Open the clicked category's subcategories
    }
  };

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (category.subcategories && category.subcategories.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="p-6">
      {/* Category Title Outside of the Rounded White Div */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Categories</h2>

      {/* Main Category Section - Flex Layout */}
      <div className="hidden md:flex bg-white rounded- xl:rounded-md p-4 shadow-lg items-center justify-center gap-8 flex-wrap mb-6">
        {/* Category Links */}
        {filteredCategories.map((category, index) => (
          <div key={category.name} className="flex flex-col items-center gap-2">
            {/* Category Title and Dropdown Icon */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => category.subcategories && toggleSubcategory(index)}
            >
              <span className={`text-xl font-semibold text-gray-700 ${!category.subcategories ? 'cursor-default' : ''}`}>
                {category.name}
              </span>
              {/* Only show dropdown icon if the category has subcategories */}
              {category.subcategories && (
                <span
                  className={`transform transition-transform text-gray-600 ${
                    openCategoryIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              )}
            </div>

            {/* Subcategories List - Positioned outside the category div */}
            {openCategoryIndex === index && category.subcategories && (
              <div className="mt-2 space-y-2">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div
                    key={subcategory}
                    className="text-lg text-gray-600 cursor-pointer hover:text-gray-900"
                  >
                    {subcategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))} 
        <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search Categories"
          className="px-4 py-2 w-64 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
      </div>

      
  );
};

export default MainCategory;
