import React, { useEffect, useState } from 'react';

import List from "./components/List"
import Add from "./components/Add"
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from './types/TodoItem';
import { API_URL } from './constants';

const App = ()  => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>();
  
  const addItem = async (newItem: TodoItem) => {

    await fetch(API_URL + 'add', {
      method: "POST",
      body: JSON.stringify(newItem)
    }).then(() => {

      setTodoItems((prevState = []) => [
        ...prevState,
        {
          id: uuidv4(),
          title: newItem.title
        }]
      )
    }).catch((e)=> {
      // catch server error
    })    
  }
  
  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch(API_URL + 'list');
      const items = await response.json();
      setTodoItems(items);
    };

    fetchData();
  }, [])

  return (
    <div className="app-container">
      <List items={todoItems}/>
      <Add addItem={addItem}/>
    </div>
  );
}

export default App;
