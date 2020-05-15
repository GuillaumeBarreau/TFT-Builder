/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { BoardCaseTrait as Component } from './';

describe('BoardCaseTrait component', () => {
  let props;

  beforeEach(() => {
    props = {
      data: {
        traits: ['trait01', 'trait02']
      },
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

});
