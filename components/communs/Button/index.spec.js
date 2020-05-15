/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Button as Component } from './';
import sinon from 'sinon';

describe('Button component', () => {
  
  let props;

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
    };
  });

  it('Should render a component', () => {
    const children = "Children content";
    const wrapper = shallow(<Component {...props}>{children}</Component> );
    expect(wrapper.exists()).toBe(true);
  });

  it('Should contain a value to { children }', () => {
    const children = "Children content";
    const wrapper = shallow(<Component {...props}>{children}</Component>);
    expect(wrapper.html()).toContain(children);
  });

  it('throws an error if a value { children } is not defined', () => {
    const children = null;
    const stub = sinon.stub(console, 'error');
    shallow(<Component {...props}>{children}</Component>);
    expect(stub.calledOnce).toBe(true);
    console.error.restore();
  });

  it('Should simulate a onClick and count if to been Called', () => {
    const children = "Children content";
    const wrapper = shallow(<Component {...props}>{children}</Component>);
    const button = wrapper.find('button');
    button.simulate('click')
    expect(props.onClick).toHaveBeenCalled();
  });

});
