"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BANNERS = exports.CDN_URL = exports.EMOJI_PATH = void 0;
exports.EMOJI_PATH = {
    smile: '/smile.png',
    worry: '/worry.png',
    umbrella: '/umbrella.png',
};
exports.CDN_URL = 'https://d1j05o5l6xx0ft.cloudfront.net';
exports.BANNERS = {
    smile: {
        desc: '오늘은 조금',
        title: '안심해도 되겠어요!',
        imageUrl: exports.CDN_URL + exports.EMOJI_PATH.smile,
    },
    worry: {
        desc: '운에 맡기시려고요?',
        title: '혹시 몰라요...',
        imageUrl: exports.CDN_URL + exports.EMOJI_PATH.worry,
    },
    umbrella: {
        desc: '비가 올 확률이 높아요',
        title: '우산을 챙기세요!',
        imageUrl: exports.CDN_URL + exports.EMOJI_PATH.umbrella,
    },
};
//# sourceMappingURL=weather.js.map