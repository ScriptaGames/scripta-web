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

We are exited to announce [Zorbio](http://zorb.io) Remastered!  This is the largest set of
updates that we've made to the game since we launched 1 year ago.
Highlights include new original sound track composed especially for
Zorbio, revamped UI and logo, new skins, natural AI curve paths,
steering helper, food chains, and more!

[Play Zorbio now][zorbio], or read on about the updates.

<!-- more -->

<!-- toc -->

## New Features

### Original Sound Track

We had the great privilage to work with [V E U S K E M I N I 雄 志](https://www.youtube.com/channel/UC2ebq32zwRC5O6kMJXy32Jg) in
Ludum Dare 38 on [Pity About Earth](/articles/pity-about-earth/). So,
we were super exited when he sent us the pictures below of progress
shots for an original sound track he was working on for Zorbio!
He has a great talent for composing music to fit the game, and we think
he done just that with the new Zorbio OST.  Zorbio use to have no music
at all and it really needed this to make it a complete game.  Try it
with headphones for the best experience!

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

It's been to long since we added new skins.  Part of the reason we've
not added more skins is that until now adding a new skin wasn't easy.
But now we've improved our skin system so that we can add a lot more
skins in the future.  And what better to kick off Remastered than with
a set of planet based skins!  Become your favorite planet and dominate
the other Zorbs!  With the skins we wanted to go for a more artistic
and cartoony feel, rather than super relealistic.  You'll notice that
some prominent planets and celestials are missing from this planet line
up, watch for these in the future!

<img alt="Jupiter skin" width="395" src="{% asset_path jupiter.png %}">
<img alt="Mars skin"    width="395" src="{% asset_path mars.png %}">
<img alt="Venus skin"   width="395" src="{% asset_path venus.png %}">
<img alt="Neptune skin" width="395" src="{% asset_path neptune.png %}">
<img alt="Uranus skin"  width="395" src="{% asset_path uranus.png %}">
<img alt="skin select"  width="395" src="{% asset_path choose_skin.gif %}">


### Natural AI Curve Paths

Zorbio is populated with some AI spheres to make the world more interesting.
These AIs use to pick a random point fly to it in a straight line, then pick
a new point, and instantly change directions and fly straight to that point.
This made for very un-interesting zig-zag path pattern.  In Remastered
we've given the AI spheres much more natural curving and varying paths.
They fly so naturally now that they are almost indistinguishable from
human players.

Here is a close up of how the AI spheres move along their path.  Here
they are all going the same direction as an example,  in game they change
direction and no AI sphere flies on the same curve.  Also there is
an Easter Egg hidden in this video, can you spot it?  And can you figure
out how to unlock it?  It's in the game right now!
<img alt="AI curve paths"  width="800" src="{% asset_path ai_curves.gif %}">

This screenshot shows their randomized paths:
<img alt="Random AI curves"  src="{% asset_path more_ai_curves_screenshot.png %}">

Here is a development screenshot of when I was testing out different increasing
scale of the same knot curves and it made an interesting shape:
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

Zorbio has an persistent Leaderboard, but before Remastered it was hidden
away.  We thought it would be fun to put the daily high scores right
on the front page for everyone to see your greatness!  Can you get the
daily top score?

<img alt="Daily high scores"  src="{% asset_path daily_highscores.png %}">


## Fixes

Remastered also includes many bug fixes, and performance enhancments.

### CPU Optimizations

Shortly after releasing Zorbio Remastered to production we noticed our
servers CPU was pegged at over 100% this definitely was a problem!
So we did some node.js CPU profiling and were able to optimize the performance
to better than before Remastered was released.  This means our servers
can handle more players than before and less lag for you!
<img alt="CPU Optimizations"  src="{% asset_path cpu_performance_increase.jpg %}">

## Thank you! &lt;3

If you've read this far thank you!  We are so grateful to all of our
players. This &lt;3 is for you!

<img src="{% asset_path heart.gif %}">

[Play Zorb.io](http://zorb.io)


[zorbio]: http://zorb.io
