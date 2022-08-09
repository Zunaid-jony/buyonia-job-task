import React, { useState } from "react";

import Footer from "../Footer/Footer";


const Scholar = () => {
    // const [date, setDate] = useState(new Date())

    // const onChange = date =>{
    //     setDate(date)
    // }
  return (
    <div >
      <br></br>
      <br></br>
      <br></br>
        <h2 className="text-center mt-5"> 🆂🅲🅷🅾🅻🅰🆁 🆂🅲🅷🅴🅳🆄🅻🅴</h2>
        {/* <div style={{width:'100px'}} className="container mt-5 mb-5">
            
            <Calendar onChange={onChange} value={date}></Calendar>

        </div> */}

      <div className="container mt-5 mb-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>DATE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>DELETE</th>
            </tr>
            <tr>
              <td>df</td>
              <td>df</td>
              <td>df</td>
              <td>des</td>
            </tr>
            <tr>
              <td>df</td>
              <td>df</td>
              <td>df</td>
              <td>des</td>
            </tr>
            <tr>
              <td>df</td>
              <td>df</td>
              <td>df</td>
              <td>des</td>
            </tr>
            <tr>
              <td>df</td>
              <td>df</td>
              <td>df</td>
              <td>des</td>
            </tr>
            <tr>
              <td>df</td>
              <td>df</td>
              <td>df</td>
              <td>des</td>
            </tr>
          </thead>
        </table>
      </div>

      {/* <Services></Services> */}
      <Footer></Footer>
    </div>
  );
};

export default Scholar;
