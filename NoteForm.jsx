import React, {Component} from 'react';
import './NoteForm.css';

class Noteform extends Component{
    constructor(props){
      super(props);
      this.state={
        newNoteContent: 'something',
      };
      this.handleUserInput=this.handleUserInput.bind(this);
      this.writeNote = this.writeNote.bind(this);
    }

handleUserInput(e){
  console.log(this);
  this.setState({
    newNoteContent: e.target.value,
  })
}

writeNote(){

  this.props.addNote(this.state.newNoteContent);

  this.setState({
    newNoteContent: '',
  })
}

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput" placeholder="Write a new note..."
                 value={this.state.newNoteContent}
                 onChange={this.handleUserInput}
                /
                >
                <button className = "noteButton" onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }

}

export default Noteform;
