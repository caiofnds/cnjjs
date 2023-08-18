import courts from './data/courts.json';

interface ICnj {
  nnnnnnn: number;
  dd: number;
  aaaa: number;
  j: number;
  tr: number;
  oooo: number;
}

const notNumber = /^0+|[^\d]+/g;
const cnjRegExp = /(\d{1,7})-?(\d{1,2})\.?(\d{1,4})\.?(\d{1})\.?(\d{1,2})\.?(\d{1,4})/;
const cnjTrtRegExp = /(\d{1,7})-?XX\.?(\d{1,4})\.?5\.?(\d{1,2})\.?(\d{1,4})/;

class Cnj {
  nnnnnnn: number;

  dd: number;

  aaaa: number;

  j: number;

  tr: number;

  oooo: number;

  constructor(options: ICnj) {
    this.nnnnnnn = options.nnnnnnn;
    this.dd = options.dd;
    this.aaaa = options.aaaa;
    this.j = options.j;
    this.tr = options.tr;
    this.oooo = options.oooo;
  }

  static fromString(string: string) {
    if (!cnjRegExp.test(string)) {
      return new Cnj({
        nnnnnnn: 0, dd: 0, aaaa: 0, j: 0, tr: 0, oooo: 0,
      });
    }
    const splitted = string.split(notNumber);

    let nnnnnnn: string;
    let dd: string;
    let aaaa: string;
    let j: string;
    let tr: string;
    let oooo: string;

    if (cnjTrtRegExp.test(string)) {
      [, nnnnnnn, aaaa, tr, oooo] = string.match(cnjTrtRegExp);
      return this.withoutCheckDigit(
        parseInt(nnnnnnn, 10), parseInt(aaaa, 10), 5, parseInt(tr, 10), parseInt(oooo, 10),
      );
    }

    if (notNumber.test(string) && cnjRegExp.test(string) && splitted.length === 6) {
      nnnnnnn = `${splitted[0].replace(notNumber, '')}`.padStart(7, '0');
      dd = `${splitted[1].replace(notNumber, '')}`.padStart(2, '0');
      aaaa = `${splitted[2].replace(notNumber, '')}`.padStart(4, '0');
      j = `${splitted[3].replace(notNumber, '')}`.padStart(1, '0');
      tr = `${splitted[4].replace(notNumber, '')}`.padStart(2, '0');
      oooo = `${splitted[5].replace(notNumber, '')}`.padStart(4, '0');
    }
    const standard = nnnnnnn && dd && aaaa && j && tr && oooo
      && nnnnnnn.length <= 7
      && dd.length <= 2
      && aaaa.length <= 4
      && j.length <= 1
      && tr.length <= 2
      && oooo.length <= 4;

    if (!standard) {
      const number = `${string.replace(notNumber, '')}`.padStart(20, '0');

      nnnnnnn = number.substring(0, 7);
      dd = number.substring(7, 9);
      aaaa = number.substring(9, 13);
      j = number.substring(13, 14);
      tr = number.substring(14, 16);
      oooo = number.substring(16, 20);
    }

    const cnj = {
      nnnnnnn: parseInt(nnnnnnn, 10),
      dd: parseInt(dd, 10),
      aaaa: parseInt(aaaa, 10),
      j: parseInt(j, 10),
      tr: parseInt(tr, 10),
      oooo: parseInt(oooo, 10),
    };

    return new Cnj(cnj);
  }

  static withoutCheckDigit(nnnnnnn: number, aaaa: number, j: number, tr: number, oooo: number) {
    const NNNNNNN = `${nnnnnnn}`.padStart(7, '0');
    const AAAA = `${aaaa}`.padStart(4, '0');
    const J = `${j}`.substring(0, 1);
    const TR = `${tr}`.padStart(2, '0');
    const OOOO = `${oooo}`.padStart(4, '0');

    const block1 = `${NNNNNNN}${AAAA}`;
    const mod1 = parseInt(block1, 10) % 97;
    const value1 = mod1 * 1000000000;
    const block2 = `${J}${TR}${OOOO}`;
    const value2 = parseInt(block2, 10) * 100;
    const mod2 = (value1 + value2) % 97;

    const dd = (98 - mod2);

    const cnj = {
      nnnnnnn, dd, aaaa, j, tr, oooo,
    };

    return new Cnj(cnj);
  }

  toObject(): ICnj {
    const {
      nnnnnnn, dd, aaaa, j, tr, oooo,
    } = this;
    return {
      nnnnnnn, dd, aaaa, j, tr, oooo,
    };
  }

  toString({ flat } = { flat: false }): string {
    if (!this.isValid()) {
      return null;
    }
    const {
      nnnnnnn, dd, aaaa, j, tr, oooo,
    } = this;
    const NNNNNNN = `${nnnnnnn}`.padStart(7, '0');
    const DD = `${dd}`.padStart(2, '0');
    const AAAA = `${aaaa}`.padStart(4, '0');
    const J = `${j}`.substring(0, 1);
    const TR = `${tr}`.padStart(2, '0');
    const OOOO = `${oooo}`.padStart(4, '0');
    let cnj = `${NNNNNNN}-${DD}.${AAAA}.${J}.${TR}.${OOOO}`;
    if (flat) {
      cnj = `${NNNNNNN}${DD}${AAAA}${J}${TR}${OOOO}`;
    }
    return cnj;
  }

  toArray({ string } = { string: false }): number[] | string[] {
    if (!this.isValid()) {
      return null;
    }
    const {
      nnnnnnn, dd, aaaa, j, tr, oooo,
    } = this;
    if (string) {
      const NNNNNNN = `${nnnnnnn}`.padStart(7, '0');
      const DD = `${dd}`.padStart(2, '0');
      const AAAA = `${aaaa}`.padStart(4, '0');
      const J = `${j}`.substring(0, 1);
      const TR = `${tr}`.padStart(2, '0');
      const OOOO = `${oooo}`.padStart(4, '0');
      return [NNNNNNN, DD, AAAA, J, TR, OOOO];
    }
    return [nnnnnnn, dd, aaaa, j, tr, oooo];
  }

  isValidCheckDigit(): boolean {
    const {
      nnnnnnn, dd, aaaa, j, tr, oooo,
    } = this;
    const DD = `${dd}`.padStart(2, '0');
    const AAAA = `${aaaa}`.padStart(4, '0');
    const J = `${j}`.substring(0, 1);
    const TR = `${tr}`.padStart(2, '0');
    const OOOO = `${oooo}`.padStart(4, '0');

    const mod1 = nnnnnnn % 97;
    const value1 = `${mod1}${AAAA}${J}${TR}`;
    const mod2 = parseInt(value1, 10) % 97;
    const value2 = `${mod2}${OOOO}${DD}`;
    return ((parseInt(value2, 10) % 97) === 1);
  }

  isValid(): boolean {
    const {
      aaaa, j, tr, oooo,
    } = this;
    const isValidCheckDigit = this.isValidCheckDigit();

    if (!isValidCheckDigit) {
      return isValidCheckDigit;
    }

    if (
      (aaaa < 1850 || aaaa > new Date().getFullYear())
      && !(j === 8 && tr === 26 && [90, 14].includes(oooo))
    ) {
      return false;
    }

    if (courts[j] && courts[j][tr]) {
      return true;
    }
    return false;
  }
}

export default Cnj;
