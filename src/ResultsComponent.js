import React from 'react';


const h2Style = {
	fontWeight: 500
};

const ResultsComponent = ({ suggestions, puns }) => (
	<div>
		<div>
			<h2 style={h2Style}>Suggested Keywords</h2>
			<div>
				{suggestions.map((suggestion, i) => (
					<p key={i}>{suggestion}</p>
				))}
			</div>
		</div>

		<div>
			<h2 style={h2Style}>Puns Found</h2>

			<div>
	      {
	      	puns.length > 0 ? puns.map((pun, i) => (
	        	<p key={i}>{pun.pun} {pun.answer}</p>
	      	)) : 'No puns found'
	      }
	    </div>
	  </div>
	</div>
);

export default ResultsComponent;