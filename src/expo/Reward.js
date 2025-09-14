import { FaMedal, FaLeaf } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import Footer from './Footer.js';

function Reward() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center text-gray-800 p-6 pt-24 pb-24">
      {/* Header */}
      <h1 className="bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 text-white shadow-md text-4xl text-center p-4 mb-8 font-bold w-full fixed top-0">
        Rewards
      </h1>

      {/* Next Reward */}
      <div className="bg-white w-[90%] rounded-2xl p-8 mb-10 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Next Reward</h2>
        <p className="mb-3 text-lg text-gray-700">
          Walk 10 km more to unlock <span className="font-bold text-teal-600">Silver Walker</span> Badge
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-400 to-teal-500 h-4 rounded-full w-[70%] transition-all duration-500"></div>
        </div>
      </div>

      {/* Your Badges */}
      <div className="bg-white w-[90%] rounded-2xl p-6 mb-6 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Your Badges</h2>
        <div className="flex gap-10 justify-center">
          <div className="flex flex-col items-center">
            <FaMedal size={50} className="text-yellow-500 drop-shadow-md" />
            <p className="text-lg mt-2 font-medium">Bronze Walker</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLeaf size={50} className="text-green-500 drop-shadow-md" />
            <p className="text-lg mt-2 font-medium">Eco Saver</p>
          </div>
        </div>
      </div>

      {/* Redeemable Points */}
      <div className="bg-white w-[90%] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4 text-teal-700">Your Points</h2>
        <p className="text-4xl font-bold mb-5 text-gray-800">120 pts</p>
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 text-white px-5 py-3 rounded-xl text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
          <MdCardGiftcard size={24} /> Redeem Rewards
        </button>
      </div>

      {/* Footer */}
      <div className="w-full fixed bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Reward;
