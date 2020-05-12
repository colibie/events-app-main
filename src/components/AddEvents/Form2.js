import React, { Component } from 'react';

export default class Form2 extends Component {
  render() {
    return (
      <fieldset title="2">
        <legend className="text-semibold">Type and Location</legend>

        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label>University:</label>
                    <input 
                        type="text" 
                        name="university" 
                        placeholder="University name" 
                        className="form-control"
                        value={this.props["university"]}
						onChange={this.props.handleChange}></input>
                </div>
            </div>

            <div className="col-md-6">
                <div className="form-group">
                    <label>Country:</label>
                    <select
                        name="university-country" 
                        data-placeholder="Choose a Country..." 
                        className="select"
                        value={this.props["university-country"]}
						onChange={this.props.handleChange}>
                        <option></option> 
                        <option value="1">United States</option> 
                        <option value="2">France</option> 
                        <option value="3">Germany</option> 
                        <option value="4">Spain</option> 
                    </select>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label>Degree level:</label>
                    <input 
                        type="text" 
                        name="degree-level" 
                        placeholder="Bachelor, Master etc." 
                        className="form-control"
                        value={this.props["degree-level"]}
						onChange={this.props.handleChange}>
                    </input>
                </div>

                <div className="form-group">
                    <label>Specialization:</label>
                    <input 
                        type="text" 
                        name="specialization" 
                        placeholder="Design, Development etc." 
                        className="form-control"
                        value={this.props["specialization"]}
						onChange={this.props.handleChange}>
                    </input>
                </div>
            </div>

            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <label>From:</label>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select 
                                        name="education-from-month" 
                                        data-placeholder="Month" 
                                        className="select"
                                        value={this.props["education-from-month"]}
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
                                        name="education-from-year" 
                                        data-placeholder="Year" 
                                        className="select"
                                        value={this.props["education-from-year"]}
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
                                        name="education-to-month" 
                                        data-placeholder="Month" 
                                        className="select"
                                        value={this.props["education-to-month"]}
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
                                        name="education-to-year" 
                                        data-placeholder="Year" 
                                        className="select"
                                        value={this.props["education-to-year"]}
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

                <div className="form-group">
                    <label>Language of education:</label>
                    <input 
                        type="text" 
                        name="education-language" 
                        placeholder="English, German etc." 
                        className="form-control"
                        value={this.props["education-language"]}
						onChange={this.props.handleChange}></input>
                </div>
            </div>
        </div>
    </fieldset>
    )
  }
}
