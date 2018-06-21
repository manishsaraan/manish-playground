import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = firebase.initializeApp({});
    this.database = this.app.database().ref();
    this.notes = this.database.child('notes');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;
    // const notesRef = this.app.database().ref('notes');

    // DataSnapshot
    this.notes.orderByKey().on('child_added', snap => {
      const key = snap.val().id;
        console.log(snap.key)
      // if(key === 860521){
        previousNotes.push({
          id: snap.key,
          noteContent: snap.val().noteContent,
        })
      // }
        this.setState({
          notes: previousNotes
        });
    })
    this.notes.orderByKey().on('child_changed', snap => {
      const key = snap.val().id;
        console.log(snap.key)
      // if(key === 860521){
        previousNotes.push({
          id: snap.key,
          noteContent: snap.val().noteContent,
        })
      // }
        this.setState({
          notes: previousNotes
        });
    })
    this.notes.on('child_removed', snap => {
      console.log('removed',snap.val());

      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note){
    this.notes.push().set({ userId: 55272362360,noteContent: note});
  }

  removeNote(noteId){
    this.database.child('notes/'+noteId).update({id: '1111111111', noteContent: 'this is updated....'});
    console.log("from the parent: " + noteId);
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} 
                noteId={note.id} 
                key={note.id} 
                removeNote ={this.removeNote}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
