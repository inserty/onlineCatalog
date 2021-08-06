import React from 'react';
import { mount } from '@cypress/react';
import OnlineCatalog from '../../components/catalog/OnlineCatalog';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

it('renders online catalog component', () => {
  mount(<Provider store={store}><OnlineCatalog /></Provider>);
});

it('renders no product information', () => {
  mount(<Provider store={store}><OnlineCatalog /></Provider>);
  cy.get('#noProducts').contains('There are no products on the list');
});
