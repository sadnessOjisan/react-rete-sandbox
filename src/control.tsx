import React from "react";
import { Control } from "rete";

class MyReactControl extends React.Component<{ name: string; id: string }> {
  state = {};
  componentDidMount() {
    this.setState({
      name: this.props.name,
    });
    console.log(this.props);
    // @ts-ignore
    this.props.putData(this.props.id, this.props.name);
  }
  onChange(event) {
    // @ts-ignore
    this.props.putData(this.props.id, event.target.value);
    // @ts-ignore
    this.props.emitter.trigger("process");
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      // @ts-ignore
      <input value={this.state.name} onChange={this.onChange.bind(this)} />
    );
  }
}

export class MyControl extends Control {
  constructor(emitter, key, name) {
    super(key);
    // @ts-ignore
    this.render = "react";
    // @ts-ignore
    this.component = MyReactControl;
    // @ts-ignore
    this.props = {
      emitter,
      id: key,
      name,
      // @ts-ignore
      putData: () => this.putData.apply(this, arguments),
    };
  }
}
