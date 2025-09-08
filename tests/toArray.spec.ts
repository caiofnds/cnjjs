import cnjjs from '@/index';

describe('method fromString', () => {
  describe('with number', () => {
    test('1-35.0001.1.00.0001', () => {
      const cnj = cnjjs.fromString('1-35.0001.1.00.0001').toArray();
      expect(Array.isArray(cnj)).toBeTruthy();
      expect(cnj.length).toBe(0);
    });
    test('1-35.0001.1.00.1', () => {
      const cnj = cnjjs.fromString('1-35.0001.1.00.1').toArray();
      expect(Array.isArray(cnj)).toBeTruthy();
      expect(cnj.length).toBe(0);
    });
    test('1-35.1.1.1.1', () => {
      const cnj = cnjjs.fromString('1-35.1.1.1.1').toArray();
      expect(Array.isArray(cnj)).toBeTruthy();
      expect(cnj.length).toBe(0);
    });
  });
  describe('with year', () => {
    const expected = [1, 59, 2001, 1, 0, 1];
    test('0000001-59.2001.1.00.0001', () => {
      const cnj = cnjjs.fromString('0000001-59.2001.1.00.0001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.00.0001', () => {
      const cnj = cnjjs.fromString('1-59.2001.1.00.0001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.00.1', () => {
      const cnj = cnjjs.fromString('1-59.2001.1.00.1').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.0.1', () => {
      const cnj = cnjjs.fromString('1-59.2001.1.0.1').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('00000015920011000001', () => {
      const cnj = cnjjs.fromString('00000015920011000001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('15920011000001', () => {
      const cnj = cnjjs.fromString('15920011000001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
  });
  describe('with number with string option', () => {
    test('1-59.0001.1.00.0001', () => {
      const cnj = cnjjs.fromString('1-59.0001.1.00.0001').toStringArray();
      expect(Array.isArray(cnj)).toBeTruthy();
      expect(cnj.length).toBe(0);
    });
    test('1-59.0001.1.00.1', () => {
      const cnj = cnjjs.fromString('1-59.0001.1.00.1').toStringArray();
      expect(Array.isArray(cnj)).toBeTruthy();
      expect(cnj.length).toBe(0);
    });
    test('1-59.1.1.0.1', () => {
      const cnj = cnjjs.fromString('1-59.1.1.0.1').toStringArray();
      expect(Array.isArray(cnj)).toBeTruthy();
      expect(cnj.length).toBe(0);
    });
  });
  describe('with year with string option', () => {
    const expected = ['0000001', '59', '2001', '1', '00', '0001'];
    test('0000001-59.2001.1.00.0001', () => {
      const cnj = cnjjs.fromString('0000001-59.2001.1.00.0001').toStringArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.00.0001', () => {
      const cnj = cnjjs.fromString('1-59.2001.1.00.0001').toStringArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.00.1', () => {
      const cnj = cnjjs.fromString('1-59.2001.1.00.1').toStringArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.0.1', () => {
      const cnj = cnjjs.fromString('1-59.2001.1.0.1').toStringArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('00000015920011000001', () => {
      const cnj = cnjjs.fromString('00000015920011000001').toStringArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('15920011000001', () => {
      const cnj = cnjjs.fromString('15920011000001').toStringArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
  });
});
