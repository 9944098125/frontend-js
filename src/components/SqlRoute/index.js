import { Component } from "react";
import CommonChild from "../CommonChild";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import "./index.css";

export default class Sql extends Component {
  state = {
    sqlQuestions: [],
    isLoading: false,
  };

  componentDidMount = () => {
    this.getSqlQuestions();
  };

  getSqlQuestions = async () => {
    this.setState({ isLoading: true });
    const sqlUrl = " https://sql-imp.herokuapp.com/sql";
    const options = {
      method: "GET",
    };
    const response = await fetch(sqlUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      console.log(fetchedData);
      const sqlData = fetchedData.map((each) => ({
        id: each.id,
        question: each.question,
        answer: each.answer,
      }));
      this.setState({
        sqlQuestions: sqlData,
        isLoading: false,
      });
    }
  };

  renderSqlQuestions = () => {
    const { sqlQuestions } = this.state;
    return (
      <>
        <h1 className="question-head">Node Questions</h1>
        <div className="creeper-row">
          <ul className="un-li">
            {sqlQuestions.map((each) => (
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
          <Link to="/node" className="link">
            Node.js
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

    return isLoading ? this.renderLoader() : this.renderSqlQuestions();
  }
}
