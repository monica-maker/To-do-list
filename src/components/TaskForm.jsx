import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text);
      setText("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add your task here"
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}
