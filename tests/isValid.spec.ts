import Cnj from '@/index';

describe('method isValid', () => {
  describe('invalid number 0000001-32.2001.1.01.0001', () => {
    test('0000001-32.2001.1.01.0001', () => {
      const validity = Cnj.fromString('0000001-32.2001.1.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-35.0001.1.01.0001', () => {
      const validity = Cnj.fromString('0000001-35.0001.1.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-32.2001.1.01.0001', () => {
      const validity = Cnj.fromString('1-32.2001.1.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-35.0001.1.01.0001', () => {
      const validity = Cnj.fromString('1-35.0001.1.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-32.2001.1.01.1', () => {
      const validity = Cnj.fromString('1-32.2001.1.01.1').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-35.0001.1.01.1', () => {
      const validity = Cnj.fromString('1-35.0001.1.01.1').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-32.2001.1.1.1', () => {
      const validity = Cnj.fromString('1-32.2001.1.1.1').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-35.0001.1.1.1', () => {
      const validity = Cnj.fromString('1-35.0001.1.1.1').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-35.1.1.1.1', () => {
      const validity = Cnj.fromString('1-35.1.1.1.1').isValid();
      expect(validity).toBeFalsy();
    });
    test('00000013220011010001', () => {
      const validity = Cnj.fromString('00000013220011010001').isValid();
      expect(validity).toBeFalsy();
    });
    test('13220011010001', () => {
      const validity = Cnj.fromString('13220011010001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-01.2001.1.01.0001', () => {
      const validity = Cnj.fromString('0000001-01.2001.1.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-01.2001.1.01.0001', () => {
      const validity = Cnj.fromString('1-01.2001.1.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-01.2001.1.01.1', () => {
      const validity = Cnj.fromString('1-01.2001.1.01.1').isValid();
      expect(validity).toBeFalsy();
    });
    test('1-01.2001.1.1.1', () => {
      const validity = Cnj.fromString('1-01.2001.1.1.1').isValid();
      expect(validity).toBeFalsy();
    });
    test('00000010120011010001', () => {
      const validity = Cnj.fromString('00000010120011010001').isValid();
      expect(validity).toBeFalsy();
    });
    test('10120011010001', () => {
      const validity = Cnj.fromString('10120011010001').isValid();
      expect(validity).toBeFalsy();
    });
  });
  describe('invalid number', () => {
    test('0000001-32.2001.1.01.0001', () => {
      const validity = Cnj.fromString('0000001-32.2001.1.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-48.2001.2.01.0001', () => {
      const validity = Cnj.fromString('0000001-48.2001.2.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-64.2001.3.01.0001', () => {
      const validity = Cnj.fromString('0000001-64.2001.3.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-85.2001.4.08.0001', () => {
      const validity = Cnj.fromString('0000001-85.2001.4.08.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-30.2001.5.25.0001', () => {
      const validity = Cnj.fromString('0000001-30.2001.5.25.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-62.2001.6.28.0001', () => {
      const validity = Cnj.fromString('0000001-62.2001.6.28.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-95.2001.7.13.0001', () => {
      const validity = Cnj.fromString('0000001-95.2001.7.13.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-94.2001.8.28.0001', () => {
      const validity = Cnj.fromString('0000001-94.2001.8.28.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0000001-40.2001.9.27.0001', () => {
      const validity = Cnj.fromString('0000001-40.2001.9.27.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('5257aaab-90c8-4d74-b947-5bcf3289d103', () => {
      const validity = Cnj.fromString('5257aaab-90c8-4d74-b947-5bcf3289d103').isValid();
      expect(validity).toBeFalsy();
    });
    test('36a4742e-18ce-4f55-9232-ea2b1ba3362e', () => {
      const validity = Cnj.fromString('36a4742e-18ce-4f55-9232-ea2b1ba3362e').isValid();
      expect(validity).toBeFalsy();
    });
  });
  describe('valid number não formatado false', () => {
    test('string', () => {
      const validity = Cnj.fromString('string').isValid();
      expect(validity).toBeFalsy();
    });
    test('string string string string', () => {
      const validity = Cnj.fromString('string string string string').isValid();
      expect(validity).toBeFalsy();
    });
    test('999999/SP', () => {
      const validity = Cnj.fromString('999999/SP').isValid();
      expect(validity).toBeFalsy();
    });
    test('empty', () => {
      const validity = Cnj.fromString('').isValid();
      expect(validity).toBeFalsy();
    });
  });
  describe('valid number não formatado true', () => {
    test('00011268-83.2012.811.0055', () => {
      const validity = Cnj.fromString('00011268-83.2012.811.0055').isValid();
      expect(validity).toBeTruthy();
    });
    test('506354-19.2011.08.09.0051', () => {
      const validity = Cnj.fromString('506354-19.2011.08.09.0051').isValid();
      expect(validity).toBeTruthy();
    });
    test('5000.822.53.2013.827.2706', () => {
      const validity = Cnj.fromString('5000.822.53.2013.827.2706').isValid();
      expect(validity).toBeTruthy();
    });
  });
  describe('valid number trt true', () => {
    test('0000001-XX.2022.5.01.0001', () => {
      const validity = Cnj.fromString('0000001-XX.2022.5.01.0001').isValid();
      expect(validity).toBeTruthy();
    });
    test('1-XX.2022.5.01.1', () => {
      const validity = Cnj.fromString('1-XX.2022.5.01.1').isValid();
      expect(validity).toBeTruthy();
    });
    test('0000001XX20225010001', () => {
      const validity = Cnj.fromString('0000001XX20225010001').isValid();
      expect(validity).toBeTruthy();
    });
  });
  describe('valid number com ano incorreto', () => {
    test('0000001-32.1849.1.01.0001', () => {
      const validity = Cnj.fromString('0000001-32.1849.1.01.0001').isValid();
      expect(validity).toBeFalsy();
    });
    test('0506354-51.2050.8.09.0051', () => {
      const validity = Cnj.fromString('0506354-51.2050.8.09.0051').isValid();
      expect(validity).toBeFalsy();
    });
  });
  describe('valid number com ano incorreto', () => {
    test('0535659-58.0089.8.26.0014', () => {
      const validity = Cnj.fromString('0535659-58.0089.8.26.0014').isValid();
      expect(validity).toBeTruthy();
    });
    test('0058672-78.1000.8.26.0090', () => {
      const validity = Cnj.fromString('0058672-78.1000.8.26.0090').isValid();
      expect(validity).toBeTruthy();
    });
    test('0135226-69.0700.8.26.0090', () => {
      const validity = Cnj.fromString('0135226-69.0700.8.26.0090').isValid();
      expect(validity).toBeTruthy();
    });
    test('0675435-18.0800.8.26.0090', () => {
      const validity = Cnj.fromString('0675435-18.0800.8.26.0090').isValid();
      expect(validity).toBeTruthy();
    });
    test('0548084-20.0089.8.26.0014', () => {
      const validity = Cnj.fromString('0548084-20.0089.8.26.0014').isValid();
      expect(validity).toBeTruthy();
    });
    test('0767848-90.9700.8.26.0090', () => {
      const validity = Cnj.fromString('0767848-90.9700.8.26.0090').isValid();
      expect(validity).toBeTruthy();
    });
    test('0715366-28.0800.8.26.0090', () => {
      const validity = Cnj.fromString('0715366-28.0800.8.26.0090').isValid();
      expect(validity).toBeTruthy();
    });
  });
});
