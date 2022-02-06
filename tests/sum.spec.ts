import { Cnj } from '@/Cnj';

describe('Cnj class', () => {
  describe('static method sum', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(Cnj.sum(1, 2)).toBe(3);
    });
  });
});
