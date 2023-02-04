import React, { useState } from "react";

function CreateArea(props) {
  const [fullNote, setFullnote] = useState({
    title: "",
    content: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFullnote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          props.submitNote(fullNote);
          event.preventDefault();
          setFullnote({ title: "", content: "" });
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={fullNote.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={fullNote.content}
          onChange={handleInputChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
