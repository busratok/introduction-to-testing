import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Jone';
const lastName = 'Doe';
const role = 'Engineer';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const character = new Character(firstName, lastName, role);
    //  First testing way
    // expect(character.firstName).toBe(firstName);
    // expect(character.lastName).toBe(lastName);
    // expect(character.role).toBe(role);

    // Second testing way
    expect(character).toEqual(
      expect.objectContaining({ firstName, lastName, role }),
    );

    //Third testing way
    expect(character).toEqual({
      firstName,
      lastName,
      role,
      wisdom: expect.any(Number),
      strength: expect.any(Number),
      level: 1,
      intelligence: expect.any(Number),
      id: expect.stringContaining('person-'),
      charisma: expect.any(Number),
      constitution: expect.any(Number),
      dexterity: expect.any(Number),
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
    });
  });

  it('should allow you to increase the level', () => {
    const character = new Character(firstName, lastName, role);
    character.levelUp();
    expect(character.level).toBe(2);

    // alternative test
    // const character = new Character(firstName, lastName, role, 5);
    // const initalLevel = character.level;
    // character.levelUp();
    // expect(character.level).toBeGreaterThan(initalLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const character = new Character(firstName, lastName, role);
    const prevDate = character.lastModified;
    character.levelUp();
    expect(character.lastModified).not.toBe(prevDate);
  });
});
