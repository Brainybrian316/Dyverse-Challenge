
const { test, expect } = require('@jest/globals');
const mineSweeper = require('../index');

test('mineSweeper', () => {
  const input = [

    ' *  * ', 
    '  *   ',
    '    * ', 
    '   * *',
    ' *  * ', 
    '      ', 

  ];

  const output = [

    '1*22*1', 
    '12*322', 
    ' 123*2', 
    '112*4*',
    '1*22*2', 
    '111111', 

  ];
  expect(mineSweeper(input)).toEqual(output);
});

test('mineSweeper', () => {
  const input2 = [
   ' * * ', '     ', '   * ', '  * *',
           ' * * ',
  ]
  const output2 = [
     '1*2*1', '11322', ' 12*2', '12*4*',
           '1*3*2', 
  ];
  expect(mineSweeper(input2)).toEqual(output2);
});

test('mineSweeper', () => {
  const input3 = [
   ' * * ',
  ];
  const output3 = [
   '1*2*1',
  ];
  expect(mineSweeper(input3)).toEqual(output3);
});

test('mineSweeper', () => {
  const input4 = [
   '*', ' ', '*', ' ', ' ',
  ];
  const output4 = [ '*', '2', '*', '1', ' '];
  expect(mineSweeper(input4)).toEqual(output4);
});

test('mineSweeper', () => {
  const input5 = [
     '*', 
  ];
  const output5 = [
     '*', 
  ];
  expect(mineSweeper(input5)).toEqual(output5);
});

test('mineSweeper', () => {
  const input6 = [
     '**', '**', 
  ]
  const output6 = [
     '**', '**',
  ];
  expect(mineSweeper(input6)).toEqual(output6);
});

test('mineSweeper', () => {
  const input7 = [ '**', '**',]
  const output7 = [ '**', '**',]
  expect(mineSweeper(input7)).toEqual(output7);
});

test('mineSweeper', () => {
  const input8 = [ '***', '* *', '***',]
  const output8 = [ '***', '*8*', '***',]
  expect(mineSweeper(input8)).toEqual(output8);
});

test('mineSweeper', () => {
  const input9 = ['     ', '   * ', '     ', '     ',
  ' *   ',]
const output9 = [ '  111', '  1*1', '  111', '111  ',
  '1*1  ']
  expect(mineSweeper(input9)).toEqual(output9);
});
