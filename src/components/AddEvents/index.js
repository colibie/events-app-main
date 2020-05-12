import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import AddEvent from './AddEvent';

export default () => (
    <div className="">
        <Header />
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container" style={{ marginBottom: "2rem" }}>
                <ol>
                    <li><Link to="/allEvents">Home</Link></li>
                    <li>Add Event</li>
                </ol>
                <h3 style={{margin: "0 auto"}}>Customize your Events</h3>
            </div>
        </section>

        <div className="page-container container">
            <div className="page-content">
                <div className="content-wrapper">
                    <AddEvent />
                </div>
            </div>
        </div>
    </div>
);