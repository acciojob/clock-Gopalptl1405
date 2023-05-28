const p = document.createElement("p");
p.id = "timer";
document.body.append(p);

function getTime() {
  let dateInfo = new Date();

  let date = dateInfo.toLocaleDateString();
  let time = dateInfo.toLocaleTimeString().split(":");
  let hrs = time[0];
  let min = time[1];
  let sec = time[2];

  let isPm = false;
  let fullTime;

  if (hrs > 12) {
    isPm = true;
    fullTime = `${hrs - 12}:${min}:${sec} ${isPm ? "PM" : "AM"}`;
  } else {
    isPm = false;
    fullTime = `${hrs}:${min}:${sec} ${isPm ? "PM" : "AM"}`;
  }

  p.innerText = `${date}, ${fullTime} `;
}

setInterval(getTime, 1000);
