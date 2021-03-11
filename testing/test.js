// const { expect } = require('@jest/globals');

const { getComputerChoice, convertToWord } = require('../src/script');


// checking inputs and outputs
test('to get computer choice randomly', () => {
    expect(getComputerChoice()).toBe('r' || 'p' || 's');        // passed
});  


test('to convert the letters to words', () => {
    expect(convertToWord('r')).toBe('Rock');        // passed
    expect(convertToWord('p')).toBe('Paper');        // passed
    expect(convertToWord('s')).toBe('Scissor');        // passed
});
 


