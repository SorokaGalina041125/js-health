import getHealthStatus from '../health.js';

test('should return healthy when health is greater than 50', () => {
  const character = { name: 'Маг', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('should return wounded when health is between 50 and 15', () => {
  expect(getHealthStatus({ name: 'Воин', health: 50 })).toBe('wounded');
  expect(getHealthStatus({ name: 'Лучник', health: 34 })).toBe('wounded');
  expect(getHealthStatus({ name: 'Плут', health: 15 })).toBe('wounded');
});

test('should return critical when health is less than 15', () => {
  const character = { name: 'Скелет', health: 10 };
  expect(getHealthStatus(character)).toBe('critical');
});