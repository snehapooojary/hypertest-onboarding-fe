import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import illustration1 from '../../assets/illustration1.png';
import { Divider } from 'primereact/divider';
import { useNavigate } from 'react-router-dom';

import amblogo from '../../assets/amb-logo.jpg';
import mmlogo from '../../assets/mm-logo.jpg';
import tslogo from '../../assets/ts-logo.png';

import React from 'react';

// const FeaturedProductsCard = () => {
//   return (
//     <div className="max-w-md mr-[60px] rounded-[40px] border border-gray-300 shadow-lg p-6 relative bg-gradient-to-br from-[#F0F4F8] to-[#E3E7EB] transition-transform duration-300 hover:shadow-2xl transform hover:scale-105">
//       <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center drop-shadow-md">
//         Featured Products
//       </h2>
//       <Divider />
//       <div className="space-y-[30px] mt-6">
//         {/* Requirement Scanner */}
//         <div className="flex items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all">
//           <div className="w-[130px] h-[50px] mr-4 transition-transform duration-300 hover:rotate-12">
//             <img
//               src={amblogo}
//               alt="Requirement Scanner Icon"
//               className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-45"
//             />
//           </div>
//           <div>
//             <h3 className="text-blue-900 font-bold text-2xl transition-transform duration-300 hover:text-blue-600">
//               Requirement Scanner
//             </h3>
//             <p className="text-orange-500 text-md italic">Analyze and resolve ambiguities for your user story</p>
//           </div>
//         </div>

//         {/* Visualize Requirements */}
//         <div className="flex items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all">
//           <div className="w-[60px] h-[60px] mr-4 transition-transform duration-300 hover:rotate-12">
//             <img
//               src={mmlogo}
//               alt="Visualize Requirements Icon"
//               className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-45"
//             />
//           </div>
//           <div>
//             <h3 className="text-blue-900 font-bold text-2xl transition-transform duration-300 hover:text-blue-600">
//               Visualize Requirements
//             </h3>
//             <p className="text-orange-500 text-md italic">Enhance your QA process with mind maps</p>
//           </div>
//         </div>

//         {/* Generate Scenarios */}
//         <div className="flex items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all">
//           <div className="w-[50px] h-[50px] mr-4 transition-transform duration-300 hover:rotate-12">
//             <img
//               src={tslogo}
//               alt="Generate Scenarios Icon"
//               className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110 hover:rotate-45"
//             />
//           </div>
//           <div>
//             <h3 className="text-blue-900 font-bold text-2xl transition-transform duration-300 hover:text-blue-600">
//               Generate Scenarios
//             </h3>
//             <p className="text-orange-500 text-md italic">Generate automated test scenarios for your requirements</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-[40px] text-center">
//         <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-2xl font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:bg-blue-500 hover:shadow-xl transform hover:scale-105 flex items-center justify-center mx-auto">
//           Explore All Products
//           <span className="ml-2 text-3xl transform transition-transform duration-200 hover:translate-x-1">&rarr;</span>
//         </button>
//       </div>
//     </div>
//   );
// };

const FeaturedProductsCard: React.FC = () => {
  return (
    <div className="max-w-md mr-[60px] rounded-[40px] border border-gray-300 shadow-lg p-6 relative bg-[#F8F9FA] transition-transform duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Featured Products</h2>
      <Divider />
      <div className="space-y-[40px]">
        {/* Requirement Scanner */}
        <div className="flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
          <div className="w-[130px] h-[130px] mr-4 transition-transform duration-300 hover:scale-110">
            <img src={amblogo} alt="Requirement Scanner Icon" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-blue-900 font-bold text-2xl transition-transform duration-300 hover:text-blue-600">Requirement Scanner</h3>
            <p className="text-orange-500 text-md">Analyze and resolve ambiguities for your user story</p>
          </div>
        </div>
        {/* Visualize Requirements */}
        <div className="flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
          <div className="w-[100px] h-[70px] mr-4 transition-transform duration-300 hover:scale-110">
            <img src={mmlogo} alt="Visualize Requirements Icon" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-blue-900 font-bold text-2xl transition-transform duration-300 hover:text-blue-600">Visualize Requirements</h3>
            <p className="text-orange-500 text-md">Enhance your QA process with mind maps</p>
          </div>
        </div>
        {/* Generate Scenarios */}      
        <div className="flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
          <div className="w-[140px] h-[70px] mr-4 transition-transform duration-300 hover:scale-110">
            <img src={tslogo} alt="Generate Scenarios Icon" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-blue-900 font-bold text-2xl transition-transform duration-300 hover:text-blue-600">Generate Scenarios</h3>
            <p className="text-orange-500 text-md">Generate automated test scenarios for your requirements</p>
          </div>
        </div>
      </div>

      <div className="mt-[40px]">
        <button className="text-blue-900 text-3xl font-semibold hover:text-blue-600 flex items-center transition-transform duration-200">
          Explore All Products
          <span className="ml-2 text-3xl">&rarr;</span>
        </button>
      </div>
    </div>
  );
};



const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative mx-auto">
        <div className="flex flex-col lg:flex-row mt-[40px] relative z-10">
          <div className="mx-auto mb-10 text-center lg:text-left">
            <h5 className="mb-6 text-5xl font-extrabold leading-tight text-[#F16729FF]">
              Level Up Your QA Game with
            </h5>
            <Divider />
            <p className="mb-6 text-lg text-[#262C66FF]">
              Leveraging the power of Artificial Intelligence,
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-8 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none transform hover:scale-105"
                onClick={()=> navigate('/sign-up')}
              >
                Get Started For Free
              </button>
              {/* <a
                href="/"
                aria-label="Learn more"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-600 hover:text-indigo-800"
              >
                Learn More
              </a> */}
            </div>
          </div>
          <FeaturedProductsCard />
        </div>

        {/* Illustration */}
        <div className="absolute top-[200px] left-[100px] w-[800px] h-[800px] z-0 overflow-hidden">
          <img src={illustration1} alt="Illustration" className="w-full h-auto opacity-100" />
        </div>
      </div>
      <div className='mt-[40px]'></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
