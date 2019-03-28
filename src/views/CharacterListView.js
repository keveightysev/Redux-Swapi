import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChar } from '../actions';


class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getChar();
  }

  render() {
    if (this.props.fetching) {
      return <h2>Loading data...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
  };
};
export default connect(mapStateToProps,{ getChar })(CharacterListView);
