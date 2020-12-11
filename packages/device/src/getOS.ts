/**
 * Get the current os info.
 * @category Device
 * @returns {string} Returns the current os info.
 */
export default function getOS(): string {
  const userAgent = ('navigator' in window && 'userAgent' in navigator && navigator.userAgent && navigator.userAgent.toLowerCase()) || '';

  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
  if (/windows phone/i.test(userAgent)) return 'windowsPhone';
  if (/android/i.test(userAgent)) return 'android';

  return '';
}
