/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { BoardCaseItem as Component } from './';

describe('BoardCaseItem component', () => {
  let props;

  beforeEach(() => {
    props = {
      id: "Groot",
      items: ["item01", "item02"],
      onClickDeleteItem: jest.fn(),
      imagesItems: {},
    };
  });

  it('Should renders a component', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.exists()).toBe(true);
  })

  it('Should renders Two Elements html "li', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('Should contain a value ClassName "buttonItem-Groot"', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain("buttonItem-Groot");
  });

  it('Should simulate a onClick and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElementLi = wrapper.find('li').at(0);
    firstElementLi.simulate('click');
    expect(props.onClickDeleteItem).toHaveBeenCalled();
  });

});
