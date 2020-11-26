import React, { Component } from "react";
import ImageGrid from "./ImageGrid";
import { connect } from "react-redux";
import { fetchSelectedImages } from "../redux/breedImages/breedImages.action";
class SelectedBreed extends Component {
  componentDidMount() {
    const breedName = this.props.computedMatch.params.name;
    this.props.fetchSelectedImages(breedName);
  }
  render() {
    const breedImages = this.props;

    console.log(breedImages);
    return (
      <div>
        <p>Selected Breed images,</p>
        <ImageGrid Images={breedImages} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breedImages: state && state.breedImages && state.breedImages[0],
  };
};

export default connect(mapStateToProps, { fetchSelectedImages })(SelectedBreed);
