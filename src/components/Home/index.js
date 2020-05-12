import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Slide from './slide';
import Package from './package';
import CTA from './cta';
import Portfolio from './portfolio';
import './index.css'

export default () => (
  <>
    <Header/>
    <Slide />
    <Package />
    <CTA />
    <Portfolio />
    <Footer/>
  </>
);