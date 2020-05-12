import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Footer from "./../partials/Footer";
import Header from "./../partials/Header";

import './auth.css'


export default function Login() {
    return (
        <div className="auth_bg" style={{ minHeight: "100vh" }}>
            <Header />
            <Helmet>
                <title>Login</title>
            </Helmet>
            <main className="main_content_area">
            <section className="section_block">
                    <div className="container">
                        <div className="auth_panel">
                            <header className="pane_header">
                                <div className="sub_action">
                                    <p className="">Don't have an account? <Link to="/signup" className="btn_link">Sign Up</Link></p>
                                </div>
                            </header>
                            <div className="block_panel">
                                <header className="block_header">
                                    <h2 className="color-secondary pane_title">Log into your account</h2>
                                </header>

                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}