import React, { Component } from 'react';

export default class Form1 extends Component {
    render() {
        return(
					<fieldset title="1">
						<legend className="text-semibold">Event Details</legend>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Event Type:</label>
										<select 
											name="location" 
											data-placeholder="Select position" 
											className="select"
											value={this.props["location"]}
											onChange={this.props.handleChange}>
											<option></option>
											<optgroup label="North America">
												<option value="1">United States</option>
												<option value="2">Canada</option>
											</optgroup>

											<optgroup label="Latin America">
												<option value="3">Chile</option>
												<option value="4">Argentina</option>
												<option value="5">Colombia</option>
												<option value="6">Peru</option>
											</optgroup>

											<optgroup label="Europe">
												<option value="8">Croatia</option>
												<option value="9">Hungary</option>
												<option value="10">Ukraine</option>
												<option value="11">Greece</option>
											</optgroup>

											<optgroup label="Middle East &amp; Africa">
												<option value="21">Egypt</option>
												<option value="22">Israel</option>
												<option value="23">Nigeria</option>
												<option value="24">United Arab Emirates</option>
											</optgroup>

											<optgroup label="Asia Pacific">
												<option value="26">Australia</option>
												<option value="27">China</option>
												<option value="28">India</option>
												<option value="29">Singapore</option>
											</optgroup>
										</select>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Event Title:</label>
										<input 
											type="text" 
											name="event-title" 
											className="form-control" 
											placeholder="Event Title"
											value={this.props["event-title"]}
											onChange={this.props.handleChange}
											></input>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Event Location:</label>
										<input 
											type="text" 
											name="event-date" 
											className="form-control" 
											placeholder="Location"
											value={this.props["event-date"]}
											onChange={this.props.handleChange}></input>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label>Email Address of Organizer:</label>
										<input 
											type="email" 
											name="email" 
											className="form-control" 
											placeholder="your@email.com"
											value={this.props.email}
											onChange={this.props.handleChange}>
											</input>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Phone #:</label>
										<input 
											type="text" 
											name="tel" 
											className="form-control" 
											placeholder="+99-99-9999-9999" 
											data-mask="+99-99-9999-9999"
											value={this.props.tel}
											onChange={this.props.handleChange}>
											</input>
									</div>
								</div>

								<div className="col-md-6">
									<label>Date of Event:</label>
									<div className="row">
										<div className="col-md-4">
											<div className="form-group">
												<select 
													name="birth-month" 
													data-placeholder="Month" 
													className="select"
													value={this.props["birth-month"]}
													onChange={this.props.handleChange}>
													<option></option>
													<option value="1">January</option>
													<option value="2">February</option>
													<option value="3">March</option>
													<option value="4">April</option>
													<option value="5">May</option>
													<option value="6">June</option>
													<option value="7">July</option>
													<option value="8">August</option>
													<option value="9">September</option>
													<option value="10">October</option>
													<option value="11">November</option>
													<option value="12">December</option>
												</select>
											</div>
										</div>

										<div className="col-md-4">
											<div className="form-group">
												<select 
													name="birth-day" 
													data-placeholder="Day" 
													className="select"
													value={this.props["birth-day"]}
													onChange={this.props.handleChange}>
													<option></option>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
													<option value="6">6</option>
													<option value="7">7</option>
													<option value="8">8</option>
													<option value="9">9</option>
													<option value="...">...</option>
													<option value="31">31</option>
												</select>
											</div>
										</div>

										<div className="col-md-4">
											<div className="form-group">
												<select 
													name="birth-year" 
													data-placeholder="Year" 
													className="select"
													value={this.props["birth-year"]}
													onChange={this.props.handleChange}>
													<option></option>
													<option value="1">1980</option>
													<option value="2">1981</option>
													<option value="3">1982</option>
													<option value="4">1983</option>
													<option value="5">1984</option>
													<option value="6">1985</option>
													<option value="7">1986</option>
													<option value="8">1987</option>
													<option value="9">1988</option>
													<option value="10">1989</option>
													<option value="11">1990</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
						</fieldset>		
        )
    }
}