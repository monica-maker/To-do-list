import TaskItem from "./TaskItem";

export default function CompletedTab({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <>
      <div className="completedTask">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </>
  );
}
