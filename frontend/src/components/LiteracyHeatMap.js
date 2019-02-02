import React, { Component } from "react";
import Datamap from "datamaps/dist/datamaps.world.min.js";
import * as d3 from "d3";

import IndiaJson from "./India.topo.json";

import { getDatamap } from "../utils";

export default class LiteracyHeatMap extends Component {
  constructor(props) {
    super(props);
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
    };
  }

  mapLiteracy = () => {
    let dataset = {};
    // console.log(this.props, "check3");

    let literacyData = getDatamap(
      this.props.literacy,
      1991,
      this.state.isoCode
    );
    // console.log(literacyData, "check2");

    let literacyRate = literacyData.map(obj => obj[1]);

    let minValue = Math.min.apply(null, literacyRate),
      maxValue = Math.max.apply(null, literacyRate);

    let paletteScale = d3
      .scaleLinear()
      .domain([minValue, maxValue])
      .range(["#EFEFFF", "#02386F"]); // blue color

    literacyData.forEach(item => {
      let iso = item[0],
        value = item[1];
      dataset[iso] = { literacy: value, fillColor: paletteScale(value) };
    });

    console.log(dataset, "check1");

    var map = new Datamap({
      element: document.getElementById("cloropleth_map"),
      scope: "india",
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: "#444",
        highlightBorderWidth: 1,
        borderWidth: 0.5,
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
            "<br>Count: <strong>",
            data.literacy,
            "</strong>",
            "</div>"
          ].join("");
        }
      },
      fills: {
        HIGH: "#afafaf",
        LOW: "#123456",
        MEDIUM: "blue",
        UNKNOWN: "rgb(0,0,0)",
        defaultFill: "#eee"
      },
      data: dataset,
      setProjection: function(element) {
        var projection = d3.geoMercator()
          .center([27.8913, 78.0792]) // always in [East Latitude, North Longitude]
          .scale(200)
          .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

        var path = d3.geoPath().projection(projection);
        console.log(path)
        return { path: path, projection: projection };
      }
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.literacy !== this.props.literacy) {
      this.mapLiteracy();
    }
  }

  render() {
    return (
      <div
        id="cloropleth_map"
        style={{
          height: "500px",
          width: "500px"
        }}
      />
    );
  }
}
