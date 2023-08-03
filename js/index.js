"use strict";
function ghs__(tag) {
  return document.querySelector(tag);
}

setInterval(() => {
  const hours = ghs__(".hr");
  const minutes = ghs__(".min");
  const second = ghs__(".sec");
  var d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let hr_rotation = 30 * hr + min / 12;
  let min_rotation = 6 * min;
  let sec_rotation = 6 * sec;

  hours.style.transform = `rotate(${hr_rotation}deg)`;
  minutes.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
});


