import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Footer from "./../partials/Footer";
import Header from "./../partials/Header";
import SignupForm from "./SignupForm";

export default class Register extends Component {
    
    render() { 
        return (
            <div className="auth_bg" style={{minHeight: "100vh"}}>
                <Helmet>
                    <title>Sign up</title>
                </Helmet>
                <Header />
                <main className="main_content_area">
                    <section className="section_block">
                        <div className="container">
                            <div className="auth_panel">
                                <header className="pane_header">
                                    <div className="sub_action">
                                        <p className="">Already have an account? <Link to="/login" className="btn_link">Log in</Link></p>
                                    </div> 
                                </header>
                                <div className="block_panel">
                                    <header className="block_header">
                                        <h2 className="color-secondary pane_title">Create an Account</h2>
                                    </header>
                                    <SignupForm />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    };
}

  