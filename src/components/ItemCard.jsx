// components/ItemCard.jsx
import { motion } from "framer-motion";

const ItemCard = ({ item, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="cursor-pointer rounded-2xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-xl p-4 flex flex-col items-center w-full sm:w-72 md:w-64"
    >
      <div className="w-full h-48 overflow-hidden rounded-xl mb-3">
        <img
          src={item.coverImage}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">{item.type}</p>
      </div>
    </motion.div>
  );
};

export default ItemCard;
