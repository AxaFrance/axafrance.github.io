(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{2068:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatRelative(token,date,baseDate,options){var format=formatRelativeLocale[token];if("function"==typeof format)return format(date,baseDate,options);return format};var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(2289));var weekdays=["недела","понеделник","вторник","среда","четврток","петок","сабота"];function thisWeek(day){var weekday=weekdays[day];switch(day){case 0:case 3:case 6:return"'ова "+weekday+" вo' p";case 1:case 2:case 4:case 5:return"'овој "+weekday+" вo' p"}}var formatRelativeLocale={lastWeek:function(date,baseDate,options){var day=date.getUTCDay();return(0,_index.default)(date,baseDate,options)?thisWeek(day):function lastWeek(day){var weekday=weekdays[day];switch(day){case 0:case 3:case 6:return"'минатата "+weekday+" во' p";case 1:case 2:case 4:case 5:return"'минатиот "+weekday+" во' p"}}(day)},yesterday:"'вчера во' p",today:"'денес во' p",tomorrow:"'утре во' p",nextWeek:function(date,baseDate,options){var day=date.getUTCDay();return(0,_index.default)(date,baseDate,options)?thisWeek(day):function nextWeek(day){var weekday=weekdays[day];switch(day){case 0:case 3:case 6:return"'следната "+weekday+" вo' p";case 1:case 2:case 4:case 5:return"'следниот "+weekday+" вo' p"}}(day)},other:"P"};module.exports=exports.default},2289:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function isSameUTCWeek(dirtyDateLeft,dirtyDateRight,options){(0,_index2.default)(2,arguments);var dateLeftStartOfWeek=(0,_index.default)(dirtyDateLeft,options),dateRightStartOfWeek=(0,_index.default)(dirtyDateRight,options);return dateLeftStartOfWeek.getTime()===dateRightStartOfWeek.getTime()};var _index=_interopRequireDefault(__webpack_require__(281)),_index2=_interopRequireDefault(__webpack_require__(14));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=exports.default}}]);
//# sourceMappingURL=78.95359becf1ae564d077a.bundle.js.map