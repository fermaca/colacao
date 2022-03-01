

// Get values and print elements
var ticketSlider = document.getElementById("ticket");
var ticketSliderOutput = document.getElementById("ticket-value");
var feeSlider = document.getElementById("fee");
var feeSliderOutput = document.getElementById("fee-value");
var totalOutput = document.getElementById("total-value");
var deliveryCheckbox = document.getElementById("delivery");
// Print default value
var sum = Number(ticketSlider.value) + Number(feeSlider.value);

ticketSliderOutput.innerHTML = ticketSlider.value;
feeSliderOutput.innerHTML = feeSlider.value;
totalOutput.innerHTML = Number(ticketSlider.value) + Number(feeSlider.value);

// Print value when sliders value changes
ticketSlider.oninput = function() {
  ticketSliderOutput.innerHTML = this.value;
  totalOutput.innerHTML = Number(ticketSlider.value) + Number(feeSlider.value);
  if ($("#delivery").is(':checked')) totalOutput.innerHTML = totalOutput.innerHTML/2;
}
feeSlider.oninput = function() {
  feeSliderOutput.innerHTML = this.value;
  totalOutput.innerHTML = Number(ticketSlider.value) + Number(feeSlider.value);
  if ($("#delivery").is(':checked')) totalOutput.innerHTML = totalOutput.innerHTML/2;
}

deliveryCheckbox.oninput = function() {
    ticketSliderOutput.innerHTML = this.value;
    totalOutput.innerHTML = Number(ticketSlider.value) + Number(feeSlider.value);
    if ($("#delivery").is(':checked')) totalOutput.innerHTML = totalOutput.innerHTML/2;
  }



