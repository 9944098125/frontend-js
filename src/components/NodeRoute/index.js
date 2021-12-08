import { Component } from "react";
import CommonChild from "../CommonChild";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import "./index.css";

export default class Node extends Component {
  state = {
    nodeQuestions: [],
    isLoading: false,
  };

  componentDidMount = () => {
    this.getNodeQuestions();
  };

  getNodeQuestions = async () => {
    this.setState({ isLoading: true });
    const nodeUrl = " https://node-imp.herokuapp.com/node";
    const options = {
      method: "GET",
    };
    const response = await fetch(nodeUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      console.log(fetchedData);
      const nodeData = fetchedData.map((each) => ({
        id: each.id,
        question: each.question,
        answer: each.answer,
      }));
      this.setState({
        nodeQuestions: nodeData,
        isLoading: false,
      });
    }
  };

  renderNodeQuestions = () => {
    const { nodeQuestions } = this.state;
    return (
      <>
        <h1 className="question-head">Node Questions</h1>
        <div className="creeper-row">
          <ul className="un-li">
            {nodeQuestions.map((each) => (
              <CommonChild language={each} key={each.id} />
            ))}
          </ul>
          <img
            src="https://res.cloudinary.com/dakda5ni3/image/upload/v1638980687/Screenshot_56_xttjot.png"
            alt="a"
            className="creeper-img"
          />
        </div>
        <div className="link-row">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/react" className="link">
            React
          </Link>
          <Link to="/javascript" className="link">
            Javascript
          </Link>
          <Link to="/python" className="link">
            Python
          </Link>
          <Link to="/sql" className="link">
            SQL
          </Link>
        </div>
      </>
    );
  };

  renderLoader = () => (
    <div testid="questions-loader" className="loader">
      <Loader type="TailSpin" color="#F7931E" height={100} width={100} />
    </div>
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoader() : this.renderNodeQuestions();
  }
}
