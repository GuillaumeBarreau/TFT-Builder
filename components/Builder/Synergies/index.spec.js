/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Synergies as Component } from './';

describe('Synergies component', () => {

  let props;

  beforeEach(() => {
    props = {
      synergies: { 
        "TFT3_Chrono": { 
          "key": "TFT3_Chrono", 
          "name": "Chrono", 
          "count": 1, 
          "sets": [
            { 
              "style": "bronze", 
              "min": 2, 
              "max": 3 
            }, 
            { 
              "style": "silver", 
              "min": 4, 
              "max": 5 
            }, 
            { 
              "style": "gold", 
              "min": 6 
            }
          ], 
          "description": "All allies gain attack speed every few seconds.", 
          "level": "partial" 
        }
      },
      onMouseEnterSelectionTrait: jest.fn(),
      onMouseLeaveSelectionTrait: jest.fn(),
    };
  });

  it('Should renders a component', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.exists()).toBe(true);
  })

  it('Should contain a value to { synergies.TFT3_Chrono.name }', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain(props.synergies.TFT3_Chrono.name);
  });

  it('Should contain a value to className "synergiesLevel__partial"', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain("synergiesLevel__partial");
  });

  it('Should contain a value to { sets.min }', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const secondElementLi = wrapper.find('li').at(1);
    expect(secondElementLi.text()).toContain(2);
  });

  it('Should simulate a mouseEnter and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElementLi = wrapper.find('li').at(0);
    firstElementLi.simulate('mouseenter')
    expect(props.onMouseEnterSelectionTrait).toHaveBeenCalled();
  });

  it('Should simulate a mouseLeave and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElementLi = wrapper.find('li').at(0);
    firstElementLi.simulate('mouseleave')
    expect(props.onMouseLeaveSelectionTrait).toHaveBeenCalled()
  });
})