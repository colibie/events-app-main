import React, { Component } from "react";
import { map, get } from "lodash";
import { post } from "axios";
import { Helmet } from "react-helmet";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import FormFields from "../../utils/FormFields";
import { emailValidator, emptyValidator } from "../../utils/validator";

class SignupForm extends Component {
    state = {
        loading: false,
        firstname:"",
        lastname:"",
        email: "",
        password: "",
        contact: "",
        confirmPassword:"",
        successMsg: false,
        errorMsg: false
    }

    inputHandler(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    submitHandler(ev) {
        ev.preventDefault();

        this.setState({ loading: true }, async() => {
            try {
                const { lastname, firstname, email, contact, password, confirmPassword } = this.state;
                // Validate input
                // Password validate
                if (password !== confirmPassword ) {
                    throw Error("Both passwords do not match");
                }
                // Empty field
                if (emptyValidator({ lastname, firstname, email, contact, password }).length > 0) {
                    throw Error("All fields are required");
                }
                // Validate Email
                const emailValid = await emailValidator(email);
                
                if (!emailValid) {
                    throw Error("Invalid email address");
                }
              
                // Signup 
                const data = { firstName: firstname, lastName: lastname, email, password, phone: contact }
                
                const signup = await post(`${process.env.REACT_APP_API}/signup`, data);
                
                if (signup.data.firstName) {
                    this.setState({ 
                        successMsg: `Thank you ${signup.data.firstName}.`, 
                        errorMsg: false,
                        firstname:"",
                        lastname:"",
                        email: "",
                        contact: "",
                        password: "",
                        confirmPassword:""
                    });
                    return await this.props.fetchUser(signup.data, true);
                } else {
                    throw new Error("Oops, Something went wrong. Please try again in a bit");
                }

            } catch(e) {
                let msg = get(e, "response.data.message", e.message);
                
                this.setState({ successMsg: false, errorMsg: msg });
            }
            this.setState({ loading: false })
            return;
        });
    }
    
    renderForm() {
        const { register } = FormFields;
        return map(register, ({ name, type, placeholder, label }) => {
            return(
                <div key={ name } className="form-group">
                    <label className="control-label">
                        { label }
                    </label>
                    <input onChange={ this.inputHandler.bind(this) } type={ type } name={ name } className="form-control" placeholder={ placeholder } value={ this.state[name] } />
                </div>
            );
        });
    }

    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />
        }
        return(
            <div className="content_inner">
                {
                    this.state.errorMsg 
                    && 
                    <div className="alert alert-warning">
                        <p>{ this.state.errorMsg }.</p>
                    </div>
                }

                {
                    this.state.successMsg 
                    &&
                    <div className="alert alert-success">
                        <Helmet>
                            {/* Facebook pixel track user that completed registration */}
                            <script>
                                fbq('track', 'CompleteRegistration');
                            </script>
                        </Helmet>
                        <p>{ this.state.successMsg }.</p>
                    </div>
                }
                
                <form onSubmit={ this.submitHandler.bind(this) }>
                    { this.renderForm() }
                    <div className="section_cto text-center">
                        <button type="submit" disabled={ this.state.loading && true } className="btn-get-started">Create account { this.state.loading && <img src="/img/loader/tail-spin.svg" style={{ width: "20px" }} alt="loading.." />  }</button> 
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateProps = ({ auth: { loggedIn } }) => {
    return { loggedIn };
}

export default connect(mapStateProps, actions)(SignupForm);