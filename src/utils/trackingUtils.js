// utils/trackingUtils.js
export function generateRandomTrackingNumber() {
    const trackingNumbers = [
  "449044304137821",
  "149331877648230",
  "020207021381215",
  "403934084723025",
  "920241085725456",
  "568838414941",
  "039813852990618",
  "231300687629630",
  "797806677146",
  "377101283611590",
  "852426136339213",
  "797615467620",
  "957794015041323",
  "076288115212522",
  "581190049992",
  "122816215025810",
  "843119172384577",
  "070358180009382",
  "713062653486",
];

  const randomTrackingNumber =
    trackingNumbers[Math.floor(Math.random() * trackingNumbers.length)];
  return randomTrackingNumber;
}
