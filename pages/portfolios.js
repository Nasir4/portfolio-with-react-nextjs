import React from "react";
import BasicLayout from "../components/layout/BasicLayout";

import axios from "axios";
import { withRouter } from "next/router";
import { Link } from "../routes";

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = result.data;
    } catch (err) {
      console.log(err);
    }
    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <li key={index}>
          <Link route={`/portfolio/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      );
    });
  }

  render() {
    debugger;
    const { posts } = this.props;
    console.log(this.props);
    return (
      <BasicLayout>
        <h1>This is Portfolio Page</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BasicLayout>
    );
  }
}

export default Portfolios;
