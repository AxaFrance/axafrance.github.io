(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1925:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatRelative(token,date,baseDate,options){var format=formatRelativeLocale[token];return"function"==typeof format?format(date,baseDate,options):format};var formatRelativeLocale={lastWeek:function(date){switch(date.getUTCDay()){case 6:return"'το προηγούμενο' eeee 'στις' p";default:return"'την προηγούμενη' eeee 'στις' p"}},yesterday:"'χθες στις' p",today:"'σήμερα στις' p",tomorrow:"'αύριο στις' p",nextWeek:"eeee 'στις' p",other:"P"};module.exports=exports.default}}]);
//# sourceMappingURL=156.95359becf1ae564d077a.bundle.js.map