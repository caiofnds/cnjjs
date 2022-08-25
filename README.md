<div id="top"></div>
	
<h1 align=center > CNJ </h1>
<h5 align=center > Biblioteca de métodos para manipulaçao de números cnj.</h5>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#introducao">Introdução</a>
      <ul>
	          <li><a href="#descricao">Descrição</a></li>
		  <li><a href="#sobre-cnj">Sobre o número cnj</a></li>
      </ul>
    </li>
        <li><a href="#instalacao">Instalação</a></li>
        <li><a href="#demonstracao-de-uso">Demonstração de uso</a></li>
		   <li><a href="#documentação">Documentação</a></li>
	      <ul>
		      <li><a href="#from-string">fromString()</a></li>
		      <li><a href="#to-object">toObject()</a></li>
		      <li><a href="#to-array">toArray()</a></li>
		      <li><a href="#to-string">toString()</a></li>
		      <li><a href="#is-valid">isValid()</a></li>
		      <li><a href="without-check-digit">withoutCheckDigit()</a></li>
	      </ul>
      </ul>
    </li>
    <li><a href="#sobre-botmax">Sobre a Botmax</a></li>
    <li><a href="#referencias">Referências</a></li>
  </ol>
</details>

<br>

<br>

<div id=introducao></div>

## Introdução 
<div align=right>
<a href="https://github.com/botmaxbr/cnj/blob/main/Licença"><img src="https://img.shields.io/badge/Licença-MIT-red"></a> <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/Linguagem-Typescript-blue"></a>

</div>
	
<br>

	

