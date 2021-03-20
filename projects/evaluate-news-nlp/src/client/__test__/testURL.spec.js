import { checkForURL } from "../js/URLChecker"

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(checkForURL).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(checkForURL('https://www.npmjs.com/package/valid-url')).toBeTruthy();
    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(checkForURL('reem')).toBeFalsy();
    })
})