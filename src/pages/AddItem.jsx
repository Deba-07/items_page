import ItemForm from "../components/ItemForm";
import useItemStore from "../data/useItemStore";

const AddItem = () => {
  const addItem = useItemStore((state) => state.addItem);

  const handleAddItem = (newItem) => {
    addItem(newItem);
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Add Item
      </h1>

      <ItemForm onSubmit={handleAddItem} />
    </div>
  );
};

export default AddItem;
