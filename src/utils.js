const DAY = 24 * 60 * 60 * 1000;

const WEEK_DAY = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
}

export const toHnbDateFormat = (timestamp) => {
  // YYYY-MM-DD
  return new Date(timestamp).toISOString().split('T')[0];
}

export const subDays = (timestamp, days) => {
  return timestamp - days * DAY;
}

export const getDay = (timestamp) => {
  const dayIndex = new Date(timestamp).getDay();
  return WEEK_DAY[dayIndex];
}

export const isWeekend = (timestamp) => {
  const dayIndex = new Date(timestamp).getDay();
  return dayIndex === 0 || dayIndex === 6;
}

export const getWeekdayMinIndex = (data) => {
  let min = null;
  data.forEach((x, idx) => {
    if (!isWeekend(x.datum_primjene)) {
      if (!min || min && x.srednji_tecaj < data[min].srednji_tecaj) {
        min = idx;
      }
    }
  })
  return min;
}
