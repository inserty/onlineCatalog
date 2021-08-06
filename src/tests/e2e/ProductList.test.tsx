import React from 'react';
import { mount } from '@cypress/react';
import ProductsList from '../../components/catalog/components/products/ProductsList';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

it('renders product list catalog component', () => {
  mount(<Provider store={store}><ProductsList /></Provider>);
});

it('renders no product information', () => {
  mount(<Provider store={store}><ProductsList /></Provider>);
  cy.visit('http://localhost:3001')
  cy.window().should('have.property', '__store__');
  // cy.window().its('__store__')
  //   .then(
  //     store => store.dispatch({ type: 'UPDATE_CURRENT_PROFILE' })
  //   );
});
