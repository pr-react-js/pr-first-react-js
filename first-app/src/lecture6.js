import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component{
	constructor(){
		super()
		this.state = {
			count: 0
		}
	}
	updateCount(){
		this.setState((prevState, props) => {
	      return { count: prevState.count + 1 }
	    })
	}
	updateCount1 = () => {
		this.setState({
			count: this.state.count+1
		})
	}
	render(){
		return (
			/*<button onClick={this.updateCount1}>
				Clicked {this.state.count} times
			</button>*/
			<button onClick={()=>this.updateCount()}>
				Clicked {this.state.count} times
			</button>
		)
	}
}

ReactDOM.render(
	<Button/>
	,
	document.getElementById('root')
)