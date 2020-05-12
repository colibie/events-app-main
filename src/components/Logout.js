import React, { Component } from "react";
import { persistor } from "../store";

class Logout extends Component {

    componentDidMount() {
        persistor.purge();
        window.location.href = "/";
    }

    render() {
        return <div />
    }
};

export default Logout;