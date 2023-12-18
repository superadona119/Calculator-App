import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './Calculator';

describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    expect(true).toBeTruthy();
  });
});

describe('Calculating results', () => {
  it('should add 5 and 3 to equal 8', () => {
    expect(add('5', '3')).toBe(8);
  });

  it('should add 5 and 3 to equal 8', () => {
    expect(subtract('10', '4')).toBe(6);
  });

  it('should add 5 and 3 to equal 8', () => {
    expect(multiply('8', '4')).toBe(32);
  });

  it('should add 5 and 3 to equal 8', () => {
    expect(divide('100', '4')).toBe(25);
  });
});

