import React, { Component } from 'react';
import * as actions from '../../actions';
import NoEvent from './NoEvent';
import { connect } from 'react-redux';
import { map, isEmpty } from 'lodash';
import Event from './Event';
import { Redirect, Link } from 'react-router-dom';

class Events extends Component {
  userEvents = [
    { name: 'Wedding', date: '22/10', location: 'Ihiala', price: 103020 },
    { name: 'Wedding', date: '22/10', location: 'Ihiala', price: 103020 },
    { name: 'Wedding', date: '22/10', location: 'Ihiala', price: 103020 },
    { name: 'Wedding', date: '22/10', location: 'Ihiala', price: 103020 },
    { name: 'Wedding', date: '22/10', location: 'Ihiala', price: 103020 },
    { name: 'Wedding', date: '22/10', location: 'Ihiala', price: 103020 },
  ]

  state = {
    limit: 10,
    skip: 0
  }

  componentDidMount() {
    this.fetchEvents();
  }

  async fetchEvents() {
    await this.props.getEvents(this.props.token, this.props._id, this.state.limit, this.state.skip);
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container" style={{ marginBottom: "2rem" }}>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Events</li>
            </ol>
            <h3 style={{ margin: "0 auto" }}>Your Events</h3>
            <button className="btn-get-started"><Link to="/addEvent">Add Event</Link></button>
          </div>
        </section>
        <div className="page-container container">
          <div className="page-content">
            <div className="content-wrapper">
              {this.props.userEvents ?
                !isEmpty(this.props.userEvents) ?
                  <div>
                    {map(this.props.userEvents, (data, idx) => {
                      console.log(data);
                      return (
                        <Event key={data._id} delay={idx * 50} data={data} />
                      )
                    })}
                  </div>
                  :
                  <NoEvent />
                :
                <div>Loading your events list....</div>
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({
  auth: { loggedIn, token, _id },
  events: { userEvents, countEvents }
}) => {
  return ({ loggedIn, token, _id, userEvents, countEvents });
}

export default connect(mapStateToProps, actions)(Events);