import React from "react";
import axios from "axios";
import BasicLayout from "../components/layout/BasicLayout";
import "../styles/main.css";

//functional are dump component
//get data
//return data
// const Index = () => {
//   return <div>hello index</div>;
// };

//class componens
//More Functionalityes
//more stuff
//user lifecycle functions

class Index extends React.Component {
  static async getInitialProps() {
    console.log("get initial");
    let maindata = {};
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      maindata = response.data;
    } catch (err) {
      console.log(err);
    }

    return { names: "Nasir Shaik", maindata };
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "Im a Index Page"
    };
    console.log("constructer");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillMount() {
    console.log("component will mount..");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  updateTitle = () => {
    this.setState({ title: "Now Im Changed" });
  };

  render() {
    const { title } = this.state;
    const { names, maindata } = this.props;

    return (
      <BasicLayout>
        <h1>hello This is Index Page</h1>
        <p className="mainFile">Ping to Ping</p>
        <h2>{title}</h2>
        <p>{names}</p>
        <p>{maindata.title}</p>

        <button onClick={this.updateTitle}>Change state</button>
      </BasicLayout>
    );
  }
}

export default Index;
