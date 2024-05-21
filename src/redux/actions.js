

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
    type: "items/deleteItem",
    payload: {
      text
    },
  };
};
