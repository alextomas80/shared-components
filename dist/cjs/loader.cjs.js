'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-83e386ac.js');

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ec-button_2.cjs",[[1,"ec-button",{"text":[1]},[[0,"click","handleClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
