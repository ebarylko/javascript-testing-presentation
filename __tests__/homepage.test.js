const {toCelsiusSingleDecimal} = require('../src/app/defaultWeather.js');
const R = require('ramda');
import * as React from 'react';
const { render, screen } =  require('@testing-library/react');
const { WeeklyWeather } = require('../src/app/defaultWeather.js');

describe("toCelsiusSingleDecimal", () => {
    const fahrenheitTemps = [32, -25, 90, 0, -40];
    describe("When converting from fahrenheit to celsius", () => {
    const actualTemps = R.map(toCelsiusSingleDecimal, fahrenheitTemps);
    it('Should return the correct temperature in celsius', () => {
        expect(actualTemps).toEqual([0, -31.6, 32.2, -17.7, -40]);
    })
    })
})

describe('WeeklyWeather', () => {
    const temperatures = [1, 2, 4];
   describe("When rendering next week's weather", () => {
       render( <div>
           <WeeklyWeather weather = {temperatures}/>
       </div>)
       it("Should display the correct temperatures", () => {
           expect(1).toEqual(2);
       })
   })
})