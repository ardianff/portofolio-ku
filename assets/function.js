function myPorto() {
  alert("Hi There ! This is My Web Portfolio");
}
function submitConfirm() {
  alert("Your Data Has Been Saved");
}
window.onload = function () {
  var hasil;
  hasil = "Welcome on My Web Portfolio";
  alert(hasil);
};
function showTime() {
  var tanggal = new Date();
  var jam = tanggal.getHours();
  var menit = tanggal.getMinutes();
  var detik = tanggal.getSeconds();

  if (jam == 0) {
    jam = 24;
  }
  if (jam > 24) {
    jam = jam - 24;
  }
  jam = checkTime(jam);
  menit = checkTime(menit);
  detik = checkTime(detik);
  document.getElementById("jam").innerHTML = jam + ":" + menit + ":" + detik + " WIB";
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval(showTime, 500);
