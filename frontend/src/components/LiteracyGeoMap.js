import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Datamap from "datamaps/dist/datamaps.world.min.js";
import * as d3 from "d3";

import IndiaJson from "./India.topo3.json";
import { getDatamap } from "../utils";


export default class LiteracyGeoMap extends Component {
	constructor(props) {
    super(props)
    this.datamap = null;    
		this.state = {
			isoCode: [
        "AP",
        "AR",
        "AS",
        "BR",
        "CT",
        "GA",
        "GJ",
        "HR",
        "HP",
        "JK",
        "JH",
        "KA",
        "KL",
        "MP",
        "MH",
        "MN",
        "ML",
        "MZ",
        "NL",
        "OR",
        "PB",
        "RJ",
        "SK",
        "TN",
        "TR",
        "UP",
        "UT",
        "WB",
        "AN",
        "CH",
        "DN",
        "DD",
        "DL",
        "LD"
      ]
		}
  }
  renderMap() {
    // dataset that will be passed in the Datamap library format

    //getDatamap is function that give the array of arrays
    //and each array will be like ["Kl", 86]
    let literacyData = getDatamap(
      this.props.literacy,
      1991,
      this.state.isoCode
    );
    console.log(literacyData)
    // array of literacy rate value
    let literacyRate = literacyData.map(obj => obj[1]);
    console.log(literacyRate)
    let minValue = Math.min.apply(null, literacyRate),
        maxValue = Math.max.apply(null, literacyRate);

    let paletteScale = d3.scaleLinear()
      .domain([minValue, maxValue])
      .range(["#EFEFFF", "#052d47"]);

    const dataset = literacyData.reduce((object, item) => {
      let iso = item[0],
        value = item[1];
      object[iso] = { literacy: value, fillColor: paletteScale(value)}
      return object
    }, {})

    console.log(dataset)
    return new Datamap({
      element: ReactDOM.findDOMNode(this),
      scope: 'india',
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: "#444",
        highlightBorderWidth: 1,
        borderWidth: 0.5,
        // dataUrl: 'https://gist.githubusercontent.com/mukhtyar/9958903/raw/071bc8a6eb002778bacebeb221b578591d11b44a/india_state_2014_simplified.topojson',
        dataJson: IndiaJson,
        popupTemplate: function(geo, data) {
          // don't show tooltip if country don't present in dataset
          if (!data) {
            return;
          }
          // tooltip content
          return [
            '<div class="hoverinfo">',
            "<strong>",
            geo.properties.name,
            "</strong>",
            "<br>Literacy Rate: <strong>",
            data.literacy,
            "</strong>",
            "</div>"
          ].join("");
        }
      },
      // fills: {
      //   HIGH: "#cc1818",
      //   LOW: "#123456",
      //   MEDIUM: "blue",
      //   UNKNOWN: "rgb(0,0,0)",
      //   defaultFill: "#eee"
      // },
      data: dataset,
      setProjection: function(element) {
        var projection = d3.geoMercator()
          .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
          .scale(800)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

        var path = d3.geoPath().projection(projection);
        console.log(path)
        return { path: path, projection: projection };
      }
    })
  }

  componentDidMount() {
   // this.renderMap();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.literacy !== this.props.literacy)
      this.renderMap()
  }

  render() {
    return (
      <div id="datamap-container" style={{ height: 700, width: 700}}></div>
    );
  }
}