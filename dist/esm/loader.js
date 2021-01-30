import { p as promiseResolve, b as bootstrapLazy } from './index-3d3a1297.js';

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ec-button_2",[[1,"ec-button",{"text":[1]},[[0,"click","handleClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };
