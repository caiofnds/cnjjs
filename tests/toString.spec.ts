import Cnj from '@/index';

describe('method toString', () => {
  describe('string with number - no options', () => {
    test('0000001-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-35.0001.1.01.0001').toString();
      expect(cnj).toBeNull();
    });
    test('1-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.0001').toString();
      expect(cnj).toBeNull();
    });
    test('1-35.0001.1.01.1', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.1').toString();
      expect(cnj).toBeNull();
    });
    test('1-35.1.1.1.1', () => {
      const cnj = Cnj.fromString('1-35.1.1.1.1').toString();
      expect(cnj).toBeNull();
    });
  });
  describe('with year', () => {
    const expected = '0000001-59.2001.1.00.0001';
    test('0000001-59.2001.1.00.0001', () => {
      const cnj = Cnj.fromString('0000001-59.2001.1.00.0001').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-59.2001.1.00.0001', () => {
      const cnj = Cnj.fromString('1-59.2001.1.00.0001').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-59.2001.1.00.1', () => {
      const cnj = Cnj.fromString('1-59.2001.1.00.1').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-59.2001.1.0.1', () => {
      const cnj = Cnj.fromString('1-59.2001.1.0.1').toString();
      expect(cnj).toEqual(expected);
    });
    test('00000015920011000001', () => {
      const cnj = Cnj.fromString('00000015920011000001').toString();
      expect(cnj).toEqual(expected);
    });
    test('15920011000001', () => {
      const cnj = Cnj.fromString('15920011000001').toString();
      expect(cnj).toEqual(expected);
    });
  });
  describe('string with number - flat option', () => {
    test('0000001-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('0000001-35.0001.1.01.0001').toString({ flat: true });
      expect(cnj).toBeNull();
    });
    test('1-35.0001.1.01.0001', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.0001').toString({ flat: true });
      expect(cnj).toBeNull();
    });
    test('1-35.0001.1.01.1', () => {
      const cnj = Cnj.fromString('1-35.0001.1.01.1').toString({ flat: true });
      expect(cnj).toBeNull();
    });
    test('1-35.1.1.1.1', () => {
      const cnj = Cnj.fromString('1-35.1.1.1.1').toString({ flat: true });
      expect(cnj).toBeNull();
    });
  });
  describe('string with year - flat option', () => {
    const expected = '00000015920011000001';
    test('0000001-59.2001.1.00.0001', () => {
      const cnj = Cnj.fromString('0000001-59.2001.1.00.0001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-59.2001.1.00.0001', () => {
      const cnj = Cnj.fromString('1-59.2001.1.00.0001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-59.2001.1.00.1', () => {
      const cnj = Cnj.fromString('1-59.2001.1.00.1').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('1-59.2001.1.0.1', () => {
      const cnj = Cnj.fromString('1-59.2001.1.0.1').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('00000015920011000001', () => {
      const cnj = Cnj.fromString('00000015920011000001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
    test('15920011000001', () => {
      const cnj = Cnj.fromString('15920011000001').toString({ flat: true });
      expect(cnj).toEqual(expected);
    });
  });
  describe('string trt without digit', () => {
    const expected = '0000001-61.2022.5.01.0001';
    test('0000001-XX.2022.5.01.0001', () => {
      const cnj = Cnj.fromString('0000001-XX.2022.5.01.0001').toString();
      expect(cnj).toEqual(expected);
    });
    test('1-XX.2022.5.01.1', () => {
      const cnj = Cnj.fromString('1-XX.2022.5.01.1').toString();
      expect(cnj).toEqual(expected);
    });
    test('0000001XX20225010001', () => {
      const cnj = Cnj.fromString('0000001XX20225010001').toString();
      expect(cnj).toEqual(expected);
    });
  });
});
