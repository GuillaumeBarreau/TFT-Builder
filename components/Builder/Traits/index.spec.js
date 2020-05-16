/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Traits as Component } from './';
import { Button } from '../communs/Button';

describe('Traits component', () => {

  let props;

  beforeEach(() => {
    props = {
      traits: [{
        description: "description",
        key: "tft3_blaster",
        name: "name",
        type: "type",
        sets: [{
          max: 0,
          min: 0,
          style: "style"
        }]
      }, {
        description: "description02",
        key: "tft3_blaster02",
        name: "name02",
        type: "type02",
        sets: [{
          max: 0,
          min: 0,
          style: "style02"
        }]
      }],
      onClickSelectionTrait: jest.fn(),
      onClickResetTraits: jest.fn(),
      selectedTraits: ['selectedTraits'],
      onMouseEnterSelectionTrait: jest.fn(),
      onMouseLeaveSelectionTrait: jest.fn(),
    };
  });

  it('Should renders a component', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should contain a value to { name }', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain(props.traits[0].name);
  });

  it('Should simulate a mouseLeave and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElement = wrapper.find('li').at(0); 
    firstElement.simulate('mouseLeave')
    expect(props.onMouseLeaveSelectionTrait).toHaveBeenCalled()
  });

  it('Should simulate a mouseEnter and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElement = wrapper.find('li').at(0); 
    firstElement.simulate('mouseEnter')
    expect(props.onMouseEnterSelectionTrait).toHaveBeenCalled()
  });

  it('Should simulate a onClick and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElement = wrapper.find('button').at(0); 
    firstElement.simulate('click')
    expect(props.onClickSelectionTrait).toHaveBeenCalled()
  });

  it('Should renders Two Elements html "li"', () => {
    const wrapper = shallow(<Component {...props} />);
    expect(wrapper.find('li')).toHaveLength(2)
  })
  
  it('Should renders a children component', () => {
    const wrapper = shallow(<Component {...props} />);
    expect(wrapper.find(Button).exists()).toBe(true)
  })

});
