const {toCelsiusSingleDecimal} = require('../src/app/defaultWeather.js');
const R = require('ramda');
import * as React from 'react';
const { render, screen } =  require('@testing-library/react');
const { WeeklyWeather } = require('../src/app/defaultWeather.js');

describe("toCelsiusSingleDecimal", () => {
    const fahrenheitTemps = [32, -25, 90, 0, -40];
    const actualTemps = R.map(toCelsiusSingleDecimal, fahrenheitTemps);
    it('Returns the temperature in celsius', () => {
        expect(actualTemps).toEqual([0, -31.6, 32.2, -17.7, -40]);
    })
})

const tempsToColl = (temps) => R.map(
    R.pipe((temp) => temp.textContent, R.take(1), parseInt),
    temps)

describe('WeeklyWeather', () => {
    const temperatures = [1];
   describe("When rendering next week's weather", () => {
       render(<WeeklyWeather weather = {temperatures}/>)
       // screen.debug()
       screen.debug(screen.queryByTestId("temp"))
       const nodes = screen.queryByTestId("temp");
       console.log(nodes.textContent, "The content");
       const text = nodes.textContent;
         console.log(parseInt(R.take(1, text)), "The changed text");
       const vals = R.map(tempsToColl, nodes);
        const actual = screen.queryByTestId('temp').textContent;
       console.log(vals, "The temperatures")
       screen.queryByTestId("temp")
       it("Should display the correct temperatures", () => {
           const actual = screen.queryByTestId('temp');
           // console.log(actual)
           const expected = [1];
           // expect(actual).toEqual(expected);
           expect(actual).toEqual(expected);
       })
   })
})