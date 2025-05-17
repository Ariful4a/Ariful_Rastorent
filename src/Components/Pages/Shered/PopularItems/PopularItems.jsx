import { CalendarDays, Shield, Info } from "lucide-react";

const PopularItems = ({ item }) => {
  const { name, description, image, protection_methods, season } = item;
  
  return (
    <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-white to-green-50 rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-green-200 hover:shadow-xl transition-all duration-300">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 via-green-500 to-green-600"></div>
      
      <div className="flex flex-col md:flex-row">
        {/* Image section */}
        <div className="md:w-1/3 p-6 flex items-center justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="md:w-2/3 p-6">
          {/* Name and badges */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
            <h2 className="text-2xl font-bold text-green-700">
              {name}
            </h2>
            <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
              <CalendarDays className="h-4 w-4 text-blue-600 mr-1" />
              <span className="text-blue-700 text-sm font-medium">মৌসুম: {season}</span>
            </div>
          </div>
          
          {/* Description */}
          <div className="flex mb-4">
            <Info className="h-5 w-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-green-200 to-transparent my-4"></div>
          
          {/* Protection Methods */}
          <div>
            <div className="flex items-center mb-3">
              <Shield className="h-5 w-5 text-red-500 mr-2" />
              <h3 className="text-red-600 font-medium">সুরক্ষা পদ্ধতি:</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {protection_methods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-700 font-medium text-xs mr-2 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-sm">{method}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom curved accent */}
      <div className="h-1.5 bg-gradient-to-r from-green-500 via-green-400 to-green-500 w-full"></div>
    </div>
  );
};

export default PopularItems;