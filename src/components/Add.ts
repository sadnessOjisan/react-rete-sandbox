import Rete, { Input, Node, Output } from "rete";
import { NumControl } from "../control";
import { Sockets } from "../sockets";

export class AddComponent extends Rete.Component {
  constructor() {
    super("Add");
  }

  builder(node) {
    var inp1 = new Rete.Input("num1", "Number", Sockets.num);
    var inp2 = new Rete.Input("num2", "Number2", Sockets.num);
    var out = new Rete.Output("num", "Number", Sockets.num);

    inp1.addControl(new NumControl(this.editor, "num1", node));
    inp2.addControl(new NumControl(this.editor, "num2", node));

    return node
      .addInput(inp1)
      .addInput(inp2)
      .addControl(new NumControl(this.editor, "preview", node, true))
      .addOutput(out);
  }

  worker(node, inputs, outputs) {
    var n1 = inputs["num1"].length ? inputs["num1"][0] : node.data.num1;
    var n2 = inputs["num2"].length ? inputs["num2"][0] : node.data.num2;
    var sum = n1 + n2;

    this.editor.nodes
      .find((n) => n.id == node.id)
      .controls.get("preview")
      .setValue(sum);
    outputs["num"] = sum;
  }
}
