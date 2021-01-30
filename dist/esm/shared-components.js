import { p as promiseResolve, b as bootstrapLazy } from './index-3d3a1297.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ec-button_2",[[1,"ec-button",{"text":[1]},[[0,"click","handleClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
