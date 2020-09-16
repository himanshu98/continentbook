import './App.css';
import 'antd/dist/antd.css'


import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Continents from './components/Continents';
import Countries from './components/Countries';
import { Layout } from 'antd';




const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Layout.Header style={{ height: "10vh", textAlign: "center" }}><h1 style={{ color: "red", marginTop: "15px" }}><b>GLOBAL DETAILS</b></h1></Layout.Header>
          <Layout.Content style={{textAlign:"center"}}>
            <Route exact path="/continentbook" component={Continents} />
            <Route exact path="/:code/countries" component={Countries} />
          </Layout.Content>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
