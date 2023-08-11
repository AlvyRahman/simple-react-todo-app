import { useState } from "react";

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem !== "") {
      addTodo(newItem);
    }

    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="item-label" htmlFor="item">
          New Item
        </label>
        <p></p>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <p></p>
      <button className="add-item-button">Add Item</button>
    </form>
  );
}
