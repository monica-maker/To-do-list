import ToDoTab from "./components/ToDoTab";
import CompletedTab from "./components/CompletedTab";
import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const [activeTab, setActiveTab] = useState("todo");

  const todoTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      <div>
        <h1>Todo list app</h1>
        <button onClick={() => setActiveTab("todo")}>Todo</button>
        <button onClick={() => setActiveTab("completed")}>
          Completed Task
        </button>
      </div>

      {activeTab === "todo" ? (
        <ToDoTab
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          onAddTask={addTask}
          tasks={todoTasks}
        />
      ) : (
        <CompletedTab
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
          tasks={completedTasks}
        />
      )}
    </>
  );
}
