import { Cnj } from '@/Cnj';

describe('method withoutCheckDigit', () => {
  describe('courts', () => {
    it('0000001 2001 1 00 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 1, 0, 1);
      expect(cnj.toString()).toEqual('0000001-59.2001.1.00.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 2 00 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 2, 0, 1);
      expect(cnj.toString()).toEqual('0000001-75.2001.2.00.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 3 00 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 3, 0, 1);
      expect(cnj.toString()).toEqual('0000001-91.2001.3.00.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 4 90 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 4, 90, 1);
      expect(cnj.toString()).toEqual('0000001-05.2001.4.90.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 4 01 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 4, 1, 1);
      expect(cnj.toString()).toEqual('0000001-80.2001.4.01.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 4 02 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 4, 2, 1);
      expect(cnj.toString()).toEqual('0000001-53.2001.4.02.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 4 03 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 4, 3, 1);
      expect(cnj.toString()).toEqual('0000001-26.2001.4.03.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 4 04 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 4, 4, 1);
      expect(cnj.toString()).toEqual('0000001-96.2001.4.04.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 4 05 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 4, 5, 1);
      expect(cnj.toString()).toEqual('0000001-69.2001.4.05.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 10 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 10, 1);
      expect(cnj.toString()).toEqual('0000001-47.2001.5.10.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 11 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 11, 1);
      expect(cnj.toString()).toEqual('0000001-20.2001.5.11.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 12 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 12, 1);
      expect(cnj.toString()).toEqual('0000001-90.2001.5.12.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 13 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 13, 1);
      expect(cnj.toString()).toEqual('0000001-63.2001.5.13.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 14 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 14, 1);
      expect(cnj.toString()).toEqual('0000001-36.2001.5.14.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 15 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 15, 1);
      expect(cnj.toString()).toEqual('0000001-09.2001.5.15.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 16 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 16, 1);
      expect(cnj.toString()).toEqual('0000001-79.2001.5.16.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 17 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 17, 1);
      expect(cnj.toString()).toEqual('0000001-52.2001.5.17.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 18 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 18, 1);
      expect(cnj.toString()).toEqual('0000001-25.2001.5.18.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 19 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 19, 1);
      expect(cnj.toString()).toEqual('0000001-95.2001.5.19.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 20 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 20, 1);
      expect(cnj.toString()).toEqual('0000001-68.2001.5.20.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 21 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 21, 1);
      expect(cnj.toString()).toEqual('0000001-41.2001.5.21.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 22 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 22, 1);
      expect(cnj.toString()).toEqual('0000001-14.2001.5.22.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 23 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 23, 1);
      expect(cnj.toString()).toEqual('0000001-84.2001.5.23.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 24 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 24, 1);
      expect(cnj.toString()).toEqual('0000001-57.2001.5.24.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 90 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 90, 1);
      expect(cnj.toString()).toEqual('0000001-21.2001.5.90.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 00 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 0, 1);
      expect(cnj.toString()).toEqual('0000001-26.2001.5.00.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 01 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 1, 1);
      expect(cnj.toString()).toEqual('0000001-96.2001.5.01.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 02 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 2, 1);
      expect(cnj.toString()).toEqual('0000001-69.2001.5.02.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 03 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 3, 1);
      expect(cnj.toString()).toEqual('0000001-42.2001.5.03.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 04 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 4, 1);
      expect(cnj.toString()).toEqual('0000001-15.2001.5.04.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 05 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 5, 1);
      expect(cnj.toString()).toEqual('0000001-85.2001.5.05.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 06 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 6, 1);
      expect(cnj.toString()).toEqual('0000001-58.2001.5.06.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 07 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 7, 1);
      expect(cnj.toString()).toEqual('0000001-31.2001.5.07.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 08 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 8, 1);
      expect(cnj.toString()).toEqual('0000001-04.2001.5.08.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 5 09 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 5, 9, 1);
      expect(cnj.toString()).toEqual('0000001-74.2001.5.09.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 10 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 10, 1);
      expect(cnj.toString()).toEqual('0000001-63.2001.6.10.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 11 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 11, 1);
      expect(cnj.toString()).toEqual('0000001-36.2001.6.11.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 12 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 12, 1);
      expect(cnj.toString()).toEqual('0000001-09.2001.6.12.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 13 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 13, 1);
      expect(cnj.toString()).toEqual('0000001-79.2001.6.13.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 14 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 14, 1);
      expect(cnj.toString()).toEqual('0000001-52.2001.6.14.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 15 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 15, 1);
      expect(cnj.toString()).toEqual('0000001-25.2001.6.15.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 16 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 16, 1);
      expect(cnj.toString()).toEqual('0000001-95.2001.6.16.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 17 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 17, 1);
      expect(cnj.toString()).toEqual('0000001-68.2001.6.17.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 18 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 18, 1);
      expect(cnj.toString()).toEqual('0000001-41.2001.6.18.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 19 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 19, 1);
      expect(cnj.toString()).toEqual('0000001-14.2001.6.19.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 20 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 20, 1);
      expect(cnj.toString()).toEqual('0000001-84.2001.6.20.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 21 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 21, 1);
      expect(cnj.toString()).toEqual('0000001-57.2001.6.21.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 22 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 22, 1);
      expect(cnj.toString()).toEqual('0000001-30.2001.6.22.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 23 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 23, 1);
      expect(cnj.toString()).toEqual('0000001-03.2001.6.23.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 24 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 24, 1);
      expect(cnj.toString()).toEqual('0000001-73.2001.6.24.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 25 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 25, 1);
      expect(cnj.toString()).toEqual('0000001-46.2001.6.25.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 26 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 26, 1);
      expect(cnj.toString()).toEqual('0000001-19.2001.6.26.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 27 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 27, 1);
      expect(cnj.toString()).toEqual('0000001-89.2001.6.27.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 00 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 0, 1);
      expect(cnj.toString()).toEqual('0000001-42.2001.6.00.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 01 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 1, 1);
      expect(cnj.toString()).toEqual('0000001-15.2001.6.01.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 02 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 2, 1);
      expect(cnj.toString()).toEqual('0000001-85.2001.6.02.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 03 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 3, 1);
      expect(cnj.toString()).toEqual('0000001-58.2001.6.03.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 04 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 4, 1);
      expect(cnj.toString()).toEqual('0000001-31.2001.6.04.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 05 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 5, 1);
      expect(cnj.toString()).toEqual('0000001-04.2001.6.05.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 06 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 6, 1);
      expect(cnj.toString()).toEqual('0000001-74.2001.6.06.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 07 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 7, 1);
      expect(cnj.toString()).toEqual('0000001-47.2001.6.07.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 08 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 8, 1);
      expect(cnj.toString()).toEqual('0000001-20.2001.6.08.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 6 09 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 6, 9, 1);
      expect(cnj.toString()).toEqual('0000001-90.2001.6.09.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 10 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 10, 1);
      expect(cnj.toString()).toEqual('0000001-79.2001.7.10.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 11 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 11, 1);
      expect(cnj.toString()).toEqual('0000001-52.2001.7.11.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 12 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 12, 1);
      expect(cnj.toString()).toEqual('0000001-25.2001.7.12.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 00 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 0, 1);
      expect(cnj.toString()).toEqual('0000001-58.2001.7.00.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 01 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 1, 1);
      expect(cnj.toString()).toEqual('0000001-31.2001.7.01.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 02 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 2, 1);
      expect(cnj.toString()).toEqual('0000001-04.2001.7.02.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 03 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 3, 1);
      expect(cnj.toString()).toEqual('0000001-74.2001.7.03.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 04 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 4, 1);
      expect(cnj.toString()).toEqual('0000001-47.2001.7.04.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 05 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 5, 1);
      expect(cnj.toString()).toEqual('0000001-20.2001.7.05.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 06 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 6, 1);
      expect(cnj.toString()).toEqual('0000001-90.2001.7.06.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 07 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 7, 1);
      expect(cnj.toString()).toEqual('0000001-63.2001.7.07.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 08 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 8, 1);
      expect(cnj.toString()).toEqual('0000001-36.2001.7.08.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 7 09 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 7, 9, 1);
      expect(cnj.toString()).toEqual('0000001-09.2001.7.09.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 10 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 10, 1);
      expect(cnj.toString()).toEqual('0000001-95.2001.8.10.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 11 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 11, 1);
      expect(cnj.toString()).toEqual('0000001-68.2001.8.11.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 12 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 12, 1);
      expect(cnj.toString()).toEqual('0000001-41.2001.8.12.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 13 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 13, 1);
      expect(cnj.toString()).toEqual('0000001-14.2001.8.13.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 14 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 14, 1);
      expect(cnj.toString()).toEqual('0000001-84.2001.8.14.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 15 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 15, 1);
      expect(cnj.toString()).toEqual('0000001-57.2001.8.15.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 16 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 16, 1);
      expect(cnj.toString()).toEqual('0000001-30.2001.8.16.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 17 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 17, 1);
      expect(cnj.toString()).toEqual('0000001-03.2001.8.17.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 18 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 18, 1);
      expect(cnj.toString()).toEqual('0000001-73.2001.8.18.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 19 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 19, 1);
      expect(cnj.toString()).toEqual('0000001-46.2001.8.19.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 20 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 20, 1);
      expect(cnj.toString()).toEqual('0000001-19.2001.8.20.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 21 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 21, 1);
      expect(cnj.toString()).toEqual('0000001-89.2001.8.21.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 22 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 22, 1);
      expect(cnj.toString()).toEqual('0000001-62.2001.8.22.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 23 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 23, 1);
      expect(cnj.toString()).toEqual('0000001-35.2001.8.23.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 24 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 24, 1);
      expect(cnj.toString()).toEqual('0000001-08.2001.8.24.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 25 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 25, 1);
      expect(cnj.toString()).toEqual('0000001-78.2001.8.25.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 26 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 26, 1);
      expect(cnj.toString()).toEqual('0000001-51.2001.8.26.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 27 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 27, 1);
      expect(cnj.toString()).toEqual('0000001-24.2001.8.27.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 01 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 1, 1);
      expect(cnj.toString()).toEqual('0000001-47.2001.8.01.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 02 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 2, 1);
      expect(cnj.toString()).toEqual('0000001-20.2001.8.02.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 03 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 3, 1);
      expect(cnj.toString()).toEqual('0000001-90.2001.8.03.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 04 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 4, 1);
      expect(cnj.toString()).toEqual('0000001-63.2001.8.04.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 05 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 5, 1);
      expect(cnj.toString()).toEqual('0000001-36.2001.8.05.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 06 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 6, 1);
      expect(cnj.toString()).toEqual('0000001-09.2001.8.06.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 07 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 7, 1);
      expect(cnj.toString()).toEqual('0000001-79.2001.8.07.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 08 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 8, 1);
      expect(cnj.toString()).toEqual('0000001-52.2001.8.08.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 8 09 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 8, 9, 1);
      expect(cnj.toString()).toEqual('0000001-25.2001.8.09.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 9 13 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 9, 13, 1);
      expect(cnj.toString()).toEqual('0000001-30.2001.9.13.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 9 21 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 9, 21, 1);
      expect(cnj.toString()).toEqual('0000001-08.2001.9.21.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
    it('0000001 2001 9 26 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 9, 26, 1);
      expect(cnj.toString()).toEqual('0000001-67.2001.9.26.0001');
      expect(cnj.isValid()).toBeTruthy();
    });
  });
  describe('generate validator', () => {
    it('0000001 2001 1 01 0001', () => {
      const cnj = Cnj.withoutCheckDigit(1, 2001, 1, 1, 1);
      expect(cnj.toString()).toEqual('0000001-32.2001.1.01.0001');
      expect(cnj.isValid()).toBeFalsy();
    });
    it('1 1 1 1 1', () => {
      const cnj = Cnj.withoutCheckDigit(1, 1, 1, 1, 1);
      expect(cnj.toString()).toEqual('0000001-35.0001.1.01.0001');
      expect(cnj.isValid()).toBeFalsy();
    });
    it('123456789012345678', () => {
      const cnj = Cnj.withoutCheckDigit(1234567, 8901, 2, 34, 5678);
      expect(cnj.toString()).toEqual('1234567-88.8901.2.34.5678');
      expect(cnj.isValid()).toBeFalsy();
    });
    it('987654321098765432', () => {
      const cnj = Cnj.withoutCheckDigit(9876543, 2109, 8, 76, 5432);
      expect(cnj.toString()).toEqual('9876543-46.2109.8.76.5432');
      expect(cnj.isValid()).toBeFalsy();
    });
  });
});
