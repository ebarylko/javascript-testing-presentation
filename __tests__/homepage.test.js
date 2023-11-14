import * as R from 'ramda';
import * as React from 'react';

import {render, screen} from '@testing-library/react';


import { WeeklyWeather } from '@/app/defaultWeather.js';
import { toCelsiusSingleDecimal } from '@/app/defaultWeather.js';

describe("toCelsiusSingleDecimal", () => {
    it('Returns the temperature in celsius', () => {
        const fahrenheitTemps = [32, -25, 90, 0, -40];
        const actualTemps = R.map(toCelsiusSingleDecimal, fahrenheitTemps);
        expect(actualTemps).toEqual([0, -31.6, 32.2, -17.7, -40]);
    })
})

const parseTemperatures = (temps) => R.map(
    R.pipe((temp) => temp.textContent, parseInt),
    temps
)


describe('WeeklyWeather', () => {
   describe("When rendering next week's weather", () => {
       let rerender;
       beforeEach(() => {
           rerender = render(<WeeklyWeather weather={[1]}/>).rerender
       })
       it.each([
           [[1, 2]],
           [[1, 9, -2]],
           [[-12, -3, 9, 54, 34]]
       ])('Display the temperatures %s', async (temperatures) => {
           await rerender(<WeeklyWeather weather={temperatures}/>);
           const actual = screen.queryAllByTestId('temp');
           const actualTemps = parseTemperatures(actual);
           expect(actualTemps).toEqual(temperatures);
       })
   })
})