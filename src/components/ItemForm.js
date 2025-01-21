import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // Initialize state correctly
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState("Produce"); // Default category to "Produce"

  // Handle changes to the name field
  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  // Handle changes to the category field
  function handleCategoryChange(event) {
    setItemCategory(event.target.value); // Use event.target.value to get the selected option
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    
    // Create a new item object
    const newItem = {
      id: uuid(),  // Generates a unique ID
      name: itemName,
      category: itemCategory
    };

    // Pass the new item back to the parent
    onItemFormSubmit(newItem);

    // Reset the form fields
    setItemName(''); // Clear the item name
    setItemCategory('Produce'); // Reset category to default "Produce"
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={handleNameChange}
          required
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
