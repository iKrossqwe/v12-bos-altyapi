const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar Yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } İsmi ile Sisteme Giriş Yapıldı!`
  );
  client.user.setStatus("idle");
  var oyun = [
    `x.yardım | Yardım Komutum UwU | Xie Bot Developer Team🌙 `,
    `x.destek | Destek Sunucuma Gel :3 | Xie Bot Developer Team🚀 `,
    `Xie Yakında🎈`
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};
