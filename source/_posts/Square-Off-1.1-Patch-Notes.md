---
title: Square Off 1.1 Patch Notes
date: 2017-04-14 22:46:55
author: Michael
categories:
  - Square Off
tags:
  - square-off
  - ludum-dare
  - ld35
  - patch-notes
---

It's been almost a year since we built and released Square Off during the
haphazard weekend of [Ludum Dare 35][ldsq].  Now, in our first patch since that
weekend Square Off gets some much-needed love.  Here's what to look forward to!

<img src="{% asset_path newdisc.jpg %}">

<!-- more -->

### Improvements:

 - Made the game installable on Android phones.  Visit
   [http://sqoff.com][sqoff] in Chrome, then go to Options (&#8942;) and select
   "Install web app".
 - Improved the appearance of the disc's trail.  It's no longer a smoky blur.
 - The block hover icon only appears on cells you are allowed to place blocks
   on.  In other words, it won't appear in the safe zone near your opponent's
   goal.
 - The game will now size itself appropriately based on your screen size.  This
   is especially helpful on mobile devices.
 - A few small visual tweaks, for example increased the width of the grid
   lines, to improve appearance at all screen sizes and reduce moire.
 - Moved players' names to the center to better fit into portrait screen
   orientations.
 - While searching for an opponent, the game explains what is happening and
   shows how many other players are active.
 - The disc motion is updated at 60 fps instead of 30 fps, smoothing out the
   motion.
 - For better responsiveness, blocks are placed on mousedown instead of
   mouseup.

### Bugfixes:

 - Resolved a bug where the block hover icon would appear on more than one
   block after a quick mouse motion.

[Play Square Off][sqoff], if you haven't yet.

[ld]: http://ludumdare.com/compo/
[ldsq]: http://ludumdare.com/compo/ludum-dare-35/?action=preview&uid=91554
[source]: https://github.com/ScriptaGames/SquareOff
[jared]: https://twitter.com/caramelcode
[me]: https://twitter.com/mwcz
[sqoff]: http://sqoff.com/
