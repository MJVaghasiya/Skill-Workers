import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import { IoMdPerson } from "react-icons/io";
import { FaLocationArrow, FaArrowRight } from "react-icons/fa";
import { PiMagnifyingGlass } from "react-icons/pi";
import { MdOutlineClear } from "react-icons/md";
import { RiMoneyDollarCircleLine, RiMapPinLine, RiBriefcaseLine } from "react-icons/ri";

const Job = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/users.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setOriginalData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilter = () => {
    const tq = titleQuery.toLowerCase();
    const lq = locationQuery.toLowerCase();
    const filtered = originalData.filter((item) => {
      return (
        (item.title || "").toLowerCase().includes(tq) &&
        (item.location || "").toLowerCase().includes(lq)
      );
    });
    setFilteredData(filtered);
  };

  const clearFilters = () => {
    setTitleQuery("");
    setLocationQuery("");
    setFilteredData(originalData);
  };

  return (
    <div className="bg-[#e0e5ec] min-h-screen">
      <Navbar />
      <PageHeader title="Job Search" breadcrumb="Job Search" />

      <section className="py-12">
        <div className="container">

          {/* Search Bar */}
          <div className="neu-out rounded-2xl p-6 mb-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div className="lg:col-span-1">
                <label className="block text-xs font-bold text-[#718096] uppercase tracking-wider mb-2">
                  Role / Keyword
                </label>
                <div className="relative">
                  <IoMdPerson className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B81F7] text-lg" />
                  <input
                    type="text"
                    placeholder="Keyword, Role, Skill..."
                    value={titleQuery}
                    onChange={(e) => setTitleQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleFilter()}
                    className="neu-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-[#2d3748] placeholder-[#b8bec7] focus:outline-none"
                  />
                </div>
              </div>

              <div className="lg:col-span-1">
                <label className="block text-xs font-bold text-[#718096] uppercase tracking-wider mb-2">
                  Location
                </label>
                <div className="relative">
                  <FaLocationArrow className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B81F7] text-sm" />
                  <input
                    type="text"
                    placeholder="City, Region..."
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleFilter()}
                    className="neu-input w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-[#2d3748] placeholder-[#b8bec7] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 lg:col-span-2">
                <button
                  onClick={handleFilter}
                  className="flex-1 neu-btn-primary text-white py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:text-white transition-all duration-300"
                >
                  <PiMagnifyingGlass className="text-base" /> Search Jobs
                </button>
                <button
                  onClick={clearFilters}
                  className="neu-btn px-5 py-3.5 rounded-xl font-semibold text-sm text-[#718096] hover:text-[#D62C35] flex items-center gap-2 transition-all duration-300"
                >
                  <MdOutlineClear className="text-base" /> Clear
                </button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[#718096] font-medium">
              <span className="text-[#0B81F7] font-bold">{filteredData.length}</span> jobs found
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="neu-out rounded-2xl p-6 animate-pulse">
                  <div className="w-full h-40 rounded-xl bg-[#d0d5dc] mb-4" />
                  <div className="h-4 bg-[#d0d5dc] rounded w-3/4 mb-2" />
                  <div className="h-4 bg-[#d0d5dc] rounded w-1/2" />
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {!loading && filteredData.length === 0 && (
            <div className="neu-out rounded-3xl p-16 text-center">
              <PiMagnifyingGlass className="text-5xl text-[#b8bec7] mx-auto mb-4" />
              <h4 className="text-[#2d3748] mb-2">No Jobs Found</h4>
              <p className="text-[#718096]">Try adjusting your search criteria.</p>
              <button onClick={clearFilters} className="mt-6 neu-btn-primary text-white px-8 py-3 rounded-xl font-semibold hover:text-white">
                Clear Filters
              </button>
            </div>
          )}

          {/* Job Cards */}
          {!loading && filteredData.length > 0 && (
            <div className="space-y-6">
              {filteredData.map((item, i) => (
                <div key={i} className="neu-out rounded-2xl overflow-hidden">
                  <div className="grid md:grid-cols-4 gap-0">
                    {/* Image */}
                    <div className="md:col-span-1 h-48 md:h-auto overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="neu-out-sm rounded-lg px-3 py-1 text-xs font-semibold text-[#0B81F7]">
                            {item.title}
                          </span>
                        </div>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-[#718096]">
                            <RiMapPinLine className="text-[#0B81F7]" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#718096]">
                            <RiMoneyDollarCircleLine className="text-[#36D97C]" />
                            <span>{item.salary}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#718096]">
                            <RiBriefcaseLine className="text-[#9B68E6]" />
                            <span>Full Time</span>
                          </div>
                        </div>
                        <p className="text-[#718096] p2 line-clamp-2">{item.description}</p>
                      </div>

                      <div className="mt-5 flex gap-3">
                        <a
                          href="https://skillworkers.co.uk/candidate/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="neu-btn-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:text-white transition-all duration-300"
                        >
                          Apply Now <FaArrowRight className="text-xs" />
                        </a>
                        <button className="neu-btn px-6 py-2.5 rounded-xl text-sm font-semibold text-[#4a5568] hover:text-[#0B81F7] transition-all duration-300">
                          View Details
                        </button>
                      </div>
                    </div>

                    {/* Map */}
                    <div className="md:col-span-1 h-48 md:h-auto min-h-[200px]">
                      <iframe
                        title={`Map: ${item.location}`}
                        className="w-full h-full"
                        style={{ border: 0 }}
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBEBT9O1STei5aTy7nodtI_6FkrjjgBQNc&q=${encodeURIComponent(item.location)}`}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Job;
