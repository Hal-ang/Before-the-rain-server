export type TimePeriod = 'dawn' | 'morning' | 'afternoon' | 'evening' | 'night';

export const TIME_PERIODS = {
  dawn: { start: 3, end: 5, label: '새벽' }, // 새벽
  morning: { start: 6, end: 11, label: '아침' }, // 아침
  afternoon: { start: 12, end: 17, label: '오후' }, // 오후
  evening: { start: 18, end: 20, label: '저녁' }, // 저녁
  night: { start: 21, end: 2, label: '밤' }, // 밤
};
