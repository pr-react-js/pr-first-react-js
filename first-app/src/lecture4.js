import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Footer from './components/footer'

ReactDOM.render(
	<div>
		<Header/>
		<h1>Content Body</h1>
		<Footer/>
	</div>
	,
	document.getElementById('root')
)