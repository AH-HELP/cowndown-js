
// Set the date we're counting down to
const countDownDate = new Date("Oct 25, 2020 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(() => {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Results Get Scic
    document.getElementById("demo").innerHTML = `
      <div> 
        <h1>PHB2 SCIC COMING IN...</h1>
        <h3 class="displayDate"> 
            ${days}d 
            ${hours}h
            ${minutes}m 
            ${seconds}s
        </h3>
      </div>
  `;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "SCIC WOW!";
    }
}, 1000);