import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return <div>Home Page</div>;
  }
}

export default Home;

// import React, { Component } from "react";
// import { fetchBreedsName } from "../redux/breedsName/breedsName.action";
// import { connect } from "react-redux";

// class Home extends Component {
//   componentDidMount() {
//     this.props.fetchBreedsName();
//   }
//   render() {
//     const data = this.props && this.props.breedsName;
//     const keys = data && Object.keys(data);

//     return (
//       <div>
//         <h2>Welcome To Road Runner</h2>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     breedsName: state && state.breeds && state.breeds[0],
//   };
// };
// export default connect(mapStateToProps, { fetchBreedsName })(Home);
