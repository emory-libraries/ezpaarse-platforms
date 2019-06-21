#!/usr/bin/env node

'use strict';
const Parser = require('../.lib/parser.js');

/**
 * Recognizes the accesses to the platform Koreanstudies Information Service System
 * @param  {Object} parsedUrl an object representing the URL to analyze
 *                            main attributes: pathname, query, hostname
 * @param  {Object} ec        an object representing the EC whose URL is being analyzed
 * @return {Object} the result
 */
module.exports = new Parser(function analyseEC(parsedUrl, ec) {
  let result = {};
  let path   = parsedUrl.pathname;
  // uncomment this line if you need parameters
  let param = parsedUrl.query || {};

  // use console.error for debuging
  // console.error(parsedUrl);

  // let match;

  if (/^\/subject\/(subject([0-9]+)|subj-thesis-view)\.asp/i.test(path)) {
    // http://kiss.kstudy.com:80/subject/subject2.asp?datas=06,26,kiss
    // http://kiss.kstudy.com:80/subject/subject1.asp?datas=06,31,kiss
    // http://kiss.kstudy.com:80/subject/subject2.asp
    // http://kiss.kstudy.com:80/subject/subj-thesis-view.asp?key=8
    result.rtype = 'SEARCH';
    result.mime = 'HTML';

  } else if (/^\/dataReport\/data2\.asp/i.test(path)) {
    // http://kiss.kstudy.com:80/dataReport/data2.asp?key=204
    result.rtype = 'SEARCH';
    result.mime = 'HTML';

  } else if (/^\/inc\/aside_view_thesis\.asp/i.test(path)) {
    // http://kiss.kstudy.com:80/inc/aside_view_thesis.asp?key=3660962,3217329,3656253
    // http://kiss.kstudy.com:80/inc/aside_view_thesis.asp?key=3660962,3217329,3656253,2851753,404440,404449,3664469,1637421,3581678,3186305,3666921,3547940,3667618,3587276
    result.rtype = 'SEARCH';
    result.mime = 'HTML';

  } else if (/^\/publish\/pub-office\.asp/i.test(path)) {
    // http://kiss.kstudy.com:80/publish/pub-office.asp?queryIn=7113
    // http://kiss.kstudy.com:80/publish/pub-office.asp?queryIn=7120
    result.rtype = 'REF';
    result.mime = 'HTML';

  } else if (/^\/journal\/journal-view\.asp/i.test(path)) {
    // http://kiss.kstudy.com:80/journal/journal-view.asp?key1=30199&key2=7136
    // http://kiss.kstudy.com:80/journal/journal-view.asp?key1=30127&key2=7129
    // http://kiss.kstudy.com:80/journal/journal-view.asp?key1=28637&key2=3002
    result.rtype = 'TOC';
    result.mime = 'HTML';
    result.unitid = param.key1 + '/' + param.key2;

  }


  return result;
});
