# 🛍️ Item Showcase Web App

A simple and interactive React app that lets users add and view items (e.g., clothing, shoes, gear). Built with Zustand for state management, Framer Motion for smooth animations, Swiper.js for image carousels, and React Router for navigation.

## ✨ Features

- 🔄 Add new items via a form (with name, type, description, and images)
- 🖼️ View all items in a responsive grid layout
- 📸 Carousel preview of item images in a modal view
- 📧 Enquiry button to contact via email
- 🗑️ Delete items from the list
- 🌑 Dark mode support (via Tailwind)
- 💾 State persists with Zustand (can be disabled easily)

---
---

## 🌐 Deployed Link

The project is live and accessible at:

🔗 [https://moonlit-bubblegum-c8640f.netlify.app/view-items](https://moonlit-bubblegum-c8640f.netlify.app/view-items)

---

## 🧪 Tech Stack

- ⚛️ **React** (Vite)
- 💨 **Tailwind CSS**
- 🧠 **Zustand** (state management)
- 🎞 **Swiper.js** (image carousel)
- 🎬 **Framer Motion** (animations)
- 🔀 **React Router**
- ✉️ `mailto:` link for enquiries

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/item-showcase.git
cd item-showcase
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Run the App
```bash
npm run dev
```
The app will be available at http://localhost:5173 (or as shown in your terminal).

---

# 📁 Folder Structure
```bash
src/
│
├── components/        # Reusable UI components
│   ├── ItemCard.jsx
│   ├── ItemForm.jsx
│   └── ItemModal.jsx
│
├── data/              # Zustand store
│   └── useItemStore.js
│
├── pages/             # Route pages
│   ├── ViewItems.jsx
│   └── AddItem.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```
---

# 🖼️ Sample Images
- Place static fallback images inside public/static/ like:
```cpp
public/
└── static/
    ├── shirt.jpg
    ├── shirt-2.jpg
    ├── shoes.jpg
    └── shoes-2.jpg
```

---

# 💡 Future Improvements (Optional)
- Upload images to a backend (e.g., Cloudinary, Firebase)

- Add enquiry form modal (instead of mailto)

- Export items as PDF

- Filter/sort items
