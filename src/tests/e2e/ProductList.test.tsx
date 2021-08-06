import React from 'react';
import { mount } from '@cypress/react';
import ProductsList from '../../components/catalog/components/products/ProductsList';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});


context('Product list', () => {

    before(() => {
      cy.visit('http://localhost:3001')
    })

    it('renders product list catalog component', () => {
      mount(<Provider store={store}><ProductsList /></Provider>);
    });

    it('renders no product information', () => {

    });

})
