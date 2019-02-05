import React, { Component, Fragment } from 'react';

// import Navbar from './components/layout/'
import { fetchLiteracy } from '../store/actions/fetchLiteracy'
import { connect } from 'react-redux'

// import LiteracyBarChart from './components/LiteractBarChart'
import LiteracyGeoMap from './LiteracyGeoMap'


// import './App.css';

class Dataset extends Component {

  componentWillMount() {
    fetch("http://127.0.0.1:8000/api/literacy_rate").then(data => data.json()).then(data => {
    console.log(data)  
    this.props.fetchLiteracy(data)})
  }

  render() {
    return(
      <Fragment>
        {/* <LiteracyBarChart literacy={this.props.literacyRate}/> */}
        <LiteracyGeoMap literacy={this.props.literacyRate} />
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  fetchLiteracy
}

const mapStateToProps = (state) => {
  return {
    literacyRate: state.literacy
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dataset);
