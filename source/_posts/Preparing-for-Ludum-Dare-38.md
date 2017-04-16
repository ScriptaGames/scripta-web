---
title: Preparing for Ludum Dare 38
date: 2017-04-15 00:01:56
author: Michael
tags:
  - ludum-dare
  - ld38
---

Ludum Dare 38 is currently hurtling through space on a direct trajectory with
next weekend.  Impact is estimated at 9PM on Friday, and the result will be a
chaotic, harebrained, and fun-filled weekend.  Coincidentally, it is also
Science March slash Earth Day weekend.  Here's how we're preparing.

<!-- more -->

First, for anyone unfamiliar...

> Ludum Dare is one of the worlds largest and longest running Game Jam events.
> Every 4 months, we challenge creators to make a game from scratch in a
> weekend.

Jared and I have participated twice, in LD35 ([Square Off][sqoff], placed 64th
in Fun) and LD37 ([Tracer][tracer], placed 5th in Innovation).

With so little time to work, preparation is very important.  Only so much
preparation is allowed, however.  Any direct work on the game we'll be making
can't begin until Friday evening, but putting our tools in order is allowed.
The more comfortable we are with the tooling, the more efficiently we can work.

Here are some of my pet rapid development principles.  They're ever-evolving
and some specific to Web games.

## Rapid development checklist

### 1. No build

Yes, we all love front-end builds.  Yes, [npm scripts][npm-scripts],
[gulp][gulp], [grunt][grunt], and [broccoli][broc] are all the best build tool
ever.  Front-end builds provide a lot of power and flexibility.

But they're not free.  Setup takes time, debugging occasional oddities takes
time, and most importantly, the builds themselves take time.  Eliminating all
build steps is a big step towards **optimizing the feedback loop**.

Fortunately, browser support for [ES6][es6] has arrived, allowing us to run ES6
natively with no need to transpile.  The only thing missing is the module
system, forcing us to write `<script>` tags.  It's a small price to pay.  On a
short-lived project like this, manual management of script tags is a cakewalk.

I do include a babel transpilation script to run before deploying the game, but
it's not needed during development.

### 2. Browsersync/LiveReload

Step two in **optimizing the feedback loop** is much easier.  Use
[Browsersync][bs] or [LiveReload][lr].  When you save a file, the browser will
refresh immediately to reflect the changes.  This will save you from invoking
`Alt+Tab F5` five-hundred-thousand times during the weekend.

### 3. Focus on one thing at a time

With so much to do, staying focused is very difficult.  I'm no good at it, but
I hope Jared won't mind me saying that he's a paragon of focus.

Sticking to one thing at a time is simply more time-efficient than riffing.
Avoid riffing.  Riffing is stream of consciousness programming, hopping from
one minor feature/tweak/bug to the next as soon as you think of it.  It's like
[Yak shaving][yak] but not nested.  Also, unlike Yak shaving, riffing is
entirely avoidable through discipline.

It helps me to write down (on paper) what I'm about to work on.  "Create
placeholders for all sprites", for example.

### 4. The obvious ones

Know your tools.  Get enough sleep.  Drink enough water.  Eat healthy.  Take a
short walk once in a while.  Make science-themed signs during the week.  Go
outside and get caught up in the Science March (only valid during LD38
weekend!).

{% asset_img "March_for_Science.jpg" "science march logo" %}

---

Hopefully the act of writing these down will influence our efforts this Ludum
Dare weekend.  See you all after the dust clears!

[sqoff]: http://sqoff.com
[tracer]: http://scripta.co/tracer/
[sq-tmpl]: https://github.com/hunttis/phaser-ld-template
[npm-scripts]: https://docs.npmjs.com/cli/run-script
[grunt]: https://gruntjs.com/
[gulp]: http://gulpjs.com/
[broc]: http://broccolijs.com/
[lr]: http://livereload.com/
[bs]: https://www.browsersync.io/
[es6]: https://github.com/lukehoban/es6features
[yak]: http://catb.org/jargon/html/Y/yak-shaving.html
