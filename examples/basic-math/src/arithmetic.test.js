import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic.js';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
  it('should add two negative numbers', () => {
    expect(add(-4, -2)).toBe(-6);
  });
  it('should parse strings into numbers', () => {
    expect(add('4', '3')).toBe(7);
  });
  it('should get real angry if you give it a first argument that cannot be parsed into a number', () => {
    expect(() => add('potato', 4)).toThrow('not a number');
  });
  it('should get real angry if you give it a second argument that cannot be parsed into a number', () => {
    expect(() => add(4, 'potato')).toThrow('not a number');
  });
  it('should throw an error if a first number is not a number', () => {
    expect(() => add(NaN, 5)).throw('not a number');
  });
});

describe('substract', () => {
  it('should subtract one number from the other', () => {
    expect(subtract(4, 2)).toBe(2);
  });

  it('should accept array and subtract all of the numbers', () => {
    expect(subtract([10, 5], 2)).toBe(3);
  });

  it('should default undefined values to zero', () => {
    expect(subtract(4)).toBe(4);
    expect(subtract(undefined, 4)).toBe(-4);
  });

  it('should default to zero if either argument is null', () => {
    expect(subtract(4, null)).toBe(4);
    expect(subtract(null, 3)).toBe(-3);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});

describe('divide', () => {
  it('should divide one number to other', () => {
    expect(divide(4, 2)).toBe(2);
  });

  it('should return null if dividing by zero', () => {
    expect(divide(50, 0)).toBeNull();
  });
});
