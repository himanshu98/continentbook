import { gql } from 'apollo-boost'
import { Query } from 'react-apollo';
import React from 'react'
import Continent from './Continent'
import { Row ,Spin} from 'antd';

const GET_CONTINENT = gql`
query GetContinents{
    continents{
        name
        code
        countries{
          name
        }
     }
}
     `;

const Continents = () => {
    return (
        <div>
            <Query query={GET_CONTINENT}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <Spin size="middle" />
                        if (error) console.log(error);
                        console.log(data);
                        return (<Row>
                            {data.continents.map(continent => (
                                <Continent key={continent.code} continent={continent} />

                            ))}
                        </Row>);
                    }
                }
            </Query>
        </div>
    )
}

export default Continents
