import { connect } from "react-redux";
import Exam from "../Exam";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    questionsData: state.questions,
  };
};

export default connect(mapStateToProps)(Exam);
