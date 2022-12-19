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

const options = {
  flipXY: false,
  width: 320,
  height: 450,
  labelLineSpacing: 15,
  labelPadding: 2,
  arrowHeadWidth: 5,
  arrowHeadHeight: 5,
  arrowsUp: false,
  minimumSiblingGap: 0.1,
  idealSiblingGap: 0.1,
  minimumCousinGap: 0.2,
  idealCousinGap: 1.2,
  levelsGap: 1.2,
  cornerRounding: 4,
  minimumDepth: 0,
  minimumBreadth: 0
};

const css = `
  text {
    text-anchor: middle;
    font-size: x-small;
  }
  
  rect {
    fill: ghostwhite;
    stroke: black;
    stroke-width: 0.3px;
  }
  
  line {
    stroke: black;
    opacity: 0.5;
    stroke-width: 0.3px;
  }
`;

treefun2.treeToDiagram(document, document.body, tree, options, css);

