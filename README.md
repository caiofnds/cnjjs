# 📦 cnjjs

[![npm version](https://img.shields.io/npm/v/cnjjs.svg?color=blue&logo=npm)](https://www.npmjs.com/package/cnjjs)
[![bundle size](https://img.shields.io/bundlephobia/minzip/cnjjs?label=size)](https://bundlephobia.com/package/cnjjs)
[![license](https://img.shields.io/npm/l/cnjjs.svg?color=green)](./LICENSE)
[![typescript](https://img.shields.io/badge/%3C%2F%3E-Typescript-blue)](https://www.typescriptlang.org/)

Biblioteca em **TypeScript** para manipulação de números **CNJ**  
(Conselho Nacional de Justiça) conforme a [Resolução CNJ nº 65/2008](https://atos.cnj.jus.br/atos/detalhar/1933).

---

## ✨ Features

- ✅ Validação do dígito verificador (check digit).  
- ✅ Conversão para string formatada (`toString`) ou compacta (`toFlatString`).  
- ✅ Conversão para objeto (`toObject`) ou arrays (`toArray`, `toStringArray`).  
- ✅ Criação a partir de string (`fromString`) ou sem dígito verificador (`withoutCheckDigit`).  

---

## 📦 Instalação

```sh
npm install cnjjs
# ou
yarn add cnjjs
```

---

## 🚀 Uso

### Importando

```ts
// ESM / TypeScript
import { fromString, withoutCheckDigit } from "cnjjs";
```

### Criando a partir de string

```ts
const cnj = fromString("0000001-35.2001.1.01.0001");

console.log(cnj.toString());
// -> "0000001-35.2001.1.01.0001"
```

### Objeto

```ts
cnj.toObject();
// -> { nnnnnnn: 1, dd: 35, aaaa: 2001, j: 1, tr: 1, oooo: 1 }
```

### Arrays

```ts
cnj.toArray();
// -> [1, 35, 2001, 1, 1, 1]

cnj.toStringArray();
// -> ["0000001", "35", "2001", "1", "01", "0001"]
```

### Strings

```ts
cnj.toString();
// -> "0000001-35.2001.1.01.0001"

cnj.toFlatString();
// -> "00000013520011010001"
```

### Validação

```ts
cnj.isValid();          // true ou false
cnj.isValidCheckDigit(); // true ou false
```

### Criando sem dígito verificador

```ts
const cnj2 = withoutCheckDigit(1, 2001, 6, 26, 1);

cnj2.toString();
// -> "0000001-19.2001.6.26.0001"
```

---

## 📚 API

### Funções

- **`fromString(value: string): Cnj`** → cria uma instância a partir de string.  
- **`withoutCheckDigit(nnnnnnn, aaaa, j, tr, oooo): Cnj`** → cria CNJ calculando automaticamente o dígito verificador.  

### Métodos da classe `Cnj`

- **`toObject(): CnjProps`** → retorna objeto.  
- **`toArray(): number[]`** → retorna array numérico.  
- **`toStringArray(): string[]`** → retorna array de strings formatadas.  
- **`toString(): string`** → retorna CNJ formatado.  
- **`toFlatString(): string`** → retorna CNJ concatenado (flat).  
- **`isValid(): boolean`** → valida número CNJ.  
- **`isValidCheckDigit(): boolean`** → valida dígito verificador.  

---

## 📖 Estrutura CNJ

Formato oficial:  

```
NNNNNNN-DD.AAAA.J.TR.OOOO
```

| Campo     | Tamanho | Descrição                                                                 |
|-----------|---------|---------------------------------------------------------------------------|
| NNNNNNN   | 7       | Número sequencial do processo                                             |
| DD        | 2       | Dígito verificador                                                        |
| AAAA      | 4       | Ano de ajuizamento                                                        |
| J         | 1       | Segmento do Judiciário                                                    |
| TR        | 2       | Tribunal/Conselho                                                         |
| OOOO      | 4       | Unidade de origem                                                         |

Referência: [Resolução CNJ nº 65/2008](https://atos.cnj.jus.br/atos/detalhar/1933)  

---

## 🛠️ Desenvolvimento

Clone o repositório, instale as dependências e rode os testes:  

```sh
git clone https://github.com/caiofnds/cnjjs.git
cd cnjjs
npm install
npm test
```

---

## 📝 Licença

Distribuído sob a licença [MIT](./LICENSE).  

---

📌 Mantido por [caiofnds](https://github.com/caiofnds).
