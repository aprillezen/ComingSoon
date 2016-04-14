import React from 'react'
import { Alert } from 'react-bootstrap'


class LoginAlert extends React.Component {
	constructor(props){
		super(props)		
	}

	render(){		
		if (this.props.hasError){
			return(			
			<Alert bsStyle="danger">
				<h4> {this.props.errorMsg} </h4>				
			</Alert>

			)			
		}else{
			return null
		}
		
	}

}

LoginAlert.propTypes = { hasError: React.PropTypes.bool }
LoginAlert.defaultProps = { hasError: false }
export default LoginAlert

