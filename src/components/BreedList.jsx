import React, { Component } from "react";
import { fetchBreedsName } from "../redux/breedsName/breedsName.action";
import { connect } from "react-redux";

class BreedList extends Component {
  componentDidMount() {
    this.props.fetchBreedsName();
  }
  render() {
    const data = this.props && this.props.breedsName;
    const keys = data && Object.keys(data);

    return (
      <div>
        <h2>Hello, Choose a Breed to View its Images</h2>
        <ul>
          {keys &&
            keys.map((key) => (
              <li key={key} style={{ listStyle: "none" }}>
                <a href={`/showDogImage/${key}`}>{key}</a>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breedsName: state && state.breeds && state.breeds[0],
  };
};
export default connect(mapStateToProps, { fetchBreedsName })(BreedList);
