#!/usr/bin/env node

'use strict';
const Parser = require('../.lib/parser.js');

/**
 * Recognizes the accesses to the platform Britannica
 * @param  {Object} parsedUrl an object representing the URL to analyze
 *                            main attributes: pathname, query, hostname
 * @param  {Object} ec        an object representing the EC whose URL is being analyzed
 * @return {Object} the result
 */
module.exports = new Parser(function analyseEC(parsedUrl, ec) {
  let result = {};
  let path   = parsedUrl.pathname;
  let match;

  if ((match = /^\/asset\/download\/([0-9]+_?[0-9]+)$/i.exec(path)) !== null) {
    // http://quest.eb.com/asset/download/132_1279562?translate=false
    result.rtype  = 'IMAGE';
    result.mime   = 'MISC';
    result.unitid = match[1];
  } else if ((match = /^\/search\/([0-9]+_?[0-9]+)\/[0-9]+\/([0-9]+_?[0-9]+)\/detail\/more$/i.exec(path)) !== null) {
    // http://quest.eb.com/search/138_1063502/1/138_1063502/detail/more
    result.rtype  = 'ENCYCLOPAEDIA_ENTRY';
    result.mime   = 'HTML';
    result.unitid = match[1];
  }

  return result;
});

