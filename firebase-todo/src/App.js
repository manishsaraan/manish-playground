import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import ViewNote from './Note/View';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.viewNote = this.viewNote.bind(this);

    this.app = firebase.initializeApp({
    apiKey: "AIzaSyAHUVdYP4FCN7t2rfvjoIWCpTWOBzVbsPc",
    authDomain: "funapp-3efa1.firebaseapp.com",
    databaseURL: "https://funapp-3efa1.firebaseio.com",
    projectId: "funapp-3efa1",
    storageBucket: "funapp-3efa1.appspot.com",
    messagingSenderId: "55272362360"
  });
    this.database = this.app.database().ref('mvp');
    this.notes = this.database.child('notes');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
      noteContent:'',
      isEditing: false,
      noteId: null,
      viewNote: false,
      note: {},
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;
    // get data by key
    this.database.child('notes/-LFa9MFClfSU_Ov-r5eN').on('value', snap => console.log(snap.val()));

    // DataSnapshot get by userId
    this.notes.orderByChild('userId').equalTo(55272362360).on('child_added', snap => {
      const key = snap.val().id;
        previousNotes.push({
          id: snap.key,
          noteContent: snap.val().noteContent,
        });

        this.setState({
          notes: previousNotes
        });
    })
    this.notes.on('child_changed', snap => {
        const key = snap.val().id;
        for(var i=0; i < previousNotes.length; i++){
          if(previousNotes[i].id === snap.key){
            previousNotes.splice(i, 1);
          }
        }
        const previousNotesUpdated = [ ...previousNotes, {
          id: snap.key,
          noteContent: snap.val().noteContent,
        }]

       this.setState({
          notes: previousNotesUpdated
       });
    })
    this.notes.on('child_removed', snap => {
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
    if(this.state.isEditing){
      this.database.child('notes/'+this.state.noteId).update({ userId: 55272362360,noteContent: note});
      this.setState({isEditing: false, noteId: null})
      console.log('sediting');
    }
    else{
      this.notes.push().set({ userId: 55272362360,noteContent: note});
    }
  }

  removeNote(noteId){
    this.database.child('notes/'+noteId).remove();
    console.log("from the parent: " + noteId);
  }

  editNote(noteId, noteContent){
    this.setState({noteContent, isEditing: true, noteId})
  }

  viewNote(note){
    this.setState({note,viewNote:true});
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.viewNote === false && this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} 
                noteId={note.id}
                key={note.id}
                removeNote ={this.removeNote}
                handleEditNote={this.editNote}
                viewNote={this.viewNote}
                />
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm noteContent={this.state.noteContent} addNote={this.addNote} />
        </div>
          {
            this.state.viewNote === true && <ViewNote note={this.state.note}/>
          }
      </div>
    );
  }
}

export default App;
