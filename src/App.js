import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { simpleDestructuring, complexDestructuring } from "./data";

const App = () => {
  const CodeWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.16);
    width: 90vw;
    padding: 50px 50px;
  `;
  const CodeContent = styled.div`
    background-color: #121212;
    color: #ffff;
    width: 100%;
    font-family: "Consolas";
    font-family: "ProggyCleanTT";
  `;
  return (
    <>
      <div style={{ margin: "30px" }}>
        <h1>Simple destructuring</h1>
        <h3>
          See data.js and look at the App.js syntax to figure out how it works
        </h3>
      </div>

      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Engine Type</th>
            <th>Top Speed</th>
            <th>Gun</th>
            <th>Dropable</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(simpleDestructuring).map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.engine}</td>
              <td>{data.topSpeed}</td>
              <td>{data.armament.gun}</td>
              <td>{data.armament.dropable}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ margin: "30px" }}>
        <h1>complex destructuring</h1>
        <h3>
          usualy comes from firebase realtime database or firestore or other
          rest API json
        </h3>
      </div>
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Engine Type</th>
            <th>Top Speed</th>
            <th>Cannon</th>
            <th>Gun</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(complexDestructuring).map((data, i) => (
            <tr>
              <td>{Object.keys(complexDestructuring)[i]}</td>
              <td>{data.name}</td>
              <td>{data.engine}</td>
              <td>{data.topSpeed}</td>
              <td>{data.armament.cannon}</td>
              <td>{data.armament.gun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
