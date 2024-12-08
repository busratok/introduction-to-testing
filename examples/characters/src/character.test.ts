import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
import { Person } from './person.js';

const firstName = 'Jone';
const lastName = 'Doe';
const role = 'Engineer';

describe('Character', () => {
  let character;

  beforeEach(() => {
    character = new Character(firstName, lastName, role, 1, () => 15);
  }); // You shouldn't use this all the time. If the code gets bigger it would be hard to detect where  the character is coming from  and if I wanted a test where it is a slightly different charcter I have to weirdly ovveride it

  it('should create a character with a first name, last name, and role', () => {
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

    // Fourth way of testing - dependecy injection
    expect(character).toEqual({
      firstName,
      lastName,
      role,
      wisdom: 15,
      strength: 15,
      level: 1,
      intelligence: 15,
      id: expect.stringContaining('person-'),
      charisma: 15,
      constitution: 15,
      dexterity: 15,
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
    });
  });

  it('should allow you to increase the level', () => {
    character.levelUp();
    expect(character.level).toBe(2);

    // alternative test
    // const character = new Character(firstName, lastName, role, 5);
    // const initalLevel = character.level;
    // character.levelUp();
    // expect(character.level).toBeGreaterThan(initalLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const prevDate = character.lastModified;
    character.levelUp();
    expect(character.lastModified).not.toBe(prevDate);
  });
});
