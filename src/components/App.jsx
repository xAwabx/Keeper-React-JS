import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([])


  function mapNotes(noteTitle, noteContent) {
    console.log("submitted!!")
    setNotes(prev=>
      ([...prev,
      {
        title: noteTitle,
        content: noteContent
      }])
    )
    console.log(notes)
  }

  function deleteNote(id) {
    console.log(`delete the one with index: ${id}`)
    setNotes((prev)=>{
      return prev.filter((obj, index)=> (index != id))
    })
  }

  
  return (
    <div>
      <Header />
      <CreateArea noteMap={mapNotes}/>
      {notes.map((note, index)=>{
      return <Note key={index} id={index} title={note.title} content={note.content} deleteFunction={deleteNote}/>
    })}
      <Footer />
    </div>
  );
}

export default App;
