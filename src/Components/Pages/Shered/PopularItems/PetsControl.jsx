import { AlertCircle, Shield, Leaf } from "lucide-react";

const PestControlCard = ({ item }) => {
  const { name, description, image, affected_crops, protection_methods } = item;
  
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-2xl border border-gray-100">
      <div className="md:flex">
        {/* Left side with larger image */}
        <div className="md:w-2/5 relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/90 backdrop-blur-sm text-white">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span className="text-sm font-bold">পোকা</span>
            </div>
          </div>
        </div>
        
        {/* Right side with improved content */}
        <div className="md:w-3/5 p-5 relative">
          {/* Name and Description */}
          <h2 className="text-xl font-bold text-red-600 mb-2">{name}</h2>
          <div className="mb-4 pl-3 border-l-3 border-red-400">
            <p className="text-gray-700 text-sm">{description}</p>
          </div>
          
          {/* Affected Crops */}
          <div className="mb-5">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-1.5 bg-green-100 rounded-full">
                <Leaf className="h-4 w-4 text-green-600" />
              </div>
              <h3 className="text-green-700 font-medium">আক্রান্ত ফসল:</h3>
            </div>
            <div className="flex flex-wrap gap-2 ml-7">
              {affected_crops.map((crop, index) => (
                <span 
                  key={index} 
                  className="bg-gradient-to-r from-green-50 to-green-100 text-green-800 px-2.5 py-1 rounded-full text-xs font-medium border border-green-200 shadow-sm"
                >
                  {crop}
                </span>
              ))}
            </div>
          </div>
          
          {/* Protection Methods */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-1.5 bg-blue-100 rounded-full">
                <Shield className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="text-blue-700 font-medium">প্রতিরোধের উপায়:</h3>
            </div>
            <ul className="space-y-2 ml-7">
              {protection_methods.map((method, index) => (
                <li key={index} className="flex items-start group">
                  <span className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-xs shadow-sm mr-2 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                    {index + 1}
                  </span>
                  <span className="text-gray-800 text-sm">{method}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-red-50 opacity-20 z-0"></div>
          <div className="absolute -top-8 -right-8 h-16 w-16 rounded-full bg-green-50 opacity-20 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default PestControlCard;