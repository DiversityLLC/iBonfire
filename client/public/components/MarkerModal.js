import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class MarkerModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hoverMarker = this.props.hoverMarker;
    const markerData = hoverMarker.markerData;
    return (
      <div className={hoverMarker.displayClass}>
        <h2>Hello, {this.props.facebook.currUser.name}</h2>
        <h3>{markerData.cityState}</h3>
        <h3>{markerData.tags}</h3>
        <h3>{markerData.description}</h3>
        <img src={`http://graph.facebook.com/${this.props.facebook.currUser.id}/picture?type=small`}/>
        <button>Join</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers,
    users: state.users,
    location: state.location,
    facebook: state.facebook,
    hoverMarker: state.hoverMarker
  };
}

export default connect(mapStateToProps, actions)(MarkerModal);