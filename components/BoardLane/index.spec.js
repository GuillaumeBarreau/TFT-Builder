/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { BoardLane as Component } from './';
import sinon from 'sinon';

describe('BoardLane component', () => {
  
  it('Should render a component', () => {
    const children = "Children content";
    const wrapper = shallow(<Component>{children}</Component> );
    expect(wrapper.exists()).toBe(true);
  });

  it('Should contain a value to { children }', () => {
    const children = "Children content";
    const wrapper = shallow(<Component>{children}</Component>);
    expect(wrapper.html()).toContain(children);
  });

  it('throws an error if a value { children } is not defined', () => {
    const children = null;
    const stub = sinon.stub(console, 'error');
    shallow(<Component>{children}</Component>);
    expect(stub.calledOnce).toBe(true);
    console.error.restore();
  });

});
