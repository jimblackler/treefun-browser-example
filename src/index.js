const treefun2 = require('treefun2');

const tree = [{
  label: 'World',
  children: [{
    label: 'Europe',
    children: [{
      label: 'France',
    }, {
      label: 'Germany'
    }]
  }]
}];

treefun2.treeToDiagram(document, document.body, tree, {}, '');

