export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="delete-button" onClick={(e) => deleteTodo(id)}>
        Delete
      </button>
      <p></p>
    </li>
  );
}
