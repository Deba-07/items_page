import { useState } from "react";
import useItemStore from "../data/useItemStore";
import ItemCard from "../components/ItemCard";
import ItemModal from "../components/ItemModal";

const staticItems = [
  {
    name: "Classic White Shirt",
    type: "Shirt",
    description: "A timeless classic white shirt made of pure cotton.",
    coverImage: "/static/shirt.jpg",
    additionalImages: ["/static/shirt-2.jpeg", "/static/shirt-3.jpeg"],
  },
  {
    name: "Running Shoes",
    type: "Shoes",
    description: "Comfortable and durable running shoes for everyday use.",
    coverImage: "/static/shoes.jpg",
    additionalImages: ["/static/shoes-2.jpg", "/static/shoes-3.jpg"],
  },
];


const ViewItem = () => {
  const userItems = useItemStore((state) => state.items);
  const items = userItems.length > 0 ? userItems : staticItems;
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        View Items
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No items found. Please add some.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {items.map((item, index) => (
            <ItemCard
              key={index}
              item={item}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      )}

      <ItemModal
        item={selectedItem}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default ViewItem;
