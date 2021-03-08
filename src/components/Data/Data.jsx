import React, { useMemo, useState, useEffect } from 'react';
import Header from '../shared/Header';
import HeadTitle from '../shared/HeadTitle';
import axios from 'axios';
//import data from './data.json';
//https://api-vs.herokuapp.com/vs/v1/resources/all
//https://api-vs.herokuapp.com/vs/v1/resources?word=

const Data  = () => {

  const [data, setData] = useState([]);

  const resources = useMemo(() => data, [data]);
  
  const endPoint= 'https://parthjoshi1202.github.io/VedicAPI.json/data.json';

  useEffect(() => {
    axios.get(endPoint)
    .then(resp => {
      setData(resp.data);
    });
  }, []);


  const search = event => {
    axios.get(endPoint).then(resp=> {
      event.persist();
      const value = event.target.value;
     
     if (value.length === 0) 
       setData([...resp.data]);
       
    if (isNaN(value)) {
       const regex = new RegExp(value);
       setData([...resp.data.filter(datum => (regex.test(datum.word) || regex.test(datum.description) || (regex.test(datum.category))))]);
     }
      });
   };


   const category = event => {
    axios.get(endPoint).then(resp=> {
      event.persist();
      setData([...resp.data.filter(datum => (datum.category)==="number" || (datum.category)=== "distance" || (datum.category)=== "time" || (datum.category)==="weight")]);
      });
    };


    return ( 
      <>

      <HeadTitle title="Vedic Society Data" />  

      <div className="container-fluid">
        <Header title="Vedic Society Data"/>
      </div>

      <div className="container">
      <div className="row my-3 align-items-center justify-content-end">

          <div className="col-auto">
            <label htmlFor="search" className="col-form-label">Search</label>
          </div>

          <div className="col-auto">
            <input type="text" name="search" className="form-control" onChange={search}/>
          </div>

        </div>

        <div className="row my-3 align-items-center justify-content-end">
        <button className="btn btn-primary" type="button" onClick={category}>Isolate data based on "Measurement" Category</button>
      </div>

        <table className="table">
          <thead>
            <tr>
            <td>Word</td>
            <td>Nagari</td>
            <td>Description</td>
            <td>Category</td>  
            </tr>
          </thead>

          {resources.map((resource, i) => (
          <tbody>
           <td>{resource.word}</td> 
           <td>{resource.nagari}</td>
           <td>{resource.description}</td>
           <td>{resource.category}</td>
          </tbody>
          ))}
        </table>
      </div>
    </>
    );
};
 
export default Data;