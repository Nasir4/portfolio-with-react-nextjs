import React from "react";
import BasicLayout from "../components/layout/BasicLayout";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    const PortfolioId = query.id;
    let PortfolioData = {};
    try {
      const results = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${PortfolioId}`
      );
      PortfolioData = results.data;
    } catch (err) {
      console.log(err);
    }
    return { PortfolioData };
  }

  render() {
    const { PortfolioData } = this.props;

    return (
      <BasicLayout>
        <h1>Title : {PortfolioData.title}</h1>
        <p>Body : {PortfolioData.body}</p>
        <p>ID : {PortfolioData.id}</p>
      </BasicLayout>
    );
  }
}

export default withRouter(Portfolio);
