import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { get } from 'lodash'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';

class AddEvent extends Component {

    state = {
        loading: false,
        // form 1
        "location": "",
        "event-title": "",
        "event-date": "",
        "email": "",
        "tel": "",
        "birth-month": "",
        "birth-day": "",
        "birth-year": "",

        // form 2
        "education-language": "",
        "education-to-year": "",
        "education-to-month": "",
        "education-from-year": "",
        "education-from-month": "",
        "specialization": "",
        "degree-level": "",
        "university-country": "",
        "university": "",

        // form 3
        "experience-description": "",
        "experience-to-year": "",
        "experience-to-month": "",
        "experience-from-year": "",
        "experience-from-month": "",
        "experience-position": "",
        "experience-company": "",

        // form 4
        "source": "",
        "availability": "",
        "additional-info": "",

        submitted: false,
        message: false
    };

    componentDidMount() {
        this.unMounted = false;
    }

    componentWillUnmount() {
        this.unMounted = true;
    }

    handleChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    handleSubmit(ev) {
        ev.preventDefault();

        this.setState({ loading: true }, async () => {
            try {
                const remove = ['message', 'submitted', 'loading'];
                const data = Object.keys(this.state)
                    .filter(key => !remove.includes(key))
                    .reduce((obj, key) => {
                        return {
                            ...obj,
                            [key]: this.state[key]
                        };
                    }, {});
                await this.props.addEvent(this.props.token, this.props._id, data);

                if (this.props.eventAdded.success) {
                    !this.unMounted && this.setState({ loading: false });
                    swal("Nice!!",
                        "You will receive an sms with the details of the event",
                        "success").then(() => {
                            this.setState({ submitted: true })
                        })
                } else {
                    this.setState({ message: this.props.eventAdded.message || "Something went wrong. Please try again", loading: false });
                } 
            } catch (e) {
                let msg = get(e, "response.data.message", e.message);
                this.setState({ message: msg, loading: false });
            }
        });

    }

    render() {

        if (!this.props.loggedIn) {
            return <Redirect to="/login" />
        }

        if (this.state.submitted) {
            return <Redirect to="/dashboard" />
        }
        return (

            <div className="">
                {this.state.message &&
                    <div className="alert alert-warning">
                        <p>{this.state.message}.</p>
                    </div>
                }
                <form className="stepy-clickable" onSubmit={this.handleSubmit.bind(this)}>
                    <Form1
                        location={this.state["location"]}
                        event-title={this.state["event-title"]}
                        event-date={this.state["event-date"]}
                        email={this.state["email"]}
                        tel={this.state["tel"]}
                        birth-month={this.state["birth-month"]}
                        birth-day={this.state["birth-day"]}
                        birth-year={this.state["birth-year"]}
                        handleChange={this.handleChange.bind(this)} />
                    <Form2
                        education-language={this.state["education-language"]}
                        education-to-year={this.state["education-to-year"]}
                        education-to-month={this.state["education-to-month"]}
                        education-from-year={this.state["education-from-year"]}
                        education-from-month={this.state["education-from-month"]}
                        specialization={this.state["specialization"]}
                        degree-level={this.state["degree-level"]}
                        university-country={this.state["university-country"]}
                        university={this.state["university"]}
                        handleChange={this.handleChange.bind(this)} />
                    <Form3
                        experience-description={this.state["experience-description"]}
                        experience-to-year={this.state["experience-to-year"]}
                        experience-to-month={this.state["experience-to-month"]}
                        experience-from-year={this.state["experience-from-year"]}
                        experience-from-month={this.state["experience-from-month"]}
                        experience-position={this.state["experience-position"]}
                        experience-company={this.state["experience-company"]}
                        handleChange={this.handleChange.bind(this)} />
                    <Form4
                        source={this.state["source"]}
                        availability={this.state["availability"]}
                        additional-info={this.state["additional-info"]}
                        handleChange={this.handleChange.bind(this)} />
                    <button type="submit" className="btn btn-primary stepy-finish">Submit
                        {this.state.loading && <i className="spinner-border text-light" role="status">
                            <span className="sr-only">Loading...</span></i>}
                        <i className="icon-check position-right"></i></button>
                </form>
            </div>

        )
    }
}

var mapStateToProps = ({
    auth: { loggedIn, token, _id },
    events: { eventAdded }
}) => {
    return { loggedIn, token, _id, eventAdded }
}

export default connect(mapStateToProps, actions)(AddEvent);