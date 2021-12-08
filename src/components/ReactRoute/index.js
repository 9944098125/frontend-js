import { Component } from "react";
import CommonChild from "../CommonChild";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import "./index.css";

export default class React extends Component {
  state = {
    reactQuestions: [],
    isLoading: false,
  };

  componentDidMount = () => {
    this.getReactQuestions();
  };

  getReactQuestions = async () => {
    this.setState({ isLoading: true });
    const reactUrl = " https://react-imp.herokuapp.com/react";
    const options = {
      method: "GET",
    };
    const response = await fetch(reactUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      console.log(fetchedData);
      const reactData = fetchedData.map((each) => ({
        id: each.id,
        question: each.question,
        answer: each.answer,
      }));
      this.setState({
        reactQuestions: reactData,
        isLoading: false,
      });
    }
  };

  renderReactQuestions = () => {
    const { reactQuestions } = this.state;
    return (
      <>
        <h1 className="question-head">React Questions</h1>
        <div className="creeper-row">
          <ul className="un-li">
            {reactQuestions.map((each) => (
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
          <Link to="/sql" className="link">
            SQL
          </Link>
          <Link to="/javascript" className="link">
            Javascript
          </Link>
          <Link to="/python" className="link">
            Python
          </Link>
          <Link to="/node" className="link">
            node
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

    return isLoading ? this.renderLoader() : this.renderReactQuestions();
  }
}
