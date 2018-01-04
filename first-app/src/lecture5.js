import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component{

	render(){
		return (
			<div>
				<h1>Hello, {this.props.name}</h1>
				<p>{this.props.children}</p>
			</div>
		)
	}
}

//set default value to props
Welcome.defaultProps = {
	name:"Phearun"
}

ReactDOM.render(
	/*<Welcome name="Dara">How are you?</Welcome>*/
	<Welcome>How are you?</Welcome>
	,
	document.getElementById('root')
)