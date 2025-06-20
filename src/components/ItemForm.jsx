// components/ItemForm.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const ItemForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    coverImage: "",
    additionalImages: [],
  });

  const [success, setSuccess] = useState(false);

  const handleImageUpload = (e, isCover = false) => {
    const files = Array.from(e.target.files);

    if (isCover) {
      const imageURL = URL.createObjectURL(files[0]);
      setFormData((prev) => ({ ...prev, coverImage: imageURL }));
    } else {
      const urls = files.map((file) => URL.createObjectURL(file));
      setFormData((prev) => ({
        ...prev,
        additionalImages: urls,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.coverImage) {
      alert("Item name and cover image are required");
      return;
    }

    onSubmit(formData);
    setSuccess(true);

    setFormData({
      name: "",
      type: "",
      description: "",
      coverImage: "",
      additionalImages: [],
    });

    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 space-y-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        Add New Item
      </h2>

      {success && (
        <motion.div
          className="text-green-600 bg-green-100 border border-green-400 rounded p-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Item successfully added!
        </motion.div>
      )}

      <div>
        <label className="block font-semibold text-gray-700 dark:text-gray-300">
          Item Name
        </label>
        <input
          type="text"
          className="w-full mt-1 p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700 dark:text-gray-300">
          Item Type
        </label>
        <select
          className="w-full mt-1 p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="Shirt">Shirt</option>
          <option value="Pant">Pant</option>
          <option value="Shoes">Shoes</option>
          <option value="Sports Gear">Sports Gear</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold text-gray-700 dark:text-gray-300">
          Description
        </label>
        <textarea
          className="w-full mt-1 p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
          rows="4"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Cover Image
        </label>
        <label className="inline-block bg-blue-600 text-white font-medium px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
          Choose Cover Image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e, true)}
            required
          />
        </label>
        {formData.coverImage && (
          <img
            src={formData.coverImage}
            alt="Cover Preview"
            className="mt-2 h-40 rounded-md object-cover"
          />
        )}
      </div>

      <div>
        <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Additional Images
        </label>
        <label className="inline-block bg-gray-500 text-white font-medium px-4 py-2 rounded-full cursor-pointer hover:bg-gray-600 transition">
          Choose Additional Images
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => handleImageUpload(e, false)}
          />
        </label>
        <div className="flex flex-wrap mt-2 gap-2">
          {formData.additionalImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Additional ${idx}`}
              className="h-20 w-20 rounded-md object-cover"
            />
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Add Item
        </button>
      </div>
    </motion.form>
  );
};

export default ItemForm;
