(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{2185:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=_interopRequireDefault(__webpack_require__(514)),_index2=_interopRequireDefault(__webpack_require__(515));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={ordinalNumber:(0,_index.default)({matchPattern:/^(\d+)(chi)?/i,parsePattern:/\d+/i,valueCallback:function(value){return parseInt(value,10)}}),era:(0,_index2.default)({matchPatterns:{narrow:/^(m\.a|m\.)/i,abbreviated:/^(m\.a\.?\s?m\.?)/i,wide:/^(miloddan avval|miloddan keyin)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,_index2.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](chi)? chorak/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(index){return index+1}}),month:(0,_index2.default)({matchPatterns:{narrow:/^[yfmasond]/i,abbreviated:/^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,wide:/^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ya/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^iyun/i,/^iyul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,_index2.default)({matchPatterns:{narrow:/^[ydschj]/i,short:/^(ya|du|se|cho|pa|ju|sha)/i,abbreviated:/^(yak|dush|sesh|chor|pay|jum|shan)/i,wide:/^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^d/i,/^s/i,/^ch/i,/^p/i,/^j/i,/^sh/i],any:[/^ya/i,/^d/i,/^se/i,/^ch/i,/^p/i,/^j/i,/^sh/i]},defaultParseWidth:"any"}),dayPeriod:(0,_index2.default)({matchPatterns:{narrow:/^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,any:/^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^y\.t/i,noon:/^pe/i,morning:/ertalab/i,afternoon:/tushdan keyin/i,evening:/kechqurun/i,night:/tun/i}},defaultParseWidth:"any"})};exports.default=_default,module.exports=exports.default}}]);
//# sourceMappingURL=413.95359becf1ae564d077a.bundle.js.map