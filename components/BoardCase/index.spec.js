/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { BoardCase as Component } from './';

describe('BoardCase component', () => {
  let props;

  beforeEach(() => {
    props = {
      id: "Groot",
      data: {
        championId: "Groot",
        cost: 42,
        name: "I am Groot",
        traits: ["trait01", "trait02"]
      },
      onClickAddElement: jest.fn(),
      onClickDeleteChampion: jest.fn(),
      onClickDeleteItem: jest.fn(),
      traitHover: 'trait01'
    };
  });

  it('Should renders a component', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.exists()).toBe(true);
  })

  it('Should contain a value className "mainContent_backgroundColorCost-042"', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain("mainContent_backgroundColorCost-042");
  });

  it('Should contain a value ClassName "traitSelected"', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain('traitSelected');
  });

  it('Should simulate a onClick and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const element = wrapper.find('div').at(1);
    element.simulate('click');
    expect(props.onClickAddElement).toHaveBeenCalled();
  });

});
