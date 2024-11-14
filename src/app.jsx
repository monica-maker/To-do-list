import CompletedTab from "./components/CompletedTab";
import ToDoTab from "./components/ToDoTab";
import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <h1>Todo list app</h1>
        <button>Todo</button>
        <button>Completed Task</button>
      </div>
      <ToDoTab />
      <CompletedTab />
    </>
  );
}
