import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { id: Date.now(), name: newItem }]);
      setNewItem('');
    }
  };

  const handleEditItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    setEditingItem(itemToEdit);
    setNewItem(itemToEdit.name);
  };

  const handleUpdateItem = () => {
    if (editingItem) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingItem.id ? { ...item, name: newItem } : item
        )
      );
      setNewItem('');
      setEditingItem(null);
    }
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
       <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleEditItem(item.id)}>Edit</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={editingItem ? handleUpdateItem : handleAddItem}>
          {editingItem ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
