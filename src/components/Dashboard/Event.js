import React, { Component } from 'react';

class Event extends Component {

  render() {
    return (
      <div className="panel panel-white" data-aos-delay={this.props.delay}>
        <div className="panel-heading" data-aos="fade-up">
          <h6 className="panel-title">{this.props.data["event-title"]}</h6>
          <div className="heading-elements">
            <ul className="icons-list">
              <li><a data-action="collapse"></a></li>
            </ul>
          </div>
        </div>
        <div className="panel-body stepy-clickable">
          { 
            Object.keys(this.props.data).map((key, id) => {
              if (this.props.data[key] == "") return;
              const remove = ["event-title", "user", "_id", "__v", "createdAt", "updatedAt"];
              if (remove.includes(key)) return;
              return (
              <p key={id}><strong>{key}:</strong> {this.props.data[key] }</p>
            )})
          }
        </div>
      </div>
    );
  }
}

export default Event;