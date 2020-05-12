import React, { Component } from 'react';

export default class Form3 extends Component {
  render() {
    return (
      <fieldset title="3">
        <legend className="text-semibold">Event Logistics</legend>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Company:</label>
              <input 
                type="text" 
                name="experience-company" 
                placeholder="Company name" 
                className="form-control"
                value={this.props["experience-company"]}
						    onChange={this.props.handleChange}>
              </input>
            </div>

            <div className="form-group">
              <label>Position:</label>
              <input 
                type="text" 
                name="experience-position" 
                placeholder="Company name" 
                className="form-control"
                value={this.props["experience-position"]}
						    onChange={this.props.handleChange}>
              </input>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label>From:</label>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select 
                        name="experience-from-month" 
                        data-placeholder="Month" 
                        className="select"
                        value={this.props["experience-from-month"]}
						            onChange={this.props.handleChange}>
                        <option></option>
                        <option value="January">January</option>
                        <option value="...">...</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <select 
                        name="experience-from-year" 
                        data-placeholder="Year" 
                        className="select"
                        value={this.props["experience-from-year"]}
						            onChange={this.props.handleChange}>
                        <option></option>
                        <option value="1995">1995</option>
                        <option value="...">...</option>
                        <option value="1980">1980</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <label>To:</label>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <select 
                        name="experience-to-month" 
                        data-placeholder="Month" 
                        className="select"
                        value={this.props["experience-to-month"]}
						            onChange={this.props.handleChange}>
                        <option></option>
                        <option value="January">January</option>
                        <option value="...">...</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <select 
                        name="experience-to-year" 
                        data-placeholder="Year" 
                        className="select"
                        value={this.props["experience-to-year"]}
						            onChange={this.props.handleChange}>
                        <option></option>
                        <option value="1995">1995</option>
                        <option value="...">...</option>
                        <option value="1980">1980</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Brief description:</label>
              <textarea 
                name="experience-description" 
                rows="5" cols="4" 
                placeholder="Tasks and responsibilities" 
                className="form-control"
                value={this.props["experience-description"]}
						    onChange={this.props.handleChange}>
              </textarea>
            </div>
            <div className="form-group">
							<label>Where did you find us?</label>
							<select 
								name="source" 
								data-placeholder="Choose an option..." 
								className="select-simple"
								value={this.props["source"]}
						    onChange={this.props.handleChange}>
								>
								<option></option>
								<option value="monster">Monster.com</option>
								<option value="linkedin">LinkedIn</option>
								<option value="google">Google</option>
								<option value="adwords">Google AdWords</option>
								<option value="other">Other source</option>
							</select>
						</div>
          </div>
        </div>
      </fieldset>
    )
  }
}
