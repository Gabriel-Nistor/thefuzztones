// Compare calendar dates in the concert's own time zone.
// A show remains upcoming for its entire scheduled day.
/**
 * @param {string} endDate YYYY-MM-DD, inclusive
 * @param {string} [timeZone] IANA time zone
 * @param {Date} [now]
 * @returns {boolean}
 */
export function isPastDate(endDate, timeZone = 'Europe/London', now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);

  const part = (/** @type {string} */ name) => parts.find(item => item.type === name)?.value;
  const today = `${part('year')}-${part('month')}-${part('day')}`;
  return endDate < today;
}
