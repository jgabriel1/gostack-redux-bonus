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
