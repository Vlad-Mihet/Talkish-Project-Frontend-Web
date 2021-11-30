/**
 * prettifyStoryStatNum
 * 
 * Returns a prettified version of a stat number.
 * 
 * For example: 174543 -> 174K
 * 
 * @param stat - The stat number
 * @returns prettifiedStat - The more user-friendly stat number
 */
function prettifyStoryStatNum(
  stat: number
): string {
  if (stat < 1000) {
    return stat.toString();
  }
  else {
    const thousands = Math.round(stat / 1000);
    return thousands + 'K';
  }
}

export default prettifyStoryStatNum;