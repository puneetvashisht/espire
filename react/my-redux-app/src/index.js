import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import {Provider} from 'react-redux'

// 2. Reducers to change the state
const initialState = {
  employees: [
      { id: 1, name: "Test1", salary: 11111 },
      { id: 2, name: "Test2", salary: 22222 }
  ]
}
const reducer = (state = initialState, action) => {
  console.log('in reducer...')
  switch (action.type) {
      case 'FETCH_EMPLOYEES':
          return state.employees;
          break;
      case 'ADD_EMPLOYEE':
          // console.log('employees...', state)
          let newEmployees = [...state.employees, action.payload]
          return {employees: newEmployees};
      case 'DELETE_EMPLOYEE':
          // console.log('employees...', state)
          let remainingEmployees = state.employees.filter((emp) => emp.id != action.payload.id)
          return {employees: remainingEmployees};
      default:
          return state;
  }

}

// 1. Create Single Store
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
