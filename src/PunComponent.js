import React, { Component } from 'react';
import NavComponent from './NavComponent';
import InputsComponent from './InputsComponent';
import ResultsComponent from './ResultsComponent';
import { getPuns, suggestKeywords } from './PunService';
// import { listen } from './SpeechService';


const h2Style = {
	fontWeight: 500
}

const SpeechRecognition = window && (
  window.SpeechRecognition || window.webkitSpeechRecognition || 
  window.mozSpeechRecognition || window.msSpeechRecogntion
);

function cleanSpeechResults(results) {
  return (
    Array.from(results)
      .reduce((final, result) =>
          final.concat(Array.from(result, x => x.transcript)), []
      )
  );
}

class PunComponent extends Component {
	constructor() {
    super();

    this.state = {
    	menuOpen: false,
    	ideasOpen: false,
    	keyword: '',
    	puns: [],
    	suggestions: [],
    	anchorEl: {}
    };
  }

  clickMenu = (event) => {
  	// This prevents ghost click.
    event.preventDefault();

    this.setState({
      menuOpen: true,
      anchorEl: event.currentTarget,
    });
  }

  closeMenu = () => {
    this.setState({
      menuOpen: false,
    });
  }

  handleIdeaOpen = () => {
  	this.setState({ ideasOpen: true});
  }

  handleIdeaClose = () => {
  	this.setState({ ideasOpen: false});
  }

  getPuns = () => {
		getPuns(this.state.keyword.split(' '))
			.then(puns => this.setState({ puns }));
		
		this.setState({
			keyword: ''
		});
	}

	getSuggestedKeywords = () => {
		suggestKeywords(this.state.keyword)
			.then(suggestions => this.setState({ suggestions }));
	}

	listen = () => {
		let speech = new SpeechRecognition();
		
		speech.addEventListener('result', (event) => {
    	const results = cleanSpeechResults(event.results);
    	console.log(results)
    	getPuns(results[0].split(' '))
    		.then(puns => this.setState({ puns }));
    });

  	speech.addEventListener('error', (err) => console.log.error(err));

		speech.start();
		console.log('Ready to receive voice input...');
	}

	onKeywordChange = (e, newValue) => {
		this.setState({ keyword: newValue }, () => this.getSuggestedKeywords());
	}

	render() {
		return (
			<div>
				<NavComponent clickMenu={this.clickMenu} 
											closeMenu={this.closeMenu} 
											menuOpen={this.state.menuOpen} 
											anchorEl={this.state.anchorEl} />

				<div className="container">
					<h2 style={h2Style}>Search for Puns</h2>
					<InputsComponent keyword={this.state.keyword}
													 onKeywordChange={this.onKeywordChange}
													 handleIdeaOpen={this.handleIdeaOpen}
													 ideasOpen={this.state.ideasOpen}
													 handleIdeaClose={this.handleIdeaClose}
													 getPuns={this.getPuns}
													 listen={this.listen} />
					
					<ResultsComponent suggestions={this.state.suggestions} puns={this.state.puns} />
				</div>

			</div>
		);
	}
};

export default PunComponent;