import React, { Component } from "react";
import YouTube from "react-youtube";

// https://www.youtube.com/watch?v=UfgbZ5wJszs/
export class Vidlink extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      // height: "100%",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props;

    return <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
  }
}

export default Vidlink;
