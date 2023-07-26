const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute(`data-target`);
    // console.log(targetCount);
    const startingCount = Number(counter.innerHTML);

    const incr = targetCount / 100;
    if (startingCount < targetCount) {
      counter.innerHTML = `${Math.round(startingCount + incr)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };

  updateCounter();
});

// unary opertor  for convert the string into number ( + )

// var n = +str;
//  parseFloat for convert the sting into number

// parseFloat

// var n = parseFloat(str)

// Number is used to convert the string into number

// Number()

// var n = parseFloat(str)
