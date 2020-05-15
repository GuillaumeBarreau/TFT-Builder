/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Items as Component } from './';

describe('Items component', () => {

  let props;

  beforeEach(() => {
    props = {
      items: [
        {
          id: "Groot",
          name: "I am Groot"
        },
        {
          id: "Groot2",
          name: "I am Groot again"
        }
      ],
      itemSelect: 'itemSelect',
      onClickSelectionItem: jest.fn(),
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

  it('Should contain a value to { props.items[0].id }', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain('Groot');
  });

  it('Should contain a value to { props.items[0].name }', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain('I am Groot');
  });

  it('Should simulate a onClick and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElementLi = wrapper.find('li').at(0);
    firstElementLi.simulate('click')
    expect(props.onClickSelectionItem).toHaveBeenCalled();
  });

})