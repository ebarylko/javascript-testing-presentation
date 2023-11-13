const R = require('ramda');
import * as React from 'react';
const { render, screen , queryAllByTestId} =  require('@testing-library/react');
const { WeeklyWeather } = require('../src/app/defaultWeather.js');
const {toCelsiusSingleDecimal} = require('../src/app/defaultWeather.js');

describe("toCelsiusSingleDecimal", () => {
    const fahrenheitTemps = [32, -25, 90, 0, -40];
    const actualTemps = R.map(toCelsiusSingleDecimal, fahrenheitTemps);
    it('Returns the temperature in celsius', () => {
        expect(actualTemps).toEqual([0, -31.6, 32.2, -17.7, -40]);
    })
})

const parseTemperatures = (temps) => R.map(
    R.pipe((temp) => temp.textContent, parseInt),
    temps)


describe('WeeklyWeather', () => {
    beforeEach(() => render(<WeeklyWeather weather = {temperatures}/>))
    const temperatures = [1];
   describe("When rendering next week's weather", () => {
       it("Should display the correct temperatures", () => {
           const actual = screen.queryAllByTestId('temp');
           const expected = [1];
           const actualTemps = parseTemperatures(actual);
           expect(actualTemps).toEqual(expected);
       })
   })
})