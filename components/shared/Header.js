import React from "react";
import Link from "next/link";
import "../../styles/main.css";

class Header extends React.Component {
  render() {
    const title = this.props.title;
    return (
      <React.Fragment>
        <p>{title}</p>

        {this.props.children}
        <Link href="/">
          <a>Index</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>

        <Link href="/blogs">
          <a>Blogs</a>
        </Link>

        <Link href="/cv">
          <a>Cv</a>
        </Link>
        <style jsx>
          {`
            a {
              font-size: 20px;
              color: blue;
              text-decoration: none;
              margin-left: 10px;
            }
            a:hover {
              border-bottom: 2px solid black;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Header;
