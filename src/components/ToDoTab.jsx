import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

export default function ToDoTab({
  tasks,
  onToggleTask,
  onDeleteTask,
  onAddTask,
}) {
  return (
    <>
      <div>
        <div>
          <TaskForm onAddTask={onAddTask} />
        </div>
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
