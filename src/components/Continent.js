import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';


const Continent = (props) => {
    const { continent } = props;
    return (
        <Link to={`/${continent.code}/countries`}>
            <Card hoverable style={{ width: 500, margin: 20 }}>
                <p><b>NAME : </b><span style={{ color: "green" }}>{continent.name}</span></p>
                <p><b>CODE : </b>{continent.code}</p>
                <p><b>TOTAL COUNTRIES:</b>{continent.countries.length}</p>
                <span><Link to={`/${continent.code}/countries`}>View Details</Link></span>
            </Card>
        </Link>
    )
}

export default Continent
