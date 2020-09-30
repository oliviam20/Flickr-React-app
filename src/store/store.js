import React, { createContext, useReducer } from 'react';

const initialState = {
  images: [],
  loading: false
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'LOAD_IMAGES':
        return {
          images: [],
          loading: true
        }
      case 'LOAD_IMAGES_SUCESS':
        return {
          images: [...action.result.items],
          loading: false
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