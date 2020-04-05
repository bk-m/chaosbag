var minus5Img = "https://i.imgur.com/3Ym1IeG.png";
var minus4Img = "https://i.imgur.com/qrgGQRD.png";
var minus3Img = "https://i.imgur.com/yfs8gHq.png";
var minus2Img = "https://i.imgur.com/bfTg2hb.png";
var minus1Img = "https://i.imgur.com/w3XbrCC.png";
var zeroImg = "https://i.imgur.com/btEtVfd.png";
var plus1Img = "https://i.imgur.com/uIx8jbY.png";
var skullImg = "https://i.imgur.com/stbBxtx.png";
var elderSignImg = "https://i.imgur.com/nEmqjmj.png";
var autoFailImg = "https://i.imgur.com/lns4fhz.png";
var cultistImg = "https://i.imgur.com/VzhJJaH.png";
var tabletImg = "https://i.imgur.com/1plY463.png";
var elderThingImg = "https://i.imgur.com/ttnspKt.png";

var minus5 = 0;
var minus4 = 0;
var minus3 = 0;
var minus2 = 0;
var minus1 = 0;
var zero = 0;
var plus1 = 0;
var skull = 0;
var elderSign = 0;
var autoFail = 0;
var cultist = 0;
var tablet = 0;
var elderThing = 0;

