import * as w from "./src/app/defaultWeather.js"
import {toCelsiusSingleDecimal} from "./src/app/defaultWeather.js";
const R = require('ramda');
describe("toCelsiusSingleDecimal", () => {
    const fahrenheitTemps = [32, -25, 90, 0, -40];
    describe("When converting from fahrenheit to celsius", () => {
    const actualTemps = R.map(toCelsiusSingleDecimal, fahrenheitTemps);
    it('Should return the correct temperature in celsius', () => {
        expect(actualTemps).toEqual([0, -31.6, 32.2, -17.7, -40]);
    })
    })
})
test("-40 degrees fahrenheit is -40 degrees celsius", () => {
    expect((w.toCelsiusSingleDecimal(-40))).toBe(-40);
})