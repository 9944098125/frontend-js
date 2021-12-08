import { Component } from "react";
import CommonChild from "../CommonChild";
import Loader from "react-loader-spinner";
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
      const jsData = fetchedData.javascript_qa.map(each => ({
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
      <ul className="un-li">
        {jsQuestions.map((each) => (
          <CommonChild language={each} key={each.id} />
        ))}
      </ul>
    );
  };

  renderLoader = () => (
    <div testid="questions-loader" className="loader">
      <Loader type="TailSpin" color="#F7931E" height={50} width={50} />
    </div>
  );

  render() {
    const { isLoading } = this.state;

    return isLoading ? this.renderLoader() : this.renderJSQuestions();
  }
}
