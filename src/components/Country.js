import { Card } from 'antd';
import React from 'react'

const Country = (props) => {
    const { country } = props;
    return (
        <Card hoverable style={{ margin: 10 }}>
            <hr />
            <p><b>NAME : </b><span style={{ color: "green" }}>{country.name}</span></p>
            <p><b>Code : </b>{country.code}</p>
            <p><b>NATIVE : </b>{country.native}</p>
            <p><b>PHONE : </b>{country.phone}</p>
            <p><b>CAPITAL : </b>{country.capital}</p>
            <hr />
        </Card>
    )
}

export default Country
