export const CLOTHES_DATA = [
  {
    name: '민소매',
    id: 1,
  },
  {
    name: '반팔',
    id: 2,
  },
  {
    name: '반바지',
    id: 3,
  },
  {
    name: '짧은 치마',
    id: 4,
  },
  {
    name: '린넨 옷',
    id: 5,
  },
  {
    name: '반팔티',
    id: 6,
  },
  {
    name: '얇은 셔츠',
    id: 7,
  },
  {
    name: '면바지',
    id: 8,
  },
  {
    name: '원피스',
    id: 9,
  },
  {
    name: '긴팔티',
    id: 10,
  },
  {
    name: '얇은 가디건',
    id: 11,
  },
  {
    name: '청바지',
    id: 12,
  },
  {
    name: '블라우스',
    id: 13,
  },
  {
    name: '슬랙스',
    id: 14,
  },
  {
    name: '7부바지',
    id: 15,
  },
  {
    name: '얇은 재킷',
    id: 16,
  },
  {
    name: '맨투맨',
    id: 17,
  },
  {
    name: '후드',
    id: 18,
  },
  {
    name: '긴바지',
    id: 19,
  },
  {
    name: '바람막이',
    id: 20,
  },
  {
    name: '야상',
    id: 21,
  },
  {
    name: '니트',
    id: 22,
  },
  {
    name: '살구색 스타킹',
    id: 23,
  },
  {
    name: '청자켓',
    id: 24,
  },
  {
    name: '기모 후드',
    id: 25,
  },
  {
    name: '항공점퍼',
    id: 26,
  },
  {
    name: '셔츠',
    id: 27,
  },
  {
    name: '재킷',
    id: 28,
  },
  {
    name: '트렌치코트',
    id: 29,
  },
  {
    name: '검은색 스타킹',
    id: 30,
  },
  {
    name: '울코트',
    id: 31,
  },
  {
    name: '가죽 재킷',
    id: 32,
  },
  {
    name: '스카프',
    id: 33,
  },
  {
    name: '두꺼운 바지',
    id: 34,
  },
  {
    name: '가죽 옷',
    id: 35,
  },
  {
    name: '히트텍',
    id: 36,
  },
  {
    name: '캐시미어 코트',
    id: 37,
  },
  {
    name: '플리스 재킷',
    id: 38,
  },
  {
    name: '경량패딩',
    id: 39,
  },
  {
    name: '목폴라',
    id: 40,
  },
  {
    name: '패딩',
    id: 41,
  },
  {
    name: '두꺼운 코트',
    id: 42,
  },
  {
    name: '목도리',
    id: 43,
  },
  {
    name: '기모제품',
    id: 44,
  },
  {
    name: '누빔옷',
    id: 45,
  },
  {
    name: '장갑',
    id: 46,
  },
  {
    name: '히트텍',
    id: 47,
  },
  {
    name: '발열내의',
    id: 48,
  },
  {
    name: '가디건',
    id: 49,
  },
];

export const WEATHER_DATA = [
  { id: 8, name: '매우 더움', degree: 8 },
  { id: 7, name: '더움', degree: 7 },
  { id: 6, name: '조금 더움', degree: 6 },
  { id: 5, name: '따듯함', degree: 5 },
  { id: 4, name: '선선함', degree: 4 },
  { id: 3, name: '조금 추움', degree: 3 },
  { id: 2, name: '추움', degree: 2 },
  { id: 1, name: '매우 추움', degree: 1 },
];

export const WEATHER_TO_CLOTHES_MAP_DATA = {
  '매우 더움': ['민소매', '반팔', '반바지', '짧은 치마', '린넨 옷'],
  더움: ['반팔티', '얇은 셔츠', '반바지', '면바지', '원피스', '린넨 옷'],
  '조금 더움': [
    '긴팔티',
    '얇은 가디건',
    '면바지',
    '청바지',
    '블라우스',
    '슬랙스',
    '7부바지',
  ],
  따듯함: [
    '얇은 재킷',
    '가디건',
    '맨투맨',
    '면바지',
    '청바지',
    '후드',
    '긴바지',
    '바람막이',
  ],
  선선함: [
    '얇은 재킷',
    '가디건',
    '야상',
    '맨투맨',
    '니트',
    '살구색 스타킹',
    '청자켓',
    '야상',
    '기모 후드',
    '셔츠',
  ],
  '조금 추움': [
    '재킷',
    '트렌치코트',
    '니트',
    '면바지',
    '청바지',
    '검은색 스타킹',
    '야상',
    '항공점퍼',
  ],
  추움: [
    '울코트',
    '가죽 재킷',
    '니트',
    '스카프',
    '두꺼운 바지',
    '가죽 옷',
    '히트텍',
    '캐시미어 코트',
    '플리스 재킷',
    '경량패딩',
    '목폴라',
  ],
  '매우 추움': [
    '패딩',
    '두꺼운 코트',
    '목도리',
    '기모제품',
    '누빔옷',
    '장갑',
    '히트텍',
    '발열내의',
    '목폴라',
  ],
};

export const SF_SYMBOLS = {
  '01d': 'sun.max.fill',
  '01n': 'moon.fill',
  '02d': 'cloud.sun.fill',
  '02n': 'cloud.moon.fill',
  '03d': 'cloud.fill',
  '03n': 'cloud.fill',
  '04d': 'smoke.fill',
  '04n': 'smoke.fill',
  '09d': 'cloud.heavyrain.fill',
  '09n': 'cloud.heavyrain.fill',
  '10d': 'cloud.sun.rain.fill',
  '10n': 'cloud.moon.rain.fill',
  '11d': 'cloud.bolt.fill',
  '11n': 'cloud.bolt.fill',
  '13d': 'snowflake',
  '13n': 'snowflake',
  '50d': 'cloud.fog.fill',
  '50n': 'cloud.fog.fill',
};
