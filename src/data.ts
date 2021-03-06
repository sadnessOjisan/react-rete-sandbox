export const data = {
  id: "retejs@0.1.0",
  nodes: {
    "2": {
      id: 2,
      data: {
        num: 2,
      },
      inputs: {},
      outputs: {
        num: {
          connections: [
            {
              node: 6,
              input: "num1",
              data: {},
            },
          ],
        },
      },
      position: [80, 200],
      name: "Number",
    },
    "4": {
      id: 4,
      data: {
        num: 0,
      },
      inputs: {},
      outputs: {
        num: {
          connections: [
            {
              node: 6,
              input: "num2",
              data: {},
            },
          ],
        },
      },
      position: [80, 400],
      name: "Number",
    },
    "6": {
      id: 6,
      data: {
        preview: 0,
        num1: 0,
        num2: 0,
      },
      inputs: {
        num1: {
          connections: [
            {
              node: 2,
              output: "num",
              data: {},
            },
          ],
        },
        num2: {
          connections: [
            {
              node: 4,
              output: "num",
              data: {},
            },
          ],
        },
      },
      outputs: {
        num: {
          connections: [],
        },
      },
      position: [500, 240],
      name: "Add",
    },
  },
};
