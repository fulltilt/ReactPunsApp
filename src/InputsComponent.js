import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


const buttonStyle = {
	margin: 12
}

const InputsComponent = ({ keyword, onKeywordChange, handleIdeaOpen, ideasOpen, handleIdeaClose, getPuns, listen }) => {
	const actions = [
	  <FlatButton
	    label="CLOSE"
	    primary={true}
	    onTouchTap={handleIdeaClose}
	  />
	];

	return (
		<div>
			<TextField hintText="Enter keyword" 
							 value={keyword} 
							 onChange={onKeywordChange}/>
		
			<RaisedButton label="Need ideas?" secondary={true} onClick={handleIdeaOpen} style={buttonStyle} />
		  <Dialog
		    title="Suggested Inputs"
		    actions={actions}
		    modal={false}
		    open={ideasOpen}
		    onRequestClose={handleIdeaClose}>
		    Some ideas for search! Try banana, cheese, bird, hotel, mexican, cow, egg, or food!
		  </Dialog>

			<RaisedButton label="Get puns" primary={true} onClick={getPuns}  style={buttonStyle} />
			<RaisedButton label="Listen" primary={true} onClick={listen} style={buttonStyle} />
			<RaisedButton label="Snapshot" primary={true} style={buttonStyle} />
		</div>
	);
};

export default InputsComponent;