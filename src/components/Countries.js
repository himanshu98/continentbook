import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo';
import Country from './Country';
import { Row, Spin } from 'antd';


const GET_COUNTRIES = gql`
    query GetCountries($code:ID!)
    {
        continent(code:$code){
            countries{
                code
                name
                native
                phone
                capital
            }
        }
    }
`;
const Countries = (props) => {
    let code = props.match.params.code;
    code = code.toString();
    return (
        <div>
            <h2 style={{ textAlign: "center" }}><b>CONTINET CODE : </b>{code}</h2>
            <Query query={GET_COUNTRIES} variables={{ code }}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <Spin size="middle" />
                        if (error) console.log(error)
                        console.log(data)
                        return (
                            <Row>
                                {
                                    data.continent.countries.map(country => (
                                        <Country key={country.code} country={country} />
                                    ))
                                }
                            </Row>
                        )
                    }
                }
            </Query>
        </div>
    )
}

export default Countries
