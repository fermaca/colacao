

// Get initial values from ticket slider
var ticketSlider = document.getElementById("ticket");
var ticket = Number(ticketSlider.value);
var ticketSliderOutput = document.getElementById("ticket-value");
var ticketSliderMax = ticketSlider.max;
var ticketSliderMin = ticketSlider.min;
var ticketSliderInitial = (ticket - ticketSliderMin) * 100 / ticketSliderMax + 1 / 3 * ((ticket - ticketSliderMin) * 100 / ticketSliderMax);
// Get base values from fee slider
var feeSlider = document.getElementById("fee");
var fee = Number(feeSlider.value);
var feeSliderOutput = document.getElementById("fee-value");
var feeSliderMax = feeSlider.max;
var feeSliderMin = feeSlider.min;
// Get checkbox-switch value
var deliveryCheckbox = document.getElementById("delivery");
var deliveryOutput = document.getElementById("delivery-value");
// Country taxes
var tax = 0.21;
// Define variables
var x;
var max;
var y;

// Get track size
var sliderTrackWidth = $(".slider-track").width();

// Load initial slider styles
$("#ticket").parent(".slider-container").children(".slider-tracked").css("width", ticketSliderInitial + "%");
$("#ticket").parent(".slider-container").children(".slider-track").css("left", "calc(" + ticketSliderInitial + "% - " + (sliderTrackWidth * 0.5) + "px)");
$("#fee").parent(".slider-container").children(".slider-tracked").css("width", feeSlider.value * 100 / feeSliderMax + "%");
$("#fee").parent(".slider-container").children(".slider-track").css("left", "calc(" + feeSlider.value * 100 / feeSliderMax + "% - " + (sliderTrackWidth * 0.5) + "px)");

// Load switch initial value
if ($("#delivery").is(':checked')) {
    deliveryOutput.innerHTML = "Si";
}
else {
    deliveryOutput.innerHTML = "No";
}
// Load sliders initial values
ticketSliderOutput.innerHTML = ticketSlider.value + "€";
feeSliderOutput.innerHTML = feeSlider.value + "%";

// Formulas definition
var dtbFee = (4.33 * 1.21).toFixed(2);
var dtbProfit = (ticket - dtbFee).toFixed(2);
var platformsFee = (ticket * fee / 100 * (1 + tax)).toFixed(2);
var platformsProfit = (ticket - platformsFee).toFixed(2);
var totalProfit = -((platformsProfit - dtbProfit) * 1000).toFixed(2);

//Formulas initial values
document.getElementById("platformsFee").innerHTML = platformsFee + "€";
document.getElementById("dtbFee").innerHTML = dtbFee + "€";
document.getElementById("dtbProfit").innerHTML = dtbProfit + "€";
document.getElementById("platformsProfit").innerHTML = platformsProfit + "€";
document.getElementById("totalProfit").innerHTML = totalProfit + "€";


// Print value when sliders value changes

ticketSlider.oninput = function ticketSlider() {
    // Print values
    ticketSliderOutput.innerHTML = this.value + "€";
    // Slider math
    min = Number(this.min)
    max = Number(this.max);
    x = Number(this.value);
    ticket = x;
    y = $(this).parent(".slider-container").children(".slider-tracked");
    z = $(this).parent(".slider-container").children(".slider-track");
    // Call functions to update styles and formulas values
    updateSliderStyleTicket();
    calculations();
}

feeSlider.oninput = function feeSlider() {
    // Print values
    feeSliderOutput.innerHTML = this.value + "%";
    // Slider math
    min = Number(this.min)
    max = Number(this.max);
    x = Number(this.value);
    fee = x;
    y = $(this).parent(".slider-container").children(".slider-tracked");
    z = $(this).parent(".slider-container").children(".slider-track");
    // Call functions to update styles and formulas values
    updateSliderStyleFee();
    calculations();
}

// Print value when switch is toggle
deliveryCheckbox.oninput = function () {
    if ($("#delivery").is(':checked')) {
        deliveryOutput.innerHTML = "Si";
    }
    else {
        deliveryOutput.innerHTML = "No";
    }
    calculations();
    // Avoid console errors if first interaction is with the switch
    if (x != undefined) {

    }
}

// Updates slider styles when values change by type os slider
function updateSliderStyleFee() {
    var trackPosition = x * 100 / max;
    y.css("width", trackPosition + "%");
    z.css("left", "calc(" + trackPosition + "% - " + (sliderTrackWidth * 0.5) + "px)");
}
function updateSliderStyleTicket() {
    var trackPosition = (x - min) * 100 / max + 1 / 3 * ((x - min) * 100 / max);
    y.css("width", trackPosition + "%");
    z.css("left", "calc(" + trackPosition + "% - " + (sliderTrackWidth * 0.5) + "px)");
}

// Calculations
function calculations() {
    var dtbFeeStandar = (2 * 1.21).toFixed(2);
    if ($("#delivery").is(':checked')) {
        var dtbFee = dtbFeeStandar;
    }
    else {
        var dtbFee = (4.33 * 1.21).toFixed(2);
    }
    var dtbProfit = (ticket - dtbFee).toFixed(2);
    var platformsFee = (ticket * fee / 100 * (1 + tax)).toFixed(2);
    var platformsProfit = (ticket - platformsFee).toFixed(2);
    var totalProfit = -((platformsProfit - dtbProfit) * 1000).toFixed(2);

    document.getElementById("platformsFee").innerHTML = platformsFee + "€";
    document.getElementById("dtbFee").innerHTML = dtbFee + "€";
    document.getElementById("dtbProfit").innerHTML = dtbProfit + "€";
    document.getElementById("platformsProfit").innerHTML = platformsProfit + "€";
    document.getElementById("totalProfit").innerHTML = totalProfit + "€";
}

