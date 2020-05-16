/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Champions as Component } from './';

describe('Champions component', () => {

  let props;

  beforeEach(() => {
    props = {
      champions: [
       {
          championId: "Groot",
          cost: 42,
          name: "I am Groot",
          traits: ["trait01", "trait02"]
        },
       {
          championId: "championId02",
          cost: 2,
          name: "PropTypes.string",
          traits: ["trait03", "trait04"]
        }
      ],
      championSelect: "championSelect",
      onClickSelectionChampion: jest.fn(),
      traitHover: 'trait03',
    };
  });

  it('Should renders a component', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.exists()).toBe(true);
  })

  it('Should contain a value to { props.champions[0].championId }', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain('Groot');
  });
  
  it('Should contain a value to { props.champions[0].name }', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain('I am Groot');
  });

  it('Should contain a value ClassName "itemContent_imageBorderCost-42"', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.html()).toContain('itemContent_imageBorderCost-042');
  });

  it('Should renders Two Elements html "li', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('Should contain a value ClassName "traitNotSelected"', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElementLi = wrapper.find('li').at(0)
    expect(firstElementLi.html()).toContain('traitNotSelected');
  });

  it('Should contain a value ClassName "traitSelected"', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const secondElementLi = wrapper.find('li').at(1)
    expect(secondElementLi.html()).toContain('traitSelected');
  });

  it('Should simulate a onClick and count if to been Called', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    const firstElementLi = wrapper.find('li').at(0);
    firstElementLi.simulate('click')
    expect(props.onClickSelectionChampion).toHaveBeenCalled();
  });

})