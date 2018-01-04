import React from 'react'
import ReactDOM from 'react-dom'

var myStyle = {
	color: 'red'
};

ReactDOM.render(
	<div>
		<h1 style={{color:'#fff', backgroundColor:'blue'}}>Welcome ReactJS</h1>
		<p style={myStyle}>A quick start project with ReactJS.</p>
	</div>
	,
	document.getElementById('root')
);