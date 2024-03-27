import React, { Component } from "react";
import Section1 from "./Sections1-3/Section1";
import Section2 from "./Sections1-3/Section2";
import Section3 from "./Sections1-3/Section3";
import Section4 from "./Section4-6/Section4";
import Section5 from "./Section4-6/Section5";
import Section6 from "./Section4-6/Section6";
import YouTube from "../youtube/YouTube";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <YouTube />
      </div>
    );
  }
}
