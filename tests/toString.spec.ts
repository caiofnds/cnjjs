import { Cnj } from '@/Cnj';

describe('method toString', () => {
  describe('string with number - no options', () => {
    const expected = '0000001-35.0001.1.01.0001';
    test('0000001-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-35.0001.1.01.0001').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.0001').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-35.0001.1.01.1', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.1').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-35.1.1.1.1', () => {
      const cnj = Cnj.fromString('1-35.1.1.1.1').toString();
      expect(cnj).toEqual(expected);
    });
  });
  describe('with year', () => {
    const expected = '0000001-32.2001.1.01.0001';
    test('0000001-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-32.2001.1.01.0001').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.0001').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-32.2001.1.01.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.1').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-32.2001.1.1.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.1.1').toString();
      expect(cnj).toEqual(expected);
    });
    test('00000013220011010001', () => {
      const cnj = Cnj.fromString('00000013220011010001').toString();
      expect(cnj).toEqual(expected);
    });
    test('13220011010001', () => {
      const cnj = Cnj.fromString('13220011010001').toString();
      expect(cnj).toEqual(expected);
    });
  });
  describe('string with number - flat option', () => {
    const expected = '00000013500011010001';
    test('0000001-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-35.0001.1.01.0001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.0001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-35.0001.1.01.1', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.1').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-35.1.1.1.1', () => {
      const cnj = Cnj.fromString('1-35.1.1.1.1').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
  });
  describe('string with year - flat option', () => {
    const expected = '00000013220011010001';
    test('0000001-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-32.2001.1.01.0001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-32.2001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.0001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-32.2001.1.01.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.01.1').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-32.2001.1.1.1', () => {
      const cnj = Cnj.fromString('1-32.2001.1.1.1').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('00000013220011010001', () => {
      const cnj = Cnj.fromString('00000013220011010001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('13220011010001', () => {
      const cnj = Cnj.fromString('13220011010001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
  });
});
