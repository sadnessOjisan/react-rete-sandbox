import { initialize } from "./init";
import { data } from "./data";
import { AddComponent } from "./components/Add";
import { NumComponent } from "./components/Num";

export const init = async (htmlContainer: any) => {
  const { editor, engine, resize, process } = await initialize(htmlContainer);
  const components = [new AddComponent(), new NumComponent()];
  components.map((c) => {
    editor.register(c);
    engine.register(c);
  });

  await editor.fromJSON(data);
  resize();
  process();

  return { editor, engine };
};
