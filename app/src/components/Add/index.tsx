import React, { useRef, useState } from "react";
import "./style.css"

const Add = ({ addItem }: { addItem: any }):JSX.Element => {
  // for multiple inputs useReducer \\ as of now keep it simple
  const [title, setTitle] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title) {
      addItem({ title });
      clearForm();
    } else {
      titleRef.current?.classList.add('validation-error');
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    titleRef.current?.classList.remove('validation-error');
    setTitle(e.target.value);
  }

  const clearForm = () => {
    setTitle("");
  }

  return <div className="input-container">
    <form onSubmit={(e) => onSubmit(e)}>
      <input 
        name="title" 
        type="text" 
        ref={titleRef} 
        value={title} 
        onChange={(e) => onChange(e)} 
      />

      <span className="msg">Title is not valid.</span>
      <input type="submit" value="Add" />
    </form>
  </div>
}

export default Add;