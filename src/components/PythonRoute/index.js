import { Component } from "react";
import CommonChild from "../CommonChild";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import "./index.css";

export default class Python extends Component {
  state = {
    pythonQuestions: [],
    isLoading: false,
  };

  componentDidMount = () => {
    this.getPythonQuestions();
  };

  getPythonQuestions = async () => {
    this.setState({ isLoading: true });
    const pythonUrl = " https://python-imp.herokuapp.com/python";
    const options = {
      method: "GET",
    };
    const response = await fetch(pythonUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      console.log(fetchedData);
      const pythonData = fetchedData.map((each) => ({
        id: each.id,
        question: each.question,
        answer: each.answer,
      }));
      this.setState({
        pythonQuestions: pythonData,
        isLoading: false,
      });
    }
  };

  renderPythonQuestions = () => {
    const { pythonQuestions } = this.state;
    return (
      <>
        <h1 className="question-head">Python Questions</h1>
        <div className="creeper-row">
          <ul className="un-li">
            {pythonQuestions.map((each) => (
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
          <Link to="/node" className="link">
            Node
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

    return isLoading ? this.renderLoader() : this.renderPythonQuestions();
  }
}
