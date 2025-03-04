import { FaUser, FaBox, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";

const AccountDropdownCard = () => {
  return (
    <div className="absolute top-full right-0 mt-2 w-60 bg-transparent backdrop-blur-md shadow-lg shadow-gray-900/50 rounded-2xl p-4 flex flex-col gap-3 text-white border border-gray-500">
      <div className="flex items-center gap-2 hover:text-amber-300 cursor-pointer">
        <FaUser /> Manage My Account
      </div>
      <div className="flex items-center gap-2 hover:text-amber-300 cursor-pointer">
        <FaBox /> My Order
      </div>
      <div className="flex items-center gap-2 hover:text-amber-300 cursor-pointer">
        <FaTimesCircle /> My Cancellations
      </div>
      <div className="flex items-center gap-2 hover:text-amber-300 cursor-pointer">
        <FaStar /> My Reviews
      </div>
      <div className="flex items-center gap-2  hover:text-red-700 cursor-pointer">
        <FaSignOutAlt /> Logout
      </div>
    </div>
  );
};

export default AccountDropdownCard;
