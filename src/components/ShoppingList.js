import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState('');

  // Handle adding new item
  function handleItemFormSubmit(newItem) {
    setItems((items)=> [...items, newItem]);
  }

  // Handle category change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items by category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true; // Show all items
    return item.category === selectedCategory; // Filter by selected category
  });

  // Filter items by search query
  const filteredItems = itemsToDisplay.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  // Handle search input change
  function handleSearchChange(event) {
    setSearchItem(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        search={searchItem} 
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
