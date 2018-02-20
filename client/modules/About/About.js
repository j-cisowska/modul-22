import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style


class About extends Component {
  render() {
    return (
      <div>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet commodo sapien at pharetra. Praesent cursus eros elit, non euismod libero elementum in.</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
