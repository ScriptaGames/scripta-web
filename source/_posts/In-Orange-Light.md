---
title: In Orange Light
date: 2017-07-31 22:14:51
permalink: in-orange-light
tags:
  - pity-about-earth
  - ludum-dare
  - ld39
categories:
  - In Orange Light
author: Michael
---

As I descend from the mountain peak, I contemplate the Winter.

This past weekend was Ludum Dare 39.  After three Ludum Dare Jam (easy mode) entries, I'd been looking for a chance to try out the compo (hard mode).  Since Jared had to sit out this time, it was the perfect opportunity.

9pm, the theme arives.  "Running out of power"

<img src="{% asset_path in-orange-light-scenery.png %}">

Starting with a set of rectangles, and using a photo of the Blue Ridge Mountains as a reference, I tweaked vector paths into something resembling mountains.

<img src="{% asset_path making-mountains.gif %}">


## Inspirations

Three years ago, across a dark, blue-hued, and screen-filled room, a particular screen caught my eye.  My girlfriend's (now wife's) eye was caught by the same screen, and we went to investigate.

<img src="{% asset_path kr0-emp.jpg %}">

We were visiting the Indie Game Revolution exhibit at the EMP museum in Seattle. and on the screen was Scene I, Act I of [Kentucky Route Zero][kr0].  It took me three years, but I finally rediscovered KR0, and having (well, nearly) finished it, I'm ready to call it a masterpiece.  The game's atmosphere is so rich, so effortlessly gripping, that *actually being there* would be less compelling.

<img src="{% asset_path kr0.jpg %}">

And they accomplished all that with 3D models my Amiga 500 could have rendered (sans lighting).  

<img src="{% asset_path placeholder-art.png %}">
<img src="{% asset_path sky.png %}">

{% asset_path daynight.mp4 %}

[{% asset_img logo-square.png %}<br>Play Pity About Earth][play] <br>

<button id="generator">Generator</button>
<button id="heater">Heater</button>

<script src="{% asset_path beepbox_synth.js %}"></script>
<script>
    var generator = new beepbox.Synth("5s7k0l00e00t7m1a7g00j0i1r1w81445111f30222000d11000101c00023000h40000000v20214050o3000b8p1xkNVAWE6CCIdttddsB1xkn3qmrx-GabxL0");
    var heater = new beepbox.Synth("5s7k0l00e00t7m1a7g00j0i1r1w81445111f30222000d11000101c00023000h40000000v20214050o3000bgp1xkNVAWE6CCIdttddsB1xkn3qmrx-GabxL0");

    var genEl = document.querySelector('#generator');
    var heatEl = document.querySelector('#heater');

    genEl.addEventListener('click', function () {
        if (generator.playing) {
            generator.pause();
        }
        else {
            generator.play();
        }
    });
    heatEl.addEventListener('click', function () {
        if (heater.playing) {
            heater.pause();
        }
        else {
            heater.play();
        }
    });
</script>



[kr0]: http://kentuckyroutezero.com/
[iol]: http://scripta.co/in-orange-light/
[ldiol]: https://ldjam.com/events/ludum-dare/39/in-orange-light
