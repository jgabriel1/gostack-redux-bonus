* Assim como no context, o acesso ao estado é feito por meio de um provider que
recebe o objeto store (o estado) como parâmetro.

* A maneira como o estado deve ser acessado nos componentes é na forma dos selectors,
que são funções que recebem o estado como parâmetro e retornam parte desse estado
ou com algum tipo de processamento tendo sido realizado em cima dele.

* Um exemplo de aplicação do selector seria:

- Estado global:
```Javascript
const state = [
  {
    ticker: 'AAPL',
    totalValue: 1000,
    // ...
  },
  {
    ticker: 'TSLA',
    totalValue: 2000,
    // ...
  },
];

const totalSelector = state => state.reduce(
  (total, stock) => total + stock.totalValue,
  0
);

// in Component
const total = useSelector(totalSelector);
```

* Ao usar um selector, o componente só se *subscreve* na informação retornada por
aquele selector. Caso qualquer uma das informações do estado que não são retornadas
pelo selector forem alteradas, o componente não sofrerárenderização, apenas quando
a informação que lhe interessa sofrer alteração ele o será.

* Cada estado global da aplicação é representado por um reducer. O reducer é uma
função que retorna o estado em si (array, objeto, etc...).

* Os estados são combinados em um rootReducer utilizando a função combineReducers

* As actions são funções que servem apenas como factories para o objeto que carrega
o *type* e, quando houver, o *payload* do dispatch.

* Assim como no setState do React, faz-se necessário que o reducer altere o estado
respeitando a imutabilidade. Ou seja, nada de push em array, sempre copiar o estado
anterior alterando-o ou não.

* A função produce da biblioteca immer invalida o ponto anterior de modo que o objeto
draft que ela recebe pode ser alterado tranquilamente desconsiderando a imutabilidade,
diminuindo assim a verbosidade da atualização de estado. É apenas uma mudança de
qualidade de vida e limpeza de código.

* O *reducer* deve guardar toda a regra de negócio da alteração de estado. A *action*
é apenas a mensageira do tipo de alteração.

* A utilização de um estado global, seja por meio do redux ou por meio do useContext
permite a abstração dos componentes sem ter que passar a função de alteração de estado
como props para baixo. O hook pode ser chamado de dentro do componente filho e este
ter acesso ao dispatch por si só.

* O *redux-saga* é um *middleware* que intercepta uma *action* que está sendo executada
para fazer algum tipo de chamada assíncrona, geralmente validando ou invalidando a
*action*.
