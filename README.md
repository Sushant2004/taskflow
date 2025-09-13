# ✨ Modern Todo List Application

A beautiful, modern, and fully functional Todo List application built with React and Vite. This application allows users to add, edit, delete, and mark tasks as completed with a sleek, responsive user interface.

## 🚀 Features

- ✅ **Add New Todos** - Create new tasks with a simple input field
- ✏️ **Edit Existing Todos** - Click edit to modify any task
- 🗑️ **Delete Todos** - Remove tasks you no longer need
- ☑️ **Mark as Complete** - Toggle task completion status
- 📊 **Statistics Dashboard** - View total, completed, and remaining tasks
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- ⌨️ **Keyboard Shortcuts** - Press Enter to add, Escape to cancel editing
- 📱 **Mobile Responsive** - Works perfectly on all device sizes

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd todo-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
todo-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Application header component
│   │   ├── ToDoItem.jsx        # Individual todo item component
│   │   └── ToDoList.jsx        # Todo list container component
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles with Tailwind
├── index.html                 # HTML template
├── package.json               # Project dependencies
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # Project documentation
```

## ⌨️ Keyboard Shortcuts

- **Enter**: Add new todo or save edited todo
- **Escape**: Cancel editing mode

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

---

**Happy Todo-ing! 🎉**