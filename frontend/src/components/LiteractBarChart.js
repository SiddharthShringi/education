import React, { Component, Fragment } from "react";
import { HorizontalBar, Bar } from "react-chartjs-2";

import { getData, getStackedData } from "../utils";

export default class LiteracyBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  handleClickOne = () => {
    this.setState({
      chartData: getData(this.props.literacy, 1991, "all")
    });
  };

  handleClickTwo = () => {
    this.setState({
      chartData: getData(this.props.literacy, 2001, "all")
    });
  };

  handleClickThree = () => {
    this.setState({
      chartData: getData(this.props.literacy, 2011, "rural")
    });
  };

  handleClickFour = () => {
    this.setState({
      chartData: getData(this.props.literacy, 2011, "urban")
    });
  };

  handleClickFive = () => {
    this.setState({
      chartData: getStackedData(
        this.props.literacy,
        [1991, 2001],
        ["#5079a0", "#0a3c6b"]
      )
    });
  };

  render() {
    console.log(this.state.chartData);
    return (
      <Fragment>
        <h3>Literacy Rate </h3>
        <button onClick={this.handleClickOne}>1991</button>
        <button onClick={this.handleClickTwo}>2001</button>
        <button onClick={this.handleClickThree}>2011 Rural</button>
        <button onClick={this.handleClickFour}>2011 Urban</button>
        <button onClick={this.handleClickFive}>Stacked Bar Chart</button>
        <div className="bar">
          <Bar
            data={this.state.chartData}
            width={100}
            height={50}
            options={{
              scales: {
                xAxes: [
                  {
                    type: "category",
                    labels: [
                      "All India",
                      "Andhra Pradesh",
                      "Arunachal Pradesh",
                      "Assam",
                      "Bihar",
                      "Chhatisgarh",
                      "Goa",
                      "Gujarat",
                      "Haryana",
                      "Himachal Pradesh",
                      "Jammu and Kashmir",
                      "Jharkhand",
                      "Karnataka",
                      "Kerala",
                      "Madhya Pradesh",
                      "Maharashtra",
                      "Manipur",
                      "Meghalaya",
                      "Mizoram",
                      "Nagaland",
                      "Odisha",
                      "Punjab",
                      "Rajasthan",
                      "Sikkim",
                      "Tamil Nadu",
                      "Tripura",
                      "Uttar Pradesh",
                      "Uttaranchal",
                      "West Bengal",
                      "A. and N. Islands",
                      "Chandigarh",
                      "D. and N. Haveli",
                      "Daman and Diu",
                      "Delhi",
                      "Lakshadweep"
                    ],
                    ticks: {
                      autoSkip: false
                    }
                  }
                ],
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      min: 0
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </Fragment>
    );
  }
}
