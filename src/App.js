import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateItem } from "./ReduxStore/itemsSlice";
import { fetchData } from "./ReduxStore/asynchronousCall";
import React, { useEffect } from "react";
import Products from "./prodcut/Products";
function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const data = useSelector((state) => state.data.data);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: "New Item" }; // Replace with your own item structure
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateItem = (id) => {
    dispatch(updateItem(id));
  };

  useEffect(() => {
    // Fetch todos on component mount
    dispatch(fetchData());
  }, [dispatch]);


 

  return (
    <div className="App">
      <header className="">
        <Products />
        <h1>This is the tool kit Example</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.title}
              {item.price}
              {item.description}
              {item.category}
            </li>
          ))}
        </ul>
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {items?.map((item) => (
            <li key={item.id}>
              {item.id}
              {item.name}
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <button onClick={() => handleUpdateItem(item.id)}>Update</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
export default App;
