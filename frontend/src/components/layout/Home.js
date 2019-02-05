import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="details">
            <h2 className="header">How Literate is India?</h2>
            <p>
                This is detailed project about India's literacy rate.
            </p>
            <button>
                <Link to='/visualization'>visualization</Link>
            </button>
        </div>
    )
}
export default Home;