import React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';

//components
import { Header } from 'components';

describe('<Header />', () => {
  it('should exist', () => {
    expect(Header).toExist()
  })
})
