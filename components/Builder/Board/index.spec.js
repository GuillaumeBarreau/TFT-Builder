/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Board as Component } from './';

describe('Board component', () => {
  let props;

  beforeEach(() => {
    props = {
      board: [
        []
      ],
    };
  });

  it('Should renders a component', () => {
    const wrapper = shallow(<Component {...props}></Component>);
    expect(wrapper.exists()).toBe(true);
  })

});
