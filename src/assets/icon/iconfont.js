;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-backward" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M529.986 486.354L909.744 267.1c21.333-12.317 48 3.079 48 27.713V733.32c0 24.634-26.667 40.03-48 27.713L529.986 541.779c-21.334-12.317-21.334-43.109 0-55.425z"  ></path>' +
    '' +
    '<path d="M82.256 482.221l379.758-219.254c21.333-12.317 48 3.079 48 27.713v438.507c0 24.634-26.667 40.03-48 27.713L82.256 537.646c-21.333-12.316-21.333-43.108 0-55.425z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bars" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M173.708 319.953h673.184c35.347 0 64-28.654 64-64s-28.653-64-64-64H173.708c-35.346 0-64 28.654-64 64s28.653 64 64 64zM846.892 449.717H173.708c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64h673.184c35.347 0 64-28.654 64-64 0-35.346-28.654-64-64-64zM846.892 704.165H173.708c-35.346 0-64 28.654-64 64s28.654 64 64 64h673.184c35.347 0 64-28.654 64-64s-28.654-64-64-64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-exchange" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M127.231 411.256H770.55v84.395c0 12.802 15.478 19.213 24.53 10.161l158.363-158.363c5.612-5.612 5.612-14.71 0-20.321L795.08 168.764c-9.052-9.052-24.53-2.641-24.53 10.161v104.331H127.231c-35.346 0-64 28.654-64 64s28.654 64 64 64zM896.769 612.744H252.032v-84.395c0-12.802-15.478-19.213-24.53-10.161L69.139 676.551c-5.612 5.612-5.612 14.71 0 20.321l158.363 158.363c9.052 9.052 24.53 2.641 24.53-10.161v-104.33h644.737c35.347 0 64-28.654 64-64s-28.654-64-64-64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-forward" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M494.014 486.354L114.256 267.1c-21.333-12.317-48 3.079-48 27.713V733.32c0 24.634 26.667 40.03 48 27.713l379.758-219.254c21.334-12.317 21.334-43.109 0-55.425z"  ></path>' +
    '' +
    '<path d="M941.744 482.221L561.986 262.967c-21.333-12.317-48 3.079-48 27.713v438.507c0 24.634 26.667 40.03 48 27.713l379.758-219.254c21.333-12.316 21.333-43.108 0-55.425z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loading-circle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M845.784 563.065c-34.842-6.035-67.952 17.31-73.985 52.136-24.586 141.919-160.053 237.375-301.964 212.792-141.918-24.586-237.376-160.046-212.791-301.964 7.401-42.726 24.538-81.604 50.932-115.555 30.905-39.752 72.991-69.872 120.253-86.479-6.911 28.397 6.406 58.801 33.674 72.374 9.16 4.56 18.888 6.72 28.47 6.72 23.517 0 46.153-13.013 57.344-35.495l70.112-140.855a64.002 64.002 0 0 0-28.776-85.814L448.198 70.813c-31.645-15.75-70.063-2.867-85.813 28.776-15.751 31.643-2.867 70.063 28.775 85.813l19.912 9.911c-80.542 22.252-152.747 70.48-204.15 136.599-38.854 49.977-65.134 109.546-76 172.269-8.964 51.745-7.517 103.732 4.3 154.519 11.407 49.021 31.946 94.816 61.047 136.114 29.102 41.297 65.319 76.044 107.647 103.274 43.853 28.213 92.325 47.063 144.07 56.026 22.297 3.862 44.633 5.792 66.905 5.792 29.414 0 58.712-3.367 87.614-10.092 49.021-11.406 94.816-31.946 136.113-61.048s76.044-65.319 103.274-107.646c28.213-43.854 47.063-92.325 56.026-144.069 6.035-34.828-17.307-67.952-52.134-73.986z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pause" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M356.473 959.64c-35.346 0-64-28.653-64-64V127.99c0-35.346 28.654-64 64-64s64 28.654 64 64v767.65c0 35.346-28.654 64-64 64zM658.925 959.64c-35.347 0-64-28.653-64-64V127.99c0-35.346 28.653-64 64-64s64 28.654 64 64v767.65c0 35.346-28.654 64-64 64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-play" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M885.93 484.287L170.07 70.986c-21.333-12.317-48 3.079-48 27.713v826.603c0 24.634 26.667 40.03 48 27.713l715.86-413.302c21.333-12.317 21.333-43.109 0-55.426z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-step-backward" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M256.037 105.524c35.347 0 64 28.654 64 64V449.78l462.431-339.297c21.136-15.508 50.93-0.415 50.93 25.8v790.071c0 26.215-29.794 41.308-50.93 25.8L320.037 612.859v285.304c0 35.346-28.653 64-64 64s-64-28.654-64-64V169.524c0-35.346 28.654-64 64-64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-step-forward" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M769.398 105.524c-35.347 0-64 28.654-64 64V449.78L242.967 110.484c-21.136-15.508-50.93-0.415-50.93 25.8v790.071c0 26.215 29.794 41.308 50.93 25.8l462.431-339.297v285.304c0 35.346 28.653 64 64 64s64-28.654 64-64V169.524c0-35.346-28.653-64-64-64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)