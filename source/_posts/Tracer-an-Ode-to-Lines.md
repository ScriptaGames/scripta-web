---
title: 'Tracer, an Ode to Lines'
permalink: tracer-ld37
author: Michael
categories:
  - Tracer
tags:
  - tracer
  - ludum-dare
  - ld37
date: 2017-01-25 19:00:00
---

During Ludum Dare 37, our second game jam,
[Jared](https://twitter.com/caramelcode) and [I](https://twitter.com/mwcz)
created Tracer.  Read about how it was made and give it [a
spin](http://scripta.co/tracer/).

[{% asset_img "16.jpg" "screenshot 1" %}](http://scripta.co)

<!-- more -->

Tracer was our creation for Ludum Dare 37\.  Ludum Dare is a “game jam”; a
friendly competition where developers create a videogame from scratch during a
hairbraned weekend.

I wouldn’t blame you if you want to skip all this and go ahead and play the
game…

[Play it!](http://scripta.co/tracer/)

## The idea

First, a bit of backstory.  In our first game, [Zorbio](http://zor.bio/) (an _ode to
spheres_), players leave short contrails while flying through space.

{% asset_img "zorbio.jpg" "player sphere leaving trails in Zorbio" %}

The trails are essentially a weathervane that gives you a visual hint about
where other players are headed.  Short trails suit that purpose, but we found
it irresistable to increase the length of the trails dramatically, just to see
what would happen.  The result, despite not being a good fit for Zorbio, was
_awesome_.  It looks something like this:

{% asset_img "12.jpg" "screenshot 1" %}

We knew there was game potential lurking somewhere in those long, curvy 3D
trails.  A 3D multiplayer lightcycle game perhaps?  Our Ludum Dare 35 game,
Square Off (our _ode to squares_), had been multiplayer, so we knew how much
complexity networking adds to an already tight timeline.

Then Jared had a brilliant idea: **3D connect the dots**.

{% asset_img "14.jpg" "screenshot 1" %}

72 hours later, we had a game, which you may now [play](http://scripta.co/tracer/).

You can also [view source](https://github.com/ScriptaGames/Tracer), if you’re into that kind of thing.

## Notes of appreciation

Our thanks to YOU, and also: mr.doob, Cassondra, Jessica, Rowen, Elliott.

Special thanks to Jaume Elias ([@thespite)](https://twitter.com/thespite)), an
extraordinary real-time graphics programmer.  Two of his projects were
essential for creating Tracer, [THREE.MeshLine](https://github.com/spite/THREE.MeshLine), and an [algorithm
for spiraling through a 3D mesh looking for points](https://github.com/spite/THREE.MeshLine/blob/master/demo/js/main-shape.js#L90).  Jaume is
always an inspiration.  Check out his work at [clicktorelease.com](https://www.clicktorelease.com/).

## Development screenshots

Lastly, here’s a batch of some mid-development screenshots showing Tracer
during its awkward adolescent phase.

{% asset_img "1.jpg" "screenshot 1" %}

{% asset_img "2.jpg" "screenshot 1" %}

{% asset_img "3.jpg" "screenshot 1" %}

{% asset_img "4.jpg" "screenshot 1" %}

{% asset_img "5.jpg" "screenshot 1" %}

{% asset_img "6.jpg" "screenshot 1" %}

{% asset_img "7.jpg" "screenshot 1" %}

{% asset_img "8.jpg" "screenshot 1" %}

{% asset_img "9.jpg" "screenshot 1" %}

{% asset_img "10.jpg" "screenshot 1" %}

{% asset_img "11.jpg" "screenshot 1" %}

{% asset_img "13.jpg" "screenshot 1" %}

{% asset_img "15.jpg" "screenshot 1" %}
