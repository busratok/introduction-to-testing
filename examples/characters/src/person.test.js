import { describe, it, expect } from 'vitest';
import { Person } from './person.js';
import { resolveEnvPrefix } from 'vite';

describe('Person', () => {
  it('should create a person with a first name and last name', () => {
    const person = new Person('Grace', 'Hopper');
    expect(person).toEqual({
      id: expect.stringContaining('person-'),
      firstName: 'Grace',
      lastName: 'Hopper',
    });
  });
});
