import React from 'react';
import HeadTitle from '../shared/HeadTitle';
import Header from '../shared/Header';
import HomeDescription from './HomeDescription';

const Home  = () => {
    return (
        <>
        <HeadTitle title="Home Page" />
        <Header title="Home" />
        <HomeDescription/>
        </>
    );
}
 
export default Home;