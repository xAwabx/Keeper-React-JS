import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    props.noteMap(title, content);
    setTitle(""); // Clear the input fields after submission
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={(event) => {
            setContent(event.target.value);
          }}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
