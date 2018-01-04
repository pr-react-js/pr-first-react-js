import React from 'react'

class Welcome extends React.Component{
	render(){
		//return <h1>Welcome, {this.props.name}, {this.props.title}</h1>
		var component = <div>
							<h1>Welcome, {this.props.name}</h1>
						</div>
		return component
	}
}

export default Welcome