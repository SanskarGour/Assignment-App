import React, { useState, useMemo } from "react";
import { pipelineStages, totalStats } from "../data/dealsData";
import { FaCaretDown, FaCaretRight, FaFolder, FaListUl } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";

const DealsSection = () => {
  const [activeTab, setActiveTab] = useState("My Deals");
  const [viewMode, setViewMode] = useState("list");
  const [expandedStages, setExpandedStages] = useState({ Negotiating0: true });
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [activeDealsOnly, setActiveDealsOnly] = useState(false);

  const toggleStage = (stageName) => {
    setExpandedStages((prev) => ({
      ...prev,
      [stageName]: !prev[stageName],
    }));
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFromDate("");
    setToDate("");
    setActiveDealsOnly(true);
    setExpandedStages({ Negotiating0: true });
  };

  const filteredStages = useMemo(() => {
    return pipelineStages.map((stage) => {
      const filteredDeals = stage.deals.filter((deal) => {
        const matchesSearch =
          searchTerm === "" ||
          deal.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          deal.dealName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          deal.assignee.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesActive = !activeDealsOnly || deal.status === "active";

        let matchesDate = true;
        if (fromDate || toDate) {
          const dealDate = new Date(deal.createdDate || "2024-01-01"); 
          const from = fromDate ? new Date(fromDate) : null;
          const to = toDate ? new Date(toDate) : null;

          if (from && dealDate < from) matchesDate = false;
          if (to && dealDate > to) matchesDate = false;
        }

        return matchesSearch && matchesActive && matchesDate;
      });

      const totalValue = filteredDeals.reduce(
        (sum, deal) => sum + deal.dealBudget,
        0
      );
      const count = filteredDeals.length;

      return {
        ...stage,
        deals: filteredDeals,
        totalValue,
        count,
      };
    });
  }, [searchTerm, activeDealsOnly, fromDate, toDate]);

  const filteredStats = useMemo(() => {
    const allFilteredDeals = filteredStages.flatMap((stage) => stage.deals);
    return {
      totalDeals: allFilteredDeals.length,
      totalRevenue: allFilteredDeals.reduce(
        (sum, deal) => sum + deal.dealBudget,
        0
      ),
    };
  }, [filteredStages]);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/60 mx-6 mb-6 overflow-hidden">
      <div className="border-b border-gray-200/60">
        <div className="flex">
          <button
            onClick={() => setActiveTab("My Deals")}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
              activeTab === "My Deals"
                ? "text-blue-600 border-blue-600 bg-white shadow-sm"
                : "text-gray-500 border-transparent bg-gray-50/50 hover:text-gray-700 hover:bg-gray-100/50"
            }`}
          >
            My Deals
          </button>
          <button
            onClick={() => setActiveTab("All clients")}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
              activeTab === "All clients"
                ? "text-blue-600 border-blue-600 bg-white shadow-sm"
                : "text-gray-500 border-transparent bg-gray-50/50 hover:text-gray-700 hover:bg-gray-100/50"
            }`}
          >
            All clients
          </button>
        </div>
      </div>

      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex bg-gray-100/80 rounded-xl p-1.5 shadow-inner">
              <button
                onClick={() => setViewMode("pipeline")}
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  viewMode === "pipeline"
                    ? "bg-white shadow-md text-gray-900 transform scale-105"
                    : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                }`}
              >
                <FaFolder />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-white shadow-md text-gray-900 transform scale-105"
                    : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
                }`}
              >
                <FaListUl />
              </button>
            </div>

            <div className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                {filteredStats.totalDeals}
              </span>{" "}
              deals
              {activeDealsOnly && (
                <span className="text-blue-600 font-medium">
                  {" "}
                  (Active only)
                </span>
              )}
              <span className="mx-2">•</span>
              Revenue:{" "}
              <span className="font-semibold text-gray-900">
                ${filteredStats.totalRevenue.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoMdSearch />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-48"
              />
            </div>

            <div className="flex gap-2">
              <input
                type="date"
                placeholder="From Date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-40"
              />
              <input
                type="date"
                placeholder="To Date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-40"
              />
            </div>

            <label className="flex items-center px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={activeDealsOnly}
                onChange={(e) => setActiveDealsOnly(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                Active Deals
              </span>
            </label>

            <button
              onClick={clearFilters}
              className="flex justify-center items-center  gap-1 px-2 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RxCross2 /> clear
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {viewMode === "list" ? (
          <div className="space-y-4">
            {filteredStages.map((stage, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleStage(stage.name + index)}
                  className={`w-full px-4 py-3 border-b border-gray-200/60 flex items-center justify-between transition-all duration-300 $ hover:opacity-90 hover:shadow-sm group`}
                >
                  <div className="flex items-center">
                    {expandedStages[stage.name + index] ? (
                      <FaCaretDown />
                    ) : (
                      <FaCaretRight />
                    )}
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                        {stage.name}
                      </span>
                      <div className="ml-3 flex items-center space-x-2">
                        <div className="px-2 py-1 bg-white/80 rounded-full shadow-sm border border-gray-200/50">
                          <span className="text-sm text-gray-600 font-medium">
                            {stage.count}
                          </span>
                        </div>
                        <div className="px-2 py-1 bg-white/80 rounded-full shadow-sm border border-gray-200/50">
                          <span className="text-sm text-gray-600 font-medium">
                            ${stage.totalValue.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {expandedStages[stage.name + index] &&
                  stage.deals.length > 0 && (
                    <div className="bg-white">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Client
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Deal Name
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Deal budget
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Assignee
                              </th>
                              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {stage.deals.map((deal) => (
                              <tr key={deal.id} className="hover:bg-gray-50">
                                <td className="px-4 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                      <span className="text-white font-medium text-sm">
                                        {deal.client.initials}
                                      </span>
                                    </div>
                                    <span className="text-sm text-gray-900">
                                      {deal.client.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                                  {deal.dealName}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                                  ${deal.dealBudget.toLocaleString()}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                                      <span className="text-white font-medium text-xs">
                                        {deal.assignee.initials}
                                      </span>
                                    </div>
                                    <span className="text-sm text-gray-900">
                                      {deal.assignee.name}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                                  <button className="text-gray-400 hover:text-gray-600 p-1">
                                    <BsThreeDotsVertical />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500">Pipeline view coming soon...</div>
        )}
      </div>
    </div>
  );
};

export default DealsSection;