| **Utilizada na da api da** |
|:---------------------:|
| [![Botmax](https://github.com/botmaxbr.png?size=100)](https://www.botmax.io) |
| [Botmax](https://github.com/botmaxbr) |



<br>

<div id=descricao ></div>

🤖	Essa biblioteca desenvolvida através destes [testes](https://github.com/botmaxbr/cnj/tree/main/tests). Consulte o índice ou vide a [documentação](#documentacao) para ler detalhes à respeito dos métodos. Sabendo da discrepância nos sistemas de publicação online nos tribunais de justiça, a biblioteca foi moldada para aumentar a confiabilidade de sistemas de automatização de acesso, informação e registro de andamentos de processos judiciais. 

<br>

#### Usabilidade:

* Sistemas de distribuição de recortes judiciais.
* Programas com rotinas de leitura e atualização de processos judiciais.

<br>

### Escrita em  

* [Typescript](https://www.typescriptlang.org)

Tanto a biblioteca quanto as APIs da Botmax foram escrita em typescript, para cobrir as vulnerabilidades do javascript.

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>

---

<br>

<div id=sobre-cnj></div>

## Sobre o número único CNJ	

#### A estrutura de numereção ilustrada abaixo é padronizada pela [resolução-cnj nº 65](https://www.justicaeleitoral.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.justicaeleitoral.jus.br/arquivos/tse-resolucao-65-2008-cnj/@@download/file/TSE-resolucao-65-2008-cnj.pdf), declarada em 16 de dezembro de 2008.


| `NNNNNNN` | `DD` | `AAAA` | `J` | `TR` | `OOOO` | 
|:---------:|:--:|:----:|:-:|:-:|:-----:|
| Número sequencial do processo | Dígito verificador | Ano do ajuizamento do processo | Órgão ou segmento do Poder Judiciário (Justiça Eleitoral: "6") | Tribunal (Justiça Eleitoral: 00 a 27) | Unidade de origem do processo (zonas eleitorais)  |

#### Legenda

* N – 7 dígitos, representam o número de ordem de autuação do processo, no ano de autuação e na unidade jurisdicional de origem; no caso de tribunais de justiça que fizeram a opção de que trata o art. 1º, § 1.º-A, da Resolução 65/2008, o número de ordem é relativo ao tribunal de origem ao invés da unidade de origem.
* D – 2 dígitos, são os verificadores. Formulados através de um cálculo que envolve os demais dígitos. 
* A - 4 dígitos, correspondem ao ano da autuação;
* J – 1 dígito, identificador do segmento do Judiciário a que pertence o processo.
* TR – 2 dígitos, identificam o tribunal ou conselho do segmento do Poder Judiciário a qual pertence o processo; para os tribunais superiores (STF, STJ, TST, TSE e STM) e o CNJ, o código deverá ser preenchido com zero (00), para os Conselhos da Justiça Federal e Superior da Justiça do Trabalho, deverá ser preenchido com o número 90 (noventa), para os demais tribunais, com um número identificador do tribunal;
* O – 4 dígitos, representam a unidade de origem do processo, seguindo regras diversas para cada um dos segmentos do Judiciário, à exceção dos tribunais e conselhos, que terão esses dígitos preenchidos com zero (0000).


<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>

---

<br>

<div id=instalacao></div>

## Instalação

### Por [Node Package Manager (npm)](https://docs.npmjs.com/about-npm)
```sh
npm install @botmax/cnj
```
### Por [Yarn](https://yarnpkg.com/getting-started)
```sh
yarn add @botmaxbr/cnj
```

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>

---

<br>

<div id=demonstracao-de-uso></div>

## Demonstração de Uso

em [ECMAScript](https://nodejs.org/en/docs/es6/)

``` javascript
import { Cnj } from '@botmaxbr/cnj';

```

<br>

em [commonJs](https://nodejs.org/docs/latest/api/modules.html)
``` javascript
const cnj = require('cnj')
```

<br>

Exemplo de uso:

``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('1-35.0001.1.01.1').toString(); // output -> '1-35.0001.1.01.1'
```

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>
<br>

---

<br>

<div id=documentacao align="center">
	
# Documentação
	
### Métodos 
	
</div>

<br>

<div id=from-string></div>

> ## fromString()
Manipula dado recebendo uma string e fornecendo diferentes tipos na saída.
### com número
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('1-35.0001.1.01.0001').toString(); // output -> '1-35.0001.1.01.0001'
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<br>

<div id=to-object></div>

> ## toObject()
fornece um [Object] [1] na saída
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('1-35.0001.1.01.0001').toObject(); // output -> nnnnnnn: 1, dd: 35, aaaa: 1, j: 1, tr: 1, oooo: 1
```
### com ano
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('0000001-32.2001.1.01.0001').toObject() // output  ->  nnnnnnn: 1, dd: 32, aaaa: 2001, j: 1, tr: 1, oooo: 1
```

``` javascript
import { cnj } from '@botmax/cnj';

Cnj.fromString('00000013220011010001').toObject(); // output  ->  nnnnnnn: 1, dd: 32, aaaa: 2001, j: 1, tr: 1, oooo: 1
```

### com valid number 
``` javascript
import { cnj } from '@botmax/cnj';

Cnj.fromString('00011268-83.2012.811.0055').toObject(); // output -> 00011268-83.2012.811.0055
```

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>
<br>

<div id=to-array></div>

> ## toArray()
fornece um [array] [2] na saída
#### com numeros
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('1-35.0001.1.01.0001').toArray(); // output -> [1, 35, 1, 1, 1, 1]
```
#### com ano					
``` javascript
import { Cnj } from '@/index';

Cnj.fromString('0000001-32.2001.1.01.0001').toArray(); // output -> [1, 32, 2001, 1, 1, 1]
```
#### com uma string de números					
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('1-35.0001.1.01.0001').toArray({ string: true }); // output -> ['0000001', '35', '0001', '1', '01', '0001']
```
#### com uma string de ano					
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('0000001-32.2001.1.01.0001').toArray({ string: true }); // output -> ['0000001', '32', '2001', '1', '01', '0001']
```
<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>
<br>

<div id=to-string></div>

> ## toString()
fornece uma [string] [3] na saída
#### string de números
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('0000001-35.0001.1.01.0001').toString(); // output -> '0000001-35.0001.1.01.0001'
```
#### string de números - opção flat 
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('0000001-35.0001.1.01.0001').toString({ flat: true }); // output -> '00000013500011010001'
```
#### string de ano
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('0000001-32.2001.1.01.0001').toString(); // output -> '0000001-32.2001.1.01.0001'
```
#### string de ano - opção flat  
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('00011268-83.2012.811.0055').toString({ flat: true }); // output -> '00000013220011010001'
```

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>
<br>


<div id=is-valid></div>

> ## isValid()

<br>

Booleana [4] que verifica validade de um cnj.
Formatos aceito como argumento: <br>
* 'nnnnnnnn-nn.nnnn.nnn.nnnn', <br>
* 'nnnnnnn-nn.nnnn.n.nn.nnnn', <br>
* 'nnnn.nnn.nn.nnnn.nnn.nnnn'


``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('00011268-83.2012.811.0055').toString({ flat: true }); // output -> true
```

<br>

``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('506354-19.2011.08.09.0051').toString({ flat: true }); // output -> true
```

<br>

``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.fromString('5000.822.53.2013.827.2706').toString({ flat: true }); // output -> true
```

<br>

``` javascript
import { Cnj } from '@/index';

Cnj.fromString('00011268-83.2012.811.0055').toString({ flat: true }); // output -> false
```

<br>

``` javascript
import { Cnj } from '@/index';

Cnj.fromString('string string string string').isValid(); // output -> false
```
<br>

``` javascript
import { Cnj } from '@/index';

Cnj.fromString('00000013220011010001').isValid(); // output -> false
```

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>
<br>


<div id=without-check-digit></div>

> ## withoutCheckDigit()

<br>

Método [5] usado para manipular dado sem números de checagem. 
``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.withoutCheckDigit(1, 2001, 6, 26, 1); // output -> 0000001-19.2001.6.26.0001
```
<br>

``` javascript
import { Cnj } from '@botmaxbr/cnj';

Cnj.withoutCheckDigit(1234567, 8901, 2, 34, 5678); // output -> 1234567-88.8901.2.34.5678 
```

<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>
<br>

---

<br>

<div id=sobre-botmax></div>


## Para saber mais sobre a Botmax

<div align=right>
<a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/Processos Tratados -200m+-blueviolet"></a>

</div>

<br>

> Inteligência de processos jurídicos eletrônicos.

Visite a [Homepage da Botmax](https://www.botmax.io).


<p align="right">(<a href="#top">voltar ao topo</a>)</p>

<br>
<br>

---

<br>

<div id=referencias></div>

## Referências e Informações complementares

[1]: <https://developer.mozilla.org/pt-BR/docs/Glossary/String> 'Glossário: Array'
[2]: <https://developer.mozilla.org/pt-BR/docs/Glossary/Object> 'Glossário: Object'
[3]: <https://developer.mozilla.org/pt-BR/docs/Glossary/Array> 'Glossário: String'
[4]: <https://developer.mozilla.org/pt-BR/docs/Glossary/Boolean> 'Glossário: Boolean'
[5]: <https://developer.mozilla.org/en-US/docs/Glossary/Method> 'Glossário: Método (Inglês-US)'

<br>

[Sobre a resolução que diz respeito ao número cnj](https://www.tse.jus.br/eleitor/cartorios-e-zonas-eleitorais/numeracao-da-resolucao-cnj-no-65)

<br>

[Identificação de um número CNJ](https://cotz.com.br/artigos.php?numero_cnj)

<br>

[Resolução Nº 185 de 18/12/2013](https://atos.cnj.jus.br/atos/detalhar/1933)

<br>

[Sobre o Sistema Processo Judicial Eletrônico](https://www.pje.jus.br/wiki/index.php/Página_principal)

<p align="right">(<a href="#top">voltar ao topo</a>)</p>
