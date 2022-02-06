import { Cnj } from '@/Cnj';

describe('method fromString', () => {
  describe('with number', () => {
    const expected = {
      nnnnnnn: 1, dd: 35, aaaa: 1, j: 1, tr: 1, oooo: 1,
    };
    test('1-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.0001').toObject();
      expect(cnj).toMatchObject(expected);
    });
    test('1-35.0001.1.01.1', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.1').toObject();
      expect(cnj).toMatchObject(expected);
    });
    test('1-35.1.1.1.1', () => {
      const cnj = Cnj.fromString('1-35.1.1.1.1').toObject();
      expect(cnj).toMatchObject(expected);
    });
  });
  describe('with year', () => {
    const expected = {
      nnnnnnn: 1, dd: 32, aaaa: 2001, j: 1, tr: 1, oooo: 1,
    };
    test('0000001-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-32.2001.1.01.0001').toObject();
      expect(cnj).toMatchObject(expected);
    });
    test('1-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.0001').toObject();
      expect(cnj).toMatchObject(expected);
    });
    test('1-32.2001.1.01.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.1').toObject();
      expect(cnj).toMatchObject(expected);
    });
    test('1-32.2001.1.1.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.1.1').toObject();
      expect(cnj).toMatchObject(expected);
    });
    test('00000013220011010001', () => {
      const cnj = Cnj.fromString('00000013220011010001').toObject();
      expect(cnj).toMatchObject(expected);
    });
    test('13220011010001', () => {
      const cnj = Cnj.fromString('13220011010001').toObject();
      expect(cnj).toMatchObject(expected);
    });
  });
  describe('with valid number 00011268-83.2012.811.0055', () => {
    const expected = {
      nnnnnnn: 11268, dd: 83, aaaa: 2012, j: 8, tr: 11, oooo: 55,
    };
    test('00011268-83.2012.811.0055', () => {
      const cnj = Cnj.fromString('00011268-83.2012.811.0055').toObject();
      expect(cnj).toMatchObject(expected);
    });
  });
  describe('with valid number 506354-19.2011.08.09.0051', () => {
    const expected = {
      nnnnnnn: 506354, dd: 19, aaaa: 2011, j: 8, tr: 9, oooo: 51,
    };
    test('506354-19.2011.08.09.0051', () => {
      const cnj = Cnj.fromString('506354-19.2011.08.09.0051').toObject();
      expect(cnj).toMatchObject(expected);
    });
  });
  describe('with valid number 5000.822.53.2013.827.2706', () => {
    const expected = {
      nnnnnnn: 5000822, dd: 53, aaaa: 2013, j: 8, tr: 27, oooo: 2706,
    };
    test('5000.822.53.2013.827.2706', () => {
      const cnj = Cnj.fromString('5000.822.53.2013.827.2706').toObject();
      expect(cnj).toMatchObject(expected);
    });
  });
});
