import React, { createContext, useReducer } from 'react';

const initialState = {
  images: []
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'LOAD_IMAGES':
        console.log('LOAD_IMAGES state', state);
        console.log('LOAD_IMAGES action', action);
        return {
          images: [...action.result.items]
        };
      default:
        throw new Error();
    };
  }, initialState);

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
}

export { store, StateProvider };