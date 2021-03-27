import { Socket } from "rete";

export const Sockets = {
  num: new Socket("Number value"),
  action: new Socket("Action"),
  data: new Socket("Data"),
  package: new Socket("Package"),
};
