/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Cmp from '.';

describe('<App />', () => {

  beforeEach(() => {
    props = {
      board: [[
        {
          "name": "Ashe",
          "championId": "TFT3_Ashe",
          "cost": 3,
          "traits": [
            "TFT3_Celestial",
            "TFT3_Sniper"
          ]
        },
      ]]
    };
  });

  it('renders properly', () => {
    const wrapper = shallow(<Cmp />);
    console.log(wrapper);
    
    expect(wrapper.exists()).toBeTruthy();
  });


});
