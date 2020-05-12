import React, { Component } from "react";
import { map, get } from "lodash";
import { connect } from "react-redux";
import { post } from "axios";
import { Link, Redirect } from "react-router-dom";

import * as actions from "../../actions";
import FormFields from "../../utils/FormFields";
import { emailValidator, emptyValidator } from "../../utils/validator";

class LoginForm extends Component {
    state = {
        loading: false,
        email: "",
        password: "",
        successMsg: false,
        errorMsg: false
    }

    componentDidMount() {
        this.unMounted = false;
    }

    inputHandler(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    submitHandler(ev) {
        ev.preventDefault();
        this.setState({ loading: true }, async () => {
            try {
                const { email, password } = this.state;

                // Empty field
                if (emptyValidator({ email, password }).length > 0) {
                    throw Error("All fields are required");
                }
                // Validate Email
                const emailValid = await emailValidator(email);

                if (!emailValid) {
                    throw Error("Invalid email address");
                }

                const login = await post(`${process.env.REACT_APP_API}/login`, {email, password});

                if (login.data.firstName) {
                    this.setState({
                        successMsg: `Welcome ${login.data.firstName}.`,
                        errorMsg: false,
                        email: "",
                        password: "",
                    });
                    await this.props.fetchUser(login.data, true);
                }
                !this.unMounted && this.setState({ loading: false });
            } catch (e) {
                let msg = get(e, "response.data.message", e.message);
                this.setState({ successMsg: false, errorMsg: msg, loading: false });
            }
        });
    }

    componentWillUnmount() {
        this.unMounted = true;
    }

    renderForm() {
        const { login } = FormFields;
        return map(login, ({ name, type, placeholder, label }) => {
            return (
                <div key={name} className="form-group">
                    <label className="control-label">
                        {label}
                    </label>
                    <input onChange={this.inputHandler.bind(this)} type={type} name={name} className="form-control" placeholder={placeholder} value={this.state[name]} />
                </div>
            );
        });
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="content_inner">
                {
                    this.state.errorMsg ?
                        <div className="alert alert-warning">
                            <p>{this.state.errorMsg}.</p>
                        </div>
                        :
                        !this.props.loggedIn && this.props.message &&
                        <div className="alert alert-warning">
                            <p>{this.props.message || this.state.errorMsg}.</p>
                        </div>
                }

                {
                    this.state.successMsg
                    &&
                    <div className="alert alert-success">
                        <p>{this.state.successMsg}.</p>
                    </div>
                }
                <form onSubmit={this.submitHandler.bind(this)}>
                    {this.renderForm()}
                    <div className="auth_meta clearfix">
                        <Link to="/recovery" className="btn-link">Forgot Password?</Link>
                    </div>
                    <div className="section_cto text-center">
                        <button type="submit" disabled={this.state.loading && true} className="btn-get-started">Login {this.state.loading && <img src="/img/loader/tail-spin.svg" style={{ width: "20px" }} alt="loading.." />}</button>
                    </div>
                </form>

            </div>

        );
    }
}

const mapStateProps = ({ auth: { loggedIn, message } }) => {
    return { loggedIn, message };
}

export default connect(mapStateProps, actions)(LoginForm);