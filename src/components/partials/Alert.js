import React, { Component, Fragment } from 'react';

class Alert extends Component {

    render() {
        return(
            this.props.type ?
            <Fragment>
                {/* <!--------------------
                START - Alertbox
                --------------------> */}
                <div className={"alert " + this.props.type} sr-role="alert">
                    {this.props.msg}
                </div>
                {/* <!--------------------
                END - Alert
                --------------------> */}
            </Fragment>
            : <Fragment />
        );
    }
}

export default Alert;