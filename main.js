import React, { Component} from 'react'

class Main extends Component{

	render(){
		return(<div>
					<div className="container">
					    <div className="row header">
					        <div className="col-sm-4 logo">
					           
					        </div>
					        <div className="col-sm-8 call-us">
					            <p>Email: <span>sales@academbox.com</span></p>
					        </div>
					    </div>
					</div>

					<div className="coming-soon">
					    <div className="inner-bg">
					        <div className="container">
					            <div className="row">
					                <div className="col-sm-12">
					                    <h2>We're Coming Soon</h2>
					                    <p>We are working very hard on the new version of our site. It will bring a lot of new features. Stay tuned!</p>
					                    <div className="timer">
					                        <div className="days-wrapper">
					                            <span className="days"></span> <br/>days
					                        </div>
					                        <div className="hours-wrapper">
					                            <span className="hours"></span> <br/>hours
					                        </div>
					                        <div className="minutes-wrapper">
					                            <span className="minutes"></span> <br/>minutes
					                        </div>
					                        <div className="seconds-wrapper">
					                            <span className="seconds"></span> <br/>seconds
					                        </div>
					                    </div>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>

					<div className="container">
					    <div className="row">
					        <div className="col-sm-12 subscribe">
					            <h3>Subscribe to our newsletter</h3>
					            <p>Sign up now to our newsletter and you'll be one of the first to know when the site is ready:</p>                    
					            <form className="form-inline" role="form" action="assets/subscribe.php" method="post">
					            	<div className="form-group">
					            		<label className="sr-only" for="subscribe-email">Email address</label>
					                	<input type="text" name="email" placeholder="Enter your email..." className="subscribe-email form-control" id="subscribe-email" />
					                </div>
					                <button type="submit" className="btn">Subscribe</button>
					            </form>
					            <div className="success-message"></div>
					            <div className="error-message"></div>
					        </div>
					    </div>
					    <div className="row">
					        <div className="col-sm-12 social">
					            <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook"></i></a>
					            <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter"></i></a>
					            <a href="#" data-toggle="tooltip" data-placement="top" title="Dribbble"><i className="fa fa-dribbble"></i></a>
					            <a href="#" data-toggle="tooltip" data-placement="top" title="Google Plus"><i className="fa fa-google-plus"></i></a>
					            <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i className="fa fa-pinterest"></i></a>
					            <a href="#" data-toggle="tooltip" data-placement="top" title="Flickr"><i className="fa fa-flickr"></i></a>
					        </div>
					    </div>
					</div>
				</div>
			)
	}
}

export default Main

