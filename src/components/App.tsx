import * as React from "react";
import { hot } from "react-hot-loader";
import { format } from "../lib/index";
class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <h2>{format("2010-05-11", "hh-mm-ss --- D/YYYY/M")}</h2>
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
