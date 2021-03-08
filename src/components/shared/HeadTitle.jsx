import React, { useEffect } from 'react';
import './styles.css';

const HeadTitle = ({title=" "}) => {
    useEffect(()=>document.title=title);

    return (
        <>
       
        </>
    );
}
 
export default HeadTitle;