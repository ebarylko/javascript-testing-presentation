import * as R from 'ramda';
import { toCelsiusSingleDecimal } from '@/app/defaultWeather.js';

describe("toCelsiusSingleDecimal", () => {
    it('Returns the temperature in celsius', () => {
        const fahrenheitTemps = [32, -25, 90, 0, -40];
        const actualTemps = R.map(toCelsiusSingleDecimal, fahrenheitTemps);
        expect(actualTemps).toEqual([0, -31.6, 32.2, -17.7, -40]);
    })
})

