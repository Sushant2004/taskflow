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

## 🎯 Component Architecture

### App Component
- **State Management**: Manages the main todos array and new todo input
- **Event Handlers**: Handles adding, editing, deleting, and toggling todos
- **Props Passing**: Passes data and functions to child components

### Header Component
- **Purpose**: Displays the application title and description
- **Props**: None (static component)

### ToDoList Component
- **Purpose**: Renders the list of todos using map function
- **Props**: todos, onToggleComplete, onDelete, onEdit
- **Features**: Empty state display when no todos exist

### ToDoItem Component
- **Purpose**: Individual todo item with all interactive features
- **Props**: todo, onToggleComplete, onDelete, onEdit
- **Features**: Edit mode, completion toggle, delete functionality

## 🎨 UI/UX Features

- **Gradient Background**: Beautiful gradient from slate-50 to slate-100
- **Card-based Design**: Clean white cards with subtle shadows
- **Hover Effects**: Smooth transitions and hover states
- **Color-coded Statistics**: Different colors for total, completed, and remaining tasks
- **Responsive Grid**: Statistics adapt to different screen sizes
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Interactive Elements**: Buttons with hover states and transitions

## ⌨️ Keyboard Shortcuts

- **Enter**: Add new todo or save edited todo
- **Escape**: Cancel editing mode

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen orientations

## 🎯 Assignment Requirements Met

✅ **React Application with Vite** (5 marks)
- Project created using Vite
- Application runs without errors

✅ **Components** (10 marks)
- App component (2.5 marks)
- Header component (2.5 marks)
- ToDoList component (2.5 marks)
- ToDoItem component (2.5 marks)

✅ **State and Props** (20 marks)
- State management in App component
- Props passed to child components
- Correct data flow between components

✅ **Lists** (10 marks)
- Dynamic list rendering with map function (5 marks)
- Unique keys for each todo item (5 marks)

✅ **Event Handling** (40 marks)
- Add new todo functionality (10 marks)
- Mark todos as completed (10 marks)
- Delete todo functionality (10 marks)
- Edit existing todos (10 marks)

✅ **Styling and User Experience** (5 marks)
- Modern, sleek UI design
- Tailwind CSS for styling
- User-friendly interface

✅ **Submission** (10 marks)
- README with setup instructions (5 marks)
- Git repository ready for commits (5 marks)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created as part of React Assignment 1 - A modern, functional todo list application demonstrating React fundamentals, component architecture, state management, and modern UI design principles.

---

**Happy Todo-ing! 🎉**