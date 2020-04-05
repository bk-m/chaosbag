let minus5Img = "https://i.imgur.com/3Ym1IeG.png";
let minus4Img = "https://i.imgur.com/qrgGQRD.png";
let minus3Img = "https://i.imgur.com/yfs8gHq.png";
let minus2Img = "https://i.imgur.com/bfTg2hb.png";
let minus1Img = "https://i.imgur.com/w3XbrCC.png";
let zeroImg = "https://i.imgur.com/btEtVfd.png";
let plus1Img = "https://i.imgur.com/uIx8jbY.png";
let skullImg = "https://i.imgur.com/stbBxtx.png";
let elderSignImg = "https://i.imgur.com/nEmqjmj.png";
let autoFailImg = "https://i.imgur.com/lns4fhz.png";
let cultistImg = "https://i.imgur.com/VzhJJaH.png";
let tabletImg = "https://i.imgur.com/1plY463.png";
let elderThingImg = "https://i.imgur.com/ttnspKt.png";

let minus5 = 0;
let minus4 = 0;
let minus3 = 0;
let minus2 = 0;
let minus1 = 0;
let zero = 0;
let plus1 = 0;
let skull = 0;
let elderSign = 0;
let autoFail = 0;
let cultist = 0;
let tablet = 0;
let elderThing = 0;
let skullValue = 0;
let cultistValue = 0;
let elderThingValue = 0;
let tabletValue = 0;
let elderSignValue = 0;

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
    skullValue = 0;
    cultistValue = 0;
    elderThingValue = 0;
    tabletValue = 0;
    elderSignValue = 0;
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
    $("#skullvalue").val(0);
    $("#cultistvalue").val(0);
    $("#signvalue").val(0);
    $("#thingvalue").val(0);
    $("#tabletvalue").val(0);
  }

  function draw() {
    getTotal() > 0
      ? $(".chance-header").text("Chance")
      : $(".chance-header").text("");
    $(".minus5").empty();
    $(".chance-5").empty();
    let cminus5 = calculateChance("minus5")
      ? Math.round(calculateChance("minus5") * 10) / 10 + " %"
      : "";
    let pminus5 = $("<p class='chance'></p>").text(cminus5);
    pminus5.appendTo(".chance-5");
    for (let i = 0; i < minus5; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", minus5Img);
      img.appendTo(".minus5");
    }
    if (minus5 === 0) {
      $(".display-rows-5").css("visibility", "collapse");
    } else {
      $(".display-rows-5").css("visibility", "visible");
    }
    $(".minus4").empty();
    $(".chance-4").empty();
    let cminus4 = calculateChance("minus4")
      ? Math.round(calculateChance("minus4") * 10) / 10 + " %"
      : "";
    let pminus4 = $("<p class='chance-text'></p>").text(cminus4);
    pminus4.appendTo(".chance-4");
    for (let i = 0; i < minus4; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", minus4Img);
      img.appendTo(".minus4");
    }
    if (minus4 === 0) {
      $(".display-rows-4").css("visibility", "collapse");
    } else {
      $(".display-rows-4").css("visibility", "visible");
    }
    $(".minus3").empty();
    $(".chance-3").empty();
    let cminus3 = calculateChance("minus3")
      ? Math.round(calculateChance("minus3") * 10) / 10 + " %"
      : "";
    let pminus3 = $("<p class='chance-text'></p>").text(cminus3);
    pminus3.appendTo(".chance-3");
    for (let i = 0; i < minus3; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", minus3Img);
      img.appendTo(".minus3");
    }
    if (minus3 === 0) {
      $(".display-rows-3").css("visibility", "collapse");
    } else {
      $(".display-rows-3").css("visibility", "visible");
    }
    $(".minus2").empty();
    $(".chance-2").empty();
    let cminus2 = calculateChance("minus2")
      ? Math.round(calculateChance("minus2") * 10) / 10 + " %"
      : "";
    let pminus2 = $("<p class='chance-text'></p>").text(cminus2);
    pminus2.appendTo(".chance-2");
    for (let i = 0; i < minus2; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", minus2Img);
      img.appendTo(".minus2");
    }
    if (minus2 === 0) {
      $(".display-rows-2").css("visibility", "collapse");
    } else {
      $(".display-rows-2").css("visibility", "visible");
    }
    $(".minus1").empty();
    $(".chance-1").empty();
    let cminus1 = calculateChance("minus1")
      ? Math.round(calculateChance("minus1") * 10) / 10 + " %"
      : "";
    let pminus1 = $("<p class='chance-text'></p>").text(cminus1);
    pminus1.appendTo(".chance-1");
    for (let i = 0; i < minus1; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", minus1Img);
      img.appendTo(".minus1");
    }
    if (minus1 === 0) {
      $(".display-rows-1").css("visibility", "collapse");
    } else {
      $(".display-rows-1").css("visibility", "visible");
    }
    $(".zero").empty();
    $(".chance0").empty();
    let c0 = calculateChance("zero")
      ? Math.round(calculateChance("zero") * 10) / 10 + " %"
      : "";
    let p0 = $("<p class='chance-text'></p>").text(c0);
    p0.appendTo(".chance0");
    for (let i = 0; i < zero; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", zeroImg);
      img.appendTo(".zero");
    }
    if (zero === 0) {
      $(".display-rows-0").css("visibility", "collapse");
    } else {
      $(".display-rows-0").css("visibility", "visible");
    }
    $(".plus1").empty();
    $(".chanceplus1").empty();
    let cplus1 = calculateChance("plus1")
      ? Math.round(calculateChance("plus1") * 10) / 10 + " %"
      : "";
    let pplus1 = $("<p class='chance-text'></p>").text(cplus1);
    pplus1.appendTo(".chanceplus1");
    for (let i = 0; i < plus1; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", plus1Img);
      img.appendTo(".plus1");
    }
    if (plus1 === 0) {
      $(".display-rows-plus1").css("visibility", "collapse");
    } else {
      $(".display-rows-plus1").css("visibility", "visible");
    }
    $(".cultist").empty();
    $(".chancecultist").empty();
    let cc = calculateChance("cultist")
      ? Math.round(calculateChance("cultist") * 10) / 10 + " %"
      : "";
    let pc = $("<p class='chance-text'></p>").text(cc);
    pc.appendTo(".chancecultist");
    for (let i = 0; i < cultist; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", cultistImg);
      img.appendTo(".cultist");
    }
    if (cultist === 0) {
      $(".display-rows-cultist").css("visibility", "collapse");
    } else {
      $(".display-rows-cultist").css("visibility", "visible");
    }
    $(".skull").empty();
    $(".chanceskull").empty();
    let csk = calculateChance("skull")
      ? Math.round(calculateChance("skull") * 10) / 10 + " %"
      : "";
    let psk = $("<p class='chance-text'></p>").text(csk);
    psk.appendTo(".chanceskull");
    for (let i = 0; i < skull; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", skullImg);
      img.appendTo(".skull");
    }
    if (skull === 0) {
      $(".display-rows-skull").css("visibility", "collapse");
    } else {
      $(".display-rows-skull").css("visibility", "visible");
    }
    $(".thing").empty();
    $(".chancething").empty();
    let ct = calculateChance("thing")
      ? Math.round(calculateChance("thing") * 10) / 10 + " %"
      : "";
    let pt = $("<p class='chance-text'></p>").text(ct);
    pt.appendTo(".chancething");
    for (let i = 0; i < elderThing; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", elderThingImg);
      img.appendTo(".thing");
    }
    if (elderThing === 0) {
      $(".display-rows-thing").css("visibility", "collapse");
    } else {
      $(".display-rows-thing").css("visibility", "visible");
    }
    $(".tablet").empty();
    $(".chancetablet").empty();
    let cta = calculateChance("tablet")
      ? Math.round(calculateChance("tablet") * 10) / 10 + " %"
      : "";
    let pta = $("<p class='chance-text'></p>").text(cta);
    pta.appendTo(".chancetablet");
    for (let i = 0; i < tablet; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", tabletImg);
      img.appendTo(".tablet");
    }
    if (tablet === 0) {
      $(".display-rows-tablet").css("visibility", "collapse");
    } else {
      $(".display-rows-tablet").css("visibility", "visible");
    }
    $(".fail").empty();
    $(".chancefail").empty();
    let cf = calculateChance("fail")
      ? Math.round(calculateChance("fail") * 10) / 10 + " %"
      : "";
    let pf = $("<p class='chance-text'></p>").text(cf);
    pf.appendTo(".chancefail");
    for (let i = 0; i < autoFail; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", autoFailImg);
      img.appendTo(".fail");
    }
    if (autoFail === 0) {
      $(".display-rows-fail").css("visibility", "collapse");
    } else {
      $(".display-rows-fail").css("visibility", "visible");
    }
    $(".sign").empty();
    $(".chancesign").empty();
    let csi = calculateChance("sign")
      ? Math.round(calculateChance("sign") * 10) / 10 + " %"
      : "";
    let psi = $("<p class='chance-text'></p>").text(csi);
    psi.appendTo(".chancesign");
    for (let i = 0; i < elderSign; i++) {
      let img = $("<img class='smaller'>");
      img.attr("src", elderSignImg);
      img.appendTo(".sign");
    }
    if (elderSign === 0) {
      $(".display-rows-sign").css("visibility", "collapse");
    } else {
      $(".display-rows-sign").css("visibility", "visible");
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
    let total = getTotal();
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
    drawChart();
    calculateMean();
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
    drawChart();
    calculateMean();
  });

  $(".clearBtn").click(function () {
    clear();
  });

  $(".valueMinusBtn").click(function () {
    switch ($(this).val()) {
      case "skull":
        if (skullValue <= -5) break;
        skullValue -= 1;
        $("#skullvalue").val(skullValue);
        break;
      case "cultist":
        if (cultistValue <= -5) break;
        cultistValue -= 1;
        $("#cultistvalue").val(cultistValue);
        break;
      case "thing":
        if (elderThingValue <= -5) break;
        elderThingValue -= 1;
        $("#thingvalue").val(elderThingValue);
        break;
      case "tablet":
        if (tabletValue <= -5) break;
        tabletValue -= 1;
        $("#tabletvalue").val(tabletValue);
        break;
      case "sign":
        if (elderSignValue <= -5) break;
        elderSignValue -= 1;
        $("#signvalue").val(elderSignValue);
        break;
      default:
        break;
    }
    drawChart();
    calculateMean();
  });

  $(".valuePlusBtn").click(function () {
    switch ($(this).val()) {
      case "skull":
        if (skullValue >= 5) break;
        skullValue += 1;
        $("#skullvalue").val(skullValue);
        break;
      case "cultist":
        if (cultistValue >= 5) break;
        cultistValue += 1;
        $("#cultistvalue").val(cultistValue);
        break;
      case "thing":
        if (elderThingValue >= 5) break;
        elderThingValue += 1;
        $("#thingvalue").val(elderThingValue);
        break;
      case "tablet":
        if (tabletValue >= 5) break;
        tabletValue += 1;
        $("#tabletvalue").val(tabletValue);
        break;
      case "sign":
        if (elderSignValue >= 5) break;
        elderSignValue += 1;
        $("#signvalue").val(elderSignValue);
        break;
      default:
        break;
    }
    drawChart();
    calculateMean();
  });

  function tmp() {
    let values = {
      "-5": Array(minus5).fill(-5),
      "-4": Array(minus4).fill(-4),
      "-3": Array(minus3).fill(-3),
      "-2": Array(minus2).fill(-2),
      "-1": Array(minus1).fill(-1),
      "0": Array(zero).fill(0),
      "1": Array(plus1).fill(1),
      "2": [],
      "3": [],
      "4": [],
      "5": [],
    };

    for (const key of Object.keys(values)) {
      if (skullValue.toString() == key) {
        values[key] = values[key].concat(Array(skull).fill(parseInt(key)));
      }
      if (cultistValue.toString() == key) {
        values[key] = values[key].concat(Array(cultist).fill(parseInt(key)));
      }
      if (elderThingValue.toString() == key) {
        values[key] = values[key].concat(Array(elderThing).fill(parseInt(key)));
      }
      if (tabletValue.toString() == key) {
        values[key] = values[key].concat(Array(tablet).fill(parseInt(key)));
      }
      if (elderSignValue.toString() == key) {
        values[key] = values[key].concat(Array(elderSign).fill(parseInt(key)));
      }
    }
    return values;
  }

  function calculateMean() {
      let data = tmp();
      let list = [];

      for (const key of Object.keys(data)) {
          list = [...list, ...data[key]]
      }

      let sum = list.reduce((a, b) => a + b, 0);
      let roundedMean = Math.round(sum / list.length * 10) / 10
      $("#mean").text(roundedMean);
  }

  function drawChart() {
    let data = {
      datasets: [
        {
          data: [],
          backgroundColor: [
            "#0074D9",
            "#FF4136",
            "#2ECC40",
            "#FF851B",
            "#7FDBFF",
            "#B10DC9",
            "#FFDC00",
            "#001f3f",
            "#39CCCC",
            "#01FF70",
            "#85144b",
            "#F012BE",
            "#3D9970",
            "#111111",
            "#AAAAAA",
          ],
        },
      ],
      labels: [],
    };

    const tmpData = tmp();
    for (const key of Object.keys(tmpData)) {
      if (tmpData[key].length) {
        data.datasets[0].data.push(tmpData[key].length);
        data.labels.push(key);
      }
    }

    if (autoFail > 0) {
      data.datasets[0].data.push(autoFail);
      data.labels.push("Auto Fail");
    }

    let ctx = document.getElementById("pieChart").getContext("2d");
    let chart = new Chart(ctx, {
      plugins: [ChartDataLabels],
      type: "doughnut",
      data: data,
      options: {},
    });
  }
});
