import React from "react";

import { TodoItem } from "../../types/TodoItem";

const List = ({ items }: { items?: TodoItem[] }) => {

  return <div className="container-list">
      <h2>Todo items</h2>
      {items ? items.map(item => <div key={item.id} className="item">
        <h3>{item.title}</h3>
      </div>) : "No items."}
  
  </div>
}

export default List;