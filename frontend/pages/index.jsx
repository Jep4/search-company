import React from 'react';
import { Chart } from "react-google-charts";

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

export const data = [
    ["jobs", "Salary", { role: 'style' }],
    ["job1", 100, 'black'],
    ["job2", 1000, 'black'],
    ["job3", 500, 'black'],
    ["job4 ", 300, 'black'],
    ["job5", 900, 'black'],
];
export const options = {
    title: "Salary Graph",
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
        <div className="main">
            <div>

                <div className="box" >
                    <header>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Rankings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My List</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li>
                                <input className="form-control" type="text" placeholder="Search by company name" aria-label="Search" />

                            </li>
                        </ul>

                    </header>
                    <h1>
                    Searching Jobs...
                    </h1>
                    <Container>
                        <Row>
                            <input type="text" placeholder="Keywords" aria-label="Search" />
                            <input type="text" placeholder="Locations" aria-label="Search" />

                            <select name="experiences" id="experience">
                                <option value="Intern">Experiences</option>
                                <option value="Intern">Intern</option>
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                            </select>
                            <select name="date" id="date">
                                <option value="Intern">Date posted</option>
                                <option value="Intern">within 24 hours</option>
                                <option value="Junior">within 7 days</option>
                                <option value="Senior">within a month</option>
                            </select>

                        </Row>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem', float: "left" }}>
                                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/2048px-KFC_logo.svg.png" width="100px" />
                                    <Card.Body>
                                        <Card.Title>Company1</Card.Title>
                                        <Card.Text>
                                                - Software Engineer Co-op
                                        </Card.Text>
                                        <button >Company Details</button>                                    </Card.Body>
                                </Card>

                                <Card style={{ width: '18rem', float: "left" }}>
                                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png" width="100px" />
                                    <Card.Body>
                                        <Card.Title>Company2</Card.Title>
                                        <Card.Text>

                                                - Software Engineer intern
                                                - Buisness Analyst intern
                                        </Card.Text>
                                        <button >Company Details</button>
                                    </Card.Body>
                                </Card>

                                <Card style={{ width: '18rem', float: "left" }}>
                                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png" width="100px" />
                                    <Card.Body>
                                        <Card.Title>Company3</Card.Title>
                                        <Card.Text>

                                                    - Back-end Engineer Co-op
                                        </Card.Text>

                                        <button >Company Details</button>                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                                <Chart
                                    chartType="ColumnChart"
                                    data={data}
                                    options={options}
                                    width={"70%"}
                                    height={"300px"}
                                />
                            </Col>
                        </Row>
                    </Container>

                </div>
            </div>
            <style jsx>{`
                *{
                    padding:5px;
                }
                h1{
                    color:black;
                font-weight: bold;
                font-size:62px;
                font-family: Batang;
                }
                a{
                    color:gray;
                }
                input{
                width:150px;
                height:30px;
                border-radius: 7px;
                border-weight:1px;
                margin: 3px;
                border-color:gray;
                }
                select{
                width:150px;
                height:30px;
                border-radius: 7px;
                border-weight:1px;
                margin: 3px;
                border-color:gray;

                }
                .box{
                width: 1280px;
                border-radius: 30px;
                font-weight: bold;
                padding: 5px;
                margin: 5px;
                background-color:white;
                }
            `}</style>
        </div>

    )
}
