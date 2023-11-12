import * as w from "./src/app/defaultWeather.js"
test('adds 1 + 2 to equal 3', () => {
    expect((1 + 2)).toBe(3);
});

test("-40 degrees fahrenheit is -40 degrees celsius", () => {
    expect((w.toCelsiusSingleDecimal(-40))).toBe(-40);
})