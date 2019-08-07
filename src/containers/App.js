import React, { Component } from "react";
import "./App.css";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

export default class App extends Component {
  state = {
    robots: [],
    searchTerm: ""
  };

  componentDidMount() {
    this.getUsers();
    console.log(this.state.robots);
  }

  getUsers = async () => {
    try {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      this.setState({
        robots: data
      });
    } catch (err) {
      console.log(err);
    }
  };

  onSearchChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.login
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading robots...</h1>;
    } else {
      return (
        <div className="app-wrapper">
          <h1>Robotics</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
