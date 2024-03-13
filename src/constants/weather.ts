export const EMOJI_PATH = {
  smile: '/smile.png',
  worry: '/worry.png',
  umbrella: '/umbrella.png',
};

export const CDN_URL = 'https://d1j05o5l6xx0ft.cloudfront.net';

export const BANNERS = {
  smile: {
    desc: '오늘은 조금',
    title: '안심해도 되겠어요!',
    imageUrl: CDN_URL + EMOJI_PATH.smile,
  },
  worry: {
    desc: '운에 맡기시려고요?',
    title: '혹시 몰라요...',
    imageUrl: CDN_URL + EMOJI_PATH.worry,
  },
  umbrella: {
    desc: '비가 올 확률이 높아요',
    title: '우산을 챙기세요!',
    imageUrl: CDN_URL + EMOJI_PATH.umbrella,
  },
};
