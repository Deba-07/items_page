// components/ItemModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useItemStore from "../data/useItemStore.js";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: "-50px",
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: "0px",
    scale: 1,
    transition: { delay: 0.1 },
  },
};

const ItemModal = ({ item, isOpen, onClose }) => {
  const deleteItem = useItemStore((state) => state.deleteItem);

  const handleDelete = () => {
    deleteItem(item.name);
    onClose();
  };

  const handleEnquire = () => {
    alert(`Enquiry submitted for "${item.name}"`);
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-3xl w-full mx-4 relative overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              onClick={onClose}
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-800 dark:text-white">
              {item.name}
            </h2>
            <p className="text-center text-sm mb-4 text-gray-500 dark:text-gray-300">
              {item.type}
            </p>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              spaceBetween={10}
              slidesPerView={1}
              className="rounded-lg overflow-hidden mb-4"
            >
              {[item.coverImage, ...(item.additionalImages || [])].map(
                (src, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={src}
                      alt={`Slide ${idx}`}
                      className="w-full h-100 object-cover"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              {item.description}
            </p>

            {/* Action Buttons */}
            {/* Action Button Centered */}
            <div className="flex justify-center mt-6">
              <a
                href={`mailto:support@example.com?subject=Enquiry about ${encodeURIComponent(
                  item.name
                )}&body=Hi,%0D%0A%0D%0AI would like to enquire about the item "${encodeURIComponent(
                  item.name
                )}".%0D%0AType: ${encodeURIComponent(
                  item.type
                )}%0D%0ADescription: ${encodeURIComponent(item.description)}`}
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition text-center"
              >
                Enquire
              </a>
            </div>

            {/* <div className="flex justify-center gap-4 mt-4">
              <button
              onClick={handleEnquire}
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
              >
              Enquire
              </button>
              <button
               onClick={handleDelete}
               className="bg-red-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition"
             >
               Delete
             </button> 
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ItemModal;
