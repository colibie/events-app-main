import React, { Component } from 'react';

export default class Form4 extends Component {
	render() {
		return (
			<fieldset title="4">
				<legend className="text-semibold">Event Experience</legend>

				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<label>Availability:</label>
							<div className="radio">
								<label>
									<input 
									type="radio" 
									name="availability" 
									className="styled"
									value={this.props["availability"]}
						    	onChange={this.props.handleChange}></input>
									Immediately
								</label>
							</div>

							<div className="radio">
								<label>
									<input 
										type="radio" 
										name="availability" 
										className="styled"
										value={this.props["availability"]}
						    		onChange={this.props.handleChange}></input>
										1 - 2 weeks
									</label>
							</div>

							<div className="radio">
								<label>
									<input 
										type="radio" 
										name="availability" 
										className="styled"
										value={this.props["availability"]}
						    		onChange={this.props.handleChange}></input>
										3 - 4 weeks
							</label>
							</div>

							<div className="radio">
								<label>
									<input 
									type="radio" 
									name="availability" 
									className="styled"
									value={this.props["availability"]}
									onChange={this.props.handleChange}></input>
									More than 1 month
							</label>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-group">
							<label>Additional information:</label>
							<textarea 
								name="additional-info" 
								rows="5" cols="5"
								placeholder="If you want to add any info, do it here." 
								className="form-control"
								value={this.props["additional-info"]}
						    onChange={this.props.handleChange}>>
							</textarea>
						</div>
					</div>
				</div>
			</fieldset>
		)
	}
}
