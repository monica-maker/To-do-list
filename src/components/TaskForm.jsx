export default function TaskForm() {
  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={""}
            onChange={""}
            placeholder="Add your task here"
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  );
}
