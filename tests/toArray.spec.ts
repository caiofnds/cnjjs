import Cnj from '@/index';

describe('method fromString', () => {
  describe('with number', () => {
    test('1-35.0001.1.00.0001', () => {
      const cnj = Cnj.fromString('1-35.0001.1.00.0001').toArray();
      expect(cnj).toBeNull();
    });
    test('1-35.0001.1.00.1', () => {
      const cnj = Cnj.fromString('1-35.0001.1.00.1').toArray();
      expect(cnj).toBeNull();
    });
    test('1-35.1.1.1.1', () => {
      const cnj = Cnj.fromString('1-35.1.1.1.1').toArray();
      expect(cnj).toBeNull();
    });
  });
  describe('with year', () => {
    const expected = [1, 59, 2001, 1, 0, 1];
    test('0000001-59.2001.1.00.0001', () => {
      const cnj = Cnj.fromString('0000001-59.2001.1.00.0001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.00.0001', () => {
      const cnj = Cnj.fromString('1-59.2001.1.00.0001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.00.1', () => {
      const cnj = Cnj.fromString('1-59.2001.1.00.1').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.0.1', () => {
      const cnj = Cnj.fromString('1-59.2001.1.0.1').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('00000015920011000001', () => {
      const cnj = Cnj.fromString('00000015920011000001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('15920011000001', () => {
      const cnj = Cnj.fromString('15920011000001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
  });
  describe('with number with string option', () => {
    test('1-59.0001.1.00.0001', () => {
      const cnj = Cnj.fromString('1-59.0001.1.00.0001').toArray({ string: true });
      expect(cnj).toBeNull();
    });
    test('1-59.0001.1.00.1', () => {
      const cnj = Cnj.fromString('1-59.0001.1.00.1').toArray({ string: true });
      expect(cnj).toBeNull();
    });
    test('1-59.1.1.0.1', () => {
      const cnj = Cnj.fromString('1-59.1.1.0.1').toArray({ string: true });
      expect(cnj).toBeNull();
    });
  });
  describe('with year with string option', () => {
    const expected = ['0000001', '59', '2001', '1', '00', '0001'];
    test('0000001-59.2001.1.00.0001', () => {
      const cnj = Cnj.fromString('0000001-59.2001.1.00.0001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.00.0001', () => {
      const cnj = Cnj.fromString('1-59.2001.1.00.0001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.00.1', () => {
      const cnj = Cnj.fromString('1-59.2001.1.00.1').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-59.2001.1.0.1', () => {
      const cnj = Cnj.fromString('1-59.2001.1.0.1').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('00000015920011000001', () => {
      const cnj = Cnj.fromString('00000015920011000001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('15920011000001', () => {
      const cnj = Cnj.fromString('15920011000001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
  });
});