$(document).ready(function () {
  function clear() {
    minus5 = 0;
    minus4 = 0;
    minus3 = 0;
    minus2 = 0;
    minus1 = 0;
    zero = 0;
    plus1 = 0;
    skull = 0;
    elderSign = 0;
    autoFail = 0;
    cultist = 0;
    tablet = 0;
    elderThing = 0;
    $(".chance-header").text("");
    $(".minus5").empty();
    $(".chance-5").empty();
    $(".minus4").empty();
    $(".chance-4").empty();
    $(".minus3").empty();
    $(".chance-3").empty();
    $(".minus2").empty();
    $(".chance-2").empty();
    $(".minus1").empty();
    $(".chance-1").empty();
    $(".zero").empty();
    $(".chance0").empty();
    $(".plus1").empty();
    $(".chanceplus1").empty();
    $(".cultist").empty();
    $(".chancecultist").empty();
    $(".skull").empty();
    $(".chanceskull").empty();
    $(".thing").empty();
    $(".chancething").empty();
    $(".tablet").empty();
    $(".chancetablet").empty();
    $(".fail").empty();
    $(".chancefail").empty();
    $(".sign").empty();
    $(".chancesign").empty();
  }

  function draw() {
    getTotal() > 0
      ? $(".chance-header").text("Chance")
      : $(".chance-header").text("");
    $(".minus5").empty();
    $(".chance-5").empty();
    var cminus5 = calculateChance("minus5")
      ? Math.round(calculateChance("minus5") * 10) / 10 + " %"
      : "";
    var pminus5 = $("<p class='chance'></p>").text(cminus5);
    pminus5.appendTo(".chance-5");
    for (var i = 0; i < minus5; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", minus5Img);
      img.appendTo(".minus5");
    }
    $(".minus4").empty();
    $(".chance-4").empty();
    var cminus4 = calculateChance("minus4")
      ? Math.round(calculateChance("minus4") * 10) / 10 + " %"
      : "";
    var pminus4 = $("<p class='chance-text'></p>").text(cminus4);
    pminus4.appendTo(".chance-4");
    for (var i = 0; i < minus4; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", minus4Img);
      img.appendTo(".minus4");
    }
    $(".minus3").empty();
    $(".chance-3").empty();
    var cminus3 = calculateChance("minus3")
      ? Math.round(calculateChance("minus3") * 10) / 10 + " %"
      : "";
    var pminus3 = $("<p class='chance-text'></p>").text(cminus3);
    pminus3.appendTo(".chance-3");
    for (var i = 0; i < minus3; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", minus3Img);
      img.appendTo(".minus3");
    }
    $(".minus2").empty();
    $(".chance-2").empty();
    var cminus2 = calculateChance("minus2")
      ? Math.round(calculateChance("minus2") * 10) / 10 + " %"
      : "";
    var pminus2 = $("<p class='chance-text'></p>").text(cminus2);
    pminus2.appendTo(".chance-2");
    for (var i = 0; i < minus2; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", minus2Img);
      img.appendTo(".minus2");
    }
    $(".minus1").empty();
    $(".chance-1").empty();
    var cminus1 = calculateChance("minus1")
      ? Math.round(calculateChance("minus1") * 10) / 10 + " %"
      : "";
    var pminus1 = $("<p class='chance-text'></p>").text(cminus1);
    pminus1.appendTo(".chance-1");
    for (var i = 0; i < minus1; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", minus1Img);
      img.appendTo(".minus1");
    }
    $(".zero").empty();
    $(".chance0").empty();
    var c0 = calculateChance("zero")
      ? Math.round(calculateChance("zero") * 10) / 10 + " %"
      : "";
    var p0 = $("<p class='chance-text'></p>").text(c0);
    p0.appendTo(".chance0");
    for (var i = 0; i < zero; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", zeroImg);
      img.appendTo(".zero");
    }
    $(".plus1").empty();
    $(".chanceplus1").empty();
    var cplus1 = calculateChance("plus1")
      ? Math.round(calculateChance("plus1") * 10) / 10 + " %"
      : "";
    var pplus1 = $("<p class='chance-text'></p>").text(cplus1);
    pplus1.appendTo(".chanceplus1");
    for (var i = 0; i < plus1; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", plus1Img);
      img.appendTo(".plus1");
    }
    $(".cultist").empty();
    $(".chancecultist").empty();
    var cc = calculateChance("cultist")
      ? Math.round(calculateChance("cultist") * 10) / 10 + " %"
      : "";
    var pc = $("<p class='chance-text'></p>").text(cc);
    pc.appendTo(".chancecultist");
    for (var i = 0; i < cultist; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", cultistImg);
      img.appendTo(".cultist");
    }
    $(".skull").empty();
    $(".chanceskull").empty();
    var csk = calculateChance("skull")
      ? Math.round(calculateChance("skull") * 10) / 10 + " %"
      : "";
    var psk = $("<p class='chance-text'></p>").text(csk);
    psk.appendTo(".chanceskull");
    for (var i = 0; i < skull; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", skullImg);
      img.appendTo(".skull");
    }
    $(".thing").empty();
    $(".chancething").empty();
    var ct = calculateChance("thing")
      ? Math.round(calculateChance("thing") * 10) / 10 + " %"
      : "";
    var pt = $("<p class='chance-text'></p>").text(ct);
    pt.appendTo(".chancething");
    for (var i = 0; i < elderThing; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", elderThingImg);
      img.appendTo(".thing");
    }
    $(".tablet").empty();
    $(".chancetablet").empty();
    var cta = calculateChance("tablet")
      ? Math.round(calculateChance("tablet") * 10) / 10 + " %"
      : "";
    var pta = $("<p class='chance-text'></p>").text(cta);
    pta.appendTo(".chancetablet");
    for (var i = 0; i < tablet; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", tabletImg);
      img.appendTo(".tablet");
    }
    $(".fail").empty();
    $(".chancefail").empty();
    var cf = calculateChance("fail")
      ? Math.round(calculateChance("fail") * 10) / 10 + " %"
      : "";
    var pf = $("<p class='chance-text'></p>").text(cf);
    pf.appendTo(".chancefail");
    for (var i = 0; i < autoFail; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", autoFailImg);
      img.appendTo(".fail");
    }
    $(".sign").empty();
    $(".chancesign").empty();
    var csi = calculateChance("sign")
      ? Math.round(calculateChance("sign") * 10) / 10 + " %"
      : "";
    var psi = $("<p class='chance-text'></p>").text(csi);
    psi.appendTo(".chancesign");
    for (var i = 0; i < elderSign; i++) {
      var img = $("<img class='smaller'>");
      img.attr("src", elderSignImg);
      img.appendTo(".sign");
    }
  }

  function getTotal() {
    return (
      minus5 +
      minus4 +
      minus3 +
      minus2 +
      minus1 +
      zero +
      plus1 +
      skull +
      cultist +
      tablet +
      elderThing +
      autoFail +
      elderSign
    );
  }

  function calculateChance(input) {
    var total = getTotal();
    switch (input) {
      case "minus5":
        return (minus5 / total) * 100;
      case "minus4":
        return (minus4 / total) * 100;
      case "minus3":
        return (minus3 / total) * 100;
      case "minus2":
        return (minus2 / total) * 100;
      case "minus1":
        return (minus1 / total) * 100;
      case "zero":
        return (zero / total) * 100;
      case "plus1":
        return (plus1 / total) * 100;
      case "skull":
        return (skull / total) * 100;
      case "cultist":
        return (cultist / total) * 100;
      case "thing":
        return (elderThing / total) * 100;
      case "tablet":
        return (tablet / total) * 100;
      case "fail":
        return (autoFail / total) * 100;
      case "sign":
        return (elderSign / total) * 100;
      default:
        return 0;
    }
  }

  $(".minusBtn").click(function () {
    switch ($(this).val()) {
      case "-5":
        if (minus5 === 0) break;
        minus5 -= 1;
        break;
      case "-4":
        if (minus4 === 0) break;
        minus4 -= 1;
        break;
      case "-3":
        if (minus3 === 0) break;
        minus3 -= 1;
        break;
      case "-2":
        if (minus2 === 0) break;
        minus2 -= 1;
        break;
      case "-1":
        if (minus1 === 0) break;
        minus1 -= 1;
        break;
      case "0":
        if (zero === 0) break;
        zero -= 1;
        break;
      case "+1":
        if (plus1 === 0) break;
        plus1 -= 1;
        break;
      case "skull":
        if (skull === 0) break;
        skull -= 1;
        break;
      case "cultist":
        if (cultist === 0) break;
        cultist -= 1;
        break;
      case "thing":
        if (elderThing === 0) break;
        elderThing -= 1;
        break;
      case "tablet":
        if (tablet === 0) break;
        tablet -= 1;
        break;
      case "fail":
        if (autoFail === 0) break;
        autoFail -= 1;
        break;
      case "sign":
        if (elderSign === 0) break;
        elderSign -= 1;
        break;
      default:
        break;
    }
    draw();
  });

  $(".plusBtn").click(function () {
    switch ($(this).val()) {
      case "-5":
        minus5 += 1;
        break;
      case "-4":
        minus4 += 1;
        break;
      case "-3":
        minus3 += 1;
        break;
      case "-2":
        minus2 += 1;
        break;
      case "-1":
        minus1 += 1;
        break;
      case "0":
        zero += 1;
        break;
      case "+1":
        plus1 += 1;
        break;
      case "skull":
        skull += 1;
        break;
      case "cultist":
        cultist += 1;
        break;
      case "thing":
        elderThing += 1;
        break;
      case "tablet":
        tablet += 1;
        break;
      case "fail":
        autoFail += 1;
        break;
      case "sign":
        elderSign += 1;
        break;
      default:
        break;
    }
    draw();
  });

  $(".clearBtn").click(function () {
    clear();
  });
});
