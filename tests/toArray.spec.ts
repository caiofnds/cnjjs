import { Cnj } from '@/index';

describe('method fromString', () => {
  describe('with number', () => {
    const expected = [1, 35, 1, 1, 1, 1];
    test('1-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.0001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-35.0001.1.01.1', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.1').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-35.1.1.1.1', () => {
      const cnj = Cnj.fromString('1-35.1.1.1.1').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
  });
  describe('with year', () => {
    const expected = [1, 32, 2001, 1, 1, 1];
    test('0000001-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-32.2001.1.01.0001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.0001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-32.2001.1.01.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.1').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-32.2001.1.1.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.1.1').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('00000013220011010001', () => {
      const cnj = Cnj.fromString('00000013220011010001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('13220011010001', () => {
      const cnj = Cnj.fromString('13220011010001').toArray();
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
  });
  describe('with number with string option', () => {
    const expected = ['0000001', '35', '0001', '1', '01', '0001'];
    test('1-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.0001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-35.0001.1.01.1', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.1').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-35.1.1.1.1', () => {
      const cnj = Cnj.fromString('1-35.1.1.1.1').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
  });
  describe('with year with string option', () => {
    const expected = ['0000001', '32', '2001', '1', '01', '0001'];
    test('0000001-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-32.2001.1.01.0001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.0001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-32.2001.1.01.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.1').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('1-32.2001.1.1.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.1.1').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('00000013220011010001', () => {
      const cnj = Cnj.fromString('00000013220011010001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
    test('13220011010001', () => {
      const cnj = Cnj.fromString('13220011010001').toArray({ string: true });
      expect(cnj).toEqual(expect.arrayContaining(expected));
    });
  });
});
