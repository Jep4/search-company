import React from 'react';
import { useState } from 'react';
import { Chart } from "react-google-charts";
import 'bootstrap/dist/css/bootstrap.css';



export const data = [
    ["company1", "Salary"],
    ["company2", 100],
    ["company3", 1000],
    ["company4", 500],
    ["company5 ", 300],
    ["company6", 900],
];
export const options = {
    title: "Seacom",
};


export default function HomePage() {


//Get data using API

    const fetchData = () => {
        fetch("http://localhost:8080/info")
            .then(res => {
                return res.json
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error("Error fetcing data: ", error);
            })
    }



    return (
        <div>
            <div>
                <button type="button" onClick={fetchData} className="btn btn-default" aria-label="Left Align">
                    <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                </button>

            </div>

            <div className="panel panel-default">

                <Chart
                    chartType="ColumnChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            </div>
         </div>

)}