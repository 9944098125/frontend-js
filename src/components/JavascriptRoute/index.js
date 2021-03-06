import { Component } from "react";
import CommonChild from "../CommonChild";
import Loader from "react-loader-spinner";
import {Link} from 'react-router-dom';
import "./index.css";

export default class Javascript extends Component {
  state = {
    jsQuestions: [],
    isLoading: false,
  };

  componentDidMount = () => {
    this.getJSQuestions();
  }

  getJSQuestions = async () => {
    this.setState({ isLoading: true });
    const javascriptUrl = "https://javascipt-imp.herokuapp.com/javascript";
    const options = {
      method: "GET",
    };
    const response = await fetch(javascriptUrl, options);
    if (response.ok){
      const fetchedData = await response.json();
      console.log(fetchedData);
      const jsData = fetchedData.map(each => ({
        id:each.id,
        question:each.question,
        answer:each.answer
      }));
      this.setState({
        jsQuestions: jsData,
        isLoading: false,
      });
    }
  };

  renderJSQuestions = () => {
    const { jsQuestions } = this.state;
    return (
      <>
        <h1 className="question-head">Javascript Questions</h1>
        <div className="creeper-row">
          <ul className="un-li">
            {jsQuestions.map((each) => (
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
          <Link to="/node" className="link">
            Node
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

    return isLoading ? this.renderLoader() : this.renderJSQuestions();
  }
}
