import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";
import img from "../../../public/images/home/shop.jpg"
import Newsletter from "../../components/Newsletter";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/menu");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div>
      <div class="relative flex items-center h-screen overflow-hidden">
        <div className='section-container h-screen flex flex-col justify-center space-y-5 z-20 '>
          <span className='font-tek text-5xl text-slate-400 line-through decoration-slate-300 decoration-2'>
            Shop
          </span>
          <span className='text-slate-400 md:w-1/2 font-serif leading-loose'>
            Find what you need!
          </span>
        </div>
        <img src={img} alt="" className="absolute z-10 w-auto h-auto"/>
      </div>

      <div className="section-container">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div>
            <div className="form-control border p-4 mb-6">
              <div className="font-tek text-3xl text-slate-400 my-6">Product Search <div className="border-b-4 w-10 text-slate-500"></div></div>
              <div className="join">
                <div>
                  <div>
                    <input className="input input-bordered join-item" placeholder="Search" />
                  </div>
                </div>
                <div className="indicator">
                  <button className="btn join-item text-slate-400">Search</button>
                </div>
              </div>
            </div>
            <div className="border p-4 ">
              <div className="font-tek text-3xl text-slate-400 my-6">Product Categories <div className="border-b-4 w-10 text-slate-500"></div></div>
              <div className="text-lg text-slate-400"><button
                onClick={showAll}
                className={selectedCategory === "all" ? "active" : ""}
              >
                All
              </button>
              </div>
              <div className="text-lg text-slate-400 my-4">
                <button
                  onClick={() => filterItems("apple")}
                  className={selectedCategory === "apple" ? "active" : ""}
                >
                  Apple
                </button>
              </div>
              <div className="text-lg text-slate-400">
                <button
                  onClick={() => filterItems("samsung")}
                  className={selectedCategory === "samsung" ? "active" : ""}
                >
                  Samsung
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between">
              <div className="text-4xl text-slate-400">Shop</div>
              <div className="flex mb-4 rounded-sm">
                <div className="bg-slate-400 p-2 ">
                  <FaFilter className="text-white h-4 w-4" />
                </div>
                <select
                  id="sort"
                  onChange={(e) => handleSortChange(e.target.value)}
                  value={sortOption}
                  className="bg-slate-400 text-white px-2 py-1 rounded-sm"
                >
                  <option value="default"> Default</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 ">
              {currentItems.map((item, index) => (
                <Cards key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8 flex-wrap gap-2">
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "bg-slate-400 text-white" : "bg-gray-200"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Newsletter/>
    </div>
  );
};

export default Menu;
