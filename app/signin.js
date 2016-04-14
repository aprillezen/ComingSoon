import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Input, Button, Grid, Row, Col} from 'react-bootstrap'
import _ from 'lodash'
import LoginAlert from '../component/appAlerts'

class AppLogin extends React.Component {
	constructor(props, context){
		super(props);	
		context.router
		this.state = {
			uStyle: null,
			pStyle: null,
			user: "",
			hasError: false,
			errorMsg:''

		}
		this.submitForm = this.submitForm.bind(this);	
		this.inputOnChange = this.inputOnChange.bind(this);
	}

	inputOnChange(e){		
		//console.log(e.target.name)		
		if (_.isEqual(e.target.name,"username")){
			this.setState({ hasError: false, errorMsg:'', uStyle: null, user: e.target.value });
		}else if (_.isEqual(e.target.name,"password")){
			this.setState({ hasError: false, errorMsg:'', pStyle: null, pwd: e.target.value });
		}		
	}

	submitForm(e){
		e.preventDefault();		
		var err="Invalid username/password!"

		if (_.isEmpty(this.state.user)){
			this.setState({ hasError: true, errorMsg: err, uStyle: "error" });	
			return
		}else if (_.isEmpty(this.state.pwd)){
			this.setState({ hasError: true, errorMsg: err, pStyle: "error" });	
			return
		}	
		this.context.router.replace('/home')
		//console.log("submit");
	}

	render(){
   		return (
   		<Grid>
   			<form onSubmit={ this.submitForm }>
				<Row className="show-grid">				  
					<Col sm={6} md={4} mdOffset={4}>
					  <LoginAlert hasError={this.state.hasError} errorMsg={this.state.errorMsg}/>					
					  <Input name="username" bsStyle={this.state.uStyle} type="text" placeholder="User Name" onChange={this.inputOnChange} value={this.state.user} />
					  <Input name="password" bsStyle={this.state.pStyle} type="password" placeholder="Password" onChange={this.inputOnChange} value={this.state.pwd}/>
					  <Button bsStyle="primary" block type="submit">Login </Button>
					 </Col> 
				</Row>
			</form>	
		</Grid>
   		)
   }
}

AppLogin.contextTypes = { router: React.PropTypes.object.isRequired }
export default AppLogin