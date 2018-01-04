import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component{
	render(){
		//return <h1>Welcome, {this.props.name}, {this.props.title}</h1>
		var component = <div>
							<h1>Welcome, {this.props.name}</h1>
						</div>
		return component
	}
}

ReactDOM.render(
	<Welcome name="ReactJS" title="My title"/>
	,
	document.getElementById('root')
)