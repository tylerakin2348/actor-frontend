<template>
  <div id="clock_loading" :class="color_scheme">
    <div class="clockbox">
        <svg id="clock" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 600 600">
         <!-- <circle class="circle" cx="300" cy="300" r="253.9"/> -->
        <g id="face">
            <!-- <path class="hour-marks" d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"/> -->
            <circle class="mid-circle" cx="300" cy="300" r="16.2"/>
        </g>
        <g id="hour">
            <path class="hour-arm" d="M300.5 298V142"/>
            <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
        </g>
        <g id="minute">
            <path class="minute-arm" d="M300.5 298V67"/>
            <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
        </g>
        <g id="second">
            <path class="second-arm" d="M300.5 350V55"/>
            <circle class="sizing-box" cx="300" cy="300" r="253.9"/>
        </g>
        </svg>
    </div><!-- .clockbox -->
      Loading, Please wait
  </div>
</template>

<script>
// This component is built around the code from the following codepen:
// https://codepen.io/mor10/pen/XjRVoY
export default {
    name: 'clockLoading',
    props: ['color_scheme'],
    
  data() {
    return {
      acting_credits: [],
      name: [],
      relationship: [],
      errors: [],
    };
  },
  mounted() {
    const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);

  },
};
</script>


<style scoped lang="scss">
    $lightColorScheme: #fff;
    $darkColorScheme: #000;

    svg {
        opacity: 1;
    }
  #clock_loading {
    color: white;
    z-index: 1;
  }

  /* Layout */
.main {
    display: flex;
    padding: 2em;
    height: 90vh;
    justify-content: center;
    align-items: middle;
}

.clockbox,
#clock {
    height: 100%;
}

/* Clock styles */
.circle {
    fill: none;
    stroke: #fff;
    stroke-width: 9;
    stroke-miterlimit: 10;
}

.mid-circle {
    fill: #fff;
}

.hour-marks {
    fill: none;
    stroke: #fff;
    stroke-width: 9;
    stroke-miterlimit: 10;
}

.hour-arm {
    fill: none;
    stroke: #fff;
    stroke-width: 17;
    stroke-miterlimit: 10;
}

.minute-arm {
    fill: none;
    stroke: #fff;
    stroke-width: 11;
    stroke-miterlimit: 10;
}

.second-arm {
    fill: none;
    stroke: #fff;
    stroke-width: 4;
    stroke-miterlimit: 10;
}

.color-scheme-light {
    .circle,
    .mid-circle,
    .hour-marks,
    .hour-arm,
    .minute-arm,
    .second-arm {
        stroke: $lightColorScheme;
    }
}

.color-scheme-dark {
    .circle,
    .mid-circle,
    .hour-marks,
    .hour-arm,
    .minute-arm,
    .second-arm {
        stroke: $darkColorScheme;
    }
}

/* Transparent box ensuring arms center properly. */
.sizing-box {
    fill: none;
}

/* Make all arms rotate around the same center point. */
/* Optional: Use transition for animation. */
#hour,
#minute,
#second {
    transform-origin: 300px 300px;
    transition: transform .5s ease-in-out;
}

</style>
