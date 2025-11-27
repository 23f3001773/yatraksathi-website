import React from 'react';
import { ChevronDown } from 'lucide-react';

const SearchBox = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 relative z-10 -mt-10">
      <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 relative overflow-hidden">
        
        {/* Top Pink Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-pink-500"></div>

        {/* Radio Buttons */}
        <div className="flex gap-6 mb-6 text-sm font-medium text-gray-700">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="trip" defaultChecked className="accent-red-600 h-4 w-4" />
            One Way
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="trip" className="accent-red-600 h-4 w-4" />
            Round Trip
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="trip" className="accent-red-600 h-4 w-4" />
            Multi City
          </label>
        </div>

        {/* Input Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-gray-300 rounded-lg divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-gray-50">
          
          {/* Departure */}
          <div className="p-4 hover:bg-white transition cursor-pointer group">
            <p className="text-xs text-gray-500 font-semibold mb-1 group-hover:text-red-500">DEPARTURE FROM</p>
            <div className="font-bold text-2xl text-gray-800">New Delhi</div>
            <p className="text-xs text-gray-500 truncate">DEL, Indira Gandhi International</p>
          </div>

          {/* Going To */}
          <div className="p-4 hover:bg-white transition cursor-pointer group">
            <p className="text-xs text-gray-500 font-semibold mb-1 group-hover:text-red-500">GOING TO</p>
            <div className="font-bold text-2xl text-gray-800">Mumbai</div>
            <p className="text-xs text-gray-500 truncate">BOM, Chhatrapati Shivaji Int...</p>
          </div>

          {/* Date */}
          <div className="p-4 hover:bg-white transition cursor-pointer group">
            <p className="text-xs text-gray-500 font-semibold mb-1 flex items-center gap-1 group-hover:text-red-500">
              DEPARTURE DATE <ChevronDown size={12}/>
            </p>
            <div className="font-bold text-2xl text-gray-800">27 <span className="text-lg font-normal">Nov'25</span></div>
            <p className="text-xs text-gray-500">Thursday</p>
          </div>

           {/* Return Date */}
           <div className="p-4 hover:bg-white transition cursor-pointer group relative">
            <p className="text-xs text-gray-500 font-semibold mb-1 flex items-center gap-1 group-hover:text-red-500">
              RETURN DATE <ChevronDown size={12}/>
            </p>
            <div className="text-sm text-gray-400 mt-1">Book Round Trip <br/> to save extra</div>
          </div>

          {/* Travellers */}
          <div className="p-4 hover:bg-white transition cursor-pointer group">
             <p className="text-xs text-gray-500 font-semibold mb-1 flex items-center gap-1 group-hover:text-red-500">
              TRAVELLERS & CLASS <ChevronDown size={12}/>
            </p>
            <div className="font-bold text-2xl text-gray-800">1 <span className="text-lg font-normal">Traveller</span></div>
            <p className="text-xs text-gray-500">Economy</p>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-end mt-6">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-0.5">
            Search Flights
          </button>
        </div>

      </div>
    </div>
  );
};

export default SearchBox;