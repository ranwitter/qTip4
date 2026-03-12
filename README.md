[qTip<sup>4</sup>][qtip4] - Pretty powerful tooltips (a fork of famous qTip2 Plugin compatible with jQuery4+)
================================


## Motivation

[qtip2] is no longer maintained. This Library is a fork of famous [qtip2][qtip2] Plugin compatible with jQuery4+.

**Consider moving to [qTip4][qtip4] library only if you need support for older web applications!**


## Introduction

Introducing&hellip; qTip<sup>4</sup>. The fourth generation of the advanced qTip plugin for the ever popular jQuery framework.

Building on qTip2's user friendly, yet feature rich base, qTip<sup>4</sup> provides you with tonnes of features like
[speech bubble tips][tips] and [imagemap support][imgmap], Without support for older browsers like IE+6 that are no longer in use and best of all... **it's completely free under the MIT license!**

More documentation and information is available at the [GitHub Repository][qtip4].

## Browser support
<div style="text-transform: sub; text-align: center;">
  <img src="https://raw.githubusercontent.com/alrra/browser-logos/main/src/main-desktop-browser-logos.png" title="Browser Support" width="20%" /> 
</div>

## Getting qTip<sup>4</sup>

Grab the latest releases of qTip<sup>4</sup> from the [GitHub Repository][qtip4] using git command.

```
git clone https://github.com/ranwitter/qTip4.git
```

## Building, Testing and Releasing qTip<sup>4</sup>

```
Lifecycle scripts included in qtip4 are:

  start
    grunt
  test
    grunt lint
  preversion
    npm test
  version
    npm run build:stable && npm run version:add
  postversion
    git push --follow-tags && npm publish
  build
    npm install && grunt
  build:all
    grunt all
  build:stable
    grunt all --stable && npm run build:bower
  build:bower
    node generate-bower.json
  version:add
    git add dist bower.json
  recompile
    npm run build:all && git commit dist -m "Recompile distributable files"; git push
```

## Documentation
Take a look at the [documentation][docs] for extensive docs and guides.

## Release History
See the official [Changelog][changelog]

## Questions or problems?
Make sure to check out the [thorough documentation][docs].

## License
Copyright (c) 2011-2020 Craig Michael Thompson. Licensed under the MIT license. *See [here][license] for more details.*

## Special thanks
Big shout-out to ["Cowboy" Ben Alman][cowboy] for providing the [grunt][grunt] build system used by qTip<sup>2</sup>


[styles]: https://github.com/qTip2/qTip2/wiki/Style-Guide
[docs]: https://github.com/qTip2/qTip2/wiki
[changelog]: https://github.com/qTip2/qTip2/wiki/Changelog
[plugins]: https://github.com/qTip2/qTip2/wiki
[tips]: https://github.com/qTip2/qTip2/wiki/Tips
[imgmap]: hhttps://github.com/qTip2/qTip2/wiki/image-map

[license]: http://jquery.org/license

[cowboy]: http://github.com/cowboy
[grunt]: http://github.com/gruntjs/grunt

[wikipedia-cdn]: http://en.wikipedia.org/wiki/Content_delivery_network "Content Delivery Network"
[cdnjs]: http://cdnjs.com/libraries/qtip2/
[jsdelivr]: http://www.jsdelivr.com/#!qtip2
[qtip4]: https://github.com/ranwitter/qTip4/
[qtip2]: https://github.com/qTip2/qTip2/
