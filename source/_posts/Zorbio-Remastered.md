---
title: Zorb.io Remastered
date: 2017-11-23 11:31:00
permalink: Zorbio-Remastered
tags:
  - zorbio
  - iogames
  - webgl
  - gamedev
  - threejs
  - remastered
categories:
  - Zorbio
author: Jared Sprague
---

<img alt="Zorbio Header" src="{% asset_path zorbio_header_zoom_reddit.png %}">

We are exited to announce Zorbio Remastered!  This is the largest set of
updates that we've made to the game since we launched 1 year ago.
Highlights include new original sound track composed especially for
Zorbio, revamped UI and logo, new skins, natural AI curve paths,
steering helper, food chains, and more!  Read on to learn the details
about all the updates.

[Play Zorbio now][zorbio], or read on about the updated.

<!-- more -->

<!-- toc -->

## New Features

### Original Sound Track

<iframe width="800" height="450" src="https://www.youtube.com/embed/K81oyT1X8Jo" frameborder="0" allowfullscreen></iframe>

<img alt="zorbio ost wip" width="282" src="{% asset_path zorbio_ost_wip.jpg %}"> <img alt="zorbio track wip"  width="513" src="{% asset_path zorbio_track.jpg %}">



### New Logo and Revamped UI

We went down a *lot* of different paths in our quest for a new logo.  The theme we aimed for was glowy neon with a hint of the 80's.

<img alt="zorbio final logo" src="{% asset_path logo-ideas.jpg %}">

Roughly twenty iterations later, here is the new Zorbio logo.

<img alt="zorbio final logo" src="{% asset_path logo.png %}">

The live in-game logo is animated.

<video loop controls autoplay width="1008" height="624">
<source src="{% asset_path ui_logo.webm %}" type="video/webm"></source>
</video>


### New Skins

<img alt="Jupiter skin" width="395" src="{% asset_path jupiter.png %}">
<img alt="Mars skin"    width="395" src="{% asset_path mars.png %}">
<img alt="Venus skin"   width="395" src="{% asset_path venus.png %}">
<img alt="Neptune skin" width="395" src="{% asset_path neptune.png %}">
<img alt="Uranus skin"  width="395" src="{% asset_path uranus.png %}">
<img alt="skin select"  width="395" src="{% asset_path choose_skin.gif %}">


### Natural AI Curve Paths

<img alt="AI curve paths"  width="800" src="{% asset_path ai_curves.gif %}">
<img alt="Random AI curves"  src="{% asset_path more_ai_curves_screenshot.png %}">
<img alt="Fun with curve paths"  src="{% asset_path many_knot_curves.png %}">


### Steering Helper

Experienced players have mastered Zorbio's steering system, but it remains a difficult learning curve for new players.  The cornerstone of the steering system is centering your mouse to fly straight.  To help teach that, the game will detect when a new players' steering patterns are erratic and suggest they center the mouse.

<img alt="Steering toast"  src="{% asset_path steering_toast.png %}">

In addition, the game has a new custom cursor which dynamically rotates to indicate the direction and sharpness of a players' steering.

<video loop controls autoplay width="1008" height="624">
<source src="{% asset_path steering_cursor.webm %}" type="video/webm"></source>
</video>


### Food Chains

For the entirety of Zorbio's existence, food particles have been randomly placed throughout the game world.  This encouraged players to take a somewhat haphazard flight path.  Players would eat a piece of food, then fly to the whichever piece of food appeared closest, then repeat ad nauseum.  Now, a new gameplay pattern has arrived: **food chains**.

Piggybacking on the [natural AI paths](#natural-ai-curve-paths) above, food chains are sequenced of food organized into winding chains.  Eating an entire chain will earn you a lot of size, but it will challenge your steering skills.  And beware, other players can also see the chain, so they'll know where you're headed!

<img alt="Food chains"  src="{% asset_path food_chains.png %}">


### Daily Leaderboard

<img alt="Daily high scores"  src="{% asset_path daily_highscores.png %}">


## Fixes


### CPU Optimizations
<img alt="CPU Optimizations"  src="{% asset_path cpu_performance_increase.jpg %}">


### Relaxed Name Filter


### Mobile Steering


## Thank you! &lt;3

<img src="{% asset_path heart.gif %}">


[zorbio]: http://zorb.io
