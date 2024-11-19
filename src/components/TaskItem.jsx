import "/src/components/style/taskItem.css";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <>
      <div className="addedTask">
        <div className="TaskHolder">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            />
          <p>{task.text}</p>
          <span className="checkmark"></span>
          </div>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </>
  );
}
