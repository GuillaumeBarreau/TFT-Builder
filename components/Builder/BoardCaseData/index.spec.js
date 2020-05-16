/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { BoardCaseData as Component } from './';

describe('BoardCaseData component', () => {
  let props;

  beforeEach(() => {
    props = {
      id: "Groot",
      data:{
        championId: "Groot",
        cost: 42,
        name: "I am Groot"
      },
      onClickDeleteChampion: jest.fn()
    };
  });

  it('Should renders a component', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.exists()).toBe(true);
  })

  it('Should contain a value id "button-Groot"', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain("button-Groot");
  });

  it('Should simulate a onClick and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.onClickDeleteChampion).toHaveBeenCalled();
  });

});
