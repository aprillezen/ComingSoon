import  React, { Component, PropTypes } from 'react'
import { Button, Grid } from 'react-bootstrap'

class appHome extends React.Component {
	constructor(props){
		super(props);
		this.state = {counter: props.initialCount };
		this.tick = this.tick.bind(this);
	}

	tick(){
		this.setState({ counter: this.state.counter + 1 });

	}

	render(){
		return (
	   		<Grid>
	   		    <h1> State : {this.state.counter}</h1>
	   		    <br/>	   		    
	   		    <h1> Props : {this.props.initialCount}</h1>
	   		    <br/>
	   			<Button bsStyle="primary" onClick = {this.tick}>Set State</Button>

	   		</Grid>
	   		);
	   }

}

appHome.propTypes = { initialCount: React.PropTypes.number};
appHome.defaultProps = { initialCount:1 };

export default appHome

