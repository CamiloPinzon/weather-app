export const farenheitToCelsius = (farenheit: number) => {
    return Math.round((farenheit - 32) * 5 / 9);
}

export const milesToKilometers = (miles: number) => {
    return Math.round(miles * 1.60934);
}