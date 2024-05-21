export const addName = text => {
  return {
    type: "name/addName",
    payload: {
      text
    },
  };
};

export const addNumber = text => {
  return {
    type: "number/addNumber",
    payload: {
      text
    },
  };
};



export const addItem = text => {
  return {
    type: "items/addItem",
    payload: {
      text
    },
  };
};

export const deleteItem = text => {
  return {
    type: "items/deleteItem ",
    payload: {
      text
    },
  };
};
