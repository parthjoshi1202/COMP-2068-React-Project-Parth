import React from 'react';
import Header from '../shared/Header';
import HeadTitle from '../shared/HeadTitle';
import AboutDescription from './AboutDescription';

const About  = () => {
    return (
        <> 
    <HeadTitle title="About the App" />    
    <Header title="About" />
    <AboutDescription/> 
    </>
    );
}
 
export default About;