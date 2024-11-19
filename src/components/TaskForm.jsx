import { useState } from "react";
import "/src/components/style/taskForm.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
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
        <div className="addTask">
          <form onSubmit={handleSubmit}>
            <div className="mainInput">
              <input
                className="input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add your task here"
              />
                <button id="addButton" type="submit"><AddBoxIcon className="icon"/></button>
            </div>
          </form>
        </div>
    </>
  );
}
