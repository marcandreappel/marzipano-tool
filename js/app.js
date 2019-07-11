/* 
 * Copyright 2016 Google Inc. All Rights Reserved.
 * See ../LICENSES.txt for licenses of bundled libraries
 */
!function(t) {
  if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = t();
  else if ("function" == typeof define && define.amd)
      define([], t);
  else {
      ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).app = t()
  }
}(function() {
  var t;
  return function() {
      return function t(e, n, i) {
          function r(s, a) {
              if (!n[s]) {
                  if (!e[s]) {
                      var l = "function" == typeof require && require;
                      if (!a && l)
                          return l(s, !0);
                      if (o)
                          return o(s, !0);
                      var u = new Error("Cannot find module '" + s + "'");
                      throw u.code = "MODULE_NOT_FOUND",
                      u
                  }
                  var c = n[s] = {
                      exports: {}
                  };
                  e[s][0].call(c.exports, function(t) {
                      return r(e[s][1][t] || t)
                  }, c, c.exports, t, e, n, i)
              }
              return n[s].exports
          }
          for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)
              r(i[s]);
          return r
      }
  }()({
      1: [function(e, n, i) {
          (function(e) {
              !function() {
                  var i, r, o = {};
                  function s(t) {
                      var e = !1;
                      return function() {
                          if (e)
                              throw new Error("Callback was already called.");
                          e = !0,
                          t.apply(i, arguments)
                      }
                  }
                  null != (i = this) && (r = i.async),
                  o.noConflict = function() {
                      return i.async = r,
                      o
                  }
                  ;
                  var a = Object.prototype.toString
                    , l = Array.isArray || function(t) {
                      return "[object Array]" === a.call(t)
                  }
                    , u = function(t, e) {
                      if (t.forEach)
                          return t.forEach(e);
                      for (var n = 0; n < t.length; n += 1)
                          e(t[n], n, t)
                  }
                    , c = function(t, e) {
                      if (t.map)
                          return t.map(e);
                      var n = [];
                      return u(t, function(t, i, r) {
                          n.push(e(t, i, r))
                      }),
                      n
                  }
                    , h = function(t) {
                      if (Object.keys)
                          return Object.keys(t);
                      var e = [];
                      for (var n in t)
                          t.hasOwnProperty(n) && e.push(n);
                      return e
                  };
                  void 0 !== e && e.nextTick ? (o.nextTick = e.nextTick,
                  "undefined" != typeof setImmediate ? o.setImmediate = function(t) {
                      setImmediate(t)
                  }
                  : o.setImmediate = o.nextTick) : "function" == typeof setImmediate ? (o.nextTick = function(t) {
                      setImmediate(t)
                  }
                  ,
                  o.setImmediate = o.nextTick) : (o.nextTick = function(t) {
                      setTimeout(t, 0)
                  }
                  ,
                  o.setImmediate = o.nextTick),
                  o.each = function(t, e, n) {
                      if (n = n || function() {}
                      ,
                      !t.length)
                          return n();
                      var i = 0;
                      function r(e) {
                          e ? (n(e),
                          n = function() {}
                          ) : (i += 1) >= t.length && n()
                      }
                      u(t, function(t) {
                          e(t, s(r))
                      })
                  }
                  ,
                  o.forEach = o.each,
                  o.eachSeries = function(t, e, n) {
                      if (n = n || function() {}
                      ,
                      !t.length)
                          return n();
                      var i = 0
                        , r = function() {
                          e(t[i], function(e) {
                              e ? (n(e),
                              n = function() {}
                              ) : (i += 1) >= t.length ? n() : r()
                          })
                      };
                      r()
                  }
                  ,
                  o.forEachSeries = o.eachSeries,
                  o.eachLimit = function(t, e, n, i) {
                      p(e).apply(null, [t, n, i])
                  }
                  ,
                  o.forEachLimit = o.eachLimit;
                  var p = function(t) {
                      return function(e, n, i) {
                          if (i = i || function() {}
                          ,
                          !e.length || t <= 0)
                              return i();
                          var r = 0
                            , o = 0
                            , s = 0;
                          !function a() {
                              if (r >= e.length)
                                  return i();
                              for (; s < t && o < e.length; )
                                  s += 1,
                                  n(e[(o += 1) - 1], function(t) {
                                      t ? (i(t),
                                      i = function() {}
                                      ) : (s -= 1,
                                      (r += 1) >= e.length ? i() : a())
                                  })
                          }()
                      }
                  }
                    , d = function(t) {
                      return function() {
                          var e = Array.prototype.slice.call(arguments);
                          return t.apply(null, [o.each].concat(e))
                      }
                  }
                    , f = function(t) {
                      return function() {
                          var e = Array.prototype.slice.call(arguments);
                          return t.apply(null, [o.eachSeries].concat(e))
                      }
                  }
                    , m = function(t, e, n, i) {
                      if (e = c(e, function(t, e) {
                          return {
                              index: e,
                              value: t
                          }
                      }),
                      i) {
                          var r = [];
                          t(e, function(t, e) {
                              n(t.value, function(n, i) {
                                  r[t.index] = i,
                                  e(n)
                              })
                          }, function(t) {
                              i(t, r)
                          })
                      } else
                          t(e, function(t, e) {
                              n(t.value, function(t) {
                                  e(t)
                              })
                          })
                  };
                  o.map = d(m),
                  o.mapSeries = f(m),
                  o.mapLimit = function(t, e, n, i) {
                      return v(e)(t, n, i)
                  }
                  ;
                  var v = function(t) {
                      return function(t, e) {
                          return function() {
                              var n = Array.prototype.slice.call(arguments);
                              return e.apply(null, [p(t)].concat(n))
                          }
                      }(t, m)
                  };
                  o.reduce = function(t, e, n, i) {
                      o.eachSeries(t, function(t, i) {
                          n(e, t, function(t, n) {
                              e = n,
                              i(t)
                          })
                      }, function(t) {
                          i(t, e)
                      })
                  }
                  ,
                  o.inject = o.reduce,
                  o.foldl = o.reduce,
                  o.reduceRight = function(t, e, n, i) {
                      var r = c(t, function(t) {
                          return t
                      }).reverse();
                      o.reduce(r, e, n, i)
                  }
                  ,
                  o.foldr = o.reduceRight;
                  var y = function(t, e, n, i) {
                      var r = [];
                      t(e = c(e, function(t, e) {
                          return {
                              index: e,
                              value: t
                          }
                      }), function(t, e) {
                          n(t.value, function(n) {
                              n && r.push(t),
                              e()
                          })
                      }, function(t) {
                          i(c(r.sort(function(t, e) {
                              return t.index - e.index
                          }), function(t) {
                              return t.value
                          }))
                      })
                  };
                  o.filter = d(y),
                  o.filterSeries = f(y),
                  o.select = o.filter,
                  o.selectSeries = o.filterSeries;
                  var g = function(t, e, n, i) {
                      var r = [];
                      t(e = c(e, function(t, e) {
                          return {
                              index: e,
                              value: t
                          }
                      }), function(t, e) {
                          n(t.value, function(n) {
                              n || r.push(t),
                              e()
                          })
                      }, function(t) {
                          i(c(r.sort(function(t, e) {
                              return t.index - e.index
                          }), function(t) {
                              return t.value
                          }))
                      })
                  };
                  o.reject = d(g),
                  o.rejectSeries = f(g);
                  var _ = function(t, e, n, i) {
                      t(e, function(t, e) {
                          n(t, function(n) {
                              n ? (i(t),
                              i = function() {}
                              ) : e()
                          })
                      }, function(t) {
                          i()
                      })
                  };
                  o.detect = d(_),
                  o.detectSeries = f(_),
                  o.some = function(t, e, n) {
                      o.each(t, function(t, i) {
                          e(t, function(t) {
                              t && (n(!0),
                              n = function() {}
                              ),
                              i()
                          })
                      }, function(t) {
                          n(!1)
                      })
                  }
                  ,
                  o.any = o.some,
                  o.every = function(t, e, n) {
                      o.each(t, function(t, i) {
                          e(t, function(t) {
                              t || (n(!1),
                              n = function() {}
                              ),
                              i()
                          })
                      }, function(t) {
                          n(!0)
                      })
                  }
                  ,
                  o.all = o.every,
                  o.sortBy = function(t, e, n) {
                      o.map(t, function(t, n) {
                          e(t, function(e, i) {
                              e ? n(e) : n(null, {
                                  value: t,
                                  criteria: i
                              })
                          })
                      }, function(t, e) {
                          if (t)
                              return n(t);
                          n(null, c(e.sort(function(t, e) {
                              var n = t.criteria
                                , i = e.criteria;
                              return n < i ? -1 : n > i ? 1 : 0
                          }), function(t) {
                              return t.value
                          }))
                      })
                  }
                  ,
                  o.auto = function(t, e) {
                      e = e || function() {}
                      ;
                      var n = h(t)
                        , i = n.length;
                      if (!i)
                          return e();
                      var r = {}
                        , s = []
                        , a = function(t) {
                          s.unshift(t)
                      }
                        , c = function() {
                          i--,
                          u(s.slice(0), function(t) {
                              t()
                          })
                      };
                      a(function() {
                          if (!i) {
                              var t = e;
                              e = function() {}
                              ,
                              t(null, r)
                          }
                      }),
                      u(n, function(n) {
                          var i = l(t[n]) ? t[n] : [t[n]]
                            , p = function(t) {
                              var i = Array.prototype.slice.call(arguments, 1);
                              if (i.length <= 1 && (i = i[0]),
                              t) {
                                  var s = {};
                                  u(h(r), function(t) {
                                      s[t] = r[t]
                                  }),
                                  s[n] = i,
                                  e(t, s),
                                  e = function() {}
                              } else
                                  r[n] = i,
                                  o.setImmediate(c)
                          }
                            , d = i.slice(0, Math.abs(i.length - 1)) || []
                            , f = function() {
                              return e = function(t, e) {
                                  return t && r.hasOwnProperty(e)
                              }
                              ,
                              i = !0,
                              ((t = d).reduce ? t.reduce(e, i) : (u(t, function(t, n, r) {
                                  i = e(i, t, n, r)
                              }),
                              i)) && !r.hasOwnProperty(n);
                              var t, e, i
                          };
                          if (f())
                              i[i.length - 1](p, r);
                          else {
                              var m = function() {
                                  f() && (!function(t) {
                                      for (var e = 0; e < s.length; e += 1)
                                          if (s[e] === t)
                                              return void s.splice(e, 1)
                                  }(m),
                                  i[i.length - 1](p, r))
                              };
                              a(m)
                          }
                      })
                  }
                  ,
                  o.retry = function(t, e, n) {
                      var i = [];
                      "function" == typeof t && (n = e,
                      e = t,
                      t = 5),
                      t = parseInt(t, 10) || 5;
                      var r = function(r, s) {
                          for (var a = function(t, e) {
                              return function(n) {
                                  t(function(t, i) {
                                      n(!t || e, {
                                          err: t,
                                          result: i
                                      })
                                  }, s)
                              }
                          }; t; )
                              i.push(a(e, !(t -= 1)));
                          o.series(i, function(t, e) {
                              e = e[e.length - 1],
                              (r || n)(e.err, e.result)
                          })
                      };
                      return n ? r() : r
                  }
                  ,
                  o.waterfall = function(t, e) {
                      if (e = e || function() {}
                      ,
                      !l(t)) {
                          var n = new Error("First argument to waterfall must be an array of functions");
                          return e(n)
                      }
                      if (!t.length)
                          return e();
                      var i = function(t) {
                          return function(n) {
                              if (n)
                                  e.apply(null, arguments),
                                  e = function() {}
                                  ;
                              else {
                                  var r = Array.prototype.slice.call(arguments, 1)
                                    , s = t.next();
                                  s ? r.push(i(s)) : r.push(e),
                                  o.setImmediate(function() {
                                      t.apply(null, r)
                                  })
                              }
                          }
                      };
                      i(o.iterator(t))()
                  }
                  ;
                  var b = function(t, e, n) {
                      if (n = n || function() {}
                      ,
                      l(e))
                          t.map(e, function(t, e) {
                              t && t(function(t) {
                                  var n = Array.prototype.slice.call(arguments, 1);
                                  n.length <= 1 && (n = n[0]),
                                  e.call(null, t, n)
                              })
                          }, n);
                      else {
                          var i = {};
                          t.each(h(e), function(t, n) {
                              e[t](function(e) {
                                  var r = Array.prototype.slice.call(arguments, 1);
                                  r.length <= 1 && (r = r[0]),
                                  i[t] = r,
                                  n(e)
                              })
                          }, function(t) {
                              n(t, i)
                          })
                      }
                  };
                  o.parallel = function(t, e) {
                      b({
                          map: o.map,
                          each: o.each
                      }, t, e)
                  }
                  ,
                  o.parallelLimit = function(t, e, n) {
                      b({
                          map: v(e),
                          each: p(e)
                      }, t, n)
                  }
                  ,
                  o.series = function(t, e) {
                      if (e = e || function() {}
                      ,
                      l(t))
                          o.mapSeries(t, function(t, e) {
                              t && t(function(t) {
                                  var n = Array.prototype.slice.call(arguments, 1);
                                  n.length <= 1 && (n = n[0]),
                                  e.call(null, t, n)
                              })
                          }, e);
                      else {
                          var n = {};
                          o.eachSeries(h(t), function(e, i) {
                              t[e](function(t) {
                                  var r = Array.prototype.slice.call(arguments, 1);
                                  r.length <= 1 && (r = r[0]),
                                  n[e] = r,
                                  i(t)
                              })
                          }, function(t) {
                              e(t, n)
                          })
                      }
                  }
                  ,
                  o.iterator = function(t) {
                      var e = function(n) {
                          var i = function() {
                              return t.length && t[n].apply(null, arguments),
                              i.next()
                          };
                          return i.next = function() {
                              return n < t.length - 1 ? e(n + 1) : null
                          }
                          ,
                          i
                      };
                      return e(0)
                  }
                  ,
                  o.apply = function(t) {
                      var e = Array.prototype.slice.call(arguments, 1);
                      return function() {
                          return t.apply(null, e.concat(Array.prototype.slice.call(arguments)))
                      }
                  }
                  ;
                  var w = function(t, e, n, i) {
                      var r = [];
                      t(e, function(t, e) {
                          n(t, function(t, n) {
                              r = r.concat(n || []),
                              e(t)
                          })
                      }, function(t) {
                          i(t, r)
                      })
                  };
                  o.concat = d(w),
                  o.concatSeries = f(w),
                  o.whilst = function(t, e, n) {
                      t() ? e(function(i) {
                          if (i)
                              return n(i);
                          o.whilst(t, e, n)
                      }) : n()
                  }
                  ,
                  o.doWhilst = function(t, e, n) {
                      t(function(i) {
                          if (i)
                              return n(i);
                          var r = Array.prototype.slice.call(arguments, 1);
                          e.apply(null, r) ? o.doWhilst(t, e, n) : n()
                      })
                  }
                  ,
                  o.until = function(t, e, n) {
                      t() ? n() : e(function(i) {
                          if (i)
                              return n(i);
                          o.until(t, e, n)
                      })
                  }
                  ,
                  o.doUntil = function(t, e, n) {
                      t(function(i) {
                          if (i)
                              return n(i);
                          var r = Array.prototype.slice.call(arguments, 1);
                          e.apply(null, r) ? n() : o.doUntil(t, e, n)
                      })
                  }
                  ,
                  o.queue = function(t, e) {
                      function n(t, e, n, i) {
                          if (t.started || (t.started = !0),
                          l(e) || (e = [e]),
                          0 == e.length)
                              return o.setImmediate(function() {
                                  t.drain && t.drain()
                              });
                          u(e, function(e) {
                              var r = {
                                  data: e,
                                  callback: "function" == typeof i ? i : null
                              };
                              n ? t.tasks.unshift(r) : t.tasks.push(r),
                              t.saturated && t.tasks.length === t.concurrency && t.saturated(),
                              o.setImmediate(t.process)
                          })
                      }
                      void 0 === e && (e = 1);
                      var i = 0
                        , r = {
                          tasks: [],
                          concurrency: e,
                          saturated: null,
                          empty: null,
                          drain: null,
                          started: !1,
                          paused: !1,
                          push: function(t, e) {
                              n(r, t, !1, e)
                          },
                          kill: function() {
                              r.drain = null,
                              r.tasks = []
                          },
                          unshift: function(t, e) {
                              n(r, t, !0, e)
                          },
                          process: function() {
                              if (!r.paused && i < r.concurrency && r.tasks.length) {
                                  var e = r.tasks.shift();
                                  r.empty && 0 === r.tasks.length && r.empty(),
                                  i += 1;
                                  var n = s(function() {
                                      i -= 1,
                                      e.callback && e.callback.apply(e, arguments),
                                      r.drain && r.tasks.length + i === 0 && r.drain(),
                                      r.process()
                                  });
                                  t(e.data, n)
                              }
                          },
                          length: function() {
                              return r.tasks.length
                          },
                          running: function() {
                              return i
                          },
                          idle: function() {
                              return r.tasks.length + i === 0
                          },
                          pause: function() {
                              !0 !== r.paused && (r.paused = !0,
                              r.process())
                          },
                          resume: function() {
                              !1 !== r.paused && (r.paused = !1,
                              r.process())
                          }
                      };
                      return r
                  }
                  ,
                  o.priorityQueue = function(t, e) {
                      function n(t, e) {
                          return t.priority - e.priority
                      }
                      var i = o.queue(t, e);
                      return i.push = function(t, e, r) {
                          !function(t, e, i, r) {
                              if (t.started || (t.started = !0),
                              l(e) || (e = [e]),
                              0 == e.length)
                                  return o.setImmediate(function() {
                                      t.drain && t.drain()
                                  });
                              u(e, function(e) {
                                  var s = {
                                      data: e,
                                      priority: i,
                                      callback: "function" == typeof r ? r : null
                                  };
                                  t.tasks.splice(function(t, e, n) {
                                      for (var i = -1, r = t.length - 1; i < r; ) {
                                          var o = i + (r - i + 1 >>> 1);
                                          n(e, t[o]) >= 0 ? i = o : r = o - 1
                                      }
                                      return i
                                  }(t.tasks, s, n) + 1, 0, s),
                                  t.saturated && t.tasks.length === t.concurrency && t.saturated(),
                                  o.setImmediate(t.process)
                              })
                          }(i, t, e, r)
                      }
                      ,
                      delete i.unshift,
                      i
                  }
                  ,
                  o.cargo = function(t, e) {
                      var n = !1
                        , i = []
                        , r = {
                          tasks: i,
                          payload: e,
                          saturated: null,
                          empty: null,
                          drain: null,
                          drained: !0,
                          push: function(t, n) {
                              l(t) || (t = [t]),
                              u(t, function(t) {
                                  i.push({
                                      data: t,
                                      callback: "function" == typeof n ? n : null
                                  }),
                                  r.drained = !1,
                                  r.saturated && i.length === e && r.saturated()
                              }),
                              o.setImmediate(r.process)
                          },
                          process: function o() {
                              if (!n) {
                                  if (0 === i.length)
                                      return r.drain && !r.drained && r.drain(),
                                      void (r.drained = !0);
                                  var s = "number" == typeof e ? i.splice(0, e) : i.splice(0, i.length)
                                    , a = c(s, function(t) {
                                      return t.data
                                  });
                                  r.empty && r.empty(),
                                  n = !0,
                                  t(a, function() {
                                      n = !1;
                                      var t = arguments;
                                      u(s, function(e) {
                                          e.callback && e.callback.apply(null, t)
                                      }),
                                      o()
                                  })
                              }
                          },
                          length: function() {
                              return i.length
                          },
                          running: function() {
                              return n
                          }
                      };
                      return r
                  }
                  ;
                  var x = function(t) {
                      return function(e) {
                          var n = Array.prototype.slice.call(arguments, 1);
                          e.apply(null, n.concat([function(e) {
                              var n = Array.prototype.slice.call(arguments, 1);
                              "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && u(n, function(e) {
                                  console[t](e)
                              }))
                          }
                          ]))
                      }
                  };
                  o.log = x("log"),
                  o.dir = x("dir"),
                  o.memoize = function(t, e) {
                      var n = {}
                        , i = {};
                      e = e || function(t) {
                          return t
                      }
                      ;
                      var r = function() {
                          var r = Array.prototype.slice.call(arguments)
                            , s = r.pop()
                            , a = e.apply(null, r);
                          a in n ? o.nextTick(function() {
                              s.apply(null, n[a])
                          }) : a in i ? i[a].push(s) : (i[a] = [s],
                          t.apply(null, r.concat([function() {
                              n[a] = arguments;
                              var t = i[a];
                              delete i[a];
                              for (var e = 0, r = t.length; e < r; e++)
                                  t[e].apply(null, arguments)
                          }
                          ])))
                      };
                      return r.memo = n,
                      r.unmemoized = t,
                      r
                  }
                  ,
                  o.unmemoize = function(t) {
                      return function() {
                          return (t.unmemoized || t).apply(null, arguments)
                      }
                  }
                  ,
                  o.times = function(t, e, n) {
                      for (var i = [], r = 0; r < t; r++)
                          i.push(r);
                      return o.map(i, e, n)
                  }
                  ,
                  o.timesSeries = function(t, e, n) {
                      for (var i = [], r = 0; r < t; r++)
                          i.push(r);
                      return o.mapSeries(i, e, n)
                  }
                  ,
                  o.seq = function() {
                      var t = arguments;
                      return function() {
                          var e = this
                            , n = Array.prototype.slice.call(arguments)
                            , i = n.pop();
                          o.reduce(t, n, function(t, n, i) {
                              n.apply(e, t.concat([function() {
                                  var t = arguments[0]
                                    , e = Array.prototype.slice.call(arguments, 1);
                                  i(t, e)
                              }
                              ]))
                          }, function(t, n) {
                              i.apply(e, [t].concat(n))
                          })
                      }
                  }
                  ,
                  o.compose = function() {
                      return o.seq.apply(null, Array.prototype.reverse.call(arguments))
                  }
                  ;
                  var S = function(t, e) {
                      var n = function() {
                          var n = this
                            , i = Array.prototype.slice.call(arguments)
                            , r = i.pop();
                          return t(e, function(t, e) {
                              t.apply(n, i.concat([e]))
                          }, r)
                      };
                      if (arguments.length > 2) {
                          var i = Array.prototype.slice.call(arguments, 2);
                          return n.apply(this, i)
                      }
                      return n
                  };
                  o.applyEach = d(S),
                  o.applyEachSeries = f(S),
                  o.forever = function(t, e) {
                      !function n(i) {
                          if (i) {
                              if (e)
                                  return e(i);
                              throw i
                          }
                          t(n)
                      }()
                  }
                  ,
                  void 0 !== n && n.exports ? n.exports = o : void 0 !== t && t.amd ? t([], function() {
                      return o
                  }) : i.async = o
              }()
          }
          ).call(this, e("_process"))
      }
      , {
          _process: 210
      }],
      2: [function(e, n, i) {
          !function(e, i) {
              void 0 !== n && n.exports ? n.exports.browser = i() : "function" == typeof t && t.amd ? t(i) : this.bowser = i()
          }(0, function() {
              var t = !0;
              function e(e) {
                  function n(t) {
                      var n = e.match(t);
                      return n && n.length > 1 && n[1] || ""
                  }
                  var i, r = n(/(ipod|iphone|ipad)/i).toLowerCase(), o = !/like android/i.test(e) && /android/i.test(e), s = n(/version\/(\d+(\.\d+)?)/i), a = /tablet/i.test(e), l = !a && /[^-]mobi/i.test(e);
                  /opera|opr/i.test(e) ? i = {
                      name: "Opera",
                      opera: t,
                      version: s || n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
                  } : /windows phone/i.test(e) ? i = {
                      name: "Windows Phone",
                      windowsphone: t,
                      msie: t,
                      version: n(/iemobile\/(\d+(\.\d+)?)/i)
                  } : /msie|trident/i.test(e) ? i = {
                      name: "Internet Explorer",
                      msie: t,
                      version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                  } : /chrome|crios|crmo/i.test(e) ? i = {
                      name: "Chrome",
                      chrome: t,
                      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                  } : r ? (i = {
                      name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
                  },
                  s && (i.version = s)) : /sailfish/i.test(e) ? i = {
                      name: "Sailfish",
                      sailfish: t,
                      version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                  } : /seamonkey\//i.test(e) ? i = {
                      name: "SeaMonkey",
                      seamonkey: t,
                      version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                  } : /firefox|iceweasel/i.test(e) ? (i = {
                      name: "Firefox",
                      firefox: t,
                      version: n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
                  },
                  /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (i.firefoxos = t)) : /silk/i.test(e) ? i = {
                      name: "Amazon Silk",
                      silk: t,
                      version: n(/silk\/(\d+(\.\d+)?)/i)
                  } : o ? i = {
                      name: "Android",
                      version: s
                  } : /phantom/i.test(e) ? i = {
                      name: "PhantomJS",
                      phantom: t,
                      version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                  } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? i = {
                      name: "BlackBerry",
                      blackberry: t,
                      version: s || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                  } : /(web|hpw)os/i.test(e) ? (i = {
                      name: "WebOS",
                      webos: t,
                      version: s || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                  },
                  /touchpad\//i.test(e) && (i.touchpad = t)) : i = /bada/i.test(e) ? {
                      name: "Bada",
                      bada: t,
                      version: n(/dolfin\/(\d+(\.\d+)?)/i)
                  } : /tizen/i.test(e) ? {
                      name: "Tizen",
                      tizen: t,
                      version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || s
                  } : /safari/i.test(e) ? {
                      name: "Safari",
                      safari: t,
                      version: s
                  } : {},
                  /(apple)?webkit/i.test(e) ? (i.name = i.name || "Webkit",
                  i.webkit = t,
                  !i.version && s && (i.version = s)) : !i.opera && /gecko\//i.test(e) && (i.name = i.name || "Gecko",
                  i.gecko = t,
                  i.version = i.version || n(/gecko\/(\d+(\.\d+)?)/i)),
                  o || i.silk ? i.android = t : r && (i[r] = t,
                  i.ios = t);
                  var u = "";
                  r ? u = (u = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? u = n(/android[ \/-](\d+(\.\d+)*)/i) : i.windowsphone ? u = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.webos ? u = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? u = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? u = n(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (u = n(/tizen[\/\s](\d+(\.\d+)*)/i)),
                  u && (i.osversion = u);
                  var c = u.split(".")[0];
                  return a || "ipad" == r || o && (3 == c || 4 == c && !l) || i.silk ? i.tablet = t : (l || "iphone" == r || "ipod" == r || o || i.blackberry || i.webos || i.bada) && (i.mobile = t),
                  i.msie && i.version >= 10 || i.chrome && i.version >= 20 || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 ? i.a = t : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 ? i.c = t : i.x = t,
                  i
              }
              var n = e("undefined" != typeof navigator ? navigator.userAgent : "");
              return n._detect = e,
              n
          })
      }
      , {}],
      3: [function(e, n, i) {
          var r = r || "undefined" != typeof navigator && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function(t) {
              "use strict";
              if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
                  var e = t.document
                    , n = function() {
                      return t.URL || t.webkitURL || t
                  }
                    , i = e.createElementNS("http://www.w3.org/1999/xhtml", "a")
                    , r = "download"in i
                    , o = t.webkitRequestFileSystem
                    , s = t.requestFileSystem || o || t.mozRequestFileSystem
                    , a = function(e) {
                      (t.setImmediate || t.setTimeout)(function() {
                          throw e
                      }, 0)
                  }
                    , l = 0
                    , u = function(e) {
                      var i = function() {
                          "string" == typeof e ? n().revokeObjectURL(e) : e.remove()
                      };
                      t.chrome ? i() : setTimeout(i, 500)
                  }
                    , c = function(t, e, n) {
                      for (var i = (e = [].concat(e)).length; i--; ) {
                          var r = t["on" + e[i]];
                          if ("function" == typeof r)
                              try {
                                  r.call(t, n || t)
                              } catch (t) {
                                  a(t)
                              }
                      }
                  }
                    , h = function(a, h) {
                      var p, d, f, m, v, y = this, g = a.type, _ = !1, b = function() {
                          c(y, "writestart progress write writeend".split(" "))
                      }, w = function() {
                          (!_ && p || (p = n().createObjectURL(a)),
                          d) ? d.location.href = p : null == t.open(p, "_blank") && "undefined" != typeof safari && (t.location.href = p);
                          y.readyState = y.DONE,
                          b(),
                          u(p)
                      }, x = function(t) {
                          return function() {
                              if (y.readyState !== y.DONE)
                                  return t.apply(this, arguments)
                          }
                      }, S = {
                          create: !0,
                          exclusive: !1
                      };
                      if (y.readyState = y.INIT,
                      h || (h = "download"),
                      r)
                          return p = n().createObjectURL(a),
                          i.href = p,
                          i.download = h,
                          m = i,
                          (v = e.createEvent("MouseEvents")).initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                          m.dispatchEvent(v),
                          y.readyState = y.DONE,
                          b(),
                          void u(p);
                      t.chrome && g && "application/octet-stream" !== g && (f = a.slice || a.webkitSlice,
                      a = f.call(a, 0, a.size, "application/octet-stream"),
                      _ = !0),
                      o && "download" !== h && (h += ".download"),
                      ("application/octet-stream" === g || o) && (d = t),
                      s ? (l += a.size,
                      s(t.TEMPORARY, l, x(function(t) {
                          t.root.getDirectory("saved", S, x(function(t) {
                              var e = function() {
                                  t.getFile(h, S, x(function(t) {
                                      t.createWriter(x(function(e) {
                                          e.onwriteend = function(e) {
                                              d.location.href = t.toURL(),
                                              y.readyState = y.DONE,
                                              c(y, "writeend", e),
                                              u(t)
                                          }
                                          ,
                                          e.onerror = function() {
                                              var t = e.error;
                                              t.code !== t.ABORT_ERR && w()
                                          }
                                          ,
                                          "writestart progress write abort".split(" ").forEach(function(t) {
                                              e["on" + t] = y["on" + t]
                                          }),
                                          e.write(a),
                                          y.abort = function() {
                                              e.abort(),
                                              y.readyState = y.DONE
                                          }
                                          ,
                                          y.readyState = y.WRITING
                                      }), w)
                                  }), w)
                              };
                              t.getFile(h, {
                                  create: !1
                              }, x(function(t) {
                                  t.remove(),
                                  e()
                              }), x(function(t) {
                                  t.code === t.NOT_FOUND_ERR ? e() : w()
                              }))
                          }), w)
                      }), w)) : w()
                  }
                    , p = h.prototype;
                  return p.abort = function() {
                      this.readyState = this.DONE,
                      c(this, "abort")
                  }
                  ,
                  p.readyState = p.INIT = 0,
                  p.WRITING = 1,
                  p.DONE = 2,
                  p.error = p.onwritestart = p.onprogress = p.onwrite = p.onabort = p.onerror = p.onwriteend = null,
                  function(t, e) {
                      return new h(t,e)
                  }
              }
          }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
          void 0 !== n && n.exports ? n.exports = r : null != t && null != t.amd && t([], function() {
              return r
          })
      }
      , {}],
      4: [function(t, e, n) {
          n.glMatrix = t("./gl-matrix/common.js"),
          n.mat2 = t("./gl-matrix/mat2.js"),
          n.mat2d = t("./gl-matrix/mat2d.js"),
          n.mat3 = t("./gl-matrix/mat3.js"),
          n.mat4 = t("./gl-matrix/mat4.js"),
          n.quat = t("./gl-matrix/quat.js"),
          n.vec2 = t("./gl-matrix/vec2.js"),
          n.vec3 = t("./gl-matrix/vec3.js"),
          n.vec4 = t("./gl-matrix/vec4.js")
      }
      , {
          "./gl-matrix/common.js": 5,
          "./gl-matrix/mat2.js": 6,
          "./gl-matrix/mat2d.js": 7,
          "./gl-matrix/mat3.js": 8,
          "./gl-matrix/mat4.js": 9,
          "./gl-matrix/quat.js": 10,
          "./gl-matrix/vec2.js": 11,
          "./gl-matrix/vec3.js": 12,
          "./gl-matrix/vec4.js": 13
      }],
      5: [function(t, e, n) {
          var i = {
              EPSILON: 1e-6
          };
          i.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array,
          i.RANDOM = Math.random,
          i.ENABLE_SIMD = !1,
          i.SIMD_AVAILABLE = i.ARRAY_TYPE === this.Float32Array && "undefined" != typeof SIMD,
          i.USE_SIMD = i.ENABLE_SIMD && i.SIMD_AVAILABLE,
          i.setMatrixArrayType = function(t) {
              i.ARRAY_TYPE = t
          }
          ;
          var r = Math.PI / 180;
          i.toRadian = function(t) {
              return t * r
          }
          ,
          i.equals = function(t, e) {
              return Math.abs(t - e) <= i.EPSILON * Math.max(1, Math.abs(t), Math.abs(e))
          }
          ,
          e.exports = i
      }
      , {}],
      6: [function(t, e, n) {
          var i = t("./common.js")
            , r = {
              create: function() {
                  var t = new i.ARRAY_TYPE(4);
                  return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 1,
                  t
              },
              clone: function(t) {
                  var e = new i.ARRAY_TYPE(4);
                  return e[0] = t[0],
                  e[1] = t[1],
                  e[2] = t[2],
                  e[3] = t[3],
                  e
              },
              copy: function(t, e) {
                  return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = e[2],
                  t[3] = e[3],
                  t
              },
              identity: function(t) {
                  return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 1,
                  t
              },
              fromValues: function(t, e, n, r) {
                  var o = new i.ARRAY_TYPE(4);
                  return o[0] = t,
                  o[1] = e,
                  o[2] = n,
                  o[3] = r,
                  o
              },
              set: function(t, e, n, i, r) {
                  return t[0] = e,
                  t[1] = n,
                  t[2] = i,
                  t[3] = r,
                  t
              },
              transpose: function(t, e) {
                  if (t === e) {
                      var n = e[1];
                      t[1] = e[2],
                      t[2] = n
                  } else
                      t[0] = e[0],
                      t[1] = e[2],
                      t[2] = e[1],
                      t[3] = e[3];
                  return t
              },
              invert: function(t, e) {
                  var n = e[0]
                    , i = e[1]
                    , r = e[2]
                    , o = e[3]
                    , s = n * o - r * i;
                  return s ? (s = 1 / s,
                  t[0] = o * s,
                  t[1] = -i * s,
                  t[2] = -r * s,
                  t[3] = n * s,
                  t) : null
              },
              adjoint: function(t, e) {
                  var n = e[0];
                  return t[0] = e[3],
                  t[1] = -e[1],
                  t[2] = -e[2],
                  t[3] = n,
                  t
              },
              determinant: function(t) {
                  return t[0] * t[3] - t[2] * t[1]
              },
              multiply: function(t, e, n) {
                  var i = e[0]
                    , r = e[1]
                    , o = e[2]
                    , s = e[3]
                    , a = n[0]
                    , l = n[1]
                    , u = n[2]
                    , c = n[3];
                  return t[0] = i * a + o * l,
                  t[1] = r * a + s * l,
                  t[2] = i * u + o * c,
                  t[3] = r * u + s * c,
                  t
              }
          };
          r.mul = r.multiply,
          r.rotate = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = Math.sin(n)
                , l = Math.cos(n);
              return t[0] = i * l + o * a,
              t[1] = r * l + s * a,
              t[2] = i * -a + o * l,
              t[3] = r * -a + s * l,
              t
          }
          ,
          r.scale = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = n[0]
                , l = n[1];
              return t[0] = i * a,
              t[1] = r * a,
              t[2] = o * l,
              t[3] = s * l,
              t
          }
          ,
          r.fromRotation = function(t, e) {
              var n = Math.sin(e)
                , i = Math.cos(e);
              return t[0] = i,
              t[1] = n,
              t[2] = -n,
              t[3] = i,
              t
          }
          ,
          r.fromScaling = function(t, e) {
              return t[0] = e[0],
              t[1] = 0,
              t[2] = 0,
              t[3] = e[1],
              t
          }
          ,
          r.str = function(t) {
              return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
          }
          ,
          r.frob = function(t) {
              return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
          }
          ,
          r.LDU = function(t, e, n, i) {
              return t[2] = i[2] / i[0],
              n[0] = i[0],
              n[1] = i[1],
              n[3] = i[3] - t[2] * n[1],
              [t, e, n]
          }
          ,
          r.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t
          }
          ,
          r.subtract = function(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t
          }
          ,
          r.sub = r.subtract,
          r.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
          }
          ,
          r.equals = function(t, e) {
              var n = t[0]
                , r = t[1]
                , o = t[2]
                , s = t[3]
                , a = e[0]
                , l = e[1]
                , u = e[2]
                , c = e[3];
              return Math.abs(n - a) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - l) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(o - u) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(u)) && Math.abs(s - c) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(c))
          }
          ,
          r.multiplyScalar = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t
          }
          ,
          r.multiplyScalarAndAdd = function(t, e, n, i) {
              return t[0] = e[0] + n[0] * i,
              t[1] = e[1] + n[1] * i,
              t[2] = e[2] + n[2] * i,
              t[3] = e[3] + n[3] * i,
              t
          }
          ,
          e.exports = r
      }
      , {
          "./common.js": 5
      }],
      7: [function(t, e, n) {
          var i = t("./common.js")
            , r = {
              create: function() {
                  var t = new i.ARRAY_TYPE(6);
                  return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 1,
                  t[4] = 0,
                  t[5] = 0,
                  t
              },
              clone: function(t) {
                  var e = new i.ARRAY_TYPE(6);
                  return e[0] = t[0],
                  e[1] = t[1],
                  e[2] = t[2],
                  e[3] = t[3],
                  e[4] = t[4],
                  e[5] = t[5],
                  e
              },
              copy: function(t, e) {
                  return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = e[2],
                  t[3] = e[3],
                  t[4] = e[4],
                  t[5] = e[5],
                  t
              },
              identity: function(t) {
                  return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 1,
                  t[4] = 0,
                  t[5] = 0,
                  t
              },
              fromValues: function(t, e, n, r, o, s) {
                  var a = new i.ARRAY_TYPE(6);
                  return a[0] = t,
                  a[1] = e,
                  a[2] = n,
                  a[3] = r,
                  a[4] = o,
                  a[5] = s,
                  a
              },
              set: function(t, e, n, i, r, o, s) {
                  return t[0] = e,
                  t[1] = n,
                  t[2] = i,
                  t[3] = r,
                  t[4] = o,
                  t[5] = s,
                  t
              },
              invert: function(t, e) {
                  var n = e[0]
                    , i = e[1]
                    , r = e[2]
                    , o = e[3]
                    , s = e[4]
                    , a = e[5]
                    , l = n * o - i * r;
                  return l ? (l = 1 / l,
                  t[0] = o * l,
                  t[1] = -i * l,
                  t[2] = -r * l,
                  t[3] = n * l,
                  t[4] = (r * a - o * s) * l,
                  t[5] = (i * s - n * a) * l,
                  t) : null
              },
              determinant: function(t) {
                  return t[0] * t[3] - t[1] * t[2]
              },
              multiply: function(t, e, n) {
                  var i = e[0]
                    , r = e[1]
                    , o = e[2]
                    , s = e[3]
                    , a = e[4]
                    , l = e[5]
                    , u = n[0]
                    , c = n[1]
                    , h = n[2]
                    , p = n[3]
                    , d = n[4]
                    , f = n[5];
                  return t[0] = i * u + o * c,
                  t[1] = r * u + s * c,
                  t[2] = i * h + o * p,
                  t[3] = r * h + s * p,
                  t[4] = i * d + o * f + a,
                  t[5] = r * d + s * f + l,
                  t
              }
          };
          r.mul = r.multiply,
          r.rotate = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , l = e[5]
                , u = Math.sin(n)
                , c = Math.cos(n);
              return t[0] = i * c + o * u,
              t[1] = r * c + s * u,
              t[2] = i * -u + o * c,
              t[3] = r * -u + s * c,
              t[4] = a,
              t[5] = l,
              t
          }
          ,
          r.scale = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , l = e[5]
                , u = n[0]
                , c = n[1];
              return t[0] = i * u,
              t[1] = r * u,
              t[2] = o * c,
              t[3] = s * c,
              t[4] = a,
              t[5] = l,
              t
          }
          ,
          r.translate = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , l = e[5]
                , u = n[0]
                , c = n[1];
              return t[0] = i,
              t[1] = r,
              t[2] = o,
              t[3] = s,
              t[4] = i * u + o * c + a,
              t[5] = r * u + s * c + l,
              t
          }
          ,
          r.fromRotation = function(t, e) {
              var n = Math.sin(e)
                , i = Math.cos(e);
              return t[0] = i,
              t[1] = n,
              t[2] = -n,
              t[3] = i,
              t[4] = 0,
              t[5] = 0,
              t
          }
          ,
          r.fromScaling = function(t, e) {
              return t[0] = e[0],
              t[1] = 0,
              t[2] = 0,
              t[3] = e[1],
              t[4] = 0,
              t[5] = 0,
              t
          }
          ,
          r.fromTranslation = function(t, e) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t[4] = e[0],
              t[5] = e[1],
              t
          }
          ,
          r.str = function(t) {
              return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
          }
          ,
          r.frob = function(t) {
              return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
          }
          ,
          r.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t[4] = e[4] + n[4],
              t[5] = e[5] + n[5],
              t
          }
          ,
          r.subtract = function(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t[4] = e[4] - n[4],
              t[5] = e[5] - n[5],
              t
          }
          ,
          r.sub = r.subtract,
          r.multiplyScalar = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t[4] = e[4] * n,
              t[5] = e[5] * n,
              t
          }
          ,
          r.multiplyScalarAndAdd = function(t, e, n, i) {
              return t[0] = e[0] + n[0] * i,
              t[1] = e[1] + n[1] * i,
              t[2] = e[2] + n[2] * i,
              t[3] = e[3] + n[3] * i,
              t[4] = e[4] + n[4] * i,
              t[5] = e[5] + n[5] * i,
              t
          }
          ,
          r.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
          }
          ,
          r.equals = function(t, e) {
              var n = t[0]
                , r = t[1]
                , o = t[2]
                , s = t[3]
                , a = t[4]
                , l = t[5]
                , u = e[0]
                , c = e[1]
                , h = e[2]
                , p = e[3]
                , d = e[4]
                , f = e[5];
              return Math.abs(n - u) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(r - c) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(o - h) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(s - p) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(a - d) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(l - f) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(f))
          }
          ,
          e.exports = r
      }
      , {
          "./common.js": 5
      }],
      8: [function(t, e, n) {
          var i = t("./common.js")
            , r = {
              create: function() {
                  var t = new i.ARRAY_TYPE(9);
                  return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[4] = 1,
                  t[5] = 0,
                  t[6] = 0,
                  t[7] = 0,
                  t[8] = 1,
                  t
              },
              fromMat4: function(t, e) {
                  return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = e[2],
                  t[3] = e[4],
                  t[4] = e[5],
                  t[5] = e[6],
                  t[6] = e[8],
                  t[7] = e[9],
                  t[8] = e[10],
                  t
              },
              clone: function(t) {
                  var e = new i.ARRAY_TYPE(9);
                  return e[0] = t[0],
                  e[1] = t[1],
                  e[2] = t[2],
                  e[3] = t[3],
                  e[4] = t[4],
                  e[5] = t[5],
                  e[6] = t[6],
                  e[7] = t[7],
                  e[8] = t[8],
                  e
              },
              copy: function(t, e) {
                  return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = e[2],
                  t[3] = e[3],
                  t[4] = e[4],
                  t[5] = e[5],
                  t[6] = e[6],
                  t[7] = e[7],
                  t[8] = e[8],
                  t
              },
              fromValues: function(t, e, n, r, o, s, a, l, u) {
                  var c = new i.ARRAY_TYPE(9);
                  return c[0] = t,
                  c[1] = e,
                  c[2] = n,
                  c[3] = r,
                  c[4] = o,
                  c[5] = s,
                  c[6] = a,
                  c[7] = l,
                  c[8] = u,
                  c
              },
              set: function(t, e, n, i, r, o, s, a, l, u) {
                  return t[0] = e,
                  t[1] = n,
                  t[2] = i,
                  t[3] = r,
                  t[4] = o,
                  t[5] = s,
                  t[6] = a,
                  t[7] = l,
                  t[8] = u,
                  t
              },
              identity: function(t) {
                  return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[4] = 1,
                  t[5] = 0,
                  t[6] = 0,
                  t[7] = 0,
                  t[8] = 1,
                  t
              },
              transpose: function(t, e) {
                  if (t === e) {
                      var n = e[1]
                        , i = e[2]
                        , r = e[5];
                      t[1] = e[3],
                      t[2] = e[6],
                      t[3] = n,
                      t[5] = e[7],
                      t[6] = i,
                      t[7] = r
                  } else
                      t[0] = e[0],
                      t[1] = e[3],
                      t[2] = e[6],
                      t[3] = e[1],
                      t[4] = e[4],
                      t[5] = e[7],
                      t[6] = e[2],
                      t[7] = e[5],
                      t[8] = e[8];
                  return t
              },
              invert: function(t, e) {
                  var n = e[0]
                    , i = e[1]
                    , r = e[2]
                    , o = e[3]
                    , s = e[4]
                    , a = e[5]
                    , l = e[6]
                    , u = e[7]
                    , c = e[8]
                    , h = c * s - a * u
                    , p = -c * o + a * l
                    , d = u * o - s * l
                    , f = n * h + i * p + r * d;
                  return f ? (f = 1 / f,
                  t[0] = h * f,
                  t[1] = (-c * i + r * u) * f,
                  t[2] = (a * i - r * s) * f,
                  t[3] = p * f,
                  t[4] = (c * n - r * l) * f,
                  t[5] = (-a * n + r * o) * f,
                  t[6] = d * f,
                  t[7] = (-u * n + i * l) * f,
                  t[8] = (s * n - i * o) * f,
                  t) : null
              },
              adjoint: function(t, e) {
                  var n = e[0]
                    , i = e[1]
                    , r = e[2]
                    , o = e[3]
                    , s = e[4]
                    , a = e[5]
                    , l = e[6]
                    , u = e[7]
                    , c = e[8];
                  return t[0] = s * c - a * u,
                  t[1] = r * u - i * c,
                  t[2] = i * a - r * s,
                  t[3] = a * l - o * c,
                  t[4] = n * c - r * l,
                  t[5] = r * o - n * a,
                  t[6] = o * u - s * l,
                  t[7] = i * l - n * u,
                  t[8] = n * s - i * o,
                  t
              },
              determinant: function(t) {
                  var e = t[0]
                    , n = t[1]
                    , i = t[2]
                    , r = t[3]
                    , o = t[4]
                    , s = t[5]
                    , a = t[6]
                    , l = t[7]
                    , u = t[8];
                  return e * (u * o - s * l) + n * (-u * r + s * a) + i * (l * r - o * a)
              },
              multiply: function(t, e, n) {
                  var i = e[0]
                    , r = e[1]
                    , o = e[2]
                    , s = e[3]
                    , a = e[4]
                    , l = e[5]
                    , u = e[6]
                    , c = e[7]
                    , h = e[8]
                    , p = n[0]
                    , d = n[1]
                    , f = n[2]
                    , m = n[3]
                    , v = n[4]
                    , y = n[5]
                    , g = n[6]
                    , _ = n[7]
                    , b = n[8];
                  return t[0] = p * i + d * s + f * u,
                  t[1] = p * r + d * a + f * c,
                  t[2] = p * o + d * l + f * h,
                  t[3] = m * i + v * s + y * u,
                  t[4] = m * r + v * a + y * c,
                  t[5] = m * o + v * l + y * h,
                  t[6] = g * i + _ * s + b * u,
                  t[7] = g * r + _ * a + b * c,
                  t[8] = g * o + _ * l + b * h,
                  t
              }
          };
          r.mul = r.multiply,
          r.translate = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , l = e[5]
                , u = e[6]
                , c = e[7]
                , h = e[8]
                , p = n[0]
                , d = n[1];
              return t[0] = i,
              t[1] = r,
              t[2] = o,
              t[3] = s,
              t[4] = a,
              t[5] = l,
              t[6] = p * i + d * s + u,
              t[7] = p * r + d * a + c,
              t[8] = p * o + d * l + h,
              t
          }
          ,
          r.rotate = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , l = e[5]
                , u = e[6]
                , c = e[7]
                , h = e[8]
                , p = Math.sin(n)
                , d = Math.cos(n);
              return t[0] = d * i + p * s,
              t[1] = d * r + p * a,
              t[2] = d * o + p * l,
              t[3] = d * s - p * i,
              t[4] = d * a - p * r,
              t[5] = d * l - p * o,
              t[6] = u,
              t[7] = c,
              t[8] = h,
              t
          }
          ,
          r.scale = function(t, e, n) {
              var i = n[0]
                , r = n[1];
              return t[0] = i * e[0],
              t[1] = i * e[1],
              t[2] = i * e[2],
              t[3] = r * e[3],
              t[4] = r * e[4],
              t[5] = r * e[5],
              t[6] = e[6],
              t[7] = e[7],
              t[8] = e[8],
              t
          }
          ,
          r.fromTranslation = function(t, e) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 1,
              t[5] = 0,
              t[6] = e[0],
              t[7] = e[1],
              t[8] = 1,
              t
          }
          ,
          r.fromRotation = function(t, e) {
              var n = Math.sin(e)
                , i = Math.cos(e);
              return t[0] = i,
              t[1] = n,
              t[2] = 0,
              t[3] = -n,
              t[4] = i,
              t[5] = 0,
              t[6] = 0,
              t[7] = 0,
              t[8] = 1,
              t
          }
          ,
          r.fromScaling = function(t, e) {
              return t[0] = e[0],
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = e[1],
              t[5] = 0,
              t[6] = 0,
              t[7] = 0,
              t[8] = 1,
              t
          }
          ,
          r.fromMat2d = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = 0,
              t[3] = e[2],
              t[4] = e[3],
              t[5] = 0,
              t[6] = e[4],
              t[7] = e[5],
              t[8] = 1,
              t
          }
          ,
          r.fromQuat = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = e[3]
                , s = n + n
                , a = i + i
                , l = r + r
                , u = n * s
                , c = i * s
                , h = i * a
                , p = r * s
                , d = r * a
                , f = r * l
                , m = o * s
                , v = o * a
                , y = o * l;
              return t[0] = 1 - h - f,
              t[3] = c - y,
              t[6] = p + v,
              t[1] = c + y,
              t[4] = 1 - u - f,
              t[7] = d - m,
              t[2] = p - v,
              t[5] = d + m,
              t[8] = 1 - u - h,
              t
          }
          ,
          r.normalFromMat4 = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , l = e[6]
                , u = e[7]
                , c = e[8]
                , h = e[9]
                , p = e[10]
                , d = e[11]
                , f = e[12]
                , m = e[13]
                , v = e[14]
                , y = e[15]
                , g = n * a - i * s
                , _ = n * l - r * s
                , b = n * u - o * s
                , w = i * l - r * a
                , x = i * u - o * a
                , S = r * u - o * l
                , M = c * m - h * f
                , E = c * v - p * f
                , T = c * y - d * f
                , D = h * v - p * m
                , I = h * y - d * m
                , C = p * y - d * v
                , L = g * C - _ * I + b * D + w * T - x * E + S * M;
              return L ? (L = 1 / L,
              t[0] = (a * C - l * I + u * D) * L,
              t[1] = (l * T - s * C - u * E) * L,
              t[2] = (s * I - a * T + u * M) * L,
              t[3] = (r * I - i * C - o * D) * L,
              t[4] = (n * C - r * T + o * E) * L,
              t[5] = (i * T - n * I - o * M) * L,
              t[6] = (m * S - v * x + y * w) * L,
              t[7] = (v * b - f * S - y * _) * L,
              t[8] = (f * x - m * b + y * g) * L,
              t) : null
          }
          ,
          r.str = function(t) {
              return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
          }
          ,
          r.frob = function(t) {
              return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
          }
          ,
          r.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t[4] = e[4] + n[4],
              t[5] = e[5] + n[5],
              t[6] = e[6] + n[6],
              t[7] = e[7] + n[7],
              t[8] = e[8] + n[8],
              t
          }
          ,
          r.subtract = function(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t[4] = e[4] - n[4],
              t[5] = e[5] - n[5],
              t[6] = e[6] - n[6],
              t[7] = e[7] - n[7],
              t[8] = e[8] - n[8],
              t
          }
          ,
          r.sub = r.subtract,
          r.multiplyScalar = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t[4] = e[4] * n,
              t[5] = e[5] * n,
              t[6] = e[6] * n,
              t[7] = e[7] * n,
              t[8] = e[8] * n,
              t
          }
          ,
          r.multiplyScalarAndAdd = function(t, e, n, i) {
              return t[0] = e[0] + n[0] * i,
              t[1] = e[1] + n[1] * i,
              t[2] = e[2] + n[2] * i,
              t[3] = e[3] + n[3] * i,
              t[4] = e[4] + n[4] * i,
              t[5] = e[5] + n[5] * i,
              t[6] = e[6] + n[6] * i,
              t[7] = e[7] + n[7] * i,
              t[8] = e[8] + n[8] * i,
              t
          }
          ,
          r.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
          }
          ,
          r.equals = function(t, e) {
              var n = t[0]
                , r = t[1]
                , o = t[2]
                , s = t[3]
                , a = t[4]
                , l = t[5]
                , u = t[6]
                , c = t[7]
                , h = t[8]
                , p = e[0]
                , d = e[1]
                , f = e[2]
                , m = e[3]
                , v = e[4]
                , y = e[5]
                , g = e[6]
                , _ = e[7]
                , b = e[8];
              return Math.abs(n - p) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(p)) && Math.abs(r - d) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(d)) && Math.abs(o - f) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(s - m) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(a - v) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(v)) && Math.abs(l - y) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(y)) && Math.abs(u - g) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(g)) && Math.abs(c - _) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(_)) && Math.abs(h - b) <= i.EPSILON * Math.max(1, Math.abs(h), Math.abs(b))
          }
          ,
          e.exports = r
      }
      , {
          "./common.js": 5
      }],
      9: [function(t, e, n) {
          var i = t("./common.js")
            , r = {
              scalar: {},
              SIMD: {},
              create: function() {
                  var t = new i.ARRAY_TYPE(16);
                  return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[4] = 0,
                  t[5] = 1,
                  t[6] = 0,
                  t[7] = 0,
                  t[8] = 0,
                  t[9] = 0,
                  t[10] = 1,
                  t[11] = 0,
                  t[12] = 0,
                  t[13] = 0,
                  t[14] = 0,
                  t[15] = 1,
                  t
              },
              clone: function(t) {
                  var e = new i.ARRAY_TYPE(16);
                  return e[0] = t[0],
                  e[1] = t[1],
                  e[2] = t[2],
                  e[3] = t[3],
                  e[4] = t[4],
                  e[5] = t[5],
                  e[6] = t[6],
                  e[7] = t[7],
                  e[8] = t[8],
                  e[9] = t[9],
                  e[10] = t[10],
                  e[11] = t[11],
                  e[12] = t[12],
                  e[13] = t[13],
                  e[14] = t[14],
                  e[15] = t[15],
                  e
              },
              copy: function(t, e) {
                  return t[0] = e[0],
                  t[1] = e[1],
                  t[2] = e[2],
                  t[3] = e[3],
                  t[4] = e[4],
                  t[5] = e[5],
                  t[6] = e[6],
                  t[7] = e[7],
                  t[8] = e[8],
                  t[9] = e[9],
                  t[10] = e[10],
                  t[11] = e[11],
                  t[12] = e[12],
                  t[13] = e[13],
                  t[14] = e[14],
                  t[15] = e[15],
                  t
              },
              fromValues: function(t, e, n, r, o, s, a, l, u, c, h, p, d, f, m, v) {
                  var y = new i.ARRAY_TYPE(16);
                  return y[0] = t,
                  y[1] = e,
                  y[2] = n,
                  y[3] = r,
                  y[4] = o,
                  y[5] = s,
                  y[6] = a,
                  y[7] = l,
                  y[8] = u,
                  y[9] = c,
                  y[10] = h,
                  y[11] = p,
                  y[12] = d,
                  y[13] = f,
                  y[14] = m,
                  y[15] = v,
                  y
              },
              set: function(t, e, n, i, r, o, s, a, l, u, c, h, p, d, f, m, v) {
                  return t[0] = e,
                  t[1] = n,
                  t[2] = i,
                  t[3] = r,
                  t[4] = o,
                  t[5] = s,
                  t[6] = a,
                  t[7] = l,
                  t[8] = u,
                  t[9] = c,
                  t[10] = h,
                  t[11] = p,
                  t[12] = d,
                  t[13] = f,
                  t[14] = m,
                  t[15] = v,
                  t
              },
              identity: function(t) {
                  return t[0] = 1,
                  t[1] = 0,
                  t[2] = 0,
                  t[3] = 0,
                  t[4] = 0,
                  t[5] = 1,
                  t[6] = 0,
                  t[7] = 0,
                  t[8] = 0,
                  t[9] = 0,
                  t[10] = 1,
                  t[11] = 0,
                  t[12] = 0,
                  t[13] = 0,
                  t[14] = 0,
                  t[15] = 1,
                  t
              }
          };
          r.scalar.transpose = function(t, e) {
              if (t === e) {
                  var n = e[1]
                    , i = e[2]
                    , r = e[3]
                    , o = e[6]
                    , s = e[7]
                    , a = e[11];
                  t[1] = e[4],
                  t[2] = e[8],
                  t[3] = e[12],
                  t[4] = n,
                  t[6] = e[9],
                  t[7] = e[13],
                  t[8] = i,
                  t[9] = o,
                  t[11] = e[14],
                  t[12] = r,
                  t[13] = s,
                  t[14] = a
              } else
                  t[0] = e[0],
                  t[1] = e[4],
                  t[2] = e[8],
                  t[3] = e[12],
                  t[4] = e[1],
                  t[5] = e[5],
                  t[6] = e[9],
                  t[7] = e[13],
                  t[8] = e[2],
                  t[9] = e[6],
                  t[10] = e[10],
                  t[11] = e[14],
                  t[12] = e[3],
                  t[13] = e[7],
                  t[14] = e[11],
                  t[15] = e[15];
              return t
          }
          ,
          r.SIMD.transpose = function(t, e) {
              var n, i, r, o, s, a, l, u, c, h;
              return n = SIMD.Float32x4.load(e, 0),
              i = SIMD.Float32x4.load(e, 4),
              r = SIMD.Float32x4.load(e, 8),
              o = SIMD.Float32x4.load(e, 12),
              s = SIMD.Float32x4.shuffle(n, i, 0, 1, 4, 5),
              a = SIMD.Float32x4.shuffle(r, o, 0, 1, 4, 5),
              l = SIMD.Float32x4.shuffle(s, a, 0, 2, 4, 6),
              u = SIMD.Float32x4.shuffle(s, a, 1, 3, 5, 7),
              SIMD.Float32x4.store(t, 0, l),
              SIMD.Float32x4.store(t, 4, u),
              s = SIMD.Float32x4.shuffle(n, i, 2, 3, 6, 7),
              a = SIMD.Float32x4.shuffle(r, o, 2, 3, 6, 7),
              c = SIMD.Float32x4.shuffle(s, a, 0, 2, 4, 6),
              h = SIMD.Float32x4.shuffle(s, a, 1, 3, 5, 7),
              SIMD.Float32x4.store(t, 8, c),
              SIMD.Float32x4.store(t, 12, h),
              t
          }
          ,
          r.transpose = i.USE_SIMD ? r.SIMD.transpose : r.scalar.transpose,
          r.scalar.invert = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , l = e[6]
                , u = e[7]
                , c = e[8]
                , h = e[9]
                , p = e[10]
                , d = e[11]
                , f = e[12]
                , m = e[13]
                , v = e[14]
                , y = e[15]
                , g = n * a - i * s
                , _ = n * l - r * s
                , b = n * u - o * s
                , w = i * l - r * a
                , x = i * u - o * a
                , S = r * u - o * l
                , M = c * m - h * f
                , E = c * v - p * f
                , T = c * y - d * f
                , D = h * v - p * m
                , I = h * y - d * m
                , C = p * y - d * v
                , L = g * C - _ * I + b * D + w * T - x * E + S * M;
              return L ? (L = 1 / L,
              t[0] = (a * C - l * I + u * D) * L,
              t[1] = (r * I - i * C - o * D) * L,
              t[2] = (m * S - v * x + y * w) * L,
              t[3] = (p * x - h * S - d * w) * L,
              t[4] = (l * T - s * C - u * E) * L,
              t[5] = (n * C - r * T + o * E) * L,
              t[6] = (v * b - f * S - y * _) * L,
              t[7] = (c * S - p * b + d * _) * L,
              t[8] = (s * I - a * T + u * M) * L,
              t[9] = (i * T - n * I - o * M) * L,
              t[10] = (f * x - m * b + y * g) * L,
              t[11] = (h * b - c * x - d * g) * L,
              t[12] = (a * E - s * D - l * M) * L,
              t[13] = (n * D - i * E + r * M) * L,
              t[14] = (m * _ - f * w - v * g) * L,
              t[15] = (c * w - h * _ + p * g) * L,
              t) : null
          }
          ,
          r.SIMD.invert = function(t, e) {
              var n, i, r, o, s, a, l, u, c, h, p = SIMD.Float32x4.load(e, 0), d = SIMD.Float32x4.load(e, 4), f = SIMD.Float32x4.load(e, 8), m = SIMD.Float32x4.load(e, 12);
              return s = SIMD.Float32x4.shuffle(p, d, 0, 1, 4, 5),
              i = SIMD.Float32x4.shuffle(f, m, 0, 1, 4, 5),
              n = SIMD.Float32x4.shuffle(s, i, 0, 2, 4, 6),
              i = SIMD.Float32x4.shuffle(i, s, 1, 3, 5, 7),
              s = SIMD.Float32x4.shuffle(p, d, 2, 3, 6, 7),
              o = SIMD.Float32x4.shuffle(f, m, 2, 3, 6, 7),
              r = SIMD.Float32x4.shuffle(s, o, 0, 2, 4, 6),
              o = SIMD.Float32x4.shuffle(o, s, 1, 3, 5, 7),
              s = SIMD.Float32x4.mul(r, o),
              s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2),
              a = SIMD.Float32x4.mul(i, s),
              l = SIMD.Float32x4.mul(n, s),
              s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1),
              a = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, s), a),
              l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, s), l),
              l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1),
              s = SIMD.Float32x4.mul(i, r),
              s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2),
              a = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, s), a),
              c = SIMD.Float32x4.mul(n, s),
              s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1),
              a = SIMD.Float32x4.sub(a, SIMD.Float32x4.mul(o, s)),
              c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, s), c),
              c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1),
              s = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), o),
              s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2),
              r = SIMD.Float32x4.swizzle(r, 2, 3, 0, 1),
              a = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, s), a),
              u = SIMD.Float32x4.mul(n, s),
              s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1),
              a = SIMD.Float32x4.sub(a, SIMD.Float32x4.mul(r, s)),
              u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, s), u),
              u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1),
              s = SIMD.Float32x4.mul(n, i),
              s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2),
              u = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, s), u),
              c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, s), c),
              s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1),
              u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, s), u),
              c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(r, s)),
              s = SIMD.Float32x4.mul(n, o),
              s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2),
              l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(r, s)),
              u = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, s), u),
              s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1),
              l = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, s), l),
              u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(i, s)),
              s = SIMD.Float32x4.mul(n, r),
              s = SIMD.Float32x4.swizzle(s, 1, 0, 3, 2),
              l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, s), l),
              c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(i, s)),
              s = SIMD.Float32x4.swizzle(s, 2, 3, 0, 1),
              l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(o, s)),
              c = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, s), c),
              h = SIMD.Float32x4.mul(n, a),
              h = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), h),
              h = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(h, 1, 0, 3, 2), h),
              s = SIMD.Float32x4.reciprocalApproximation(h),
              h = SIMD.Float32x4.sub(SIMD.Float32x4.add(s, s), SIMD.Float32x4.mul(h, SIMD.Float32x4.mul(s, s))),
              (h = SIMD.Float32x4.swizzle(h, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(h, a)),
              SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(h, l)),
              SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(h, u)),
              SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(h, c)),
              t) : null
          }
          ,
          r.invert = i.USE_SIMD ? r.SIMD.invert : r.scalar.invert,
          r.scalar.adjoint = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = e[3]
                , s = e[4]
                , a = e[5]
                , l = e[6]
                , u = e[7]
                , c = e[8]
                , h = e[9]
                , p = e[10]
                , d = e[11]
                , f = e[12]
                , m = e[13]
                , v = e[14]
                , y = e[15];
              return t[0] = a * (p * y - d * v) - h * (l * y - u * v) + m * (l * d - u * p),
              t[1] = -(i * (p * y - d * v) - h * (r * y - o * v) + m * (r * d - o * p)),
              t[2] = i * (l * y - u * v) - a * (r * y - o * v) + m * (r * u - o * l),
              t[3] = -(i * (l * d - u * p) - a * (r * d - o * p) + h * (r * u - o * l)),
              t[4] = -(s * (p * y - d * v) - c * (l * y - u * v) + f * (l * d - u * p)),
              t[5] = n * (p * y - d * v) - c * (r * y - o * v) + f * (r * d - o * p),
              t[6] = -(n * (l * y - u * v) - s * (r * y - o * v) + f * (r * u - o * l)),
              t[7] = n * (l * d - u * p) - s * (r * d - o * p) + c * (r * u - o * l),
              t[8] = s * (h * y - d * m) - c * (a * y - u * m) + f * (a * d - u * h),
              t[9] = -(n * (h * y - d * m) - c * (i * y - o * m) + f * (i * d - o * h)),
              t[10] = n * (a * y - u * m) - s * (i * y - o * m) + f * (i * u - o * a),
              t[11] = -(n * (a * d - u * h) - s * (i * d - o * h) + c * (i * u - o * a)),
              t[12] = -(s * (h * v - p * m) - c * (a * v - l * m) + f * (a * p - l * h)),
              t[13] = n * (h * v - p * m) - c * (i * v - r * m) + f * (i * p - r * h),
              t[14] = -(n * (a * v - l * m) - s * (i * v - r * m) + f * (i * l - r * a)),
              t[15] = n * (a * p - l * h) - s * (i * p - r * h) + c * (i * l - r * a),
              t
          }
          ,
          r.SIMD.adjoint = function(t, e) {
              var n, i, r, o, s, a, l, u, c, h, p, d, f;
              return n = SIMD.Float32x4.load(e, 0),
              i = SIMD.Float32x4.load(e, 4),
              r = SIMD.Float32x4.load(e, 8),
              o = SIMD.Float32x4.load(e, 12),
              c = SIMD.Float32x4.shuffle(n, i, 0, 1, 4, 5),
              a = SIMD.Float32x4.shuffle(r, o, 0, 1, 4, 5),
              s = SIMD.Float32x4.shuffle(c, a, 0, 2, 4, 6),
              a = SIMD.Float32x4.shuffle(a, c, 1, 3, 5, 7),
              c = SIMD.Float32x4.shuffle(n, i, 2, 3, 6, 7),
              u = SIMD.Float32x4.shuffle(r, o, 2, 3, 6, 7),
              l = SIMD.Float32x4.shuffle(c, u, 0, 2, 4, 6),
              u = SIMD.Float32x4.shuffle(u, c, 1, 3, 5, 7),
              c = SIMD.Float32x4.mul(l, u),
              c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2),
              h = SIMD.Float32x4.mul(a, c),
              p = SIMD.Float32x4.mul(s, c),
              c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1),
              h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, c), h),
              p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, c), p),
              p = SIMD.Float32x4.swizzle(p, 2, 3, 0, 1),
              c = SIMD.Float32x4.mul(a, l),
              c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2),
              h = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), h),
              f = SIMD.Float32x4.mul(s, c),
              c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1),
              h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(u, c)),
              f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, c), f),
              f = SIMD.Float32x4.swizzle(f, 2, 3, 0, 1),
              c = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u),
              c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2),
              l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1),
              h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), h),
              d = SIMD.Float32x4.mul(s, c),
              c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1),
              h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(l, c)),
              d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, c), d),
              d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1),
              c = SIMD.Float32x4.mul(s, a),
              c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2),
              d = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), d),
              f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, c), f),
              c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1),
              d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), d),
              f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(l, c)),
              c = SIMD.Float32x4.mul(s, u),
              c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2),
              p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(l, c)),
              d = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, c), d),
              c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1),
              p = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), p),
              d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(a, c)),
              c = SIMD.Float32x4.mul(s, l),
              c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2),
              p = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), p),
              f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(a, c)),
              c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1),
              p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(u, c)),
              f = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, c), f),
              SIMD.Float32x4.store(t, 0, h),
              SIMD.Float32x4.store(t, 4, p),
              SIMD.Float32x4.store(t, 8, d),
              SIMD.Float32x4.store(t, 12, f),
              t
          }
          ,
          r.adjoint = i.USE_SIMD ? r.SIMD.adjoint : r.scalar.adjoint,
          r.determinant = function(t) {
              var e = t[0]
                , n = t[1]
                , i = t[2]
                , r = t[3]
                , o = t[4]
                , s = t[5]
                , a = t[6]
                , l = t[7]
                , u = t[8]
                , c = t[9]
                , h = t[10]
                , p = t[11]
                , d = t[12]
                , f = t[13]
                , m = t[14]
                , v = t[15];
              return (e * s - n * o) * (h * v - p * m) - (e * a - i * o) * (c * v - p * f) + (e * l - r * o) * (c * m - h * f) + (n * a - i * s) * (u * v - p * d) - (n * l - r * s) * (u * m - h * d) + (i * l - r * a) * (u * f - c * d)
          }
          ,
          r.SIMD.multiply = function(t, e, n) {
              var i = SIMD.Float32x4.load(e, 0)
                , r = SIMD.Float32x4.load(e, 4)
                , o = SIMD.Float32x4.load(e, 8)
                , s = SIMD.Float32x4.load(e, 12)
                , a = SIMD.Float32x4.load(n, 0)
                , l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 0, 0, 0, 0), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 3, 3, 3, 3), s))));
              SIMD.Float32x4.store(t, 0, l);
              var u = SIMD.Float32x4.load(n, 4)
                , c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 0, 0, 0, 0), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(u, 3, 3, 3, 3), s))));
              SIMD.Float32x4.store(t, 4, c);
              var h = SIMD.Float32x4.load(n, 8)
                , p = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), s))));
              SIMD.Float32x4.store(t, 8, p);
              var d = SIMD.Float32x4.load(n, 12)
                , f = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), s))));
              return SIMD.Float32x4.store(t, 12, f),
              t
          }
          ,
          r.scalar.multiply = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = e[4]
                , l = e[5]
                , u = e[6]
                , c = e[7]
                , h = e[8]
                , p = e[9]
                , d = e[10]
                , f = e[11]
                , m = e[12]
                , v = e[13]
                , y = e[14]
                , g = e[15]
                , _ = n[0]
                , b = n[1]
                , w = n[2]
                , x = n[3];
              return t[0] = _ * i + b * a + w * h + x * m,
              t[1] = _ * r + b * l + w * p + x * v,
              t[2] = _ * o + b * u + w * d + x * y,
              t[3] = _ * s + b * c + w * f + x * g,
              _ = n[4],
              b = n[5],
              w = n[6],
              x = n[7],
              t[4] = _ * i + b * a + w * h + x * m,
              t[5] = _ * r + b * l + w * p + x * v,
              t[6] = _ * o + b * u + w * d + x * y,
              t[7] = _ * s + b * c + w * f + x * g,
              _ = n[8],
              b = n[9],
              w = n[10],
              x = n[11],
              t[8] = _ * i + b * a + w * h + x * m,
              t[9] = _ * r + b * l + w * p + x * v,
              t[10] = _ * o + b * u + w * d + x * y,
              t[11] = _ * s + b * c + w * f + x * g,
              _ = n[12],
              b = n[13],
              w = n[14],
              x = n[15],
              t[12] = _ * i + b * a + w * h + x * m,
              t[13] = _ * r + b * l + w * p + x * v,
              t[14] = _ * o + b * u + w * d + x * y,
              t[15] = _ * s + b * c + w * f + x * g,
              t
          }
          ,
          r.multiply = i.USE_SIMD ? r.SIMD.multiply : r.scalar.multiply,
          r.mul = r.multiply,
          r.scalar.translate = function(t, e, n) {
              var i, r, o, s, a, l, u, c, h, p, d, f, m = n[0], v = n[1], y = n[2];
              return e === t ? (t[12] = e[0] * m + e[4] * v + e[8] * y + e[12],
              t[13] = e[1] * m + e[5] * v + e[9] * y + e[13],
              t[14] = e[2] * m + e[6] * v + e[10] * y + e[14],
              t[15] = e[3] * m + e[7] * v + e[11] * y + e[15]) : (i = e[0],
              r = e[1],
              o = e[2],
              s = e[3],
              a = e[4],
              l = e[5],
              u = e[6],
              c = e[7],
              h = e[8],
              p = e[9],
              d = e[10],
              f = e[11],
              t[0] = i,
              t[1] = r,
              t[2] = o,
              t[3] = s,
              t[4] = a,
              t[5] = l,
              t[6] = u,
              t[7] = c,
              t[8] = h,
              t[9] = p,
              t[10] = d,
              t[11] = f,
              t[12] = i * m + a * v + h * y + e[12],
              t[13] = r * m + l * v + p * y + e[13],
              t[14] = o * m + u * v + d * y + e[14],
              t[15] = s * m + c * v + f * y + e[15]),
              t
          }
          ,
          r.SIMD.translate = function(t, e, n) {
              var i = SIMD.Float32x4.load(e, 0)
                , r = SIMD.Float32x4.load(e, 4)
                , o = SIMD.Float32x4.load(e, 8)
                , s = SIMD.Float32x4.load(e, 12)
                , a = SIMD.Float32x4(n[0], n[1], n[2], 0);
              e !== t && (t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[4] = e[4],
              t[5] = e[5],
              t[6] = e[6],
              t[7] = e[7],
              t[8] = e[8],
              t[9] = e[9],
              t[10] = e[10],
              t[11] = e[11]),
              i = SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(a, 0, 0, 0, 0)),
              r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(a, 1, 1, 1, 1)),
              o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(a, 2, 2, 2, 2));
              var l = SIMD.Float32x4.add(i, SIMD.Float32x4.add(r, SIMD.Float32x4.add(o, s)));
              return SIMD.Float32x4.store(t, 12, l),
              t
          }
          ,
          r.translate = i.USE_SIMD ? r.SIMD.translate : r.scalar.translate,
          r.scalar.scale = function(t, e, n) {
              var i = n[0]
                , r = n[1]
                , o = n[2];
              return t[0] = e[0] * i,
              t[1] = e[1] * i,
              t[2] = e[2] * i,
              t[3] = e[3] * i,
              t[4] = e[4] * r,
              t[5] = e[5] * r,
              t[6] = e[6] * r,
              t[7] = e[7] * r,
              t[8] = e[8] * o,
              t[9] = e[9] * o,
              t[10] = e[10] * o,
              t[11] = e[11] * o,
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15],
              t
          }
          ,
          r.SIMD.scale = function(t, e, n) {
              var i, r, o, s = SIMD.Float32x4(n[0], n[1], n[2], 0);
              return i = SIMD.Float32x4.load(e, 0),
              SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(s, 0, 0, 0, 0))),
              r = SIMD.Float32x4.load(e, 4),
              SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(s, 1, 1, 1, 1))),
              o = SIMD.Float32x4.load(e, 8),
              SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(s, 2, 2, 2, 2))),
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15],
              t
          }
          ,
          r.scale = i.USE_SIMD ? r.SIMD.scale : r.scalar.scale,
          r.rotate = function(t, e, n, r) {
              var o, s, a, l, u, c, h, p, d, f, m, v, y, g, _, b, w, x, S, M, E, T, D, I, C = r[0], L = r[1], F = r[2], k = Math.sqrt(C * C + L * L + F * F);
              return Math.abs(k) < i.EPSILON ? null : (C *= k = 1 / k,
              L *= k,
              F *= k,
              o = Math.sin(n),
              a = 1 - (s = Math.cos(n)),
              l = e[0],
              u = e[1],
              c = e[2],
              h = e[3],
              p = e[4],
              d = e[5],
              f = e[6],
              m = e[7],
              v = e[8],
              y = e[9],
              g = e[10],
              _ = e[11],
              b = C * C * a + s,
              w = L * C * a + F * o,
              x = F * C * a - L * o,
              S = C * L * a - F * o,
              M = L * L * a + s,
              E = F * L * a + C * o,
              T = C * F * a + L * o,
              D = L * F * a - C * o,
              I = F * F * a + s,
              t[0] = l * b + p * w + v * x,
              t[1] = u * b + d * w + y * x,
              t[2] = c * b + f * w + g * x,
              t[3] = h * b + m * w + _ * x,
              t[4] = l * S + p * M + v * E,
              t[5] = u * S + d * M + y * E,
              t[6] = c * S + f * M + g * E,
              t[7] = h * S + m * M + _ * E,
              t[8] = l * T + p * D + v * I,
              t[9] = u * T + d * D + y * I,
              t[10] = c * T + f * D + g * I,
              t[11] = h * T + m * D + _ * I,
              e !== t && (t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]),
              t)
          }
          ,
          r.scalar.rotateX = function(t, e, n) {
              var i = Math.sin(n)
                , r = Math.cos(n)
                , o = e[4]
                , s = e[5]
                , a = e[6]
                , l = e[7]
                , u = e[8]
                , c = e[9]
                , h = e[10]
                , p = e[11];
              return e !== t && (t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]),
              t[4] = o * r + u * i,
              t[5] = s * r + c * i,
              t[6] = a * r + h * i,
              t[7] = l * r + p * i,
              t[8] = u * r - o * i,
              t[9] = c * r - s * i,
              t[10] = h * r - a * i,
              t[11] = p * r - l * i,
              t
          }
          ,
          r.SIMD.rotateX = function(t, e, n) {
              var i = SIMD.Float32x4.splat(Math.sin(n))
                , r = SIMD.Float32x4.splat(Math.cos(n));
              e !== t && (t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]);
              var o = SIMD.Float32x4.load(e, 4)
                , s = SIMD.Float32x4.load(e, 8);
              return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(s, i))),
              SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, r), SIMD.Float32x4.mul(o, i))),
              t
          }
          ,
          r.rotateX = i.USE_SIMD ? r.SIMD.rotateX : r.scalar.rotateX,
          r.scalar.rotateY = function(t, e, n) {
              var i = Math.sin(n)
                , r = Math.cos(n)
                , o = e[0]
                , s = e[1]
                , a = e[2]
                , l = e[3]
                , u = e[8]
                , c = e[9]
                , h = e[10]
                , p = e[11];
              return e !== t && (t[4] = e[4],
              t[5] = e[5],
              t[6] = e[6],
              t[7] = e[7],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]),
              t[0] = o * r - u * i,
              t[1] = s * r - c * i,
              t[2] = a * r - h * i,
              t[3] = l * r - p * i,
              t[8] = o * i + u * r,
              t[9] = s * i + c * r,
              t[10] = a * i + h * r,
              t[11] = l * i + p * r,
              t
          }
          ,
          r.SIMD.rotateY = function(t, e, n) {
              var i = SIMD.Float32x4.splat(Math.sin(n))
                , r = SIMD.Float32x4.splat(Math.cos(n));
              e !== t && (t[4] = e[4],
              t[5] = e[5],
              t[6] = e[6],
              t[7] = e[7],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]);
              var o = SIMD.Float32x4.load(e, 0)
                , s = SIMD.Float32x4.load(e, 8);
              return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(s, i))),
              SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(s, r))),
              t
          }
          ,
          r.rotateY = i.USE_SIMD ? r.SIMD.rotateY : r.scalar.rotateY,
          r.scalar.rotateZ = function(t, e, n) {
              var i = Math.sin(n)
                , r = Math.cos(n)
                , o = e[0]
                , s = e[1]
                , a = e[2]
                , l = e[3]
                , u = e[4]
                , c = e[5]
                , h = e[6]
                , p = e[7];
              return e !== t && (t[8] = e[8],
              t[9] = e[9],
              t[10] = e[10],
              t[11] = e[11],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]),
              t[0] = o * r + u * i,
              t[1] = s * r + c * i,
              t[2] = a * r + h * i,
              t[3] = l * r + p * i,
              t[4] = u * r - o * i,
              t[5] = c * r - s * i,
              t[6] = h * r - a * i,
              t[7] = p * r - l * i,
              t
          }
          ,
          r.SIMD.rotateZ = function(t, e, n) {
              var i = SIMD.Float32x4.splat(Math.sin(n))
                , r = SIMD.Float32x4.splat(Math.cos(n));
              e !== t && (t[8] = e[8],
              t[9] = e[9],
              t[10] = e[10],
              t[11] = e[11],
              t[12] = e[12],
              t[13] = e[13],
              t[14] = e[14],
              t[15] = e[15]);
              var o = SIMD.Float32x4.load(e, 0)
                , s = SIMD.Float32x4.load(e, 4);
              return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(s, i))),
              SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, r), SIMD.Float32x4.mul(o, i))),
              t
          }
          ,
          r.rotateZ = i.USE_SIMD ? r.SIMD.rotateZ : r.scalar.rotateZ,
          r.fromTranslation = function(t, e) {
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = 1,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = 1,
              t[11] = 0,
              t[12] = e[0],
              t[13] = e[1],
              t[14] = e[2],
              t[15] = 1,
              t
          }
          ,
          r.fromScaling = function(t, e) {
              return t[0] = e[0],
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = e[1],
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = e[2],
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          r.fromRotation = function(t, e, n) {
              var r, o, s, a = n[0], l = n[1], u = n[2], c = Math.sqrt(a * a + l * l + u * u);
              return Math.abs(c) < i.EPSILON ? null : (a *= c = 1 / c,
              l *= c,
              u *= c,
              r = Math.sin(e),
              s = 1 - (o = Math.cos(e)),
              t[0] = a * a * s + o,
              t[1] = l * a * s + u * r,
              t[2] = u * a * s - l * r,
              t[3] = 0,
              t[4] = a * l * s - u * r,
              t[5] = l * l * s + o,
              t[6] = u * l * s + a * r,
              t[7] = 0,
              t[8] = a * u * s + l * r,
              t[9] = l * u * s - a * r,
              t[10] = u * u * s + o,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t)
          }
          ,
          r.fromXRotation = function(t, e) {
              var n = Math.sin(e)
                , i = Math.cos(e);
              return t[0] = 1,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = i,
              t[6] = n,
              t[7] = 0,
              t[8] = 0,
              t[9] = -n,
              t[10] = i,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          r.fromYRotation = function(t, e) {
              var n = Math.sin(e)
                , i = Math.cos(e);
              return t[0] = i,
              t[1] = 0,
              t[2] = -n,
              t[3] = 0,
              t[4] = 0,
              t[5] = 1,
              t[6] = 0,
              t[7] = 0,
              t[8] = n,
              t[9] = 0,
              t[10] = i,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          r.fromZRotation = function(t, e) {
              var n = Math.sin(e)
                , i = Math.cos(e);
              return t[0] = i,
              t[1] = n,
              t[2] = 0,
              t[3] = 0,
              t[4] = -n,
              t[5] = i,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = 1,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          r.fromRotationTranslation = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = i + i
                , l = r + r
                , u = o + o
                , c = i * a
                , h = i * l
                , p = i * u
                , d = r * l
                , f = r * u
                , m = o * u
                , v = s * a
                , y = s * l
                , g = s * u;
              return t[0] = 1 - (d + m),
              t[1] = h + g,
              t[2] = p - y,
              t[3] = 0,
              t[4] = h - g,
              t[5] = 1 - (c + m),
              t[6] = f + v,
              t[7] = 0,
              t[8] = p + y,
              t[9] = f - v,
              t[10] = 1 - (c + d),
              t[11] = 0,
              t[12] = n[0],
              t[13] = n[1],
              t[14] = n[2],
              t[15] = 1,
              t
          }
          ,
          r.getTranslation = function(t, e) {
              return t[0] = e[12],
              t[1] = e[13],
              t[2] = e[14],
              t
          }
          ,
          r.getScaling = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = e[4]
                , s = e[5]
                , a = e[6]
                , l = e[8]
                , u = e[9]
                , c = e[10];
              return t[0] = Math.sqrt(n * n + i * i + r * r),
              t[1] = Math.sqrt(o * o + s * s + a * a),
              t[2] = Math.sqrt(l * l + u * u + c * c),
              t
          }
          ,
          r.getRotation = function(t, e) {
              var n = e[0] + e[5] + e[10]
                , i = 0;
              return n > 0 ? (i = 2 * Math.sqrt(n + 1),
              t[3] = .25 * i,
              t[0] = (e[6] - e[9]) / i,
              t[1] = (e[8] - e[2]) / i,
              t[2] = (e[1] - e[4]) / i) : e[0] > e[5] & e[0] > e[10] ? (i = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]),
              t[3] = (e[6] - e[9]) / i,
              t[0] = .25 * i,
              t[1] = (e[1] + e[4]) / i,
              t[2] = (e[8] + e[2]) / i) : e[5] > e[10] ? (i = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]),
              t[3] = (e[8] - e[2]) / i,
              t[0] = (e[1] + e[4]) / i,
              t[1] = .25 * i,
              t[2] = (e[6] + e[9]) / i) : (i = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]),
              t[3] = (e[1] - e[4]) / i,
              t[0] = (e[8] + e[2]) / i,
              t[1] = (e[6] + e[9]) / i,
              t[2] = .25 * i),
              t
          }
          ,
          r.fromRotationTranslationScale = function(t, e, n, i) {
              var r = e[0]
                , o = e[1]
                , s = e[2]
                , a = e[3]
                , l = r + r
                , u = o + o
                , c = s + s
                , h = r * l
                , p = r * u
                , d = r * c
                , f = o * u
                , m = o * c
                , v = s * c
                , y = a * l
                , g = a * u
                , _ = a * c
                , b = i[0]
                , w = i[1]
                , x = i[2];
              return t[0] = (1 - (f + v)) * b,
              t[1] = (p + _) * b,
              t[2] = (d - g) * b,
              t[3] = 0,
              t[4] = (p - _) * w,
              t[5] = (1 - (h + v)) * w,
              t[6] = (m + y) * w,
              t[7] = 0,
              t[8] = (d + g) * x,
              t[9] = (m - y) * x,
              t[10] = (1 - (h + f)) * x,
              t[11] = 0,
              t[12] = n[0],
              t[13] = n[1],
              t[14] = n[2],
              t[15] = 1,
              t
          }
          ,
          r.fromRotationTranslationScaleOrigin = function(t, e, n, i, r) {
              var o = e[0]
                , s = e[1]
                , a = e[2]
                , l = e[3]
                , u = o + o
                , c = s + s
                , h = a + a
                , p = o * u
                , d = o * c
                , f = o * h
                , m = s * c
                , v = s * h
                , y = a * h
                , g = l * u
                , _ = l * c
                , b = l * h
                , w = i[0]
                , x = i[1]
                , S = i[2]
                , M = r[0]
                , E = r[1]
                , T = r[2];
              return t[0] = (1 - (m + y)) * w,
              t[1] = (d + b) * w,
              t[2] = (f - _) * w,
              t[3] = 0,
              t[4] = (d - b) * x,
              t[5] = (1 - (p + y)) * x,
              t[6] = (v + g) * x,
              t[7] = 0,
              t[8] = (f + _) * S,
              t[9] = (v - g) * S,
              t[10] = (1 - (p + m)) * S,
              t[11] = 0,
              t[12] = n[0] + M - (t[0] * M + t[4] * E + t[8] * T),
              t[13] = n[1] + E - (t[1] * M + t[5] * E + t[9] * T),
              t[14] = n[2] + T - (t[2] * M + t[6] * E + t[10] * T),
              t[15] = 1,
              t
          }
          ,
          r.fromQuat = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = e[3]
                , s = n + n
                , a = i + i
                , l = r + r
                , u = n * s
                , c = i * s
                , h = i * a
                , p = r * s
                , d = r * a
                , f = r * l
                , m = o * s
                , v = o * a
                , y = o * l;
              return t[0] = 1 - h - f,
              t[1] = c + y,
              t[2] = p - v,
              t[3] = 0,
              t[4] = c - y,
              t[5] = 1 - u - f,
              t[6] = d + m,
              t[7] = 0,
              t[8] = p + v,
              t[9] = d - m,
              t[10] = 1 - u - h,
              t[11] = 0,
              t[12] = 0,
              t[13] = 0,
              t[14] = 0,
              t[15] = 1,
              t
          }
          ,
          r.frustum = function(t, e, n, i, r, o, s) {
              var a = 1 / (n - e)
                , l = 1 / (r - i)
                , u = 1 / (o - s);
              return t[0] = 2 * o * a,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = 2 * o * l,
              t[6] = 0,
              t[7] = 0,
              t[8] = (n + e) * a,
              t[9] = (r + i) * l,
              t[10] = (s + o) * u,
              t[11] = -1,
              t[12] = 0,
              t[13] = 0,
              t[14] = s * o * 2 * u,
              t[15] = 0,
              t
          }
          ,
          r.perspective = function(t, e, n, i, r) {
              var o = 1 / Math.tan(e / 2)
                , s = 1 / (i - r);
              return t[0] = o / n,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = o,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = (r + i) * s,
              t[11] = -1,
              t[12] = 0,
              t[13] = 0,
              t[14] = 2 * r * i * s,
              t[15] = 0,
              t
          }
          ,
          r.perspectiveFromFieldOfView = function(t, e, n, i) {
              var r = Math.tan(e.upDegrees * Math.PI / 180)
                , o = Math.tan(e.downDegrees * Math.PI / 180)
                , s = Math.tan(e.leftDegrees * Math.PI / 180)
                , a = Math.tan(e.rightDegrees * Math.PI / 180)
                , l = 2 / (s + a)
                , u = 2 / (r + o);
              return t[0] = l,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = u,
              t[6] = 0,
              t[7] = 0,
              t[8] = -(s - a) * l * .5,
              t[9] = (r - o) * u * .5,
              t[10] = i / (n - i),
              t[11] = -1,
              t[12] = 0,
              t[13] = 0,
              t[14] = i * n / (n - i),
              t[15] = 0,
              t
          }
          ,
          r.ortho = function(t, e, n, i, r, o, s) {
              var a = 1 / (e - n)
                , l = 1 / (i - r)
                , u = 1 / (o - s);
              return t[0] = -2 * a,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t[4] = 0,
              t[5] = -2 * l,
              t[6] = 0,
              t[7] = 0,
              t[8] = 0,
              t[9] = 0,
              t[10] = 2 * u,
              t[11] = 0,
              t[12] = (e + n) * a,
              t[13] = (r + i) * l,
              t[14] = (s + o) * u,
              t[15] = 1,
              t
          }
          ,
          r.lookAt = function(t, e, n, o) {
              var s, a, l, u, c, h, p, d, f, m, v = e[0], y = e[1], g = e[2], _ = o[0], b = o[1], w = o[2], x = n[0], S = n[1], M = n[2];
              return Math.abs(v - x) < i.EPSILON && Math.abs(y - S) < i.EPSILON && Math.abs(g - M) < i.EPSILON ? r.identity(t) : (p = v - x,
              d = y - S,
              f = g - M,
              s = b * (f *= m = 1 / Math.sqrt(p * p + d * d + f * f)) - w * (d *= m),
              a = w * (p *= m) - _ * f,
              l = _ * d - b * p,
              (m = Math.sqrt(s * s + a * a + l * l)) ? (s *= m = 1 / m,
              a *= m,
              l *= m) : (s = 0,
              a = 0,
              l = 0),
              u = d * l - f * a,
              c = f * s - p * l,
              h = p * a - d * s,
              (m = Math.sqrt(u * u + c * c + h * h)) ? (u *= m = 1 / m,
              c *= m,
              h *= m) : (u = 0,
              c = 0,
              h = 0),
              t[0] = s,
              t[1] = u,
              t[2] = p,
              t[3] = 0,
              t[4] = a,
              t[5] = c,
              t[6] = d,
              t[7] = 0,
              t[8] = l,
              t[9] = h,
              t[10] = f,
              t[11] = 0,
              t[12] = -(s * v + a * y + l * g),
              t[13] = -(u * v + c * y + h * g),
              t[14] = -(p * v + d * y + f * g),
              t[15] = 1,
              t)
          }
          ,
          r.str = function(t) {
              return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
          }
          ,
          r.frob = function(t) {
              return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
          }
          ,
          r.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t[4] = e[4] + n[4],
              t[5] = e[5] + n[5],
              t[6] = e[6] + n[6],
              t[7] = e[7] + n[7],
              t[8] = e[8] + n[8],
              t[9] = e[9] + n[9],
              t[10] = e[10] + n[10],
              t[11] = e[11] + n[11],
              t[12] = e[12] + n[12],
              t[13] = e[13] + n[13],
              t[14] = e[14] + n[14],
              t[15] = e[15] + n[15],
              t
          }
          ,
          r.subtract = function(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t[4] = e[4] - n[4],
              t[5] = e[5] - n[5],
              t[6] = e[6] - n[6],
              t[7] = e[7] - n[7],
              t[8] = e[8] - n[8],
              t[9] = e[9] - n[9],
              t[10] = e[10] - n[10],
              t[11] = e[11] - n[11],
              t[12] = e[12] - n[12],
              t[13] = e[13] - n[13],
              t[14] = e[14] - n[14],
              t[15] = e[15] - n[15],
              t
          }
          ,
          r.sub = r.subtract,
          r.multiplyScalar = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t[4] = e[4] * n,
              t[5] = e[5] * n,
              t[6] = e[6] * n,
              t[7] = e[7] * n,
              t[8] = e[8] * n,
              t[9] = e[9] * n,
              t[10] = e[10] * n,
              t[11] = e[11] * n,
              t[12] = e[12] * n,
              t[13] = e[13] * n,
              t[14] = e[14] * n,
              t[15] = e[15] * n,
              t
          }
          ,
          r.multiplyScalarAndAdd = function(t, e, n, i) {
              return t[0] = e[0] + n[0] * i,
              t[1] = e[1] + n[1] * i,
              t[2] = e[2] + n[2] * i,
              t[3] = e[3] + n[3] * i,
              t[4] = e[4] + n[4] * i,
              t[5] = e[5] + n[5] * i,
              t[6] = e[6] + n[6] * i,
              t[7] = e[7] + n[7] * i,
              t[8] = e[8] + n[8] * i,
              t[9] = e[9] + n[9] * i,
              t[10] = e[10] + n[10] * i,
              t[11] = e[11] + n[11] * i,
              t[12] = e[12] + n[12] * i,
              t[13] = e[13] + n[13] * i,
              t[14] = e[14] + n[14] * i,
              t[15] = e[15] + n[15] * i,
              t
          }
          ,
          r.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
          }
          ,
          r.equals = function(t, e) {
              var n = t[0]
                , r = t[1]
                , o = t[2]
                , s = t[3]
                , a = t[4]
                , l = t[5]
                , u = t[6]
                , c = t[7]
                , h = t[8]
                , p = t[9]
                , d = t[10]
                , f = t[11]
                , m = t[12]
                , v = t[13]
                , y = t[14]
                , g = t[15]
                , _ = e[0]
                , b = e[1]
                , w = e[2]
                , x = e[3]
                , S = e[4]
                , M = e[5]
                , E = e[6]
                , T = e[7]
                , D = e[8]
                , I = e[9]
                , C = e[10]
                , L = e[11]
                , F = e[12]
                , k = e[13]
                , A = e[14]
                , O = e[15];
              return Math.abs(n - _) <= i.EPSILON * Math.max(1, Math.abs(n), Math.abs(_)) && Math.abs(r - b) <= i.EPSILON * Math.max(1, Math.abs(r), Math.abs(b)) && Math.abs(o - w) <= i.EPSILON * Math.max(1, Math.abs(o), Math.abs(w)) && Math.abs(s - x) <= i.EPSILON * Math.max(1, Math.abs(s), Math.abs(x)) && Math.abs(a - S) <= i.EPSILON * Math.max(1, Math.abs(a), Math.abs(S)) && Math.abs(l - M) <= i.EPSILON * Math.max(1, Math.abs(l), Math.abs(M)) && Math.abs(u - E) <= i.EPSILON * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(c - T) <= i.EPSILON * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(h - D) <= i.EPSILON * Math.max(1, Math.abs(h), Math.abs(D)) && Math.abs(p - I) <= i.EPSILON * Math.max(1, Math.abs(p), Math.abs(I)) && Math.abs(d - C) <= i.EPSILON * Math.max(1, Math.abs(d), Math.abs(C)) && Math.abs(f - L) <= i.EPSILON * Math.max(1, Math.abs(f), Math.abs(L)) && Math.abs(m - F) <= i.EPSILON * Math.max(1, Math.abs(m), Math.abs(F)) && Math.abs(v - k) <= i.EPSILON * Math.max(1, Math.abs(v), Math.abs(k)) && Math.abs(y - A) <= i.EPSILON * Math.max(1, Math.abs(y), Math.abs(A)) && Math.abs(g - O) <= i.EPSILON * Math.max(1, Math.abs(g), Math.abs(O))
          }
          ,
          e.exports = r
      }
      , {
          "./common.js": 5
      }],
      10: [function(t, e, n) {
          var i, r, o, s, a, l, u = t("./common.js"), c = t("./mat3.js"), h = t("./vec3.js"), p = t("./vec4.js"), d = {};
          d.create = function() {
              var t = new u.ARRAY_TYPE(4);
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t
          }
          ,
          d.rotationTo = (i = h.create(),
          r = h.fromValues(1, 0, 0),
          o = h.fromValues(0, 1, 0),
          function(t, e, n) {
              var s = h.dot(e, n);
              return s < -.999999 ? (h.cross(i, r, e),
              h.length(i) < 1e-6 && h.cross(i, o, e),
              h.normalize(i, i),
              d.setAxisAngle(t, i, Math.PI),
              t) : s > .999999 ? (t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t) : (h.cross(i, e, n),
              t[0] = i[0],
              t[1] = i[1],
              t[2] = i[2],
              t[3] = 1 + s,
              d.normalize(t, t))
          }
          ),
          d.setAxes = (s = c.create(),
          function(t, e, n, i) {
              return s[0] = n[0],
              s[3] = n[1],
              s[6] = n[2],
              s[1] = i[0],
              s[4] = i[1],
              s[7] = i[2],
              s[2] = -e[0],
              s[5] = -e[1],
              s[8] = -e[2],
              d.normalize(t, d.fromMat3(t, s))
          }
          ),
          d.clone = p.clone,
          d.fromValues = p.fromValues,
          d.copy = p.copy,
          d.set = p.set,
          d.identity = function(t) {
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 1,
              t
          }
          ,
          d.setAxisAngle = function(t, e, n) {
              n *= .5;
              var i = Math.sin(n);
              return t[0] = i * e[0],
              t[1] = i * e[1],
              t[2] = i * e[2],
              t[3] = Math.cos(n),
              t
          }
          ,
          d.getAxisAngle = function(t, e) {
              var n = 2 * Math.acos(e[3])
                , i = Math.sin(n / 2);
              return 0 != i ? (t[0] = e[0] / i,
              t[1] = e[1] / i,
              t[2] = e[2] / i) : (t[0] = 1,
              t[1] = 0,
              t[2] = 0),
              n
          }
          ,
          d.add = p.add,
          d.multiply = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = n[0]
                , l = n[1]
                , u = n[2]
                , c = n[3];
              return t[0] = i * c + s * a + r * u - o * l,
              t[1] = r * c + s * l + o * a - i * u,
              t[2] = o * c + s * u + i * l - r * a,
              t[3] = s * c - i * a - r * l - o * u,
              t
          }
          ,
          d.mul = d.multiply,
          d.scale = p.scale,
          d.rotateX = function(t, e, n) {
              n *= .5;
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = Math.sin(n)
                , l = Math.cos(n);
              return t[0] = i * l + s * a,
              t[1] = r * l + o * a,
              t[2] = o * l - r * a,
              t[3] = s * l - i * a,
              t
          }
          ,
          d.rotateY = function(t, e, n) {
              n *= .5;
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = Math.sin(n)
                , l = Math.cos(n);
              return t[0] = i * l - o * a,
              t[1] = r * l + s * a,
              t[2] = o * l + i * a,
              t[3] = s * l - r * a,
              t
          }
          ,
          d.rotateZ = function(t, e, n) {
              n *= .5;
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3]
                , a = Math.sin(n)
                , l = Math.cos(n);
              return t[0] = i * l + r * a,
              t[1] = r * l - i * a,
              t[2] = o * l + s * a,
              t[3] = s * l - o * a,
              t
          }
          ,
          d.calculateW = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2];
              return t[0] = n,
              t[1] = i,
              t[2] = r,
              t[3] = Math.sqrt(Math.abs(1 - n * n - i * i - r * r)),
              t
          }
          ,
          d.dot = p.dot,
          d.lerp = p.lerp,
          d.slerp = function(t, e, n, i) {
              var r, o, s, a, l, u = e[0], c = e[1], h = e[2], p = e[3], d = n[0], f = n[1], m = n[2], v = n[3];
              return (o = u * d + c * f + h * m + p * v) < 0 && (o = -o,
              d = -d,
              f = -f,
              m = -m,
              v = -v),
              1 - o > 1e-6 ? (r = Math.acos(o),
              s = Math.sin(r),
              a = Math.sin((1 - i) * r) / s,
              l = Math.sin(i * r) / s) : (a = 1 - i,
              l = i),
              t[0] = a * u + l * d,
              t[1] = a * c + l * f,
              t[2] = a * h + l * m,
              t[3] = a * p + l * v,
              t
          }
          ,
          d.sqlerp = (a = d.create(),
          l = d.create(),
          function(t, e, n, i, r, o) {
              return d.slerp(a, e, r, o),
              d.slerp(l, n, i, o),
              d.slerp(t, a, l, 2 * o * (1 - o)),
              t
          }
          ),
          d.invert = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = e[3]
                , s = n * n + i * i + r * r + o * o
                , a = s ? 1 / s : 0;
              return t[0] = -n * a,
              t[1] = -i * a,
              t[2] = -r * a,
              t[3] = o * a,
              t
          }
          ,
          d.conjugate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t[2] = -e[2],
              t[3] = e[3],
              t
          }
          ,
          d.length = p.length,
          d.len = d.length,
          d.squaredLength = p.squaredLength,
          d.sqrLen = d.squaredLength,
          d.normalize = p.normalize,
          d.fromMat3 = function(t, e) {
              var n, i = e[0] + e[4] + e[8];
              if (i > 0)
                  n = Math.sqrt(i + 1),
                  t[3] = .5 * n,
                  n = .5 / n,
                  t[0] = (e[5] - e[7]) * n,
                  t[1] = (e[6] - e[2]) * n,
                  t[2] = (e[1] - e[3]) * n;
              else {
                  var r = 0;
                  e[4] > e[0] && (r = 1),
                  e[8] > e[3 * r + r] && (r = 2);
                  var o = (r + 1) % 3
                    , s = (r + 2) % 3;
                  n = Math.sqrt(e[3 * r + r] - e[3 * o + o] - e[3 * s + s] + 1),
                  t[r] = .5 * n,
                  n = .5 / n,
                  t[3] = (e[3 * o + s] - e[3 * s + o]) * n,
                  t[o] = (e[3 * o + r] + e[3 * r + o]) * n,
                  t[s] = (e[3 * s + r] + e[3 * r + s]) * n
              }
              return t
          }
          ,
          d.str = function(t) {
              return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
          }
          ,
          d.exactEquals = p.exactEquals,
          d.equals = p.equals,
          e.exports = d
      }
      , {
          "./common.js": 5,
          "./mat3.js": 8,
          "./vec3.js": 12,
          "./vec4.js": 13
      }],
      11: [function(t, e, n) {
          var i, r = t("./common.js"), o = {};
          o.create = function() {
              var t = new r.ARRAY_TYPE(2);
              return t[0] = 0,
              t[1] = 0,
              t
          }
          ,
          o.clone = function(t) {
              var e = new r.ARRAY_TYPE(2);
              return e[0] = t[0],
              e[1] = t[1],
              e
          }
          ,
          o.fromValues = function(t, e) {
              var n = new r.ARRAY_TYPE(2);
              return n[0] = t,
              n[1] = e,
              n
          }
          ,
          o.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t
          }
          ,
          o.set = function(t, e, n) {
              return t[0] = e,
              t[1] = n,
              t
          }
          ,
          o.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t
          }
          ,
          o.subtract = function(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t
          }
          ,
          o.sub = o.subtract,
          o.multiply = function(t, e, n) {
              return t[0] = e[0] * n[0],
              t[1] = e[1] * n[1],
              t
          }
          ,
          o.mul = o.multiply,
          o.divide = function(t, e, n) {
              return t[0] = e[0] / n[0],
              t[1] = e[1] / n[1],
              t
          }
          ,
          o.div = o.divide,
          o.ceil = function(t, e) {
              return t[0] = Math.ceil(e[0]),
              t[1] = Math.ceil(e[1]),
              t
          }
          ,
          o.floor = function(t, e) {
              return t[0] = Math.floor(e[0]),
              t[1] = Math.floor(e[1]),
              t
          }
          ,
          o.min = function(t, e, n) {
              return t[0] = Math.min(e[0], n[0]),
              t[1] = Math.min(e[1], n[1]),
              t
          }
          ,
          o.max = function(t, e, n) {
              return t[0] = Math.max(e[0], n[0]),
              t[1] = Math.max(e[1], n[1]),
              t
          }
          ,
          o.round = function(t, e) {
              return t[0] = Math.round(e[0]),
              t[1] = Math.round(e[1]),
              t
          }
          ,
          o.scale = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t
          }
          ,
          o.scaleAndAdd = function(t, e, n, i) {
              return t[0] = e[0] + n[0] * i,
              t[1] = e[1] + n[1] * i,
              t
          }
          ,
          o.distance = function(t, e) {
              var n = e[0] - t[0]
                , i = e[1] - t[1];
              return Math.sqrt(n * n + i * i)
          }
          ,
          o.dist = o.distance,
          o.squaredDistance = function(t, e) {
              var n = e[0] - t[0]
                , i = e[1] - t[1];
              return n * n + i * i
          }
          ,
          o.sqrDist = o.squaredDistance,
          o.length = function(t) {
              var e = t[0]
                , n = t[1];
              return Math.sqrt(e * e + n * n)
          }
          ,
          o.len = o.length,
          o.squaredLength = function(t) {
              var e = t[0]
                , n = t[1];
              return e * e + n * n
          }
          ,
          o.sqrLen = o.squaredLength,
          o.negate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t
          }
          ,
          o.inverse = function(t, e) {
              return t[0] = 1 / e[0],
              t[1] = 1 / e[1],
              t
          }
          ,
          o.normalize = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = n * n + i * i;
              return r > 0 && (r = 1 / Math.sqrt(r),
              t[0] = e[0] * r,
              t[1] = e[1] * r),
              t
          }
          ,
          o.dot = function(t, e) {
              return t[0] * e[0] + t[1] * e[1]
          }
          ,
          o.cross = function(t, e, n) {
              var i = e[0] * n[1] - e[1] * n[0];
              return t[0] = t[1] = 0,
              t[2] = i,
              t
          }
          ,
          o.lerp = function(t, e, n, i) {
              var r = e[0]
                , o = e[1];
              return t[0] = r + i * (n[0] - r),
              t[1] = o + i * (n[1] - o),
              t
          }
          ,
          o.random = function(t, e) {
              e = e || 1;
              var n = 2 * r.RANDOM() * Math.PI;
              return t[0] = Math.cos(n) * e,
              t[1] = Math.sin(n) * e,
              t
          }
          ,
          o.transformMat2 = function(t, e, n) {
              var i = e[0]
                , r = e[1];
              return t[0] = n[0] * i + n[2] * r,
              t[1] = n[1] * i + n[3] * r,
              t
          }
          ,
          o.transformMat2d = function(t, e, n) {
              var i = e[0]
                , r = e[1];
              return t[0] = n[0] * i + n[2] * r + n[4],
              t[1] = n[1] * i + n[3] * r + n[5],
              t
          }
          ,
          o.transformMat3 = function(t, e, n) {
              var i = e[0]
                , r = e[1];
              return t[0] = n[0] * i + n[3] * r + n[6],
              t[1] = n[1] * i + n[4] * r + n[7],
              t
          }
          ,
          o.transformMat4 = function(t, e, n) {
              var i = e[0]
                , r = e[1];
              return t[0] = n[0] * i + n[4] * r + n[12],
              t[1] = n[1] * i + n[5] * r + n[13],
              t
          }
          ,
          o.forEach = (i = o.create(),
          function(t, e, n, r, o, s) {
              var a, l;
              for (e || (e = 2),
              n || (n = 0),
              l = r ? Math.min(r * e + n, t.length) : t.length,
              a = n; a < l; a += e)
                  i[0] = t[a],
                  i[1] = t[a + 1],
                  o(i, i, s),
                  t[a] = i[0],
                  t[a + 1] = i[1];
              return t
          }
          ),
          o.str = function(t) {
              return "vec2(" + t[0] + ", " + t[1] + ")"
          }
          ,
          o.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1]
          }
          ,
          o.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = e[0]
                , s = e[1];
              return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s))
          }
          ,
          e.exports = o
      }
      , {
          "./common.js": 5
      }],
      12: [function(t, e, n) {
          var i, r = t("./common.js"), o = {};
          o.create = function() {
              var t = new r.ARRAY_TYPE(3);
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t
          }
          ,
          o.clone = function(t) {
              var e = new r.ARRAY_TYPE(3);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e
          }
          ,
          o.fromValues = function(t, e, n) {
              var i = new r.ARRAY_TYPE(3);
              return i[0] = t,
              i[1] = e,
              i[2] = n,
              i
          }
          ,
          o.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t
          }
          ,
          o.set = function(t, e, n, i) {
              return t[0] = e,
              t[1] = n,
              t[2] = i,
              t
          }
          ,
          o.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t
          }
          ,
          o.subtract = function(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t
          }
          ,
          o.sub = o.subtract,
          o.multiply = function(t, e, n) {
              return t[0] = e[0] * n[0],
              t[1] = e[1] * n[1],
              t[2] = e[2] * n[2],
              t
          }
          ,
          o.mul = o.multiply,
          o.divide = function(t, e, n) {
              return t[0] = e[0] / n[0],
              t[1] = e[1] / n[1],
              t[2] = e[2] / n[2],
              t
          }
          ,
          o.div = o.divide,
          o.ceil = function(t, e) {
              return t[0] = Math.ceil(e[0]),
              t[1] = Math.ceil(e[1]),
              t[2] = Math.ceil(e[2]),
              t
          }
          ,
          o.floor = function(t, e) {
              return t[0] = Math.floor(e[0]),
              t[1] = Math.floor(e[1]),
              t[2] = Math.floor(e[2]),
              t
          }
          ,
          o.min = function(t, e, n) {
              return t[0] = Math.min(e[0], n[0]),
              t[1] = Math.min(e[1], n[1]),
              t[2] = Math.min(e[2], n[2]),
              t
          }
          ,
          o.max = function(t, e, n) {
              return t[0] = Math.max(e[0], n[0]),
              t[1] = Math.max(e[1], n[1]),
              t[2] = Math.max(e[2], n[2]),
              t
          }
          ,
          o.round = function(t, e) {
              return t[0] = Math.round(e[0]),
              t[1] = Math.round(e[1]),
              t[2] = Math.round(e[2]),
              t
          }
          ,
          o.scale = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t
          }
          ,
          o.scaleAndAdd = function(t, e, n, i) {
              return t[0] = e[0] + n[0] * i,
              t[1] = e[1] + n[1] * i,
              t[2] = e[2] + n[2] * i,
              t
          }
          ,
          o.distance = function(t, e) {
              var n = e[0] - t[0]
                , i = e[1] - t[1]
                , r = e[2] - t[2];
              return Math.sqrt(n * n + i * i + r * r)
          }
          ,
          o.dist = o.distance,
          o.squaredDistance = function(t, e) {
              var n = e[0] - t[0]
                , i = e[1] - t[1]
                , r = e[2] - t[2];
              return n * n + i * i + r * r
          }
          ,
          o.sqrDist = o.squaredDistance,
          o.length = function(t) {
              var e = t[0]
                , n = t[1]
                , i = t[2];
              return Math.sqrt(e * e + n * n + i * i)
          }
          ,
          o.len = o.length,
          o.squaredLength = function(t) {
              var e = t[0]
                , n = t[1]
                , i = t[2];
              return e * e + n * n + i * i
          }
          ,
          o.sqrLen = o.squaredLength,
          o.negate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t[2] = -e[2],
              t
          }
          ,
          o.inverse = function(t, e) {
              return t[0] = 1 / e[0],
              t[1] = 1 / e[1],
              t[2] = 1 / e[2],
              t
          }
          ,
          o.normalize = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = n * n + i * i + r * r;
              return o > 0 && (o = 1 / Math.sqrt(o),
              t[0] = e[0] * o,
              t[1] = e[1] * o,
              t[2] = e[2] * o),
              t
          }
          ,
          o.dot = function(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
          }
          ,
          o.cross = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = n[0]
                , a = n[1]
                , l = n[2];
              return t[0] = r * l - o * a,
              t[1] = o * s - i * l,
              t[2] = i * a - r * s,
              t
          }
          ,
          o.lerp = function(t, e, n, i) {
              var r = e[0]
                , o = e[1]
                , s = e[2];
              return t[0] = r + i * (n[0] - r),
              t[1] = o + i * (n[1] - o),
              t[2] = s + i * (n[2] - s),
              t
          }
          ,
          o.hermite = function(t, e, n, i, r, o) {
              var s = o * o
                , a = s * (2 * o - 3) + 1
                , l = s * (o - 2) + o
                , u = s * (o - 1)
                , c = s * (3 - 2 * o);
              return t[0] = e[0] * a + n[0] * l + i[0] * u + r[0] * c,
              t[1] = e[1] * a + n[1] * l + i[1] * u + r[1] * c,
              t[2] = e[2] * a + n[2] * l + i[2] * u + r[2] * c,
              t
          }
          ,
          o.bezier = function(t, e, n, i, r, o) {
              var s = 1 - o
                , a = s * s
                , l = o * o
                , u = a * s
                , c = 3 * o * a
                , h = 3 * l * s
                , p = l * o;
              return t[0] = e[0] * u + n[0] * c + i[0] * h + r[0] * p,
              t[1] = e[1] * u + n[1] * c + i[1] * h + r[1] * p,
              t[2] = e[2] * u + n[2] * c + i[2] * h + r[2] * p,
              t
          }
          ,
          o.random = function(t, e) {
              e = e || 1;
              var n = 2 * r.RANDOM() * Math.PI
                , i = 2 * r.RANDOM() - 1
                , o = Math.sqrt(1 - i * i) * e;
              return t[0] = Math.cos(n) * o,
              t[1] = Math.sin(n) * o,
              t[2] = i * e,
              t
          }
          ,
          o.transformMat4 = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = n[3] * i + n[7] * r + n[11] * o + n[15];
              return s = s || 1,
              t[0] = (n[0] * i + n[4] * r + n[8] * o + n[12]) / s,
              t[1] = (n[1] * i + n[5] * r + n[9] * o + n[13]) / s,
              t[2] = (n[2] * i + n[6] * r + n[10] * o + n[14]) / s,
              t
          }
          ,
          o.transformMat3 = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2];
              return t[0] = i * n[0] + r * n[3] + o * n[6],
              t[1] = i * n[1] + r * n[4] + o * n[7],
              t[2] = i * n[2] + r * n[5] + o * n[8],
              t
          }
          ,
          o.transformQuat = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = n[0]
                , a = n[1]
                , l = n[2]
                , u = n[3]
                , c = u * i + a * o - l * r
                , h = u * r + l * i - s * o
                , p = u * o + s * r - a * i
                , d = -s * i - a * r - l * o;
              return t[0] = c * u + d * -s + h * -l - p * -a,
              t[1] = h * u + d * -a + p * -s - c * -l,
              t[2] = p * u + d * -l + c * -a - h * -s,
              t
          }
          ,
          o.rotateX = function(t, e, n, i) {
              var r = []
                , o = [];
              return r[0] = e[0] - n[0],
              r[1] = e[1] - n[1],
              r[2] = e[2] - n[2],
              o[0] = r[0],
              o[1] = r[1] * Math.cos(i) - r[2] * Math.sin(i),
              o[2] = r[1] * Math.sin(i) + r[2] * Math.cos(i),
              t[0] = o[0] + n[0],
              t[1] = o[1] + n[1],
              t[2] = o[2] + n[2],
              t
          }
          ,
          o.rotateY = function(t, e, n, i) {
              var r = []
                , o = [];
              return r[0] = e[0] - n[0],
              r[1] = e[1] - n[1],
              r[2] = e[2] - n[2],
              o[0] = r[2] * Math.sin(i) + r[0] * Math.cos(i),
              o[1] = r[1],
              o[2] = r[2] * Math.cos(i) - r[0] * Math.sin(i),
              t[0] = o[0] + n[0],
              t[1] = o[1] + n[1],
              t[2] = o[2] + n[2],
              t
          }
          ,
          o.rotateZ = function(t, e, n, i) {
              var r = []
                , o = [];
              return r[0] = e[0] - n[0],
              r[1] = e[1] - n[1],
              r[2] = e[2] - n[2],
              o[0] = r[0] * Math.cos(i) - r[1] * Math.sin(i),
              o[1] = r[0] * Math.sin(i) + r[1] * Math.cos(i),
              o[2] = r[2],
              t[0] = o[0] + n[0],
              t[1] = o[1] + n[1],
              t[2] = o[2] + n[2],
              t
          }
          ,
          o.forEach = (i = o.create(),
          function(t, e, n, r, o, s) {
              var a, l;
              for (e || (e = 3),
              n || (n = 0),
              l = r ? Math.min(r * e + n, t.length) : t.length,
              a = n; a < l; a += e)
                  i[0] = t[a],
                  i[1] = t[a + 1],
                  i[2] = t[a + 2],
                  o(i, i, s),
                  t[a] = i[0],
                  t[a + 1] = i[1],
                  t[a + 2] = i[2];
              return t
          }
          ),
          o.angle = function(t, e) {
              var n = o.fromValues(t[0], t[1], t[2])
                , i = o.fromValues(e[0], e[1], e[2]);
              o.normalize(n, n),
              o.normalize(i, i);
              var r = o.dot(n, i);
              return r > 1 ? 0 : r < -1 ? Math.PI : Math.acos(r)
          }
          ,
          o.str = function(t) {
              return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
          }
          ,
          o.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
          }
          ,
          o.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = e[0]
                , a = e[1]
                , l = e[2];
              return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l))
          }
          ,
          e.exports = o
      }
      , {
          "./common.js": 5
      }],
      13: [function(t, e, n) {
          var i, r = t("./common.js"), o = {};
          o.create = function() {
              var t = new r.ARRAY_TYPE(4);
              return t[0] = 0,
              t[1] = 0,
              t[2] = 0,
              t[3] = 0,
              t
          }
          ,
          o.clone = function(t) {
              var e = new r.ARRAY_TYPE(4);
              return e[0] = t[0],
              e[1] = t[1],
              e[2] = t[2],
              e[3] = t[3],
              e
          }
          ,
          o.fromValues = function(t, e, n, i) {
              var o = new r.ARRAY_TYPE(4);
              return o[0] = t,
              o[1] = e,
              o[2] = n,
              o[3] = i,
              o
          }
          ,
          o.copy = function(t, e) {
              return t[0] = e[0],
              t[1] = e[1],
              t[2] = e[2],
              t[3] = e[3],
              t
          }
          ,
          o.set = function(t, e, n, i, r) {
              return t[0] = e,
              t[1] = n,
              t[2] = i,
              t[3] = r,
              t
          }
          ,
          o.add = function(t, e, n) {
              return t[0] = e[0] + n[0],
              t[1] = e[1] + n[1],
              t[2] = e[2] + n[2],
              t[3] = e[3] + n[3],
              t
          }
          ,
          o.subtract = function(t, e, n) {
              return t[0] = e[0] - n[0],
              t[1] = e[1] - n[1],
              t[2] = e[2] - n[2],
              t[3] = e[3] - n[3],
              t
          }
          ,
          o.sub = o.subtract,
          o.multiply = function(t, e, n) {
              return t[0] = e[0] * n[0],
              t[1] = e[1] * n[1],
              t[2] = e[2] * n[2],
              t[3] = e[3] * n[3],
              t
          }
          ,
          o.mul = o.multiply,
          o.divide = function(t, e, n) {
              return t[0] = e[0] / n[0],
              t[1] = e[1] / n[1],
              t[2] = e[2] / n[2],
              t[3] = e[3] / n[3],
              t
          }
          ,
          o.div = o.divide,
          o.ceil = function(t, e) {
              return t[0] = Math.ceil(e[0]),
              t[1] = Math.ceil(e[1]),
              t[2] = Math.ceil(e[2]),
              t[3] = Math.ceil(e[3]),
              t
          }
          ,
          o.floor = function(t, e) {
              return t[0] = Math.floor(e[0]),
              t[1] = Math.floor(e[1]),
              t[2] = Math.floor(e[2]),
              t[3] = Math.floor(e[3]),
              t
          }
          ,
          o.min = function(t, e, n) {
              return t[0] = Math.min(e[0], n[0]),
              t[1] = Math.min(e[1], n[1]),
              t[2] = Math.min(e[2], n[2]),
              t[3] = Math.min(e[3], n[3]),
              t
          }
          ,
          o.max = function(t, e, n) {
              return t[0] = Math.max(e[0], n[0]),
              t[1] = Math.max(e[1], n[1]),
              t[2] = Math.max(e[2], n[2]),
              t[3] = Math.max(e[3], n[3]),
              t
          }
          ,
          o.round = function(t, e) {
              return t[0] = Math.round(e[0]),
              t[1] = Math.round(e[1]),
              t[2] = Math.round(e[2]),
              t[3] = Math.round(e[3]),
              t
          }
          ,
          o.scale = function(t, e, n) {
              return t[0] = e[0] * n,
              t[1] = e[1] * n,
              t[2] = e[2] * n,
              t[3] = e[3] * n,
              t
          }
          ,
          o.scaleAndAdd = function(t, e, n, i) {
              return t[0] = e[0] + n[0] * i,
              t[1] = e[1] + n[1] * i,
              t[2] = e[2] + n[2] * i,
              t[3] = e[3] + n[3] * i,
              t
          }
          ,
          o.distance = function(t, e) {
              var n = e[0] - t[0]
                , i = e[1] - t[1]
                , r = e[2] - t[2]
                , o = e[3] - t[3];
              return Math.sqrt(n * n + i * i + r * r + o * o)
          }
          ,
          o.dist = o.distance,
          o.squaredDistance = function(t, e) {
              var n = e[0] - t[0]
                , i = e[1] - t[1]
                , r = e[2] - t[2]
                , o = e[3] - t[3];
              return n * n + i * i + r * r + o * o
          }
          ,
          o.sqrDist = o.squaredDistance,
          o.length = function(t) {
              var e = t[0]
                , n = t[1]
                , i = t[2]
                , r = t[3];
              return Math.sqrt(e * e + n * n + i * i + r * r)
          }
          ,
          o.len = o.length,
          o.squaredLength = function(t) {
              var e = t[0]
                , n = t[1]
                , i = t[2]
                , r = t[3];
              return e * e + n * n + i * i + r * r
          }
          ,
          o.sqrLen = o.squaredLength,
          o.negate = function(t, e) {
              return t[0] = -e[0],
              t[1] = -e[1],
              t[2] = -e[2],
              t[3] = -e[3],
              t
          }
          ,
          o.inverse = function(t, e) {
              return t[0] = 1 / e[0],
              t[1] = 1 / e[1],
              t[2] = 1 / e[2],
              t[3] = 1 / e[3],
              t
          }
          ,
          o.normalize = function(t, e) {
              var n = e[0]
                , i = e[1]
                , r = e[2]
                , o = e[3]
                , s = n * n + i * i + r * r + o * o;
              return s > 0 && (s = 1 / Math.sqrt(s),
              t[0] = n * s,
              t[1] = i * s,
              t[2] = r * s,
              t[3] = o * s),
              t
          }
          ,
          o.dot = function(t, e) {
              return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
          }
          ,
          o.lerp = function(t, e, n, i) {
              var r = e[0]
                , o = e[1]
                , s = e[2]
                , a = e[3];
              return t[0] = r + i * (n[0] - r),
              t[1] = o + i * (n[1] - o),
              t[2] = s + i * (n[2] - s),
              t[3] = a + i * (n[3] - a),
              t
          }
          ,
          o.random = function(t, e) {
              return e = e || 1,
              t[0] = r.RANDOM(),
              t[1] = r.RANDOM(),
              t[2] = r.RANDOM(),
              t[3] = r.RANDOM(),
              o.normalize(t, t),
              o.scale(t, t, e),
              t
          }
          ,
          o.transformMat4 = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = e[3];
              return t[0] = n[0] * i + n[4] * r + n[8] * o + n[12] * s,
              t[1] = n[1] * i + n[5] * r + n[9] * o + n[13] * s,
              t[2] = n[2] * i + n[6] * r + n[10] * o + n[14] * s,
              t[3] = n[3] * i + n[7] * r + n[11] * o + n[15] * s,
              t
          }
          ,
          o.transformQuat = function(t, e, n) {
              var i = e[0]
                , r = e[1]
                , o = e[2]
                , s = n[0]
                , a = n[1]
                , l = n[2]
                , u = n[3]
                , c = u * i + a * o - l * r
                , h = u * r + l * i - s * o
                , p = u * o + s * r - a * i
                , d = -s * i - a * r - l * o;
              return t[0] = c * u + d * -s + h * -l - p * -a,
              t[1] = h * u + d * -a + p * -s - c * -l,
              t[2] = p * u + d * -l + c * -a - h * -s,
              t[3] = e[3],
              t
          }
          ,
          o.forEach = (i = o.create(),
          function(t, e, n, r, o, s) {
              var a, l;
              for (e || (e = 4),
              n || (n = 0),
              l = r ? Math.min(r * e + n, t.length) : t.length,
              a = n; a < l; a += e)
                  i[0] = t[a],
                  i[1] = t[a + 1],
                  i[2] = t[a + 2],
                  i[3] = t[a + 3],
                  o(i, i, s),
                  t[a] = i[0],
                  t[a + 1] = i[1],
                  t[a + 2] = i[2],
                  t[a + 3] = i[3];
              return t
          }
          ),
          o.str = function(t) {
              return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
          }
          ,
          o.exactEquals = function(t, e) {
              return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
          }
          ,
          o.equals = function(t, e) {
              var n = t[0]
                , i = t[1]
                , o = t[2]
                , s = t[3]
                , a = e[0]
                , l = e[1]
                , u = e[2]
                , c = e[3];
              return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(i - l) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(o - u) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(u)) && Math.abs(s - c) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(c))
          }
          ,
          e.exports = o
      }
      , {
          "./common.js": 5
      }],
      14: [function(e, n, i) {
          !function(e, i, r, o) {
              "use strict";
              var s = ["", "webkit", "moz", "MS", "ms", "o"]
                , a = i.createElement("div")
                , l = "function"
                , u = Math.round
                , c = Math.abs
                , h = Date.now;
              function p(t, e, n) {
                  return setTimeout(g(t, n), e)
              }
              function d(t, e, n) {
                  return !!Array.isArray(t) && (f(t, n[e], n),
                  !0)
              }
              function f(t, e, n) {
                  var i;
                  if (t)
                      if (t.forEach)
                          t.forEach(e, n);
                      else if (t.length !== o)
                          for (i = 0; i < t.length; )
                              e.call(n, t[i], i, t),
                              i++;
                      else
                          for (i in t)
                              t.hasOwnProperty(i) && e.call(n, t[i], i, t)
              }
              function m(t, e, n) {
                  for (var i = Object.keys(e), r = 0; r < i.length; )
                      (!n || n && t[i[r]] === o) && (t[i[r]] = e[i[r]]),
                      r++;
                  return t
              }
              function v(t, e) {
                  return m(t, e, !0)
              }
              function y(t, e, n) {
                  var i, r = e.prototype;
                  (i = t.prototype = function(t) {
                      if (Object.create)
                          return Object.create(t);
                      var e = function() {};
                      e.prototype = t;
                      var n = new e;
                      return e.prototype = null,
                      n
                  }(r)).constructor = t,
                  i._super = r,
                  n && m(i, n)
              }
              function g(t, e) {
                  return function() {
                      return t.apply(e, arguments)
                  }
              }
              function _(t, e) {
                  return typeof t == l ? t.apply(e && e[0] || o, e) : t
              }
              function b(t, e) {
                  return t === o ? e : t
              }
              function w(t, e, n) {
                  f(E(e), function(e) {
                      t.addEventListener(e, n, !1)
                  })
              }
              function x(t, e, n) {
                  f(E(e), function(e) {
                      t.removeEventListener(e, n, !1)
                  })
              }
              function S(t, e) {
                  for (; t; ) {
                      if (t == e)
                          return !0;
                      t = t.parentNode
                  }
                  return !1
              }
              function M(t, e) {
                  return t.indexOf(e) > -1
              }
              function E(t) {
                  return t.trim().split(/\s+/g)
              }
              function T(t, e, n) {
                  if (t.indexOf && !n)
                      return t.indexOf(e);
                  for (var i = 0; i < t.length; ) {
                      if (n && t[i][n] == e || !n && t[i] === e)
                          return i;
                      i++
                  }
                  return -1
              }
              function D(t) {
                  return Array.prototype.slice.call(t, 0)
              }
              function I(t, e, n) {
                  for (var i = [], r = [], o = 0; o < t.length; ) {
                      var s = e ? t[o][e] : t[o];
                      T(r, s) < 0 && i.push(t[o]),
                      r[o] = s,
                      o++
                  }
                  return n && (i = e ? i.sort(function(t, n) {
                      return t[e] > n[e]
                  }) : i.sort()),
                  i
              }
              function C(t, e) {
                  for (var n, i, r = e[0].toUpperCase() + e.slice(1), a = 0; a < s.length; ) {
                      if ((i = (n = s[a]) ? n + r : e)in t)
                          return i;
                      a++
                  }
                  return o
              }
              var L = 1;
              function F(t) {
                  var n = t.ownerDocument || t;
                  return n.defaultView || n.parentWindow || e
              }
              var k = "ontouchstart"in e
                , A = C(e, "PointerEvent") !== o
                , O = k && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
                , P = 25
                , R = 1
                , z = 2
                , N = 4
                , j = 8
                , H = 1
                , B = 2
                , V = 4
                , W = 8
                , q = 16
                , Y = B | V
                , X = W | q
                , U = Y | X
                , G = ["x", "y"]
                , $ = ["clientX", "clientY"];
              function K(t, e) {
                  var n = this;
                  this.manager = t,
                  this.callback = e,
                  this.element = t.element,
                  this.target = t.options.inputTarget,
                  this.domHandler = function(e) {
                      _(t.options.enable, [t]) && n.handler(e)
                  }
                  ,
                  this.init()
              }
              function Z(t, e, n) {
                  var i = n.pointers.length
                    , r = n.changedPointers.length
                    , s = e & R && i - r == 0
                    , a = e & (N | j) && i - r == 0;
                  n.isFirst = !!s,
                  n.isFinal = !!a,
                  s && (t.session = {}),
                  n.eventType = e,
                  function(t, e) {
                      var n = t.session
                        , i = e.pointers
                        , r = i.length;
                      n.firstInput || (n.firstInput = Q(e));
                      r > 1 && !n.firstMultiple ? n.firstMultiple = Q(e) : 1 === r && (n.firstMultiple = !1);
                      var s = n.firstInput
                        , a = n.firstMultiple
                        , l = a ? a.center : s.center
                        , u = e.center = J(i);
                      e.timeStamp = h(),
                      e.deltaTime = e.timeStamp - s.timeStamp,
                      e.angle = nt(l, u),
                      e.distance = et(l, u),
                      function(t, e) {
                          var n = e.center
                            , i = t.offsetDelta || {}
                            , r = t.prevDelta || {}
                            , o = t.prevInput || {};
                          e.eventType !== R && o.eventType !== N || (r = t.prevDelta = {
                              x: o.deltaX || 0,
                              y: o.deltaY || 0
                          },
                          i = t.offsetDelta = {
                              x: n.x,
                              y: n.y
                          });
                          e.deltaX = r.x + (n.x - i.x),
                          e.deltaY = r.y + (n.y - i.y)
                      }(n, e),
                      e.offsetDirection = tt(e.deltaX, e.deltaY),
                      e.scale = a ? (p = a.pointers,
                      d = i,
                      et(d[0], d[1], $) / et(p[0], p[1], $)) : 1,
                      e.rotation = a ? function(t, e) {
                          return nt(e[1], e[0], $) - nt(t[1], t[0], $)
                      }(a.pointers, i) : 0,
                      function(t, e) {
                          var n, i, r, s, a = t.lastInterval || e, l = e.timeStamp - a.timeStamp;
                          if (e.eventType != j && (l > P || a.velocity === o)) {
                              var u = a.deltaX - e.deltaX
                                , h = a.deltaY - e.deltaY
                                , p = function(t, e, n) {
                                  return {
                                      x: e / t || 0,
                                      y: n / t || 0
                                  }
                              }(l, u, h);
                              i = p.x,
                              r = p.y,
                              n = c(p.x) > c(p.y) ? p.x : p.y,
                              s = tt(u, h),
                              t.lastInterval = e
                          } else
                              n = a.velocity,
                              i = a.velocityX,
                              r = a.velocityY,
                              s = a.direction;
                          e.velocity = n,
                          e.velocityX = i,
                          e.velocityY = r,
                          e.direction = s
                      }(n, e);
                      var p, d;
                      var f = t.element;
                      S(e.srcEvent.target, f) && (f = e.srcEvent.target);
                      e.target = f
                  }(t, n),
                  t.emit("hammer.input", n),
                  t.recognize(n),
                  t.session.prevInput = n
              }
              function Q(t) {
                  for (var e = [], n = 0; n < t.pointers.length; )
                      e[n] = {
                          clientX: u(t.pointers[n].clientX),
                          clientY: u(t.pointers[n].clientY)
                      },
                      n++;
                  return {
                      timeStamp: h(),
                      pointers: e,
                      center: J(e),
                      deltaX: t.deltaX,
                      deltaY: t.deltaY
                  }
              }
              function J(t) {
                  var e = t.length;
                  if (1 === e)
                      return {
                          x: u(t[0].clientX),
                          y: u(t[0].clientY)
                      };
                  for (var n = 0, i = 0, r = 0; r < e; )
                      n += t[r].clientX,
                      i += t[r].clientY,
                      r++;
                  return {
                      x: u(n / e),
                      y: u(i / e)
                  }
              }
              function tt(t, e) {
                  return t === e ? H : c(t) >= c(e) ? t > 0 ? B : V : e > 0 ? W : q
              }
              function et(t, e, n) {
                  n || (n = G);
                  var i = e[n[0]] - t[n[0]]
                    , r = e[n[1]] - t[n[1]];
                  return Math.sqrt(i * i + r * r)
              }
              function nt(t, e, n) {
                  n || (n = G);
                  var i = e[n[0]] - t[n[0]]
                    , r = e[n[1]] - t[n[1]];
                  return 180 * Math.atan2(r, i) / Math.PI
              }
              K.prototype = {
                  handler: function() {},
                  init: function() {
                      this.evEl && w(this.element, this.evEl, this.domHandler),
                      this.evTarget && w(this.target, this.evTarget, this.domHandler),
                      this.evWin && w(F(this.element), this.evWin, this.domHandler),
                      this.evDoc && w(i, this.evDoc, this.domHandler),
                      this.evBody && w(i.body, this.evBody, this.domHandler)
                  },
                  destroy: function() {
                      this.evEl && x(this.element, this.evEl, this.domHandler),
                      this.evTarget && x(this.target, this.evTarget, this.domHandler),
                      this.evWin && x(F(this.element), this.evWin, this.domHandler),
                      this.evDoc && x(i, this.evDoc, this.domHandler),
                      this.evBody && x(i.body, this.evBody, this.domHandler)
                  }
              };
              var it = {
                  mousedown: R,
                  mousemove: z,
                  mouseup: N
              }
                , rt = "mousedown"
                , ot = "mousemove mouseup"
                , st = e.navigator.userAgent.indexOf("MSIE 8") > 0;
              function at() {
                  this.evEl = rt,
                  st ? this.evDoc = ot : this.evWin = ot,
                  this.allow = !0,
                  this.pressed = !1,
                  K.apply(this, arguments)
              }
              y(at, K, {
                  handler: function(t) {
                      var e = it[t.type]
                        , n = 0;
                      st && (n = 1),
                      e & R && t.button === n && (this.pressed = !0),
                      e & z && t.button !== n && (e = N),
                      this.pressed && this.allow && (e & N && (this.pressed = !1),
                      this.callback(this.manager, e, {
                          pointers: [t],
                          changedPointers: [t],
                          pointerType: "mouse",
                          srcEvent: t
                      }))
                  }
              });
              var lt = {
                  pointerdown: R,
                  pointermove: z,
                  pointerup: N,
                  pointercancel: j,
                  pointerout: j
              }
                , ut = {
                  2: "touch",
                  3: "pen",
                  4: "mouse",
                  5: "kinect"
              }
                , ct = "pointerdown"
                , ht = "pointermove pointerup pointercancel";
              function pt() {
                  this.evEl = ct,
                  this.evWin = ht,
                  K.apply(this, arguments),
                  this.store = this.manager.session.pointerEvents = []
              }
              e.MSPointerEvent && (ct = "MSPointerDown",
              ht = "MSPointerMove MSPointerUp MSPointerCancel"),
              y(pt, K, {
                  handler: function(t) {
                      var e = this.store
                        , n = !1
                        , i = t.type.toLowerCase().replace("ms", "")
                        , r = lt[i]
                        , o = ut[t.pointerType] || t.pointerType
                        , s = "touch" == o
                        , a = T(e, t.pointerId, "pointerId");
                      r & R && (0 === t.button || s) ? a < 0 && (e.push(t),
                      a = e.length - 1) : r & (N | j) && (n = !0),
                      a < 0 || (e[a] = t,
                      this.callback(this.manager, r, {
                          pointers: e,
                          changedPointers: [t],
                          pointerType: o,
                          srcEvent: t
                      }),
                      n && e.splice(a, 1))
                  }
              });
              var dt = {
                  touchstart: R,
                  touchmove: z,
                  touchend: N,
                  touchcancel: j
              }
                , ft = "touchstart"
                , mt = "touchstart touchmove touchend touchcancel";
              function vt() {
                  this.evTarget = ft,
                  this.evWin = mt,
                  this.started = !1,
                  K.apply(this, arguments)
              }
              y(vt, K, {
                  handler: function(t) {
                      var e = dt[t.type];
                      if (e === R && (this.started = !0),
                      this.started) {
                          var n = function(t, e) {
                              var n = D(t.touches)
                                , i = D(t.changedTouches);
                              e & (N | j) && (n = I(n.concat(i), "identifier", !0));
                              return [n, i]
                          }
                          .call(this, t, e);
                          e & (N | j) && n[0].length - n[1].length == 0 && (this.started = !1),
                          this.callback(this.manager, e, {
                              pointers: n[0],
                              changedPointers: n[1],
                              pointerType: "touch",
                              srcEvent: t
                          })
                      }
                  }
              });
              var yt = {
                  touchstart: R,
                  touchmove: z,
                  touchend: N,
                  touchcancel: j
              }
                , gt = "touchstart touchmove touchend touchcancel";
              function _t() {
                  this.evTarget = gt,
                  this.targetIds = {},
                  K.apply(this, arguments)
              }
              function bt() {
                  K.apply(this, arguments);
                  var t = g(this.handler, this);
                  this.touch = new _t(this.manager,t),
                  this.mouse = new at(this.manager,t)
              }
              y(_t, K, {
                  handler: function(t) {
                      var e = yt[t.type]
                        , n = function(t, e) {
                          var n = D(t.touches)
                            , i = this.targetIds;
                          if (e & (R | z) && 1 === n.length)
                              return i[n[0].identifier] = !0,
                              [n, n];
                          var r, o, s = D(t.changedTouches), a = [], l = this.target;
                          if (o = n.filter(function(t) {
                              return S(t.target, l)
                          }),
                          e === R)
                              for (r = 0; r < o.length; )
                                  i[o[r].identifier] = !0,
                                  r++;
                          r = 0;
                          for (; r < s.length; )
                              i[s[r].identifier] && a.push(s[r]),
                              e & (N | j) && delete i[s[r].identifier],
                              r++;
                          if (!a.length)
                              return;
                          return [I(o.concat(a), "identifier", !0), a]
                      }
                      .call(this, t, e);
                      n && this.callback(this.manager, e, {
                          pointers: n[0],
                          changedPointers: n[1],
                          pointerType: "touch",
                          srcEvent: t
                      })
                  }
              }),
              y(bt, K, {
                  handler: function(t, e, n) {
                      var i = "touch" == n.pointerType
                        , r = "mouse" == n.pointerType;
                      if (i)
                          this.mouse.allow = !1;
                      else if (r && !this.mouse.allow)
                          return;
                      e & (N | j) && (this.mouse.allow = !0),
                      this.callback(t, e, n)
                  },
                  destroy: function() {
                      this.touch.destroy(),
                      this.mouse.destroy()
                  }
              });
              var wt = C(a.style, "touchAction")
                , xt = wt !== o
                , St = "auto"
                , Mt = "manipulation"
                , Et = "none"
                , Tt = "pan-x"
                , Dt = "pan-y";
              function It(t, e) {
                  this.manager = t,
                  this.set(e)
              }
              It.prototype = {
                  set: function(t) {
                      "compute" == t && (t = this.compute()),
                      xt && this.manager.element.style && (this.manager.element.style[wt] = t),
                      this.actions = t.toLowerCase().trim()
                  },
                  update: function() {
                      this.set(this.manager.options.touchAction)
                  },
                  compute: function() {
                      var t = [];
                      return f(this.manager.recognizers, function(e) {
                          _(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                      }),
                      function(t) {
                          if (M(t, Et))
                              return Et;
                          var e = M(t, Tt)
                            , n = M(t, Dt);
                          if (e && n)
                              return Tt + " " + Dt;
                          if (e || n)
                              return e ? Tt : Dt;
                          if (M(t, Mt))
                              return Mt;
                          return St
                      }(t.join(" "))
                  },
                  preventDefaults: function(t) {
                      if (!xt) {
                          var e = t.srcEvent
                            , n = t.offsetDirection;
                          if (!this.manager.session.prevented) {
                              var i = this.actions
                                , r = M(i, Et)
                                , o = M(i, Dt)
                                , s = M(i, Tt);
                              return r || o && n & Y || s && n & X ? this.preventSrc(e) : void 0
                          }
                          e.preventDefault()
                      }
                  },
                  preventSrc: function(t) {
                      this.manager.session.prevented = !0,
                      t.preventDefault()
                  }
              };
              var Ct = 1
                , Lt = 2
                , Ft = 4
                , kt = 8
                , At = kt
                , Ot = 16;
              function Pt(t) {
                  this.id = L++,
                  this.manager = null,
                  this.options = v(t || {}, this.defaults),
                  this.options.enable = b(this.options.enable, !0),
                  this.state = Ct,
                  this.simultaneous = {},
                  this.requireFail = []
              }
              function Rt(t) {
                  return t == q ? "down" : t == W ? "up" : t == B ? "left" : t == V ? "right" : ""
              }
              function zt(t, e) {
                  var n = e.manager;
                  return n ? n.get(t) : t
              }
              function Nt() {
                  Pt.apply(this, arguments)
              }
              function jt() {
                  Nt.apply(this, arguments),
                  this.pX = null,
                  this.pY = null
              }
              function Ht() {
                  Nt.apply(this, arguments)
              }
              function Bt() {
                  Pt.apply(this, arguments),
                  this._timer = null,
                  this._input = null
              }
              function Vt() {
                  Nt.apply(this, arguments)
              }
              function Wt() {
                  Nt.apply(this, arguments)
              }
              function qt() {
                  Pt.apply(this, arguments),
                  this.pTime = !1,
                  this.pCenter = !1,
                  this._timer = null,
                  this._input = null,
                  this.count = 0
              }
              function Yt(t, e) {
                  return (e = e || {}).recognizers = b(e.recognizers, Yt.defaults.preset),
                  new Xt(t,e)
              }
              Pt.prototype = {
                  defaults: {},
                  set: function(t) {
                      return m(this.options, t),
                      this.manager && this.manager.touchAction.update(),
                      this
                  },
                  recognizeWith: function(t) {
                      if (d(t, "recognizeWith", this))
                          return this;
                      var e = this.simultaneous;
                      return e[(t = zt(t, this)).id] || (e[t.id] = t,
                      t.recognizeWith(this)),
                      this
                  },
                  dropRecognizeWith: function(t) {
                      return d(t, "dropRecognizeWith", this) ? this : (t = zt(t, this),
                      delete this.simultaneous[t.id],
                      this)
                  },
                  requireFailure: function(t) {
                      if (d(t, "requireFailure", this))
                          return this;
                      var e = this.requireFail;
                      return -1 === T(e, t = zt(t, this)) && (e.push(t),
                      t.requireFailure(this)),
                      this
                  },
                  dropRequireFailure: function(t) {
                      if (d(t, "dropRequireFailure", this))
                          return this;
                      t = zt(t, this);
                      var e = T(this.requireFail, t);
                      return e > -1 && this.requireFail.splice(e, 1),
                      this
                  },
                  hasRequireFailures: function() {
                      return this.requireFail.length > 0
                  },
                  canRecognizeWith: function(t) {
                      return !!this.simultaneous[t.id]
                  },
                  emit: function(t) {
                      var e = this
                        , n = this.state;
                      function i(i) {
                          e.manager.emit(e.options.event + (i ? function(t) {
                              if (t & Ot)
                                  return "cancel";
                              if (t & kt)
                                  return "end";
                              if (t & Ft)
                                  return "move";
                              if (t & Lt)
                                  return "start";
                              return ""
                          }(n) : ""), t)
                      }
                      n < kt && i(!0),
                      i(),
                      n >= kt && i(!0)
                  },
                  tryEmit: function(t) {
                      if (this.canEmit())
                          return this.emit(t);
                      this.state = 32
                  },
                  canEmit: function() {
                      for (var t = 0; t < this.requireFail.length; ) {
                          if (!(this.requireFail[t].state & (32 | Ct)))
                              return !1;
                          t++
                      }
                      return !0
                  },
                  recognize: function(t) {
                      var e = m({}, t);
                      if (!_(this.options.enable, [this, e]))
                          return this.reset(),
                          void (this.state = 32);
                      this.state & (At | Ot | 32) && (this.state = Ct),
                      this.state = this.process(e),
                      this.state & (Lt | Ft | kt | Ot) && this.tryEmit(e)
                  },
                  process: function(t) {},
                  getTouchAction: function() {},
                  reset: function() {}
              },
              y(Nt, Pt, {
                  defaults: {
                      pointers: 1
                  },
                  attrTest: function(t) {
                      var e = this.options.pointers;
                      return 0 === e || t.pointers.length === e
                  },
                  process: function(t) {
                      var e = this.state
                        , n = t.eventType
                        , i = e & (Lt | Ft)
                        , r = this.attrTest(t);
                      return i && (n & j || !r) ? e | Ot : i || r ? n & N ? e | kt : e & Lt ? e | Ft : Lt : 32
                  }
              }),
              y(jt, Nt, {
                  defaults: {
                      event: "pan",
                      threshold: 10,
                      pointers: 1,
                      direction: U
                  },
                  getTouchAction: function() {
                      var t = this.options.direction
                        , e = [];
                      return t & Y && e.push(Dt),
                      t & X && e.push(Tt),
                      e
                  },
                  directionTest: function(t) {
                      var e = this.options
                        , n = !0
                        , i = t.distance
                        , r = t.direction
                        , o = t.deltaX
                        , s = t.deltaY;
                      return r & e.direction || (e.direction & Y ? (r = 0 === o ? H : o < 0 ? B : V,
                      n = o != this.pX,
                      i = Math.abs(t.deltaX)) : (r = 0 === s ? H : s < 0 ? W : q,
                      n = s != this.pY,
                      i = Math.abs(t.deltaY))),
                      t.direction = r,
                      n && i > e.threshold && r & e.direction
                  },
                  attrTest: function(t) {
                      return Nt.prototype.attrTest.call(this, t) && (this.state & Lt || !(this.state & Lt) && this.directionTest(t))
                  },
                  emit: function(t) {
                      this.pX = t.deltaX,
                      this.pY = t.deltaY;
                      var e = Rt(t.direction);
                      e && this.manager.emit(this.options.event + e, t),
                      this._super.emit.call(this, t)
                  }
              }),
              y(Ht, Nt, {
                  defaults: {
                      event: "pinch",
                      threshold: 0,
                      pointers: 2
                  },
                  getTouchAction: function() {
                      return [Et]
                  },
                  attrTest: function(t) {
                      return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Lt)
                  },
                  emit: function(t) {
                      if (this._super.emit.call(this, t),
                      1 !== t.scale) {
                          var e = t.scale < 1 ? "in" : "out";
                          this.manager.emit(this.options.event + e, t)
                      }
                  }
              }),
              y(Bt, Pt, {
                  defaults: {
                      event: "press",
                      pointers: 1,
                      time: 500,
                      threshold: 5
                  },
                  getTouchAction: function() {
                      return [St]
                  },
                  process: function(t) {
                      var e = this.options
                        , n = t.pointers.length === e.pointers
                        , i = t.distance < e.threshold
                        , r = t.deltaTime > e.time;
                      if (this._input = t,
                      !i || !n || t.eventType & (N | j) && !r)
                          this.reset();
                      else if (t.eventType & R)
                          this.reset(),
                          this._timer = p(function() {
                              this.state = At,
                              this.tryEmit()
                          }, e.time, this);
                      else if (t.eventType & N)
                          return At;
                      return 32
                  },
                  reset: function() {
                      clearTimeout(this._timer)
                  },
                  emit: function(t) {
                      this.state === At && (t && t.eventType & N ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = h(),
                      this.manager.emit(this.options.event, this._input)))
                  }
              }),
              y(Vt, Nt, {
                  defaults: {
                      event: "rotate",
                      threshold: 0,
                      pointers: 2
                  },
                  getTouchAction: function() {
                      return [Et]
                  },
                  attrTest: function(t) {
                      return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Lt)
                  }
              }),
              y(Wt, Nt, {
                  defaults: {
                      event: "swipe",
                      threshold: 10,
                      velocity: .65,
                      direction: Y | X,
                      pointers: 1
                  },
                  getTouchAction: function() {
                      return jt.prototype.getTouchAction.call(this)
                  },
                  attrTest: function(t) {
                      var e, n = this.options.direction;
                      return n & (Y | X) ? e = t.velocity : n & Y ? e = t.velocityX : n & X && (e = t.velocityY),
                      this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && c(e) > this.options.velocity && t.eventType & N
                  },
                  emit: function(t) {
                      var e = Rt(t.direction);
                      e && this.manager.emit(this.options.event + e, t),
                      this.manager.emit(this.options.event, t)
                  }
              }),
              y(qt, Pt, {
                  defaults: {
                      event: "tap",
                      pointers: 1,
                      taps: 1,
                      interval: 300,
                      time: 250,
                      threshold: 2,
                      posThreshold: 10
                  },
                  getTouchAction: function() {
                      return [Mt]
                  },
                  process: function(t) {
                      var e = this.options
                        , n = t.pointers.length === e.pointers
                        , i = t.distance < e.threshold
                        , r = t.deltaTime < e.time;
                      if (this.reset(),
                      t.eventType & R && 0 === this.count)
                          return this.failTimeout();
                      if (i && r && n) {
                          if (t.eventType != N)
                              return this.failTimeout();
                          var o = !this.pTime || t.timeStamp - this.pTime < e.interval
                            , s = !this.pCenter || et(this.pCenter, t.center) < e.posThreshold;
                          if (this.pTime = t.timeStamp,
                          this.pCenter = t.center,
                          s && o ? this.count += 1 : this.count = 1,
                          this._input = t,
                          0 === this.count % e.taps)
                              return this.hasRequireFailures() ? (this._timer = p(function() {
                                  this.state = At,
                                  this.tryEmit()
                              }, e.interval, this),
                              Lt) : At
                      }
                      return 32
                  },
                  failTimeout: function() {
                      return this._timer = p(function() {
                          this.state = 32
                      }, this.options.interval, this),
                      32
                  },
                  reset: function() {
                      clearTimeout(this._timer)
                  },
                  emit: function() {
                      this.state == At && (this._input.tapCount = this.count,
                      this.manager.emit(this.options.event, this._input))
                  }
              }),
              Yt.VERSION = "2.0.4",
              Yt.defaults = {
                  domEvents: !1,
                  touchAction: "compute",
                  enable: !0,
                  inputTarget: null,
                  inputClass: null,
                  preset: [[Vt, {
                      enable: !1
                  }], [Ht, {
                      enable: !1
                  }, ["rotate"]], [Wt, {
                      direction: Y
                  }], [jt, {
                      direction: Y
                  }, ["swipe"]], [qt], [qt, {
                      event: "doubletap",
                      taps: 2
                  }, ["tap"]], [Bt]],
                  cssProps: {
                      userSelect: "none",
                      touchSelect: "none",
                      touchCallout: "none",
                      contentZooming: "none",
                      userDrag: "none",
                      tapHighlightColor: "rgba(0,0,0,0)"
                  }
              };
              function Xt(t, e) {
                  var n;
                  e = e || {},
                  this.options = v(e, Yt.defaults),
                  this.options.inputTarget = this.options.inputTarget || t,
                  this.handlers = {},
                  this.session = {},
                  this.recognizers = [],
                  this.element = t,
                  this.input = new ((n = this).options.inputClass || (A ? pt : O ? _t : k ? bt : at))(n,Z),
                  this.touchAction = new It(this,this.options.touchAction),
                  Ut(this, !0),
                  f(e.recognizers, function(t) {
                      var e = this.add(new t[0](t[1]));
                      t[2] && e.recognizeWith(t[2]),
                      t[3] && e.requireFailure(t[3])
                  }, this)
              }
              function Ut(t, e) {
                  var n = t.element;
                  n.style && f(t.options.cssProps, function(t, i) {
                      n.style[C(n.style, i)] = e ? t : ""
                  })
              }
              Xt.prototype = {
                  set: function(t) {
                      return m(this.options, t),
                      t.touchAction && this.touchAction.update(),
                      t.inputTarget && (this.input.destroy(),
                      this.input.target = t.inputTarget,
                      this.input.init()),
                      this
                  },
                  stop: function(t) {
                      this.session.stopped = t ? 2 : 1
                  },
                  recognize: function(t) {
                      var e = this.session;
                      if (!e.stopped) {
                          var n;
                          this.touchAction.preventDefaults(t);
                          var i = this.recognizers
                            , r = e.curRecognizer;
                          (!r || r && r.state & At) && (r = e.curRecognizer = null);
                          for (var o = 0; o < i.length; )
                              n = i[o],
                              2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t),
                              !r && n.state & (Lt | Ft | kt) && (r = e.curRecognizer = n),
                              o++
                      }
                  },
                  get: function(t) {
                      if (t instanceof Pt)
                          return t;
                      for (var e = this.recognizers, n = 0; n < e.length; n++)
                          if (e[n].options.event == t)
                              return e[n];
                      return null
                  },
                  add: function(t) {
                      if (d(t, "add", this))
                          return this;
                      var e = this.get(t.options.event);
                      return e && this.remove(e),
                      this.recognizers.push(t),
                      t.manager = this,
                      this.touchAction.update(),
                      t
                  },
                  remove: function(t) {
                      if (d(t, "remove", this))
                          return this;
                      var e = this.recognizers;
                      return t = this.get(t),
                      e.splice(T(e, t), 1),
                      this.touchAction.update(),
                      this
                  },
                  on: function(t, e) {
                      var n = this.handlers;
                      return f(E(t), function(t) {
                          n[t] = n[t] || [],
                          n[t].push(e)
                      }),
                      this
                  },
                  off: function(t, e) {
                      var n = this.handlers;
                      return f(E(t), function(t) {
                          e ? n[t].splice(T(n[t], e), 1) : delete n[t]
                      }),
                      this
                  },
                  emit: function(t, e) {
                      this.options.domEvents && function(t, e) {
                          var n = i.createEvent("Event");
                          n.initEvent(t, !0, !0),
                          n.gesture = e,
                          e.target.dispatchEvent(n)
                      }(t, e);
                      var n = this.handlers[t] && this.handlers[t].slice();
                      if (n && n.length) {
                          e.type = t,
                          e.preventDefault = function() {
                              e.srcEvent.preventDefault()
                          }
                          ;
                          for (var r = 0; r < n.length; )
                              n[r](e),
                              r++
                      }
                  },
                  destroy: function() {
                      this.element && Ut(this, !1),
                      this.handlers = {},
                      this.session = {},
                      this.input.destroy(),
                      this.element = null
                  }
              },
              m(Yt, {
                  INPUT_START: R,
                  INPUT_MOVE: z,
                  INPUT_END: N,
                  INPUT_CANCEL: j,
                  STATE_POSSIBLE: Ct,
                  STATE_BEGAN: Lt,
                  STATE_CHANGED: Ft,
                  STATE_ENDED: kt,
                  STATE_RECOGNIZED: At,
                  STATE_CANCELLED: Ot,
                  STATE_FAILED: 32,
                  DIRECTION_NONE: H,
                  DIRECTION_LEFT: B,
                  DIRECTION_RIGHT: V,
                  DIRECTION_UP: W,
                  DIRECTION_DOWN: q,
                  DIRECTION_HORIZONTAL: Y,
                  DIRECTION_VERTICAL: X,
                  DIRECTION_ALL: U,
                  Manager: Xt,
                  Input: K,
                  TouchAction: It,
                  TouchInput: _t,
                  MouseInput: at,
                  PointerEventInput: pt,
                  TouchMouseInput: bt,
                  SingleTouchInput: vt,
                  Recognizer: Pt,
                  AttrRecognizer: Nt,
                  Tap: qt,
                  Pan: jt,
                  Swipe: Wt,
                  Pinch: Ht,
                  Rotate: Vt,
                  Press: Bt,
                  on: w,
                  off: x,
                  each: f,
                  merge: v,
                  extend: m,
                  inherit: y,
                  bindFn: g,
                  prefixed: C
              }),
              typeof t == l && t.amd ? t(function() {
                  return Yt
              }) : void 0 !== n && n.exports ? n.exports = Yt : e.Hammer = Yt
          }(window, document)
      }
      , {}],
      15: [function(t, e, n) {
          !function(t, i, r) {
              var o = Object.getOwnPropertyNames
                , s = Object.defineProperty
                , a = Function.prototype.toString
                , l = Object.create
                , u = Object.prototype.hasOwnProperty
                , c = /^\n?function\s?(\w*)?_?\(/;
              function h(t, e, n) {
                  return "function" == typeof e && (e = p(n = e).replace(/_$/, "")),
                  s(t, e, {
                      configurable: !0,
                      writable: !0,
                      value: n
                  })
              }
              function p(t) {
                  return "function" != typeof t ? "" : "_name"in t ? t._name : "name"in t ? t.name : a.call(t).match(c)[1]
              }
              function d(t, e) {
                  return e._name = t,
                  e
              }
              var f = function() {
                  var t = {
                      value: {
                          writable: !0,
                          value: r
                      }
                  }
                    , e = l(null)
                    , n = function() {
                      var t = Math.random().toString(36).slice(2);
                      return t in e ? n() : e[t] = t
                  }
                    , i = n()
                    , a = function(t) {
                      if (u.call(t, i))
                          return t[i];
                      if (!Object.isExtensible(t))
                          throw new TypeError("Object must be extensible");
                      var e = l(null);
                      return s(t, i, {
                          value: e
                      }),
                      e
                  };
                  function c() {
                      var e = n()
                        , i = {};
                      this.unlock = function(n) {
                          var r = a(n);
                          if (u.call(r, e))
                              return r[e](i);
                          var o = l(null, t);
                          return s(r, e, {
                              value: function(t) {
                                  if (t === i)
                                      return o
                              }
                          }),
                          o
                      }
                  }
                  return h(Object, d("getOwnPropertyNames", function(t) {
                      var e = o(t);
                      return u.call(t, i) && e.splice(e.indexOf(i), 1),
                      e
                  })),
                  h(c.prototype, d("get", function(t) {
                      return this.unlock(t).value
                  })),
                  h(c.prototype, d("set", function(t, e) {
                      this.unlock(t).value = e
                  })),
                  c
              }()
                , m = function(e) {
                  var n = function(t) {
                      if (null == t || "object" != typeof t && "function" != typeof t)
                          throw new TypeError("Invalid WeakMap key")
                  }
                    , o = function(t, n) {
                      var i = e.unlock(t);
                      if (i.value)
                          throw new TypeError("Object is already a WeakMap");
                      i.value = n
                  }
                    , s = function(t) {
                      var n = e.unlock(t).value;
                      if (!n)
                          throw new TypeError("WeakMap is not generic");
                      return n
                  }
                    , a = function(t, e) {
                      null !== e && "object" == typeof e && "function" == typeof e.forEach && e.forEach(function(n, i) {
                          n instanceof Array && 2 === n.length && c.call(t, e[i][0], e[i][1])
                      })
                  };
                  function l(e) {
                      if (this === t || null == this || this === l.prototype)
                          return new l(e);
                      o(this, new f),
                      a(this, e)
                  }
                  function u(t) {
                      n(t);
                      var e = s(this).get(t);
                      return e === i ? r : e
                  }
                  function c(t, e) {
                      n(t),
                      s(this).set(t, e === r ? i : e)
                  }
                  function m(t) {
                      return n(t),
                      s(this).get(t) !== r
                  }
                  function v() {
                      return s(this),
                      "[object WeakMap]"
                  }
                  u._name = "get",
                  c._name = "set",
                  m._name = "has",
                  v._name = "toString";
                  var y = ("" + Object).split("Object")
                    , g = d("toString", function() {
                      return y[0] + p(this) + y[1]
                  });
                  h(g, g);
                  var _ = {
                      __proto__: []
                  }instanceof Array ? function(t) {
                      t.__proto__ = g
                  }
                  : function(t) {
                      h(t, g)
                  }
                  ;
                  return _(l),
                  [v, u, c, m, function(t) {
                      n(t);
                      var e = s(this)
                        , i = e.get(t) !== r;
                      return e.set(t, r),
                      i
                  }
                  ].forEach(function(t) {
                      h(l.prototype, t),
                      _(t)
                  }),
                  l
              }(new f)
                , v = Object.create ? function() {
                  return Object.create(null)
              }
              : function() {
                  return {}
              }
              ;
              function y(t) {
                  var e = new m;
                  return t || (t = v),
                  function(n, i) {
                      return i || 2 === arguments.length ? e.set(n, i) : (i = e.get(n)) === r && (i = t(n),
                      e.set(n, i)),
                      i
                  }
              }
              void 0 !== e ? e.exports = m : void 0 !== n ? n.WeakMap = m : "WeakMap"in t || (t.WeakMap = m),
              m.createStorage = y,
              t.WeakMap && (t.WeakMap.createStorage = y)
          }(function() {
              return this
          }())
      }
      , {}],
      16: [function(e, n, i) {
          var r;
          r = !0,
          function(o) {
              var s, a = this || (0,
              eval)("this"), l = a.document, u = a.navigator, c = a.jQuery, h = a.JSON;
              s = function(t, e) {
                  var n = void 0 !== t ? t : {};
                  n.exportSymbol = function(t, e) {
                      for (var i = t.split("."), r = n, o = 0; o < i.length - 1; o++)
                          r = r[i[o]];
                      r[i[i.length - 1]] = e
                  }
                  ,
                  n.exportProperty = function(t, e, n) {
                      t[e] = n
                  }
                  ,
                  n.version = "3.3.0",
                  n.exportSymbol("version", n.version),
                  n.utils = function() {
                      function t(t, e) {
                          for (var n in t)
                              t.hasOwnProperty(n) && e(n, t[n])
                      }
                      function e(t, e) {
                          if (e)
                              for (var n in e)
                                  e.hasOwnProperty(n) && (t[n] = e[n]);
                          return t
                      }
                      function i(t, e) {
                          return t.__proto__ = e,
                          t
                      }
                      var r = {
                          __proto__: []
                      }instanceof Array
                        , s = {}
                        , p = {};
                      s[u && /Firefox\/2/i.test(u.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"],
                      s.MouseEvents = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave"],
                      t(s, function(t, e) {
                          if (e.length)
                              for (var n = 0, i = e.length; n < i; n++)
                                  p[e[n]] = t
                      });
                      var d = {
                          propertychange: !0
                      }
                        , f = l && function() {
                          for (var t = 3, e = l.createElement("div"), n = e.getElementsByTagName("i"); e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e",
                          n[0]; )
                              ;
                          return t > 4 ? t : o
                      }()
                        , m = /\S+/g;
                      function v(t, e, i, r) {
                          var o = t[e].match(m) || [];
                          n.utils.arrayForEach(i.match(m), function(t) {
                              n.utils.addOrRemoveItem(o, t, r)
                          }),
                          t[e] = o.join(" ")
                      }
                      return {
                          fieldsIncludedWithJsonPost: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                          arrayForEach: function(t, e) {
                              for (var n = 0, i = t.length; n < i; n++)
                                  e(t[n], n)
                          },
                          arrayIndexOf: function(t, e) {
                              if ("function" == typeof Array.prototype.indexOf)
                                  return Array.prototype.indexOf.call(t, e);
                              for (var n = 0, i = t.length; n < i; n++)
                                  if (t[n] === e)
                                      return n;
                              return -1
                          },
                          arrayFirst: function(t, e, n) {
                              for (var i = 0, r = t.length; i < r; i++)
                                  if (e.call(n, t[i], i))
                                      return t[i];
                              return null
                          },
                          arrayRemoveItem: function(t, e) {
                              var i = n.utils.arrayIndexOf(t, e);
                              i > 0 ? t.splice(i, 1) : 0 === i && t.shift()
                          },
                          arrayGetDistinctValues: function(t) {
                              for (var e = [], i = 0, r = (t = t || []).length; i < r; i++)
                                  n.utils.arrayIndexOf(e, t[i]) < 0 && e.push(t[i]);
                              return e
                          },
                          arrayMap: function(t, e) {
                              for (var n = [], i = 0, r = (t = t || []).length; i < r; i++)
                                  n.push(e(t[i], i));
                              return n
                          },
                          arrayFilter: function(t, e) {
                              for (var n = [], i = 0, r = (t = t || []).length; i < r; i++)
                                  e(t[i], i) && n.push(t[i]);
                              return n
                          },
                          arrayPushAll: function(t, e) {
                              if (e instanceof Array)
                                  t.push.apply(t, e);
                              else
                                  for (var n = 0, i = e.length; n < i; n++)
                                      t.push(e[n]);
                              return t
                          },
                          addOrRemoveItem: function(t, e, i) {
                              var r = n.utils.arrayIndexOf(n.utils.peekObservable(t), e);
                              r < 0 ? i && t.push(e) : i || t.splice(r, 1)
                          },
                          canSetPrototype: r,
                          extend: e,
                          setPrototypeOf: i,
                          setPrototypeOfOrExtend: r ? i : e,
                          objectForEach: t,
                          objectMap: function(t, e) {
                              if (!t)
                                  return t;
                              var n = {};
                              for (var i in t)
                                  t.hasOwnProperty(i) && (n[i] = e(t[i], i, t));
                              return n
                          },
                          emptyDomNode: function(t) {
                              for (; t.firstChild; )
                                  n.removeNode(t.firstChild)
                          },
                          moveCleanedNodesToContainerElement: function(t) {
                              for (var e = n.utils.makeArray(t), i = (e[0] && e[0].ownerDocument || l).createElement("div"), r = 0, o = e.length; r < o; r++)
                                  i.appendChild(n.cleanNode(e[r]));
                              return i
                          },
                          cloneNodes: function(t, e) {
                              for (var i = 0, r = t.length, o = []; i < r; i++) {
                                  var s = t[i].cloneNode(!0);
                                  o.push(e ? n.cleanNode(s) : s)
                              }
                              return o
                          },
                          setDomNodeChildren: function(t, e) {
                              if (n.utils.emptyDomNode(t),
                              e)
                                  for (var i = 0, r = e.length; i < r; i++)
                                      t.appendChild(e[i])
                          },
                          replaceDomNodes: function(t, e) {
                              var i = t.nodeType ? [t] : t;
                              if (i.length > 0) {
                                  for (var r = i[0], o = r.parentNode, s = 0, a = e.length; s < a; s++)
                                      o.insertBefore(e[s], r);
                                  for (s = 0,
                                  a = i.length; s < a; s++)
                                      n.removeNode(i[s])
                              }
                          },
                          fixUpContinuousNodeArray: function(t, e) {
                              if (t.length) {
                                  for (e = 8 === e.nodeType && e.parentNode || e; t.length && t[0].parentNode !== e; )
                                      t.splice(0, 1);
                                  if (t.length > 1) {
                                      var n = t[0]
                                        , i = t[t.length - 1];
                                      for (t.length = 0; n !== i; )
                                          if (t.push(n),
                                          !(n = n.nextSibling))
                                              return;
                                      t.push(i)
                                  }
                              }
                              return t
                          },
                          setOptionNodeSelectionState: function(t, e) {
                              f < 7 ? t.setAttribute("selected", e) : t.selected = e
                          },
                          stringTrim: function(t) {
                              return null === t || t === o ? "" : t.trim ? t.trim() : t.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                          },
                          stringStartsWith: function(t, e) {
                              return t = t || "",
                              !(e.length > t.length) && t.substring(0, e.length) === e
                          },
                          domNodeIsContainedBy: function(t, e) {
                              if (t === e)
                                  return !0;
                              if (11 === t.nodeType)
                                  return !1;
                              if (e.contains)
                                  return e.contains(3 === t.nodeType ? t.parentNode : t);
                              if (e.compareDocumentPosition)
                                  return 16 == (16 & e.compareDocumentPosition(t));
                              for (; t && t != e; )
                                  t = t.parentNode;
                              return !!t
                          },
                          domNodeIsAttachedToDocument: function(t) {
                              return n.utils.domNodeIsContainedBy(t, t.ownerDocument.documentElement)
                          },
                          anyDomNodeIsAttachedToDocument: function(t) {
                              return !!n.utils.arrayFirst(t, n.utils.domNodeIsAttachedToDocument)
                          },
                          tagNameLower: function(t) {
                              return t && t.tagName && t.tagName.toLowerCase()
                          },
                          registerEventHandler: function(t, e, i) {
                              var r = f && d[e];
                              if (!r && c)
                                  c(t).bind(e, i);
                              else if (r || "function" != typeof t.addEventListener) {
                                  if (void 0 === t.attachEvent)
                                      throw new Error("Browser doesn't support addEventListener or attachEvent");
                                  var o = function(e) {
                                      i.call(t, e)
                                  }
                                    , s = "on" + e;
                                  t.attachEvent(s, o),
                                  n.utils.domNodeDisposal.addDisposeCallback(t, function() {
                                      t.detachEvent(s, o)
                                  })
                              } else
                                  t.addEventListener(e, i, !1)
                          },
                          triggerEvent: function(t, e) {
                              if (!t || !t.nodeType)
                                  throw new Error("element must be a DOM node when calling triggerEvent");
                              var i = function(t, e) {
                                  if ("input" !== n.utils.tagNameLower(t) || !t.type)
                                      return !1;
                                  if ("click" != e.toLowerCase())
                                      return !1;
                                  var i = t.type;
                                  return "checkbox" == i || "radio" == i
                              }(t, e);
                              if (c && !i)
                                  c(t).trigger(e);
                              else if ("function" == typeof l.createEvent) {
                                  if ("function" != typeof t.dispatchEvent)
                                      throw new Error("The supplied element doesn't support dispatchEvent");
                                  var r = p[e] || "HTMLEvents"
                                    , o = l.createEvent(r);
                                  o.initEvent(e, !0, !0, a, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, t),
                                  t.dispatchEvent(o)
                              } else if (i && t.click)
                                  t.click();
                              else {
                                  if (void 0 === t.fireEvent)
                                      throw new Error("Browser doesn't support triggering events");
                                  t.fireEvent("on" + e)
                              }
                          },
                          unwrapObservable: function(t) {
                              return n.isObservable(t) ? t() : t
                          },
                          peekObservable: function(t) {
                              return n.isObservable(t) ? t.peek() : t
                          },
                          toggleDomNodeCssClass: function(t, e, i) {
                              var r;
                              e && ("object" == typeof t.classList ? (r = t.classList[i ? "add" : "remove"],
                              n.utils.arrayForEach(e.match(m), function(e) {
                                  r.call(t.classList, e)
                              })) : "string" == typeof t.className.baseVal ? v(t.className, "baseVal", e, i) : v(t, "className", e, i))
                          },
                          setTextContent: function(t, e) {
                              var i = n.utils.unwrapObservable(e);
                              null !== i && i !== o || (i = "");
                              var r = n.virtualElements.firstChild(t);
                              !r || 3 != r.nodeType || n.virtualElements.nextSibling(r) ? n.virtualElements.setDomNodeChildren(t, [t.ownerDocument.createTextNode(i)]) : r.data = i,
                              n.utils.forceRefresh(t)
                          },
                          setElementName: function(t, e) {
                              if (t.name = e,
                              f <= 7)
                                  try {
                                      t.mergeAttributes(l.createElement("<input name='" + t.name + "'/>"), !1)
                                  } catch (t) {}
                          },
                          forceRefresh: function(t) {
                              if (f >= 9) {
                                  var e = 1 == t.nodeType ? t : t.parentNode;
                                  e.style && (e.style.zoom = e.style.zoom)
                              }
                          },
                          ensureSelectElementIsRenderedCorrectly: function(t) {
                              if (f) {
                                  var e = t.style.width;
                                  t.style.width = 0,
                                  t.style.width = e
                              }
                          },
                          range: function(t, e) {
                              t = n.utils.unwrapObservable(t),
                              e = n.utils.unwrapObservable(e);
                              for (var i = [], r = t; r <= e; r++)
                                  i.push(r);
                              return i
                          },
                          makeArray: function(t) {
                              for (var e = [], n = 0, i = t.length; n < i; n++)
                                  e.push(t[n]);
                              return e
                          },
                          isIe6: 6 === f,
                          isIe7: 7 === f,
                          ieVersion: f,
                          getFormFields: function(t, e) {
                              for (var i = n.utils.makeArray(t.getElementsByTagName("input")).concat(n.utils.makeArray(t.getElementsByTagName("textarea"))), r = "string" == typeof e ? function(t) {
                                  return t.name === e
                              }
                              : function(t) {
                                  return e.test(t.name)
                              }
                              , o = [], s = i.length - 1; s >= 0; s--)
                                  r(i[s]) && o.push(i[s]);
                              return o
                          },
                          parseJson: function(t) {
                              return "string" == typeof t && (t = n.utils.stringTrim(t)) ? h && h.parse ? h.parse(t) : new Function("return " + t)() : null
                          },
                          stringifyJson: function(t, e, i) {
                              if (!h || !h.stringify)
                                  throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                              return h.stringify(n.utils.unwrapObservable(t), e, i)
                          },
                          postJson: function(e, i, r) {
                              var o = (r = r || {}).params || {}
                                , s = r.includeFields || this.fieldsIncludedWithJsonPost
                                , a = e;
                              if ("object" == typeof e && "form" === n.utils.tagNameLower(e)) {
                                  var u = e;
                                  a = u.action;
                                  for (var c = s.length - 1; c >= 0; c--)
                                      for (var h = n.utils.getFormFields(u, s[c]), p = h.length - 1; p >= 0; p--)
                                          o[h[p].name] = h[p].value
                              }
                              i = n.utils.unwrapObservable(i);
                              var d = l.createElement("form");
                              for (var f in d.style.display = "none",
                              d.action = a,
                              d.method = "post",
                              i) {
                                  var m = l.createElement("input");
                                  m.type = "hidden",
                                  m.name = f,
                                  m.value = n.utils.stringifyJson(n.utils.unwrapObservable(i[f])),
                                  d.appendChild(m)
                              }
                              t(o, function(t, e) {
                                  var n = l.createElement("input");
                                  n.type = "hidden",
                                  n.name = t,
                                  n.value = e,
                                  d.appendChild(n)
                              }),
                              l.body.appendChild(d),
                              r.submitter ? r.submitter(d) : d.submit(),
                              setTimeout(function() {
                                  d.parentNode.removeChild(d)
                              }, 0)
                          }
                      }
                  }(),
                  n.exportSymbol("utils", n.utils),
                  n.exportSymbol("utils.arrayForEach", n.utils.arrayForEach),
                  n.exportSymbol("utils.arrayFirst", n.utils.arrayFirst),
                  n.exportSymbol("utils.arrayFilter", n.utils.arrayFilter),
                  n.exportSymbol("utils.arrayGetDistinctValues", n.utils.arrayGetDistinctValues),
                  n.exportSymbol("utils.arrayIndexOf", n.utils.arrayIndexOf),
                  n.exportSymbol("utils.arrayMap", n.utils.arrayMap),
                  n.exportSymbol("utils.arrayPushAll", n.utils.arrayPushAll),
                  n.exportSymbol("utils.arrayRemoveItem", n.utils.arrayRemoveItem),
                  n.exportSymbol("utils.extend", n.utils.extend),
                  n.exportSymbol("utils.fieldsIncludedWithJsonPost", n.utils.fieldsIncludedWithJsonPost),
                  n.exportSymbol("utils.getFormFields", n.utils.getFormFields),
                  n.exportSymbol("utils.peekObservable", n.utils.peekObservable),
                  n.exportSymbol("utils.postJson", n.utils.postJson),
                  n.exportSymbol("utils.parseJson", n.utils.parseJson),
                  n.exportSymbol("utils.registerEventHandler", n.utils.registerEventHandler),
                  n.exportSymbol("utils.stringifyJson", n.utils.stringifyJson),
                  n.exportSymbol("utils.range", n.utils.range),
                  n.exportSymbol("utils.toggleDomNodeCssClass", n.utils.toggleDomNodeCssClass),
                  n.exportSymbol("utils.triggerEvent", n.utils.triggerEvent),
                  n.exportSymbol("utils.unwrapObservable", n.utils.unwrapObservable),
                  n.exportSymbol("utils.objectForEach", n.utils.objectForEach),
                  n.exportSymbol("utils.addOrRemoveItem", n.utils.addOrRemoveItem),
                  n.exportSymbol("utils.setTextContent", n.utils.setTextContent),
                  n.exportSymbol("unwrap", n.utils.unwrapObservable),
                  Function.prototype.bind || (Function.prototype.bind = function(t) {
                      var e = this;
                      if (1 === arguments.length)
                          return function() {
                              return e.apply(t, arguments)
                          }
                          ;
                      var n = Array.prototype.slice.call(arguments, 1);
                      return function() {
                          var i = n.slice(0);
                          return i.push.apply(i, arguments),
                          e.apply(t, i)
                      }
                  }
                  ),
                  n.utils.domData = new function() {
                      var t = 0
                        , e = "__ko__" + (new Date).getTime()
                        , n = {};
                      function i(i, r) {
                          var s = i[e];
                          if (!s || "null" === s || !n[s]) {
                              if (!r)
                                  return o;
                              s = i[e] = "ko" + t++,
                              n[s] = {}
                          }
                          return n[s]
                      }
                      return {
                          get: function(t, e) {
                              var n = i(t, !1);
                              return n === o ? o : n[e]
                          },
                          set: function(t, e, n) {
                              n === o && i(t, !1) === o || (i(t, !0)[e] = n)
                          },
                          clear: function(t) {
                              var i = t[e];
                              return !!i && (delete n[i],
                              t[e] = null,
                              !0)
                          },
                          nextKey: function() {
                              return t++ + e
                          }
                      }
                  }
                  ,
                  n.exportSymbol("utils.domData", n.utils.domData),
                  n.exportSymbol("utils.domData.clear", n.utils.domData.clear),
                  n.utils.domNodeDisposal = new function() {
                      var t = n.utils.domData.nextKey()
                        , e = {
                          1: !0,
                          8: !0,
                          9: !0
                      }
                        , i = {
                          1: !0,
                          9: !0
                      };
                      function r(e, i) {
                          var r = n.utils.domData.get(e, t);
                          return r === o && i && (r = [],
                          n.utils.domData.set(e, t, r)),
                          r
                      }
                      function s(t) {
                          var e = r(t, !1);
                          if (e) {
                              e = e.slice(0);
                              for (var o = 0; o < e.length; o++)
                                  e[o](t)
                          }
                          n.utils.domData.clear(t),
                          n.utils.domNodeDisposal.cleanExternalData(t),
                          i[t.nodeType] && function(t) {
                              for (var e, n = t.firstChild; e = n; )
                                  n = e.nextSibling,
                                  8 === e.nodeType && s(e)
                          }(t)
                      }
                      return {
                          addDisposeCallback: function(t, e) {
                              if ("function" != typeof e)
                                  throw new Error("Callback must be a function");
                              r(t, !0).push(e)
                          },
                          removeDisposeCallback: function(e, i) {
                              var s = r(e, !1);
                              s && (n.utils.arrayRemoveItem(s, i),
                              0 == s.length && function(e) {
                                  n.utils.domData.set(e, t, o)
                              }(e))
                          },
                          cleanNode: function(t) {
                              if (e[t.nodeType] && (s(t),
                              i[t.nodeType])) {
                                  var r = [];
                                  n.utils.arrayPushAll(r, t.getElementsByTagName("*"));
                                  for (var o = 0, a = r.length; o < a; o++)
                                      s(r[o])
                              }
                              return t
                          },
                          removeNode: function(t) {
                              n.cleanNode(t),
                              t.parentNode && t.parentNode.removeChild(t)
                          },
                          cleanExternalData: function(t) {
                              c && "function" == typeof c.cleanData && c.cleanData([t])
                          }
                      }
                  }
                  ,
                  n.cleanNode = n.utils.domNodeDisposal.cleanNode,
                  n.removeNode = n.utils.domNodeDisposal.removeNode,
                  n.exportSymbol("cleanNode", n.cleanNode),
                  n.exportSymbol("removeNode", n.removeNode),
                  n.exportSymbol("utils.domNodeDisposal", n.utils.domNodeDisposal),
                  n.exportSymbol("utils.domNodeDisposal.addDisposeCallback", n.utils.domNodeDisposal.addDisposeCallback),
                  n.exportSymbol("utils.domNodeDisposal.removeDisposeCallback", n.utils.domNodeDisposal.removeDisposeCallback),
                  n.utils.parseHtmlFragment = function(t, e) {
                      return c ? function(t, e) {
                          if (c.parseHTML)
                              return c.parseHTML(t, e) || [];
                          var n = c.clean([t], e);
                          if (n && n[0]) {
                              for (var i = n[0]; i.parentNode && 11 !== i.parentNode.nodeType; )
                                  i = i.parentNode;
                              i.parentNode && i.parentNode.removeChild(i)
                          }
                          return n
                      }(t, e) : function(t, e) {
                          e || (e = l);
                          var i = e.parentWindow || e.defaultView || a
                            , r = n.utils.stringTrim(t).toLowerCase()
                            , o = e.createElement("div")
                            , s = r.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !r.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!r.indexOf("<td") || !r.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""]
                            , u = "ignored<div>" + s[1] + t + s[2] + "</div>";
                          for ("function" == typeof i.innerShiv ? o.appendChild(i.innerShiv(u)) : o.innerHTML = u; s[0]--; )
                              o = o.lastChild;
                          return n.utils.makeArray(o.lastChild.childNodes)
                      }(t, e)
                  }
                  ,
                  n.utils.setHtml = function(t, e) {
                      if (n.utils.emptyDomNode(t),
                      null !== (e = n.utils.unwrapObservable(e)) && e !== o)
                          if ("string" != typeof e && (e = e.toString()),
                          c)
                              c(t).html(e);
                          else
                              for (var i = n.utils.parseHtmlFragment(e, t.ownerDocument), r = 0; r < i.length; r++)
                                  t.appendChild(i[r])
                  }
                  ,
                  n.exportSymbol("utils.parseHtmlFragment", n.utils.parseHtmlFragment),
                  n.exportSymbol("utils.setHtml", n.utils.setHtml),
                  n.memoization = function() {
                      var t = {};
                      function e() {
                          return (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1)
                      }
                      return {
                          memoize: function(n) {
                              if ("function" != typeof n)
                                  throw new Error("You can only pass a function to ko.memoization.memoize()");
                              var i = e() + e();
                              return t[i] = n,
                              "\x3c!--[ko_memo:" + i + "]--\x3e"
                          },
                          unmemoize: function(e, n) {
                              var i = t[e];
                              if (i === o)
                                  throw new Error("Couldn't find any memo with ID " + e + ". Perhaps it's already been unmemoized.");
                              try {
                                  return i.apply(null, n || []),
                                  !0
                              } finally {
                                  delete t[e]
                              }
                          },
                          unmemoizeDomNodeAndDescendants: function(t, e) {
                              var i = [];
                              !function t(e, i) {
                                  if (e)
                                      if (8 == e.nodeType) {
                                          var r = n.memoization.parseMemoText(e.nodeValue);
                                          null != r && i.push({
                                              domNode: e,
                                              memoId: r
                                          })
                                      } else if (1 == e.nodeType)
                                          for (var o = 0, s = e.childNodes, a = s.length; o < a; o++)
                                              t(s[o], i)
                              }(t, i);
                              for (var r = 0, o = i.length; r < o; r++) {
                                  var s = i[r].domNode
                                    , a = [s];
                                  e && n.utils.arrayPushAll(a, e),
                                  n.memoization.unmemoize(i[r].memoId, a),
                                  s.nodeValue = "",
                                  s.parentNode && s.parentNode.removeChild(s)
                              }
                          },
                          parseMemoText: function(t) {
                              var e = t.match(/^\[ko_memo\:(.*?)\]$/);
                              return e ? e[1] : null
                          }
                      }
                  }(),
                  n.exportSymbol("memoization", n.memoization),
                  n.exportSymbol("memoization.memoize", n.memoization.memoize),
                  n.exportSymbol("memoization.unmemoize", n.memoization.unmemoize),
                  n.exportSymbol("memoization.parseMemoText", n.memoization.parseMemoText),
                  n.exportSymbol("memoization.unmemoizeDomNodeAndDescendants", n.memoization.unmemoizeDomNodeAndDescendants),
                  n.extenders = {
                      throttle: function(t, e) {
                          t.throttleEvaluation = e;
                          var i = null;
                          return n.dependentObservable({
                              read: t,
                              write: function(n) {
                                  clearTimeout(i),
                                  i = setTimeout(function() {
                                      t(n)
                                  }, e)
                              }
                          })
                      },
                      rateLimit: function(t, e) {
                          var n, i, r;
                          "number" == typeof e ? n = e : (n = e.timeout,
                          i = e.method),
                          r = "notifyWhenChangesStop" == i ? d : p,
                          t.limit(function(t) {
                              return r(t, n)
                          })
                      },
                      notify: function(t, e) {
                          t.equalityComparer = "always" == e ? null : s
                      }
                  };
                  var i = {
                      undefined: 1,
                      boolean: 1,
                      number: 1,
                      string: 1
                  };
                  function s(t, e) {
                      return !!(null === t || typeof t in i) && t === e
                  }
                  function p(t, e) {
                      var n;
                      return function() {
                          n || (n = setTimeout(function() {
                              n = o,
                              t()
                          }, e))
                      }
                  }
                  function d(t, e) {
                      var n;
                      return function() {
                          clearTimeout(n),
                          n = setTimeout(t, e)
                      }
                  }
                  n.exportSymbol("extenders", n.extenders),
                  n.subscription = function(t, e, i) {
                      this._target = t,
                      this.callback = e,
                      this.disposeCallback = i,
                      this.isDisposed = !1,
                      n.exportProperty(this, "dispose", this.dispose)
                  }
                  ,
                  n.subscription.prototype.dispose = function() {
                      this.isDisposed = !0,
                      this.disposeCallback()
                  }
                  ,
                  n.subscribable = function() {
                      n.utils.setPrototypeOfOrExtend(this, n.subscribable.fn),
                      this._subscriptions = {},
                      this._versionNumber = 1
                  }
                  ;
                  var f = "change"
                    , m = {
                      subscribe: function(t, e, i) {
                          var r = this;
                          i = i || f;
                          var o = e ? t.bind(e) : t
                            , s = new n.subscription(r,o,function() {
                              n.utils.arrayRemoveItem(r._subscriptions[i], s),
                              r.afterSubscriptionRemove && r.afterSubscriptionRemove(i)
                          }
                          );
                          return r.beforeSubscriptionAdd && r.beforeSubscriptionAdd(i),
                          r._subscriptions[i] || (r._subscriptions[i] = []),
                          r._subscriptions[i].push(s),
                          s
                      },
                      notifySubscribers: function(t, e) {
                          if ((e = e || f) === f && this.updateVersion(),
                          this.hasSubscriptionsForEvent(e))
                              try {
                                  n.dependencyDetection.begin();
                                  for (var i, r = this._subscriptions[e].slice(0), o = 0; i = r[o]; ++o)
                                      i.isDisposed || i.callback(t)
                              } finally {
                                  n.dependencyDetection.end()
                              }
                      },
                      getVersion: function() {
                          return this._versionNumber
                      },
                      hasChanged: function(t) {
                          return this.getVersion() !== t
                      },
                      updateVersion: function() {
                          ++this._versionNumber
                      },
                      limit: function(t) {
                          var e, i, r, o = this, s = n.isObservable(o);
                          o._origNotifySubscribers || (o._origNotifySubscribers = o.notifySubscribers,
                          o.notifySubscribers = function(t, e) {
                              e && e !== f ? "beforeChange" === e ? o._rateLimitedBeforeChange(t) : o._origNotifySubscribers(t, e) : o._rateLimitedChange(t)
                          }
                          );
                          var a = t(function() {
                              s && r === o && (r = o()),
                              e = !1,
                              o.isDifferent(i, r) && o._origNotifySubscribers(i = r)
                          });
                          o._rateLimitedChange = function(t) {
                              e = !0,
                              r = t,
                              a()
                          }
                          ,
                          o._rateLimitedBeforeChange = function(t) {
                              e || (i = t,
                              o._origNotifySubscribers(t, "beforeChange"))
                          }
                      },
                      hasSubscriptionsForEvent: function(t) {
                          return this._subscriptions[t] && this._subscriptions[t].length
                      },
                      getSubscriptionsCount: function(t) {
                          if (t)
                              return this._subscriptions[t] && this._subscriptions[t].length || 0;
                          var e = 0;
                          return n.utils.objectForEach(this._subscriptions, function(t, n) {
                              e += n.length
                          }),
                          e
                      },
                      isDifferent: function(t, e) {
                          return !this.equalityComparer || !this.equalityComparer(t, e)
                      },
                      extend: function(t) {
                          var e = this;
                          return t && n.utils.objectForEach(t, function(t, i) {
                              var r = n.extenders[t];
                              "function" == typeof r && (e = r(e, i) || e)
                          }),
                          e
                      }
                  };
                  n.exportProperty(m, "subscribe", m.subscribe),
                  n.exportProperty(m, "extend", m.extend),
                  n.exportProperty(m, "getSubscriptionsCount", m.getSubscriptionsCount),
                  n.utils.canSetPrototype && n.utils.setPrototypeOf(m, Function.prototype),
                  n.subscribable.fn = m,
                  n.isSubscribable = function(t) {
                      return null != t && "function" == typeof t.subscribe && "function" == typeof t.notifySubscribers
                  }
                  ,
                  n.exportSymbol("subscribable", n.subscribable),
                  n.exportSymbol("isSubscribable", n.isSubscribable),
                  n.computedContext = n.dependencyDetection = function() {
                      var t, e = [], i = 0;
                      function r(n) {
                          e.push(t),
                          t = n
                      }
                      function o() {
                          t = e.pop()
                      }
                      return {
                          begin: r,
                          end: o,
                          registerDependency: function(e) {
                              if (t) {
                                  if (!n.isSubscribable(e))
                                      throw new Error("Only subscribable things can act as dependencies");
                                  t.callback(e, e._id || (e._id = ++i))
                              }
                          },
                          ignore: function(t, e, n) {
                              try {
                                  return r(),
                                  t.apply(e, n || [])
                              } finally {
                                  o()
                              }
                          },
                          getDependenciesCount: function() {
                              if (t)
                                  return t.computed.getDependenciesCount()
                          },
                          isInitial: function() {
                              if (t)
                                  return t.isInitial
                          }
                      }
                  }(),
                  n.exportSymbol("computedContext", n.computedContext),
                  n.exportSymbol("computedContext.getDependenciesCount", n.computedContext.getDependenciesCount),
                  n.exportSymbol("computedContext.isInitial", n.computedContext.isInitial),
                  n.exportSymbol("computedContext.isSleeping", n.computedContext.isSleeping),
                  n.exportSymbol("ignoreDependencies", n.ignoreDependencies = n.dependencyDetection.ignore),
                  n.observable = function(t) {
                      var e = t;
                      function i() {
                          return arguments.length > 0 ? (i.isDifferent(e, arguments[0]) && (i.valueWillMutate(),
                          e = arguments[0],
                          r && (i._latestValue = e),
                          i.valueHasMutated()),
                          this) : (n.dependencyDetection.registerDependency(i),
                          e)
                      }
                      return n.subscribable.call(i),
                      n.utils.setPrototypeOfOrExtend(i, n.observable.fn),
                      r && (i._latestValue = e),
                      i.peek = function() {
                          return e
                      }
                      ,
                      i.valueHasMutated = function() {
                          i.notifySubscribers(e)
                      }
                      ,
                      i.valueWillMutate = function() {
                          i.notifySubscribers(e, "beforeChange")
                      }
                      ,
                      n.exportProperty(i, "peek", i.peek),
                      n.exportProperty(i, "valueHasMutated", i.valueHasMutated),
                      n.exportProperty(i, "valueWillMutate", i.valueWillMutate),
                      i
                  }
                  ,
                  n.observable.fn = {
                      equalityComparer: s
                  };
                  var v = n.observable.protoProperty = "__ko_proto__";
                  n.observable.fn[v] = n.observable,
                  n.utils.canSetPrototype && n.utils.setPrototypeOf(n.observable.fn, n.subscribable.fn),
                  n.hasPrototype = function(t, e) {
                      return null !== t && t !== o && t[v] !== o && (t[v] === e || n.hasPrototype(t[v], e))
                  }
                  ,
                  n.isObservable = function(t) {
                      return n.hasPrototype(t, n.observable)
                  }
                  ,
                  n.isWriteableObservable = function(t) {
                      return "function" == typeof t && t[v] === n.observable || !("function" != typeof t || t[v] !== n.dependentObservable || !t.hasWriteFunction)
                  }
                  ,
                  n.exportSymbol("observable", n.observable),
                  n.exportSymbol("isObservable", n.isObservable),
                  n.exportSymbol("isWriteableObservable", n.isWriteableObservable),
                  n.exportSymbol("isWritableObservable", n.isWriteableObservable),
                  n.observableArray = function(t) {
                      if ("object" != typeof (t = t || []) || !("length"in t))
                          throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                      var e = n.observable(t);
                      return n.utils.setPrototypeOfOrExtend(e, n.observableArray.fn),
                      e.extend({
                          trackArrayChanges: !0
                      })
                  }
                  ,
                  n.observableArray.fn = {
                      remove: function(t) {
                          for (var e = this.peek(), i = [], r = "function" != typeof t || n.isObservable(t) ? function(e) {
                              return e === t
                          }
                          : t, o = 0; o < e.length; o++) {
                              var s = e[o];
                              r(s) && (0 === i.length && this.valueWillMutate(),
                              i.push(s),
                              e.splice(o, 1),
                              o--)
                          }
                          return i.length && this.valueHasMutated(),
                          i
                      },
                      removeAll: function(t) {
                          if (t === o) {
                              var e = this.peek()
                                , i = e.slice(0);
                              return this.valueWillMutate(),
                              e.splice(0, e.length),
                              this.valueHasMutated(),
                              i
                          }
                          return t ? this.remove(function(e) {
                              return n.utils.arrayIndexOf(t, e) >= 0
                          }) : []
                      },
                      destroy: function(t) {
                          var e = this.peek()
                            , i = "function" != typeof t || n.isObservable(t) ? function(e) {
                              return e === t
                          }
                          : t;
                          this.valueWillMutate();
                          for (var r = e.length - 1; r >= 0; r--)
                              i(e[r]) && (e[r]._destroy = !0);
                          this.valueHasMutated()
                      },
                      destroyAll: function(t) {
                          return t === o ? this.destroy(function() {
                              return !0
                          }) : t ? this.destroy(function(e) {
                              return n.utils.arrayIndexOf(t, e) >= 0
                          }) : []
                      },
                      indexOf: function(t) {
                          var e = this();
                          return n.utils.arrayIndexOf(e, t)
                      },
                      replace: function(t, e) {
                          var n = this.indexOf(t);
                          n >= 0 && (this.valueWillMutate(),
                          this.peek()[n] = e,
                          this.valueHasMutated())
                      }
                  },
                  n.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                      n.observableArray.fn[t] = function() {
                          var e = this.peek();
                          this.valueWillMutate(),
                          this.cacheDiffForKnownOperation(e, t, arguments);
                          var n = e[t].apply(e, arguments);
                          return this.valueHasMutated(),
                          n
                      }
                  }),
                  n.utils.arrayForEach(["slice"], function(t) {
                      n.observableArray.fn[t] = function() {
                          var e = this();
                          return e[t].apply(e, arguments)
                      }
                  }),
                  n.utils.canSetPrototype && n.utils.setPrototypeOf(n.observableArray.fn, n.observable.fn),
                  n.exportSymbol("observableArray", n.observableArray);
                  var y = "arrayChange";
                  n.extenders.trackArrayChanges = function(t) {
                      if (!t.cacheDiffForKnownOperation) {
                          var e, i = !1, r = null, o = 0, s = t.beforeSubscriptionAdd, a = t.afterSubscriptionRemove;
                          t.beforeSubscriptionAdd = function(a) {
                              s && s.call(t, a),
                              a === y && function() {
                                  if (!i) {
                                      i = !0;
                                      var s = t.notifySubscribers;
                                      t.notifySubscribers = function(t, e) {
                                          return e && e !== f || ++o,
                                          s.apply(this, arguments)
                                      }
                                      ;
                                      var a = [].concat(t.peek() || []);
                                      r = null,
                                      e = t.subscribe(function(e) {
                                          if (e = [].concat(e || []),
                                          t.hasSubscriptionsForEvent(y))
                                              var i = function(t, e) {
                                                  return (!r || o > 1) && (r = n.utils.compareArrays(t, e, {
                                                      sparse: !0
                                                  })),
                                                  r
                                              }(a, e);
                                          a = e,
                                          r = null,
                                          o = 0,
                                          i && i.length && t.notifySubscribers(i, y)
                                      })
                                  }
                              }()
                          }
                          ,
                          t.afterSubscriptionRemove = function(n) {
                              a && a.call(t, n),
                              n !== y || t.hasSubscriptionsForEvent(y) || (e.dispose(),
                              i = !1)
                          }
                          ,
                          t.cacheDiffForKnownOperation = function(t, e, s) {
                              if (i && !o) {
                                  var a = []
                                    , l = t.length
                                    , u = s.length
                                    , c = 0;
                                  switch (e) {
                                  case "push":
                                      c = l;
                                  case "unshift":
                                      for (var h = 0; h < u; h++)
                                          _("added", s[h], c + h);
                                      break;
                                  case "pop":
                                      c = l - 1;
                                  case "shift":
                                      l && _("deleted", t[c], c);
                                      break;
                                  case "splice":
                                      for (var p = Math.min(Math.max(0, s[0] < 0 ? l + s[0] : s[0]), l), d = 1 === u ? l : Math.min(p + (s[1] || 0), l), f = p + u - 2, m = Math.max(d, f), v = [], y = [], g = (h = p,
                                      2); h < m; ++h,
                                      ++g)
                                          h < d && y.push(_("deleted", t[h], h)),
                                          h < f && v.push(_("added", s[g], h));
                                      n.utils.findMovesInArrayComparison(y, v);
                                      break;
                                  default:
                                      return
                                  }
                                  r = a
                              }
                              function _(t, e, n) {
                                  return a[a.length] = {
                                      status: t,
                                      value: e,
                                      index: n
                                  }
                              }
                          }
                      }
                  }
                  ,
                  n.computed = n.dependentObservable = function(t, e, i) {
                      var s, a = !0, l = !1, u = !1, c = !1, h = t, p = !1, d = !1;
                      if (h && "object" == typeof h ? h = (i = h).read : (i = i || {},
                      h || (h = i.read)),
                      "function" != typeof h)
                          throw new Error("Pass a function that returns the value of the ko.computed");
                      function f(t, e, n) {
                          if (p && e === _)
                              throw Error("A 'pure' computed must not be called recursively");
                          I[t] = n,
                          n._order = C++,
                          n._version = e.getVersion()
                      }
                      function m() {
                          var t, e;
                          for (t in I)
                              if (I.hasOwnProperty(t) && (e = I[t])._target.hasChanged(e._version))
                                  return !0
                      }
                      function v() {
                          !d && I && n.utils.objectForEach(I, function(t, e) {
                              e.dispose && e.dispose()
                          }),
                          I = null,
                          C = 0,
                          c = !0,
                          a = !1,
                          d = !1
                      }
                      function y() {
                          var t = _.throttleEvaluation;
                          t && t >= 0 ? (clearTimeout(L),
                          L = setTimeout(function() {
                              g(!0)
                          }, t)) : _._evalRateLimited ? _._evalRateLimited() : g(!0)
                      }
                      function g(t) {
                          if (!l && !c) {
                              if (T && T()) {
                                  if (!u)
                                      return void D()
                              } else
                                  u = !1;
                              l = !0;
                              try {
                                  var i = I
                                    , m = C
                                    , v = p ? o : !C;
                                  n.dependencyDetection.begin({
                                      callback: function(t, e) {
                                          c || (m && i[e] ? (f(e, t, i[e]),
                                          delete i[e],
                                          --m) : I[e] || f(e, t, d ? {
                                              _target: t
                                          } : t.subscribe(y)))
                                      },
                                      computed: _,
                                      isInitial: v
                                  }),
                                  I = {},
                                  C = 0;
                                  try {
                                      var g = e ? h.call(e) : h()
                                  } finally {
                                      n.dependencyDetection.end(),
                                      m && !d && n.utils.objectForEach(i, function(t, e) {
                                          e.dispose && e.dispose()
                                      }),
                                      a = !1
                                  }
                                  _.isDifferent(s, g) && (d || x(s, "beforeChange"),
                                  s = g,
                                  r && (_._latestValue = s),
                                  d ? _.updateVersion() : t && x(s)),
                                  v && x(s, "awake")
                              } finally {
                                  l = !1
                              }
                              C || D()
                          }
                      }
                      function _() {
                          if (arguments.length > 0) {
                              if ("function" != typeof S)
                                  throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                              return S.apply(e, arguments),
                              this
                          }
                          return n.dependencyDetection.registerDependency(_),
                          (a || d && m()) && g(),
                          s
                      }
                      function b() {
                          return (a && !C || d && m()) && g(),
                          s
                      }
                      function w() {
                          return a || C > 0
                      }
                      function x(t, e) {
                          _.notifySubscribers(t, e)
                      }
                      var S = i.write
                        , M = i.disposeWhenNodeIsRemoved || i.disposeWhenNodeIsRemoved || null
                        , E = i.disposeWhen || i.disposeWhen
                        , T = E
                        , D = v
                        , I = {}
                        , C = 0
                        , L = null;
                      e || (e = i.owner),
                      n.subscribable.call(_),
                      n.utils.setPrototypeOfOrExtend(_, n.dependentObservable.fn),
                      _.peek = b,
                      _.getDependenciesCount = function() {
                          return C
                      }
                      ,
                      _.hasWriteFunction = "function" == typeof S,
                      _.dispose = function() {
                          D()
                      }
                      ,
                      _.isActive = w;
                      var F = _.limit;
                      return _.limit = function(t) {
                          F.call(_, t),
                          _._evalRateLimited = function() {
                              _._rateLimitedBeforeChange(s),
                              a = !0,
                              _._rateLimitedChange(_)
                          }
                      }
                      ,
                      i.pure ? (p = !0,
                      d = !0,
                      _.beforeSubscriptionAdd = function(t) {
                          if (!c && d && "change" == t) {
                              if (d = !1,
                              a || m())
                                  I = null,
                                  C = 0,
                                  a = !0,
                                  g();
                              else {
                                  var e = [];
                                  n.utils.objectForEach(I, function(t, n) {
                                      e[n._order] = t
                                  }),
                                  n.utils.arrayForEach(e, function(t, e) {
                                      var n = I[t]
                                        , i = n._target.subscribe(y);
                                      i._order = e,
                                      i._version = n._version,
                                      I[t] = i
                                  })
                              }
                              c || x(s, "awake")
                          }
                      }
                      ,
                      _.afterSubscriptionRemove = function(t) {
                          c || "change" != t || _.hasSubscriptionsForEvent("change") || (n.utils.objectForEach(I, function(t, e) {
                              e.dispose && (I[t] = {
                                  _target: e._target,
                                  _order: e._order,
                                  _version: e._version
                              },
                              e.dispose())
                          }),
                          d = !0,
                          x(o, "asleep"))
                      }
                      ,
                      _._originalGetVersion = _.getVersion,
                      _.getVersion = function() {
                          return d && (a || m()) && g(),
                          _._originalGetVersion()
                      }
                      ) : i.deferEvaluation && (_.beforeSubscriptionAdd = function(t) {
                          "change" != t && "beforeChange" != t || b()
                      }
                      ),
                      n.exportProperty(_, "peek", _.peek),
                      n.exportProperty(_, "dispose", _.dispose),
                      n.exportProperty(_, "isActive", _.isActive),
                      n.exportProperty(_, "getDependenciesCount", _.getDependenciesCount),
                      M && (u = !0,
                      M.nodeType && (T = function() {
                          return !n.utils.domNodeIsAttachedToDocument(M) || E && E()
                      }
                      )),
                      d || i.deferEvaluation || g(),
                      M && w() && M.nodeType && (D = function() {
                          n.utils.domNodeDisposal.removeDisposeCallback(M, D),
                          v()
                      }
                      ,
                      n.utils.domNodeDisposal.addDisposeCallback(M, D)),
                      _
                  }
                  ,
                  n.isComputed = function(t) {
                      return n.hasPrototype(t, n.dependentObservable)
                  }
                  ;
                  var g, _ = n.observable.protoProperty;
                  n.dependentObservable[_] = n.observable,
                  n.dependentObservable.fn = {
                      equalityComparer: s
                  },
                  n.dependentObservable.fn[_] = n.dependentObservable,
                  n.utils.canSetPrototype && n.utils.setPrototypeOf(n.dependentObservable.fn, n.subscribable.fn),
                  n.exportSymbol("dependentObservable", n.dependentObservable),
                  n.exportSymbol("computed", n.dependentObservable),
                  n.exportSymbol("isComputed", n.isComputed),
                  n.pureComputed = function(t, e) {
                      return "function" == typeof t ? n.computed(t, e, {
                          pure: !0
                      }) : ((t = n.utils.extend({}, t)).pure = !0,
                      n.computed(t, e))
                  }
                  ,
                  n.exportSymbol("pureComputed", n.pureComputed),
                  function() {
                      function t() {
                          this.keys = [],
                          this.values = []
                      }
                      n.toJS = function(e) {
                          if (0 == arguments.length)
                              throw new Error("When calling ko.toJS, pass the object you want to convert.");
                          return function e(n, i, r) {
                              r = r || new t;
                              var s = !("object" != typeof (n = i(n)) || null === n || n === o || n instanceof Date || n instanceof String || n instanceof Number || n instanceof Boolean);
                              if (!s)
                                  return n;
                              var a = n instanceof Array ? [] : {};
                              return r.save(n, a),
                              function(t, e) {
                                  if (t instanceof Array) {
                                      for (var n = 0; n < t.length; n++)
                                          e(n);
                                      "function" == typeof t.toJSON && e("toJSON")
                                  } else
                                      for (var i in t)
                                          e(i)
                              }(n, function(t) {
                                  var s = i(n[t]);
                                  switch (typeof s) {
                                  case "boolean":
                                  case "number":
                                  case "string":
                                  case "function":
                                      a[t] = s;
                                      break;
                                  case "object":
                                  case "undefined":
                                      var l = r.get(s);
                                      a[t] = l !== o ? l : e(s, i, r)
                                  }
                              }),
                              a
                          }(e, function(t) {
                              for (var e = 0; n.isObservable(t) && e < 10; e++)
                                  t = t();
                              return t
                          })
                      }
                      ,
                      n.toJSON = function(t, e, i) {
                          var r = n.toJS(t);
                          return n.utils.stringifyJson(r, e, i)
                      }
                      ,
                      t.prototype = {
                          constructor: t,
                          save: function(t, e) {
                              var i = n.utils.arrayIndexOf(this.keys, t);
                              i >= 0 ? this.values[i] = e : (this.keys.push(t),
                              this.values.push(e))
                          },
                          get: function(t) {
                              var e = n.utils.arrayIndexOf(this.keys, t);
                              return e >= 0 ? this.values[e] : o
                          }
                      }
                  }(),
                  n.exportSymbol("toJS", n.toJS),
                  n.exportSymbol("toJSON", n.toJSON),
                  n.selectExtensions = {
                      readValue: function(t) {
                          switch (n.utils.tagNameLower(t)) {
                          case "option":
                              return !0 === t.__ko__hasDomDataOptionValue__ ? n.utils.domData.get(t, n.bindingHandlers.options.optionValueDomDataKey) : n.utils.ieVersion <= 7 ? t.getAttributeNode("value") && t.getAttributeNode("value").specified ? t.value : t.text : t.value;
                          case "select":
                              return t.selectedIndex >= 0 ? n.selectExtensions.readValue(t.options[t.selectedIndex]) : o;
                          default:
                              return t.value
                          }
                      },
                      writeValue: function(t, e, i) {
                          switch (n.utils.tagNameLower(t)) {
                          case "option":
                              switch (typeof e) {
                              case "string":
                                  n.utils.domData.set(t, n.bindingHandlers.options.optionValueDomDataKey, o),
                                  "__ko__hasDomDataOptionValue__"in t && delete t.__ko__hasDomDataOptionValue__,
                                  t.value = e;
                                  break;
                              default:
                                  n.utils.domData.set(t, n.bindingHandlers.options.optionValueDomDataKey, e),
                                  t.__ko__hasDomDataOptionValue__ = !0,
                                  t.value = "number" == typeof e ? e : ""
                              }
                              break;
                          case "select":
                              "" !== e && null !== e || (e = o);
                              for (var r, s = -1, a = 0, l = t.options.length; a < l; ++a)
                                  if ((r = n.selectExtensions.readValue(t.options[a])) == e || "" == r && e === o) {
                                      s = a;
                                      break
                                  }
                              (i || s >= 0 || e === o && t.size > 1) && (t.selectedIndex = s);
                              break;
                          default:
                              null !== e && e !== o || (e = ""),
                              t.value = e
                          }
                      }
                  },
                  n.exportSymbol("selectExtensions", n.selectExtensions),
                  n.exportSymbol("selectExtensions.readValue", n.selectExtensions.readValue),
                  n.exportSymbol("selectExtensions.writeValue", n.selectExtensions.writeValue),
                  n.expressionRewriting = function() {
                      var t = ["true", "false", "null", "undefined"]
                        , e = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i
                        , i = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g")
                        , r = /[\])"'A-Za-z0-9_$]+$/
                        , o = {
                          in: 1,
                          return: 1,
                          typeof: 1
                      };
                      function s(t) {
                          var e = n.utils.stringTrim(t);
                          123 === e.charCodeAt(0) && (e = e.slice(1, -1));
                          var s, a = [], l = e.match(i), u = [], c = 0;
                          if (l) {
                              l.push(",");
                              for (var h, p = 0; h = l[p]; ++p) {
                                  var d = h.charCodeAt(0);
                                  if (44 === d) {
                                      if (c <= 0) {
                                          a.push(s && u.length ? {
                                              key: s,
                                              value: u.join("")
                                          } : {
                                              unknown: s || u.join("")
                                          }),
                                          s = c = 0,
                                          u = [];
                                          continue
                                      }
                                  } else if (58 === d) {
                                      if (!c && !s && 1 === u.length) {
                                          s = u.pop();
                                          continue
                                      }
                                  } else if (47 === d && p && h.length > 1) {
                                      var f = l[p - 1].match(r);
                                      f && !o[f[0]] && ((l = (e = e.substr(e.indexOf(h) + 1)).match(i)).push(","),
                                      p = -1,
                                      h = "/")
                                  } else
                                      40 === d || 123 === d || 91 === d ? ++c : 41 === d || 125 === d || 93 === d ? --c : s || u.length || 34 !== d && 39 !== d || (h = h.slice(1, -1));
                                  u.push(h)
                              }
                          }
                          return a
                      }
                      var a = {};
                      return {
                          bindingRewriteValidators: [],
                          twoWayBindings: a,
                          parseObjectLiteral: s,
                          preProcessBindings: function(i, r) {
                              function o(i, r) {
                                  var s, p;
                                  if (!h) {
                                      if ((p = n.getBindingHandler(i)) && p.preprocess && !(r = p.preprocess(r, i, o)))
                                          return;
                                      a[i] && (s = function(i) {
                                          if (n.utils.arrayIndexOf(t, i) >= 0)
                                              return !1;
                                          var r = i.match(e);
                                          return null !== r && (r[1] ? "Object(" + r[1] + ")" + r[2] : i)
                                      }(r)) && u.push("'" + i + "':function(_z){" + s + "=_z}")
                                  }
                                  c && (r = "function(){return " + r + " }"),
                                  l.push("'" + i + "':" + r)
                              }
                              var l = []
                                , u = []
                                , c = (r = r || {}).valueAccessors
                                , h = r.bindingParams
                                , p = "string" == typeof i ? s(i) : i;
                              return n.utils.arrayForEach(p, function(t) {
                                  o(t.key || t.unknown, t.value)
                              }),
                              u.length && o("_ko_property_writers", "{" + u.join(",") + " }"),
                              l.join(",")
                          },
                          keyValueArrayContainsKey: function(t, e) {
                              for (var n = 0; n < t.length; n++)
                                  if (t[n].key == e)
                                      return !0;
                              return !1
                          },
                          writeValueToProperty: function(t, e, i, r, o) {
                              if (t && n.isObservable(t))
                                  !n.isWriteableObservable(t) || o && t.peek() === r || t(r);
                              else {
                                  var s = e.get("_ko_property_writers");
                                  s && s[i] && s[i](r)
                              }
                          }
                      }
                  }(),
                  n.exportSymbol("expressionRewriting", n.expressionRewriting),
                  n.exportSymbol("expressionRewriting.bindingRewriteValidators", n.expressionRewriting.bindingRewriteValidators),
                  n.exportSymbol("expressionRewriting.parseObjectLiteral", n.expressionRewriting.parseObjectLiteral),
                  n.exportSymbol("expressionRewriting.preProcessBindings", n.expressionRewriting.preProcessBindings),
                  n.exportSymbol("expressionRewriting._twoWayBindings", n.expressionRewriting.twoWayBindings),
                  n.exportSymbol("jsonExpressionRewriting", n.expressionRewriting),
                  n.exportSymbol("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", n.expressionRewriting.preProcessBindings),
                  function() {
                      var t = l && "\x3c!--test--\x3e" === l.createComment("test").text
                        , e = t ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/
                        , i = t ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/
                        , r = {
                          ul: !0,
                          ol: !0
                      };
                      function o(n) {
                          return 8 == n.nodeType && e.test(t ? n.text : n.nodeValue)
                      }
                      function s(e) {
                          return 8 == e.nodeType && i.test(t ? e.text : e.nodeValue)
                      }
                      function a(t, e) {
                          for (var n = t, i = 1, r = []; n = n.nextSibling; ) {
                              if (s(n) && 0 == --i)
                                  return r;
                              r.push(n),
                              o(n) && i++
                          }
                          if (!e)
                              throw new Error("Cannot find closing comment tag to match: " + t.nodeValue);
                          return null
                      }
                      function u(t, e) {
                          var n = a(t, e);
                          return n ? n.length > 0 ? n[n.length - 1].nextSibling : t.nextSibling : null
                      }
                      function c(t) {
                          var e = t.firstChild
                            , n = null;
                          if (e)
                              do {
                                  if (n)
                                      n.push(e);
                                  else if (o(e)) {
                                      var i = u(e, !0);
                                      i ? e = i : n = [e]
                                  } else
                                      s(e) && (n = [e])
                              } while (e = e.nextSibling);return n
                      }
                      n.virtualElements = {
                          allowedBindings: {},
                          childNodes: function(t) {
                              return o(t) ? a(t) : t.childNodes
                          },
                          emptyNode: function(t) {
                              if (o(t))
                                  for (var e = n.virtualElements.childNodes(t), i = 0, r = e.length; i < r; i++)
                                      n.removeNode(e[i]);
                              else
                                  n.utils.emptyDomNode(t)
                          },
                          setDomNodeChildren: function(t, e) {
                              if (o(t)) {
                                  n.virtualElements.emptyNode(t);
                                  for (var i = t.nextSibling, r = 0, s = e.length; r < s; r++)
                                      i.parentNode.insertBefore(e[r], i)
                              } else
                                  n.utils.setDomNodeChildren(t, e)
                          },
                          prepend: function(t, e) {
                              o(t) ? t.parentNode.insertBefore(e, t.nextSibling) : t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
                          },
                          insertAfter: function(t, e, i) {
                              i ? o(t) ? t.parentNode.insertBefore(e, i.nextSibling) : i.nextSibling ? t.insertBefore(e, i.nextSibling) : t.appendChild(e) : n.virtualElements.prepend(t, e)
                          },
                          firstChild: function(t) {
                              return o(t) ? !t.nextSibling || s(t.nextSibling) ? null : t.nextSibling : t.firstChild
                          },
                          nextSibling: function(t) {
                              return o(t) && (t = u(t)),
                              t.nextSibling && s(t.nextSibling) ? null : t.nextSibling
                          },
                          hasBindingValue: o,
                          virtualNodeBindingValue: function(n) {
                              var i = (t ? n.text : n.nodeValue).match(e);
                              return i ? i[1] : null
                          },
                          normaliseVirtualElementDomStructure: function(t) {
                              if (r[n.utils.tagNameLower(t)]) {
                                  var e = t.firstChild;
                                  if (e)
                                      do {
                                          if (1 === e.nodeType) {
                                              var i = c(e);
                                              if (i)
                                                  for (var o = e.nextSibling, s = 0; s < i.length; s++)
                                                      o ? t.insertBefore(i[s], o) : t.appendChild(i[s])
                                          }
                                      } while (e = e.nextSibling)
                              }
                          }
                      }
                  }(),
                  n.exportSymbol("virtualElements", n.virtualElements),
                  n.exportSymbol("virtualElements.allowedBindings", n.virtualElements.allowedBindings),
                  n.exportSymbol("virtualElements.emptyNode", n.virtualElements.emptyNode),
                  n.exportSymbol("virtualElements.insertAfter", n.virtualElements.insertAfter),
                  n.exportSymbol("virtualElements.prepend", n.virtualElements.prepend),
                  n.exportSymbol("virtualElements.setDomNodeChildren", n.virtualElements.setDomNodeChildren),
                  n.bindingProvider = function() {
                      this.bindingCache = {}
                  }
                  ,
                  n.utils.extend(n.bindingProvider.prototype, {
                      nodeHasBindings: function(t) {
                          switch (t.nodeType) {
                          case 1:
                              return null != t.getAttribute("data-bind") || n.components.getComponentNameForNode(t);
                          case 8:
                              return n.virtualElements.hasBindingValue(t);
                          default:
                              return !1
                          }
                      },
                      getBindings: function(t, e) {
                          var i = this.getBindingsString(t, e)
                            , r = i ? this.parseBindingsString(i, e, t) : null;
                          return n.components.addBindingsForCustomElement(r, t, e, !1)
                      },
                      getBindingAccessors: function(t, e) {
                          var i = this.getBindingsString(t, e)
                            , r = i ? this.parseBindingsString(i, e, t, {
                              valueAccessors: !0
                          }) : null;
                          return n.components.addBindingsForCustomElement(r, t, e, !0)
                      },
                      getBindingsString: function(t, e) {
                          switch (t.nodeType) {
                          case 1:
                              return t.getAttribute("data-bind");
                          case 8:
                              return n.virtualElements.virtualNodeBindingValue(t);
                          default:
                              return null
                          }
                      },
                      parseBindingsString: function(t, e, i, r) {
                          try {
                              return function(t, e, i) {
                                  var r = t + (i && i.valueAccessors || "");
                                  return e[r] || (e[r] = function(t, e) {
                                      var i = n.expressionRewriting.preProcessBindings(t, e);
                                      return new Function("$context","$element","with($context){with($data||{}){return{" + i + "}}}")
                                  }(t, i))
                              }(t, this.bindingCache, r)(e, i)
                          } catch (e) {
                              throw e.message = "Unable to parse bindings.\nBindings value: " + t + "\nMessage: " + e.message,
                              e
                          }
                      }
                  }),
                  n.bindingProvider.instance = new n.bindingProvider,
                  n.exportSymbol("bindingProvider", n.bindingProvider),
                  function() {
                      n.bindingHandlers = {};
                      var t = {
                          script: !0,
                          textarea: !0
                      };
                      function e(t) {
                          return function() {
                              return t
                          }
                      }
                      function i(t) {
                          return t()
                      }
                      function r(t) {
                          return n.utils.objectMap(n.dependencyDetection.ignore(t), function(e, n) {
                              return function() {
                                  return t()[n]
                              }
                          })
                      }
                      function s(t, e) {
                          return r(this.getBindings.bind(this, t, e))
                      }
                      function l(t, e, i) {
                          var r, o = n.virtualElements.firstChild(e), s = n.bindingProvider.instance, a = s.preprocessNode;
                          if (a) {
                              for (; r = o; )
                                  o = n.virtualElements.nextSibling(r),
                                  a.call(s, r);
                              o = n.virtualElements.firstChild(e)
                          }
                          for (; r = o; )
                              o = n.virtualElements.nextSibling(r),
                              u(t, r, i)
                      }
                      function u(e, i, r) {
                          var o = !0
                            , s = 1 === i.nodeType;
                          s && n.virtualElements.normaliseVirtualElementDomStructure(i),
                          (s && r || n.bindingProvider.instance.nodeHasBindings(i)) && (o = p(i, null, e, r).shouldBindDescendants),
                          o && !t[n.utils.tagNameLower(i)] && l(e, i, !s)
                      }
                      n.getBindingHandler = function(t) {
                          return n.bindingHandlers[t]
                      }
                      ,
                      n.bindingContext = function(t, e, i, r) {
                          var s, a = this, l = "function" == typeof t && !n.isObservable(t), u = n.dependentObservable(function() {
                              var o = l ? t() : t
                                , s = n.utils.unwrapObservable(o);
                              return e ? (e._subscribable && e._subscribable(),
                              n.utils.extend(a, e),
                              u && (a._subscribable = u)) : (a.$parents = [],
                              a.$root = s,
                              a.ko = n),
                              a.$rawData = o,
                              a.$data = s,
                              i && (a[i] = s),
                              r && r(a, e, s),
                              a.$data
                          }, null, {
                              disposeWhen: function() {
                                  return s && !n.utils.anyDomNodeIsAttachedToDocument(s)
                              },
                              disposeWhenNodeIsRemoved: !0
                          });
                          u.isActive() && (a._subscribable = u,
                          u.equalityComparer = null,
                          s = [],
                          u._addNode = function(t) {
                              s.push(t),
                              n.utils.domNodeDisposal.addDisposeCallback(t, function(t) {
                                  n.utils.arrayRemoveItem(s, t),
                                  s.length || (u.dispose(),
                                  a._subscribable = u = o)
                              })
                          }
                          )
                      }
                      ,
                      n.bindingContext.prototype.createChildContext = function(t, e, i) {
                          return new n.bindingContext(t,this,e,function(t, e) {
                              t.$parentContext = e,
                              t.$parent = e.$data,
                              t.$parents = (e.$parents || []).slice(0),
                              t.$parents.unshift(t.$parent),
                              i && i(t)
                          }
                          )
                      }
                      ,
                      n.bindingContext.prototype.extend = function(t) {
                          return new n.bindingContext(this._subscribable || this.$data,this,null,function(e, i) {
                              e.$rawData = i.$rawData,
                              n.utils.extend(e, "function" == typeof t ? t() : t)
                          }
                          )
                      }
                      ;
                      var h = n.utils.domData.nextKey();
                      function p(t, e, r, a) {
                          var l, u, c = n.utils.domData.get(t, h);
                          if (!e) {
                              if (c)
                                  throw Error("You cannot apply bindings multiple times to the same element.");
                              n.utils.domData.set(t, h, !0)
                          }
                          if (!c && a && n.storedBindingContextForNode(t, r),
                          e && "function" != typeof e)
                              l = e;
                          else {
                              var p = n.bindingProvider.instance
                                , d = p.getBindingAccessors || s
                                , f = n.dependentObservable(function() {
                                  return (l = e ? e(r, t) : d.call(p, t, r)) && r._subscribable && r._subscribable(),
                                  l
                              }, null, {
                                  disposeWhenNodeIsRemoved: t
                              });
                              l && f.isActive() || (f = null)
                          }
                          if (l) {
                              var m = f ? function(t) {
                                  return function() {
                                      return i(f()[t])
                                  }
                              }
                              : function(t) {
                                  return l[t]
                              }
                              ;
                              function v() {
                                  return n.utils.objectMap(f ? f() : l, i)
                              }
                              v.get = function(t) {
                                  return l[t] && i(m(t))
                              }
                              ,
                              v.has = function(t) {
                                  return t in l
                              }
                              ;
                              var y = function(t) {
                                  var e = []
                                    , i = {}
                                    , r = [];
                                  return n.utils.objectForEach(t, function o(s) {
                                      if (!i[s]) {
                                          var a = n.getBindingHandler(s);
                                          a && (a.after && (r.push(s),
                                          n.utils.arrayForEach(a.after, function(e) {
                                              if (t[e]) {
                                                  if (-1 !== n.utils.arrayIndexOf(r, e))
                                                      throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + r.join(", "));
                                                  o(e)
                                              }
                                          }),
                                          r.length--),
                                          e.push({
                                              key: s,
                                              handler: a
                                          })),
                                          i[s] = !0
                                      }
                                  }),
                                  e
                              }(l);
                              n.utils.arrayForEach(y, function(e) {
                                  var i = e.handler.init
                                    , s = e.handler.update
                                    , a = e.key;
                                  8 === t.nodeType && function(t) {
                                      if (!n.virtualElements.allowedBindings[t])
                                          throw new Error("The binding '" + t + "' cannot be used with virtual elements")
                                  }(a);
                                  try {
                                      "function" == typeof i && n.dependencyDetection.ignore(function() {
                                          var e = i(t, m(a), v, r.$data, r);
                                          if (e && e.controlsDescendantBindings) {
                                              if (u !== o)
                                                  throw new Error("Multiple bindings (" + u + " and " + a + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                              u = a
                                          }
                                      }),
                                      "function" == typeof s && n.dependentObservable(function() {
                                          s(t, m(a), v, r.$data, r)
                                      }, null, {
                                          disposeWhenNodeIsRemoved: t
                                      })
                                  } catch (t) {
                                      throw t.message = 'Unable to process binding "' + a + ": " + l[a] + '"\nMessage: ' + t.message,
                                      t
                                  }
                              })
                          }
                          return {
                              shouldBindDescendants: u === o
                          }
                      }
                      var d = n.utils.domData.nextKey();
                      function f(t) {
                          return t && t instanceof n.bindingContext ? t : new n.bindingContext(t)
                      }
                      n.storedBindingContextForNode = function(t, e) {
                          if (2 != arguments.length)
                              return n.utils.domData.get(t, d);
                          n.utils.domData.set(t, d, e),
                          e._subscribable && e._subscribable._addNode(t)
                      }
                      ,
                      n.applyBindingAccessorsToNode = function(t, e, i) {
                          return 1 === t.nodeType && n.virtualElements.normaliseVirtualElementDomStructure(t),
                          p(t, e, f(i), !0)
                      }
                      ,
                      n.applyBindingsToNode = function(t, i, o) {
                          var s = f(o);
                          return n.applyBindingAccessorsToNode(t, function(t, i, o) {
                              return "function" == typeof t ? r(t.bind(null, i, o)) : n.utils.objectMap(t, e)
                          }(i, s, t), s)
                      }
                      ,
                      n.applyBindingsToDescendants = function(t, e) {
                          1 !== e.nodeType && 8 !== e.nodeType || l(f(t), e, !0)
                      }
                      ,
                      n.applyBindings = function(t, e) {
                          if (!c && a.jQuery && (c = a.jQuery),
                          e && 1 !== e.nodeType && 8 !== e.nodeType)
                              throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                          e = e || a.document.body,
                          u(f(t), e, !0)
                      }
                      ,
                      n.contextFor = function(t) {
                          switch (t.nodeType) {
                          case 1:
                          case 8:
                              var e = n.storedBindingContextForNode(t);
                              if (e)
                                  return e;
                              if (t.parentNode)
                                  return n.contextFor(t.parentNode)
                          }
                          return o
                      }
                      ,
                      n.dataFor = function(t) {
                          var e = n.contextFor(t);
                          return e ? e.$data : o
                      }
                      ,
                      n.exportSymbol("bindingHandlers", n.bindingHandlers),
                      n.exportSymbol("applyBindings", n.applyBindings),
                      n.exportSymbol("applyBindingsToDescendants", n.applyBindingsToDescendants),
                      n.exportSymbol("applyBindingAccessorsToNode", n.applyBindingAccessorsToNode),
                      n.exportSymbol("applyBindingsToNode", n.applyBindingsToNode),
                      n.exportSymbol("contextFor", n.contextFor),
                      n.exportSymbol("dataFor", n.dataFor)
                  }(),
                  function(t) {
                      var e = {}
                        , i = {};
                      function r(e, n) {
                          return e.hasOwnProperty(n) ? e[n] : t
                      }
                      function o(e, i, r, s) {
                          s || (s = n.components.loaders.slice(0));
                          var a = s.shift();
                          if (a) {
                              var l = a[e];
                              if (l) {
                                  var u = !1;
                                  if (l.apply(a, i.concat(function(t) {
                                      u ? r(null) : null !== t ? r(t) : o(e, i, r, s)
                                  })) !== t && (u = !0,
                                  !a.suppressLoaderExceptions))
                                      throw new Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                              } else
                                  o(e, i, r, s)
                          } else
                              r(null)
                      }
                      n.components = {
                          get: function(t, s) {
                              var a = r(i, t);
                              a ? a.isSynchronousComponent ? n.dependencyDetection.ignore(function() {
                                  s(a.definition)
                              }) : setTimeout(function() {
                                  s(a.definition)
                              }, 0) : function(t, s) {
                                  var a, l = r(e, t);
                                  l ? l.subscribe(s) : ((l = e[t] = new n.subscribable).subscribe(s),
                                  function(t, e) {
                                      o("getConfig", [t], function(n) {
                                          n ? o("loadComponent", [t, n], function(t) {
                                              e(t, n)
                                          }) : e(null, null)
                                      })
                                  }(t, function(n, r) {
                                      var o = !(!r || !r.synchronous);
                                      i[t] = {
                                          definition: n,
                                          isSynchronousComponent: o
                                      },
                                      delete e[t],
                                      a || o ? l.notifySubscribers(n) : setTimeout(function() {
                                          l.notifySubscribers(n)
                                      }, 0)
                                  }),
                                  a = !0)
                              }(t, s)
                          },
                          clearCachedDefinition: function(t) {
                              delete i[t]
                          },
                          _getFirstResultFromLoaders: o
                      },
                      n.components.loaders = [],
                      n.exportSymbol("components", n.components),
                      n.exportSymbol("components.get", n.components.get),
                      n.exportSymbol("components.clearCachedDefinition", n.components.clearCachedDefinition)
                  }(),
                  function(t) {
                      var i = {};
                      n.components.register = function(t, e) {
                          if (!e)
                              throw new Error("Invalid configuration for " + t);
                          if (n.components.isRegistered(t))
                              throw new Error("Component " + t + " is already registered");
                          i[t] = e
                      }
                      ,
                      n.components.isRegistered = function(t) {
                          return t in i
                      }
                      ,
                      n.components.unregister = function(t) {
                          delete i[t],
                          n.components.clearCachedDefinition(t)
                      }
                      ,
                      n.components.defaultLoader = {
                          getConfig: function(t, e) {
                              e(i.hasOwnProperty(t) ? i[t] : null)
                          },
                          loadComponent: function(t, e, i) {
                              var o = c(t);
                              u(o, e, function(e) {
                                  !function(t, e, i, o) {
                                      var s = {}
                                        , a = 2
                                        , l = function() {
                                          0 == --a && o(s)
                                      }
                                        , c = i.template
                                        , h = i.viewModel;
                                      c ? u(e, c, function(e) {
                                          n.components._getFirstResultFromLoaders("loadTemplate", [t, e], function(t) {
                                              s.template = t,
                                              l()
                                          })
                                      }) : l(),
                                      h ? u(e, h, function(e) {
                                          n.components._getFirstResultFromLoaders("loadViewModel", [t, e], function(t) {
                                              s[r] = t,
                                              l()
                                          })
                                      }) : l()
                                  }(t, o, e, i)
                              })
                          },
                          loadTemplate: function(t, e, i) {
                              !function(t, e, i) {
                                  if ("string" == typeof e)
                                      i(n.utils.parseHtmlFragment(e));
                                  else if (e instanceof Array)
                                      i(e);
                                  else if (s(e))
                                      i(n.utils.makeArray(e.childNodes));
                                  else if (e.element) {
                                      var r = e.element;
                                      if (c = r,
                                      a.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType)
                                          i(o(r));
                                      else if ("string" == typeof r) {
                                          var u = l.getElementById(r);
                                          u ? i(o(u)) : t("Cannot find element with ID " + r)
                                      } else
                                          t("Unknown element type: " + r)
                                  } else
                                      t("Unknown template value: " + e);
                                  var c
                              }(c(t), e, i)
                          },
                          loadViewModel: function(t, e, n) {
                              !function t(e, n, i) {
                                  if ("function" == typeof n)
                                      i(function(t) {
                                          return new n(t)
                                      });
                                  else if ("function" == typeof n[r])
                                      i(n[r]);
                                  else if ("instance"in n) {
                                      var o = n.instance;
                                      i(function(t, e) {
                                          return o
                                      })
                                  } else
                                      "viewModel"in n ? t(e, n.viewModel, i) : e("Unknown viewModel value: " + n)
                              }(c(t), e, n)
                          }
                      };
                      var r = "createViewModel";
                      function o(t) {
                          switch (n.utils.tagNameLower(t)) {
                          case "script":
                              return n.utils.parseHtmlFragment(t.text);
                          case "textarea":
                              return n.utils.parseHtmlFragment(t.value);
                          case "template":
                              if (s(t.content))
                                  return n.utils.cloneNodes(t.content.childNodes)
                          }
                          return n.utils.cloneNodes(t.childNodes)
                      }
                      function s(t) {
                          return a.DocumentFragment ? t instanceof DocumentFragment : t && 11 === t.nodeType
                      }
                      function u(t, n, i) {
                          "string" == typeof n.require ? e || a.require ? (e || a.require)([n.require], i) : t("Uses require, but no AMD loader is present") : i(n)
                      }
                      function c(t) {
                          return function(e) {
                              throw new Error("Component '" + t + "': " + e)
                          }
                      }
                      n.exportSymbol("components.register", n.components.register),
                      n.exportSymbol("components.isRegistered", n.components.isRegistered),
                      n.exportSymbol("components.unregister", n.components.unregister),
                      n.exportSymbol("components.defaultLoader", n.components.defaultLoader),
                      n.components.loaders.push(n.components.defaultLoader),
                      n.components._allRegisteredComponents = i
                  }(),
                  function(t) {
                      n.components.getComponentNameForNode = function(t) {
                          var e = n.utils.tagNameLower(t);
                          return n.components.isRegistered(e) && e
                      }
                      ,
                      n.components.addBindingsForCustomElement = function(t, e, i, o) {
                          if (1 === e.nodeType) {
                              var s = n.components.getComponentNameForNode(e);
                              if (s) {
                                  if ((t = t || {}).component)
                                      throw new Error('Cannot use the "component" binding on a custom element matching a component');
                                  var a = {
                                      name: s,
                                      params: r(e, i)
                                  };
                                  t.component = o ? function() {
                                      return a
                                  }
                                  : a
                              }
                          }
                          return t
                      }
                      ;
                      var e, i = new n.bindingProvider;
                      function r(t, e) {
                          var r = t.getAttribute("params");
                          if (r) {
                              var o = i.parseBindingsString(r, e, t, {
                                  valueAccessors: !0,
                                  bindingParams: !0
                              })
                                , s = n.utils.objectMap(o, function(e, i) {
                                  return n.computed(e, null, {
                                      disposeWhenNodeIsRemoved: t
                                  })
                              })
                                , a = n.utils.objectMap(s, function(e, i) {
                                  var r = e.peek();
                                  return e.isActive() ? n.computed({
                                      read: function() {
                                          return n.utils.unwrapObservable(e())
                                      },
                                      write: n.isWriteableObservable(r) && function(t) {
                                          e()(t)
                                      }
                                      ,
                                      disposeWhenNodeIsRemoved: t
                                  }) : r
                              });
                              return a.hasOwnProperty("$raw") || (a.$raw = s),
                              a
                          }
                          return {
                              $raw: {}
                          }
                      }
                      n.utils.ieVersion < 9 && (n.components.register = (e = n.components.register,
                      function(t) {
                          return l.createElement(t),
                          e.apply(this, arguments)
                      }
                      ),
                      l.createDocumentFragment = function(t) {
                          return function() {
                              var e = t()
                                , i = n.components._allRegisteredComponents;
                              for (var r in i)
                                  i.hasOwnProperty(r) && e.createElement(r);
                              return e
                          }
                      }(l.createDocumentFragment))
                  }(),
                  g = 0,
                  n.bindingHandlers.component = {
                      init: function(t, e, i, r, o) {
                          var s, a, l = function() {
                              var t = s && s.dispose;
                              "function" == typeof t && t.call(s),
                              a = null
                          }, u = n.utils.makeArray(n.virtualElements.childNodes(t));
                          return n.utils.domNodeDisposal.addDisposeCallback(t, l),
                          n.computed(function() {
                              var i, r, c = n.utils.unwrapObservable(e());
                              if ("string" == typeof c ? i = c : (i = n.utils.unwrapObservable(c.name),
                              r = n.utils.unwrapObservable(c.params)),
                              !i)
                                  throw new Error("No component name specified");
                              var h = a = ++g;
                              n.components.get(i, function(e) {
                                  if (a === h) {
                                      if (l(),
                                      !e)
                                          throw new Error("Unknown component '" + i + "'");
                                      !function(t, e, i) {
                                          var r = e.template;
                                          if (!r)
                                              throw new Error("Component '" + t + "' has no template");
                                          var o = n.utils.cloneNodes(r);
                                          n.virtualElements.setDomNodeChildren(i, o)
                                      }(i, e, t);
                                      var c = function(t, e, n, i) {
                                          var r = t.createViewModel;
                                          return r ? r.call(t, i, {
                                              element: e,
                                              templateNodes: n
                                          }) : i
                                      }(e, t, u, r)
                                        , p = o.createChildContext(c, void 0, function(t) {
                                          t.$component = c,
                                          t.$componentTemplateNodes = u
                                      });
                                      s = c,
                                      n.applyBindingsToDescendants(p, t)
                                  }
                              })
                          }, null, {
                              disposeWhenNodeIsRemoved: t
                          }),
                          {
                              controlsDescendantBindings: !0
                          }
                      }
                  },
                  n.virtualElements.allowedBindings.component = !0;
                  var b = {
                      class: "className",
                      for: "htmlFor"
                  };
                  function w(t, e, i, r) {
                      n.bindingHandlers[t] = {
                          init: function(t, o, s, a, l) {
                              var u, c;
                              return n.computed(function() {
                                  var s = n.utils.unwrapObservable(o())
                                    , a = !i != !s
                                    , h = !c;
                                  (h || e || a !== u) && (h && n.computedContext.getDependenciesCount() && (c = n.utils.cloneNodes(n.virtualElements.childNodes(t), !0)),
                                  a ? (h || n.virtualElements.setDomNodeChildren(t, n.utils.cloneNodes(c)),
                                  n.applyBindingsToDescendants(r ? r(l, s) : l, t)) : n.virtualElements.emptyNode(t),
                                  u = a)
                              }, null, {
                                  disposeWhenNodeIsRemoved: t
                              }),
                              {
                                  controlsDescendantBindings: !0
                              }
                          }
                      },
                      n.expressionRewriting.bindingRewriteValidators[t] = !1,
                      n.virtualElements.allowedBindings[t] = !0
                  }
                  n.bindingHandlers.attr = {
                      update: function(t, e, i) {
                          var r = n.utils.unwrapObservable(e()) || {};
                          n.utils.objectForEach(r, function(e, i) {
                              var r = !1 === (i = n.utils.unwrapObservable(i)) || null === i || i === o;
                              r && t.removeAttribute(e),
                              n.utils.ieVersion <= 8 && e in b ? (e = b[e],
                              r ? t.removeAttribute(e) : t[e] = i) : r || t.setAttribute(e, i.toString()),
                              "name" === e && n.utils.setElementName(t, r ? "" : i.toString())
                          })
                      }
                  },
                  n.bindingHandlers.checked = {
                      after: ["value", "attr"],
                      init: function(t, e, i) {
                          var r = n.pureComputed(function() {
                              return i.has("checkedValue") ? n.utils.unwrapObservable(i.get("checkedValue")) : i.has("value") ? n.utils.unwrapObservable(i.get("value")) : t.value
                          });
                          function s() {
                              var o = t.checked
                                , s = h ? r() : o;
                              if (!n.computedContext.isInitial() && (!l || o)) {
                                  var a = n.dependencyDetection.ignore(e);
                                  u ? c !== s ? (o && (n.utils.addOrRemoveItem(a, s, !0),
                                  n.utils.addOrRemoveItem(a, c, !1)),
                                  c = s) : n.utils.addOrRemoveItem(a, s, o) : n.expressionRewriting.writeValueToProperty(a, i, "checked", s, !0)
                              }
                          }
                          var a = "checkbox" == t.type
                            , l = "radio" == t.type;
                          if (a || l) {
                              var u = a && n.utils.unwrapObservable(e())instanceof Array
                                , c = u ? r() : o
                                , h = l || u;
                              l && !t.name && n.bindingHandlers.uniqueName.init(t, function() {
                                  return !0
                              }),
                              n.computed(s, null, {
                                  disposeWhenNodeIsRemoved: t
                              }),
                              n.utils.registerEventHandler(t, "click", s),
                              n.computed(function() {
                                  var i = n.utils.unwrapObservable(e());
                                  t.checked = u ? n.utils.arrayIndexOf(i, r()) >= 0 : a ? i : r() === i
                              }, null, {
                                  disposeWhenNodeIsRemoved: t
                              })
                          }
                      }
                  },
                  n.expressionRewriting.twoWayBindings.checked = !0,
                  n.bindingHandlers.checkedValue = {
                      update: function(t, e) {
                          t.value = n.utils.unwrapObservable(e())
                      }
                  },
                  n.bindingHandlers.css = {
                      update: function(t, e) {
                          var i = n.utils.unwrapObservable(e());
                          null !== i && "object" == typeof i ? n.utils.objectForEach(i, function(e, i) {
                              i = n.utils.unwrapObservable(i),
                              n.utils.toggleDomNodeCssClass(t, e, i)
                          }) : (i = String(i || ""),
                          n.utils.toggleDomNodeCssClass(t, t.__ko__cssValue, !1),
                          t.__ko__cssValue = i,
                          n.utils.toggleDomNodeCssClass(t, i, !0))
                      }
                  },
                  n.bindingHandlers.enable = {
                      update: function(t, e) {
                          var i = n.utils.unwrapObservable(e());
                          i && t.disabled ? t.removeAttribute("disabled") : i || t.disabled || (t.disabled = !0)
                      }
                  },
                  n.bindingHandlers.disable = {
                      update: function(t, e) {
                          n.bindingHandlers.enable.update(t, function() {
                              return !n.utils.unwrapObservable(e())
                          })
                      }
                  },
                  n.bindingHandlers.event = {
                      init: function(t, e, i, r, o) {
                          var s = e() || {};
                          n.utils.objectForEach(s, function(s) {
                              "string" == typeof s && n.utils.registerEventHandler(t, s, function(t) {
                                  var a, l = e()[s];
                                  if (l) {
                                      try {
                                          var u = n.utils.makeArray(arguments);
                                          r = o.$data,
                                          u.unshift(r),
                                          a = l.apply(r, u)
                                      } finally {
                                          !0 !== a && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                                      }
                                      !1 !== i.get(s + "Bubble") || (t.cancelBubble = !0,
                                      t.stopPropagation && t.stopPropagation())
                                  }
                              })
                          })
                      }
                  },
                  n.bindingHandlers.foreach = {
                      makeTemplateValueAccessor: function(t) {
                          return function() {
                              var e = t()
                                , i = n.utils.peekObservable(e);
                              return i && "number" != typeof i.length ? (n.utils.unwrapObservable(e),
                              {
                                  foreach: i.data,
                                  as: i.as,
                                  includeDestroyed: i.includeDestroyed,
                                  afterAdd: i.afterAdd,
                                  beforeRemove: i.beforeRemove,
                                  afterRender: i.afterRender,
                                  beforeMove: i.beforeMove,
                                  afterMove: i.afterMove,
                                  templateEngine: n.nativeTemplateEngine.instance
                              }) : {
                                  foreach: e,
                                  templateEngine: n.nativeTemplateEngine.instance
                              }
                          }
                      },
                      init: function(t, e, i, r, o) {
                          return n.bindingHandlers.template.init(t, n.bindingHandlers.foreach.makeTemplateValueAccessor(e))
                      },
                      update: function(t, e, i, r, o) {
                          return n.bindingHandlers.template.update(t, n.bindingHandlers.foreach.makeTemplateValueAccessor(e), i, r, o)
                      }
                  },
                  n.expressionRewriting.bindingRewriteValidators.foreach = !1,
                  n.virtualElements.allowedBindings.foreach = !0,
                  n.bindingHandlers.hasfocus = {
                      init: function(t, e, i) {
                          var r = function(r) {
                              t.__ko_hasfocusUpdating = !0;
                              var o = t.ownerDocument;
                              if ("activeElement"in o) {
                                  var s;
                                  try {
                                      s = o.activeElement
                                  } catch (t) {
                                      s = o.body
                                  }
                                  r = s === t
                              }
                              var a = e();
                              n.expressionRewriting.writeValueToProperty(a, i, "hasfocus", r, !0),
                              t.__ko_hasfocusLastValue = r,
                              t.__ko_hasfocusUpdating = !1
                          }
                            , o = r.bind(null, !0)
                            , s = r.bind(null, !1);
                          n.utils.registerEventHandler(t, "focus", o),
                          n.utils.registerEventHandler(t, "focusin", o),
                          n.utils.registerEventHandler(t, "blur", s),
                          n.utils.registerEventHandler(t, "focusout", s)
                      },
                      update: function(t, e) {
                          var i = !!n.utils.unwrapObservable(e());
                          t.__ko_hasfocusUpdating || t.__ko_hasfocusLastValue === i || (i ? t.focus() : t.blur(),
                          n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, i ? "focusin" : "focusout"]))
                      }
                  },
                  n.expressionRewriting.twoWayBindings.hasfocus = !0,
                  n.bindingHandlers.hasFocus = n.bindingHandlers.hasfocus,
                  n.expressionRewriting.twoWayBindings.hasFocus = !0,
                  n.bindingHandlers.html = {
                      init: function() {
                          return {
                              controlsDescendantBindings: !0
                          }
                      },
                      update: function(t, e) {
                          n.utils.setHtml(t, e())
                      }
                  },
                  w("if"),
                  w("ifnot", !1, !0),
                  w("with", !0, !1, function(t, e) {
                      return t.createChildContext(e)
                  });
                  var x, S = {};
                  n.bindingHandlers.options = {
                      init: function(t) {
                          if ("select" !== n.utils.tagNameLower(t))
                              throw new Error("options binding applies only to SELECT elements");
                          for (; t.length > 0; )
                              t.remove(0);
                          return {
                              controlsDescendantBindings: !0
                          }
                      },
                      update: function(t, e, i) {
                          function r() {
                              return n.utils.arrayFilter(t.options, function(t) {
                                  return t.selected
                              })
                          }
                          var s, a, l = 0 == t.length, u = t.multiple, c = !l && u ? t.scrollTop : null, h = n.utils.unwrapObservable(e()), p = i.get("valueAllowUnset") && i.has("value"), d = i.get("optionsIncludeDestroyed"), f = {}, m = [];
                          function v(t, e, n) {
                              var i = typeof e;
                              return "function" == i ? e(t) : "string" == i ? t[e] : n
                          }
                          p || (u ? m = n.utils.arrayMap(r(), n.selectExtensions.readValue) : t.selectedIndex >= 0 && m.push(n.selectExtensions.readValue(t.options[t.selectedIndex]))),
                          h && (void 0 === h.length && (h = [h]),
                          a = n.utils.arrayFilter(h, function(t) {
                              return d || t === o || null === t || !n.utils.unwrapObservable(t._destroy)
                          }),
                          i.has("optionsCaption") && null !== (s = n.utils.unwrapObservable(i.get("optionsCaption"))) && s !== o && a.unshift(S));
                          var y = !1;
                          function g(e, r) {
                              if (y && p)
                                  n.selectExtensions.writeValue(t, n.utils.unwrapObservable(i.get("value")), !0);
                              else if (m.length) {
                                  var o = n.utils.arrayIndexOf(m, n.selectExtensions.readValue(r[0])) >= 0;
                                  n.utils.setOptionNodeSelectionState(r[0], o),
                                  y && !o && n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, "change"])
                              }
                          }
                          f.beforeRemove = function(e) {
                              t.removeChild(e)
                          }
                          ;
                          var _ = g;
                          i.has("optionsAfterRender") && "function" == typeof i.get("optionsAfterRender") && (_ = function(t, e) {
                              g(0, e),
                              n.dependencyDetection.ignore(i.get("optionsAfterRender"), null, [e[0], t !== S ? t : o])
                          }
                          ),
                          n.utils.setDomNodeChildrenFromArrayMapping(t, a, function(e, r, s) {
                              s.length && (m = !p && s[0].selected ? [n.selectExtensions.readValue(s[0])] : [],
                              y = !0);
                              var a = t.ownerDocument.createElement("option");
                              if (e === S)
                                  n.utils.setTextContent(a, i.get("optionsCaption")),
                                  n.selectExtensions.writeValue(a, o);
                              else {
                                  var l = v(e, i.get("optionsValue"), e);
                                  n.selectExtensions.writeValue(a, n.utils.unwrapObservable(l));
                                  var u = v(e, i.get("optionsText"), l);
                                  n.utils.setTextContent(a, u)
                              }
                              return [a]
                          }, f, _),
                          n.dependencyDetection.ignore(function() {
                              p ? n.selectExtensions.writeValue(t, n.utils.unwrapObservable(i.get("value")), !0) : (u ? m.length && r().length < m.length : m.length && t.selectedIndex >= 0 ? n.selectExtensions.readValue(t.options[t.selectedIndex]) !== m[0] : m.length || t.selectedIndex >= 0) && n.utils.triggerEvent(t, "change")
                          }),
                          n.utils.ensureSelectElementIsRenderedCorrectly(t),
                          c && Math.abs(c - t.scrollTop) > 20 && (t.scrollTop = c)
                      }
                  },
                  n.bindingHandlers.options.optionValueDomDataKey = n.utils.domData.nextKey(),
                  n.bindingHandlers.selectedOptions = {
                      after: ["options", "foreach"],
                      init: function(t, e, i) {
                          n.utils.registerEventHandler(t, "change", function() {
                              var r = e()
                                , o = [];
                              n.utils.arrayForEach(t.getElementsByTagName("option"), function(t) {
                                  t.selected && o.push(n.selectExtensions.readValue(t))
                              }),
                              n.expressionRewriting.writeValueToProperty(r, i, "selectedOptions", o)
                          })
                      },
                      update: function(t, e) {
                          if ("select" != n.utils.tagNameLower(t))
                              throw new Error("values binding applies only to SELECT elements");
                          var i = n.utils.unwrapObservable(e());
                          i && "number" == typeof i.length && n.utils.arrayForEach(t.getElementsByTagName("option"), function(t) {
                              var e = n.utils.arrayIndexOf(i, n.selectExtensions.readValue(t)) >= 0;
                              n.utils.setOptionNodeSelectionState(t, e)
                          })
                      }
                  },
                  n.expressionRewriting.twoWayBindings.selectedOptions = !0,
                  n.bindingHandlers.style = {
                      update: function(t, e) {
                          var i = n.utils.unwrapObservable(e() || {});
                          n.utils.objectForEach(i, function(e, i) {
                              null !== (i = n.utils.unwrapObservable(i)) && i !== o && !1 !== i || (i = ""),
                              t.style[e] = i
                          })
                      }
                  },
                  n.bindingHandlers.submit = {
                      init: function(t, e, i, r, o) {
                          if ("function" != typeof e())
                              throw new Error("The value for a submit binding must be a function");
                          n.utils.registerEventHandler(t, "submit", function(n) {
                              var i, r = e();
                              try {
                                  i = r.call(o.$data, t)
                              } finally {
                                  !0 !== i && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
                              }
                          })
                      }
                  },
                  n.bindingHandlers.text = {
                      init: function() {
                          return {
                              controlsDescendantBindings: !0
                          }
                      },
                      update: function(t, e) {
                          n.utils.setTextContent(t, e())
                      }
                  },
                  n.virtualElements.allowedBindings.text = !0,
                  function() {
                      if (a && a.navigator)
                          var t = function(t) {
                              if (t)
                                  return parseFloat(t[1])
                          }
                            , e = a.opera && a.opera.version && parseInt(a.opera.version())
                            , i = a.navigator.userAgent
                            , s = t(i.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i))
                            , l = t(i.match(/Firefox\/([^ ]*)/));
                      if (n.utils.ieVersion < 10)
                          var u = n.utils.domData.nextKey()
                            , c = n.utils.domData.nextKey()
                            , h = function(t) {
                              var e = this.activeElement
                                , i = e && n.utils.domData.get(e, c);
                              i && i(t)
                          }
                            , p = function(t, e) {
                              var i = t.ownerDocument;
                              n.utils.domData.get(i, u) || (n.utils.domData.set(i, u, !0),
                              n.utils.registerEventHandler(i, "selectionchange", h)),
                              n.utils.domData.set(t, c, e)
                          };
                      n.bindingHandlers.textInput = {
                          init: function(t, i, a) {
                              var u, c, h = t.value, d = function(e) {
                                  clearTimeout(u),
                                  c = u = o;
                                  var s = t.value;
                                  h !== s && (r && e && (t._ko_textInputProcessedEvent = e.type),
                                  h = s,
                                  n.expressionRewriting.writeValueToProperty(i(), a, "textInput", s))
                              }, f = function(e) {
                                  if (!u) {
                                      c = t.value;
                                      var n = r ? d.bind(t, {
                                          type: e.type
                                      }) : d;
                                      u = setTimeout(n, 4)
                                  }
                              }, m = function() {
                                  var e = n.utils.unwrapObservable(i());
                                  null !== e && e !== o || (e = ""),
                                  c === o || e !== c ? t.value !== e && (h = e,
                                  t.value = e) : setTimeout(m, 4)
                              }, v = function(e, i) {
                                  n.utils.registerEventHandler(t, e, i)
                              };
                              r && n.bindingHandlers.textInput._forceUpdateOn ? n.utils.arrayForEach(n.bindingHandlers.textInput._forceUpdateOn, function(t) {
                                  "after" == t.slice(0, 5) ? v(t.slice(5), f) : v(t, d)
                              }) : n.utils.ieVersion < 10 ? (v("propertychange", function(t) {
                                  "value" === t.propertyName && d(t)
                              }),
                              8 == n.utils.ieVersion && (v("keyup", d),
                              v("keydown", d)),
                              n.utils.ieVersion >= 8 && (p(t, d),
                              v("dragend", f))) : (v("input", d),
                              s < 5 && "textarea" === n.utils.tagNameLower(t) ? (v("keydown", f),
                              v("paste", f),
                              v("cut", f)) : e < 11 ? v("keydown", f) : l < 4 && (v("DOMAutoComplete", d),
                              v("dragdrop", d),
                              v("drop", d))),
                              v("change", d),
                              n.computed(m, null, {
                                  disposeWhenNodeIsRemoved: t
                              })
                          }
                      },
                      n.expressionRewriting.twoWayBindings.textInput = !0,
                      n.bindingHandlers.textinput = {
                          preprocess: function(t, e, n) {
                              n("textInput", t)
                          }
                      }
                  }(),
                  n.bindingHandlers.uniqueName = {
                      init: function(t, e) {
                          if (e()) {
                              var i = "ko_unique_" + ++n.bindingHandlers.uniqueName.currentIndex;
                              n.utils.setElementName(t, i)
                          }
                      }
                  },
                  n.bindingHandlers.uniqueName.currentIndex = 0,
                  n.bindingHandlers.value = {
                      after: ["options", "foreach"],
                      init: function(t, e, i) {
                          if ("input" != t.tagName.toLowerCase() || "checkbox" != t.type && "radio" != t.type) {
                              var r = ["change"]
                                , o = i.get("valueUpdate")
                                , s = !1
                                , a = null;
                              o && ("string" == typeof o && (o = [o]),
                              n.utils.arrayPushAll(r, o),
                              r = n.utils.arrayGetDistinctValues(r));
                              var l = function() {
                                  a = null,
                                  s = !1;
                                  var r = e()
                                    , o = n.selectExtensions.readValue(t);
                                  n.expressionRewriting.writeValueToProperty(r, i, "value", o)
                              };
                              n.utils.ieVersion && "input" == t.tagName.toLowerCase() && "text" == t.type && "off" != t.autocomplete && (!t.form || "off" != t.form.autocomplete) && -1 == n.utils.arrayIndexOf(r, "propertychange") && (n.utils.registerEventHandler(t, "propertychange", function() {
                                  s = !0
                              }),
                              n.utils.registerEventHandler(t, "focus", function() {
                                  s = !1
                              }),
                              n.utils.registerEventHandler(t, "blur", function() {
                                  s && l()
                              })),
                              n.utils.arrayForEach(r, function(e) {
                                  var i = l;
                                  n.utils.stringStartsWith(e, "after") && (i = function() {
                                      a = n.selectExtensions.readValue(t),
                                      setTimeout(l, 0)
                                  }
                                  ,
                                  e = e.substring("after".length)),
                                  n.utils.registerEventHandler(t, e, i)
                              });
                              var u = function() {
                                  var r = n.utils.unwrapObservable(e())
                                    , o = n.selectExtensions.readValue(t);
                                  if (null === a || r !== a) {
                                      if (r !== o)
                                          if ("select" === n.utils.tagNameLower(t)) {
                                              var s = i.get("valueAllowUnset")
                                                , l = function() {
                                                  n.selectExtensions.writeValue(t, r, s)
                                              };
                                              l(),
                                              s || r === n.selectExtensions.readValue(t) ? setTimeout(l, 0) : n.dependencyDetection.ignore(n.utils.triggerEvent, null, [t, "change"])
                                          } else
                                              n.selectExtensions.writeValue(t, r)
                                  } else
                                      setTimeout(u, 0)
                              };
                              n.computed(u, null, {
                                  disposeWhenNodeIsRemoved: t
                              })
                          } else
                              n.applyBindingAccessorsToNode(t, {
                                  checkedValue: e
                              })
                      },
                      update: function() {}
                  },
                  n.expressionRewriting.twoWayBindings.value = !0,
                  n.bindingHandlers.visible = {
                      update: function(t, e) {
                          var i = n.utils.unwrapObservable(e())
                            , r = !("none" == t.style.display);
                          i && !r ? t.style.display = "" : !i && r && (t.style.display = "none")
                      }
                  },
                  x = "click",
                  n.bindingHandlers[x] = {
                      init: function(t, e, i, r, o) {
                          return n.bindingHandlers.event.init.call(this, t, function() {
                              var t = {};
                              return t[x] = e(),
                              t
                          }, i, r, o)
                      }
                  },
                  n.templateEngine = function() {}
                  ,
                  n.templateEngine.prototype.renderTemplateSource = function(t, e, n, i) {
                      throw new Error("Override renderTemplateSource")
                  }
                  ,
                  n.templateEngine.prototype.createJavaScriptEvaluatorBlock = function(t) {
                      throw new Error("Override createJavaScriptEvaluatorBlock")
                  }
                  ,
                  n.templateEngine.prototype.makeTemplateSource = function(t, e) {
                      if ("string" == typeof t) {
                          var i = (e = e || l).getElementById(t);
                          if (!i)
                              throw new Error("Cannot find template with ID " + t);
                          return new n.templateSources.domElement(i)
                      }
                      if (1 == t.nodeType || 8 == t.nodeType)
                          return new n.templateSources.anonymousTemplate(t);
                      throw new Error("Unknown template type: " + t)
                  }
                  ,
                  n.templateEngine.prototype.renderTemplate = function(t, e, n, i) {
                      var r = this.makeTemplateSource(t, i);
                      return this.renderTemplateSource(r, e, n, i)
                  }
                  ,
                  n.templateEngine.prototype.isTemplateRewritten = function(t, e) {
                      return !1 === this.allowTemplateRewriting || this.makeTemplateSource(t, e).data("isRewritten")
                  }
                  ,
                  n.templateEngine.prototype.rewriteTemplate = function(t, e, n) {
                      var i = this.makeTemplateSource(t, n)
                        , r = e(i.text());
                      i.text(r),
                      i.data("isRewritten", !0)
                  }
                  ,
                  n.exportSymbol("templateEngine", n.templateEngine),
                  n.templateRewriting = function() {
                      var t = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi
                        , e = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;
                      function i(t, e, i, r) {
                          var o = n.expressionRewriting.parseObjectLiteral(t);
                          !function(t) {
                              for (var e = n.expressionRewriting.bindingRewriteValidators, i = 0; i < t.length; i++) {
                                  var r = t[i].key;
                                  if (e.hasOwnProperty(r)) {
                                      var o = e[r];
                                      if ("function" == typeof o) {
                                          var s = o(t[i].value);
                                          if (s)
                                              throw new Error(s)
                                      } else if (!o)
                                          throw new Error("This template engine does not support the '" + r + "' binding within its templates")
                                  }
                              }
                          }(o);
                          var s = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + n.expressionRewriting.preProcessBindings(o, {
                              valueAccessors: !0
                          }) + " } })()},'" + i.toLowerCase() + "')";
                          return r.createJavaScriptEvaluatorBlock(s) + e
                      }
                      return {
                          ensureTemplateIsRewritten: function(t, e, i) {
                              e.isTemplateRewritten(t, i) || e.rewriteTemplate(t, function(t) {
                                  return n.templateRewriting.memoizeBindingAttributeSyntax(t, e)
                              }, i)
                          },
                          memoizeBindingAttributeSyntax: function(n, r) {
                              return n.replace(t, function() {
                                  return i(arguments[4], arguments[1], arguments[2], r)
                              }).replace(e, function() {
                                  return i(arguments[1], "\x3c!-- ko --\x3e", "#comment", r)
                              })
                          },
                          applyMemoizedBindingsToNextSibling: function(t, e) {
                              return n.memoization.memoize(function(i, r) {
                                  var o = i.nextSibling;
                                  o && o.nodeName.toLowerCase() === e && n.applyBindingAccessorsToNode(o, t, r)
                              })
                          }
                      }
                  }(),
                  n.exportSymbol("__tr_ambtns", n.templateRewriting.applyMemoizedBindingsToNextSibling),
                  function() {
                      n.templateSources = {},
                      n.templateSources.domElement = function(t) {
                          this.domElement = t
                      }
                      ,
                      n.templateSources.domElement.prototype.text = function() {
                          var t = n.utils.tagNameLower(this.domElement)
                            , e = "script" === t ? "text" : "textarea" === t ? "value" : "innerHTML";
                          if (0 == arguments.length)
                              return this.domElement[e];
                          var i = arguments[0];
                          "innerHTML" === e ? n.utils.setHtml(this.domElement, i) : this.domElement[e] = i
                      }
                      ;
                      var t = n.utils.domData.nextKey() + "_";
                      n.templateSources.domElement.prototype.data = function(e) {
                          if (1 === arguments.length)
                              return n.utils.domData.get(this.domElement, t + e);
                          n.utils.domData.set(this.domElement, t + e, arguments[1])
                      }
                      ;
                      var e = n.utils.domData.nextKey();
                      n.templateSources.anonymousTemplate = function(t) {
                          this.domElement = t
                      }
                      ,
                      n.templateSources.anonymousTemplate.prototype = new n.templateSources.domElement,
                      n.templateSources.anonymousTemplate.prototype.constructor = n.templateSources.anonymousTemplate,
                      n.templateSources.anonymousTemplate.prototype.text = function() {
                          if (0 == arguments.length) {
                              var t = n.utils.domData.get(this.domElement, e) || {};
                              return t.textData === o && t.containerData && (t.textData = t.containerData.innerHTML),
                              t.textData
                          }
                          var i = arguments[0];
                          n.utils.domData.set(this.domElement, e, {
                              textData: i
                          })
                      }
                      ,
                      n.templateSources.domElement.prototype.nodes = function() {
                          if (0 == arguments.length)
                              return (n.utils.domData.get(this.domElement, e) || {}).containerData;
                          var t = arguments[0];
                          n.utils.domData.set(this.domElement, e, {
                              containerData: t
                          })
                      }
                      ,
                      n.exportSymbol("templateSources", n.templateSources),
                      n.exportSymbol("templateSources.domElement", n.templateSources.domElement),
                      n.exportSymbol("templateSources.anonymousTemplate", n.templateSources.anonymousTemplate)
                  }(),
                  function() {
                      var t;
                      function e(t, e, i) {
                          for (var r, o = t, s = n.virtualElements.nextSibling(e); o && (r = o) !== s; )
                              i(r, o = n.virtualElements.nextSibling(r))
                      }
                      function i(t, i) {
                          if (t.length) {
                              var r = t[0]
                                , o = t[t.length - 1]
                                , s = r.parentNode
                                , a = n.bindingProvider.instance
                                , l = a.preprocessNode;
                              if (l) {
                                  if (e(r, o, function(t, e) {
                                      var n = t.previousSibling
                                        , i = l.call(a, t);
                                      i && (t === r && (r = i[0] || e),
                                      t === o && (o = i[i.length - 1] || n))
                                  }),
                                  t.length = 0,
                                  !r)
                                      return;
                                  r === o ? t.push(r) : (t.push(r, o),
                                  n.utils.fixUpContinuousNodeArray(t, s))
                              }
                              e(r, o, function(t) {
                                  1 !== t.nodeType && 8 !== t.nodeType || n.applyBindings(i, t)
                              }),
                              e(r, o, function(t) {
                                  1 !== t.nodeType && 8 !== t.nodeType || n.memoization.unmemoizeDomNodeAndDescendants(t, [i])
                              }),
                              n.utils.fixUpContinuousNodeArray(t, s)
                          }
                      }
                      function r(t) {
                          return t.nodeType ? t : t.length > 0 ? t[0] : null
                      }
                      function s(e, o, s, a, l) {
                          l = l || {};
                          var u = (e && r(e) || s || {}).ownerDocument
                            , c = l.templateEngine || t;
                          n.templateRewriting.ensureTemplateIsRewritten(s, c, u);
                          var h = c.renderTemplate(s, a, l, u);
                          if ("number" != typeof h.length || h.length > 0 && "number" != typeof h[0].nodeType)
                              throw new Error("Template engine must return an array of DOM nodes");
                          var p = !1;
                          switch (o) {
                          case "replaceChildren":
                              n.virtualElements.setDomNodeChildren(e, h),
                              p = !0;
                              break;
                          case "replaceNode":
                              n.utils.replaceDomNodes(e, h),
                              p = !0;
                              break;
                          case "ignoreTargetNode":
                              break;
                          default:
                              throw new Error("Unknown renderMode: " + o)
                          }
                          return p && (i(h, a),
                          l.afterRender && n.dependencyDetection.ignore(l.afterRender, null, [h, a.$data])),
                          h
                      }
                      function a(t, e, i) {
                          return n.isObservable(t) ? t() : "function" == typeof t ? t(e, i) : t
                      }
                      n.setTemplateEngine = function(e) {
                          if (e != o && !(e instanceof n.templateEngine))
                              throw new Error("templateEngine must inherit from ko.templateEngine");
                          t = e
                      }
                      ,
                      n.renderTemplate = function(e, i, l, u, c) {
                          if (((l = l || {}).templateEngine || t) == o)
                              throw new Error("Set a template engine before calling renderTemplate");
                          if (c = c || "replaceChildren",
                          u) {
                              var h = r(u)
                                , p = h && "replaceNode" == c ? h.parentNode : h;
                              return n.dependentObservable(function() {
                                  var t = i && i instanceof n.bindingContext ? i : new n.bindingContext(n.utils.unwrapObservable(i))
                                    , o = a(e, t.$data, t)
                                    , p = s(u, c, o, t, l);
                                  "replaceNode" == c && (h = r(u = p))
                              }, null, {
                                  disposeWhen: function() {
                                      return !h || !n.utils.domNodeIsAttachedToDocument(h)
                                  },
                                  disposeWhenNodeIsRemoved: p
                              })
                          }
                          return n.memoization.memoize(function(t) {
                              n.renderTemplate(e, i, l, t, "replaceNode")
                          })
                      }
                      ,
                      n.renderTemplateForEach = function(t, e, r, l, u) {
                          var c, h = function(e, n) {
                              return c = u.createChildContext(e, r.as, function(t) {
                                  t.$index = n
                              }),
                              s(null, "ignoreTargetNode", a(t, e, c), c, r)
                          }, p = function(t, e, n) {
                              i(e, c),
                              r.afterRender && r.afterRender(e, t),
                              c = null
                          };
                          return n.dependentObservable(function() {
                              var t = n.utils.unwrapObservable(e) || [];
                              void 0 === t.length && (t = [t]);
                              var i = n.utils.arrayFilter(t, function(t) {
                                  return r.includeDestroyed || t === o || null === t || !n.utils.unwrapObservable(t._destroy)
                              });
                              n.dependencyDetection.ignore(n.utils.setDomNodeChildrenFromArrayMapping, null, [l, i, h, r, p])
                          }, null, {
                              disposeWhenNodeIsRemoved: l
                          })
                      }
                      ;
                      var l = n.utils.domData.nextKey();
                      n.bindingHandlers.template = {
                          init: function(t, e) {
                              var i = n.utils.unwrapObservable(e());
                              if ("string" == typeof i || i.name)
                                  n.virtualElements.emptyNode(t);
                              else if ("nodes"in i) {
                                  var r = i.nodes || [];
                                  if (n.isObservable(r))
                                      throw new Error('The "nodes" option must be a plain, non-observable array.');
                                  var o = n.utils.moveCleanedNodesToContainerElement(r);
                                  new n.templateSources.anonymousTemplate(t).nodes(o)
                              } else {
                                  var s = n.virtualElements.childNodes(t);
                                  o = n.utils.moveCleanedNodesToContainerElement(s),
                                  new n.templateSources.anonymousTemplate(t).nodes(o)
                              }
                              return {
                                  controlsDescendantBindings: !0
                              }
                          },
                          update: function(t, e, i, r, s) {
                              var a, u, c = e(), h = n.utils.unwrapObservable(c), p = !0, d = null;
                              if ("string" == typeof h ? (u = c,
                              h = {}) : (u = h.name,
                              "if"in h && (p = n.utils.unwrapObservable(h.if)),
                              p && "ifnot"in h && (p = !n.utils.unwrapObservable(h.ifnot)),
                              a = n.utils.unwrapObservable(h.data)),
                              "foreach"in h) {
                                  var f = p && h.foreach || [];
                                  d = n.renderTemplateForEach(u || t, f, h, t, s)
                              } else if (p) {
                                  var m = "data"in h ? s.createChildContext(a, h.as) : s;
                                  d = n.renderTemplate(u || t, m, h, t)
                              } else
                                  n.virtualElements.emptyNode(t);
                              !function(t, e) {
                                  var i = n.utils.domData.get(t, l);
                                  i && "function" == typeof i.dispose && i.dispose(),
                                  n.utils.domData.set(t, l, e && e.isActive() ? e : o)
                              }(t, d)
                          }
                      },
                      n.expressionRewriting.bindingRewriteValidators.template = function(t) {
                          var e = n.expressionRewriting.parseObjectLiteral(t);
                          return 1 == e.length && e[0].unknown ? null : n.expressionRewriting.keyValueArrayContainsKey(e, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                      }
                      ,
                      n.virtualElements.allowedBindings.template = !0
                  }(),
                  n.exportSymbol("setTemplateEngine", n.setTemplateEngine),
                  n.exportSymbol("renderTemplate", n.renderTemplate),
                  n.utils.findMovesInArrayComparison = function(t, e, n) {
                      var i, r, o, s, a;
                      if (t.length && e.length)
                          for (i = r = 0; (!n || i < n) && (s = t[r]); ++r) {
                              for (o = 0; a = e[o]; ++o)
                                  if (s.value === a.value) {
                                      s.moved = a.index,
                                      a.moved = s.index,
                                      e.splice(o, 1),
                                      i = o = 0;
                                      break
                                  }
                              i += o
                          }
                  }
                  ,
                  n.utils.compareArrays = function() {
                      var t = "added"
                        , e = "deleted";
                      function i(t, e, i, r, o) {
                          var s, a, l, u, c, h = Math.min, p = Math.max, d = [], f = t.length, m = e.length, v = m - f || 1, y = f + m + 1;
                          for (s = 0; s <= f; s++)
                              for (u = l,
                              d.push(l = []),
                              c = h(m, s + v),
                              a = p(0, s - 1); a <= c; a++)
                                  if (a)
                                      if (s)
                                          if (t[s - 1] === e[a - 1])
                                              l[a] = u[a - 1];
                                          else {
                                              var g = u[a] || y
                                                , _ = l[a - 1] || y;
                                              l[a] = h(g, _) + 1
                                          }
                                      else
                                          l[a] = a + 1;
                                  else
                                      l[a] = s + 1;
                          var b, w = [], x = [], S = [];
                          for (s = f,
                          a = m; s || a; )
                              b = d[s][a] - 1,
                              a && b === d[s][a - 1] ? x.push(w[w.length] = {
                                  status: i,
                                  value: e[--a],
                                  index: a
                              }) : s && b === d[s - 1][a] ? S.push(w[w.length] = {
                                  status: r,
                                  value: t[--s],
                                  index: s
                              }) : (--a,
                              --s,
                              o.sparse || w.push({
                                  status: "retained",
                                  value: e[a]
                              }));
                          return n.utils.findMovesInArrayComparison(x, S, 10 * f),
                          w.reverse()
                      }
                      return function(n, r, o) {
                          return o = "boolean" == typeof o ? {
                              dontLimitMoves: o
                          } : o || {},
                          r = r || [],
                          (n = n || []).length <= r.length ? i(n, r, t, e, o) : i(r, n, e, t, o)
                      }
                  }(),
                  n.exportSymbol("utils.compareArrays", n.utils.compareArrays),
                  function() {
                      function t(t, e, i, r, s) {
                          var a = []
                            , l = n.dependentObservable(function() {
                              var o = e(i, s, n.utils.fixUpContinuousNodeArray(a, t)) || [];
                              a.length > 0 && (n.utils.replaceDomNodes(a, o),
                              r && n.dependencyDetection.ignore(r, null, [i, o, s])),
                              a.length = 0,
                              n.utils.arrayPushAll(a, o)
                          }, null, {
                              disposeWhenNodeIsRemoved: t,
                              disposeWhen: function() {
                                  return !n.utils.anyDomNodeIsAttachedToDocument(a)
                              }
                          });
                          return {
                              mappedNodes: a,
                              dependentObservable: l.isActive() ? l : o
                          }
                      }
                      var e = n.utils.domData.nextKey();
                      n.utils.setDomNodeChildrenFromArrayMapping = function(i, r, s, a, l) {
                          r = r || [],
                          a = a || {};
                          var u, c = n.utils.domData.get(i, e) === o, h = n.utils.domData.get(i, e) || [], p = n.utils.arrayMap(h, function(t) {
                              return t.arrayEntry
                          }), d = n.utils.compareArrays(p, r, a.dontLimitMoves), f = [], m = 0, v = 0, y = [], g = [], _ = [], b = [], w = [];
                          function x(t, e) {
                              u = h[e],
                              v !== e && (b[t] = u),
                              u.indexObservable(v++),
                              n.utils.fixUpContinuousNodeArray(u.mappedNodes, i),
                              f.push(u),
                              g.push(u)
                          }
                          function S(t, e) {
                              if (t)
                                  for (var i = 0, r = e.length; i < r; i++)
                                      e[i] && n.utils.arrayForEach(e[i].mappedNodes, function(n) {
                                          t(n, i, e[i].arrayEntry)
                                      })
                          }
                          for (var M, E, T = 0; M = d[T]; T++)
                              switch (E = M.moved,
                              M.status) {
                              case "deleted":
                                  E === o && ((u = h[m]).dependentObservable && u.dependentObservable.dispose(),
                                  y.push.apply(y, n.utils.fixUpContinuousNodeArray(u.mappedNodes, i)),
                                  a.beforeRemove && (_[T] = u,
                                  g.push(u))),
                                  m++;
                                  break;
                              case "retained":
                                  x(T, m++);
                                  break;
                              case "added":
                                  E !== o ? x(T, E) : (u = {
                                      arrayEntry: M.value,
                                      indexObservable: n.observable(v++)
                                  },
                                  f.push(u),
                                  g.push(u),
                                  c || (w[T] = u))
                              }
                          S(a.beforeMove, b),
                          n.utils.arrayForEach(y, a.beforeRemove ? n.cleanNode : n.removeNode),
                          T = 0;
                          for (var D, I, C = n.virtualElements.firstChild(i); u = g[T]; T++) {
                              u.mappedNodes || n.utils.extend(u, t(i, s, u.arrayEntry, l, u.indexObservable));
                              for (var L = 0; I = u.mappedNodes[L]; C = I.nextSibling,
                              D = I,
                              L++)
                                  I !== C && n.virtualElements.insertAfter(i, I, D);
                              !u.initialized && l && (l(u.arrayEntry, u.mappedNodes, u.indexObservable),
                              u.initialized = !0)
                          }
                          S(a.beforeRemove, _),
                          S(a.afterMove, b),
                          S(a.afterAdd, w),
                          n.utils.domData.set(i, e, f)
                      }
                  }(),
                  n.exportSymbol("utils.setDomNodeChildrenFromArrayMapping", n.utils.setDomNodeChildrenFromArrayMapping),
                  n.nativeTemplateEngine = function() {
                      this.allowTemplateRewriting = !1
                  }
                  ,
                  n.nativeTemplateEngine.prototype = new n.templateEngine,
                  n.nativeTemplateEngine.prototype.constructor = n.nativeTemplateEngine,
                  n.nativeTemplateEngine.prototype.renderTemplateSource = function(t, e, i, r) {
                      var o = n.utils.ieVersion < 9 || !t.nodes ? null : t.nodes();
                      if (o)
                          return n.utils.makeArray(o.cloneNode(!0).childNodes);
                      var s = t.text();
                      return n.utils.parseHtmlFragment(s, r)
                  }
                  ,
                  n.nativeTemplateEngine.instance = new n.nativeTemplateEngine,
                  n.setTemplateEngine(n.nativeTemplateEngine.instance),
                  n.exportSymbol("nativeTemplateEngine", n.nativeTemplateEngine),
                  function() {
                      n.jqueryTmplTemplateEngine = function() {
                          var t = this.jQueryTmplVersion = function() {
                              if (!c || !c.tmpl)
                                  return 0;
                              try {
                                  if (c.tmpl.tag.tmpl.open.toString().indexOf("__") >= 0)
                                      return 2
                              } catch (t) {}
                              return 1
                          }();
                          this.renderTemplateSource = function(e, n, i, r) {
                              r = r || l,
                              i = i || {},
                              function() {
                                  if (t < 2)
                                      throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
                              }();
                              var o = e.data("precompiled");
                              if (!o) {
                                  var s = e.text() || "";
                                  s = "{{ko_with $item.koBindingContext}}" + s + "{{/ko_with}}",
                                  o = c.template(null, s),
                                  e.data("precompiled", o)
                              }
                              var a = function(t, e, n) {
                                  return c.tmpl(t, e, n)
                              }(o, [n.$data], c.extend({
                                  koBindingContext: n
                              }, i.templateOptions));
                              return a.appendTo(r.createElement("div")),
                              c.fragments = {},
                              a
                          }
                          ,
                          this.createJavaScriptEvaluatorBlock = function(t) {
                              return "{{ko_code ((function() { return " + t + " })()) }}"
                          }
                          ,
                          this.addTemplate = function(t, e) {
                              l.write("<script type='text/html' id='" + t + "'>" + e + "<\/script>")
                          }
                          ,
                          t > 0 && (c.tmpl.tag.ko_code = {
                              open: "__.push($1 || '');"
                          },
                          c.tmpl.tag.ko_with = {
                              open: "with($1) {",
                              close: "} "
                          })
                      }
                      ,
                      n.jqueryTmplTemplateEngine.prototype = new n.templateEngine,
                      n.jqueryTmplTemplateEngine.prototype.constructor = n.jqueryTmplTemplateEngine;
                      var t = new n.jqueryTmplTemplateEngine;
                      t.jQueryTmplVersion > 0 && n.setTemplateEngine(t),
                      n.exportSymbol("jqueryTmplTemplateEngine", n.jqueryTmplTemplateEngine)
                  }()
              }
              ,
              "function" == typeof t && t.amd ? t(["exports", "require"], s) : s("function" == typeof e && "object" == typeof i && "object" == typeof n ? n.exports || i : a.ko = {})
          }()
      }
      , {}],
      17: [function(e, n, i) {
          !function(r, o) {
              "use strict";
              var s, a, l, u;
              function c(t, e) {
                  if (!t || "object" != typeof t)
                      throw new Error("When calling ko.track, you must pass an object as the first parameter.");
                  var n = h(t, !0);
                  return (e = e || Object.getOwnPropertyNames(t)).forEach(function(e) {
                      if (!(e in n) && !1 !== Object.getOwnPropertyDescriptor(t, e).configurable) {
                          var i = t[e]
                            , r = Array.isArray(i)
                            , a = s.isObservable(i) ? i : r ? s.observableArray(i) : s.observable(i);
                          Object.defineProperty(t, e, {
                              configurable: !0,
                              enumerable: !0,
                              get: a,
                              set: s.isWriteableObservable(a) ? a : o
                          }),
                          n[e] = a,
                          r && function(t, e) {
                              var n = null;
                              t.computed(function() {
                                  n && (n.dispose(),
                                  n = null);
                                  var i = e();
                                  i instanceof Array && (n = function(t, e, n) {
                                      return function(t, e) {
                                          l || (l = u());
                                          var n = l.get(e);
                                          if (!n) {
                                              n = new t.subscribable,
                                              l.set(e, n);
                                              var i = {};
                                              !function(t, e, n) {
                                                  ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"].forEach(function(i) {
                                                      var r = t[i];
                                                      t[i] = function() {
                                                          var t = r.apply(this, arguments);
                                                          return !0 !== n.pause && e.notifySubscribers(this),
                                                          t
                                                      }
                                                  })
                                              }(e, n, i),
                                              function(t, e, n, i) {
                                                  ["remove", "removeAll", "destroy", "destroyAll", "replace"].forEach(function(r) {
                                                      Object.defineProperty(e, r, {
                                                          enumerable: !1,
                                                          value: function() {
                                                              var o;
                                                              i.pause = !0;
                                                              try {
                                                                  o = t.observableArray.fn[r].apply(t.observableArray(e), arguments)
                                                              } finally {
                                                                  i.pause = !1
                                                              }
                                                              return n.notifySubscribers(e),
                                                              o
                                                          }
                                                      })
                                                  })
                                              }(t, e, n, i)
                                          }
                                          return n
                                      }(t, n).subscribe(e)
                                  }(t, e, i))
                              })
                          }(s, a)
                      }
                  }),
                  t
              }
              function h(t, e) {
                  a || (a = u());
                  var n = a.get(t);
                  return !n && e && (n = {},
                  a.set(t, n)),
                  n
              }
              function p(t, e) {
                  if (a)
                      if (1 === arguments.length)
                          a.delete(t);
                      else {
                          var n = h(t, !1);
                          n && e.forEach(function(t) {
                              delete n[t]
                          })
                      }
              }
              function d(t, e, n) {
                  var i = {
                      owner: t,
                      deferEvaluation: !0
                  };
                  if ("function" == typeof n)
                      i.read = n;
                  else {
                      if ("value"in n)
                          throw new Error('For ko.defineProperty, you must not specify a "value" for the property. You must provide a "get" function.');
                      if ("function" != typeof n.get)
                          throw new Error('For ko.defineProperty, the third parameter must be either an evaluator function, or an options object containing a function called "get".');
                      i.read = n.get,
                      i.write = n.set
                  }
                  return t[e] = this.computed(i),
                  c.call(this, t, [e]),
                  t
              }
              function f(t, e) {
                  if (!t || "object" != typeof t)
                      return null;
                  var n = h(t, !1);
                  return n && n[e] || null
              }
              function m(t, e) {
                  var n = f(t, e);
                  n && n.valueHasMutated()
              }
              function v(t) {
                  t.track = c,
                  t.untrack = p,
                  t.getObservable = f,
                  t.valueHasMutated = m,
                  t.defineProperty = d
              }
              !function() {
                  if ("object" == typeof i && "object" == typeof n) {
                      s = e("knockout");
                      var o = e("../lib/weakmap");
                      v(s),
                      u = function() {
                          return new o
                      }
                      ,
                      n.exports = s
                  } else
                      "function" == typeof t && t.amd ? t(["knockout"], function(t) {
                          return s = t,
                          v(t),
                          u = function() {
                              return new r.WeakMap
                          }
                          ,
                          t
                      }) : "ko"in r && (s = r.ko,
                      v(r.ko),
                      u = function() {
                          return new r.WeakMap
                      }
                      )
              }()
          }(this)
      }
      , {
          "../lib/weakmap": 15,
          knockout: 16
      }],
      18: [function(t, e, n) {
          var i = t("../internal/baseDifference")
            , r = t("../internal/baseFlatten")
            , o = t("../lang/isArguments")
            , s = t("../lang/isArray");
          e.exports = function() {
              for (var t = -1, e = arguments.length; ++t < e; ) {
                  var n = arguments[t];
                  if (s(n) || o(n))
                      break
              }
              return i(n, r(arguments, !1, !0, ++t))
          }
      }
      , {
          "../internal/baseDifference": 38,
          "../internal/baseFlatten": 41,
          "../lang/isArguments": 82,
          "../lang/isArray": 83
      }],
      19: [function(t, e, n) {
          var i = t("../internal/baseCallback");
          e.exports = function(t, e, n) {
              var r = -1
                , o = t ? t.length : 0;
              for (e = i(e, n, 3); ++r < o; )
                  if (e(t[r], r, t))
                      return r;
              return -1
          }
      }
      , {
          "../internal/baseCallback": 36
      }],
      20: [function(t, e, n) {
          var i = t("../internal/baseFlatten")
            , r = t("../internal/isIterateeCall");
          e.exports = function(t, e, n) {
              var o = t ? t.length : 0;
              return n && r(t, e, n) && (e = !1),
              o ? i(t, e) : []
          }
      }
      , {
          "../internal/baseFlatten": 41,
          "../internal/isIterateeCall": 70
      }],
      21: [function(t, e, n) {
          var i = t("../internal/arrayMap")
            , r = t("../internal/arrayMax")
            , o = t("../internal/baseProperty")
            , s = o("length");
          e.exports = function(t) {
              for (var e = -1, n = (t && t.length && r(i(t, s))) >>> 0, a = Array(n); ++e < n; )
                  a[e] = i(t, o(e));
              return a
          }
      }
      , {
          "../internal/arrayMap": 32,
          "../internal/arrayMax": 33,
          "../internal/baseProperty": 52
      }],
      22: [function(t, e, n) {
          var i = t("./unzip");
          e.exports = function() {
              for (var t = arguments.length, e = Array(t); t--; )
                  e[t] = arguments[t];
              return i(e)
          }
      }
      , {
          "./unzip": 21
      }],
      23: [function(t, e, n) {
          var i = t("../lang/isArray");
          e.exports = function(t, e) {
              var n = -1
                , r = t ? t.length : 0
                , o = {};
              for (!r || e || i(t[0]) || (e = []); ++n < r; ) {
                  var s = t[n];
                  e ? o[s] = e[n] : s && (o[s[0]] = s[1])
              }
              return o
          }
      }
      , {
          "../lang/isArray": 83
      }],
      24: [function(t, e, n) {
          e.exports = t("./includes")
      }
      , {
          "./includes": 27
      }],
      25: [function(t, e, n) {
          var i = t("../internal/baseCallback")
            , r = t("../internal/baseEach")
            , o = t("../internal/baseFind")
            , s = t("../array/findIndex")
            , a = t("../lang/isArray");
          e.exports = function(t, e, n) {
              if (a(t)) {
                  var l = s(t, e, n);
                  return l > -1 ? t[l] : void 0
              }
              return e = i(e, n, 3),
              o(t, e, r)
          }
      }
      , {
          "../array/findIndex": 19,
          "../internal/baseCallback": 36,
          "../internal/baseEach": 39,
          "../internal/baseFind": 40,
          "../lang/isArray": 83
      }],
      26: [function(t, e, n) {
          var i = t("../internal/createAggregator")
            , r = Object.prototype.hasOwnProperty
            , o = i(function(t, e, n) {
              r.call(t, n) ? t[n].push(e) : t[n] = [e]
          });
          e.exports = o
      }
      , {
          "../internal/createAggregator": 59
      }],
      27: [function(t, e, n) {
          var i = t("../internal/baseIndexOf")
            , r = t("../lang/isArray")
            , o = t("../internal/isLength")
            , s = t("../lang/isString")
            , a = t("../object/values")
            , l = Math.max;
          e.exports = function(t, e, n) {
              var u = t ? t.length : 0;
              return o(u) || (u = (t = a(t)).length),
              !!u && (n = "number" == typeof n ? n < 0 ? l(u + n, 0) : n || 0 : 0,
              "string" == typeof t || !r(t) && s(t) ? n < u && t.indexOf(e, n) > -1 : i(t, e, n) > -1)
          }
      }
      , {
          "../internal/baseIndexOf": 45,
          "../internal/isLength": 71,
          "../lang/isArray": 83,
          "../lang/isString": 88,
          "../object/values": 95
      }],
      28: [function(t, e, n) {
          var i = t("../internal/arrayMap")
            , r = t("../internal/baseCallback")
            , o = t("../internal/baseMap")
            , s = t("../lang/isArray");
          e.exports = function(t, e, n) {
              return (s(t) ? i : o)(t, e = r(e, n, 3))
          }
      }
      , {
          "../internal/arrayMap": 32,
          "../internal/baseCallback": 36,
          "../internal/baseMap": 49,
          "../lang/isArray": 83
      }],
      29: [function(t, e, n) {
          var i = t("../internal/baseProperty")
            , r = t("./map");
          e.exports = function(t, e) {
              return r(t, i(e))
          }
      }
      , {
          "../internal/baseProperty": 52,
          "./map": 28
      }],
      30: [function(t, e, n) {
          var i = t("../internal/isLength")
            , r = t("../object/keys");
          e.exports = function(t) {
              var e = t ? t.length : 0;
              return i(e) ? e : r(t).length
          }
      }
      , {
          "../internal/isLength": 71,
          "../object/keys": 92
      }],
      31: [function(t, e, n) {
          (function(n) {
              var i = t("./cachePush")
                , r = t("../lang/isNative")
                , o = r(o = n.Set) && o
                , s = r(s = Object.create) && s;
              function a(t) {
                  var e = t ? t.length : 0;
                  for (this.data = {
                      hash: s(null),
                      set: new o
                  }; e--; )
                      this.push(t[e])
              }
              a.prototype.push = i,
              e.exports = a
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {
          "../lang/isNative": 86,
          "./cachePush": 58
      }],
      32: [function(t, e, n) {
          e.exports = function(t, e) {
              for (var n = -1, i = t.length, r = Array(i); ++n < i; )
                  r[n] = e(t[n], n, t);
              return r
          }
      }
      , {}],
      33: [function(t, e, n) {
          var i = Number.NEGATIVE_INFINITY;
          e.exports = function(t) {
              for (var e = -1, n = t.length, r = i; ++e < n; ) {
                  var o = t[e];
                  o > r && (r = o)
              }
              return r
          }
      }
      , {}],
      34: [function(t, e, n) {
          var i = Object.prototype.hasOwnProperty;
          e.exports = function(t, e, n, r) {
              return void 0 !== t && i.call(r, n) ? t : e
          }
      }
      , {}],
      35: [function(t, e, n) {
          var i = t("./baseCopy")
            , r = t("../object/keys");
          e.exports = function(t, e, n) {
              var o = r(e);
              if (!n)
                  return i(e, t, o);
              for (var s = -1, a = o.length; ++s < a; ) {
                  var l = o[s]
                    , u = t[l]
                    , c = n(u, e[l], l, t, e);
                  (c == c ? c === u : u != u) && (void 0 !== u || l in t) || (t[l] = c)
              }
              return t
          }
      }
      , {
          "../object/keys": 92,
          "./baseCopy": 37
      }],
      36: [function(t, e, n) {
          var i = t("./baseMatches")
            , r = t("./baseMatchesProperty")
            , o = t("./baseProperty")
            , s = t("./bindCallback")
            , a = t("../utility/identity")
            , l = t("./isBindable");
          e.exports = function(t, e, n) {
              var u = typeof t;
              return "function" == u ? void 0 !== e && l(t) ? s(t, e, n) : t : null == t ? a : "object" == u ? i(t) : void 0 === e ? o(t + "") : r(t + "", e)
          }
      }
      , {
          "../utility/identity": 103,
          "./baseMatches": 50,
          "./baseMatchesProperty": 51,
          "./baseProperty": 52,
          "./bindCallback": 56,
          "./isBindable": 68
      }],
      37: [function(t, e, n) {
          e.exports = function(t, e, n) {
              n || (n = e,
              e = {});
              for (var i = -1, r = n.length; ++i < r; ) {
                  var o = n[i];
                  e[o] = t[o]
              }
              return e
          }
      }
      , {}],
      38: [function(t, e, n) {
          var i = t("./baseIndexOf")
            , r = t("./cacheIndexOf")
            , o = t("./createCache");
          e.exports = function(t, e) {
              var n = t ? t.length : 0
                , s = [];
              if (!n)
                  return s;
              var a = -1
                , l = i
                , u = !0
                , c = u && e.length >= 200 && o(e)
                , h = e.length;
              c && (l = r,
              u = !1,
              e = c);
              t: for (; ++a < n; ) {
                  var p = t[a];
                  if (u && p == p) {
                      for (var d = h; d--; )
                          if (e[d] === p)
                              continue t;
                      s.push(p)
                  } else
                      l(e, p) < 0 && s.push(p)
              }
              return s
          }
      }
      , {
          "./baseIndexOf": 45,
          "./cacheIndexOf": 57,
          "./createCache": 61
      }],
      39: [function(t, e, n) {
          var i = t("./baseForOwn")
            , r = t("./isLength")
            , o = t("./toObject");
          e.exports = function(t, e) {
              var n = t ? t.length : 0;
              if (!r(n))
                  return i(t, e);
              for (var s = -1, a = o(t); ++s < n && !1 !== e(a[s], s, a); )
                  ;
              return t
          }
      }
      , {
          "./baseForOwn": 44,
          "./isLength": 71,
          "./toObject": 81
      }],
      40: [function(t, e, n) {
          e.exports = function(t, e, n, i) {
              var r;
              return n(t, function(t, n, o) {
                  if (e(t, n, o))
                      return r = i ? n : t,
                      !1
              }),
              r
          }
      }
      , {}],
      41: [function(t, e, n) {
          var i = t("../lang/isArguments")
            , r = t("../lang/isArray")
            , o = t("./isLength")
            , s = t("./isObjectLike");
          e.exports = function t(e, n, a, l) {
              for (var u = (l || 0) - 1, c = e.length, h = -1, p = []; ++u < c; ) {
                  var d = e[u];
                  if (s(d) && o(d.length) && (r(d) || i(d))) {
                      n && (d = t(d, n, a));
                      var f = -1
                        , m = d.length;
                      for (p.length += m; ++f < m; )
                          p[++h] = d[f]
                  } else
                      a || (p[++h] = d)
              }
              return p
          }
      }
      , {
          "../lang/isArguments": 82,
          "../lang/isArray": 83,
          "./isLength": 71,
          "./isObjectLike": 72
      }],
      42: [function(t, e, n) {
          var i = t("./toObject");
          e.exports = function(t, e, n) {
              for (var r = -1, o = i(t), s = n(t), a = s.length; ++r < a; ) {
                  var l = s[r];
                  if (!1 === e(o[l], l, o))
                      break
              }
              return t
          }
      }
      , {
          "./toObject": 81
      }],
      43: [function(t, e, n) {
          var i = t("./baseFor")
            , r = t("../object/keysIn");
          e.exports = function(t, e) {
              return i(t, e, r)
          }
      }
      , {
          "../object/keysIn": 93,
          "./baseFor": 42
      }],
      44: [function(t, e, n) {
          var i = t("./baseFor")
            , r = t("../object/keys");
          e.exports = function(t, e) {
              return i(t, e, r)
          }
      }
      , {
          "../object/keys": 92,
          "./baseFor": 42
      }],
      45: [function(t, e, n) {
          var i = t("./indexOfNaN");
          e.exports = function(t, e, n) {
              if (e != e)
                  return i(t, n);
              for (var r = (n || 0) - 1, o = t.length; ++r < o; )
                  if (t[r] === e)
                      return r;
              return -1
          }
      }
      , {
          "./indexOfNaN": 67
      }],
      46: [function(t, e, n) {
          var i = t("./baseIsEqualDeep");
          e.exports = function t(e, n, r, o, s, a) {
              if (e === n)
                  return 0 !== e || 1 / e == 1 / n;
              var l = typeof e
                , u = typeof n;
              return "function" != l && "object" != l && "function" != u && "object" != u || null == e || null == n ? e != e && n != n : i(e, n, t, r, o, s, a)
          }
      }
      , {
          "./baseIsEqualDeep": 47
      }],
      47: [function(t, e, n) {
          var i = t("./equalArrays")
            , r = t("./equalByTag")
            , o = t("./equalObjects")
            , s = t("../lang/isArray")
            , a = t("../lang/isTypedArray")
            , l = "[object Arguments]"
            , u = "[object Array]"
            , c = "[object Object]"
            , h = Object.prototype
            , p = h.hasOwnProperty
            , d = h.toString;
          e.exports = function(t, e, n, h, f, m, v) {
              var y = s(t)
                , g = s(e)
                , _ = u
                , b = u;
              y || ((_ = d.call(t)) == l ? _ = c : _ != c && (y = a(t))),
              g || ((b = d.call(e)) == l ? b = c : b != c && (g = a(e)));
              var w = _ == c
                , x = b == c
                , S = _ == b;
              if (S && !y && !w)
                  return r(t, e, _);
              var M = w && p.call(t, "__wrapped__")
                , E = x && p.call(e, "__wrapped__");
              if (M || E)
                  return n(M ? t.value() : t, E ? e.value() : e, h, f, m, v);
              if (!S)
                  return !1;
              m || (m = []),
              v || (v = []);
              for (var T = m.length; T--; )
                  if (m[T] == t)
                      return v[T] == e;
              m.push(t),
              v.push(e);
              var D = (y ? i : o)(t, e, n, h, f, m, v);
              return m.pop(),
              v.pop(),
              D
          }
      }
      , {
          "../lang/isArray": 83,
          "../lang/isTypedArray": 89,
          "./equalArrays": 62,
          "./equalByTag": 63,
          "./equalObjects": 64
      }],
      48: [function(t, e, n) {
          var i = t("./baseIsEqual")
            , r = Object.prototype.hasOwnProperty;
          e.exports = function(t, e, n, o, s) {
              var a = e.length;
              if (null == t)
                  return !a;
              for (var l = -1, u = !s; ++l < a; )
                  if (u && o[l] ? n[l] !== t[e[l]] : !r.call(t, e[l]))
                      return !1;
              for (l = -1; ++l < a; ) {
                  var c = e[l];
                  if (u && o[l])
                      var h = r.call(t, c);
                  else {
                      var p = t[c]
                        , d = n[l];
                      void 0 === (h = s ? s(p, d, c) : void 0) && (h = i(d, p, s, !0))
                  }
                  if (!h)
                      return !1
              }
              return !0
          }
      }
      , {
          "./baseIsEqual": 46
      }],
      49: [function(t, e, n) {
          var i = t("./baseEach");
          e.exports = function(t, e) {
              var n = [];
              return i(t, function(t, i, r) {
                  n.push(e(t, i, r))
              }),
              n
          }
      }
      , {
          "./baseEach": 39
      }],
      50: [function(t, e, n) {
          var i = t("./baseIsMatch")
            , r = t("./isStrictComparable")
            , o = t("../object/keys")
            , s = Object.prototype.hasOwnProperty;
          e.exports = function(t) {
              var e = o(t)
                , n = e.length;
              if (1 == n) {
                  var a = e[0]
                    , l = t[a];
                  if (r(l))
                      return function(t) {
                          return null != t && t[a] === l && s.call(t, a)
                      }
              }
              for (var u = Array(n), c = Array(n); n--; )
                  l = t[e[n]],
                  u[n] = l,
                  c[n] = r(l);
              return function(t) {
                  return i(t, e, u, c)
              }
          }
      }
      , {
          "../object/keys": 92,
          "./baseIsMatch": 48,
          "./isStrictComparable": 73
      }],
      51: [function(t, e, n) {
          var i = t("./baseIsEqual")
            , r = t("./isStrictComparable");
          e.exports = function(t, e) {
              return r(e) ? function(n) {
                  return null != n && n[t] === e
              }
              : function(n) {
                  return null != n && i(e, n[t], null, !0)
              }
          }
      }
      , {
          "./baseIsEqual": 46,
          "./isStrictComparable": 73
      }],
      52: [function(t, e, n) {
          e.exports = function(t) {
              return function(e) {
                  return null == e ? void 0 : e[t]
              }
          }
      }
      , {}],
      53: [function(t, e, n) {
          var i = t("../utility/identity")
            , r = t("./metaMap")
            , o = r ? function(t, e) {
              return r.set(t, e),
              t
          }
          : i;
          e.exports = o
      }
      , {
          "../utility/identity": 103,
          "./metaMap": 74
      }],
      54: [function(t, e, n) {
          e.exports = function(t) {
              return "string" == typeof t ? t : null == t ? "" : t + ""
          }
      }
      , {}],
      55: [function(t, e, n) {
          e.exports = function(t, e) {
              for (var n = -1, i = e.length, r = Array(i); ++n < i; )
                  r[n] = t[e[n]];
              return r
          }
      }
      , {}],
      56: [function(t, e, n) {
          var i = t("../utility/identity");
          e.exports = function(t, e, n) {
              if ("function" != typeof t)
                  return i;
              if (void 0 === e)
                  return t;
              switch (n) {
              case 1:
                  return function(n) {
                      return t.call(e, n)
                  }
                  ;
              case 3:
                  return function(n, i, r) {
                      return t.call(e, n, i, r)
                  }
                  ;
              case 4:
                  return function(n, i, r, o) {
                      return t.call(e, n, i, r, o)
                  }
                  ;
              case 5:
                  return function(n, i, r, o, s) {
                      return t.call(e, n, i, r, o, s)
                  }
              }
              return function() {
                  return t.apply(e, arguments)
              }
          }
      }
      , {
          "../utility/identity": 103
      }],
      57: [function(t, e, n) {
          var i = t("../lang/isObject");
          e.exports = function(t, e) {
              var n = t.data;
              return ("string" == typeof e || i(e) ? n.set.has(e) : n.hash[e]) ? 0 : -1
          }
      }
      , {
          "../lang/isObject": 87
      }],
      58: [function(t, e, n) {
          var i = t("../lang/isObject");
          e.exports = function(t) {
              var e = this.data;
              "string" == typeof t || i(t) ? e.set.add(t) : e.hash[t] = !0
          }
      }
      , {
          "../lang/isObject": 87
      }],
      59: [function(t, e, n) {
          var i = t("./baseCallback")
            , r = t("./baseEach")
            , o = t("../lang/isArray");
          e.exports = function(t, e) {
              return function(n, s, a) {
                  var l = e ? e() : {};
                  if (s = i(s, a, 3),
                  o(n))
                      for (var u = -1, c = n.length; ++u < c; ) {
                          var h = n[u];
                          t(l, h, s(h, u, n), n)
                      }
                  else
                      r(n, function(e, n, i) {
                          t(l, e, s(e, n, i), i)
                      });
                  return l
              }
          }
      }
      , {
          "../lang/isArray": 83,
          "./baseCallback": 36,
          "./baseEach": 39
      }],
      60: [function(t, e, n) {
          var i = t("./bindCallback")
            , r = t("./isIterateeCall");
          e.exports = function(t) {
              return function() {
                  var e = arguments.length
                    , n = arguments[0];
                  if (e < 2 || null == n)
                      return n;
                  if (e > 3 && r(arguments[1], arguments[2], arguments[3]) && (e = 2),
                  e > 3 && "function" == typeof arguments[e - 2])
                      var o = i(arguments[--e - 1], arguments[e--], 5);
                  else
                      e > 2 && "function" == typeof arguments[e - 1] && (o = arguments[--e]);
                  for (var s = 0; ++s < e; ) {
                      var a = arguments[s];
                      a && t(n, a, o)
                  }
                  return n
              }
          }
      }
      , {
          "./bindCallback": 56,
          "./isIterateeCall": 70
      }],
      61: [function(t, e, n) {
          (function(n) {
              var i = t("./SetCache")
                , r = t("../utility/constant")
                , o = t("../lang/isNative")
                , s = o(s = n.Set) && s
                , a = o(a = Object.create) && a
                , l = a && s ? function(t) {
                  return new i(t)
              }
              : r(null);
              e.exports = l
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {
          "../lang/isNative": 86,
          "../utility/constant": 102,
          "./SetCache": 31
      }],
      62: [function(t, e, n) {
          e.exports = function(t, e, n, i, r, o, s) {
              var a = -1
                , l = t.length
                , u = e.length
                , c = !0;
              if (l != u && !(r && u > l))
                  return !1;
              for (; c && ++a < l; ) {
                  var h = t[a]
                    , p = e[a];
                  if (c = void 0,
                  i && (c = r ? i(p, h, a) : i(h, p, a)),
                  void 0 === c)
                      if (r)
                          for (var d = u; d-- && (p = e[d],
                          !(c = h && h === p || n(h, p, i, r, o, s))); )
                              ;
                      else
                          c = h && h === p || n(h, p, i, r, o, s)
              }
              return !!c
          }
      }
      , {}],
      63: [function(t, e, n) {
          var i = "[object Boolean]"
            , r = "[object Date]"
            , o = "[object Error]"
            , s = "[object Number]"
            , a = "[object RegExp]"
            , l = "[object String]";
          e.exports = function(t, e, n) {
              switch (n) {
              case i:
              case r:
                  return +t == +e;
              case o:
                  return t.name == e.name && t.message == e.message;
              case s:
                  return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
              case a:
              case l:
                  return t == e + ""
              }
              return !1
          }
      }
      , {}],
      64: [function(t, e, n) {
          var i = t("../object/keys")
            , r = Object.prototype.hasOwnProperty;
          e.exports = function(t, e, n, o, s, a, l) {
              var u = i(t)
                , c = u.length;
              if (c != i(e).length && !s)
                  return !1;
              for (var h, p = -1; ++p < c; ) {
                  var d = u[p]
                    , f = r.call(e, d);
                  if (f) {
                      var m = t[d]
                        , v = e[d];
                      f = void 0,
                      o && (f = s ? o(v, m, d) : o(m, v, d)),
                      void 0 === f && (f = m && m === v || n(m, v, o, s, a, l))
                  }
                  if (!f)
                      return !1;
                  h || (h = "constructor" == d)
              }
              if (!h) {
                  var y = t.constructor
                    , g = e.constructor;
                  if (y != g && "constructor"in t && "constructor"in e && !("function" == typeof y && y instanceof y && "function" == typeof g && g instanceof g))
                      return !1
              }
              return !0
          }
      }
      , {
          "../object/keys": 92
      }],
      65: [function(t, e, n) {
          var i = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
              "`": "&#96;"
          };
          e.exports = function(t) {
              return i[t]
          }
      }
      , {}],
      66: [function(t, e, n) {
          var i = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029"
          };
          e.exports = function(t) {
              return "\\" + i[t]
          }
      }
      , {}],
      67: [function(t, e, n) {
          e.exports = function(t, e, n) {
              for (var i = t.length, r = n ? e || i : (e || 0) - 1; n ? r-- : ++r < i; ) {
                  var o = t[r];
                  if (o != o)
                      return r
              }
              return -1
          }
      }
      , {}],
      68: [function(t, e, n) {
          var i = t("./baseSetData")
            , r = t("../lang/isNative")
            , o = t("../support")
            , s = /^\s*function[ \n\r\t]+\w/
            , a = /\bthis\b/
            , l = Function.prototype.toString;
          e.exports = function(t) {
              var e = !(o.funcNames ? t.name : o.funcDecomp);
              if (!e) {
                  var n = l.call(t);
                  o.funcNames || (e = !s.test(n)),
                  e || (e = a.test(n) || r(t),
                  i(t, e))
              }
              return e
          }
      }
      , {
          "../lang/isNative": 86,
          "../support": 100,
          "./baseSetData": 53
      }],
      69: [function(t, e, n) {
          var i = Math.pow(2, 53) - 1;
          e.exports = function(t, e) {
              return e = null == e ? i : e,
              (t = +t) > -1 && t % 1 == 0 && t < e
          }
      }
      , {}],
      70: [function(t, e, n) {
          var i = t("./isIndex")
            , r = t("./isLength")
            , o = t("../lang/isObject");
          e.exports = function(t, e, n) {
              if (!o(n))
                  return !1;
              var s = typeof e;
              if ("number" == s)
                  var a = n.length
                    , l = r(a) && i(e, a);
              else
                  l = "string" == s && e in n;
              var u = n[e];
              return l && (t == t ? t === u : u != u)
          }
      }
      , {
          "../lang/isObject": 87,
          "./isIndex": 69,
          "./isLength": 71
      }],
      71: [function(t, e, n) {
          var i = Math.pow(2, 53) - 1;
          e.exports = function(t) {
              return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
          }
      }
      , {}],
      72: [function(t, e, n) {
          e.exports = function(t) {
              return t && "object" == typeof t || !1
          }
      }
      , {}],
      73: [function(t, e, n) {
          var i = t("../lang/isObject");
          e.exports = function(t) {
              return t == t && (0 === t ? 1 / t > 0 : !i(t))
          }
      }
      , {
          "../lang/isObject": 87
      }],
      74: [function(t, e, n) {
          (function(n) {
              var i = t("../lang/isNative")(i = n.WeakMap) && i
                , r = i && new i;
              e.exports = r
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {
          "../lang/isNative": 86
      }],
      75: [function(t, e, n) {
          var i = t("./toObject");
          e.exports = function(t, e) {
              t = i(t);
              for (var n = -1, r = e.length, o = {}; ++n < r; ) {
                  var s = e[n];
                  s in t && (o[s] = t[s])
              }
              return o
          }
      }
      , {
          "./toObject": 81
      }],
      76: [function(t, e, n) {
          var i = t("./baseForIn");
          e.exports = function(t, e) {
              var n = {};
              return i(t, function(t, i, r) {
                  e(t, i, r) && (n[i] = t)
              }),
              n
          }
      }
      , {
          "./baseForIn": 43
      }],
      77: [function(t, e, n) {
          e.exports = /<%-([\s\S]+?)%>/g
      }
      , {}],
      78: [function(t, e, n) {
          e.exports = /<%([\s\S]+?)%>/g
      }
      , {}],
      79: [function(t, e, n) {
          e.exports = /<%=([\s\S]+?)%>/g
      }
      , {}],
      80: [function(t, e, n) {
          var i = t("../lang/isArguments")
            , r = t("../lang/isArray")
            , o = t("./isIndex")
            , s = t("./isLength")
            , a = t("../object/keysIn")
            , l = t("../support")
            , u = Object.prototype.hasOwnProperty;
          e.exports = function(t) {
              for (var e = a(t), n = e.length, c = n && t.length, h = c && s(c) && (r(t) || l.nonEnumArgs && i(t)), p = -1, d = []; ++p < n; ) {
                  var f = e[p];
                  (h && o(f, c) || u.call(t, f)) && d.push(f)
              }
              return d
          }
      }
      , {
          "../lang/isArguments": 82,
          "../lang/isArray": 83,
          "../object/keysIn": 93,
          "../support": 100,
          "./isIndex": 69,
          "./isLength": 71
      }],
      81: [function(t, e, n) {
          var i = t("../lang/isObject");
          e.exports = function(t) {
              return i(t) ? t : Object(t)
          }
      }
      , {
          "../lang/isObject": 87
      }],
      82: [function(t, e, n) {
          var i = t("../internal/isLength")
            , r = t("../internal/isObjectLike")
            , o = "[object Arguments]"
            , s = Object.prototype.toString;
          e.exports = function(t) {
              var e = r(t) ? t.length : void 0;
              return i(e) && s.call(t) == o || !1
          }
      }
      , {
          "../internal/isLength": 71,
          "../internal/isObjectLike": 72
      }],
      83: [function(t, e, n) {
          var i = t("../internal/isLength")
            , r = t("./isNative")
            , o = t("../internal/isObjectLike")
            , s = Object.prototype.toString
            , a = r(a = Array.isArray) && a
            , l = a || function(t) {
              return o(t) && i(t.length) && "[object Array]" == s.call(t) || !1
          }
          ;
          e.exports = l
      }
      , {
          "../internal/isLength": 71,
          "../internal/isObjectLike": 72,
          "./isNative": 86
      }],
      84: [function(t, e, n) {
          var i = t("../internal/baseIsEqual")
            , r = t("../internal/bindCallback")
            , o = t("../internal/isStrictComparable");
          e.exports = function(t, e, n, s) {
              if (!(n = "function" == typeof n && r(n, s, 3)) && o(t) && o(e))
                  return t === e;
              var a = n ? n(t, e) : void 0;
              return void 0 === a ? i(t, e, n) : !!a
          }
      }
      , {
          "../internal/baseIsEqual": 46,
          "../internal/bindCallback": 56,
          "../internal/isStrictComparable": 73
      }],
      85: [function(t, e, n) {
          var i = t("../internal/isObjectLike")
            , r = "[object Error]"
            , o = Object.prototype.toString;
          e.exports = function(t) {
              return i(t) && "string" == typeof t.message && o.call(t) == r || !1
          }
      }
      , {
          "../internal/isObjectLike": 72
      }],
      86: [function(t, e, n) {
          var i = t("../string/escapeRegExp")
            , r = t("../internal/isObjectLike")
            , o = "[object Function]"
            , s = /^\[object .+?Constructor\]$/
            , a = Object.prototype
            , l = Function.prototype.toString
            , u = a.toString
            , c = RegExp("^" + i(u).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          e.exports = function(t) {
              return null != t && (u.call(t) == o ? c.test(l.call(t)) : r(t) && s.test(t) || !1)
          }
      }
      , {
          "../internal/isObjectLike": 72,
          "../string/escapeRegExp": 97
      }],
      87: [function(t, e, n) {
          e.exports = function(t) {
              var e = typeof t;
              return "function" == e || t && "object" == e || !1
          }
      }
      , {}],
      88: [function(t, e, n) {
          var i = t("../internal/isObjectLike")
            , r = "[object String]"
            , o = Object.prototype.toString;
          e.exports = function(t) {
              return "string" == typeof t || i(t) && o.call(t) == r || !1
          }
      }
      , {
          "../internal/isObjectLike": 72
      }],
      89: [function(t, e, n) {
          var i = t("../internal/isLength")
            , r = t("../internal/isObjectLike")
            , o = {};
          o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0,
          o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
          var s = Object.prototype.toString;
          e.exports = function(t) {
              return r(t) && i(t.length) && o[s.call(t)] || !1
          }
      }
      , {
          "../internal/isLength": 71,
          "../internal/isObjectLike": 72
      }],
      90: [function(t, e, n) {
          var i = t("../internal/baseAssign")
            , r = t("../internal/createAssigner")(i);
          e.exports = r
      }
      , {
          "../internal/baseAssign": 35,
          "../internal/createAssigner": 60
      }],
      91: [function(t, e, n) {
          e.exports = t("./assign")
      }
      , {
          "./assign": 90
      }],
      92: [function(t, e, n) {
          var i = t("../internal/isLength")
            , r = t("../lang/isNative")
            , o = t("../lang/isObject")
            , s = t("../internal/shimKeys")
            , a = r(a = Object.keys) && a
            , l = a ? function(t) {
              if (t)
                  var e = t.constructor
                    , n = t.length;
              return "function" == typeof e && e.prototype === t || "function" != typeof t && n && i(n) ? s(t) : o(t) ? a(t) : []
          }
          : s;
          e.exports = l
      }
      , {
          "../internal/isLength": 71,
          "../internal/shimKeys": 80,
          "../lang/isNative": 86,
          "../lang/isObject": 87
      }],
      93: [function(t, e, n) {
          var i = t("../lang/isArguments")
            , r = t("../lang/isArray")
            , o = t("../internal/isIndex")
            , s = t("../internal/isLength")
            , a = t("../lang/isObject")
            , l = t("../support")
            , u = Object.prototype.hasOwnProperty;
          e.exports = function(t) {
              if (null == t)
                  return [];
              a(t) || (t = Object(t));
              var e = t.length;
              e = e && s(e) && (r(t) || l.nonEnumArgs && i(t)) && e || 0;
              for (var n = t.constructor, c = -1, h = "function" == typeof n && n.prototype === t, p = Array(e), d = e > 0; ++c < e; )
                  p[c] = c + "";
              for (var f in t)
                  d && o(f, e) || "constructor" == f && (h || !u.call(t, f)) || p.push(f);
              return p
          }
      }
      , {
          "../internal/isIndex": 69,
          "../internal/isLength": 71,
          "../lang/isArguments": 82,
          "../lang/isArray": 83,
          "../lang/isObject": 87,
          "../support": 100
      }],
      94: [function(t, e, n) {
          var i = t("../internal/baseFlatten")
            , r = t("../internal/bindCallback")
            , o = t("../internal/pickByArray")
            , s = t("../internal/pickByCallback");
          e.exports = function(t, e, n) {
              return null == t ? {} : "function" == typeof e ? s(t, r(e, n, 3)) : o(t, i(arguments, !1, !1, 1))
          }
      }
      , {
          "../internal/baseFlatten": 41,
          "../internal/bindCallback": 56,
          "../internal/pickByArray": 75,
          "../internal/pickByCallback": 76
      }],
      95: [function(t, e, n) {
          var i = t("../internal/baseValues")
            , r = t("./keys");
          e.exports = function(t) {
              return i(t, r(t))
          }
      }
      , {
          "../internal/baseValues": 55,
          "./keys": 92
      }],
      96: [function(t, e, n) {
          var i = t("../internal/baseToString")
            , r = t("../internal/escapeHtmlChar")
            , o = /[&<>"'`]/g
            , s = RegExp(o.source);
          e.exports = function(t) {
              return (t = i(t)) && s.test(t) ? t.replace(o, r) : t
          }
      }
      , {
          "../internal/baseToString": 54,
          "../internal/escapeHtmlChar": 65
      }],
      97: [function(t, e, n) {
          var i = t("../internal/baseToString")
            , r = /[.*+?^${}()|[\]\/\\]/g
            , o = RegExp(r.source);
          e.exports = function(t) {
              return (t = i(t)) && o.test(t) ? t.replace(r, "\\$&") : t
          }
      }
      , {
          "../internal/baseToString": 54
      }],
      98: [function(t, e, n) {
          var i = t("../internal/assignOwnDefaults")
            , r = t("../utility/attempt")
            , o = t("../internal/baseAssign")
            , s = t("../internal/baseToString")
            , a = t("../internal/baseValues")
            , l = t("../internal/escapeStringChar")
            , u = t("../lang/isError")
            , c = t("../internal/isIterateeCall")
            , h = t("../object/keys")
            , p = t("../internal/reInterpolate")
            , d = t("./templateSettings")
            , f = /\b__p \+= '';/g
            , m = /\b(__p \+=) '' \+/g
            , v = /(__e\(.*?\)|\b__t\)) \+\n'';/g
            , y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g
            , g = /($^)/
            , _ = /['\n\r\u2028\u2029\\]/g;
          e.exports = function(t, e, n) {
              var b = d.imports._.templateSettings || d;
              n && c(t, e, n) && (e = n = null),
              t = s(t),
              e = o(o({}, n || e), b, i);
              var w, x, S = o(o({}, e.imports), b.imports, i), M = h(S), E = a(S, M), T = 0, D = e.interpolate || g, I = "__p += '", C = RegExp((e.escape || g).source + "|" + D.source + "|" + (D === p ? y : g).source + "|" + (e.evaluate || g).source + "|$", "g"), L = "sourceURL"in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
              t.replace(C, function(e, n, i, r, o, s) {
                  return i || (i = r),
                  I += t.slice(T, s).replace(_, l),
                  n && (w = !0,
                  I += "' +\n__e(" + n + ") +\n'"),
                  o && (x = !0,
                  I += "';\n" + o + ";\n__p += '"),
                  i && (I += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"),
                  T = s + e.length,
                  e
              }),
              I += "';\n";
              var F = e.variable;
              F || (I = "with (obj) {\n" + I + "\n}\n"),
              I = (x ? I.replace(f, "") : I).replace(m, "$1").replace(v, "$1;"),
              I = "function(" + (F || "obj") + ") {\n" + (F ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (x ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + I + "return __p\n}";
              var k = r(function() {
                  return Function(M, L + "return " + I).apply(void 0, E)
              });
              if (k.source = I,
              u(k))
                  throw k;
              return k
          }
      }
      , {
          "../internal/assignOwnDefaults": 34,
          "../internal/baseAssign": 35,
          "../internal/baseToString": 54,
          "../internal/baseValues": 55,
          "../internal/escapeStringChar": 66,
          "../internal/isIterateeCall": 70,
          "../internal/reInterpolate": 79,
          "../lang/isError": 85,
          "../object/keys": 92,
          "../utility/attempt": 101,
          "./templateSettings": 99
      }],
      99: [function(t, e, n) {
          var i = t("./escape")
            , r = {
              escape: t("../internal/reEscape"),
              evaluate: t("../internal/reEvaluate"),
              interpolate: t("../internal/reInterpolate"),
              variable: "",
              imports: {
                  _: {
                      escape: i
                  }
              }
          };
          e.exports = r
      }
      , {
          "../internal/reEscape": 77,
          "../internal/reEvaluate": 78,
          "../internal/reInterpolate": 79,
          "./escape": 96
      }],
      100: [function(t, e, n) {
          (function(n) {
              var i = t("./lang/isNative")
                , r = /\bthis\b/
                , o = Object.prototype
                , s = (s = n.window) && s.document
                , a = o.propertyIsEnumerable
                , l = {};
              !function(t) {
                  l.funcDecomp = !i(n.WinRTError) && r.test(function() {
                      return this
                  }),
                  l.funcNames = "string" == typeof Function.name;
                  try {
                      l.dom = 11 === s.createDocumentFragment().nodeType
                  } catch (t) {
                      l.dom = !1
                  }
                  try {
                      l.nonEnumArgs = !a.call(arguments, 1)
                  } catch (t) {
                      l.nonEnumArgs = !0
                  }
              }(0, 0),
              e.exports = l
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {
          "./lang/isNative": 86
      }],
      101: [function(t, e, n) {
          var i = t("../lang/isError");
          e.exports = function() {
              var t = arguments.length
                , e = arguments[0];
              try {
                  for (var n = Array(t ? t - 1 : 0); --t > 0; )
                      n[t - 1] = arguments[t];
                  return e.apply(void 0, n)
              } catch (t) {
                  return i(t) ? t : new Error(t)
              }
          }
      }
      , {
          "../lang/isError": 85
      }],
      102: [function(t, e, n) {
          e.exports = function(t) {
              return function() {
                  return t
              }
          }
      }
      , {}],
      103: [function(t, e, n) {
          e.exports = function(t) {
              return t
          }
      }
      , {}],
      104: [function(e, n, i) {
          var r, o;
          r = this,
          o = function() {
              var t = !0;
              function e(e) {
                  function n(t) {
                      var n = e.match(t);
                      return n && n.length > 1 && n[1] || ""
                  }
                  function i(t) {
                      var n = e.match(t);
                      return n && n.length > 1 && n[2] || ""
                  }
                  var r, s = n(/(ipod|iphone|ipad)/i).toLowerCase(), a = !/like android/i.test(e) && /android/i.test(e), l = /nexus\s*[0-6]\s*/i.test(e), u = !l && /nexus\s*[0-9]+/i.test(e), c = /CrOS/.test(e), h = /silk/i.test(e), p = /sailfish/i.test(e), d = /tizen/i.test(e), f = /(web|hpw)(o|0)s/i.test(e), m = /windows phone/i.test(e), v = (/SamsungBrowser/i.test(e),
                  !m && /windows/i.test(e)), y = !s && !h && /macintosh/i.test(e), g = !a && !p && !d && !f && /linux/i.test(e), _ = i(/edg([ea]|ios)\/(\d+(\.\d+)?)/i), b = n(/version\/(\d+(\.\d+)?)/i), w = /tablet/i.test(e) && !/tablet pc/i.test(e), x = !w && /[^-]mobi/i.test(e), S = /xbox/i.test(e);
                  /opera/i.test(e) ? r = {
                      name: "Opera",
                      opera: t,
                      version: b || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                  } : /opr\/|opios/i.test(e) ? r = {
                      name: "Opera",
                      opera: t,
                      version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || b
                  } : /SamsungBrowser/i.test(e) ? r = {
                      name: "Samsung Internet for Android",
                      samsungBrowser: t,
                      version: b || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                  } : /Whale/i.test(e) ? r = {
                      name: "NAVER Whale browser",
                      whale: t,
                      version: n(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
                  } : /MZBrowser/i.test(e) ? r = {
                      name: "MZ Browser",
                      mzbrowser: t,
                      version: n(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
                  } : /coast/i.test(e) ? r = {
                      name: "Opera Coast",
                      coast: t,
                      version: b || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                  } : /focus/i.test(e) ? r = {
                      name: "Focus",
                      focus: t,
                      version: n(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
                  } : /yabrowser/i.test(e) ? r = {
                      name: "Yandex Browser",
                      yandexbrowser: t,
                      version: b || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                  } : /ucbrowser/i.test(e) ? r = {
                      name: "UC Browser",
                      ucbrowser: t,
                      version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                  } : /mxios/i.test(e) ? r = {
                      name: "Maxthon",
                      maxthon: t,
                      version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                  } : /epiphany/i.test(e) ? r = {
                      name: "Epiphany",
                      epiphany: t,
                      version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                  } : /puffin/i.test(e) ? r = {
                      name: "Puffin",
                      puffin: t,
                      version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                  } : /sleipnir/i.test(e) ? r = {
                      name: "Sleipnir",
                      sleipnir: t,
                      version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                  } : /k-meleon/i.test(e) ? r = {
                      name: "K-Meleon",
                      kMeleon: t,
                      version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                  } : m ? (r = {
                      name: "Windows Phone",
                      osname: "Windows Phone",
                      windowsphone: t
                  },
                  _ ? (r.msedge = t,
                  r.version = _) : (r.msie = t,
                  r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? r = {
                      name: "Internet Explorer",
                      msie: t,
                      version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                  } : c ? r = {
                      name: "Chrome",
                      osname: "Chrome OS",
                      chromeos: t,
                      chromeBook: t,
                      chrome: t,
                      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                  } : /edg([ea]|ios)/i.test(e) ? r = {
                      name: "Microsoft Edge",
                      msedge: t,
                      version: _
                  } : /vivaldi/i.test(e) ? r = {
                      name: "Vivaldi",
                      vivaldi: t,
                      version: n(/vivaldi\/(\d+(\.\d+)?)/i) || b
                  } : p ? r = {
                      name: "Sailfish",
                      osname: "Sailfish OS",
                      sailfish: t,
                      version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                  } : /seamonkey\//i.test(e) ? r = {
                      name: "SeaMonkey",
                      seamonkey: t,
                      version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                  } : /firefox|iceweasel|fxios/i.test(e) ? (r = {
                      name: "Firefox",
                      firefox: t,
                      version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                  },
                  /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (r.firefoxos = t,
                  r.osname = "Firefox OS")) : h ? r = {
                      name: "Amazon Silk",
                      silk: t,
                      version: n(/silk\/(\d+(\.\d+)?)/i)
                  } : /phantom/i.test(e) ? r = {
                      name: "PhantomJS",
                      phantom: t,
                      version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                  } : /slimerjs/i.test(e) ? r = {
                      name: "SlimerJS",
                      slimer: t,
                      version: n(/slimerjs\/(\d+(\.\d+)?)/i)
                  } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? r = {
                      name: "BlackBerry",
                      osname: "BlackBerry OS",
                      blackberry: t,
                      version: b || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                  } : f ? (r = {
                      name: "WebOS",
                      osname: "WebOS",
                      webos: t,
                      version: b || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                  },
                  /touchpad\//i.test(e) && (r.touchpad = t)) : /bada/i.test(e) ? r = {
                      name: "Bada",
                      osname: "Bada",
                      bada: t,
                      version: n(/dolfin\/(\d+(\.\d+)?)/i)
                  } : d ? r = {
                      name: "Tizen",
                      osname: "Tizen",
                      tizen: t,
                      version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
                  } : /qupzilla/i.test(e) ? r = {
                      name: "QupZilla",
                      qupzilla: t,
                      version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
                  } : /chromium/i.test(e) ? r = {
                      name: "Chromium",
                      chromium: t,
                      version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || b
                  } : /chrome|crios|crmo/i.test(e) ? r = {
                      name: "Chrome",
                      chrome: t,
                      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                  } : a ? r = {
                      name: "Android",
                      version: b
                  } : /safari|applewebkit/i.test(e) ? (r = {
                      name: "Safari",
                      safari: t
                  },
                  b && (r.version = b)) : s ? (r = {
                      name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
                  },
                  b && (r.version = b)) : r = /googlebot/i.test(e) ? {
                      name: "Googlebot",
                      googlebot: t,
                      version: n(/googlebot\/(\d+(\.\d+))/i) || b
                  } : {
                      name: n(/^(.*)\/(.*) /),
                      version: i(/^(.*)\/(.*) /)
                  },
                  !r.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (r.name = r.name || "Blink",
                  r.blink = t) : (r.name = r.name || "Webkit",
                  r.webkit = t),
                  !r.version && b && (r.version = b)) : !r.opera && /gecko\//i.test(e) && (r.name = r.name || "Gecko",
                  r.gecko = t,
                  r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)),
                  r.windowsphone || !a && !r.silk ? !r.windowsphone && s ? (r[s] = t,
                  r.ios = t,
                  r.osname = "iOS") : y ? (r.mac = t,
                  r.osname = "macOS") : S ? (r.xbox = t,
                  r.osname = "Xbox") : v ? (r.windows = t,
                  r.osname = "Windows") : g && (r.linux = t,
                  r.osname = "Linux") : (r.android = t,
                  r.osname = "Android");
                  var M = "";
                  r.windows ? M = function(t) {
                      switch (t) {
                      case "NT":
                          return "NT";
                      case "XP":
                          return "XP";
                      case "NT 5.0":
                          return "2000";
                      case "NT 5.1":
                          return "XP";
                      case "NT 5.2":
                          return "2003";
                      case "NT 6.0":
                          return "Vista";
                      case "NT 6.1":
                          return "7";
                      case "NT 6.2":
                          return "8";
                      case "NT 6.3":
                          return "8.1";
                      case "NT 10.0":
                          return "10";
                      default:
                          return
                      }
                  }(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? M = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? M = (M = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? M = (M = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? M = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? M = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? M = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? M = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (M = n(/tizen[\/\s](\d+(\.\d+)*)/i)),
                  M && (r.osversion = M);
                  var E = !r.windows && M.split(".")[0];
                  return w || u || "ipad" == s || a && (3 == E || E >= 4 && !x) || r.silk ? r.tablet = t : (x || "iphone" == s || "ipod" == s || a || l || r.blackberry || r.webos || r.bada) && (r.mobile = t),
                  r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.whale && 1 === o([r.version, "1.0"]) || r.mzbrowser && 1 === o([r.version, "6.0"]) || r.focus && 1 === o([r.version, "1.0"]) || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = t : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = t : r.x = t,
                  r
              }
              var n = e("undefined" != typeof navigator && navigator.userAgent || "");
              function i(t) {
                  return t.split(".").length
              }
              function r(t, e) {
                  var n, i = [];
                  if (Array.prototype.map)
                      return Array.prototype.map.call(t, e);
                  for (n = 0; n < t.length; n++)
                      i.push(e(t[n]));
                  return i
              }
              function o(t) {
                  for (var e = Math.max(i(t[0]), i(t[1])), n = r(t, function(t) {
                      var n = e - i(t);
                      return r((t += new Array(n + 1).join(".0")).split("."), function(t) {
                          return new Array(20 - t.length).join("0") + t
                      }).reverse()
                  }); --e >= 0; ) {
                      if (n[0][e] > n[1][e])
                          return 1;
                      if (n[0][e] !== n[1][e])
                          return -1;
                      if (0 === e)
                          return 0
                  }
              }
              function s(t, i, r) {
                  var s = n;
                  "string" == typeof i && (r = i,
                  i = void 0),
                  void 0 === i && (i = !1),
                  r && (s = e(r));
                  var a = "" + s.version;
                  for (var l in t)
                      if (t.hasOwnProperty(l) && s[l]) {
                          if ("string" != typeof t[l])
                              throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(t));
                          return o([a, t[l]]) < 0
                      }
                  return i
              }
              return n.test = function(t) {
                  for (var e = 0; e < t.length; ++e) {
                      var i = t[e];
                      if ("string" == typeof i && i in n)
                          return !0
                  }
                  return !1
              }
              ,
              n.isUnsupportedBrowser = s,
              n.compareVersions = o,
              n.check = function(t, e, n) {
                  return !s(t, e, n)
              }
              ,
              n._detect = e,
              n.detect = e,
              n
          }
          ,
          void 0 !== n && n.exports ? n.exports = o() : "function" == typeof t && t.amd ? t("bowser", o) : r.bowser = o()
      }
      , {}],
      105: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./support/Css")
            , o = t("./util/positionAbsolutely")
            , s = t("./util/dom").setTransform
            , a = t("./util/clearOwnProperties");
          function l(t, e, n, i, o) {
              if ((o = o || {}).perspective = o.perspective || {},
              o.perspective.extraTransforms = null != o.perspective.extraTransforms ? o.perspective.extraTransforms : "",
              (o.perspective.radius || o.perspective.extraTransforms) && !r())
                  throw new Error("CSS transforms on hotspots are not supported on this browser");
              this._domElement = t,
              this._parentDomElement = e,
              this._view = n,
              this._coords = {},
              this._perspective = {},
              this.setPosition(i),
              this._parentDomElement.appendChild(this._domElement),
              this.setPerspective(o.perspective),
              this._visible = !0,
              this._position = {
                  x: 0,
                  y: 0
              }
          }
          i(l),
          l.prototype.destroy = function() {
              this._parentDomElement.removeChild(this._domElement),
              a(this)
          }
          ,
          l.prototype.domElement = function() {
              return this._domElement
          }
          ,
          l.prototype.position = function() {
              return this._coords
          }
          ,
          l.prototype.setPosition = function(t) {
              for (var e in t)
                  this._coords[e] = t[e];
              this._update()
          }
          ,
          l.prototype.perspective = function() {
              return this._perspective
          }
          ,
          l.prototype.setPerspective = function(t) {
              for (var e in t)
                  this._perspective[e] = t[e];
              this._update()
          }
          ,
          l.prototype.show = function() {
              this._visible || (this._visible = !0,
              this._update())
          }
          ,
          l.prototype.hide = function() {
              this._visible && (this._visible = !1,
              this._update())
          }
          ,
          l.prototype._update = function() {
              var t, e, n = this._domElement, i = this._coords, r = this._position, o = !1;
              if (this._visible) {
                  var s = this._view;
                  this._perspective.radius ? (o = !0,
                  this._setEmbeddedPosition(s, i)) : (s.coordinatesToScreen(i, r),
                  t = r.x,
                  e = r.y,
                  null != t && null != e && (o = !0,
                  this._setPosition(t, e)))
              }
              o ? (n.style.display = "block",
              n.style.position = "absolute") : (n.style.display = "none",
              n.style.position = "")
          }
          ,
          l.prototype._setEmbeddedPosition = function(t, e) {
              var n = t.coordinatesToPerspectiveTransform(e, this._perspective.radius, this._perspective.extraTransforms);
              s(this._domElement, n)
          }
          ,
          l.prototype._setPosition = function(t, e) {
              o(this._domElement, t, e, this._perspective.extraTransforms)
          }
          ,
          e.exports = l
      }
      , {
          "./support/Css": 172,
          "./util/clearOwnProperties": 181,
          "./util/dom": 190,
          "./util/positionAbsolutely": 201,
          "minimal-event-emitter": 209
      }],
      106: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Hotspot")
            , o = t("./util/calcRect")
            , s = t("./support/cssPointerEvents")
            , a = t("./util/positionAbsolutely")
            , l = t("./util/dom").setAbsolute
            , u = t("./util/dom").setOverflowHidden
            , c = t("./util/dom").setOverflowVisible
            , h = t("./util/dom").setNullSize
            , p = t("./util/dom").setPixelSize
            , d = t("./util/dom").setWithVendorPrefix("pointer-events")
            , f = t("./util/clearOwnProperties");
          function m(t, e, n, i, r) {
              r = r || {},
              this._parentDomElement = t,
              this._stage = e,
              this._view = n,
              this._renderLoop = i,
              this._hotspots = [],
              this._visible = !0,
              this._rect = r.rect,
              this._visibilityOrRectChanged = !0,
              this._stageWidth = null,
              this._stageHeight = null,
              this._tmpRect = {},
              this._hotspotContainerWrapper = document.createElement("div"),
              l(this._hotspotContainerWrapper),
              d(this._hotspotContainerWrapper, "none"),
              this._parentDomElement.appendChild(this._hotspotContainerWrapper),
              this._hotspotContainer = document.createElement("div"),
              l(this._hotspotContainer),
              d(this._hotspotContainer, "all"),
              this._hotspotContainerWrapper.appendChild(this._hotspotContainer),
              this._updateHandler = this._update.bind(this),
              this._renderLoop.addEventListener("afterRender", this._updateHandler)
          }
          i(m),
          m.prototype.destroy = function() {
              for (; this._hotspots.length; )
                  this.destroyHotspot(this._hotspots[0]);
              this._parentDomElement.removeChild(this._hotspotContainerWrapper),
              this._renderLoop.removeEventListener("afterRender", this._updateHandler),
              f(this)
          }
          ,
          m.prototype.domElement = function() {
              return this._hotspotContainer
          }
          ,
          m.prototype.setRect = function(t) {
              t && !s() && "undefined" != typeof console && console.warn("Using a rect effect is not fully supported on this browser. Hotspots may not be shown."),
              this._rect = t,
              this._visibilityOrRectChanged = !0
          }
          ,
          m.prototype.rect = function() {
              return this._rect
          }
          ,
          m.prototype.createHotspot = function(t, e, n) {
              e = e || {};
              var i = new r(t,this._hotspotContainer,this._view,e,n);
              return this._hotspots.push(i),
              i._update(),
              this.emit("hotspotsChange"),
              i
          }
          ,
          m.prototype.hasHotspot = function(t) {
              return this._hotspots.indexOf(t) >= 0
          }
          ,
          m.prototype.listHotspots = function() {
              return [].concat(this._hotspots)
          }
          ,
          m.prototype.destroyHotspot = function(t) {
              var e = this._hotspots.indexOf(t);
              if (e < 0)
                  throw new Error("No such hotspot");
              this._hotspots.splice(e, 1),
              t.destroy(),
              this.emit("hotspotsChange")
          }
          ,
          m.prototype.hide = function() {
              this._visible && (this._visible = !1,
              this._visibilityOrRectChanged = !0,
              this._update())
          }
          ,
          m.prototype.show = function() {
              this._visible || (this._visible = !0,
              this._visibilityOrRectChanged = !0,
              this._update())
          }
          ,
          m.prototype._update = function() {
              var t = this._hotspotContainerWrapper
                , e = this._stage.width()
                , n = this._stage.height()
                , i = this._tmpRect;
              if (this._visibilityOrRectChanged || this._rect && (e !== this._stageWidth || n !== this._stageHeight)) {
                  var r = this._visible && !(this._rect && !s());
                  t.style.display = r ? "block" : "none",
                  r && (this._rect ? (o(e, n, this._rect, i),
                  a(t, e * i.x, n * i.y),
                  p(t, e * i.width, n * i.height),
                  u(t)) : (a(t, 0, 0),
                  h(t),
                  c(t))),
                  this._stageWidth = e,
                  this._stageHeight = n,
                  this._visibilityOrRectChanged = !1
              }
              for (var l = 0; l < this._hotspots.length; l++)
                  this._hotspots[l]._update()
          }
          ,
          e.exports = m
      }
      , {
          "./Hotspot": 105,
          "./support/cssPointerEvents": 175,
          "./util/calcRect": 177,
          "./util/clearOwnProperties": 181,
          "./util/dom": 190,
          "./util/positionAbsolutely": 201,
          "minimal-event-emitter": 209
      }],
      107: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./util/extend")
            , o = t("./util/clearOwnProperties");
          function s(t, e, n, i, r) {
              r = r || {};
              var o = this;
              this._source = t,
              this._geometry = e,
              this._view = n,
              this._textureStore = i,
              this._effects = r.effects || {},
              this._fixedLevelIndex = null,
              this._viewChangeHandler = function() {
                  o.emit("viewChange", o.view())
              }
              ,
              this._view.addEventListener("change", this._viewChangeHandler),
              this._textureStoreChangeHandler = function() {
                  o.emit("textureStoreChange", o.textureStore())
              }
              ,
              this._textureStore.addEventListener("textureLoad", this._textureStoreChangeHandler),
              this._textureStore.addEventListener("textureError", this._textureStoreChangeHandler),
              this._textureStore.addEventListener("textureInvalid", this._textureStoreChangeHandler)
          }
          i(s),
          s.prototype.destroy = function() {
              this._view.removeEventListener("change", this._viewChangeHandler),
              this._textureStore.removeEventListener("textureLoad", this._textureStoreChangeHandler),
              this._textureStore.removeEventListener("textureError", this._textureStoreChangeHandler),
              this._textureStore.removeEventListener("textureInvalid", this._textureStoreChangeHandler),
              o(this)
          }
          ,
          s.prototype.source = function() {
              return this._source
          }
          ,
          s.prototype.geometry = function() {
              return this._geometry
          }
          ,
          s.prototype.view = function() {
              return this._view
          }
          ,
          s.prototype.textureStore = function() {
              return this._textureStore
          }
          ,
          s.prototype.effects = function() {
              return this._effects
          }
          ,
          s.prototype.setEffects = function(t) {
              this._effects = t,
              this.emit("effectsChange", this._effects)
          }
          ,
          s.prototype.mergeEffects = function(t) {
              r(this._effects, t),
              this.emit("effectsChange", this._effects)
          }
          ,
          s.prototype.fixedLevel = function() {
              return this._fixedLevelIndex
          }
          ,
          s.prototype.setFixedLevel = function(t) {
              if (t !== this._fixedLevelIndex) {
                  if (null != t && (t >= this._geometry.levelList.length || t < 0))
                      throw new Error("Level index out of range: " + t);
                  this._fixedLevelIndex = t,
                  this.emit("fixedLevelChange", this._fixedLevelIndex)
              }
          }
          ,
          s.prototype._selectLevel = function() {
              return null != this._fixedLevelIndex ? this._geometry.levelList[this._fixedLevelIndex] : this._view.selectLevel(this._geometry.selectableLevelList)
          }
          ,
          s.prototype.visibleTiles = function(t) {
              var e = this._selectLevel();
              return this._geometry.visibleTiles(this._view, e, t)
          }
          ,
          s.prototype.pinLevel = function(t) {
              for (var e = this._geometry.levelList[t], n = this._geometry.levelTiles(e), i = 0; i < n.length; i++)
                  this._textureStore.pin(n[i])
          }
          ,
          s.prototype.unpinLevel = function(t) {
              for (var e = this._geometry.levelList[t], n = this._geometry.levelTiles(e), i = 0; i < n.length; i++)
                  this._textureStore.unpin(n[i])
          }
          ,
          s.prototype.pinFirstLevel = function() {
              return this.pinLevel(0)
          }
          ,
          s.prototype.unpinFirstLevel = function() {
              return this.unpinLevel(0)
          }
          ,
          e.exports = s
      }
      , {
          "./util/clearOwnProperties": 181,
          "./util/extend": 191,
          "minimal-event-emitter": 209
      }],
      108: [function(t, e, n) {
          "use strict";
          function i(t) {
              this.constructor.super_.apply(this, arguments),
              this.message = t
          }
          t("./util/inherits")(i, Error),
          e.exports = i
      }
      , {
          "./util/inherits": 194
      }],
      109: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./util/clearOwnProperties");
          function o(t) {
              var e = this;
              this._stage = t,
              this._running = !1,
              this._rendering = !1,
              this._requestHandle = null,
              this._boundLoop = this._loop.bind(this),
              this._renderInvalidHandler = function() {
                  e._rendering || e.renderOnNextFrame()
              }
              ,
              this._stage.addEventListener("renderInvalid", this._renderInvalidHandler)
          }
          i(o),
          o.prototype.destroy = function() {
              this.stop(),
              this._stage.removeEventListener("renderInvalid", this._renderInvalidHandler),
              r(this)
          }
          ,
          o.prototype.stage = function() {
              return this._stage
          }
          ,
          o.prototype.start = function() {
              this._running = !0,
              this.renderOnNextFrame()
          }
          ,
          o.prototype.stop = function() {
              this._requestHandle && (window.cancelAnimationFrame(this._requestHandle),
              this._requestHandle = null),
              this._running = !1
          }
          ,
          o.prototype.renderOnNextFrame = function() {
              this._running && !this._requestHandle && (this._requestHandle = window.requestAnimationFrame(this._boundLoop))
          }
          ,
          o.prototype._loop = function() {
              if (!this._running)
                  throw new Error("Render loop running while in stopped state");
              this._requestHandle = null,
              this._rendering = !0,
              this.emit("beforeRender"),
              this._rendering = !1,
              this._stage.render(),
              this.emit("afterRender")
          }
          ,
          e.exports = o
      }
      , {
          "./util/clearOwnProperties": 181,
          "minimal-event-emitter": 209
      }],
      110: [function(t, e, n) {
          "use strict";
          var i = t("./Layer")
            , r = t("./TextureStore")
            , o = t("./HotspotContainer")
            , s = t("minimal-event-emitter")
            , a = t("./util/now")
            , l = t("./util/noop")
            , u = t("./util/type")
            , c = t("./util/defaults")
            , h = t("./util/clearOwnProperties");
          function p(t, e) {
              this._viewer = t,
              this._view = e,
              this._layers = [],
              this._hotspotContainer = new o(t._controlContainer,t.stage(),this._view,t.renderLoop()),
              this._movement = null,
              this._movementStartTime = null,
              this._movementStep = null,
              this._movementParams = null,
              this._movementCallback = null,
              this._updateMovementHandler = this._updateMovement.bind(this),
              this._updateHotspotContainerHandler = this._updateHotspotContainer.bind(this),
              this._viewer.addEventListener("sceneChange", this._updateHotspotContainerHandler),
              this._viewChangeHandler = this.emit.bind(this, "viewChange"),
              this._view.addEventListener("change", this._viewChangeHandler),
              this._updateHotspotContainer()
          }
          s(p),
          p.prototype.destroy = function() {
              this._view.removeEventListener("change", this._viewChangeHandler),
              this._viewer.removeEventListener("sceneChange", this._updateHotspotContainerHandler),
              this._movement && this.stopMovement(),
              this._hotspotContainer.destroy(),
              this.destroyAllLayers(),
              h(this)
          }
          ,
          p.prototype.hotspotContainer = function() {
              return this._hotspotContainer
          }
          ,
          p.prototype.layer = function() {
              return this._layers[0]
          }
          ,
          p.prototype.listLayers = function() {
              return [].concat(this._layers)
          }
          ,
          p.prototype.view = function() {
              return this._view
          }
          ,
          p.prototype.viewer = function() {
              return this._viewer
          }
          ,
          p.prototype.visible = function() {
              return this._viewer.scene() === this
          }
          ,
          p.prototype.createLayer = function(t) {
              var e = (t = t || {}).textureStoreOpts || {}
                , n = t.layerOpts || {}
                , o = t.source
                , s = t.geometry
                , a = this._view
                , l = this._viewer.stage()
                , u = new r(o,l,e)
                , c = new i(o,s,a,u,n);
              return this._layers.push(c),
              t.pinFirstLevel && c.pinFirstLevel(),
              this.emit("layerChange"),
              c
          }
          ,
          p.prototype.destroyLayer = function(t) {
              var e = this._layers.indexOf(t);
              if (e < 0)
                  throw new Error("No such layer in scene");
              this._layers.splice(e, 1),
              this.emit("layerChange"),
              t.textureStore().destroy(),
              t.destroy()
          }
          ,
          p.prototype.destroyAllLayers = function() {
              for (; this._layers.length > 0; )
                  this.destroyLayer(this._layers[0])
          }
          ,
          p.prototype.switchTo = function(t, e) {
              return this._viewer.switchScene(this, t, e)
          }
          ,
          p.prototype.lookTo = function(t, e, n) {
              if (e = e || {},
              n = n || l,
              "object" !== u(t))
                  throw new Error("Target view parameters must be an object");
              var i = null != e.transitionDuration ? e.transitionDuration : 1e3
                , r = null == e.shortest || e.shortest
                , o = this._view
                , s = o.parameters()
                , a = {};
              c(a, t),
              c(a, s),
              r && o.normalizeToClosest && o.normalizeToClosest(a, a);
              var h = this._viewer.controls().enabled();
              this._viewer.controls().disable(),
              this.startMovement(function() {
                  var t = !1;
                  return function(e, n) {
                      if (n >= i && t)
                          return null;
                      var r, o = Math.min(n / i, 1);
                      for (var l in e) {
                          var u = s[l]
                            , c = a[l];
                          e[l] = u + (r = o,
                          ((r *= 2) < 1 ? .5 * r * r : -.5 * (--r * (r - 2) - 1)) * (c - u))
                      }
                      return t = n >= i,
                      e
                  }
              }, function() {
                  h && this._viewer.controls().enable(),
                  n()
              })
          }
          ,
          p.prototype.startMovement = function(t, e) {
              var n = this._viewer.renderLoop();
              this._movement && this.stopMovement();
              var i = t();
              if ("function" != typeof i)
                  throw new Error("Bad movement");
              this._movement = t,
              this._movementStep = i,
              this._movementStartTime = a(),
              this._movementParams = {},
              this._movementCallback = e,
              n.addEventListener("beforeRender", this._updateMovementHandler),
              n.renderOnNextFrame()
          }
          ,
          p.prototype.stopMovement = function() {
              var t = this._viewer.renderLoop();
              this._movementCallback && this._movementCallback(),
              t.removeEventListener("beforeRender", this._updateMovementHandler),
              this._movement = null,
              this._movementStep = null,
              this._movementStartTime = null,
              this._movementParams = null,
              this._movementCallback = null
          }
          ,
          p.prototype.movement = function() {
              return this._movement
          }
          ,
          p.prototype._updateMovement = function() {
              if (!this._movement)
                  throw new Error("Should not call update");
              var t = this._viewer.renderLoop()
                , e = this._view
                , n = a() - this._movementStartTime
                , i = this._movementStep
                , r = this._movementParams;
              null == (r = i(r = e.parameters(r), n)) ? this.stopMovement() : (e.setParameters(r),
              t.renderOnNextFrame())
          }
          ,
          p.prototype._updateHotspotContainer = function() {
              this.visible() ? this._hotspotContainer.show() : this._hotspotContainer.hide()
          }
          ,
          e.exports = p
      }
      , {
          "./HotspotContainer": 106,
          "./Layer": 107,
          "./TextureStore": 111,
          "./util/clearOwnProperties": 181,
          "./util/defaults": 186,
          "./util/noop": 197,
          "./util/now": 198,
          "./util/type": 206,
          "minimal-event-emitter": 209
      }],
      111: [function(t, e, n) {
          "use strict";
          var i = t("./collections/Map")
            , r = t("./collections/Set")
            , o = t("./collections/LruSet")
            , s = t("minimal-event-emitter")
            , a = t("./util/defaults")
            , l = t("./util/retry")
            , u = t("./util/chain")
            , c = t("./util/inherits")
            , h = t("./util/clearOwnProperties")
            , p = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.textureStore
            , d = {
              IDLE: 0,
              START: 1,
              MARK: 2,
              END: 3
          }
            , f = {
              previouslyVisibleCacheSize: 512
          }
            , m = 0;
          function v() {}
          function y(t, e) {
              var n = this
                , i = m++;
              n._id = i,
              n._store = t,
              n._tile = e,
              n._asset = null,
              n._texture = null,
              n._changeHandler = function() {
                  t.emit("textureInvalid", e)
              }
              ;
              var r = t.source()
                , o = t.stage()
                , s = r.loadAsset.bind(r)
                , a = o.createTexture.bind(o)
                , c = u(l(s), a);
              t.emit("textureStartLoad", e),
              p && console.log("loading", i, e),
              n._cancel = c(o, e, function(r, o, s, a) {
                  if (n._cancel = null,
                  r)
                      return s && s.destroy(),
                      a && a.destroy(),
                      void (r instanceof v ? (t.emit("textureCancel", e),
                      p && console.log("cancel", i, e)) : (t.emit("textureError", e, r),
                      p && console.log("error", i, e)));
                  n._texture = a,
                  s.isDynamic() ? (n._asset = s,
                  s.addEventListener("change", n._changeHandler)) : s.destroy(),
                  t.emit("textureLoad", e),
                  p && console.log("load", i, e)
              })
          }
          function g(t, e, n) {
              n = a(n || {}, f),
              this._source = t,
              this._stage = e,
              this._state = d.IDLE,
              this._delimCount = 0,
              this._itemMap = new i,
              this._visible = new r,
              this._previouslyVisible = new o(n.previouslyVisibleCacheSize),
              this._pinMap = new i,
              this._newVisible = new r,
              this._noLongerVisible = [],
              this._visibleAgain = [],
              this._evicted = []
          }
          c(v, Error),
          y.prototype.asset = function() {
              return this._asset
          }
          ,
          y.prototype.texture = function() {
              return this._texture
          }
          ,
          y.prototype.destroy = function() {
              var t = this._id
                , e = this._store
                , n = this._tile
                , i = this._asset
                , r = this._texture
                , o = this._cancel;
              o ? o(new v("Texture load cancelled")) : (i && (i.removeEventListener("change", this._changeHandler),
              i.destroy()),
              r && r.destroy(),
              e.emit("textureUnload", n),
              p && console.log("unload", t, n),
              h(this))
          }
          ,
          s(y),
          s(g),
          g.prototype.destroy = function() {
              this.clear(),
              h(this)
          }
          ,
          g.prototype.stage = function() {
              return this._stage
          }
          ,
          g.prototype.source = function() {
              return this._source
          }
          ,
          g.prototype.clear = function() {
              var t = this;
              t._evicted.length = 0,
              t._itemMap.forEach(function(e) {
                  t._evicted.push(e)
              }),
              t._evicted.forEach(function(e) {
                  t._unloadTile(e)
              }),
              t._itemMap.clear(),
              t._visible.clear(),
              t._previouslyVisible.clear(),
              t._pinMap.clear(),
              t._newVisible.clear(),
              t._noLongerVisible.length = 0,
              t._visibleAgain.length = 0,
              t._evicted.length = 0
          }
          ,
          g.prototype.clearNotPinned = function() {
              var t = this;
              t._evicted.length = 0,
              t._itemMap.forEach(function(e) {
                  t._pinMap.has(e) || t._evicted.push(e)
              }),
              t._evicted.forEach(function(e) {
                  t._unloadTile(e)
              }),
              t._visible.clear(),
              t._previouslyVisible.clear(),
              t._evicted.length = 0
          }
          ,
          g.prototype.startFrame = function() {
              if (this._state !== d.IDLE && this._state !== d.START)
                  throw new Error("TextureStore: startFrame called out of sequence");
              this._state = d.START,
              this._delimCount++
          }
          ,
          g.prototype.markTile = function(t) {
              if (this._state !== d.START && this._state !== d.MARK)
                  throw new Error("TextureStore: markTile called out of sequence");
              this._state = d.MARK;
              var e = this._itemMap.get(t)
                , n = e && e.texture()
                , i = e && e.asset();
              n && i && n.refresh(t, i),
              this._newVisible.add(t)
          }
          ,
          g.prototype.endFrame = function() {
              if (this._state !== d.START && this._state !== d.MARK && this._state !== d.END)
                  throw new Error("TextureStore: endFrame called out of sequence");
              this._state = d.END,
              this._delimCount--,
              this._delimCount || (this._update(),
              this._state = d.IDLE)
          }
          ,
          g.prototype._update = function() {
              var t = this;
              t._noLongerVisible.length = 0,
              t._visible.forEach(function(e) {
                  t._newVisible.has(e) || t._noLongerVisible.push(e)
              }),
              t._visibleAgain.length = 0,
              t._newVisible.forEach(function(e) {
                  t._previouslyVisible.has(e) && t._visibleAgain.push(e)
              }),
              t._visibleAgain.forEach(function(e) {
                  t._previouslyVisible.remove(e)
              }),
              t._evicted.length = 0,
              t._noLongerVisible.forEach(function(e) {
                  var n = t._itemMap.get(e);
                  if (n && n.texture()) {
                      var i = t._previouslyVisible.add(e);
                      null != i && t._evicted.push(i)
                  } else
                      n && t._unloadTile(e)
              }),
              t._evicted.forEach(function(e) {
                  t._pinMap.has(e) || t._unloadTile(e)
              }),
              t._newVisible.forEach(function(e) {
                  t._itemMap.get(e) || t._loadTile(e)
              });
              var e = t._visible;
              t._visible = t._newVisible,
              t._newVisible = e,
              t._newVisible.clear(),
              t._noLongerVisible.length = 0,
              t._visibleAgain.length = 0,
              t._evicted.length = 0
          }
          ,
          g.prototype._loadTile = function(t) {
              if (this._itemMap.has(t))
                  throw new Error("TextureStore: loading texture already in cache");
              var e = new y(this,t);
              this._itemMap.set(t, e)
          }
          ,
          g.prototype._unloadTile = function(t) {
              var e = this._itemMap.del(t);
              if (!e)
                  throw new Error("TextureStore: unloading texture not in cache");
              e.destroy()
          }
          ,
          g.prototype.asset = function(t) {
              var e = this._itemMap.get(t);
              return e ? e.asset() : null
          }
          ,
          g.prototype.texture = function(t) {
              var e = this._itemMap.get(t);
              return e ? e.texture() : null
          }
          ,
          g.prototype.pin = function(t) {
              var e = (this._pinMap.get(t) || 0) + 1;
              return this._pinMap.set(t, e),
              this._itemMap.has(t) || this._loadTile(t),
              e
          }
          ,
          g.prototype.unpin = function(t) {
              var e = this._pinMap.get(t);
              if (!e)
                  throw new Error("TextureStore: unpin when not pinned");
              return --e > 0 ? this._pinMap.set(t, e) : (this._pinMap.del(t),
              this._visible.has(t) || this._previouslyVisible.has(t) || this._unloadTile(t)),
              e
          }
          ,
          g.prototype.query = function(t) {
              var e = this._itemMap.get(t)
                , n = this._pinMap.get(t) || 0;
              return {
                  visible: this._visible.has(t),
                  previouslyVisible: this._previouslyVisible.has(t),
                  hasAsset: null != e && null != e.asset(),
                  hasTexture: null != e && null != e.texture(),
                  pinned: 0 !== n,
                  pinCount: n
              }
          }
          ,
          e.exports = g
      }
      , {
          "./collections/LruSet": 120,
          "./collections/Map": 121,
          "./collections/Set": 122,
          "./util/chain": 179,
          "./util/clearOwnProperties": 181,
          "./util/defaults": 186,
          "./util/inherits": 194,
          "./util/retry": 204,
          "minimal-event-emitter": 209
      }],
      112: [function(t, e, n) {
          "use strict";
          var i = t("./collections/Set");
          function r() {
              this._stack = [],
              this._visited = new i,
              this._vertices = null
          }
          r.prototype.search = function(t, e, n) {
              var i = this._stack
                , r = this._visited
                , o = this._vertices
                , s = 0;
              for (this._clear(),
              i.push(e); i.length > 0; ) {
                  var a = i.pop();
                  if (!r.has(a) && t.intersects(a.vertices(o))) {
                      r.add(a);
                      for (var l = a.neighbors(), u = 0; u < l.length; u++)
                          i.push(l[u]);
                      n.push(a),
                      s++
                  }
              }
              return this._vertices = o,
              this._clear(),
              s
          }
          ,
          r.prototype._clear = function() {
              this._stack.length = 0,
              this._visited.clear()
          }
          ,
          e.exports = r
      }
      , {
          "./collections/Set": 122
      }],
      113: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./util/defaults")
            , o = t("./util/now")
            , s = {
              duration: 1 / 0
          };
          function a(t) {
              t = r(t || {}, s),
              this._duration = t.duration,
              this._startTime = null,
              this._handle = null,
              this._check = this._check.bind(this)
          }
          i(a),
          a.prototype.start = function() {
              this._startTime = o(),
              null == this._handle && this._duration < 1 / 0 && this._setup(this._duration)
          }
          ,
          a.prototype.started = function() {
              return null != this._startTime
          }
          ,
          a.prototype.stop = function() {
              this._startTime = null,
              null != this._handle && (clearTimeout(this._handle),
              this._handle = null)
          }
          ,
          a.prototype._setup = function(t) {
              this._handle = setTimeout(this._check, t)
          }
          ,
          a.prototype._teardown = function() {
              clearTimeout(this._handle),
              this._handle = null
          }
          ,
          a.prototype._check = function() {
              var t = o() - this._startTime
                , e = this._duration - t;
              this._teardown(),
              e <= 0 ? (this.emit("timeout"),
              this._startTime = null) : e < 1 / 0 && this._setup(e)
          }
          ,
          a.prototype.duration = function() {
              return this._duration
          }
          ,
          a.prototype.setDuration = function(t) {
              this._duration = t,
              null != this._startTime && this._check()
          }
          ,
          e.exports = a
      }
      , {
          "./util/defaults": 186,
          "./util/now": 198,
          "minimal-event-emitter": 209
      }],
      114: [function(t, e, n) {
          "use strict";
          var i = t("bowser")
            , r = t("minimal-event-emitter")
            , o = t("./RenderLoop")
            , s = t("./controls/Controls")
            , a = t("./Scene")
            , l = t("./Timer")
            , u = t("./stages/WebGl")
            , c = t("./stages/Css")
            , h = t("./stages/Flash")
            , p = t("./controls/ControlCursor")
            , d = t("./controls/HammerGestures")
            , f = t("./controls/registerDefaultControls")
            , m = t("./renderers/registerDefaultRenderers")
            , v = t("./util/dom").setOverflowHidden
            , y = t("./util/dom").setAbsolute
            , g = t("./util/dom").setFullSize
            , _ = t("./util/dom").setBlocking
            , b = t("./util/tween")
            , w = t("./util/noop")
            , x = t("./util/clearOwnProperties")
            , S = {
              webgl: u,
              css: c,
              flash: h
          }
            , M = [u, c, h];
          function E(t, e) {
              var n;
              if (e = e || {},
              this._domElement = t,
              v(t),
              e.stageType) {
                  if (!(n = S[e.stageType]))
                      throw new Error("Unknown stage type: " + e.stageType)
              } else {
                  for (var r = 0; r < M.length; r++)
                      if (M[r].supported()) {
                          n = M[r];
                          break
                      }
                  if (!n)
                      throw new Error("None of the stage types are supported")
              }
              this._stage = new n(e.stage),
              m(this._stage),
              this._domElement.appendChild(this._stage.domElement()),
              this._controlContainer = document.createElement("div"),
              y(this._controlContainer),
              g(this._controlContainer),
              i.ios && this._controlContainer.addEventListener("touchmove", function(t) {
                  t.preventDefault()
              });
              var a = document.createElement("div");
              y(a),
              g(a),
              _(a),
              this._controlContainer.appendChild(a),
              t.appendChild(this._controlContainer),
              this._size = {},
              this.updateSize(),
              this._updateSizeListener = this.updateSize.bind(this),
              window.addEventListener("resize", this._updateSizeListener),
              this._renderLoop = new o(this._stage),
              this._controls = new s,
              this._controlMethods = f(this._controls, this._controlContainer, e.controls),
              this._controls.attach(this._renderLoop),
              this._hammerManagerTouch = d.get(this._controlContainer, "touch"),
              this._hammerManagerMouse = d.get(this._controlContainer, "mouse"),
              this._dragCursor = new p(this._controls,"mouseViewDrag",t,e.cursors && e.cursors.drag || {}),
              this._renderLoop.start(),
              this._scenes = [],
              this._currentScene = null,
              this._replacedScene = null,
              this._cancelCurrentTween = null,
              this._layerChangeHandler = this._updateSceneLayers.bind(this),
              this._viewChangeHandler = this.emit.bind(this, "viewChange"),
              this._idleTimer = new l,
              this._idleTimer.start(),
              this._resetIdleTimerHandler = this._resetIdleTimer.bind(this),
              this.addEventListener("viewChange", this._resetIdleTimerHandler),
              this._enterIdleHandler = this._enterIdle.bind(this),
              this._idleTimer.addEventListener("timeout", this._enterIdleHandler),
              this._leaveIdleHandler = this._leaveIdle.bind(this),
              this._controls.addEventListener("active", this._leaveIdleHandler),
              this.addEventListener("sceneChange", this._leaveIdleHandler),
              this._idleMovement = null
          }
          r(E),
          E.prototype.destroy = function() {
              for (var t in window.removeEventListener("resize", this._updateSizeListener),
              this._currentScene && this._removeSceneEventListeners(this._currentScene),
              this._replacedScene && this._removeSceneEventListeners(this._replacedScene),
              this._dragCursor.destroy(),
              this._controlMethods)
                  this._controlMethods[t].destroy();
              for (; this._scenes.length; )
                  this.destroyScene(this._scenes[0]);
              this._domElement.removeChild(this._stage.domElement()),
              this._stage.destroy(),
              this._renderLoop.destroy(),
              this._controls.destroy(),
              this._controls = null,
              this._cancelCurrentTween && this._cancelCurrentTween(),
              x(this)
          }
          ,
          E.prototype.updateSize = function() {
              var t = this._size;
              t.width = this._domElement.clientWidth,
              t.height = this._domElement.clientHeight,
              this._stage.setSize(t)
          }
          ,
          E.prototype.stage = function() {
              return this._stage
          }
          ,
          E.prototype.renderLoop = function() {
              return this._renderLoop
          }
          ,
          E.prototype.controls = function() {
              return this._controls
          }
          ,
          E.prototype.domElement = function() {
              return this._domElement
          }
          ,
          E.prototype.createScene = function(t) {
              t = t || {};
              var e = this.createEmptyScene({
                  view: t.view
              });
              return e.createLayer({
                  source: t.source,
                  geometry: t.geometry,
                  pinFirstLevel: t.pinFirstLevel,
                  textureStoreOpts: t.textureStoreOpts,
                  layerOpts: t.layerOpts
              }),
              e
          }
          ,
          E.prototype.createEmptyScene = function(t) {
              var e = new a(this,(t = t || {}).view);
              return this._scenes.push(e),
              e
          }
          ,
          E.prototype._updateSceneLayers = function() {
              var t, e, n = this._stage, i = this._currentScene, r = this._replacedScene, o = n.listLayers(), s = [];
              if (r && (s = s.concat(r.listLayers())),
              i && (s = s.concat(i.listLayers())),
              1 !== Math.abs(o.length - s.length))
                  throw new Error("Stage and scene out of sync");
              if (s.length < o.length)
                  for (t = 0; t < o.length; t++)
                      if (e = o[t],
                      s.indexOf(e) < 0) {
                          this._removeLayerFromStage(e);
                          break
                      }
              if (s.length > o.length)
                  for (t = 0; t < s.length; t++)
                      e = s[t],
                      o.indexOf(e) < 0 && this._addLayerToStage(e, t)
          }
          ,
          E.prototype._addLayerToStage = function(t, e) {
              t.pinFirstLevel(),
              this._stage.addLayer(t, e)
          }
          ,
          E.prototype._removeLayerFromStage = function(t) {
              this._stage.removeLayer(t),
              t.unpinFirstLevel(),
              t.textureStore().clearNotPinned()
          }
          ,
          E.prototype._addSceneEventListeners = function(t) {
              t.addEventListener("layerChange", this._layerChangeHandler),
              t.addEventListener("viewChange", this._viewChangeHandler)
          }
          ,
          E.prototype._removeSceneEventListeners = function(t) {
              t.removeEventListener("layerChange", this._layerChangeHandler),
              t.removeEventListener("viewChange", this._viewChangeHandler)
          }
          ,
          E.prototype.destroyScene = function(t) {
              var e, n, i = this._scenes.indexOf(t);
              if (i < 0)
                  throw new Error("No such scene in viewer");
              if (this._currentScene === t) {
                  for (this._removeSceneEventListeners(t),
                  n = t.listLayers(),
                  e = 0; e < n.length; e++)
                      this._removeLayerFromStage(n[e]);
                  this._cancelCurrentTween && (this._cancelCurrentTween(),
                  this._cancelCurrentTween = null),
                  this._currentScene = null,
                  this.emit("sceneChange")
              }
              if (this._replacedScene === t) {
                  for (this._removeSceneEventListeners(t),
                  n = t.listLayers(),
                  e = 0; e < n.length; e++)
                      this._removeLayerFromStage(n[e]);
                  this._replacedScene = null
              }
              this._scenes.splice(i, 1),
              t.destroy()
          }
          ,
          E.prototype.destroyAllScenes = function() {
              for (; this._scenes.length > 0; )
                  this.destroyScene(this._scenes[0])
          }
          ,
          E.prototype.hasScene = function(t) {
              return this._scenes.indexOf(t) >= 0
          }
          ,
          E.prototype.listScenes = function() {
              return [].concat(this._scenes)
          }
          ,
          E.prototype.scene = function() {
              return this._currentScene
          }
          ,
          E.prototype.view = function() {
              var t = this._currentScene;
              return t ? t.view() : null
          }
          ,
          E.prototype.lookTo = function(t, e, n) {
              var i = this._currentScene;
              i && i.lookTo(t, e, n)
          }
          ,
          E.prototype.startMovement = function(t, e) {
              var n = this._currentScene;
              n && n.startMovement(t, e)
          }
          ,
          E.prototype.stopMovement = function() {
              var t = this._currentScene;
              t && t.stopMovement()
          }
          ,
          E.prototype.setIdleMovement = function(t, e) {
              this._idleTimer.setDuration(t),
              this._idleMovement = e
          }
          ,
          E.prototype.breakIdleMovement = function() {
              this._leaveIdle(),
              this._resetIdleTimer()
          }
          ,
          E.prototype._resetIdleTimer = function() {
              this._idleTimer.start()
          }
          ,
          E.prototype._enterIdle = function() {
              var t = this._currentScene
                , e = this._idleMovement;
              t && e && t.startMovement(e)
          }
          ,
          E.prototype._leaveIdle = function() {
              var t = this._currentScene;
              t && t.movement() === this._idleMovement && t.stopMovement()
          }
          ;
          function T(t, e, n) {
              e.listLayers().forEach(function(e) {
                  e.mergeEffects({
                      opacity: t
                  })
              }),
              e._hotspotContainer.domElement().style.opacity = t
          }
          E.prototype.switchScene = function(t, e, n) {
              var i = this;
              e = e || {},
              n = n || w;
              var r = this._stage
                , o = this._currentScene;
              if (o !== t) {
                  if (this._scenes.indexOf(t) < 0)
                      throw new Error("No such scene in viewer");
                  this._cancelCurrentTween && (this._cancelCurrentTween(),
                  this._cancelCurrentTween = null);
                  var s = o ? o.listLayers() : []
                    , a = t.listLayers()
                    , l = r.listLayers();
                  if (o && (l.length !== s.length || l.length > 1 && l[0] != s[0]))
                      throw new Error("Stage not in sync with viewer");
                  for (var u = null != e.transitionDuration ? e.transitionDuration : 1e3, c = null != e.transitionUpdate ? e.transitionUpdate : T, h = 0; h < a.length; h++)
                      this._addLayerToStage(a[h]);
                  this._cancelCurrentTween = b(u, function(e) {
                      c(e, t, o)
                  }, function() {
                      if (i._replacedScene) {
                          i._removeSceneEventListeners(i._replacedScene),
                          s = i._replacedScene.listLayers();
                          for (var t = 0; t < s.length; t++)
                              i._removeLayerFromStage(s[t]);
                          i._replacedScene = null
                      }
                      i._cancelCurrentTween = null,
                      n()
                  }),
                  this._currentScene = t,
                  this._replacedScene = o,
                  this.emit("sceneChange"),
                  this.emit("viewChange"),
                  this._addSceneEventListeners(t)
              } else
                  n()
          }
          ,
          e.exports = E
      }
      , {
          "./RenderLoop": 109,
          "./Scene": 110,
          "./Timer": 113,
          "./controls/ControlCursor": 127,
          "./controls/Controls": 128,
          "./controls/HammerGestures": 132,
          "./controls/registerDefaultControls": 139,
          "./renderers/registerDefaultRenderers": 160,
          "./stages/Css": 167,
          "./stages/Flash": 168,
          "./stages/WebGl": 171,
          "./util/clearOwnProperties": 181,
          "./util/dom": 190,
          "./util/noop": 197,
          "./util/tween": 205,
          bowser: 104,
          "minimal-event-emitter": 209
      }],
      115: [function(t, e, n) {
          "use strict";
          var i = t("./Static")
            , r = t("../util/inherits")
            , o = t("minimal-event-emitter")
            , s = t("../util/clearOwnProperties");
          function a(t) {
              this.constructor.super_.call(this, t),
              this._timestamp = 0
          }
          r(a, i),
          o(a),
          a.prototype.destroy = function() {
              s(this)
          }
          ,
          a.prototype.timestamp = function() {
              return this._timestamp
          }
          ,
          a.prototype.isDynamic = function() {
              return !0
          }
          ,
          a.prototype.markDirty = function() {
              this._timestamp++,
              this.emit("change")
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 181,
          "../util/inherits": 194,
          "./Static": 117,
          "minimal-event-emitter": 209
      }],
      116: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("../util/clearOwnProperties");
          function o(t, e) {
              this._flashElement = t,
              this._imageId = e
          }
          i(o),
          o.prototype.destroy = function() {
              this._flashElement.unloadImage(this._imageId),
              r(this)
          }
          ,
          o.prototype.element = function() {
              return this._imageId
          }
          ,
          o.prototype.width = function() {
              return 0
          }
          ,
          o.prototype.height = function() {
              return 0
          }
          ,
          o.prototype.timestamp = function() {
              return 0
          }
          ,
          o.prototype.isDynamic = function() {
              return !1
          }
          ,
          e.exports = o
      }
      , {
          "../util/clearOwnProperties": 181,
          "minimal-event-emitter": 209
      }],
      117: [function(t, e, n) {
          "use strict";
          var i = t("../util/global")
            , r = t("minimal-event-emitter")
            , o = t("../util/clearOwnProperties")
            , s = {
              HTMLImageElement: ["naturalWidth", "naturalHeight"],
              HTMLCanvasElement: ["width", "height"],
              ImageBitmap: ["width", "height"]
          };
          function a(t) {
              var e = !1;
              for (var n in s)
                  if (i[n] && t instanceof i[n]) {
                      e = !0,
                      this._widthProp = s[n][0],
                      this._heightProp = s[n][1];
                      break
                  }
              if (!e)
                  throw new Error("Unsupported pixel source");
              this._element = t
          }
          r(a),
          a.prototype.destroy = function() {
              o(this)
          }
          ,
          a.prototype.element = function() {
              return this._element
          }
          ,
          a.prototype.width = function() {
              return this._element[this._widthProp]
          }
          ,
          a.prototype.height = function() {
              return this._element[this._heightProp]
          }
          ,
          a.prototype.timestamp = function() {
              return 0
          }
          ,
          a.prototype.isDynamic = function() {
              return !1
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 181,
          "../util/global": 192,
          "minimal-event-emitter": 209
      }],
      118: [function(t, e, n) {
          "use strict";
          var i = t("./util/defaults")
            , r = {
              yawSpeed: .1,
              pitchSpeed: .1,
              fovSpeed: .1,
              yawAccel: .01,
              pitchAccel: .01,
              fovAccel: .01,
              targetPitch: 0,
              targetFov: null
          };
          e.exports = function(t) {
              var e = (t = i(t || {}, r)).yawSpeed
                , n = t.pitchSpeed
                , o = t.fovSpeed
                , s = t.yawAccel
                , a = t.pitchAccel
                , l = t.fovAccel
                , u = t.targetPitch
                , c = t.targetFov;
              return function() {
                  var t, i, r, h, p = 0, d = 0, f = 0, m = 0, v = 0, y = 0, g = 0;
                  return function(_, b) {
                      if (t = (b - p) / 1e3,
                      v = Math.min(d + t * s, e),
                      i = v * t,
                      _.yaw = _.yaw + i,
                      null != u && _.pitch !== u) {
                          var w = .5 * f * f / a;
                          y = Math.abs(u - _.pitch) > w ? Math.min(f + t * a, n) : Math.max(f - t * a, 0),
                          r = y * t,
                          u < _.pitch && (_.pitch = Math.max(u, _.pitch - r)),
                          u > _.pitch && (_.pitch = Math.min(u, _.pitch + r))
                      }
                      if (null != c && _.fov !== u) {
                          var x = .5 * m * m / l;
                          g = Math.abs(c - _.fov) > x ? Math.min(m + t * l, o) : Math.max(m - t * l, 0),
                          h = g * t,
                          c < _.fov && (_.fov = Math.max(c, _.fov - h)),
                          c > _.fov && (_.fov = Math.min(c, _.fov + h))
                      }
                      return p = b,
                      d = v,
                      f = y,
                      m = g,
                      _
                  }
              }
          }
      }
      , {
          "./util/defaults": 186
      }],
      119: [function(t, e, n) {
          "use strict";
          var i = t("../util/mod");
          function r(t) {
              if (!isFinite(t) || Math.floor(t) !== t || t < 0)
                  throw new Error("LruMap: invalid capacity");
              this._capacity = t,
              this._keys = new Array(this._capacity),
              this._values = new Array(this._capacity),
              this._start = 0,
              this._size = 0
          }
          r.prototype._index = function(t) {
              return i(this._start + t, this._capacity)
          }
          ,
          r.prototype.get = function(t) {
              for (var e = 0; e < this._size; e++) {
                  var n = this._keys[this._index(e)];
                  if (t.equals(n))
                      return this._values[this._index(e)]
              }
              return null
          }
          ,
          r.prototype.set = function(t, e) {
              if (0 === this._capacity)
                  return t;
              this.del(t);
              var n = this._size === this._capacity ? this._keys[this._index(0)] : null;
              return this._keys[this._index(this._size)] = t,
              this._values[this._index(this._size)] = e,
              this._size < this._capacity ? this._size++ : this._start = this._index(1),
              n
          }
          ,
          r.prototype.del = function(t) {
              for (var e = 0; e < this._size; e++)
                  if (t.equals(this._keys[this._index(e)])) {
                      for (var n = this._values[this._index(e)], i = e; i < this._size - 1; i++)
                          this._keys[this._index(i)] = this._keys[this._index(i + 1)],
                          this._values[this._index(i)] = this._values[this._index(i + 1)];
                      return this._size--,
                      n
                  }
              return null
          }
          ,
          r.prototype.has = function(t) {
              for (var e = 0; e < this._size; e++)
                  if (t.equals(this._keys[this._index(e)]))
                      return !0;
              return !1
          }
          ,
          r.prototype.size = function() {
              return this._size
          }
          ,
          r.prototype.clear = function() {
              this._keys.length = 0,
              this._values.length = 0,
              this._start = 0,
              this._size = 0
          }
          ,
          r.prototype.forEach = function(t) {
              for (var e = 0, n = 0; n < this._size; n++)
                  t(this._keys[this._index(n)], this._values[this._index(n)]),
                  e += 1;
              return e
          }
          ,
          e.exports = r
      }
      , {
          "../util/mod": 196
      }],
      120: [function(t, e, n) {
          "use strict";
          var i = t("../util/mod");
          function r(t) {
              if (!isFinite(t) || Math.floor(t) !== t || t < 0)
                  throw new Error("LruSet: invalid capacity");
              this._capacity = t,
              this._elements = new Array(this._capacity),
              this._start = 0,
              this._size = 0
          }
          r.prototype._index = function(t) {
              return i(this._start + t, this._capacity)
          }
          ,
          r.prototype.add = function(t) {
              if (0 === this._capacity)
                  return t;
              this.remove(t);
              var e = this._size === this._capacity ? this._elements[this._index(0)] : null;
              return this._elements[this._index(this._size)] = t,
              this._size < this._capacity ? this._size++ : this._start = this._index(1),
              e
          }
          ,
          r.prototype.remove = function(t) {
              for (var e = 0; e < this._size; e++) {
                  var n = this._elements[this._index(e)];
                  if (t.equals(n)) {
                      for (var i = e; i < this._size - 1; i++)
                          this._elements[this._index(i)] = this._elements[this._index(i + 1)];
                      return this._size--,
                      n
                  }
              }
              return null
          }
          ,
          r.prototype.has = function(t) {
              for (var e = 0; e < this._size; e++)
                  if (t.equals(this._elements[this._index(e)]))
                      return !0;
              return !1
          }
          ,
          r.prototype.size = function() {
              return this._size
          }
          ,
          r.prototype.clear = function() {
              this._elements.length = 0,
              this._start = 0,
              this._size = 0
          }
          ,
          r.prototype.forEach = function(t) {
              for (var e = 0, n = 0; n < this._size; n++)
                  t(this._elements[this._index(n)]),
                  e += 1;
              return e
          }
          ,
          e.exports = r
      }
      , {
          "../util/mod": 196
      }],
      121: [function(t, e, n) {
          "use strict";
          var i = t("../util/mod")
            , r = 64;
          function o(t) {
              if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1))
                  throw new Error("Map: invalid capacity");
              this._capacity = t || r,
              this._keyBuckets = [],
              this._valBuckets = [];
              for (var e = 0; e < this._capacity; e++)
                  this._keyBuckets.push([]),
                  this._valBuckets.push([]);
              this._size = 0
          }
          o.prototype.get = function(t) {
              for (var e = i(t.hash(), this._capacity), n = this._keyBuckets[e], r = 0; r < n.length; r++) {
                  var o = n[r];
                  if (t.equals(o))
                      return this._valBuckets[e][r]
              }
              return null
          }
          ,
          o.prototype.set = function(t, e) {
              for (var n = i(t.hash(), this._capacity), r = this._keyBuckets[n], o = this._valBuckets[n], s = 0; s < r.length; s++) {
                  var a = r[s];
                  if (t.equals(a)) {
                      var l = o[s];
                      return r[s] = t,
                      o[s] = e,
                      l
                  }
              }
              return r.push(t),
              o.push(e),
              this._size++,
              null
          }
          ,
          o.prototype.del = function(t) {
              for (var e = i(t.hash(), this._capacity), n = this._keyBuckets[e], r = this._valBuckets[e], o = 0; o < n.length; o++) {
                  var s = n[o];
                  if (t.equals(s)) {
                      for (var a = r[o], l = o; l < n.length - 1; l++)
                          n[l] = n[l + 1],
                          r[l] = r[l + 1];
                      return n.length = n.length - 1,
                      r.length = r.length - 1,
                      this._size--,
                      a
                  }
              }
              return null
          }
          ,
          o.prototype.has = function(t) {
              for (var e = i(t.hash(), this._capacity), n = this._keyBuckets[e], r = 0; r < n.length; r++) {
                  var o = n[r];
                  if (t.equals(o))
                      return !0
              }
              return !1
          }
          ,
          o.prototype.size = function() {
              return this._size
          }
          ,
          o.prototype.clear = function() {
              for (var t = 0; t < this._capacity; t++)
                  this._keyBuckets[t].length = 0,
                  this._valBuckets[t].length = 0;
              this._size = 0
          }
          ,
          o.prototype.forEach = function(t) {
              for (var e = 0, n = 0; n < this._capacity; n++)
                  for (var i = this._keyBuckets[n], r = this._valBuckets[n], o = 0; o < i.length; o++)
                      t(i[o], r[o]),
                      e += 1;
              return e
          }
          ,
          e.exports = o
      }
      , {
          "../util/mod": 196
      }],
      122: [function(t, e, n) {
          "use strict";
          var i = t("../util/mod")
            , r = 64;
          function o(t) {
              if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1))
                  throw new Error("Set: invalid capacity");
              this._capacity = this._capacity || r,
              this._buckets = [];
              for (var e = 0; e < this._capacity; e++)
                  this._buckets.push([]);
              this._size = 0
          }
          o.prototype.add = function(t) {
              for (var e = i(t.hash(), this._capacity), n = this._buckets[e], r = 0; r < n.length; r++) {
                  var o = n[r];
                  if (t.equals(o))
                      return n[r] = t,
                      o
              }
              return n.push(t),
              this._size++,
              null
          }
          ,
          o.prototype.remove = function(t) {
              for (var e = i(t.hash(), this._capacity), n = this._buckets[e], r = 0; r < n.length; r++) {
                  var o = n[r];
                  if (t.equals(o)) {
                      for (var s = r; s < n.length - 1; s++)
                          n[s] = n[s + 1];
                      return n.length = n.length - 1,
                      this._size--,
                      o
                  }
              }
              return null
          }
          ,
          o.prototype.has = function(t) {
              for (var e = i(t.hash(), this._capacity), n = this._buckets[e], r = 0; r < n.length; r++) {
                  var o = n[r];
                  if (t.equals(o))
                      return !0
              }
              return !1
          }
          ,
          o.prototype.size = function() {
              return this._size
          }
          ,
          o.prototype.clear = function() {
              for (var t = 0; t < this._capacity; t++)
                  this._buckets[t].length = 0;
              this._size = 0
          }
          ,
          o.prototype.forEach = function(t) {
              for (var e = 0, n = 0; n < this._capacity; n++)
                  for (var i = this._buckets[n], r = 0; r < i.length; r++)
                      t(i[r]),
                      e += 1;
              return e
          }
          ,
          e.exports = o
      }
      , {
          "../util/mod": 196
      }],
      123: [function(t, e, n) {
          "use strict";
          var i = t("./WorkQueue")
            , r = t("../util/mod");
          function o(t) {
              this._concurrency = t && t.concurrency || 1,
              this._paused = t && !!t.paused || !1,
              this._pool = [];
              for (var e = 0; e < this._concurrency; e++)
                  this._pool.push(new i(t));
              this._next = 0
          }
          o.prototype.length = function() {
              for (var t = 0, e = 0; e < this._pool.length; e++)
                  t += this._pool[e].length();
              return t
          }
          ,
          o.prototype.push = function(t, e) {
              var n = this._next
                , i = this._pool[n].push(t, e);
              return this._next = r(this._next + 1, this._concurrency),
              i
          }
          ,
          o.prototype.pause = function() {
              if (!this._paused) {
                  this._paused = !0;
                  for (var t = 0; t < this._concurrency; t++)
                      this._pool[t].pause()
              }
          }
          ,
          o.prototype.resume = function() {
              if (this._paused) {
                  this._paused = !1;
                  for (var t = 0; t < this._concurrency; t++)
                      this._pool[t].resume()
              }
          }
          ,
          e.exports = o
      }
      , {
          "../util/mod": 196,
          "./WorkQueue": 124
      }],
      124: [function(t, e, n) {
          "use strict";
          var i = t("../util/now");
          function r(t, e) {
              this.fn = t,
              this.cb = e,
              this.cfn = null
          }
          function o(t) {
              this._queue = [],
              this._delay = t && t.delay || 0,
              this._paused = t && !!t.paused || !1,
              this._currentTask = null,
              this._lastFinished = null
          }
          o.prototype.length = function() {
              return this._queue.length
          }
          ,
          o.prototype.push = function(t, e) {
              var n = new r(t,e)
                , i = this._cancel.bind(this, n);
              return this._queue.push(n),
              this._next(),
              i
          }
          ,
          o.prototype.pause = function() {
              this._paused || (this._paused = !0)
          }
          ,
          o.prototype.resume = function() {
              this._paused && (this._paused = !1,
              this._next())
          }
          ,
          o.prototype._start = function(t) {
              if (this._currentTask)
                  throw new Error("WorkQueue: called start while running task");
              this._currentTask = t;
              var e = this._finish.bind(this, t);
              if (t.cfn = t.fn(e),
              "function" != typeof t.cfn)
                  throw new Error("WorkQueue: function is not cancellable")
          }
          ,
          o.prototype._finish = function(t) {
              var e = Array.prototype.slice.call(arguments, 1);
              if (this._currentTask !== t)
                  throw new Error("WorkQueue: called finish on wrong task");
              t.cb.apply(null, e),
              this._currentTask = null,
              this._lastFinished = i(),
              this._next()
          }
          ,
          o.prototype._cancel = function(t) {
              var e = Array.prototype.slice.call(arguments, 1);
              if (this._currentTask === t)
                  t.cfn.apply(null, e);
              else {
                  var n = this._queue.indexOf(t);
                  n >= 0 && (this._queue.splice(n, 1),
                  t.cb.apply(null, e))
              }
          }
          ,
          o.prototype._next = function() {
              if (!this._paused && this._queue.length && !this._currentTask) {
                  if (null != this._lastFinished) {
                      var t = i() - this._lastFinished
                        , e = this._delay - t;
                      if (e > 0)
                          return void setTimeout(this._next.bind(this), e)
                  }
                  var n = this._queue.shift();
                  this._start(n)
              }
          }
          ,
          e.exports = o
      }
      , {
          "../util/now": 198
      }],
      125: [function(t, e, n) {
          "use strict";
          var i = t("gl-matrix").vec4
            , r = t("gl-matrix").mat4;
          function o(t, e, n) {
              var r, o, s, a, l, u, c;
              r = n,
              o = t,
              s = e.colorMatrix,
              a = o[0],
              l = o[1],
              u = o[2],
              c = o[3],
              r[0] = s[0] * a + s[1] * l + s[2] * u + s[3] * c,
              r[1] = s[4] * a + s[5] * l + s[6] * u + s[7] * c,
              r[2] = s[8] * a + s[9] * l + s[10] * u + s[11] * c,
              r[3] = s[12] * a + s[13] * l + s[14] * u + s[15] * c,
              i.add(n, n, e.colorOffset)
          }
          var s = i.create();
          e.exports = {
              identity: function(t) {
                  var e = t || {};
                  return e.colorOffset = e.colorOffset || i.create(),
                  e.colorMatrix = e.colorMatrix || r.create(),
                  e
              },
              applyToPixel: o,
              applyToImageData: function(t, e) {
                  for (var n = t.width, r = t.height, a = t.data, l = 0; l < n * r; l++)
                      i.set(s, a[4 * l + 0] / 255, a[4 * l + 1] / 255, a[4 * l + 2] / 255, a[4 * l + 3] / 255),
                      o(s, e, s),
                      a[4 * l + 0] = 255 * s[0],
                      a[4 * l + 1] = 255 * s[1],
                      a[4 * l + 2] = 255 * s[2],
                      a[4 * l + 3] = 255 * s[3]
              }
          }
      }
      , {
          "gl-matrix": 4
      }],
      126: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Dynamics")
            , o = t("../util/now")
            , s = t("../util/clearOwnProperties");
          function a(t) {
              t = t || {},
              this._methods = [],
              this._parameters = ["x", "y", "axisScaledX", "axisScaledY", "zoom", "yaw", "pitch", "roll"],
              this._now = t.nowForTesting || o,
              this._composedOffsets = {},
              this._composeReturn = {
                  offsets: this._composedOffsets,
                  changing: null
              }
          }
          i(a),
          a.prototype.add = function(t) {
              if (!this.has(t)) {
                  var e = {};
                  this._parameters.forEach(function(t) {
                      e[t] = {
                          dynamics: new r,
                          time: null
                      }
                  });
                  var n = this._updateDynamics.bind(this, e)
                    , i = {
                      instance: t,
                      dynamics: e,
                      parameterDynamicsHandler: n
                  };
                  t.addEventListener("parameterDynamics", n),
                  this._methods.push(i)
              }
          }
          ,
          a.prototype.remove = function(t) {
              var e = this._indexOfInstance(t);
              if (e >= 0) {
                  var n = this._methods.splice(e, 1)[0];
                  n.instance.removeEventListener("parameterDynamics", n.parameterDynamicsHandler)
              }
          }
          ,
          a.prototype.has = function(t) {
              return this._indexOfInstance(t) >= 0
          }
          ,
          a.prototype._indexOfInstance = function(t) {
              for (var e = 0; e < this._methods.length; e++)
                  if (this._methods[e].instance === t)
                      return e;
              return -1
          }
          ,
          a.prototype.list = function() {
              for (var t = [], e = 0; e < this._methods.length; e++)
                  t.push(this._methods[e].instance);
              return t
          }
          ,
          a.prototype._updateDynamics = function(t, e, n) {
              var i = t[e];
              if (!i)
                  throw new Error("Unknown control parameter " + e);
              var r = this._now();
              i.dynamics.update(n, (r - i.time) / 1e3),
              i.time = r,
              this.emit("change")
          }
          ,
          a.prototype._resetComposedOffsets = function() {
              for (var t = 0; t < this._parameters.length; t++)
                  this._composedOffsets[this._parameters[t]] = 0
          }
          ,
          a.prototype.offsets = function() {
              var t, e = !1, n = this._now();
              this._resetComposedOffsets();
              for (var i = 0; i < this._methods.length; i++)
                  for (var r = this._methods[i].dynamics, o = 0; o < this._parameters.length; o++) {
                      var s = r[t = this._parameters[o]]
                        , a = s.dynamics;
                      null != a.offset && (this._composedOffsets[t] += a.offset,
                      a.offset = null);
                      var l = (n - s.time) / 1e3
                        , u = a.offsetFromVelocity(l);
                      u && (this._composedOffsets[t] += u);
                      var c = a.velocityAfter(l);
                      a.velocity = c,
                      c && (e = !0),
                      s.time = n
                  }
              return this._composeReturn.changing = e,
              this._composeReturn
          }
          ,
          a.prototype.destroy = function() {
              for (var t = this.list(), e = 0; e < t.length; e++)
                  this.remove(t[e]);
              s(this)
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 181,
          "../util/now": 198,
          "./Dynamics": 130,
          "minimal-event-emitter": 209
      }],
      127: [function(t, e, n) {
          "use strict";
          var i = t("../util/defaults")
            , r = t("../util/clearOwnProperties")
            , o = {
              active: "move",
              inactive: "default",
              disabled: "default"
          };
          function s(t, e, n, r) {
              r = i(r || {}, o),
              this._element = n,
              this._controls = t,
              this._id = e,
              this._attached = !1,
              this._setActiveCursor = this._setCursor.bind(this, r.active),
              this._setInactiveCursor = this._setCursor.bind(this, r.inactive),
              this._setDisabledCursor = this._setCursor.bind(this, r.disabled),
              this._setOriginalCursor = this._setCursor.bind(this, this._element.style.cursor),
              this._updateAttachmentHandler = this._updateAttachment.bind(this),
              t.addEventListener("methodEnabled", this._updateAttachmentHandler),
              t.addEventListener("methodDisabled", this._updateAttachmentHandler),
              t.addEventListener("enabled", this._updateAttachmentHandler),
              t.addEventListener("disabled", this._updateAttachmentHandler),
              this._updateAttachment()
          }
          s.prototype.destroy = function() {
              this._detachFromControlMethod(this._controls.method(this._id)),
              this._setOriginalCursor(),
              this._controls.removeEventListener("methodEnabled", this._updateAttachmentHandler),
              this._controls.removeEventListener("methodDisabled", this._updateAttachmentHandler),
              this._controls.removeEventListener("enabled", this._updateAttachmentHandler),
              this._controls.removeEventListener("disabled", this._updateAttachmentHandler),
              r(this)
          }
          ,
          s.prototype._updateAttachment = function() {
              var t = this._controls
                , e = this._id;
              t.enabled() && t.method(e).enabled ? this._attachToControlMethod(t.method(e)) : this._detachFromControlMethod(t.method(e))
          }
          ,
          s.prototype._attachToControlMethod = function(t) {
              this._attached || (t.instance.addEventListener("active", this._setActiveCursor),
              t.instance.addEventListener("inactive", this._setInactiveCursor),
              t.active ? this._setActiveCursor() : this._setInactiveCursor(),
              this._attached = !0)
          }
          ,
          s.prototype._detachFromControlMethod = function(t) {
              this._attached && (t.instance.removeEventListener("active", this._setActiveCursor),
              t.instance.removeEventListener("inactive", this._setInactiveCursor),
              this._setDisabledCursor(),
              this._attached = !1)
          }
          ,
          s.prototype._setCursor = function(t) {
              this._element.style.cursor = t
          }
          ,
          e.exports = s
      }
      , {
          "../util/clearOwnProperties": 181,
          "../util/defaults": 186
      }],
      128: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Composer")
            , o = t("../util/clearOwnProperties")
            , s = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
          function a(t) {
              t = t || {},
              this._methods = {},
              this._methodGroups = {},
              this._composer = new r,
              this._enabled = !t || !t.enabled || !!t.enabled,
              this._activeCount = 0,
              this.updatedViews_ = [],
              this._attachedRenderLoop = null
          }
          i(a),
          a.prototype.destroy = function() {
              this.detach(),
              this._composer.destroy(),
              o(this)
          }
          ,
          a.prototype.methods = function() {
              var t = {};
              for (var e in this._methods)
                  t[e] = this._methods[e];
              return t
          }
          ,
          a.prototype.method = function(t) {
              return this._methods[t]
          }
          ,
          a.prototype.registerMethod = function(t, e, n) {
              if (this._methods[t])
                  throw new Error("Control method already registered with id " + t);
              this._methods[t] = {
                  instance: e,
                  enabled: !1,
                  active: !1,
                  activeHandler: this._handleActive.bind(this, t),
                  inactiveHandler: this._handleInactive.bind(this, t)
              },
              n && this.enableMethod(t, e)
          }
          ,
          a.prototype.unregisterMethod = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("No control method registered with id " + t);
              e.enabled && this.disableMethod(t),
              delete this._methods[t]
          }
          ,
          a.prototype.enableMethod = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("No control method registered with id " + t);
              e.enabled || (e.enabled = !0,
              e.active && this._incrementActiveCount(),
              this._listen(t),
              this._updateComposer(),
              this.emit("methodEnabled", t))
          }
          ,
          a.prototype.disableMethod = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("No control method registered with id " + t);
              e.enabled && (e.enabled = !1,
              e.active && this._decrementActiveCount(),
              this._unlisten(t),
              this._updateComposer(),
              this.emit("methodDisabled", t))
          }
          ,
          a.prototype.addMethodGroup = function(t, e) {
              this._methodGroups[t] = e
          }
          ,
          a.prototype.removeMethodGroup = function(t) {
              delete this._methodGroups[t]
          }
          ,
          a.prototype.methodGroups = function() {
              var t = {};
              for (var e in this._methodGroups)
                  t[e] = this._methodGroups[e];
              return t
          }
          ,
          a.prototype.enableMethodGroup = function(t) {
              var e = this;
              e._methodGroups[t].forEach(function(t) {
                  e.enableMethod(t)
              })
          }
          ,
          a.prototype.disableMethodGroup = function(t) {
              var e = this;
              e._methodGroups[t].forEach(function(t) {
                  e.disableMethod(t)
              })
          }
          ,
          a.prototype.enabled = function() {
              return this._enabled
          }
          ,
          a.prototype.enable = function() {
              this._enabled = !0,
              this._activeCount > 0 && this.emit("active"),
              this.emit("enabled"),
              this._updateComposer()
          }
          ,
          a.prototype.disable = function() {
              this._enabled = !1,
              this._activeCount > 0 && this.emit("inactive"),
              this.emit("disabled"),
              this._updateComposer()
          }
          ,
          a.prototype.attach = function(t) {
              this._attachedRenderLoop && this.detach(),
              this._attachedRenderLoop = t,
              this._beforeRenderHandler = this._updateViewsWithControls.bind(this),
              this._changeHandler = t.renderOnNextFrame.bind(t),
              this._attachedRenderLoop.addEventListener("beforeRender", this._beforeRenderHandler),
              this._composer.addEventListener("change", this._changeHandler)
          }
          ,
          a.prototype.detach = function() {
              this._attachedRenderLoop && (this._attachedRenderLoop.removeEventListener("beforeRender", this._beforeRenderHandler),
              this._composer.removeEventListener("change", this._changeHandler),
              this._beforeRenderHandler = null,
              this._changeHandler = null,
              this._attachedRenderLoop = null)
          }
          ,
          a.prototype.attached = function() {
              return null != this._attachedRenderLoop
          }
          ,
          a.prototype._listen = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("Bad method id");
              e.instance.addEventListener("active", e.activeHandler),
              e.instance.addEventListener("inactive", e.inactiveHandler)
          }
          ,
          a.prototype._unlisten = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("Bad method id");
              e.instance.removeEventListener("active", e.activeHandler),
              e.instance.removeEventListener("inactive", e.inactiveHandler)
          }
          ,
          a.prototype._handleActive = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("Bad method id");
              if (!e.enabled)
                  throw new Error("Should not receive event from disabled control method");
              e.active || (e.active = !0,
              this._incrementActiveCount())
          }
          ,
          a.prototype._handleInactive = function(t) {
              var e = this._methods[t];
              if (!e)
                  throw new Error("Bad method id");
              if (!e.enabled)
                  throw new Error("Should not receive event from disabled control method");
              e.active && (e.active = !1,
              this._decrementActiveCount())
          }
          ,
          a.prototype._incrementActiveCount = function() {
              this._activeCount++,
              s && this._checkActiveCount(),
              this._enabled && 1 === this._activeCount && this.emit("active")
          }
          ,
          a.prototype._decrementActiveCount = function() {
              this._activeCount--,
              s && this._checkActiveCount(),
              this._enabled && 0 === this._activeCount && this.emit("inactive")
          }
          ,
          a.prototype._checkActiveCount = function() {
              var t = 0;
              for (var e in this._methods) {
                  var n = this._methods[e];
                  n.enabled && n.active && t++
              }
              if (t != this._activeCount)
                  throw new Error("Bad control state")
          }
          ,
          a.prototype._updateComposer = function() {
              var t = this._composer;
              for (var e in this._methods) {
                  var n = this._methods[e]
                    , i = this._enabled && n.enabled;
                  i && !t.has(n.instance) && t.add(n.instance),
                  !i && t.has(n.instance) && t.remove(n.instance)
              }
          }
          ,
          a.prototype._updateViewsWithControls = function() {
              var t = this._composer.offsets();
              t.changing && this._attachedRenderLoop.renderOnNextFrame(),
              this.updatedViews_.length = 0;
              for (var e = this._attachedRenderLoop.stage().listLayers(), n = 0; n < e.length; n++) {
                  var i = e[n].view();
                  this.updatedViews_.indexOf(i) < 0 && (e[n].view().updateWithControlParameters(t.offsets),
                  this.updatedViews_.push(i))
              }
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 181,
          "./Composer": 126,
          "minimal-event-emitter": 209
      }],
      129: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Dynamics")
            , o = t("./HammerGestures")
            , s = t("../util/defaults")
            , a = t("./util").maxFriction
            , l = t("../util/clearOwnProperties")
            , u = {
              friction: 6,
              maxFrictionTime: .3
          }
            , c = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;
          function h(t, e, n) {
              this._element = t,
              this._opts = s(n || {}, u),
              this._startEvent = null,
              this._lastEvent = null,
              this._active = !1,
              this._dynamics = {
                  x: new r,
                  y: new r
              },
              this._hammer = o.get(t, e),
              this._hammer.on("hammer.input", this._handleHammerEvent.bind(this)),
              this._hammer.on("panstart", this._handleStart.bind(this)),
              this._hammer.on("panmove", this._handleMove.bind(this)),
              this._hammer.on("panend", this._handleEnd.bind(this)),
              this._hammer.on("pancancel", this._handleEnd.bind(this))
          }
          i(h),
          h.prototype.destroy = function() {
              this._hammer.release(),
              l(this)
          }
          ,
          h.prototype._handleHammerEvent = function(t) {
              if (t.isFirst) {
                  if (c && this._active)
                      throw new Error("DragControlMethod active detected when already active");
                  this._active = !0,
                  this.emit("active")
              }
              if (t.isFinal) {
                  if (c && !this._active)
                      throw new Error("DragControlMethod inactive detected when already inactive");
                  this._active = !1,
                  this.emit("inactive")
              }
          }
          ,
          h.prototype._handleStart = function(t) {
              t.preventDefault(),
              this._startEvent = t
          }
          ,
          h.prototype._handleMove = function(t) {
              t.preventDefault(),
              this._startEvent && (this._updateDynamicsMove(t),
              this.emit("parameterDynamics", "axisScaledX", this._dynamics.x),
              this.emit("parameterDynamics", "axisScaledY", this._dynamics.y))
          }
          ,
          h.prototype._handleEnd = function(t) {
              t.preventDefault(),
              this._startEvent && (this._updateDynamicsRelease(t),
              this.emit("parameterDynamics", "axisScaledX", this._dynamics.x),
              this.emit("parameterDynamics", "axisScaledY", this._dynamics.y)),
              this._startEvent = !1,
              this._lastEvent = !1
          }
          ,
          h.prototype._updateDynamicsMove = function(t) {
              var e = t.deltaX
                , n = t.deltaY
                , i = this._lastEvent || this._startEvent;
              i && (e -= i.deltaX,
              n -= i.deltaY);
              var r = this._element.getBoundingClientRect();
              e /= r.right - r.left,
              n /= r.bottom - r.top,
              this._dynamics.x.reset(),
              this._dynamics.y.reset(),
              this._dynamics.x.offset = -e,
              this._dynamics.y.offset = -n,
              this._lastEvent = t
          }
          ;
          var p = [null, null];
          h.prototype._updateDynamicsRelease = function(t) {
              var e = this._element.getBoundingClientRect()
                , n = e.right - e.left
                , i = e.bottom - e.top
                , r = 1e3 * t.velocityX / n
                , o = 1e3 * t.velocityY / i;
              this._dynamics.x.reset(),
              this._dynamics.y.reset(),
              this._dynamics.x.velocity = r,
              this._dynamics.y.velocity = o,
              a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, p),
              this._dynamics.x.friction = p[0],
              this._dynamics.y.friction = p[1]
          }
          ,
          e.exports = h
      }
      , {
          "../util/clearOwnProperties": 181,
          "../util/defaults": 186,
          "./Dynamics": 130,
          "./HammerGestures": 132,
          "./util": 140,
          "minimal-event-emitter": 209
      }],
      130: [function(t, e, n) {
          "use strict";
          function i() {
              this.velocity = null,
              this.friction = null,
              this.offset = null
          }
          i.equals = function(t, e) {
              return t.velocity === e.velocity && t.friction === e.friction && t.offset === e.offset
          }
          ,
          i.prototype.equals = function(t) {
              return i.equals(this, t)
          }
          ,
          i.prototype.update = function(t, e) {
              t.offset && (this.offset = this.offset || 0,
              this.offset += t.offset);
              var n = this.offsetFromVelocity(e);
              n && (this.offset = this.offset || 0,
              this.offset += n),
              this.velocity = t.velocity,
              this.friction = t.friction
          }
          ,
          i.prototype.reset = function() {
              this.velocity = null,
              this.friction = null,
              this.offset = null
          }
          ,
          i.prototype.velocityAfter = function(t) {
              return this.velocity ? this.friction ? function(t, e) {
                  if (t < 0)
                      return Math.min(0, t + e);
                  if (t > 0)
                      return Math.max(0, t - e);
                  return 0
              }(this.velocity, this.friction * t) : this.velocity : null
          }
          ,
          i.prototype.offsetFromVelocity = function(t) {
              t = Math.min(t, this.nullVelocityTime());
              var e = this.velocityAfter(t);
              return (this.velocity + e) / 2 * t
          }
          ,
          i.prototype.nullVelocityTime = function() {
              return null == this.velocity ? 0 : this.velocity && !this.friction ? 1 / 0 : Math.abs(this.velocity / this.friction)
          }
          ,
          e.exports = i
      }
      , {}],
      131: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Dynamics")
            , o = t("../util/clearOwnProperties");
          function s(t, e, n, i) {
              if (!t)
                  throw new Error("ElementPressControlMethod: element must be defined");
              if (!e)
                  throw new Error("ElementPressControlMethod: parameter must be defined");
              if (!n)
                  throw new Error("ElementPressControlMethod: velocity must be defined");
              if (!i)
                  throw new Error("ElementPressControlMethod: friction must be defined");
              this._element = t,
              this._pressHandler = this._handlePress.bind(this),
              this._releaseHandler = this._handleRelease.bind(this),
              t.addEventListener("mousedown", this._pressHandler),
              t.addEventListener("mouseup", this._releaseHandler),
              t.addEventListener("mouseleave", this._releaseHandler),
              t.addEventListener("touchstart", this._pressHandler),
              t.addEventListener("touchmove", this._releaseHandler),
              t.addEventListener("touchend", this._releaseHandler),
              this._parameter = e,
              this._velocity = n,
              this._friction = i,
              this._dynamics = new r,
              this._pressing = !1
          }
          i(s),
          s.prototype.destroy = function() {
              this._element.removeEventListener("mousedown", this._pressHandler),
              this._element.removeEventListener("mouseup", this._releaseHandler),
              this._element.removeEventListener("mouseleave", this._releaseHandler),
              this._element.removeEventListener("touchstart", this._pressHandler),
              this._element.removeEventListener("touchmove", this._releaseHandler),
              this._element.removeEventListener("touchend", this._releaseHandler),
              o(this)
          }
          ,
          s.prototype._handlePress = function() {
              this._pressing = !0,
              this._dynamics.velocity = this._velocity,
              this._dynamics.friction = 0,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("active")
          }
          ,
          s.prototype._handleRelease = function() {
              this._pressing && (this._dynamics.friction = this._friction,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("inactive")),
              this._pressing = !1
          }
          ,
          e.exports = s
      }
      , {
          "../util/clearOwnProperties": 181,
          "./Dynamics": 130,
          "minimal-event-emitter": 209
      }],
      132: [function(t, e, n) {
          "use strict";
          var i = t("hammerjs")
            , r = t("bowser")
            , o = 1
            , s = "MarzipanoHammerElementId";
          function a(t, e) {
              return t[s] || (t[s] = o++),
              e + t[s]
          }
          function l() {
              this._managers = {},
              this._refCount = {}
          }
          function u(t, e, n, i) {
              this._manager = e,
              this._element = n,
              this._type = i,
              this._hammerGestures = t,
              this._eventHandlers = []
          }
          l.prototype.get = function(t, e) {
              var n = a(t, e);
              return this._managers[n] || (this._managers[n] = this._createManager(t, e),
              this._refCount[n] = 0),
              this._refCount[n]++,
              new u(this,this._managers[n],t,e)
          }
          ,
          l.prototype._createManager = function(t, e) {
              var n = new i.Manager(t);
              return "mouse" === e ? n.add(new i.Pan({
                  direction: i.DIRECTION_ALL,
                  threshold: 0
              })) : "touch" !== e && "pen" !== e && "kinect" !== e || (n.add(new i.Pan({
                  direction: i.DIRECTION_ALL,
                  threshold: 20,
                  pointers: 1
              })),
              r.msie && parseFloat(r.version) < 10 || n.add(new i.Pinch)),
              n
          }
          ,
          l.prototype._releaseHandle = function(t, e) {
              var n = a(t, e);
              this._refCount[n] && (this._refCount[n]--,
              this._refCount[n] || (this._managers[n].destroy(),
              delete this._managers[n],
              delete this._refCount[n]))
          }
          ,
          u.prototype.on = function(t, e) {
              var n = this._type
                , i = function(t) {
                  n === t.pointerType && e(t)
              };
              this._eventHandlers.push({
                  events: t,
                  handler: i
              }),
              this._manager.on(t, i)
          }
          ,
          u.prototype.release = function() {
              for (var t = 0; t < this._eventHandlers.length; t++) {
                  var e = this._eventHandlers[t];
                  this._manager.off(e.events, e.handler)
              }
              this._hammerGestures._releaseHandle(this._element, this._type),
              this._manager = null,
              this._element = null,
              this._type = null,
              this._hammerGestures = null
          }
          ,
          u.prototype.manager = function() {
              return this._manager
          }
          ,
          e.exports = new l
      }
      , {
          bowser: 104,
          hammerjs: 14
      }],
      133: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Dynamics")
            , o = t("../util/clearOwnProperties");
          function s(t, e, n, i, o) {
              if (!t)
                  throw new Error("KeyControlMethod: keyCode must be defined");
              if (!e)
                  throw new Error("KeyControlMethod: parameter must be defined");
              if (!n)
                  throw new Error("KeyControlMethod: velocity must be defined");
              if (!i)
                  throw new Error("KeyControlMethod: friction must be defined");
              o = o || document,
              this._keyCode = t,
              this._parameter = e,
              this._velocity = n,
              this._friction = i,
              this._element = o,
              this._keydownHandler = this._handlePress.bind(this),
              this._keyupHandler = this._handleRelease.bind(this),
              this._blurHandler = this._handleBlur.bind(this),
              this._element.addEventListener("keydown", this._keydownHandler),
              this._element.addEventListener("keyup", this._keyupHandler),
              window.addEventListener("blur", this._blurHandler),
              this._dynamics = new r,
              this._pressing = !1
          }
          i(s),
          s.prototype.destroy = function() {
              this._element.removeEventListener("keydown", this._keydownHandler),
              this._element.removeEventListener("keyup", this._keyupHandler),
              window.removeEventListener("blur", this._blurHandler),
              o(this)
          }
          ,
          s.prototype._handlePress = function(t) {
              t.keyCode === this._keyCode && (this._pressing = !0,
              this._dynamics.velocity = this._velocity,
              this._dynamics.friction = 0,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("active"))
          }
          ,
          s.prototype._handleRelease = function(t) {
              t.keyCode === this._keyCode && (this._pressing && (this._dynamics.friction = this._friction,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("inactive")),
              this._pressing = !1)
          }
          ,
          s.prototype._handleBlur = function() {
              this._dynamics.velocity = 0,
              this.emit("parameterDynamics", this._parameter, this._dynamics),
              this.emit("inactive"),
              this._pressing = !1
          }
          ,
          e.exports = s
      }
      , {
          "../util/clearOwnProperties": 181,
          "./Dynamics": 130,
          "minimal-event-emitter": 209
      }],
      134: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Dynamics")
            , o = t("./HammerGestures")
            , s = t("../util/clearOwnProperties");
          function a(t, e, n) {
              this._hammer = o.get(t, e),
              this._lastEvent = null,
              this._active = !1,
              this._dynamics = new r,
              this._hammer.on("pinchstart", this._handleStart.bind(this)),
              this._hammer.on("pinch", this._handleEvent.bind(this)),
              this._hammer.on("pinchend", this._handleEnd.bind(this)),
              this._hammer.on("pinchcancel", this._handleEnd.bind(this))
          }
          i(a),
          a.prototype.destroy = function() {
              this._hammer.release(),
              s(this)
          }
          ,
          a.prototype._handleStart = function() {
              this._active || (this._active = !0,
              this.emit("active"))
          }
          ,
          a.prototype._handleEnd = function() {
              this._lastEvent = null,
              this._active && (this._active = !1,
              this.emit("inactive"))
          }
          ,
          a.prototype._handleEvent = function(t) {
              var e = t.scale;
              this._lastEvent && (e /= this._lastEvent.scale),
              this._dynamics.offset = -1 * (e - 1),
              this.emit("parameterDynamics", "zoom", this._dynamics),
              this._lastEvent = t
          }
          ,
          e.exports = a
      }
      , {
          "../util/clearOwnProperties": 181,
          "./Dynamics": 130,
          "./HammerGestures": 132,
          "minimal-event-emitter": 209
      }],
      135: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Dynamics")
            , o = t("./HammerGestures")
            , s = t("../util/defaults")
            , a = t("./util").maxFriction
            , l = t("../util/clearOwnProperties")
            , u = {
              speed: 8,
              friction: 6,
              maxFrictionTime: .3
          };
          function c(t, e, n) {
              this._element = t,
              this._opts = s(n || {}, u),
              this._active = !1,
              this._hammer = o.get(t, e),
              this._dynamics = {
                  x: new r,
                  y: new r
              },
              this._hammer.on("panstart", this._handleStart.bind(this)),
              this._hammer.on("panmove", this._handleMove.bind(this)),
              this._hammer.on("panend", this._handleRelease.bind(this)),
              this._hammer.on("pancancel", this._handleRelease.bind(this))
          }
          i(c),
          c.prototype.destroy = function() {
              this._hammer.release(),
              l(this)
          }
          ,
          c.prototype._handleStart = function(t) {
              t.preventDefault(),
              this._active || (this._active = !0,
              this.emit("active"))
          }
          ,
          c.prototype._handleMove = function(t) {
              t.preventDefault(),
              this._updateDynamics(t, !1)
          }
          ,
          c.prototype._handleRelease = function(t) {
              t.preventDefault(),
              this._updateDynamics(t, !0),
              this._active && (this._active = !1,
              this.emit("inactive"))
          }
          ;
          var h = [null, null];
          c.prototype._updateDynamics = function(t, e) {
              var n = this._element.getBoundingClientRect()
                , i = n.right - n.left
                , r = n.bottom - n.top
                , o = Math.max(i, r)
                , s = t.deltaX / o * this._opts.speed
                , l = t.deltaY / o * this._opts.speed;
              this._dynamics.x.reset(),
              this._dynamics.y.reset(),
              this._dynamics.x.velocity = s,
              this._dynamics.y.velocity = l,
              e && (a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, h),
              this._dynamics.x.friction = h[0],
              this._dynamics.y.friction = h[1]),
              this.emit("parameterDynamics", "x", this._dynamics.x),
              this.emit("parameterDynamics", "y", this._dynamics.y)
          }
          ,
          e.exports = c
      }
      , {
          "../util/clearOwnProperties": 181,
          "../util/defaults": 186,
          "./Dynamics": 130,
          "./HammerGestures": 132,
          "./util": 140,
          "minimal-event-emitter": 209
      }],
      136: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Dynamics")
            , o = t("./WheelListener")
            , s = t("../util/defaults")
            , a = t("../util/clearOwnProperties")
            , l = {
              frictionTime: .2,
              zoomDelta: .001
          };
          function u(t, e) {
              this._opts = s(e || {}, l),
              this._dynamics = new r,
              this._eventList = [];
              var n = this._opts.frictionTime ? this.withSmoothing : this.withoutSmoothing;
              this._wheelListener = new o(t,n.bind(this))
          }
          function c(t) {
              var e = 1 == t.deltaMode ? 20 : 1;
              return t.deltaY * e
          }
          i(u),
          u.prototype.destroy = function() {
              this._wheelListener.destroy(),
              a(this)
          }
          ,
          u.prototype.withoutSmoothing = function(t) {
              this._dynamics.offset = c(t) * this._opts.zoomDelta,
              this.emit("parameterDynamics", "zoom", this._dynamics),
              t.preventDefault(),
              this.emit("active"),
              this.emit("inactive")
          }
          ,
          u.prototype.withSmoothing = function(t) {
              var e = t.timeStamp;
              for (this._eventList.push(t); this._eventList[0].timeStamp < e - 1e3 * this._opts.frictionTime; )
                  this._eventList.shift(0);
              for (var n = 0, i = 0; i < this._eventList.length; i++) {
                  n += c(this._eventList[i]) * this._opts.zoomDelta / this._opts.frictionTime
              }
              this._dynamics.velocity = n,
              this._dynamics.friction = Math.abs(n) / this._opts.frictionTime,
              this.emit("parameterDynamics", "zoom", this._dynamics),
              t.preventDefault(),
              this.emit("active"),
              this.emit("inactive")
          }
          ,
          e.exports = u
      }
      , {
          "../util/clearOwnProperties": 181,
          "../util/defaults": 186,
          "./Dynamics": 130,
          "./WheelListener": 138,
          "minimal-event-emitter": 209
      }],
      137: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("./Dynamics")
            , o = t("../util/clearOwnProperties");
          function s(t) {
              if (!t)
                  throw new Error("VelocityControlMethod: parameter must be defined");
              this._parameter = t,
              this._dynamics = new r
          }
          i(s),
          s.prototype.destroy = function() {
              o(this)
          }
          ,
          s.prototype.setVelocity = function(t) {
              this._dynamics.velocity = t,
              this.emit("parameterDynamics", this._parameter, this._dynamics)
          }
          ,
          s.prototype.setFriction = function(t) {
              this._dynamics.friction = t,
              this.emit("parameterDynamics", this._parameter, this._dynamics)
          }
          ,
          e.exports = s
      }
      , {
          "../util/clearOwnProperties": 181,
          "./Dynamics": 130,
          "minimal-event-emitter": 209
      }],
      138: [function(t, e, n) {
          "use strict";
          var i, r = t("../util/clearOwnProperties");
          function o(t, e, n) {
              var i = s();
              if ("wheel" === i)
                  this._fun = e,
                  this._elem = t,
                  this._elem.addEventListener("wheel", this._fun, n);
              else {
                  if ("mousewheel" !== i)
                      throw new Error("Browser does not support mouse wheel events");
                  this._fun = function(t) {
                      return function(e) {
                          e || (e = window.event);
                          var n = {
                              originalEvent: e,
                              target: e.target || e.srcElement,
                              type: "wheel",
                              deltaMode: 1,
                              deltaX: 0,
                              deltaZ: 0,
                              timeStamp: e.timeStamp || Date.now(),
                              preventDefault: e.preventDefault.bind(e)
                          };
                          return n.deltaY = -.025 * e.wheelDelta,
                          e.wheelDeltaX && (n.deltaX = -.025 * e.wheelDeltaX),
                          t(n)
                      }
                  }(e),
                  this._elem = t,
                  this._elem.addEventListener("mousewheel", this._fun, n)
              }
          }
          function s() {
              return void 0 !== i ? i : i = "onwheel"in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : null
          }
          o.prototype.destroy = function() {
              this._elem.removeEventListener(s(), this._fun),
              r(this)
          }
          ,
          e.exports = o
      }
      , {
          "../util/clearOwnProperties": 181
      }],
      139: [function(t, e, n) {
          "use strict";
          var i = t("../util/defaults")
            , r = t("./Drag")
            , o = t("./Qtvr")
            , s = t("./ScrollZoom")
            , a = t("./PinchZoom")
            , l = t("./Key")
            , u = {
              mouseViewMode: "drag"
          };
          e.exports = function(t, e, n) {
              n = i(n || {}, u);
              var c = {
                  mouseViewDrag: new r(e,"mouse"),
                  mouseViewQtvr: new o(e,"mouse"),
                  touchView: new r(e,"touch"),
                  pinch: new a(e,"touch"),
                  leftArrowKey: new l(37,"x",-.7,3),
                  rightArrowKey: new l(39,"x",.7,3),
                  upArrowKey: new l(38,"y",-.7,3),
                  downArrowKey: new l(40,"y",.7,3),
                  plusKey: new l(107,"zoom",-.7,3),
                  minusKey: new l(109,"zoom",.7,3),
                  wKey: new l(87,"y",-.7,3),
                  aKey: new l(65,"x",-.7,3),
                  sKey: new l(83,"y",.7,3),
                  dKey: new l(68,"x",.7,3),
                  qKey: new l(81,"roll",.7,3),
                  eKey: new l(69,"roll",-.7,3)
              };
              !1 !== n.scrollZoom && (c.scrollZoom = new s(e));
              var h = {
                  arrowKeys: ["leftArrowKey", "rightArrowKey", "upArrowKey", "downArrowKey"],
                  plusMinusKeys: ["plusKey", "minusKey"],
                  wasdKeys: ["wKey", "aKey", "sKey", "dKey"],
                  qeKeys: ["qKey", "eKey"]
              }
                , p = ["scrollZoom", "touchView", "pinch"];
              switch (n.mouseViewMode) {
              case "drag":
                  p.push("mouseViewDrag");
                  break;
              case "qtvr":
                  p.push("mouseViewQtvr");
                  break;
              default:
                  throw new Error("Unknown mouse view mode: " + n.mouseViewMode)
              }
              for (var d in c) {
                  var f = c[d];
                  t.registerMethod(d, f),
                  p.indexOf(d) >= 0 && t.enableMethod(d)
              }
              for (var m in h) {
                  var v = h[m];
                  t.addMethodGroup(m, v)
              }
              return c
          }
      }
      , {
          "../util/defaults": 186,
          "./Drag": 129,
          "./Key": 133,
          "./PinchZoom": 134,
          "./Qtvr": 135,
          "./ScrollZoom": 136
      }],
      140: [function(t, e, n) {
          "use strict";
          function i(t, e, n, i) {
              var r = Math.atan(e / t);
              i[0] = n * Math.cos(r),
              i[1] = n * Math.sin(r)
          }
          e.exports = {
              maxFriction: function(t, e, n, r, o) {
                  var s = Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2));
                  i(e, n, t = Math.max(t, s / r), o),
                  o[0] = Math.abs(o[0]),
                  o[1] = Math.abs(o[1])
              },
              changeVectorNorm: i
          }
      }
      , {}],
      141: [function(t, e, n) {
          "use strict";
          var i = t("../util/inherits")
            , r = t("../util/hash")
            , o = t("../TileSearcher")
            , s = t("../collections/LruMap")
            , a = t("./Level")
            , l = t("./common").makeLevelList
            , u = t("./common").makeSelectableLevelList
            , c = t("../util/clamp")
            , h = t("../util/cmp")
            , p = t("../util/type")
            , d = t("gl-matrix").vec3
            , f = t("gl-matrix").vec4
            , m = 64
            , v = {
              f: {
                  x: 0,
                  y: 0
              },
              b: {
                  x: 0,
                  y: Math.PI
              },
              l: {
                  x: 0,
                  y: Math.PI / 2
              },
              r: {
                  x: 0,
                  y: -Math.PI / 2
              },
              u: {
                  x: Math.PI / 2,
                  y: 0
              },
              d: {
                  x: -Math.PI / 2,
                  y: 0
              }
          }
            , y = d.create();
          function g(t, e, n, i) {
              e && d.rotateZ(t, t, y, e),
              n && d.rotateX(t, t, y, n),
              i && d.rotateY(t, t, y, i)
          }
          for (var _ = {}, b = 0; b < "fudlrb".length; b++) {
              var w = "fudlrb"[b]
                , x = v[w]
                , S = d.fromValues(0, 0, -1);
              g(S, 0, x.x, x.y),
              _[w] = S
          }
          var M = {
              f: ["l", "r", "u", "d"],
              b: ["r", "l", "u", "d"],
              l: ["b", "f", "u", "d"],
              r: ["f", "b", "u", "d"],
              u: ["l", "r", "b", "f"],
              d: ["l", "r", "f", "b"]
          }
            , E = [[0, 1], [1, 0], [0, -1], [-1, 0]];
          function T(t, e, n, i, r) {
              this.face = t,
              this.x = e,
              this.y = n,
              this.z = i,
              this._geometry = r,
              this._level = r.levelList[i]
          }
          function D(t) {
              if (this.constructor.super_.call(this, t),
              this._size = t.size,
              this._tileSize = t.tileSize,
              this._size % this._tileSize != 0)
                  throw new Error("Level size is not multiple of tile size: " + this._size + " " + this._tileSize)
          }
          function I(t) {
              if ("array" !== p(t))
                  throw new Error("Level list must be an array");
              this.levelList = l(t, D),
              this.selectableLevelList = u(this.levelList);
              for (var e = 1; e < this.levelList.length; e++)
                  this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
              this._tileSearcher = new o(this),
              this._neighborsCache = new s(m),
              this._vec = f.create(),
              this._viewSize = {}
          }
          T.prototype.rotX = function() {
              return v[this.face].x
          }
          ,
          T.prototype.rotY = function() {
              return v[this.face].y
          }
          ,
          T.prototype.centerX = function() {
              return (this.x + .5) / this._level.numHorizontalTiles() - .5
          }
          ,
          T.prototype.centerY = function() {
              return .5 - (this.y + .5) / this._level.numVerticalTiles()
          }
          ,
          T.prototype.scaleX = function() {
              return 1 / this._level.numHorizontalTiles()
          }
          ,
          T.prototype.scaleY = function() {
              return 1 / this._level.numVerticalTiles()
          }
          ,
          T.prototype.width = function() {
              return this._level.tileWidth()
          }
          ,
          T.prototype.height = function() {
              return this._level.tileHeight()
          }
          ,
          T.prototype.levelWidth = function() {
              return this._level.width()
          }
          ,
          T.prototype.levelHeight = function() {
              return this._level.height()
          }
          ,
          T.prototype.atTopLevel = function() {
              return 0 === this.z
          }
          ,
          T.prototype.atBottomLevel = function() {
              return this.z === this._geometry.levelList.length - 1
          }
          ,
          T.prototype.atTopEdge = function() {
              return 0 === this.y
          }
          ,
          T.prototype.atBottomEdge = function() {
              return this.y === this._level.numVerticalTiles() - 1
          }
          ,
          T.prototype.atLeftEdge = function() {
              return 0 === this.x
          }
          ,
          T.prototype.atRightEdge = function() {
              return this.x === this._level.numHorizontalTiles() - 1
          }
          ,
          T.prototype.padTop = function() {
              return this.atTopEdge() && /[fu]/.test(this.face)
          }
          ,
          T.prototype.padBottom = function() {
              return !this.atBottomEdge() || /[fd]/.test(this.face)
          }
          ,
          T.prototype.padLeft = function() {
              return this.atLeftEdge() && /[flud]/.test(this.face)
          }
          ,
          T.prototype.padRight = function() {
              return !this.atRightEdge() || /[frud]/.test(this.face)
          }
          ,
          T.prototype.vertices = function(t) {
              t || (t = [d.create(), d.create(), d.create(), d.create()]);
              var e = v[this.face];
              function n(t, n, i) {
                  d.set(t, n, i, -.5),
                  g(t, 0, e.x, e.y)
              }
              var i = this.centerX() - this.scaleX() / 2
                , r = this.centerX() + this.scaleX() / 2
                , o = this.centerY() - this.scaleY() / 2
                , s = this.centerY() + this.scaleY() / 2;
              return n(t[0], i, s),
              n(t[1], r, s),
              n(t[2], r, o),
              n(t[3], i, o),
              t
          }
          ,
          T.prototype.parent = function() {
              if (this.atTopLevel())
                  return null;
              var t = this.face
                , e = this.z
                , n = this.x
                , i = this.y
                , r = this._geometry
                , o = r.levelList[e]
                , s = r.levelList[e - 1];
              return new T(t,Math.floor(n / o.numHorizontalTiles() * s.numHorizontalTiles()),Math.floor(i / o.numVerticalTiles() * s.numVerticalTiles()),e - 1,r)
          }
          ,
          T.prototype.children = function(t) {
              if (this.atBottomLevel())
                  return null;
              var e = this.face
                , n = this.z
                , i = this.x
                , r = this.y
                , o = this._geometry
                , s = o.levelList[n]
                , a = o.levelList[n + 1]
                , l = a.numHorizontalTiles() / s.numHorizontalTiles()
                , u = a.numVerticalTiles() / s.numVerticalTiles();
              t = t || [];
              for (var c = 0; c < l; c++)
                  for (var h = 0; h < u; h++) {
                      var p = l * i + c
                        , d = u * r + h
                        , f = n + 1;
                      t.push(new T(e,p,d,f,o))
                  }
              return t
          }
          ,
          T.prototype.neighbors = function() {
              var t = this._geometry
                , e = t._neighborsCache
                , n = e.get(this);
              if (n)
                  return n;
              for (var i = t._vec, r = this.face, o = this.x, s = this.y, a = this.z, l = this._level, u = l.numHorizontalTiles(), h = l.numVerticalTiles(), p = [], f = 0; f < E.length; f++) {
                  var m = o + E[f][0]
                    , y = s + E[f][1]
                    , _ = a
                    , b = r;
                  if (m < 0 || m >= u || y < 0 || y >= h) {
                      var w, x = this.centerX(), S = this.centerY();
                      m < 0 ? (d.set(i, -.5, S, -.5),
                      b = M[r][0]) : m >= u ? (d.set(i, .5, S, -.5),
                      b = M[r][1]) : y < 0 ? (d.set(i, x, .5, -.5),
                      b = M[r][2]) : y >= h && (d.set(i, x, -.5, -.5),
                      b = M[r][3]),
                      g(i, 0, (w = v[r]).x, w.y),
                      g(i, 0, -(w = v[b]).x, -w.y),
                      m = c(Math.floor((.5 + i[0]) * u), 0, u - 1),
                      y = c(Math.floor((.5 - i[1]) * h), 0, h - 1)
                  }
                  p.push(new T(b,m,y,_,t))
              }
              return e.set(this, p),
              p
          }
          ,
          T.prototype.hash = function() {
              return r("fudlrb".indexOf(this.face), this.z, this.y, this.x)
          }
          ,
          T.prototype.equals = function(t) {
              return this.geometry === t.geometry && this.face === t.face && this.z === t.z && this.y === t.y && this.x === t.x
          }
          ,
          T.prototype.cmp = function(t) {
              return h(this.z, t.z) || h("fudlrb".indexOf(this.face), "fudlrb".indexOf(t.face)) || h(this.y, t.y) || h(this.x, t.x)
          }
          ,
          T.prototype.str = function() {
              return "CubeTile(" + tile.face + ", " + tile.x + ", " + tile.y + ", " + tile.z + ")"
          }
          ,
          i(D, a),
          D.prototype.width = function() {
              return this._size
          }
          ,
          D.prototype.height = function() {
              return this._size
          }
          ,
          D.prototype.tileWidth = function() {
              return this._tileSize
          }
          ,
          D.prototype.tileHeight = function() {
              return this._tileSize
          }
          ,
          D.prototype._validateWithParentLevel = function(t) {
              var e = this.width()
                , n = this.height()
                , i = this.tileWidth()
                , r = this.tileHeight()
                , o = this.numHorizontalTiles()
                , s = this.numVerticalTiles()
                , a = t.width()
                , l = t.height()
                , u = t.tileWidth()
                , c = t.tileHeight()
                , h = t.numHorizontalTiles()
                , p = t.numVerticalTiles();
              if (e % a != 0)
                  throw new Error("Level width must be multiple of parent level: " + e + " vs. " + a);
              if (n % l != 0)
                  throw new Error("Level height must be multiple of parent level: " + n + " vs. " + l);
              if (o % h != 0)
                  throw new Error("Number of horizontal tiles must be multiple of parent level: " + o + " (" + e + "/" + i + ") vs. " + h + " (" + a + "/" + u + ")");
              if (s % p != 0)
                  throw new Error("Number of vertical tiles must be multiple of parent level: " + s + " (" + n + "/" + r + ") vs. " + p + " (" + l + "/" + c + ")")
          }
          ,
          I.prototype.maxTileSize = function() {
              for (var t = 0, e = 0; e < this.levelList.length; e++) {
                  var n = this.levelList[e];
                  t = Math.max(t, n.tileWidth, n.tileHeight)
              }
              return t
          }
          ,
          I.prototype.levelTiles = function(t, e) {
              var n = this.levelList.indexOf(t)
                , i = t.numHorizontalTiles() - 1
                , r = t.numVerticalTiles() - 1;
              e = e || [];
              for (var o = 0; o < "fudlrb".length; o++)
                  for (var s = "fudlrb"[o], a = 0; a <= i; a++)
                      for (var l = 0; l <= r; l++)
                          e.push(new T(s,a,l,n,this));
              return e
          }
          ,
          I.prototype._closestTile = function(t, e) {
              var n = this._vec;
              f.set(n, 0, 0, 1, 1),
              f.transformMat4(n, n, t.inverseProjection());
              var i = 1 / 0
                , r = null;
              for (var o in _) {
                  var s = _[o]
                    , a = 1 - d.dot(s, n);
                  a < i && (i = a,
                  r = o)
              }
              for (var l = Math.max(Math.abs(n[0]), Math.abs(n[1]), Math.abs(n[2])) / .5, u = 0; u < 3; u++)
                  n[u] = n[u] / l;
              var h = v[r];
              g(n, 0, -h.x, -h.y);
              var p = this.levelList.indexOf(e)
                , m = e.numHorizontalTiles()
                , y = e.numVerticalTiles();
              return new T(r,c(Math.floor((.5 + n[0]) * m), 0, m - 1),c(Math.floor((.5 - n[1]) * y), 0, y - 1),p,this)
          }
          ,
          I.prototype.visibleTiles = function(t, e, n) {
              var i = this._viewSize
                , r = this._tileSearcher;
              if (n = n || [],
              t.size(i),
              0 === i.width || 0 === i.height)
                  return n;
              var o = this._closestTile(t, e);
              if (!r.search(t, o, n))
                  throw new Error("Starting tile is not visible");
              return n
          }
          ,
          I.Tile = I.prototype.Tile = T,
          I.type = I.prototype.type = "cube",
          T.type = T.prototype.type = "cube",
          e.exports = I
      }
      , {
          "../TileSearcher": 112,
          "../collections/LruMap": 119,
          "../util/clamp": 180,
          "../util/cmp": 182,
          "../util/hash": 193,
          "../util/inherits": 194,
          "../util/type": 206,
          "./Level": 144,
          "./common": 145,
          "gl-matrix": 4
      }],
      142: [function(t, e, n) {
          "use strict";
          var i = t("../util/inherits")
            , r = t("../util/hash")
            , o = t("../util/cmp")
            , s = t("./common")
            , a = t("./Level")
            , l = t("../util/type");
          function u(t, e) {
              this.z = t,
              this._geometry = e,
              this._level = e.levelList[t]
          }
          function c(t) {
              this.constructor.super_.call(this, t),
              this._width = t.width
          }
          function h(t) {
              if ("array" !== l(t))
                  throw new Error("Level list must be an array");
              this.levelList = s.makeLevelList(t, c),
              this.selectableLevelList = s.makeSelectableLevelList(this.levelList)
          }
          u.prototype.rotX = function() {
              return 0
          }
          ,
          u.prototype.rotY = function() {
              return 0
          }
          ,
          u.prototype.centerX = function() {
              return .5
          }
          ,
          u.prototype.centerY = function() {
              return .5
          }
          ,
          u.prototype.scaleX = function() {
              return 1
          }
          ,
          u.prototype.scaleY = function() {
              return 1
          }
          ,
          u.prototype.width = function() {
              return this._level.tileWidth()
          }
          ,
          u.prototype.height = function() {
              return this._level.tileHeight()
          }
          ,
          u.prototype.levelWidth = function() {
              return this._level.width()
          }
          ,
          u.prototype.levelHeight = function() {
              return this._level.height()
          }
          ,
          u.prototype.atTopLevel = function() {
              return 0 === this.z
          }
          ,
          u.prototype.atBottomLevel = function() {
              return this.z === this._geometry.levelList.length - 1
          }
          ,
          u.prototype.atTopEdge = function() {
              return !0
          }
          ,
          u.prototype.atBottomEdge = function() {
              return !0
          }
          ,
          u.prototype.atLeftEdge = function() {
              return !0
          }
          ,
          u.prototype.atRightEdge = function() {
              return !0
          }
          ,
          u.prototype.padTop = function() {
              return !1
          }
          ,
          u.prototype.padBottom = function() {
              return !1
          }
          ,
          u.prototype.padLeft = function() {
              return !1
          }
          ,
          u.prototype.padRight = function() {
              return !1
          }
          ,
          u.prototype.parent = function() {
              return this.atTopLevel() ? null : new u(this.z - 1,this._geometry)
          }
          ,
          u.prototype.children = function(t) {
              return this.atBottomLevel() ? null : ((t = t || []).push(new u(this.z + 1,this._geometry)),
              t)
          }
          ,
          u.prototype.neighbors = function() {
              return []
          }
          ,
          u.prototype.hash = function() {
              return r(this.z)
          }
          ,
          u.prototype.equals = function(t) {
              return this.geometry === t.geometry && this.z === t.z
          }
          ,
          u.prototype.cmp = function(t) {
              return o(this.z, t.z)
          }
          ,
          u.prototype.str = function() {
              return "EquirectTile(" + tile.z + ")"
          }
          ,
          i(c, a),
          c.prototype.width = function() {
              return this._width
          }
          ,
          c.prototype.height = function() {
              return this._width / 2
          }
          ,
          c.prototype.tileWidth = function() {
              return this._width
          }
          ,
          c.prototype.tileHeight = function() {
              return this._width / 2
          }
          ,
          h.prototype.maxTileSize = function() {
              for (var t = 0, e = 0; e < this.levelList.length; e++) {
                  var n = this.levelList[e];
                  t = Math.max(t, n.tileWidth, n.tileHeight)
              }
              return t
          }
          ,
          h.prototype.levelTiles = function(t, e) {
              var n = this.levelList.indexOf(t);
              return (e = e || []).push(new u(n,this)),
              e
          }
          ,
          h.prototype.visibleTiles = function(t, e, n) {
              var i = new u(this.levelList.indexOf(e),this);
              (n = n || []).length = 0,
              n.push(i)
          }
          ,
          h.Tile = h.prototype.Tile = u,
          h.type = h.prototype.type = "equirect",
          u.type = u.prototype.type = "equirect",
          e.exports = h
      }
      , {
          "../util/cmp": 182,
          "../util/hash": 193,
          "../util/inherits": 194,
          "../util/type": 206,
          "./Level": 144,
          "./common": 145
      }],
      143: [function(t, e, n) {
          "use strict";
          var i = t("../util/inherits")
            , r = t("../util/hash")
            , o = t("../TileSearcher")
            , s = t("../collections/LruMap")
            , a = t("./Level")
            , l = t("./common").makeLevelList
            , u = t("./common").makeSelectableLevelList
            , c = t("../util/clamp")
            , h = t("../util/mod")
            , p = t("../util/cmp")
            , d = t("../util/type")
            , f = t("gl-matrix").vec2
            , m = t("gl-matrix").vec4
            , v = 64
            , y = [[0, 1], [1, 0], [0, -1], [-1, 0]];
          function g(t, e, n, i) {
              this.x = t,
              this.y = e,
              this.z = n,
              this._geometry = i,
              this._level = i.levelList[n]
          }
          function _(t) {
              this.constructor.super_.call(this, t),
              this._width = t.width,
              this._height = t.height,
              this._tileWidth = t.tileWidth,
              this._tileHeight = t.tileHeight
          }
          function b(t) {
              if ("array" !== d(t))
                  throw new Error("Level list must be an array");
              this.levelList = l(t, _),
              this.selectableLevelList = u(this.levelList);
              for (var e = 1; e < this.levelList.length; e++)
                  this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
              this._tileSearcher = new o(this),
              this._neighborsCache = new s(v),
              this._vec = m.create(),
              this._viewSize = {}
          }
          g.prototype.rotX = function() {
              return 0
          }
          ,
          g.prototype.rotY = function() {
              return 0
          }
          ,
          g.prototype.centerX = function() {
              var t = this._level.width()
                , e = this._level.tileWidth();
              return (this.x * e + .5 * this.width()) / t - .5
          }
          ,
          g.prototype.centerY = function() {
              var t = this._level.height()
                , e = this._level.tileHeight();
              return .5 - (this.y * e + .5 * this.height()) / t
          }
          ,
          g.prototype.scaleX = function() {
              var t = this._level.width();
              return this.width() / t
          }
          ,
          g.prototype.scaleY = function() {
              var t = this._level.height();
              return this.height() / t
          }
          ,
          g.prototype.width = function() {
              var t = this._level.width()
                , e = this._level.tileWidth();
              return this.atRightEdge() && h(t, e) || e
          }
          ,
          g.prototype.height = function() {
              var t = this._level.height()
                , e = this._level.tileHeight();
              return this.atBottomEdge() && h(t, e) || e
          }
          ,
          g.prototype.levelWidth = function() {
              return this._level.width()
          }
          ,
          g.prototype.levelHeight = function() {
              return this._level.height()
          }
          ,
          g.prototype.atTopLevel = function() {
              return 0 === this.z
          }
          ,
          g.prototype.atBottomLevel = function() {
              return this.z === this._geometry.levelList.length - 1
          }
          ,
          g.prototype.atTopEdge = function() {
              return 0 === this.y
          }
          ,
          g.prototype.atBottomEdge = function() {
              return this.y === this._level.numVerticalTiles() - 1
          }
          ,
          g.prototype.atLeftEdge = function() {
              return 0 === this.x
          }
          ,
          g.prototype.atRightEdge = function() {
              return this.x === this._level.numHorizontalTiles() - 1
          }
          ,
          g.prototype.padTop = function() {
              return !1
          }
          ,
          g.prototype.padBottom = function() {
              return !this.atBottomEdge()
          }
          ,
          g.prototype.padLeft = function() {
              return !1
          }
          ,
          g.prototype.padRight = function() {
              return !this.atRightEdge()
          }
          ,
          g.prototype.vertices = function(t) {
              t || (t = [f.create(), f.create(), f.create(), f.create()]);
              var e = this.centerX() - this.scaleX() / 2
                , n = this.centerX() + this.scaleX() / 2
                , i = this.centerY() - this.scaleY() / 2
                , r = this.centerY() + this.scaleY() / 2;
              return f.set(t[0], e, r),
              f.set(t[1], n, r),
              f.set(t[2], n, i),
              f.set(t[3], e, i),
              t
          }
          ,
          g.prototype.parent = function() {
              if (this.atTopLevel())
                  return null;
              var t = this._geometry
                , e = this.z - 1;
              return new g(Math.floor(this.x / 2),Math.floor(this.y / 2),e,t)
          }
          ,
          g.prototype.children = function(t) {
              if (this.atBottomLevel())
                  return null;
              var e = this._geometry
                , n = this.z + 1;
              return (t = t || []).push(new g(2 * this.x,2 * this.y,n,e)),
              t.push(new g(2 * this.x,2 * this.y + 1,n,e)),
              t.push(new g(2 * this.x + 1,2 * this.y,n,e)),
              t.push(new g(2 * this.x + 1,2 * this.y + 1,n,e)),
              t
          }
          ,
          g.prototype.neighbors = function() {
              var t = this._geometry
                , e = t._neighborsCache
                , n = e.get(this);
              if (n)
                  return n;
              for (var i = this.x, r = this.y, o = this.z, s = this._level, a = s.numHorizontalTiles() - 1, l = s.numVerticalTiles() - 1, u = [], c = 0; c < y.length; c++) {
                  var h = i + y[c][0]
                    , p = r + y[c][1]
                    , d = o;
                  0 <= h && h <= a && 0 <= p && p <= l && u.push(new g(h,p,d,t))
              }
              return e.set(this, u),
              u
          }
          ,
          g.prototype.hash = function() {
              return r(this.z, this.y, this.x)
          }
          ,
          g.prototype.equals = function(t) {
              return this.geometry === t.geometry && this.z === t.z && this.y === t.y && this.x === t.x
          }
          ,
          g.prototype.cmp = function(t) {
              return p(this.z, t.z) || p(this.y, t.y) || p(this.x, t.x)
          }
          ,
          g.prototype.str = function() {
              return "FlatTile(" + tile.x + ", " + tile.y + ", " + tile.z + ")"
          }
          ,
          i(_, a),
          _.prototype.width = function() {
              return this._width
          }
          ,
          _.prototype.height = function() {
              return this._height
          }
          ,
          _.prototype.tileWidth = function() {
              return this._tileWidth
          }
          ,
          _.prototype.tileHeight = function() {
              return this._tileHeight
          }
          ,
          _.prototype._validateWithParentLevel = function(t) {
              var e = this.width()
                , n = this.height()
                , i = this.tileWidth()
                , r = this.tileHeight()
                , o = t.width()
                , s = t.height()
                , a = t.tileWidth()
                , l = t.tileHeight();
              return e % o != 0 ? new Error("Level width must be multiple of parent level: " + e + " vs. " + o) : n % s != 0 ? new Error("Level height must be multiple of parent level: " + n + " vs. " + s) : i % a != 0 ? new Error("Level tile width must be multiple of parent level: " + i + " vs. " + a) : r % l != 0 ? new Error("Level tile height must be multiple of parent level: " + r + " vs. " + l) : void 0
          }
          ,
          b.prototype.maxTileSize = function() {
              for (var t = 0, e = 0; e < this.levelList.length; e++) {
                  var n = this.levelList[e];
                  t = Math.max(t, n.tileWidth, n.tileHeight)
              }
              return t
          }
          ,
          b.prototype.levelTiles = function(t, e) {
              var n = this.levelList.indexOf(t)
                , i = t.numHorizontalTiles() - 1
                , r = t.numVerticalTiles() - 1;
              e || (e = []);
              for (var o = 0; o <= i; o++)
                  for (var s = 0; s <= r; s++)
                      e.push(new g(o,s,n,this));
              return e
          }
          ,
          b.prototype._closestTile = function(t, e) {
              var n = this._vec;
              m.set(n, 0, 0, 1, 1),
              m.transformMat4(n, n, t.inverseProjection());
              var i = .5 + n[0]
                , r = .5 - n[1]
                , o = this.levelList.indexOf(e)
                , s = e.width()
                , a = e.height()
                , l = e.tileWidth()
                , u = e.tileHeight()
                , h = e.numHorizontalTiles()
                , p = e.numVerticalTiles();
              return new g(c(Math.floor(i * s / l), 0, h - 1),c(Math.floor(r * a / u), 0, p - 1),o,this)
          }
          ,
          b.prototype.visibleTiles = function(t, e, n) {
              var i = this._viewSize
                , r = this._tileSearcher;
              if (n = n || [],
              t.size(i),
              0 === i.width || 0 === i.height)
                  return n;
              var o = this._closestTile(t, e);
              if (!r.search(t, o, n))
                  throw new Error("Starting tile is not visible");
              return n
          }
          ,
          b.Tile = b.prototype.Tile = g,
          b.type = b.prototype.type = "flat",
          g.type = g.prototype.type = "flat",
          e.exports = b
      }
      , {
          "../TileSearcher": 112,
          "../collections/LruMap": 119,
          "../util/clamp": 180,
          "../util/cmp": 182,
          "../util/hash": 193,
          "../util/inherits": 194,
          "../util/mod": 196,
          "../util/type": 206,
          "./Level": 144,
          "./common": 145,
          "gl-matrix": 4
      }],
      144: [function(t, e, n) {
          "use strict";
          function i(t) {
              this._fallbackOnly = !!t.fallbackOnly
          }
          i.prototype.numHorizontalTiles = function() {
              return Math.ceil(this.width() / this.tileWidth())
          }
          ,
          i.prototype.numVerticalTiles = function() {
              return Math.ceil(this.height() / this.tileHeight())
          }
          ,
          i.prototype.fallbackOnly = function() {
              return this._fallbackOnly
          }
          ,
          e.exports = i
      }
      , {}],
      145: [function(t, e, n) {
          "use strict";
          var i = t("../util/cmp");
          e.exports = {
              makeLevelList: function(t, e) {
                  for (var n = [], r = 0; r < t.length; r++)
                      n.push(new e(t[r]));
                  return n.sort(function(t, e) {
                      return i(t.width(), e.width())
                  }),
                  n
              },
              makeSelectableLevelList: function(t) {
                  for (var e = [], n = 0; n < t.length; n++)
                      t[n]._fallbackOnly || e.push(t[n]);
                  if (!e.length)
                      throw new Error("No selectable levels in list");
                  return e
              }
          }
      }
      , {
          "../util/cmp": 182
      }],
      146: [function(t, e, n) {
          "use strict";
          e.exports = {
              WebGlStage: t("./stages/WebGl"),
              CssStage: t("./stages/Css"),
              FlashStage: t("./stages/Flash"),
              WebGlCubeRenderer: t("./renderers/WebGlCube"),
              WebGlFlatRenderer: t("./renderers/WebGlFlat"),
              WebGlEquirectRenderer: t("./renderers/WebGlEquirect"),
              CssCubeRenderer: t("./renderers/CssCube"),
              CssFlatRenderer: t("./renderers/CssFlat"),
              FlashCubeRenderer: t("./renderers/FlashCube"),
              FlashFlatRenderer: t("./renderers/FlashFlat"),
              registerDefaultRenderers: t("./renderers/registerDefaultRenderers"),
              CubeGeometry: t("./geometries/Cube"),
              FlatGeometry: t("./geometries/Flat"),
              EquirectGeometry: t("./geometries/Equirect"),
              RectilinearView: t("./views/Rectilinear"),
              FlatView: t("./views/Flat"),
              ImageUrlSource: t("./sources/ImageUrl"),
              SingleAssetSource: t("./sources/SingleAsset"),
              StaticAsset: t("./assets/Static"),
              DynamicAsset: t("./assets/Dynamic"),
              TextureStore: t("./TextureStore"),
              Layer: t("./Layer"),
              RenderLoop: t("./RenderLoop"),
              KeyControlMethod: t("./controls/Key"),
              DragControlMethod: t("./controls/Drag"),
              QtvrControlMethod: t("./controls/Qtvr"),
              ScrollZoomControlMethod: t("./controls/ScrollZoom"),
              PinchZoomControlMethod: t("./controls/PinchZoom"),
              VelocityControlMethod: t("./controls/Velocity"),
              ElementPressControlMethod: t("./controls/ElementPress"),
              Controls: t("./controls/Controls"),
              Dynamics: t("./controls/Dynamics"),
              Viewer: t("./Viewer"),
              Scene: t("./Scene"),
              Hotspot: t("./Hotspot"),
              HotspotContainer: t("./HotspotContainer"),
              colorEffects: t("./colorEffects"),
              registerDefaultControls: t("./controls/registerDefaultControls"),
              autorotate: t("./autorotate"),
              util: {
                  async: t("./util/async"),
                  cancelize: t("./util/cancelize"),
                  chain: t("./util/chain"),
                  clamp: t("./util/clamp"),
                  clearOwnProperties: t("./util/clearOwnProperties"),
                  cmp: t("./util/cmp"),
                  compose: t("./util/compose"),
                  convertFov: t("./util/convertFov"),
                  decimal: t("./util/decimal"),
                  defaults: t("./util/defaults"),
                  defer: t("./util/defer"),
                  degToRad: t("./util/degToRad"),
                  delay: t("./util/delay"),
                  dom: t("./util/dom"),
                  extend: t("./util/extend"),
                  hash: t("./util/hash"),
                  inherits: t("./util/inherits"),
                  mod: t("./util/mod"),
                  noop: t("./util/noop"),
                  now: t("./util/now"),
                  once: t("./util/once"),
                  pixelRatio: t("./util/pixelRatio"),
                  radToDeg: t("./util/radToDeg"),
                  real: t("./util/real"),
                  retry: t("./util/retry"),
                  tween: t("./util/tween"),
                  type: t("./util/type")
              },
              dependencies: {
                  bowser: t("bowser"),
                  glMatrix: t("gl-matrix"),
                  eventEmitter: t("minimal-event-emitter"),
                  hammerjs: t("hammerjs")
              }
          }
      }
      , {
          "./Hotspot": 105,
          "./HotspotContainer": 106,
          "./Layer": 107,
          "./RenderLoop": 109,
          "./Scene": 110,
          "./TextureStore": 111,
          "./Viewer": 114,
          "./assets/Dynamic": 115,
          "./assets/Static": 117,
          "./autorotate": 118,
          "./colorEffects": 125,
          "./controls/Controls": 128,
          "./controls/Drag": 129,
          "./controls/Dynamics": 130,
          "./controls/ElementPress": 131,
          "./controls/Key": 133,
          "./controls/PinchZoom": 134,
          "./controls/Qtvr": 135,
          "./controls/ScrollZoom": 136,
          "./controls/Velocity": 137,
          "./controls/registerDefaultControls": 139,
          "./geometries/Cube": 141,
          "./geometries/Equirect": 142,
          "./geometries/Flat": 143,
          "./renderers/CssCube": 150,
          "./renderers/CssFlat": 151,
          "./renderers/FlashCube": 153,
          "./renderers/FlashFlat": 154,
          "./renderers/WebGlCube": 157,
          "./renderers/WebGlEquirect": 158,
          "./renderers/WebGlFlat": 159,
          "./renderers/registerDefaultRenderers": 160,
          "./sources/ImageUrl": 165,
          "./sources/SingleAsset": 166,
          "./stages/Css": 167,
          "./stages/Flash": 168,
          "./stages/WebGl": 171,
          "./util/async": 176,
          "./util/cancelize": 178,
          "./util/chain": 179,
          "./util/clamp": 180,
          "./util/clearOwnProperties": 181,
          "./util/cmp": 182,
          "./util/compose": 183,
          "./util/convertFov": 184,
          "./util/decimal": 185,
          "./util/defaults": 186,
          "./util/defer": 187,
          "./util/degToRad": 188,
          "./util/delay": 189,
          "./util/dom": 190,
          "./util/extend": 191,
          "./util/hash": 193,
          "./util/inherits": 194,
          "./util/mod": 196,
          "./util/noop": 197,
          "./util/now": 198,
          "./util/once": 199,
          "./util/pixelRatio": 200,
          "./util/radToDeg": 202,
          "./util/real": 203,
          "./util/retry": 204,
          "./util/tween": 205,
          "./util/type": 206,
          "./views/Flat": 207,
          "./views/Rectilinear": 208,
          bowser: 104,
          "gl-matrix": 4,
          hammerjs: 14,
          "minimal-event-emitter": 209
      }],
      147: [function(t, e, n) {
          "use strict";
          var i = t("../assets/Flash")
            , r = t("../NetworkError")
            , o = t("../util/once");
          function s(t) {
              if ("flash" !== t.type)
                  throw new Error("Stage type incompatible with loader");
              this._stage = t
          }
          s.prototype.loadImage = function(t, e, n) {
              var s = this._stage
                , a = s.flashElement()
                , l = e && e.x || 0
                , u = e && e.y || 0
                , c = e && e.width || 1
                , h = e && e.height || 1
                , p = a.loadImage(t, c, h, l, u);
              function d(e, o) {
                  o === p && (s.removeFlashCallbackListener("imageLoaded", d),
                  e ? n(new r("Network error: " + t)) : n(null, new i(a,p)))
              }
              return n = o(n),
              s.addFlashCallbackListener("imageLoaded", d),
              function() {
                  a.cancelImage(p),
                  s.removeFlashCallbackListener("imageLoaded", d),
                  n.apply(null, arguments)
              }
          }
          ,
          e.exports = s
      }
      , {
          "../NetworkError": 108,
          "../assets/Flash": 116,
          "../util/once": 199
      }],
      148: [function(t, e, n) {
          "use strict";
          var i = t("../assets/Static")
            , r = t("../NetworkError")
            , o = t("../util/once");
          function s(t) {
              if ("webgl" !== t.type && "css" !== t.type)
                  throw new Error("Stage type incompatible with loader");
              this._stage = t
          }
          s.prototype.loadImage = function(t, e, n) {
              var s = new Image;
              s.crossOrigin = "anonymous";
              var a = e && e.x || 0
                , l = e && e.y || 0
                , u = e && e.width || 1
                , c = e && e.height || 1;
              return n = o(n),
              s.onload = function() {
                  if (0 === a && 0 === l && 1 === u && 1 === c)
                      n(null, new i(s));
                  else {
                      a *= s.naturalWidth,
                      l *= s.naturalHeight,
                      u *= s.naturalWidth,
                      c *= s.naturalHeight;
                      var t = document.createElement("canvas");
                      t.width = u,
                      t.height = c,
                      t.getContext("2d").drawImage(s, a, l, u, c, 0, 0, u, c),
                      n(null, new i(t))
                  }
              }
              ,
              s.onerror = function() {
                  n(new r("Network error: " + t))
              }
              ,
              s.src = t,
              function() {
                  s.onload = s.onerror = null,
                  s.src = "",
                  n.apply(null, arguments)
              }
          }
          ,
          e.exports = s
      }
      , {
          "../NetworkError": 108,
          "../assets/Static": 117,
          "../util/once": 199
      }],
      149: [function(t, e, n) {
          "use strict";
          var i = t("../collections/Map")
            , r = t("../util/decimal")
            , o = t("../util/dom").setOverflowHidden
            , s = t("../util/dom").setNoPointerEvents
            , a = t("../util/dom").setNullTransform
            , l = t("../util/dom").setTransform
            , u = t("../util/clearOwnProperties")
            , c = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.css;
          function h(t, e) {
              return t.cmp(e)
          }
          function p(t, e, n) {
              this._root = t,
              this._browserQuirks = e;
              var r = document.createElement("div");
              t.appendChild(r),
              r.style.position = "absolute",
              o(r),
              s(r),
              this._browserQuirks.useNullTransform && a(r),
              this.domElement = r,
              this._oldTileList = [],
              this._newTileList = [],
              this._textureMap = new i
          }
          p.prototype.destroy = function() {
              this._root.removeChild(this.domElement),
              u(this)
          }
          ,
          p.prototype.startLayer = function(t, e) {
              var n = this.domElement
                , i = this._root.clientWidth
                , o = this._root.clientHeight;
              n.style.left = r(i * e.left) + "px",
              n.style.top = r(o * e.top) + "px",
              n.style.width = r(i * e.width) + "px",
              n.style.height = r(o * e.height) + "px";
              var s = 1
                , a = t.effects();
              a && null != a.opacity && (s = a.opacity),
              n.style.opacity = s,
              this._newTileList.length = 0,
              this._textureMap.clear()
          }
          ,
          p.prototype.renderTile = function(t, e) {
              this._newTileList.push(t),
              this._textureMap.set(t, e)
          }
          ,
          p.prototype.endLayer = function(t, e) {
              var n, i, r, o, s, a, u, p, d = this.domElement, f = this._oldTileList, m = this._newTileList, v = this._textureMap, y = t.view();
              if (d.children.length !== f.length)
                  throw new Error("DOM not in sync with tile list");
              for (m.sort(h),
              r = f[n = 0],
              u = d.firstChild,
              i = 0; i < m.length; i++) {
                  for (o = m[i]; n < f.length && !(r.cmp(o) >= 0); )
                      p = u.nextSibling,
                      d.removeChild(u),
                      u = p,
                      r = f[++n];
                  if (!(a = (s = v.get(o)) ? s._canvas : null))
                      throw new Error("Rendering tile with missing texture");
                  if (r && 0 === r.cmp(o)) {
                      if (a != u)
                          throw new Error("DOM not in sync with tile list");
                      u = u.nextSibling,
                      r = f[++n]
                  } else
                      d.insertBefore(a, u);
                  l(a, this.calculateTransform(o, s, y)),
                  c && a.setAttribute("data-tile", o.str())
              }
              for (; u; )
                  p = u.nextSibling,
                  d.removeChild(u),
                  u = p;
              if (d.children.length !== m.length)
                  throw new Error("DOM not in sync with tile list");
              var g = this._oldTileList;
              this._oldTileList = this._newTileList,
              this._newTileList = g
          }
          ,
          e.exports = p
      }
      , {
          "../collections/Map": 121,
          "../util/clearOwnProperties": 181,
          "../util/decimal": 185,
          "../util/dom": 190
      }],
      150: [function(t, e, n) {
          "use strict";
          var i = t("../geometries/Cube").Tile
            , r = t("./CssBase")
            , o = t("../util/decimal");
          function s(t, e) {
              this.constructor.super_.call(this, t, e, i)
          }
          t("../util/inherits")(s, r),
          s.prototype.calculateTransform = function(t, e, n) {
              var i = this._browserQuirks.padSize
                , r = this._browserQuirks.reverseLevelDepth
                , s = this._browserQuirks.perspectiveNudge
                , a = ""
                , l = r ? 256 - t.z : t.levelWidth()
                , u = n.size()
                , c = u.width
                , h = u.height;
              a += "translate3d(" + o(c / 2) + "px, " + o(h / 2) + "px, 0px) ";
              var p = .5 * h / Math.tan(n.fov() / 2)
                , d = p + s;
              a += "perspective(" + o(p) + "px) translateZ(" + o(d) + "px) ";
              var f = -n.roll()
                , m = -n.pitch()
                , v = n.yaw();
              a += "rotateZ(" + o(f) + "rad) rotateX(" + o(m) + "rad) rotateY(" + o(v) + "rad) ";
              var y = -t.rotX()
                , g = t.rotY();
              a += "rotateX(" + o(y) + "rad) rotateY(" + o(g) + "rad) ";
              var _ = t.centerX() - t.scaleX() / 2
                , b = -(t.centerY() + t.scaleY() / 2) * l
                , w = -l / 2;
              if (a += "translate3d(" + o(_ * l) + "px, " + o(b) + "px, " + o(w) + "px) ",
              r) {
                  var x = l * t.scaleX() / t.width()
                    , S = l * t.scaleY() / t.height();
                  a += "scale(" + o(x) + ", " + o(S) + ") "
              }
              var M = t.padLeft() ? i : 0
                , E = t.padTop() ? i : 0;
              return 0 === M && 0 === E || (a += "translate3d(" + o(-M) + "px, " + o(-E) + "px, 0) "),
              a
          }
          ,
          e.exports = s
      }
      , {
          "../geometries/Cube": 141,
          "../util/decimal": 185,
          "../util/inherits": 194,
          "./CssBase": 149
      }],
      151: [function(t, e, n) {
          "use strict";
          var i = t("../geometries/Flat").Tile
            , r = t("./CssBase")
            , o = t("../util/decimal");
          function s(t, e) {
              this.constructor.super_.call(this, t, e, i)
          }
          t("../util/inherits")(s, r),
          s.prototype.calculateTransform = function(t, e, n) {
              var i = this._browserQuirks.padSize
                , r = ""
                , s = n.width()
                , a = n.height();
              r += "translateX(" + o(s / 2) + "px) translateY(" + o(a / 2) + "px) ";
              var l = s / n._zoomX()
                , u = a / n._zoomY()
                , c = t.centerX() - t.scaleX() / 2 + .5
                , h = (.5 - t.centerY() - t.scaleY() / 2) * u;
              r += "translateX(" + o(c * l) + "px) translateY(" + o(h) + "px) ";
              var p = -n.x() * l
                , d = -n.y() * u;
              r += "translateX(" + o(p) + "px) translateY(" + o(d) + "px) ";
              var f = t.padLeft() ? i : 0
                , m = t.padTop() ? i : 0;
              0 === f && 0 === m || (r += "translateX(" + o(-f) + "px) translateY(" + o(-m) + "px) ");
              var v = l / t.levelWidth()
                , y = u / t.levelHeight();
              return r += "scale(" + o(v) + ", " + o(y) + ") "
          }
          ,
          e.exports = s
      }
      , {
          "../geometries/Flat": 143,
          "../util/decimal": 185,
          "../util/inherits": 194,
          "./CssBase": 149
      }],
      152: [function(t, e, n) {
          "use strict";
          var i = t("../collections/Map")
            , r = t("../util/clearOwnProperties");
          function o(t, e) {
              return t.cmp(e)
          }
          function s(t, e, n, r) {
              this._flashElement = t,
              this._layerId = e,
              this._quirks = n,
              this._tileList = [],
              this._textureMap = new i,
              this._layerCreated = !1
          }
          s.prototype.destroy = function() {
              this._layerCreated && this._flashElement.destroyLayer(this._layerId),
              r(this)
          }
          ,
          s.prototype.startLayer = function(t, e) {
              this._flashElement.isReady && this._flashElement.isReady() && (this._layerCreated || (this._flashElement.createLayer(this._layerId),
              this._layerCreated = !0),
              this._tileList.length = 0,
              this._textureMap.clear())
          }
          ,
          s.prototype.renderTile = function(t, e) {
              this._tileList.push(t),
              this._textureMap.set(t, e)
          }
          ,
          s.prototype.endLayer = function(t, e) {
              this._flashElement.isReady && this._flashElement.isReady() && (this._tileList.sort(o),
              this._renderOnFlash(t, e))
          }
          ,
          e.exports = s
      }
      , {
          "../collections/Map": 121,
          "../util/clearOwnProperties": 181
      }],
      153: [function(t, e, n) {
          "use strict";
          var i = t("./FlashBase")
            , r = t("../geometries/Cube").Tile
            , o = t("../util/inherits")
            , s = t("../util/radToDeg");
          function a(t, e, n) {
              this.constructor.super_.call(this, t, e, n, r),
              this._flashTileList = []
          }
          o(a, i),
          a.prototype._renderOnFlash = function(t, e) {
              var n = this._flashElement
                , i = this._layerId
                , r = this._quirks.padSize
                , o = this._tileList
                , a = this._textureMap
                , l = this._flashTileList;
              l.length = 0;
              for (var u = 0; u < o.length; u++) {
                  var c = o[u]
                    , h = a.get(c);
                  if (!h)
                      throw new Error("Rendering tile with missing texture");
                  var p = c.padTop() ? r : 0
                    , d = c.padBottom() ? r : 0
                    , f = c.padLeft() ? r : 0
                    , m = c.padRight() ? r : 0;
                  l.push({
                      textureId: h._textureId,
                      face: c.face,
                      width: c.width(),
                      height: c.height(),
                      centerX: c.centerX(),
                      centerY: c.centerY(),
                      rotX: s(c.rotX()),
                      rotY: s(c.rotY()),
                      levelSize: c.levelWidth(),
                      padTop: p,
                      padBottom: d,
                      padLeft: f,
                      padRight: m
                  })
              }
              var v = this._flashElement.clientWidth
                , y = this._flashElement.clientHeight
                , g = v * e.x
                , _ = y * e.y
                , b = v * e.width
                , w = y * e.height
                , x = 1
                , S = t.effects();
              S && null != S.opacity && (x = S.opacity);
              var M = t.view()
                , E = M.yaw()
                , T = M.pitch()
                , D = M.roll()
                , I = M.fov();
              n.drawCubeTiles(i, b, w, g, _, x, E, T, D, I, l)
          }
          ,
          e.exports = a
      }
      , {
          "../geometries/Cube": 141,
          "../util/inherits": 194,
          "../util/radToDeg": 202,
          "./FlashBase": 152
      }],
      154: [function(t, e, n) {
          "use strict";
          var i = t("./FlashBase")
            , r = t("../geometries/Flat").Tile;
          function o(t, e, n) {
              this.constructor.super_.call(this, t, e, n, r),
              this._flashTileList = []
          }
          t("../util/inherits")(o, i),
          o.prototype._renderOnFlash = function(t, e) {
              var n = this._flashElement
                , i = this._layerId
                , r = this._quirks.padSize
                , o = this._tileList
                , s = this._textureMap
                , a = this._flashTileList;
              a.length = 0;
              for (var l = 0; l < o.length; l++) {
                  var u = o[l]
                    , c = s.get(u);
                  if (!c)
                      throw new Error("Rendering tile with missing texture");
                  var h = u.padTop() ? r : 0
                    , p = u.padBottom() ? r : 0
                    , d = u.padLeft() ? r : 0
                    , f = u.padRight() ? r : 0;
                  a.push({
                      textureId: c._textureId,
                      width: u.width(),
                      height: u.height(),
                      centerX: u.centerX(),
                      centerY: u.centerY(),
                      scaleX: u.scaleX(),
                      scaleY: u.scaleY(),
                      levelWidth: u.levelWidth(),
                      levelHeight: u.levelHeight(),
                      padTop: h,
                      padBottom: p,
                      padLeft: d,
                      padRight: f
                  })
              }
              var m = this._flashElement.clientWidth
                , v = this._flashElement.clientHeight
                , y = m * e.x
                , g = v * e.y
                , _ = m * e.width
                , b = v * e.height
                , w = 1
                , x = t.effects();
              x && null != x.opacity && (w = x.opacity);
              var S = t.view()
                , M = S.x()
                , E = S.y()
                , T = S._zoomX()
                , D = S._zoomY();
              n.drawFlatTiles(i, _, b, y, g, w, M, E, T, D, a)
          }
          ,
          e.exports = o
      }
      , {
          "../geometries/Flat": 143,
          "../util/inherits": 194,
          "./FlashBase": 152
      }],
      155: [function(t, e, n) {
          "use strict";
          var i = t("gl-matrix").mat4
            , r = t("gl-matrix").vec3
            , o = t("../util/clearOwnProperties")
            , s = t("./WebGlCommon")
            , a = s.createConstantBuffers
            , l = s.destroyConstantBuffers
            , u = s.createShaderProgram
            , c = s.destroyShaderProgram
            , h = s.enableAttributes
            , p = s.disableAttributes
            , d = s.setViewport
            , f = s.setupPixelEffectUniforms
            , m = s.setDepth
            , v = s.setTexture
            , y = t("../shaders/vertexNormal")
            , g = t("../shaders/fragmentNormal")
            , _ = [0, 1, 2, 0, 2, 3]
            , b = [-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]
            , w = [0, 0, 1, 0, 1, 1, 0, 1]
            , x = ["aVertexPosition", "aTextureCoord"]
            , S = ["uDepth", "uOpacity", "uSampler", "uProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix"];
          function M(t) {
              this.gl = t,
              this.projMatrix = i.create(),
              this.viewportMatrix = i.create(),
              this.translateVector = r.create(),
              this.scaleVector = r.create(),
              this.constantBuffers = a(t, _, b, w),
              this.shaderProgram = u(t, y, g, x, S)
          }
          M.prototype.destroy = function() {
              l(this.gl, this.constantBuffers),
              c(this.gl, this.shaderProgram),
              o(this)
          }
          ,
          M.prototype.startLayer = function(t, e) {
              var n = this.gl
                , i = this.shaderProgram
                , r = this.constantBuffers
                , o = this.viewportMatrix;
              n.useProgram(i),
              h(n, i),
              d(n, t, e, o),
              n.uniformMatrix4fv(i.uViewportMatrix, !1, o),
              n.bindBuffer(n.ARRAY_BUFFER, r.vertexPositions),
              n.vertexAttribPointer(i.aVertexPosition, 3, n.FLOAT, n.FALSE, 0, 0),
              n.bindBuffer(n.ARRAY_BUFFER, r.textureCoords),
              n.vertexAttribPointer(i.aTextureCoord, 2, n.FLOAT, n.FALSE, 0, 0),
              f(n, t.effects(), {
                  opacity: i.uOpacity,
                  colorOffset: i.uColorOffset,
                  colorMatrix: i.uColorMatrix
              })
          }
          ,
          M.prototype.endLayer = function(t, e) {
              var n = this.gl
                , i = this.shaderProgram;
              p(n, i)
          }
          ,
          M.prototype.renderTile = function(t, e, n, r) {
              var o = this.gl
                , s = this.shaderProgram
                , a = this.constantBuffers
                , l = this.projMatrix
                , u = this.translateVector
                , c = this.scaleVector;
              u[0] = t.centerX(),
              u[1] = t.centerY(),
              u[2] = -.5,
              c[0] = t.scaleX(),
              c[1] = t.scaleY(),
              c[2] = 1,
              i.copy(l, n.view().projection()),
              i.rotateX(l, l, t.rotX()),
              i.rotateY(l, l, t.rotY()),
              i.translate(l, l, u),
              i.scale(l, l, c),
              o.uniformMatrix4fv(s.uProjMatrix, !1, l),
              m(o, s, r, t.z),
              v(o, s, e),
              o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, a.vertexIndices),
              o.drawElements(o.TRIANGLES, _.length, o.UNSIGNED_SHORT, 0)
          }
          ,
          e.exports = M
      }
      , {
          "../shaders/fragmentNormal": 162,
          "../shaders/vertexNormal": 164,
          "../util/clearOwnProperties": 181,
          "./WebGlCommon": 156,
          "gl-matrix": 4
      }],
      156: [function(t, e, n) {
          "use strict";
          var i = 256
            , r = 256
            , o = t("../util/clamp")
            , s = t("gl-matrix").vec4
            , a = t("gl-matrix").vec3
            , l = t("gl-matrix").mat4;
          function u(t, e, n) {
              var i = t.createShader(e);
              if (t.shaderSource(i, n),
              t.compileShader(i),
              !t.getShaderParameter(i, t.COMPILE_STATUS))
                  throw t.getShaderInfoLog(i);
              return i
          }
          function c(t, e, n, i) {
              var r = t.createBuffer();
              return t.bindBuffer(e, r),
              t.bufferData(e, i, n),
              r
          }
          var h = 1
            , p = s.create()
            , d = l.create();
          l.identity(d);
          var f = a.create()
            , m = a.create();
          e.exports = {
              createShaderProgram: function(t, e, n, i, r) {
                  var o = u(t, t.VERTEX_SHADER, e)
                    , s = u(t, t.FRAGMENT_SHADER, n)
                    , a = t.createProgram();
                  if (t.attachShader(a, o),
                  t.attachShader(a, s),
                  t.linkProgram(a),
                  !t.getProgramParameter(a, t.LINK_STATUS))
                      throw t.getProgramInfoLog(a);
                  for (var l = 0; l < i.length; l++) {
                      var c = i[l];
                      if (a[c] = t.getAttribLocation(a, c),
                      -1 === a[c])
                          throw new Error("Shader program has no " + c + " attribute")
                  }
                  for (var h = 0; h < r.length; h++) {
                      var p = r[h];
                      if (a[p] = t.getUniformLocation(a, p),
                      -1 === a[p])
                          throw new Error("Shader program has no " + p + " uniform")
                  }
                  return a
              },
              destroyShaderProgram: function(t, e) {
                  for (var n = t.getAttachedShaders(e), i = 0; i < n.length; i++) {
                      var r = n[i];
                      t.detachShader(e, r),
                      t.deleteShader(r)
                  }
                  t.deleteProgram(e)
              },
              createConstantBuffers: function(t, e, n, i) {
                  return {
                      vertexIndices: c(t, t.ELEMENT_ARRAY_BUFFER, t.STATIC_DRAW, new Uint16Array(e)),
                      vertexPositions: c(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(n)),
                      textureCoords: c(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(i))
                  }
              },
              destroyConstantBuffers: function(t, e) {
                  t.deleteBuffer(e.vertexIndices),
                  t.deleteBuffer(e.vertexPositions),
                  t.deleteBuffer(e.textureCoords)
              },
              enableAttributes: function(t, e) {
                  for (var n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), i = 0; i < n; i++)
                      t.enableVertexAttribArray(i)
              },
              disableAttributes: function(t, e) {
                  for (var n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), i = 0; i < n; i++)
                      t.disableVertexAttribArray(i)
              },
              setTexture: function(t, e, n) {
                  t.activeTexture(t.TEXTURE0),
                  t.bindTexture(t.TEXTURE_2D, n._texture),
                  t.uniform1i(e.uSampler, 0)
              },
              setDepth: function(t, e, n, o) {
                  var s = ((n + 1) * r - o) / (r * i);
                  t.uniform1f(e.uDepth, s)
              },
              setViewport: function(t, e, n, i) {
                  if (0 === n.x && 1 === n.width && 0 === n.y && 1 === n.height)
                      return t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
                      void l.identity(i);
                  var r = n.x
                    , s = o(r, 0, 1)
                    , u = s - r
                    , c = 1 - s
                    , h = o(n.width - u, 0, c)
                    , p = n.width - h
                    , d = 1 - n.height - n.y
                    , v = o(d, 0, 1)
                    , y = v - d
                    , g = 1 - v
                    , _ = o(n.height - y, 0, g)
                    , b = n.height - _;
                  a.set(m, n.width / h, n.height / _, 1),
                  a.set(f, (p - u) / h, (b - y) / _, 0),
                  l.identity(i),
                  l.translate(i, i, f),
                  l.scale(i, i, m),
                  t.viewport(t.drawingBufferWidth * s, t.drawingBufferHeight * v, t.drawingBufferWidth * h, t.drawingBufferHeight * _)
              },
              setupPixelEffectUniforms: function(t, e, n) {
                  var i = h;
                  e && null != e.opacity && (i = e.opacity),
                  t.uniform1f(n.opacity, i);
                  var r = p;
                  e && e.colorOffset && (r = e.colorOffset),
                  t.uniform4fv(n.colorOffset, r);
                  var o = d;
                  e && e.colorMatrix && (o = e.colorMatrix),
                  t.uniformMatrix4fv(n.colorMatrix, !1, o)
              }
          }
      }
      , {
          "../util/clamp": 180,
          "gl-matrix": 4
      }],
      157: [function(t, e, n) {
          "use strict";
          var i = t("./WebGlBase");
          function r() {
              this.constructor.super_.apply(this, arguments)
          }
          t("../util/inherits")(r, i),
          e.exports = r
      }
      , {
          "../util/inherits": 194,
          "./WebGlBase": 155
      }],
      158: [function(t, e, n) {
          "use strict";
          var i = t("gl-matrix").mat4
            , r = t("../util/clearOwnProperties")
            , o = t("./WebGlCommon")
            , s = o.createConstantBuffers
            , a = o.destroyConstantBuffers
            , l = o.createShaderProgram
            , u = o.destroyShaderProgram
            , c = o.enableAttributes
            , h = o.disableAttributes
            , p = o.setViewport
            , d = o.setupPixelEffectUniforms
            , f = o.setDepth
            , m = o.setTexture
            , v = t("../shaders/vertexEquirect")
            , y = t("../shaders/fragmentEquirect")
            , g = [0, 1, 2, 0, 2, 3]
            , _ = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]
            , b = [0, 0, 1, 0, 1, 1, 0, 1]
            , w = ["aVertexPosition"]
            , x = ["uDepth", "uOpacity", "uSampler", "uInvProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix", "uTextureX", "uTextureY", "uTextureWidth", "uTextureHeight"];
          function S(t) {
              this.gl = t,
              this.invProjMatrix = i.create(),
              this.viewportMatrix = i.create(),
              this.constantBuffers = s(t, g, _, b),
              this.shaderProgram = l(t, v, y, w, x)
          }
          S.prototype.destroy = function() {
              a(this.gl, this.constantBuffers),
              u(this.gl, this.shaderProgram),
              r(this)
          }
          ,
          S.prototype.startLayer = function(t, e) {
              var n = this.gl
                , r = this.shaderProgram
                , o = this.constantBuffers
                , s = this.invProjMatrix
                , a = this.viewportMatrix;
              n.useProgram(r),
              c(n, r),
              p(n, t, e, a),
              n.uniformMatrix4fv(r.uViewportMatrix, !1, a),
              n.bindBuffer(n.ARRAY_BUFFER, o.vertexPositions),
              n.vertexAttribPointer(r.aVertexPosition, 3, n.FLOAT, n.FALSE, 0, 0),
              n.bindBuffer(n.ARRAY_BUFFER, o.textureCoords),
              i.copy(s, t.view().projection()),
              i.invert(s, s),
              n.uniformMatrix4fv(r.uInvProjMatrix, !1, s);
              var l = t.effects().textureCrop || {}
                , u = null != l.x ? l.x : 0
                , h = null != l.y ? l.y : 0
                , f = null != l.width ? l.width : 1
                , m = null != l.height ? l.height : 1;
              n.uniform1f(r.uTextureX, u),
              n.uniform1f(r.uTextureY, h),
              n.uniform1f(r.uTextureWidth, f),
              n.uniform1f(r.uTextureHeight, m),
              d(n, t.effects(), {
                  opacity: r.uOpacity,
                  colorOffset: r.uColorOffset,
                  colorMatrix: r.uColorMatrix
              })
          }
          ,
          S.prototype.endLayer = function(t, e) {
              var n = this.gl
                , i = this.shaderProgram;
              h(n, i)
          }
          ,
          S.prototype.renderTile = function(t, e, n, i) {
              var r = this.gl
                , o = this.shaderProgram
                , s = this.constantBuffers;
              f(r, o, i, t.z),
              m(r, o, e),
              r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, s.vertexIndices),
              r.drawElements(r.TRIANGLES, g.length, r.UNSIGNED_SHORT, 0)
          }
          ,
          e.exports = S
      }
      , {
          "../shaders/fragmentEquirect": 161,
          "../shaders/vertexEquirect": 163,
          "../util/clearOwnProperties": 181,
          "./WebGlCommon": 156,
          "gl-matrix": 4
      }],
      159: [function(t, e, n) {
          "use strict";
          var i = t("./WebGlBase");
          function r() {
              this.constructor.super_.apply(this, arguments)
          }
          t("../util/inherits")(r, i),
          e.exports = r
      }
      , {
          "../util/inherits": 194,
          "./WebGlBase": 155
      }],
      160: [function(t, e, n) {
          "use strict";
          var i = t("./WebGlCube")
            , r = t("./WebGlFlat")
            , o = t("./WebGlEquirect")
            , s = t("./CssCube")
            , a = t("./CssFlat")
            , l = t("./FlashCube")
            , u = t("./FlashFlat");
          e.exports = function(t) {
              switch (t.type) {
              case "webgl":
                  t.registerRenderer("flat", "flat", r),
                  t.registerRenderer("cube", "rectilinear", i),
                  t.registerRenderer("equirect", "rectilinear", o);
                  break;
              case "css":
                  t.registerRenderer("flat", "flat", a),
                  t.registerRenderer("cube", "rectilinear", s);
                  break;
              case "flash":
                  t.registerRenderer("flat", "flat", u),
                  t.registerRenderer("cube", "rectilinear", l);
                  break;
              default:
                  throw new Error("Unknown stage type: " + t.type)
              }
          }
      }
      , {
          "./CssCube": 150,
          "./CssFlat": 151,
          "./FlashCube": 153,
          "./FlashFlat": 154,
          "./WebGlCube": 157,
          "./WebGlEquirect": 158,
          "./WebGlFlat": 159
      }],
      161: [function(t, e, n) {
          "use strict";
          e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform float uTextureX;", "uniform float uTextureY;", "uniform float uTextureWidth;", "uniform float uTextureHeight;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec4 vRay;", "const float PI = 3.14159265358979323846264;", "void main(void) {", "  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);", "  float phi  = acos(vRay.y * r);", "  float theta = atan(vRay.x, -1.0*vRay.z);", "  float s = 0.5 + 0.5 * theta / PI;", "  float t = 1.0 - phi / PI;", "  s = s * uTextureWidth + uTextureX;", "  t = t * uTextureHeight + uTextureY;", "  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n")
      }
      , {}],
      162: [function(t, e, n) {
          "use strict";
          e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float;", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n")
      }
      , {}],
      163: [function(t, e, n) {
          "use strict";
          e.exports = ["attribute vec3 aVertexPosition;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uInvProjMatrix;", "varying vec4 vRay;", "void main(void) {", "  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);", "  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);", "}"].join("\n")
      }
      , {}],
      164: [function(t, e, n) {
          "use strict";
          e.exports = ["attribute vec3 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uProjMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);", "  gl_Position.z = uDepth * gl_Position.w;", "  vTextureCoord = aTextureCoord;", "}"].join("\n")
      }
      , {}],
      165: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("../NetworkError")
            , o = t("../collections/WorkPool")
            , s = t("../util/chain")
            , a = t("../util/delay")
            , l = (t("../util/now"),
          {
              x: "x",
              y: "y",
              z: "z",
              f: "face"
          })
            , u = 4
            , c = 1e4;
          function h(t, e) {
              e = e || {},
              this._loadPool = new o({
                  concurrency: e.concurrency || u
              }),
              this._retryDelay = e.retryDelay || c,
              this._retryMap = {},
              this._sourceFromTile = t
          }
          function p(t) {
              return new RegExp("\\{(" + t + ")\\}","g")
          }
          i(h),
          h.prototype.loadAsset = function(t, e, n) {
              var i, o = this, l = this._retryDelay, u = this._retryMap, c = this._sourceFromTile(e), h = c.url, p = c.rect, d = t.loadImage.bind(t, h, p), f = u[h];
              if (null != f) {
                  var m = m()
                    , v = m - f;
                  v < l ? i = l - v : (i = 0,
                  delete u[h])
              }
              var y = a.bind(null, i);
              return s(y, function(t) {
                  return o._loadPool.push(d, function(n, i) {
                      n ? (n instanceof r && (u[h] = m(),
                      o.emit("networkError", i, n)),
                      t(n, e)) : (delete u[h],
                      t(null, e, i))
                  })
              })(n)
          }
          ,
          h.fromString = function(t, e) {
              var n = (e = e || {}) && e.cubeMapPreviewFaceOrder || "bdflru";
              return new h(e.cubeMapPreviewUrl ? function(t) {
                  return 0 === t.z ? function(t) {
                      var i = n.indexOf(t.face) / 6;
                      return {
                          url: e.cubeMapPreviewUrl,
                          rect: {
                              x: 0,
                              y: i,
                              width: 1,
                              height: 1 / 6
                          }
                      }
                  }(t) : i(t)
              }
              : i,e);
              function i(e) {
                  var n = t;
                  for (var i in l) {
                      var r = l[i]
                        , o = p(i)
                        , s = e.hasOwnProperty(r) ? e[r] : "";
                      n = n.replace(o, s)
                  }
                  return {
                      url: n
                  }
              }
          }
          ,
          e.exports = h
      }
      , {
          "../NetworkError": 108,
          "../collections/WorkPool": 123,
          "../util/chain": 179,
          "../util/delay": 189,
          "../util/now": 198,
          "minimal-event-emitter": 209
      }],
      166: [function(t, e, n) {
          "use strict";
          function i(t) {
              this._asset = t
          }
          i.prototype.asset = function() {
              return this._asset
          }
          ,
          i.prototype.loadAsset = function(t, e, n) {
              var i = this
                , r = setTimeout(function() {
                  n(null, e, i._asset)
              }, 0);
              return function() {
                  clearTimeout(r),
                  n.apply(null, arguments)
              }
          }
          ,
          e.exports = i
      }
      , {}],
      167: [function(t, e, n) {
          "use strict";
          var i = t("./Stage")
            , r = t("../loaders/HtmlImage")
            , o = t("../support/Css")
            , s = t("bowser")
            , a = t("../util/inherits")
            , l = t("../util/dom").setAbsolute
            , u = t("../util/dom").setFullSize
            , c = t("../util/dom").setNullTransformOrigin
            , h = t("../util/clearOwnProperties")
            , p = {
              padSize: s.ios ? 0 : 3,
              reverseLevelDepth: s.ios,
              useNullTransform: s.ios,
              perspectiveNudge: s.webkit || s.gecko ? .001 : 0
          };
          function d(t) {
              this.constructor.super_.call(this, t),
              this._loader = new r(this),
              this._domElement = document.createElement("div"),
              l(this._domElement),
              u(this._domElement)
          }
          function f(t, e, n) {
              var i = document.createElement("canvas");
              l(i),
              c(i),
              this._canvas = i,
              this._timestamp = null,
              this.refresh(e, n)
          }
          a(d, i),
          d.prototype.destroy = function() {
              this.constructor.super_.prototype.destroy.call(this)
          }
          ,
          d.supported = function() {
              return o()
          }
          ,
          d.prototype.domElement = function() {
              return this._domElement
          }
          ,
          d.prototype.setSizeForType = function() {}
          ,
          d.prototype.loadImage = function(t, e, n) {
              return this._loader.loadImage(t, e, n)
          }
          ,
          d.prototype.validateLayer = function(t) {}
          ,
          d.prototype.createRenderer = function(t) {
              return new t(this._domElement,p)
          }
          ,
          d.prototype.destroyRenderer = function(t) {
              t.destroy()
          }
          ,
          d.prototype.startFrame = function() {}
          ,
          d.prototype.endFrame = function() {}
          ,
          d.prototype.takeSnapshot = function() {
              throw new Error("CssStage: takeSnapshot not implemented")
          }
          ,
          d.type = d.prototype.type = "css",
          f.prototype.refresh = function(t, e) {
              var n = e.timestamp();
              if (n !== this._timestamp) {
                  this._timestamp = n;
                  var i, r = this._canvas, o = r.getContext("2d"), s = e.element(), a = t.width(), l = t.height(), u = p.padSize, c = t.padTop() ? u : 0, h = t.padBottom() ? u : 0, d = t.padLeft() ? u : 0, f = t.padRight() ? u : 0;
                  for (r.width = d + a + f,
                  r.height = c + l + h,
                  o.drawImage(s, d, c, a, l),
                  i = 0; i < c; i++)
                      o.drawImage(r, d, c, a, 1, d, i, a, 1);
                  for (i = 0; i < d; i++)
                      o.drawImage(r, d, c, 1, l, i, c, 1, l);
                  for (i = 0; i < h; i++)
                      o.drawImage(r, d, c + l - 1, a, 1, d, c + l + i, a, 1);
                  for (i = 0; i < f; i++)
                      o.drawImage(r, d + a - 1, c, 1, l, d + a + i, c, 1, l)
              }
          }
          ,
          f.prototype.destroy = function() {
              h(this)
          }
          ,
          d.TextureClass = d.prototype.TextureClass = f,
          e.exports = d
      }
      , {
          "../loaders/HtmlImage": 148,
          "../support/Css": 172,
          "../util/clearOwnProperties": 181,
          "../util/dom": 190,
          "../util/inherits": 194,
          "./Stage": 170,
          bowser: 104
      }],
      168: [function(t, e, n) {
          "use strict";
          var i = t("./Stage")
            , r = t("../loaders/FlashImage")
            , o = t("../support/Flash")
            , s = t("../collections/WorkQueue")
            , a = t("../util/inherits")
            , l = t("../util/defer")
            , u = t("../util/dom").setAbsolute
            , c = t("../util/dom").setFullSize
            , h = t("../util/dom").setBlocking
            , p = t("../util/clearOwnProperties")
            , d = "transparent"
            , f = function() {
              var t = document.currentScript;
              if (!t) {
                  var e = document.getElementsByTagName("script");
                  t = e.length ? e[e.length - 1] : null
              }
              if (!t)
                  return null;
              var n = t.src
                , i = n.lastIndexOf("/");
              return (n = i >= 0 ? n.slice(0, i + 1) : "") + "marzipano.swf"
          }()
            , m = "MarzipanoFlashCallbackMap";
          m in window || (window[m] = {
              __next: 0
          });
          var v = ["imageLoaded"]
            , y = {
              padSize: 3
          };
          function g(t) {
              if (this.constructor.super_.call(this, t),
              this._wmode = t && t.wmode || d,
              this._swfPath = t && t.swfPath || f,
              !f)
                  throw new Error("Missing SWF path");
              this._flashStageId = window[m].__next++,
              this._callbacksObj = window[m][this._flashStageId] = {},
              this._stageCallbacksObjVarName = m + "[" + this._flashStageId + "]",
              this._callbackListeners = {};
              for (var e = 0; e < v.length; e++)
                  this._callbacksObj[v[e]] = this._callListeners(v[e]);
              this._loader = new r(this),
              this._loadImageQueue = new s,
              this._loadImageQueue.pause(),
              this._flashReady = !1,
              this._nextLayerId = 0;
              var n = function(t, e, n) {
                  var i = document.createElement("div");
                  u(i),
                  c(i);
                  var r = "marzipano-flash-stage-" + e
                    , o = '<object id="' + r + '" name="' + r + '" type="application/x-shockwave-flash" data="' + t + '">'
                    , s = "";
                  s += '<param name="movie" value="' + t + '" />',
                  s += '<param name="allowscriptaccess" value="always" />',
                  s += '<param name="flashvars" value="callbacksObjName=' + n + '" />',
                  o += s += '<param name="wmode" value="transparent" />',
                  o += "</object>";
                  var a = document.createElement("div");
                  a.innerHTML = o;
                  var l = a.firstChild;
                  u(l),
                  c(l),
                  i.appendChild(l);
                  var p = document.createElement("div");
                  return u(p),
                  c(p),
                  h(p),
                  i.appendChild(p),
                  {
                      root: i,
                      flash: l,
                      blocking: p
                  }
              }(this._swfPath, this._flashStageId, this._stageCallbacksObjVarName);
              this._domElement = n.root,
              this._blockingElement = n.blocking,
              this._flashElement = n.flash,
              this._checkReadyTimer = setInterval(this._checkReady.bind(this), 50)
          }
          function _(t, e, n) {
              var i = n.element()
                , r = e.width()
                , o = e.height()
                , s = y.padSize
                , a = e.padTop() ? s : 0
                , l = e.padBottom() ? s : 0
                , u = e.padLeft() ? s : 0
                , c = e.padRight() ? s : 0
                , h = t._flashElement.createTexture(i, r, o, a, l, u, c);
              this._stage = t,
              this._textureId = h
          }
          a(g, i),
          g.prototype.destroy = function() {
              window[m][this._flashStageId] = null,
              null != this._checkReadyTimer && clearInterval(this._checkReadyTimer),
              this.constructor.super_.prototype.destroy.call(this)
          }
          ,
          g.supported = function() {
              return o()
          }
          ,
          g.prototype.domElement = function() {
              return this._domElement
          }
          ,
          g.prototype.flashElement = function() {
              return this._flashElement
          }
          ,
          g.prototype.setSizeForType = function() {}
          ,
          g.prototype.loadImage = function(t, e, n) {
              var i = this._loader.loadImage.bind(this._loader, t, e);
              return this._loadImageQueue.push(i, n)
          }
          ,
          g.prototype.validateLayer = function(t) {}
          ,
          g.prototype.addFlashCallbackListener = function(t, e) {
              this._callbackListeners[t] = this._callbackListeners[t] || [],
              this._callbackListeners[t].push(e)
          }
          ,
          g.prototype.removeFlashCallbackListener = function(t, e) {
              var n = this._callbackListeners[t] || []
                , i = n.indexOf(e);
              i >= 0 && n.splice(i, 1)
          }
          ,
          g.prototype._callListeners = function(t) {
              var e = this;
              return function() {
                  for (var n = e._callbackListeners[t] || [], i = 0; i < n.length; i++) {
                      var r = n[i];
                      l(r, arguments)
                  }
              }
          }
          ,
          g.prototype._checkReady = function() {
              return !!(this._flashElement && this._flashElement.isReady && this._flashElement.isReady()) && (this._flashReady = !0,
              clearTimeout(this._checkReadyTimer),
              this._checkReadyTimer = null,
              this._loadImageQueue.resume(),
              this.emit("renderInvalid"),
              !0)
          }
          ,
          g.prototype.createRenderer = function(t) {
              return new t(this._flashElement,++this._nextLayerId,y)
          }
          ,
          g.prototype.destroyRenderer = function(t) {
              t.destroy()
          }
          ,
          g.prototype.startFrame = function() {}
          ,
          g.prototype.endFrame = function() {}
          ,
          g.prototype.takeSnapshot = function(t) {
              "object" == typeof t && null != t || (t = {});
              var e = t.quality;
              if (void 0 === e && (e = 75),
              "number" != typeof e || e < 0 || e > 100)
                  throw new Error("FlashStage: Snapshot quality needs to be a number between 0 and 100");
              return this._flashElement.takeSnapshot(e)
          }
          ,
          g.type = g.prototype.type = "flash",
          _.prototype.refresh = function(t, e) {}
          ,
          _.prototype.destroy = function() {
              this._stage._flashElement.destroyTexture(this._textureId),
              p(this)
          }
          ,
          g.TextureClass = g.prototype.TextureClass = _,
          e.exports = g
      }
      , {
          "../collections/WorkQueue": 124,
          "../loaders/FlashImage": 147,
          "../support/Flash": 173,
          "../util/clearOwnProperties": 181,
          "../util/defer": 187,
          "../util/dom": 190,
          "../util/inherits": 194,
          "./Stage": 170
      }],
      169: [function(t, e, n) {
          "use strict";
          function i() {
              this._renderers = {}
          }
          i.prototype.set = function(t, e, n) {
              this._renderers[t] || (this._renderers[t] = {}),
              this._renderers[t][e] = n
          }
          ,
          i.prototype.get = function(t, e) {
              return this._renderers[t] && this._renderers[t][e] || null
          }
          ,
          e.exports = i
      }
      , {}],
      170: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("../collections/WorkQueue")
            , o = t("../util/calcRect")
            , s = t("../util/async")
            , a = t("../util/cancelize")
            , l = t("../util/clearOwnProperties")
            , u = t("./RendererRegistry");
          function c(t, e) {
              return t.cmp(e)
          }
          function h(t, e) {
              return -t.cmp(e)
          }
          function p(t) {
              this._progressive = !(!t || !t.progressive),
              this._layers = [],
              this._renderers = [],
              this._tilesToLoad = [],
              this._tilesToRender = [],
              this._tmpVisible = [],
              this._tmpChildren = [],
              this._width = 0,
              this._height = 0,
              this._tmpRect = {},
              this._tmpSize = {},
              this._createTextureWorkQueue = new r,
              this._emitRenderInvalid = this._emitRenderInvalid.bind(this),
              this._rendererRegistry = new u
          }
          i(p),
          p.prototype.destroy = function() {
              this.removeAllLayers(),
              l(this)
          }
          ,
          p.prototype.registerRenderer = function(t, e, n) {
              return this._rendererRegistry.set(t, e, n)
          }
          ,
          p.prototype.domElement = function() {
              throw new Error("Stage implementation must override domElement")
          }
          ,
          p.prototype.width = function() {
              return this._width
          }
          ,
          p.prototype.height = function() {
              return this._height
          }
          ,
          p.prototype.size = function(t) {
              return (t = t || {}).width = this._width,
              t.height = this._height,
              t
          }
          ,
          p.prototype.setSize = function(t) {
              this._width = t.width,
              this._height = t.height,
              this.setSizeForType(),
              this.emit("resize"),
              this._emitRenderInvalid()
          }
          ,
          p.prototype.setSizeForType = function(t) {
              throw new Error("Stage implementation must override setSizeForType")
          }
          ,
          p.prototype.loadImage = function() {
              throw new Error("Stage implementation must override loadImage")
          }
          ,
          p.prototype._emitRenderInvalid = function() {
              this.emit("renderInvalid")
          }
          ,
          p.prototype.validateLayer = function(t) {
              throw new Error("Stage implementation must override validateLayer")
          }
          ,
          p.prototype.listLayers = function() {
              return [].concat(this._layers)
          }
          ,
          p.prototype.hasLayer = function(t) {
              return this._layers.indexOf(t) >= 0
          }
          ,
          p.prototype.addLayer = function(t, e) {
              if (this._layers.indexOf(t) >= 0)
                  throw new Error("Layer already in stage");
              if (null == e && (e = this._layers.length),
              e < 0 || e > this._layers.length)
                  throw new Error("Invalid layer position");
              this.validateLayer(t);
              var n = t.geometry().type
                , i = t.view().type
                , r = this._rendererRegistry.get(n, i);
              if (!r)
                  throw new Error("No " + this.type + " renderer avaiable for " + n + " geometry and " + i + " view");
              var o = this.createRenderer(r);
              this._layers.splice(e, 0, t),
              this._renderers.splice(e, 0, o),
              t.addEventListener("viewChange", this._emitRenderInvalid),
              t.addEventListener("effectsChange", this._emitRenderInvalid),
              t.addEventListener("fixedLevelChange", this._emitRenderInvalid),
              t.addEventListener("textureStoreChange", this._emitRenderInvalid),
              this._emitRenderInvalid()
          }
          ,
          p.prototype.moveLayer = function(t, e) {
              var n = this._layers.indexOf(t);
              if (n < 0)
                  throw new Error("No such layer in stage");
              if (e < 0 || e >= this._layers.length)
                  throw new Error("Invalid layer position");
              t = this._layers.splice(n, 1)[0];
              var i = this._renderers.splice(n, 1)[0];
              this._layers.splice(e, 0, t),
              this._renderers.splice(e, 0, i),
              this._emitRenderInvalid()
          }
          ,
          p.prototype.removeLayer = function(t) {
              var e = this._layers.indexOf(t);
              if (e < 0)
                  throw new Error("No such layer in stage");
              var n = this._layers.splice(e, 1)[0]
                , i = this._renderers.splice(e, 1)[0];
              this.destroyRenderer(i),
              n.removeEventListener("viewChange", this._emitRenderInvalid),
              n.removeEventListener("effectsChange", this._emitRenderInvalid),
              n.removeEventListener("fixedLevelChange", this._emitRenderInvalid),
              n.removeEventListener("textureStoreChange", this._emitRenderInvalid),
              this._emitRenderInvalid()
          }
          ,
          p.prototype.removeAllLayers = function() {
              for (; this._layers.length > 0; )
                  this.removeLayer(this._layers[0])
          }
          ,
          p.prototype.startFrame = function() {
              throw new Error("Stage implementation must override startFrame")
          }
          ,
          p.prototype.endFrame = function() {
              throw new Error("Stage implementation must override endFrame")
          }
          ,
          p.prototype.render = function() {
              var t, e, n, i = this._tilesToLoad, r = this._tilesToRender, s = !0, a = this._width, l = this._height, u = this._tmpRect, c = this._tmpSize;
              if (!(a <= 0 || l <= 0)) {
                  for (this.startFrame(),
                  t = 0; t < this._layers.length; t++)
                      this._layers[t].textureStore().startFrame();
                  for (t = 0; t < this._layers.length; t++) {
                      var h, p, d = this._layers[t], f = d.effects(), m = d.view(), v = d.textureStore(), y = this._renderers[t], g = this._layers.length - t;
                      if (o(a, l, f && f.rect, u),
                      !(u.width <= 0 || u.height <= 0)) {
                          for (c.width = u.width * this._width,
                          c.height = u.height * this._height,
                          m.setSize(c),
                          y.startLayer(d, u),
                          n = this._collectTiles(d, v),
                          e = 0; e < i.length; e++)
                              h = i[e],
                              v.markTile(h);
                          for (e = 0; e < r.length; e++)
                              h = r[e],
                              p = v.texture(h),
                              y.renderTile(h, p, d, g);
                          d.emit("renderComplete", n),
                          n || (s = !1),
                          y.endLayer(d, u)
                      }
                  }
                  for (t = 0; t < this._layers.length; t++)
                      this._layers[t].textureStore().endFrame();
                  this.endFrame(),
                  this.emit("renderComplete", s)
              }
          }
          ,
          p.prototype._collectTiles = function(t, e) {
              var n = this._tilesToLoad
                , i = this._tilesToRender
                , r = this._tmpVisible;
              n.length = 0,
              i.length = 0,
              r.length = 0,
              t.visibleTiles(r);
              for (var o = !0, s = 0; s < r.length; s++) {
                  var a, l = r[s];
                  this._collectTileToLoad(l),
                  e.texture(l) ? (a = !1,
                  this._collectTileToRender(l)) : (a = this._collectChildren(l, e),
                  o = !1),
                  this._collectParents(l, e, a)
              }
              return n.sort(c),
              i.sort(h),
              o
          }
          ,
          p.prototype._collectChildren = function(t, e) {
              var n = this._tmpChildren
                , i = !0;
              do {
                  if (n.length = 0,
                  !t.children(n))
                      break;
                  i = !1;
                  for (var r = 0; r < n.length; r++)
                      t = n[r],
                      e.texture(t) ? (this._collectTileToLoad(t),
                      this._collectTileToRender(t)) : i = !0
              } while (i && 1 === n.length);return i
          }
          ,
          p.prototype._collectParents = function(t, e, n) {
              for (var i = this._progressive; (i || n) && null != (t = t.parent()); ) {
                  if (n)
                      if (e.texture(t))
                          this._collectTileToRender(t),
                          n = !1;
                      else if (!this._progressive)
                          continue;
                  this._collectTileToLoad(t) || (i = !1)
              }
              return n
          }
          ,
          p.prototype._collectTileToLoad = function(t) {
              return this._collectTileIntoList(t, this._tilesToLoad)
          }
          ,
          p.prototype._collectTileToRender = function(t) {
              return this._collectTileIntoList(t, this._tilesToRender)
          }
          ,
          p.prototype._collectTileIntoList = function(t, e) {
              for (var n = !1, i = 0; i < e.length; i++)
                  if (t.equals(e[i])) {
                      n = !0;
                      break
                  }
              return n || e.push(t),
              !n
          }
          ,
          p.prototype.createTexture = function(t, e, n) {
              var i = this;
              var r = a(s(function() {
                  return new i.TextureClass(i,t,e)
              }));
              return this._createTextureWorkQueue.push(r, function(i, r) {
                  n(i, t, e, r)
              })
          }
          ,
          e.exports = p
      }
      , {
          "../collections/WorkQueue": 124,
          "../util/async": 176,
          "../util/calcRect": 177,
          "../util/cancelize": 178,
          "../util/clearOwnProperties": 181,
          "./RendererRegistry": 169,
          "minimal-event-emitter": 209
      }],
      171: [function(t, e, n) {
          "use strict";
          var i = t("./Stage")
            , r = t("../loaders/HtmlImage")
            , o = t("../support/WebGl")
            , s = t("bowser")
            , a = t("../util/inherits")
            , l = t("../util/pixelRatio")
            , u = t("../util/ispot")
            , c = t("../util/dom").setAbsolute
            , h = t("../util/dom").setFullSize
            , p = t("../util/clearOwnProperties")
            , d = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.webGl
            , f = s.chrome;
          function m(t) {
              t = t || {};
              var e = this;
              this.constructor.super_.call(this, t),
              this._generateMipmaps = null != t.generateMipmaps && t.generateMipmaps,
              this._loader = new r(this),
              this._domElement = document.createElement("canvas"),
              c(this._domElement),
              h(this._domElement),
              this._gl = function(t, e) {
                  var n = {
                      alpha: !0,
                      premultipliedAlpha: !0,
                      antialias: !(!e || !e.antialias),
                      preserveDrawingBuffer: !(!e || !e.preserveDrawingBuffer)
                  };
                  d && "undefined" != typeof WebGLDebugUtils && (console.log("Using WebGL lost context simulator"),
                  t = WebGLDebugUtils.makeLostContextSimulatingCanvas(t));
                  var i = t.getContext && (t.getContext("webgl", n) || t.getContext("experimental-webgl", n));
                  if (!i)
                      throw new Error("Could not get WebGL context");
                  return d && "undefined" != typeof WebGLDebugUtils && (i = WebGLDebugUtils.makeDebugContext(i),
                  console.log("Using WebGL debug context")),
                  i
              }(this._domElement, t),
              this._handleContextLoss = function() {
                  e.emit("webglcontextlost"),
                  e._gl = null
              }
              ,
              this._domElement.addEventListener("webglcontextlost", this._handleContextLoss),
              this._rendererInstances = []
          }
          function v(t, e, n) {
              this._stage = t,
              this._gl = t._gl,
              this._texture = null,
              this._timestamp = null,
              this._width = this._height = null,
              this.refresh(e, n)
          }
          a(m, i),
          m.prototype.destroy = function() {
              this._domElement.removeEventListener("webglcontextlost", this._handleContextLoss),
              this.constructor.super_.prototype.destroy.call(this)
          }
          ,
          m.supported = function() {
              return o()
          }
          ,
          m.prototype.domElement = function() {
              return this._domElement
          }
          ,
          m.prototype.webGlContext = function() {
              return this._gl
          }
          ,
          m.prototype.setSizeForType = function() {
              var t = l();
              this._domElement.width = t * this._width,
              this._domElement.height = t * this._height
          }
          ,
          m.prototype.loadImage = function(t, e, n) {
              return this._loader.loadImage(t, e, n)
          }
          ,
          m.prototype.maxTextureSize = function() {
              return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE)
          }
          ,
          m.prototype.validateLayer = function(t) {
              var e = t.geometry().maxTileSize()
                , n = this.maxTextureSize();
              if (e > n)
                  throw new Error("Layer has level with tile size larger than maximum texture size (" + e + " vs. " + n + ")")
          }
          ,
          m.prototype.createRenderer = function(t) {
              for (var e = this._rendererInstances, n = 0; n < e.length; n++)
                  if (e[n]instanceof t)
                      return e[n];
              var i = new t(this._gl);
              return e.push(i),
              i
          }
          ,
          m.prototype.destroyRenderer = function(t) {
              var e = this._rendererInstances;
              if (this._renderers.indexOf(t) < 0) {
                  t.destroy();
                  var n = e.indexOf(t);
                  n >= 0 && e.splice(n, 1)
              }
          }
          ,
          m.prototype.startFrame = function() {
              var t = this._gl;
              if (!t)
                  throw new Error("Bad WebGL context - maybe context was lost?");
              t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
              t.clearColor(0, 0, 0, 0),
              t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
              t.enable(t.DEPTH_TEST),
              t.enable(t.BLEND),
              t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA)
          }
          ,
          m.prototype.endFrame = function() {}
          ,
          m.prototype.takeSnapshot = function(t) {
              "object" == typeof t && null != t || (t = {});
              var e = t.quality;
              if (void 0 === e && (e = 75),
              "number" != typeof e || e < 0 || e > 100)
                  throw new Error("WebGLStage: Snapshot quality needs to be a number between 0 and 100");
              return this.render(),
              this._domElement.toDataURL("image/jpeg", e / 100)
          }
          ,
          m.type = m.prototype.type = "webgl",
          v.prototype.refresh = function(t, e) {
              var n, i = this._gl, r = this._stage, o = e.timestamp();
              if (o !== this._timestamp) {
                  var s = e.element()
                    , a = e.width()
                    , l = e.height();
                  if (a !== this._width || l !== this._height) {
                      var c = r.maxTextureSize();
                      if (a > c)
                          throw new Error("Texture width larger than max size (" + a + " vs. " + c + ")");
                      if (l > c)
                          throw new Error("Texture height larger than max size (" + l + " vs. " + c + ")");
                      this._texture && i.deleteTexture(n),
                      n = this._texture = i.createTexture(),
                      i.bindTexture(i.TEXTURE_2D, n),
                      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !0),
                      i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                      i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, s)
                  } else
                      n = this._texture,
                      i.bindTexture(i.TEXTURE_2D, n),
                      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !0),
                      i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                      s instanceof HTMLVideoElement && f ? i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, s) : i.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, i.RGBA, i.UNSIGNED_BYTE, s);
                  r._generateMipmaps && u(a) && u(l) ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR),
                  i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_LINEAR),
                  i.generateMipmap(i.TEXTURE_2D)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR),
                  i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR)),
                  i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
                  i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
                  i.bindTexture(i.TEXTURE_2D, null),
                  this._timestamp = o,
                  this._width = a,
                  this._height = l
              }
          }
          ,
          v.prototype.destroy = function() {
              this._texture && this._gl.deleteTexture(this._texture),
              p(this)
          }
          ,
          m.TextureClass = m.prototype.TextureClass = v,
          e.exports = m
      }
      , {
          "../loaders/HtmlImage": 148,
          "../support/WebGl": 174,
          "../util/clearOwnProperties": 181,
          "../util/dom": 190,
          "../util/inherits": 194,
          "../util/ispot": 195,
          "../util/pixelRatio": 200,
          "./Stage": 170,
          bowser: 104
      }],
      172: [function(t, e, n) {
          "use strict";
          var i, r = t("../util/dom").prefixProperty;
          e.exports = function() {
              return void 0 !== i ? i : i = function() {
                  var t = r("perspective")
                    , e = document.createElement("div")
                    , n = void 0 !== e.style[t];
                  if (n && "WebkitPerspective" === t) {
                      var i = "__marzipano_test_css3d_support__"
                        , o = document.createElement("style");
                      o.textContent = "@media(-webkit-transform-3d){#" + i + "{height: 3px;})",
                      document.getElementsByTagName("head")[0].appendChild(o),
                      e.id = i,
                      document.body.appendChild(e),
                      n = e.offsetHeight > 0,
                      o.parentNode.removeChild(o),
                      e.parentNode.removeChild(e)
                  }
                  return n
              }()
          }
      }
      , {
          "../util/dom": 190
      }],
      173: [function(t, e, n) {
          "use strict";
          function i() {
              var t = function() {
                  var t = null
                    , e = navigator.plugins
                    , n = navigator.mimeTypes
                    , i = null;
                  if (e && e["Shockwave Flash"] && n && n["application/x-shockwave-flash"] && n["application/x-shockwave-flash"].enabledPlugin)
                      i = (i = e["Shockwave Flash"].description).replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
                      (t = [0, 0, 0])[0] = parseInt(i.replace(/^(.*)\..*$/, "$1"), 10),
                      t[1] = parseInt(i.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
                      t[2] = /[a-zA-Z]/.test(i) ? parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
                  else if (window.ActiveXObject)
                      try {
                          var r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                          r && (i = r.GetVariable("$version")) && (i = i.split(" ")[1].split(","),
                          t = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)])
                      } catch (t) {}
                  return t
              }();
              return t && (t[0] >= 11 || 10 === t[0] && t[1] >= 1)
          }
          var r;
          e.exports = function() {
              return void 0 !== r ? r : r = i()
          }
      }
      , {}],
      174: [function(t, e, n) {
          "use strict";
          var i;
          e.exports = function() {
              return void 0 !== i ? i : (t = document.createElement("canvas"),
              i = !(!t.getContext || !t.getContext("webgl") && !t.getContext("experimental-webgl")));
              var t
          }
      }
      , {}],
      175: [function(t, e, n) {
          "use strict";
          var i, r = t("bowser");
          e.exports = function() {
              return void 0 !== i ? i : i = function() {
                  var t = document.createElement("a").style;
                  t.cssText = "pointer-events:auto";
                  var e = "auto" === t.pointerEvents
                    , n = r.msie && parseFloat(r.version) < 11;
                  return e && !n
              }()
          }
      }
      , {
          bowser: 104
      }],
      176: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return function(e) {
                  var n, i;
                  try {
                      i = t()
                  } catch (t) {
                      n = t
                  } finally {
                      n ? e(n) : e(null, i)
                  }
              }
          }
      }
      , {}],
      177: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e, n, i) {
              var r, o, s, a;
              return i = i || {},
              r = null != n && null != n.absoluteWidth ? n.absoluteWidth / t : null != n && null != n.relativeWidth ? n.relativeWidth : 1,
              o = n && null != n.absoluteHeight ? n.absoluteHeight / e : null != n && null != n.relativeHeight ? n.relativeHeight : 1,
              s = null != n && null != n.absoluteX ? n.absoluteX / t : null != n && null != n.relativeX ? n.relativeX : 0,
              a = null != n && null != n.absoluteY ? n.absoluteY / e : null != n && null != n.relativeY ? n.relativeY : 0,
              i.x = s,
              i.y = a,
              i.width = r,
              i.height = o,
              i
          }
      }
      , {}],
      178: [function(t, e, n) {
          "use strict";
          var i = t("./once");
          e.exports = function(t) {
              return function() {
                  if (!arguments.length)
                      throw new Error("cancelized: expected at least one argument");
                  var e = Array.prototype.slice.call(arguments, 0)
                    , n = e[e.length - 1] = i(e[e.length - 1]);
                  return t.apply(null, e),
                  function() {
                      n.apply(null, arguments)
                  }
              }
          }
      }
      , {
          "./once": 199
      }],
      179: [function(t, e, n) {
          "use strict";
          var i = t("./noop");
          e.exports = function() {
              var t = Array.prototype.slice.call(arguments, 0);
              return function() {
                  var e = t.slice(0)
                    , n = null
                    , r = null
                    , o = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : []
                    , s = arguments.length ? arguments[arguments.length - 1] : i;
                  return o.unshift(null),
                  function t() {
                      if (arguments[0])
                          return n = r = null,
                          void s.apply(null, arguments);
                      if (!e.length)
                          return n = r = null,
                          void s.apply(null, arguments);
                      var i = n = e.shift()
                        , o = Array.prototype.slice.call(arguments, 1);
                      o.push(t);
                      var a = n.apply(null, o);
                      if (i === n) {
                          if ("function" != typeof a)
                              throw new Error("chain: chaining on non-cancellable function");
                          r = a
                      }
                  }
                  .apply(null, o),
                  function() {
                      r && r.apply(null, arguments)
                  }
              }
          }
      }
      , {
          "./noop": 197
      }],
      180: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e, n) {
              return Math.min(Math.max(t, e), n)
          }
      }
      , {}],
      181: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              for (var e in t)
                  t.hasOwnProperty(e) && (t[e] = void 0)
          }
      }
      , {}],
      182: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              return t < e ? -1 : t > e ? 1 : 0
          }
      }
      , {}],
      183: [function(t, e, n) {
          "use strict";
          e.exports = function() {
              var t = arguments;
              return function(e) {
                  for (var n = e, i = 0; i < t.length; i++)
                      n = t[i].call(null, n);
                  return n
              }
          }
      }
      , {}],
      184: [function(t, e, n) {
          "use strict";
          function i(t, e, n) {
              return 2 * Math.atan(n * Math.tan(t / 2) / e)
          }
          e.exports = {
              convert: i,
              htov: function(t, e, n) {
                  return i(t, e, n)
              },
              htod: function(t, e, n) {
                  return i(t, e, Math.sqrt(e * e + n * n))
              },
              vtoh: function(t, e, n) {
                  return i(t, n, e)
              },
              vtod: function(t, e, n) {
                  return i(t, n, Math.sqrt(e * e + n * n))
              },
              dtoh: function(t, e, n) {
                  return i(t, Math.sqrt(e * e + n * n), e)
              },
              dtov: function(t, e, n) {
                  return i(t, Math.sqrt(e * e + n * n), n)
              }
          }
      }
      , {}],
      185: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return t.toPrecision(15)
          }
      }
      , {}],
      186: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              for (var n in e)
                  n in t || (t[n] = e[n]);
              return t
          }
      }
      , {}],
      187: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              setTimeout(function() {
                  e && e.length > 0 ? t.apply(null, e) : t()
              }, 0)
          }
      }
      , {}],
      188: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return t * Math.PI / 180
          }
      }
      , {}],
      189: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              var n = null;
              return n = setTimeout(function() {
                  null != n && (n = null,
                  e(null))
              }, t),
              function() {
                  null != n && (clearTimeout(n),
                  n = null,
                  e.apply(null, arguments))
              }
          }
      }
      , {}],
      190: [function(t, e, n) {
          "use strict";
          function i(t) {
              for (var e = document.documentElement.style, n = ["Moz", "Webkit", "Khtml", "O", "ms"], i = 0; i < n.length; i++) {
                  var r = n[i] + (t[0].toUpperCase() + t.slice(1));
                  if (r in e)
                      return r
              }
              return t
          }
          function r(t) {
              var e = i(t);
              return function(t, n) {
                  return t.style[e] = n
              }
          }
          var o = r("transform")
            , s = r("transformOrigin");
          e.exports = {
              prefixProperty: i,
              getWithVendorPrefix: function(t) {
                  var e = i(t);
                  return function(t) {
                      return t.style[e]
                  }
              },
              setWithVendorPrefix: r,
              setTransform: o,
              setTransformOrigin: s,
              setNullTransform: function(t) {
                  o(t, "translateZ(0)")
              },
              setNullTransformOrigin: function(t) {
                  s(t, "0 0 0")
              },
              setAbsolute: function(t) {
                  t.style.position = "absolute"
              },
              setPixelPosition: function(t, e, n) {
                  t.style.left = e + "px",
                  t.style.top = n + "px"
              },
              setPixelSize: function(t, e, n) {
                  t.style.width = e + "px",
                  t.style.height = n + "px"
              },
              setNullSize: function(t) {
                  t.style.width = t.style.height = 0
              },
              setFullSize: function(t) {
                  t.style.width = t.style.height = "100%"
              },
              setOverflowHidden: function(t) {
                  t.style.overflow = "hidden"
              },
              setOverflowVisible: function(t) {
                  t.style.overflow = "visible"
              },
              setNoPointerEvents: function(t) {
                  t.style.pointerEvents = "none"
              },
              setBlocking: function(t) {
                  t.style.backgroundColor = "#000",
                  t.style.opacity = "0",
                  t.style.filter = "alpha(opacity=0)"
              }
          }
      }
      , {}],
      191: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              for (var n in e)
                  t[n] = e[n];
              return t
          }
      }
      , {}],
      192: [function(t, e, n) {
          (function(t) {
              "use strict";
              var n = "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== t ? t : null;
              e.exports = n
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {}],
      193: [function(t, e, n) {
          "use strict";
          e.exports = function() {
              for (var t = 0, e = 0; e < arguments.length; e++) {
                  var n = arguments[e];
                  t += n,
                  t += n << 10,
                  t ^= n >> 6
              }
              return t += t << 3,
              t ^= t >> 11,
              (t += t << 15) >= 0 ? t : -t
          }
      }
      , {}],
      194: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              t.super_ = e;
              var n = function() {};
              n.prototype = e.prototype,
              t.prototype = new n,
              t.prototype.constructor = t
          }
      }
      , {}],
      195: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return 0 == (t & t - 1)
          }
      }
      , {}],
      196: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              return (+t % (e = +e) + e) % e
          }
      }
      , {}],
      197: [function(t, e, n) {
          "use strict";
          e.exports = function() {}
      }
      , {}],
      198: [function(t, e, n) {
          "use strict";
          e.exports = "undefined" != typeof performance && performance.now ? function() {
              return performance.now()
          }
          : function() {
              return Date.now()
          }
      }
      , {}],
      199: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e, n = !1;
              return function() {
                  return n || (n = !0,
                  e = t.apply(null, arguments)),
                  e
              }
          }
      }
      , {}],
      200: [function(t, e, n) {
          "use strict";
          var i = 1;
          e.exports = function() {
              if ("undefined" != typeof window) {
                  if (window.devicePixelRatio)
                      return window.devicePixelRatio;
                  var t = window.screen;
                  if (t && t.deviceXDPI && t.logicalXDPI)
                      return t.deviceXDPI / t.logicalXDPI;
                  if (t && t.systemXDPI && t.logicalXDPI)
                      return t.systemXDPI / t.logicalXDPI
              }
              return i
          }
      }
      , {}],
      201: [function(t, e, n) {
          "use strict";
          var i = t("../support/Css")
            , r = t("./dom").setTransform
            , o = t("./dom").setPixelPosition
            , s = t("./decimal");
          e.exports = function(t, e, n, a) {
              if (a = a || "",
              i()) {
                  var l = "translateX(" + s(e) + "px) translateY(" + s(n) + "px) translateZ(0) " + a;
                  r(t, l)
              } else
                  o(t, e, n)
          }
      }
      , {
          "../support/Css": 172,
          "./decimal": 185,
          "./dom": 190
      }],
      202: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return 180 * t / Math.PI
          }
      }
      , {}],
      203: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return "number" == typeof t && isFinite(t)
          }
      }
      , {}],
      204: [function(t, e, n) {
          "use strict";
          var i = t("./noop");
          e.exports = function(t) {
              return function() {
                  var e = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : []
                    , n = arguments.length ? arguments[arguments.length - 1] : i
                    , r = null
                    , o = !1;
                  function s() {
                      !arguments[0] || o ? n.apply(null, arguments) : r = t.apply(null, e)
                  }
                  return e.push(s),
                  s(!0),
                  function() {
                      o = !0,
                      r.apply(null, arguments)
                  }
              }
          }
      }
      , {
          "./noop": 197
      }],
      205: [function(t, e, n) {
          "use strict";
          var i = t("./now");
          e.exports = function(t, e, n) {
              var r = !1
                , o = i();
              return e(0),
              requestAnimationFrame(function s() {
                  if (!r) {
                      var a = (i() - o) / t;
                      a < 1 ? (e(a),
                      requestAnimationFrame(s)) : (e(1),
                      n())
                  }
              }),
              function() {
                  r = !0,
                  n.apply(null, arguments)
              }
          }
      }
      , {
          "./now": 198
      }],
      206: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e = typeof t;
              if ("object" === e) {
                  if (null === t)
                      return "null";
                  if ("[object Array]" === Object.prototype.toString.call(t))
                      return "array";
                  if ("[object RegExp]" === Object.prototype.toString.call(t))
                      return "regexp"
              }
              return e
          }
      }
      , {}],
      207: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("gl-matrix").mat4
            , o = t("gl-matrix").vec4
            , s = t("../util/pixelRatio")
            , a = t("../util/real")
            , l = t("../util/clamp")
            , u = t("../util/clearOwnProperties")
            , c = 0
            , h = 0
            , p = .5
            , d = .5
            , f = 1
            , m = [1, 0, 1, 0]
            , v = [-1, -1, 1, 1];
          function y(t, e) {
              if (!t || null == t.mediaAspectRatio)
                  throw new Error("mediaAspectRatio must be defined");
              this._x = t && null != t.x ? t.x : p,
              this._y = t && null != t.y ? t.y : d,
              this._zoom = t && null != t.zoom ? t.zoom : f,
              this._mediaAspectRatio = t.mediaAspectRatio,
              this._width = t && null != t.width ? t.width : c,
              this._height = t && null != t.height ? t.height : h,
              this._limiter = e || null,
              this._projMatrix = r.create(),
              this._invProjMatrix = r.create(),
              this._frustum = [0, 0, 0, 0],
              this._projectionChanged = !0,
              this._params = {},
              this._vec = o.create(),
              this._update()
          }
          i(y),
          y.prototype.destroy = function() {
              u(this)
          }
          ,
          y.prototype.x = function() {
              return this._x
          }
          ,
          y.prototype.y = function() {
              return this._y
          }
          ,
          y.prototype.zoom = function() {
              return this._zoom
          }
          ,
          y.prototype.mediaAspectRatio = function() {
              return this._mediaAspectRatio
          }
          ,
          y.prototype.width = function() {
              return this._width
          }
          ,
          y.prototype.height = function() {
              return this._height
          }
          ,
          y.prototype.size = function(t) {
              return (t = t || {}).width = this._width,
              t.height = this._height,
              t
          }
          ,
          y.prototype.parameters = function(t) {
              return (t = t || {}).x = this._x,
              t.y = this._y,
              t.zoom = this._zoom,
              t.mediaAspectRatio = this._mediaAspectRatio,
              t
          }
          ,
          y.prototype.limiter = function() {
              return this._limiter
          }
          ,
          y.prototype.setX = function(t) {
              this._resetParams(),
              this._params.x = t,
              this._update(this._params)
          }
          ,
          y.prototype.setY = function(t) {
              this._resetParams(),
              this._params.y = t,
              this._update(this._params)
          }
          ,
          y.prototype.setZoom = function(t) {
              this._resetParams(),
              this._params.zoom = t,
              this._update(this._params)
          }
          ,
          y.prototype.offsetX = function(t) {
              this.setX(this._x + t)
          }
          ,
          y.prototype.offsetY = function(t) {
              this.setY(this._y + t)
          }
          ,
          y.prototype.offsetZoom = function(t) {
              this.setZoom(this._zoom + t)
          }
          ,
          y.prototype.setMediaAspectRatio = function(t) {
              this._resetParams(),
              this._params.mediaAspectRatio = t,
              this._update(this._params)
          }
          ,
          y.prototype.setSize = function(t) {
              this._resetParams(),
              this._params.width = t.width,
              this._params.height = t.height,
              this._update(this._params)
          }
          ,
          y.prototype.setParameters = function(t) {
              this._resetParams(),
              this._params.x = t.x,
              this._params.y = t.y,
              this._params.zoom = t.zoom,
              this._params.mediaAspectRatio = t.mediaAspectRatio,
              this._update(this._params)
          }
          ,
          y.prototype.setLimiter = function(t) {
              this._limiter = t || null,
              this._update()
          }
          ,
          y.prototype._resetParams = function() {
              var t = this._params;
              t.x = null,
              t.y = null,
              t.zoom = null,
              t.mediaAspectRatio = null,
              t.width = null,
              t.height = null
          }
          ,
          y.prototype._update = function(t) {
              null == t && (this._resetParams(),
              t = this._params);
              var e = this._x
                , n = this._y
                , i = this._zoom
                , r = this._mediaAspectRatio
                , o = this._width
                , s = this._height;
              if (t.x = null != t.x ? t.x : e,
              t.y = null != t.y ? t.y : n,
              t.zoom = null != t.zoom ? t.zoom : i,
              t.mediaAspectRatio = null != t.mediaAspectRatio ? t.mediaAspectRatio : r,
              t.width = null != t.width ? t.width : o,
              t.height = null != t.height ? t.height : s,
              this._limiter && !(t = this._limiter(t)))
                  throw new Error("Bad view limiter");
              var u = t.x
                , c = t.y
                , h = t.zoom
                , p = t.mediaAspectRatio
                , d = t.width
                , f = t.height;
              if (!(a(u) && a(c) && a(h) && a(p) && a(d) && a(f)))
                  throw new Error("Bad view - suspect a broken limiter");
              h = l(h, 1e-6, 1 / 0),
              this._x = u,
              this._y = c,
              this._zoom = h,
              this._mediaAspectRatio = p,
              this._width = d,
              this._height = f,
              u === e && c === n && h === i && p === r && d === o && f === s || (this._projectionChanged = !0,
              this.emit("change")),
              d === o && f === s || this.emit("resize")
          }
          ,
          y.prototype._zoomX = function() {
              return this._zoom
          }
          ,
          y.prototype._zoomY = function() {
              var t = this._mediaAspectRatio
                , e = this._width / this._height
                , n = this._zoom
                , i = n * t / e;
              return isNaN(i) && (i = n),
              i
          }
          ,
          y.prototype.updateWithControlParameters = function(t) {
              var e = this.zoom()
                , n = this._zoomX()
                , i = this._zoomY();
              this.offsetX(t.axisScaledX * n + t.x * e),
              this.offsetY(t.axisScaledY * i + t.y * e),
              this.offsetZoom(t.zoom * e)
          }
          ,
          y.prototype._updateProjection = function() {
              var t = this._projMatrix
                , e = this._invProjMatrix
                , n = this._frustum;
              if (this._projectionChanged) {
                  var i = this._x
                    , o = this._y
                    , s = this._zoomX()
                    , a = this._zoomY()
                    , l = n[0] = .5 - o + .5 * a
                    , u = n[1] = i - .5 + .5 * s
                    , c = n[2] = .5 - o - .5 * a
                    , h = n[3] = i - .5 - .5 * s;
                  r.ortho(t, h, u, c, l, -1, 1),
                  r.invert(e, t),
                  this._projectionChanged = !1
              }
          }
          ,
          y.prototype.projection = function() {
              return this._updateProjection(),
              this._projMatrix
          }
          ,
          y.prototype.inverseProjection = function() {
              return this._updateProjection(),
              this._invProjMatrix
          }
          ,
          y.prototype.intersects = function(t) {
              this._updateProjection();
              for (var e = this._frustum, n = 0; n < e.length; n++) {
                  for (var i = e[n], r = m[n], o = v[n], s = !1, a = 0; a < t.length; a++) {
                      var l = t[a];
                      if (o < 0 && l[r] < i || o > 0 && l[r] > i) {
                          s = !0;
                          break
                      }
                  }
                  if (!s)
                      return !1
              }
              return !0
          }
          ,
          y.prototype.selectLevel = function(t) {
              for (var e = s() * this.width(), n = this._zoom, i = 0; i < t.length; i++) {
                  var r = t[i];
                  if (n * r.width() >= e)
                      return r
              }
              return t[t.length - 1]
          }
          ,
          y.prototype.coordinatesToScreen = function(t, e) {
              var n = this._vec;
              e || (e = {});
              var i = this._width
                , r = this._height;
              if (i <= 0 || r <= 0)
                  return e.x = null,
                  e.y = null,
                  null;
              var s = t && null != t.x ? t.x : p
                , a = t && null != t.y ? t.y : d;
              o.set(n, s - .5, .5 - a, -1, 1),
              o.transformMat4(n, n, this.projection());
              for (var l = 0; l < 3; l++)
                  n[l] /= n[3];
              return e.x = i * (n[0] + 1) / 2,
              e.y = r * (1 - n[1]) / 2,
              e
          }
          ,
          y.prototype.screenToCoordinates = function(t, e) {
              var n = this._vec;
              e || (e = {});
              var i = this._width
                , r = this._height
                , s = 2 * t.x / i - 1
                , a = 1 - 2 * t.y / r;
              return o.set(n, s, a, 1, 1),
              o.transformMat4(n, n, this.inverseProjection()),
              e.x = .5 + n[0],
              e.y = .5 - n[1],
              e
          }
          ,
          y.limit = {
              x: function(t, e) {
                  return function(n) {
                      return n.x = l(n.x, t, e),
                      n
                  }
              },
              y: function(t, e) {
                  return function(n) {
                      return n.y = l(n.y, t, e),
                      n
                  }
              },
              zoom: function(t, e) {
                  return function(n) {
                      return n.zoom = l(n.zoom, t, e),
                      n
                  }
              },
              resolution: function(t) {
                  return function(e) {
                      if (e.width <= 0 || e.height <= 0)
                          return e;
                      var n = e.width
                        , i = s() * n / t;
                      return e.zoom = l(e.zoom, i, 1 / 0),
                      e
                  }
              },
              visibleX: function(t, e) {
                  return function(n) {
                      var i = e - t;
                      n.zoom > i && (n.zoom = i);
                      var r = t + .5 * n.zoom
                        , o = e - .5 * n.zoom;
                      return n.x = l(n.x, r, o),
                      n
                  }
              },
              visibleY: function(t, e) {
                  return function(n) {
                      if (n.width <= 0 || n.height <= 0)
                          return n;
                      var i = n.width / n.height / n.mediaAspectRatio
                        , r = (e - t) * i;
                      n.zoom > r && (n.zoom = r);
                      var o = t + .5 * n.zoom / i
                        , s = e - .5 * n.zoom / i;
                      return n.y = l(n.y, o, s),
                      n
                  }
              },
              letterbox: function() {
                  return function(t) {
                      if (t.width <= 0 || t.height <= 0)
                          return t;
                      var e, n, i, r, o = t.width / t.height, s = o / t.mediaAspectRatio;
                      return t.mediaAspectRatio >= o && (t.zoom = Math.min(t.zoom, 1)),
                      t.mediaAspectRatio <= o && (t.zoom = Math.min(t.zoom, s)),
                      t.zoom > 1 ? e = n = .5 : (e = 0 + .5 * t.zoom / 1,
                      n = 1 - .5 * t.zoom / 1),
                      t.zoom > s ? i = r = .5 : (i = 0 + .5 * t.zoom / s,
                      r = 1 - .5 * t.zoom / s),
                      t.x = l(t.x, e, n),
                      t.y = l(t.y, i, r),
                      t
                  }
              }
          },
          y.type = y.prototype.type = "flat",
          e.exports = y
      }
      , {
          "../util/clamp": 180,
          "../util/clearOwnProperties": 181,
          "../util/pixelRatio": 200,
          "../util/real": 203,
          "gl-matrix": 4,
          "minimal-event-emitter": 209
      }],
      208: [function(t, e, n) {
          "use strict";
          var i = t("minimal-event-emitter")
            , r = t("gl-matrix").mat4
            , o = t("gl-matrix").vec4
            , s = t("../util/pixelRatio")
            , a = t("../util/convertFov")
            , l = t("../util/mod")
            , u = t("../util/real")
            , c = t("../util/clamp")
            , h = t("../util/decimal")
            , p = t("../util/compose")
            , d = t("../util/clearOwnProperties")
            , f = 0
            , m = 0
            , v = 0
            , y = 0
            , g = 0
            , _ = Math.PI / 4
            , b = 0
            , w = 0;
          function x(t, e) {
              this._yaw = t && null != t.yaw ? t.yaw : v,
              this._pitch = t && null != t.pitch ? t.pitch : y,
              this._roll = t && null != t.roll ? t.roll : g,
              this._fov = t && null != t.fov ? t.fov : _,
              this._width = t && null != t.width ? t.width : f,
              this._height = t && null != t.height ? t.height : m,
              this._projectionCenterX = t && null != t.projectionCenterX ? t.projectionCenterX : b,
              this._projectionCenterY = t && null != t.projectionCenterY ? t.projectionCenterY : w,
              this._limiter = e || null,
              this._projMatrix = r.create(),
              this._invProjMatrix = r.create(),
              this._frustum = [o.create(), o.create(), o.create(), o.create(), o.create()],
              this._projectionChanged = !0,
              this._params = {},
              this._fovs = {},
              this._tmpVec = o.create(),
              this._update()
          }
          i(x),
          x.prototype.destroy = function() {
              d(this)
          }
          ,
          x.prototype.yaw = function() {
              return this._yaw
          }
          ,
          x.prototype.pitch = function() {
              return this._pitch
          }
          ,
          x.prototype.roll = function() {
              return this._roll
          }
          ,
          x.prototype.projectionCenterX = function() {
              return this._projectionCenterX
          }
          ,
          x.prototype.projectionCenterY = function() {
              return this._projectionCenterY
          }
          ,
          x.prototype.fov = function() {
              return this._fov
          }
          ,
          x.prototype.width = function() {
              return this._width
          }
          ,
          x.prototype.height = function() {
              return this._height
          }
          ,
          x.prototype.size = function(t) {
              return (t = t || {}).width = this._width,
              t.height = this._height,
              t
          }
          ,
          x.prototype.parameters = function(t) {
              return (t = t || {}).yaw = this._yaw,
              t.pitch = this._pitch,
              t.roll = this._roll,
              t.fov = this._fov,
              t
          }
          ,
          x.prototype.limiter = function() {
              return this._limiter
          }
          ,
          x.prototype.setYaw = function(t) {
              this._resetParams(),
              this._params.yaw = t,
              this._update(this._params)
          }
          ,
          x.prototype.setPitch = function(t) {
              this._resetParams(),
              this._params.pitch = t,
              this._update(this._params)
          }
          ,
          x.prototype.setRoll = function(t) {
              this._resetParams(),
              this._params.roll = t,
              this._update(this._params)
          }
          ,
          x.prototype.setFov = function(t) {
              this._resetParams(),
              this._params.fov = t,
              this._update(this._params)
          }
          ,
          x.prototype.setProjectionCenterX = function(t) {
              this._resetParams(),
              this._params.projectionCenterX = t,
              this._update(this._params)
          }
          ,
          x.prototype.setProjectionCenterY = function(t) {
              this._resetParams(),
              this._params.projectionCenterY = t,
              this._update(this._params)
          }
          ,
          x.prototype.offsetYaw = function(t) {
              this.setYaw(this._yaw + t)
          }
          ,
          x.prototype.offsetPitch = function(t) {
              this.setPitch(this._pitch + t)
          }
          ,
          x.prototype.offsetRoll = function(t) {
              this.setRoll(this._roll + t)
          }
          ,
          x.prototype.offsetFov = function(t) {
              this.setFov(this._fov + t)
          }
          ,
          x.prototype.setSize = function(t) {
              this._resetParams(),
              this._params.width = t.width,
              this._params.height = t.height,
              this._update(this._params)
          }
          ,
          x.prototype.setParameters = function(t) {
              this._resetParams(),
              this._params.yaw = t.yaw,
              this._params.pitch = t.pitch,
              this._params.roll = t.roll,
              this._params.fov = t.fov,
              this._params.projectionCenterX = t.projectionCenterX,
              this._params.projectionCenterY = t.projectionCenterY,
              this._update(this._params)
          }
          ,
          x.prototype.setLimiter = function(t) {
              this._limiter = t || null,
              this._update()
          }
          ,
          x.prototype._resetParams = function() {
              var t = this._params;
              t.yaw = null,
              t.pitch = null,
              t.roll = null,
              t.fov = null,
              t.width = null,
              t.height = null
          }
          ,
          x.prototype._update = function(t) {
              null == t && (this._resetParams(),
              t = this._params);
              var e = this._yaw
                , n = this._pitch
                , i = this._roll
                , r = this._fov
                , o = this._projectionCenterX
                , s = this._projectionCenterY
                , a = this._width
                , l = this._height;
              if (t.yaw = null != t.yaw ? t.yaw : e,
              t.pitch = null != t.pitch ? t.pitch : n,
              t.roll = null != t.roll ? t.roll : i,
              t.fov = null != t.fov ? t.fov : r,
              t.width = null != t.width ? t.width : a,
              t.height = null != t.height ? t.height : l,
              t.projectionCenterX = null != t.projectionCenterX ? t.projectionCenterX : o,
              t.projectionCenterY = null != t.projectionCenterY ? t.projectionCenterY : s,
              this._limiter && !(t = this._limiter(t)))
                  throw new Error("Bad view limiter");
              var c = (t = this._normalize(t)).yaw
                , h = t.pitch
                , p = t.roll
                , d = t.fov
                , f = t.width
                , m = t.height
                , v = t.projectionCenterX
                , y = t.projectionCenterY;
              if (!(u(c) && u(h) && u(p) && u(d) && u(f) && u(m) && u(v) && u(y)))
                  throw new Error("Bad view - suspect a broken limiter");
              this._yaw = c,
              this._pitch = h,
              this._roll = p,
              this._fov = d,
              this._width = f,
              this._height = m,
              this._projectionCenterX = v,
              this._projectionCenterY = y,
              c === e && h === n && p === i && d === r && f === a && m === l && v === o && y === s || (this._projectionChanged = !0,
              this.emit("change")),
              f === a && m === l || this.emit("resize")
          }
          ,
          x.prototype._normalize = function(t) {
              this._normalizeCoordinates(t);
              var e = a.htov(Math.PI, t.width, t.height)
                , n = isNaN(e) ? Math.PI : Math.min(Math.PI, e);
              return t.fov = c(t.fov, 1e-6, n - 1e-6),
              t
          }
          ,
          x.prototype._normalizeCoordinates = function(t) {
              return "yaw"in t && (t.yaw = l(t.yaw - Math.PI, -2 * Math.PI) + Math.PI),
              "pitch"in t && (t.pitch = l(t.pitch - Math.PI, -2 * Math.PI) + Math.PI),
              "roll"in t && (t.roll = l(t.roll - Math.PI, -2 * Math.PI) + Math.PI),
              t
          }
          ,
          x.prototype.normalizeToClosest = function(t, e) {
              var n = this._yaw
                , i = this._pitch
                , r = t.yaw
                , o = t.pitch
                , s = r - 2 * Math.PI
                , a = r + 2 * Math.PI;
              Math.abs(s - n) < Math.abs(r - n) ? r = s : Math.abs(a - n) < Math.abs(r - n) && (r = a);
              var l = o - 2 * Math.PI
                , u = o + 2 * Math.PI;
              return Math.abs(l - i) < Math.abs(o - i) ? o = l : Math.abs(l - i) < Math.abs(o - i) && (o = u),
              (e = e || {}).yaw = r,
              e.pitch = o,
              e
          }
          ,
          x.prototype.updateWithControlParameters = function(t) {
              var e = this._fov
                , n = a.vtoh(e, this._width, this._height);
              isNaN(n) && (n = e),
              this.offsetYaw(t.axisScaledX * n + 2 * t.x * n + t.yaw),
              this.offsetPitch(t.axisScaledY * e + 2 * t.y * n + t.pitch),
              this.offsetRoll(-t.roll),
              this.offsetFov(t.zoom * e)
          }
          ,
          x.prototype._updateProjection = function() {
              var t = this._projMatrix
                , e = this._invProjMatrix
                , n = this._frustum;
              if (this._projectionChanged) {
                  var i = this._width
                    , o = this._height
                    , s = this._fov
                    , l = a.vtoh(s, i, o)
                    , u = i / o
                    , c = this._projectionCenterX
                    , h = this._projectionCenterY;
                  if (0 !== c || 0 !== h) {
                      var p = Math.atan(2 * c * Math.tan(l / 2))
                        , d = Math.atan(2 * h * Math.tan(s / 2))
                        , f = this._fovs;
                      f.leftDegrees = 180 * (l / 2 + p) / Math.PI,
                      f.rightDegrees = 180 * (l / 2 - p) / Math.PI,
                      f.upDegrees = 180 * (s / 2 + d) / Math.PI,
                      f.downDegrees = 180 * (s / 2 - d) / Math.PI,
                      r.perspectiveFromFieldOfView(t, f, -1, 1)
                  } else
                      r.perspective(t, s, u, -1, 1);
                  r.rotateZ(t, t, this._roll),
                  r.rotateX(t, t, this._pitch),
                  r.rotateY(t, t, this._yaw),
                  r.invert(e, t),
                  this._matrixToFrustum(t, n),
                  this._projectionChanged = !1
              }
          }
          ,
          x.prototype._matrixToFrustum = function(t, e) {
              o.set(e[0], t[3] + t[0], t[7] + t[4], t[11] + t[8], 0),
              o.set(e[1], t[3] - t[0], t[7] - t[4], t[11] - t[8], 0),
              o.set(e[2], t[3] + t[1], t[7] + t[5], t[11] + t[9], 0),
              o.set(e[3], t[3] - t[1], t[7] - t[5], t[11] - t[9], 0),
              o.set(e[4], t[3] + t[2], t[7] + t[6], t[11] + t[10], 0)
          }
          ,
          x.prototype.projection = function() {
              return this._updateProjection(),
              this._projMatrix
          }
          ,
          x.prototype.inverseProjection = function() {
              return this._updateProjection(),
              this._invProjMatrix
          }
          ,
          x.prototype.intersects = function(t) {
              this._updateProjection();
              for (var e = this._frustum, n = this._tmpVec, i = 0; i < e.length; i++) {
                  for (var r = e[i], s = !1, a = 0; a < t.length; a++) {
                      var l = t[a];
                      o.set(n, l[0], l[1], l[2], 0),
                      o.dot(r, n) >= 0 && (s = !0)
                  }
                  if (!s)
                      return !1
              }
              return !0
          }
          ,
          x.prototype.selectLevel = function(t) {
              for (var e = s() * this._height, n = Math.tan(.5 * this._fov), i = 0; i < t.length; i++) {
                  var r = t[i];
                  if (n * r.height() >= e)
                      return r
              }
              return t[t.length - 1]
          }
          ,
          x.prototype.coordinatesToScreen = function(t, e) {
              var n = this._tmpVec;
              e || (e = {});
              var i = this._width
                , r = this._height;
              if (i <= 0 || r <= 0)
                  return e.x = null,
                  e.y = null,
                  null;
              var s = t.yaw
                , a = t.pitch
                , l = Math.sin(s) * Math.cos(a)
                , u = -Math.sin(t.pitch)
                , c = -Math.cos(s) * Math.cos(a);
              return o.set(n, l, u, c, 1),
              o.transformMat4(n, n, this.projection()),
              n[3] >= 0 ? (e.x = i * (n[0] / n[3] + 1) / 2,
              e.y = r * (1 - n[1] / n[3]) / 2,
              e) : (e.x = null,
              e.y = null,
              null)
          }
          ,
          x.prototype.screenToCoordinates = function(t, e) {
              var n = this._tmpVec;
              e || (e = {});
              var i = this._width
                , r = this._height
                , s = 2 * t.x / i - 1
                , a = 1 - 2 * t.y / r;
              o.set(n, s, a, 1, 1),
              o.transformMat4(n, n, this.inverseProjection());
              var l = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
              return e.yaw = Math.atan2(n[0], -n[2]),
              e.pitch = Math.acos(n[1] / l) - Math.PI / 2,
              this._normalizeCoordinates(e),
              e
          }
          ,
          x.prototype.coordinatesToPerspectiveTransform = function(t, e, n) {
              n = n || "";
              var i = this._height
                , r = this._width
                , o = this._fov
                , s = .5 * i / Math.tan(o / 2)
                , a = "";
              return a += "translateX(" + h(r / 2) + "px) ",
              a += "translateY(" + h(i / 2) + "px) ",
              a += "translateX(-50%) translateY(-50%) ",
              a += "perspective(" + h(s) + "px) ",
              a += "translateZ(" + h(s) + "px) ",
              a += "rotateZ(" + h(-this._roll) + "rad) ",
              a += "rotateX(" + h(-this._pitch) + "rad) ",
              a += "rotateY(" + h(this._yaw) + "rad) ",
              a += "rotateY(" + h(-t.yaw) + "rad) ",
              a += "rotateX(" + h(t.pitch) + "rad) ",
              a += "translateZ(" + h(-e) + "px) ",
              a += n + " "
          }
          ,
          x.limit = {
              yaw: function(t, e) {
                  return function(n) {
                      return n.yaw = c(n.yaw, t, e),
                      n
                  }
              },
              pitch: function(t, e) {
                  return function(n) {
                      return n.pitch = c(n.pitch, t, e),
                      n
                  }
              },
              roll: function(t, e) {
                  return function(n) {
                      return n.roll = c(n.roll, t, e),
                      n
                  }
              },
              hfov: function(t, e) {
                  return function(n) {
                      var i = n.width
                        , r = n.height;
                      if (i > 0 && r > 0) {
                          var o = a.htov(t, i, r)
                            , s = a.htov(e, i, r);
                          n.fov = c(n.fov, o, s)
                      }
                      return n
                  }
              },
              vfov: function(t, e) {
                  return function(n) {
                      return n.fov = c(n.fov, t, e),
                      n
                  }
              },
              resolution: function(t) {
                  return function(e) {
                      var n = e.height;
                      if (n) {
                          var i = s() * n
                            , r = 2 * Math.atan(i / t);
                          e.fov = c(e.fov, r, 1 / 0)
                      }
                      return e
                  }
              },
              traditional: function(t, e, n) {
                  return n = null != n ? n : e,
                  p(x.limit.resolution(t), x.limit.vfov(0, e), x.limit.hfov(0, n), x.limit.pitch(-Math.PI / 2, Math.PI / 2))
              }
          },
          x.type = x.prototype.type = "rectilinear",
          e.exports = x
      }
      , {
          "../util/clamp": 180,
          "../util/clearOwnProperties": 181,
          "../util/compose": 183,
          "../util/convertFov": 184,
          "../util/decimal": 185,
          "../util/mod": 196,
          "../util/pixelRatio": 200,
          "../util/real": 203,
          "gl-matrix": 4,
          "minimal-event-emitter": 209
      }],
      209: [function(t, e, n) {
          "use strict";
          function i() {}
          i.prototype.addEventListener = function(t, e) {
              var n = this.__events = this.__events || {}
                , i = n[t] = n[t] || [];
              i.indexOf(e) < 0 && i.push(e)
          }
          ,
          i.prototype.removeEventListener = function(t, e) {
              var n = (this.__events = this.__events || {})[t];
              if (n) {
                  var i = n.indexOf(e);
                  i >= 0 && n.splice(i, 1)
              }
          }
          ,
          i.prototype.emit = function(t, e) {
              var n = (this.__events = this.__events || {})[t]
                , i = Array.prototype.slice.call(arguments, 1);
              if (n)
                  for (var r = 0; r < n.length; r++) {
                      n[r].apply(this, i)
                  }
          }
          ,
          e.exports = function(t) {
              for (var e in i.prototype)
                  i.prototype.hasOwnProperty(e) && (t.prototype[e] = i.prototype[e])
          }
      }
      , {}],
      210: [function(t, e, n) {
          var i, r, o = e.exports = {};
          function s() {
              throw new Error("setTimeout has not been defined")
          }
          function a() {
              throw new Error("clearTimeout has not been defined")
          }
          function l(t) {
              if (i === setTimeout)
                  return setTimeout(t, 0);
              if ((i === s || !i) && setTimeout)
                  return i = setTimeout,
                  setTimeout(t, 0);
              try {
                  return i(t, 0)
              } catch (e) {
                  try {
                      return i.call(null, t, 0)
                  } catch (e) {
                      return i.call(this, t, 0)
                  }
              }
          }
          !function() {
              try {
                  i = "function" == typeof setTimeout ? setTimeout : s
              } catch (t) {
                  i = s
              }
              try {
                  r = "function" == typeof clearTimeout ? clearTimeout : a
              } catch (t) {
                  r = a
              }
          }();
          var u, c = [], h = !1, p = -1;
          function d() {
              h && u && (h = !1,
              u.length ? c = u.concat(c) : p = -1,
              c.length && f())
          }
          function f() {
              if (!h) {
                  var t = l(d);
                  h = !0;
                  for (var e = c.length; e; ) {
                      for (u = c,
                      c = []; ++p < e; )
                          u && u[p].run();
                      p = -1,
                      e = c.length
                  }
                  u = null,
                  h = !1,
                  function(t) {
                      if (r === clearTimeout)
                          return clearTimeout(t);
                      if ((r === a || !r) && clearTimeout)
                          return r = clearTimeout,
                          clearTimeout(t);
                      try {
                          r(t)
                      } catch (e) {
                          try {
                              return r.call(null, t)
                          } catch (e) {
                              return r.call(this, t)
                          }
                      }
                  }(t)
              }
          }
          function m(t, e) {
              this.fun = t,
              this.array = e
          }
          function v() {}
          o.nextTick = function(t) {
              var e = new Array(arguments.length - 1);
              if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                      e[n - 1] = arguments[n];
              c.push(new m(t,e)),
              1 !== c.length || h || l(f)
          }
          ,
          m.prototype.run = function() {
              this.fun.apply(null, this.array)
          }
          ,
          o.title = "browser",
          o.browser = !0,
          o.env = {},
          o.argv = [],
          o.version = "",
          o.versions = {},
          o.on = v,
          o.addListener = v,
          o.once = v,
          o.off = v,
          o.removeListener = v,
          o.removeAllListeners = v,
          o.emit = v,
          o.prependListener = v,
          o.prependOnceListener = v,
          o.listeners = function(t) {
              return []
          }
          ,
          o.binding = function(t) {
              throw new Error("process.binding is not supported")
          }
          ,
          o.cwd = function() {
              return "/"
          }
          ,
          o.chdir = function(t) {
              throw new Error("process.chdir is not supported")
          }
          ,
          o.umask = function() {
              return 0
          }
      }
      , {}],
      211: [function(t, e, n) {
          (function(t) {
              !function(e, n) {
                  "use strict";
                  if (!e.setImmediate) {
                      var i, r, o, s, a, l = 1, u = {}, c = !1, h = e.document, p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                      p = p && p.setTimeout ? p : e,
                      "[object process]" === {}.toString.call(e.process) ? i = function() {
                          var e = d(arguments);
                          return t.nextTick(f(m, e)),
                          e
                      }
                      : !function() {
                          if (e.postMessage && !e.importScripts) {
                              var t = !0
                                , n = e.onmessage;
                              return e.onmessage = function() {
                                  t = !1
                              }
                              ,
                              e.postMessage("", "*"),
                              e.onmessage = n,
                              t
                          }
                      }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(t) {
                          m(t.data)
                      }
                      ,
                      i = function() {
                          var t = d(arguments);
                          return o.port2.postMessage(t),
                          t
                      }
                      ) : h && "onreadystatechange"in h.createElement("script") ? (r = h.documentElement,
                      i = function() {
                          var t = d(arguments)
                            , e = h.createElement("script");
                          return e.onreadystatechange = function() {
                              m(t),
                              e.onreadystatechange = null,
                              r.removeChild(e),
                              e = null
                          }
                          ,
                          r.appendChild(e),
                          t
                      }
                      ) : i = function() {
                          var t = d(arguments);
                          return setTimeout(f(m, t), 0),
                          t
                      }
                      : (s = "setImmediate$" + Math.random() + "$",
                      a = function(t) {
                          t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && m(+t.data.slice(s.length))
                      }
                      ,
                      e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                      i = function() {
                          var t = d(arguments);
                          return e.postMessage(s + t, "*"),
                          t
                      }
                      ),
                      p.setImmediate = i,
                      p.clearImmediate = v
                  }
                  function d(t) {
                      return u[l] = f.apply(n, t),
                      l++
                  }
                  function f(t) {
                      var e = [].slice.call(arguments, 1);
                      return function() {
                          "function" == typeof t ? t.apply(n, e) : new Function("" + t)()
                      }
                  }
                  function m(t) {
                      if (c)
                          setTimeout(f(m, t), 0);
                      else {
                          var e = u[t];
                          if (e) {
                              c = !0;
                              try {
                                  e()
                              } finally {
                                  v(t),
                                  c = !1
                              }
                          }
                      }
                  }
                  function v(t) {
                      delete u[t]
                  }
              }(new Function("return this")())
          }
          ).call(this, t("_process"))
      }
      , {
          _process: 210
      }],
      212: [function(e, n, i) {
          !function(e) {
              "use strict";
              "function" == typeof t && t.amd ? t(e) : void 0 !== n && void 0 !== n.exports ? n.exports = e() : window.Sortable = e()
          }(function() {
              "use strict";
              if ("undefined" == typeof window || !window.document)
                  return function() {
                      throw new Error("Sortable.js requires a window with a document")
                  }
                  ;
              var t, e, n, i, r, o, s, a, l, u, c, h, p, d, f, m, v, y, g, _, b, w = {}, x = /\s+/g, S = /left|right|inline/, M = "Sortable" + (new Date).getTime(), E = window, T = E.document, D = E.parseInt, I = E.setTimeout, C = E.jQuery || E.Zepto, L = E.Polymer, F = !1, k = "draggable"in T.createElement("div"), A = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((b = T.createElement("x")).style.cssText = "pointer-events:auto",
              "auto" === b.style.pointerEvents), O = !1, P = Math.abs, R = Math.min, z = [], N = [], j = it(function(t, e, n) {
                  if (n && e.scroll) {
                      var i, r, o, s, c, h, p = n[M], d = e.scrollSensitivity, f = e.scrollSpeed, m = t.clientX, v = t.clientY, y = window.innerWidth, g = window.innerHeight;
                      if (l !== n && (a = e.scroll,
                      l = n,
                      u = e.scrollFn,
                      !0 === a)) {
                          a = n;
                          do {
                              if (a.offsetWidth < a.scrollWidth || a.offsetHeight < a.scrollHeight)
                                  break
                          } while (a = a.parentNode)
                      }
                      a && (i = a,
                      r = a.getBoundingClientRect(),
                      o = (P(r.right - m) <= d) - (P(r.left - m) <= d),
                      s = (P(r.bottom - v) <= d) - (P(r.top - v) <= d)),
                      o || s || (s = (g - v <= d) - (v <= d),
                      ((o = (y - m <= d) - (m <= d)) || s) && (i = E)),
                      w.vx === o && w.vy === s && w.el === i || (w.el = i,
                      w.vx = o,
                      w.vy = s,
                      clearInterval(w.pid),
                      i && (w.pid = setInterval(function() {
                          if (h = s ? s * f : 0,
                          c = o ? o * f : 0,
                          "function" == typeof u)
                              return u.call(p, c, h, t);
                          i === E ? E.scrollTo(E.pageXOffset + c, E.pageYOffset + h) : (i.scrollTop += h,
                          i.scrollLeft += c)
                      }, 24)))
                  }
              }, 30), H = function(t) {
                  function e(t, e) {
                      return void 0 !== t && !0 !== t || (t = n.name),
                      "function" == typeof t ? t : function(n, i) {
                          var r = i.options.group.name;
                          return e ? t : t && (t.join ? t.indexOf(r) > -1 : r == t)
                      }
                  }
                  var n = {}
                    , i = t.group;
                  i && "object" == typeof i || (i = {
                      name: i
                  }),
                  n.name = i.name,
                  n.checkPull = e(i.pull, !0),
                  n.checkPut = e(i.put),
                  n.revertClone = i.revertClone,
                  t.group = n
              };
              try {
                  window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                      get: function() {
                          F = {
                              capture: !1,
                              passive: !1
                          }
                      }
                  }))
              } catch (t) {}
              function B(t, e) {
                  if (!t || !t.nodeType || 1 !== t.nodeType)
                      throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
                  this.el = t,
                  this.options = e = rt({}, e),
                  t[M] = this;
                  var n = {
                      group: Math.random(),
                      sort: !0,
                      disabled: !1,
                      store: null,
                      handle: null,
                      scroll: !0,
                      scrollSensitivity: 30,
                      scrollSpeed: 10,
                      draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
                      ghostClass: "sortable-ghost",
                      chosenClass: "sortable-chosen",
                      dragClass: "sortable-drag",
                      ignore: "a, img",
                      filter: null,
                      preventOnFilter: !0,
                      animation: 0,
                      setData: function(t, e) {
                          t.setData("Text", e.textContent)
                      },
                      dropBubble: !1,
                      dragoverBubble: !1,
                      dataIdAttr: "data-id",
                      delay: 0,
                      forceFallback: !1,
                      fallbackClass: "sortable-fallback",
                      fallbackOnBody: !1,
                      fallbackTolerance: 0,
                      fallbackOffset: {
                          x: 0,
                          y: 0
                      },
                      supportPointer: !1 !== B.supportPointer
                  };
                  for (var i in n)
                      !(i in e) && (e[i] = n[i]);
                  for (var r in H(e),
                  this)
                      "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));
                  this.nativeDraggable = !e.forceFallback && k,
                  Y(t, "mousedown", this._onTapStart),
                  Y(t, "touchstart", this._onTapStart),
                  e.supportPointer && Y(t, "pointerdown", this._onTapStart),
                  this.nativeDraggable && (Y(t, "dragover", this),
                  Y(t, "dragenter", this)),
                  N.push(this._onDragOver),
                  e.store && this.sort(e.store.get(this))
              }
              function V(e, n) {
                  "clone" !== e.lastPullMode && (n = !0),
                  i && i.state !== n && (G(i, "display", n ? "none" : ""),
                  n || i.state && (e.options.group.revertClone ? (r.insertBefore(i, o),
                  e._animate(t, i)) : r.insertBefore(i, t)),
                  i.state = n)
              }
              function W(t, e, n) {
                  if (t) {
                      n = n || T;
                      do {
                          if (">*" === e && t.parentNode === n || nt(t, e))
                              return t
                      } while (t = q(t))
                  }
                  return null
              }
              function q(t) {
                  var e = t.host;
                  return e && e.nodeType ? e : t.parentNode
              }
              function Y(t, e, n) {
                  t.addEventListener(e, n, F)
              }
              function X(t, e, n) {
                  t.removeEventListener(e, n, F)
              }
              function U(t, e, n) {
                  if (t)
                      if (t.classList)
                          t.classList[n ? "add" : "remove"](e);
                      else {
                          var i = (" " + t.className + " ").replace(x, " ").replace(" " + e + " ", " ");
                          t.className = (i + (n ? " " + e : "")).replace(x, " ")
                      }
              }
              function G(t, e, n) {
                  var i = t && t.style;
                  if (i) {
                      if (void 0 === n)
                          return T.defaultView && T.defaultView.getComputedStyle ? n = T.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle),
                          void 0 === e ? n : n[e];
                      e in i || (e = "-webkit-" + e),
                      i[e] = n + ("string" == typeof n ? "" : "px")
                  }
              }
              function $(t, e, n) {
                  if (t) {
                      var i = t.getElementsByTagName(e)
                        , r = 0
                        , o = i.length;
                      if (n)
                          for (; r < o; r++)
                              n(i[r], r);
                      return i
                  }
                  return []
              }
              function K(t, e, n, r, o, s, a, l) {
                  t = t || e[M];
                  var u = T.createEvent("Event")
                    , c = t.options
                    , h = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                  u.initEvent(n, !0, !0),
                  u.to = o || e,
                  u.from = s || e,
                  u.item = r || e,
                  u.clone = i,
                  u.oldIndex = a,
                  u.newIndex = l,
                  e.dispatchEvent(u),
                  c[h] && c[h].call(t, u)
              }
              function Z(t, e, n, i, r, o, s, a) {
                  var l, u, c = t[M], h = c.options.onMove;
                  return (l = T.createEvent("Event")).initEvent("move", !0, !0),
                  l.to = e,
                  l.from = t,
                  l.dragged = n,
                  l.draggedRect = i,
                  l.related = r || e,
                  l.relatedRect = o || e.getBoundingClientRect(),
                  l.willInsertAfter = a,
                  t.dispatchEvent(l),
                  h && (u = h.call(c, l, s)),
                  u
              }
              function Q(t) {
                  t.draggable = !1
              }
              function J() {
                  O = !1
              }
              function tt(t) {
                  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--; )
                      i += e.charCodeAt(n);
                  return i.toString(36)
              }
              function et(t, e) {
                  var n = 0;
                  if (!t || !t.parentNode)
                      return -1;
                  for (; t && (t = t.previousElementSibling); )
                      "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !nt(t, e) || n++;
                  return n
              }
              function nt(t, e) {
                  if (t) {
                      var n = (e = e.split(".")).shift().toUpperCase()
                        , i = new RegExp("\\s(" + e.join("|") + ")(?=\\s)","g");
                      return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(i) || []).length != e.length)
                  }
                  return !1
              }
              function it(t, e) {
                  var n, i;
                  return function() {
                      void 0 === n && (n = arguments,
                      i = this,
                      I(function() {
                          1 === n.length ? t.call(i, n[0]) : t.apply(i, n),
                          n = void 0
                      }, e))
                  }
              }
              function rt(t, e) {
                  if (t && e)
                      for (var n in e)
                          e.hasOwnProperty(n) && (t[n] = e[n]);
                  return t
              }
              function ot(t) {
                  return L && L.dom ? L.dom(t).cloneNode(!0) : C ? C(t).clone(!0)[0] : t.cloneNode(!0)
              }
              function st(t) {
                  return I(t, 0)
              }
              function at(t) {
                  return clearTimeout(t)
              }
              return B.prototype = {
                  constructor: B,
                  _onTapStart: function(e) {
                      var n, i = this, r = this.el, o = this.options, a = o.preventOnFilter, l = e.type, u = e.touches && e.touches[0], c = (u || e).target, h = e.target.shadowRoot && e.path && e.path[0] || c, p = o.filter;
                      if (function(t) {
                          var e = t.getElementsByTagName("input")
                            , n = e.length;
                          for (; n--; ) {
                              var i = e[n];
                              i.checked && z.push(i)
                          }
                      }(r),
                      !t && !(/mousedown|pointerdown/.test(l) && 0 !== e.button || o.disabled) && !h.isContentEditable && (c = W(c, o.draggable, r)) && s !== c) {
                          if (n = et(c, o.draggable),
                          "function" == typeof p) {
                              if (p.call(this, e, c, this))
                                  return K(i, h, "filter", c, r, r, n),
                                  void (a && e.preventDefault())
                          } else if (p && (p = p.split(",").some(function(t) {
                              if (t = W(h, t.trim(), r))
                                  return K(i, t, "filter", c, r, r, n),
                                  !0
                          })))
                              return void (a && e.preventDefault());
                          o.handle && !W(h, o.handle, r) || this._prepareDragStart(e, u, c, n)
                      }
                  },
                  _prepareDragStart: function(n, i, a, l) {
                      var u, c = this, h = c.el, p = c.options, f = h.ownerDocument;
                      a && !t && a.parentNode === h && (y = n,
                      r = h,
                      e = (t = a).parentNode,
                      o = t.nextSibling,
                      s = a,
                      m = p.group,
                      d = l,
                      this._lastX = (i || n).clientX,
                      this._lastY = (i || n).clientY,
                      t.style["will-change"] = "all",
                      u = function() {
                          c._disableDelayedDrag(),
                          t.draggable = c.nativeDraggable,
                          U(t, p.chosenClass, !0),
                          c._triggerDragStart(n, i),
                          K(c, r, "choose", t, r, r, d)
                      }
                      ,
                      p.ignore.split(",").forEach(function(e) {
                          $(t, e.trim(), Q)
                      }),
                      Y(f, "mouseup", c._onDrop),
                      Y(f, "touchend", c._onDrop),
                      Y(f, "touchcancel", c._onDrop),
                      Y(f, "selectstart", c),
                      p.supportPointer && Y(f, "pointercancel", c._onDrop),
                      p.delay ? (Y(f, "mouseup", c._disableDelayedDrag),
                      Y(f, "touchend", c._disableDelayedDrag),
                      Y(f, "touchcancel", c._disableDelayedDrag),
                      Y(f, "mousemove", c._disableDelayedDrag),
                      Y(f, "touchmove", c._disableDelayedDrag),
                      p.supportPointer && Y(f, "pointermove", c._disableDelayedDrag),
                      c._dragStartTimer = I(u, p.delay)) : u())
                  },
                  _disableDelayedDrag: function() {
                      var t = this.el.ownerDocument;
                      clearTimeout(this._dragStartTimer),
                      X(t, "mouseup", this._disableDelayedDrag),
                      X(t, "touchend", this._disableDelayedDrag),
                      X(t, "touchcancel", this._disableDelayedDrag),
                      X(t, "mousemove", this._disableDelayedDrag),
                      X(t, "touchmove", this._disableDelayedDrag),
                      X(t, "pointermove", this._disableDelayedDrag)
                  },
                  _triggerDragStart: function(e, n) {
                      (n = n || ("touch" == e.pointerType ? e : null)) ? (y = {
                          target: t,
                          clientX: n.clientX,
                          clientY: n.clientY
                      },
                      this._onDragStart(y, "touch")) : this.nativeDraggable ? (Y(t, "dragend", this),
                      Y(r, "dragstart", this._onDragStart)) : this._onDragStart(y, !0);
                      try {
                          T.selection ? st(function() {
                              T.selection.empty()
                          }) : window.getSelection().removeAllRanges()
                      } catch (t) {}
                  },
                  _dragStarted: function() {
                      if (r && t) {
                          var e = this.options;
                          U(t, e.ghostClass, !0),
                          U(t, e.dragClass, !1),
                          B.active = this,
                          K(this, r, "start", t, r, r, d)
                      } else
                          this._nulling()
                  },
                  _emulateDragOver: function() {
                      if (g) {
                          if (this._lastX === g.clientX && this._lastY === g.clientY)
                              return;
                          this._lastX = g.clientX,
                          this._lastY = g.clientY,
                          A || G(n, "display", "none");
                          var t = T.elementFromPoint(g.clientX, g.clientY)
                            , e = t
                            , i = N.length;
                          if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(g.clientX, g.clientY)),
                          e)
                              do {
                                  if (e[M]) {
                                      for (; i--; )
                                          N[i]({
                                              clientX: g.clientX,
                                              clientY: g.clientY,
                                              target: t,
                                              rootEl: e
                                          });
                                      break
                                  }
                                  t = e
                              } while (e = e.parentNode);A || G(n, "display", "")
                      }
                  },
                  _onTouchMove: function(t) {
                      if (y) {
                          var e = this.options
                            , i = e.fallbackTolerance
                            , r = e.fallbackOffset
                            , o = t.touches ? t.touches[0] : t
                            , s = o.clientX - y.clientX + r.x
                            , a = o.clientY - y.clientY + r.y
                            , l = t.touches ? "translate3d(" + s + "px," + a + "px,0)" : "translate(" + s + "px," + a + "px)";
                          if (!B.active) {
                              if (i && R(P(o.clientX - this._lastX), P(o.clientY - this._lastY)) < i)
                                  return;
                              this._dragStarted()
                          }
                          this._appendGhost(),
                          _ = !0,
                          g = o,
                          G(n, "webkitTransform", l),
                          G(n, "mozTransform", l),
                          G(n, "msTransform", l),
                          G(n, "transform", l),
                          t.preventDefault()
                      }
                  },
                  _appendGhost: function() {
                      if (!n) {
                          var e, i = t.getBoundingClientRect(), o = G(t), s = this.options;
                          U(n = t.cloneNode(!0), s.ghostClass, !1),
                          U(n, s.fallbackClass, !0),
                          U(n, s.dragClass, !0),
                          G(n, "top", i.top - D(o.marginTop, 10)),
                          G(n, "left", i.left - D(o.marginLeft, 10)),
                          G(n, "width", i.width),
                          G(n, "height", i.height),
                          G(n, "opacity", "0.8"),
                          G(n, "position", "fixed"),
                          G(n, "zIndex", "100000"),
                          G(n, "pointerEvents", "none"),
                          s.fallbackOnBody && T.body.appendChild(n) || r.appendChild(n),
                          e = n.getBoundingClientRect(),
                          G(n, "width", 2 * i.width - e.width),
                          G(n, "height", 2 * i.height - e.height)
                      }
                  },
                  _onDragStart: function(e, n) {
                      var o = this
                        , s = e.dataTransfer
                        , a = o.options;
                      o._offUpEvents(),
                      m.checkPull(o, o, t, e) && ((i = ot(t)).draggable = !1,
                      i.style["will-change"] = "",
                      G(i, "display", "none"),
                      U(i, o.options.chosenClass, !1),
                      o._cloneId = st(function() {
                          r.insertBefore(i, t),
                          K(o, r, "clone", t)
                      })),
                      U(t, a.dragClass, !0),
                      n ? ("touch" === n ? (Y(T, "touchmove", o._onTouchMove),
                      Y(T, "touchend", o._onDrop),
                      Y(T, "touchcancel", o._onDrop),
                      a.supportPointer && (Y(T, "pointermove", o._onTouchMove),
                      Y(T, "pointerup", o._onDrop))) : (Y(T, "mousemove", o._onTouchMove),
                      Y(T, "mouseup", o._onDrop)),
                      o._loopId = setInterval(o._emulateDragOver, 50)) : (s && (s.effectAllowed = "move",
                      a.setData && a.setData.call(o, s, t)),
                      Y(T, "drop", o),
                      o._dragStartId = st(o._dragStarted))
                  },
                  _onDragOver: function(s) {
                      var a, l, u, d, f = this.el, y = this.options, g = y.group, b = B.active, w = m === g, x = !1, E = y.sort;
                      if (void 0 !== s.preventDefault && (s.preventDefault(),
                      !y.dragoverBubble && s.stopPropagation()),
                      !t.animated && (_ = !0,
                      b && !y.disabled && (w ? E || (d = !r.contains(t)) : v === this || (b.lastPullMode = m.checkPull(this, b, t, s)) && g.checkPut(this, b, t, s)) && (void 0 === s.rootEl || s.rootEl === this.el))) {
                          if (j(s, y, this.el),
                          O)
                              return;
                          if (a = W(s.target, y.draggable, f),
                          l = t.getBoundingClientRect(),
                          v !== this && (v = this,
                          x = !0),
                          d)
                              return V(b, !0),
                              e = r,
                              void (i || o ? r.insertBefore(t, i || o) : E || r.appendChild(t));
                          if (0 === f.children.length || f.children[0] === n || f === s.target && function(t, e) {
                              var n = t.lastElementChild.getBoundingClientRect();
                              return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5
                          }(f, s)) {
                              if (0 !== f.children.length && f.children[0] !== n && f === s.target && (a = f.lastElementChild),
                              a) {
                                  if (a.animated)
                                      return;
                                  u = a.getBoundingClientRect()
                              }
                              V(b, w),
                              !1 !== Z(r, f, t, l, a, u, s) && (t.contains(f) || (f.appendChild(t),
                              e = f),
                              this._animate(l, t),
                              a && this._animate(u, a))
                          } else if (a && !a.animated && a !== t && void 0 !== a.parentNode[M]) {
                              c !== a && (c = a,
                              h = G(a),
                              p = G(a.parentNode));
                              var T = (u = a.getBoundingClientRect()).right - u.left
                                , D = u.bottom - u.top
                                , C = S.test(h.cssFloat + h.display) || "flex" == p.display && 0 === p["flex-direction"].indexOf("row")
                                , L = a.offsetWidth > t.offsetWidth
                                , F = a.offsetHeight > t.offsetHeight
                                , k = (C ? (s.clientX - u.left) / T : (s.clientY - u.top) / D) > .5
                                , A = a.nextElementSibling
                                , P = !1;
                              if (C) {
                                  var R = t.offsetTop
                                    , z = a.offsetTop;
                                  P = R === z ? a.previousElementSibling === t && !L || k && L : a.previousElementSibling === t || t.previousElementSibling === a ? (s.clientY - u.top) / D > .5 : z > R
                              } else
                                  x || (P = A !== t && !F || k && F);
                              var N = Z(r, f, t, l, a, u, s, P);
                              !1 !== N && (1 !== N && -1 !== N || (P = 1 === N),
                              O = !0,
                              I(J, 30),
                              V(b, w),
                              t.contains(f) || (P && !A ? f.appendChild(t) : a.parentNode.insertBefore(t, P ? A : a)),
                              e = t.parentNode,
                              this._animate(l, t),
                              this._animate(u, a))
                          }
                      }
                  },
                  _animate: function(t, e) {
                      var n = this.options.animation;
                      if (n) {
                          var i = e.getBoundingClientRect();
                          1 === t.nodeType && (t = t.getBoundingClientRect()),
                          G(e, "transition", "none"),
                          G(e, "transform", "translate3d(" + (t.left - i.left) + "px," + (t.top - i.top) + "px,0)"),
                          e.offsetWidth,
                          G(e, "transition", "all " + n + "ms"),
                          G(e, "transform", "translate3d(0,0,0)"),
                          clearTimeout(e.animated),
                          e.animated = I(function() {
                              G(e, "transition", ""),
                              G(e, "transform", ""),
                              e.animated = !1
                          }, n)
                      }
                  },
                  _offUpEvents: function() {
                      var t = this.el.ownerDocument;
                      X(T, "touchmove", this._onTouchMove),
                      X(T, "pointermove", this._onTouchMove),
                      X(t, "mouseup", this._onDrop),
                      X(t, "touchend", this._onDrop),
                      X(t, "pointerup", this._onDrop),
                      X(t, "touchcancel", this._onDrop),
                      X(t, "pointercancel", this._onDrop),
                      X(t, "selectstart", this)
                  },
                  _onDrop: function(s) {
                      var a = this.el
                        , l = this.options;
                      clearInterval(this._loopId),
                      clearInterval(w.pid),
                      clearTimeout(this._dragStartTimer),
                      at(this._cloneId),
                      at(this._dragStartId),
                      X(T, "mouseover", this),
                      X(T, "mousemove", this._onTouchMove),
                      this.nativeDraggable && (X(T, "drop", this),
                      X(a, "dragstart", this._onDragStart)),
                      this._offUpEvents(),
                      s && (_ && (s.preventDefault(),
                      !l.dropBubble && s.stopPropagation()),
                      n && n.parentNode && n.parentNode.removeChild(n),
                      r !== e && "clone" === B.active.lastPullMode || i && i.parentNode && i.parentNode.removeChild(i),
                      t && (this.nativeDraggable && X(t, "dragend", this),
                      Q(t),
                      t.style["will-change"] = "",
                      U(t, this.options.ghostClass, !1),
                      U(t, this.options.chosenClass, !1),
                      K(this, r, "unchoose", t, e, r, d),
                      r !== e ? (f = et(t, l.draggable)) >= 0 && (K(null, e, "add", t, e, r, d, f),
                      K(this, r, "remove", t, e, r, d, f),
                      K(null, e, "sort", t, e, r, d, f),
                      K(this, r, "sort", t, e, r, d, f)) : t.nextSibling !== o && (f = et(t, l.draggable)) >= 0 && (K(this, r, "update", t, e, r, d, f),
                      K(this, r, "sort", t, e, r, d, f)),
                      B.active && (null != f && -1 !== f || (f = d),
                      K(this, r, "end", t, e, r, d, f),
                      this.save()))),
                      this._nulling()
                  },
                  _nulling: function() {
                      r = t = e = n = o = i = s = a = l = y = g = _ = f = c = h = v = m = B.active = null,
                      z.forEach(function(t) {
                          t.checked = !0
                      }),
                      z.length = 0
                  },
                  handleEvent: function(e) {
                      switch (e.type) {
                      case "drop":
                      case "dragend":
                          this._onDrop(e);
                          break;
                      case "dragover":
                      case "dragenter":
                          t && (this._onDragOver(e),
                          function(t) {
                              t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                              t.preventDefault()
                          }(e));
                          break;
                      case "mouseover":
                          this._onDrop(e);
                          break;
                      case "selectstart":
                          e.preventDefault()
                      }
                  },
                  toArray: function() {
                      for (var t, e = [], n = this.el.children, i = 0, r = n.length, o = this.options; i < r; i++)
                          W(t = n[i], o.draggable, this.el) && e.push(t.getAttribute(o.dataIdAttr) || tt(t));
                      return e
                  },
                  sort: function(t) {
                      var e = {}
                        , n = this.el;
                      this.toArray().forEach(function(t, i) {
                          var r = n.children[i];
                          W(r, this.options.draggable, n) && (e[t] = r)
                      }, this),
                      t.forEach(function(t) {
                          e[t] && (n.removeChild(e[t]),
                          n.appendChild(e[t]))
                      })
                  },
                  save: function() {
                      var t = this.options.store;
                      t && t.set(this)
                  },
                  closest: function(t, e) {
                      return W(t, e || this.options.draggable, this.el)
                  },
                  option: function(t, e) {
                      var n = this.options;
                      if (void 0 === e)
                          return n[t];
                      n[t] = e,
                      "group" === t && H(n)
                  },
                  destroy: function() {
                      var t = this.el;
                      t[M] = null,
                      X(t, "mousedown", this._onTapStart),
                      X(t, "touchstart", this._onTapStart),
                      X(t, "pointerdown", this._onTapStart),
                      this.nativeDraggable && (X(t, "dragover", this),
                      X(t, "dragenter", this)),
                      Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                          t.removeAttribute("draggable")
                      }),
                      N.splice(N.indexOf(this._onDragOver), 1),
                      this._onDrop(),
                      this.el = t = null
                  }
              },
              Y(T, "touchmove", function(t) {
                  B.active && t.preventDefault()
              }),
              B.utils = {
                  on: Y,
                  off: X,
                  css: G,
                  find: $,
                  is: function(t, e) {
                      return !!W(t, e, t)
                  },
                  extend: rt,
                  throttle: it,
                  closest: W,
                  toggleClass: U,
                  clone: ot,
                  index: et,
                  nextTick: st,
                  cancelNextTick: at
              },
              B.create = function(t, e) {
                  return new B(t,e)
              }
              ,
              B.version = "1.7.0",
              B
          })
      }
      , {}],
      213: [function(t, e, n) {
          "use strict";
          var i = t("./util/eventEmitter")
            , r = t("knockout-es5");
          function o(t, e, n, i) {
              this.yaw = t,
              this.pitch = e,
              this.title = n,
              this.text = i,
              this.initialTitle = n,
              this.initialText = i,
              this.getObservable = function(t) {
                  return r.getObservable(this, t)
              }
              .bind(this),
              r.track(this)
          }
          i(o),
          o.prototype.setCoordinates = function(t) {
              this.yaw = t.yaw,
              this.pitch = t.pitch,
              this.emit("coordinatesChanged")
          }
          ,
          o.prototype.isUnchanged = function() {
              return this.title === this.initialTitle && this.text === this.initialText
          }
          ,
          o.prototype.toObject = function() {
              return {
                  yaw: this.yaw,
                  pitch: this.pitch,
                  title: this.title,
                  text: this.text
              }
          }
          ,
          e.exports = o
      }
      , {
          "./util/eventEmitter": 250,
          "knockout-es5": 17
      }],
      214: [function(t, e, n) {
          "use strict";
          var i = t("./util/eventEmitter")
            , r = t("knockout-es5");
          function o(t, e, n) {
              this.yaw = t,
              this.pitch = e,
              this.target = n,
              this.rotation = 0,
              r.track(this)
          }
          i(o),
          o.prototype.setCoordinates = function(t) {
              this.yaw = t.yaw,
              this.pitch = t.pitch,
              this.emit("coordinatesChanged")
          }
          ,
          o.prototype.offsetRotation = function(t) {
              this.rotation += t,
              this.emit("rotationChanged")
          }
          ,
          o.prototype.setTarget = function(t) {
              this.target = t,
              this.emit("targetChanged")
          }
          ,
          o.prototype.toObject = function() {
              return {
                  yaw: this.yaw,
                  pitch: this.pitch,
                  rotation: this.rotation,
                  target: this.target.uniqueId()
              }
          }
          ,
          o.prototype.hasValidTarget = function() {
              return this.target && !this.target.removed()
          }
          ,
          e.exports = o
      }
      , {
          "./util/eventEmitter": 250,
          "knockout-es5": 17
      }],
      215: [function(t, e, n) {
          "use strict";
          var i = t("knockout-es5")
            , r = 5e3;
          function o() {
              this.list = [],
              i.track(this)
          }
          function s(t, e) {
              this.html = t,
              this.level = e,
              this.time = Date.now(),
              this.notifying = !0,
              this.read = !1;
              var n = this;
              setTimeout(function() {
                  n.notifying = !1
              }, r),
              i.track(this)
          }
          o.prototype.push = function(t, e) {
              var n = new s(t,e);
              this.list.unshift(n)
          }
          ,
          o.prototype.all = function() {
              return this.list
          }
          ,
          o.prototype.notifying = function() {
              return this.list.filter(function(t) {
                  return t.notifying
              })
          }
          ,
          o.prototype.setAllNotNotifying = function() {
              this.list.forEach(function(t) {
                  t.notifying = !1
              })
          }
          ,
          o.prototype.setAllRead = function() {
              this.list.forEach(function(t) {
                  t.read = !0
              })
          }
          ,
          o.prototype.numNotRead = function() {
              return this.list.reduce(function(t, e) {
                  return e.read ? t : t + 1
              }, 0)
          }
          ,
          s.prototype.isWarning = function() {
              return "warning" === this.level
          }
          ,
          e.exports = o
      }
      , {
          "knockout-es5": 17
      }],
      216: [function(t, e, n) {
          "use strict";
          var i = t("lodash/collection/find")
            , r = t("lodash/object/values")
            , o = t("./TileStore")
            , s = t("./processPanorama")
            , a = t("./processingState/ProcessingState")
            , l = t("./util/eventEmitter")
            , u = t("./oneShotEdit")
            , c = t("knockout-es5")
            , h = (t("./util/endianess"),
          t("./util/errorToObject"))
            , p = t("./util/slug");
          function d() {
              this.list = [],
              this.selected = null,
              this._processing = null,
              c.track(this)
          }
          function f(t, e, n, i, r, s) {
              this.panoramasList = t,
              this.type = e,
              this.name = n,
              this.fileData = i,
              this.width = r,
              this.height = s,
              this.processingState = new a("panorama",{
                  type: e,
                  name: n,
                  width: r,
                  height: s
              }),
              this.tileStore = new o,
              this.cubeMapPreview = null,
              this.faceSize = null,
              this.levels = null,
              this.cubeMapPreviewSize = null,
              this.settings = {
                  initialViewParameters: {
                      pitch: 0,
                      yaw: 0,
                      fov: Math.PI / 2
                  },
                  linkHotspots: [],
                  infoHotspots: []
              },
              c.track(this),
              c.track(this.settings.linkHotspots)
          }
          d.prototype.push = function(t, e, n, i, r) {
              var o = new f(this,t,e,n,i,r);
              this.list.push(o);
              var s = this;
              o.processingState.addEventListener("changed", function() {
                  s.emit("changed")
              }),
              this.emit("changed"),
              this._handleListChange(),
              this.selected || o.select()
          }
          ,
          d.prototype._handleListChange = function() {
              if (!this._processing) {
                  var t = i(this.list, function(t) {
                      return t.processingState.isQueued()
                  });
                  if (t) {
                      t.processingState.started();
                      var e = this
                        , n = s(t, function(n) {
                          n && "cancelled" === n.message ? t.processingState.cancelled() : n ? (t.processingState.failed(h(n)),
                          e.emit("processingFailed", t)) : t.processingState.successful(),
                          e._processing = null,
                          e._handleListChange()
                      });
                      this._processing = {
                          panorama: t,
                          cancel: n
                      }
                  }
              }
          }
          ,
          d.prototype._remove = function(t) {
              if ((t.processingState.isSuccessful() || t.processingState.isStarted()) && !window.confirm("Are you sure you want to remove this panorama?"))
                  return;
              var e = this.list.indexOf(t);
              e < 0 || (this.list.splice(e, 1),
              this._processing && this._processing.panorama === t && this._processing.cancel(),
              this.emit("changed"),
              this._handleListChange(),
              this.selected === t && (this.list.length > 0 ? this.list[0].select() : this.selected = null))
          }
          ,
          d.prototype._setSelected = function(t) {
              this.selected = t,
              this.emit("selectedPanoramaChanged", t)
          }
          ,
          l(d),
          l(f),
          f.prototype.addTile = function(t, e, n, i, r) {
              this.tileStore.put(t, e, n, i, r)
          }
          ,
          f.prototype.setCubeMapPreview = function(t) {
              if (this.cubeMapPreview)
                  throw new Error("CubeMapPreview already set");
              if (!this.cubeMapPreviewSize)
                  throw new Error("Cannot set CubeMapPreview on Panorama without cubeMapPreviewSize");
              this.cubeMapPreview = t
          }
          ,
          f.prototype.setLevels = function(t, e) {
              if (e = e || {},
              this.levels)
                  throw new Error("Levels already set");
              var n = t.slice();
              e.cubeMapPreviewSize && n.unshift({
                  tileSize: e.cubeMapPreviewSize,
                  size: e.cubeMapPreviewSize,
                  fallbackOnly: !0
              }),
              this.levels = n,
              this.cubeMapPreviewSize = e.cubeMapPreviewSize;
              var i = n[n.length - 1].size;
              this.faceSize = e.faceSize ? Math.min(e.faceSize, i) : i,
              this.emit("levelsSet", null)
          }
          ,
          f.prototype.edit = function() {
              var t = this.uniqueId()
                , e = document.querySelector('[data-panorama-id="' + t + '"] .name');
              u(e)
          }
          ,
          f.prototype.remove = function(t, e) {
              this.panoramasList._remove(this),
              e.stopPropagation()
          }
          ,
          f.prototype.removed = function() {
              return this.panoramasList.list.indexOf(this) < 0
          }
          ,
          f.prototype.select = function() {
              this.panoramasList._setSelected(this)
          }
          ,
          f.prototype.isSelected = function() {
              return this.panoramasList.selected === this
          }
          ,
          f.prototype.uniqueId = function() {
              var t = this.panoramasList.list.indexOf(this);
              return t >= 0 ? t + "-" + p(this.name) : p(this.name)
          }
          ,
          f.prototype.files = function() {
              return "equirectangular" === this.type ? [this.fileData] : "cube" === this.type ? r(this.fileData) : void 0
          }
          ,
          f.prototype.addLinkHotspot = function(t) {
              this.settings.linkHotspots.push(t),
              this.emit("linkHotspotAdded", t)
          }
          ,
          f.prototype.removeLinkHotspot = function(t) {
              var e = this.settings.linkHotspots.indexOf(t);
              this.settings.linkHotspots.splice(e, 1),
              this.emit("linkHotspotRemoved", t)
          }
          ,
          f.prototype.addInfoHotspot = function(t) {
              this.settings.infoHotspots.push(t),
              this.emit("infoHotspotAdded", t)
          }
          ,
          f.prototype.removeInfoHotspot = function(t) {
              var e = this.settings.infoHotspots.indexOf(t);
              this.settings.infoHotspots.splice(e, 1),
              this.emit("infoHotspotRemoved", t)
          }
          ,
          e.exports = d
      }
      , {
          "./TileStore": 217,
          "./oneShotEdit": 228,
          "./processPanorama": 236,
          "./processingState/ProcessingState": 239,
          "./util/endianess": 248,
          "./util/errorToObject": 249,
          "./util/eventEmitter": 250,
          "./util/slug": 255,
          "knockout-es5": 17,
          "lodash/collection/find": 25,
          "lodash/object/values": 95
      }],
      217: [function(t, e, n) {
          "use strict";
          var i = t("async")
            , r = t("./util/delay");
          function o() {
              this._store = {}
          }
          t("./util/eventEmitter")(o),
          o.prototype.put = function(t, e, n, i, r) {
              if (this._store[t] || (this._store[t] = {}),
              this._store[t][e] || (this._store[t][e] = {}),
              this._store[t][e][n] || (this._store[t][e][n] = {}),
              this._store[t][e][n][i])
                  throw new Error("Tile already in store");
              this._store[t][e][n][i] = r,
              this.emit("tileAdded", t, e, n, i, r)
          }
          ,
          o.prototype.get = function(t, e, n, i) {
              return this._store[t] && this._store[t][e] && this._store[t][e][n] ? this._store[t][e][n][i] : null
          }
          ,
          o.prototype.forEach = function(t, e) {
              var n = this
                , o = 0;
              i.eachSeries(Object.keys(n._store), function(e, s) {
                  i.eachSeries(Object.keys(n._store[e]), function(s, a) {
                      i.eachSeries(Object.keys(n._store[e][s]), function(a, l) {
                          i.eachSeries(Object.keys(n._store[e][s][a]), function(i, l) {
                              var u = n._store[e][s][a][i];
                              t(e, s, a, i, u, function(t) {
                                  if (t)
                                      return l(t);
                                  o++,
                                  r(l)
                              })
                          }, l)
                      }, a)
                  }, s)
              }, function(t) {
                  if (t)
                      return e(t);
                  e(null, o)
              })
          }
          ,
          e.exports = o
      }
      , {
          "./util/delay": 247,
          "./util/eventEmitter": 250,
          async: 1
      }],
      218: [function(t, e, n) {
          "use strict";
          if (t("./supported")) {
              var i = t("knockout-es5");
              t("./knockout/alignOnBlur"),
              t("./knockout/stopKeyPropagation"),
              t("./knockout/contenteditable");
              var r = t("./matchFilesToPanoramas")
                , o = t("./oneShotEdit")
                , s = t("./setFileDrop")
                , a = t("./getArchive")
                , l = t("./generateData")
                , u = t("./getTemplate")
                , c = t("./Panoramas")
                , h = t("./panoramaView/Previewer")
                , p = t("sortablejs")
                , d = t("./workers")
                , f = t("../tmp/version")
                , m = t("./setFavicon")
                , v = t("./ignoredFilesMessageHtml")
                , y = t("./imageSizeLimits")
                , g = t("./LinkHotspot")
                , _ = t("./InfoHotspot")
                , b = {
                  mouseViewMode: i.observable("drag"),
                  autorotateEnabled: i.observable(!1),
                  fullscreenButton: i.observable(!1),
                  viewControlButtons: i.observable(!1)
              }
                , w = new c
                , x = i.observable();
              s(window, q);
              var S = document.getElementById("selectFilesInput");
              [".more-files", "#startup .select"].forEach(function(t) {
                  document.querySelector(t).addEventListener("click", function() {
                      return S.click(),
                      !1
                  })
              }),
              document.getElementById("selectFilesInput").addEventListener("change", function() {
                  console.log(this.value, this.files)
                  this.files && this.files.length > 0 && q(this.files),
                  this.value = null
              });
              var M = new h(document.getElementById("pano"),w);
              w.addEventListener("selectedPanoramaChanged", function(t) {
                  M.preview(t),
                  U()
              }),
              u("template", function(t, e) {
                  if (t)
                      throw t;
                  x(e)
              });
              var E = i.computed(function() {
                  return w.list.every(function(t) {
                      return t.processingState.isEnded()
                  }) && w.list.length > 0
              })
                , T = i.computed(function() {
                  return E() && w.list.filter(function(t) {
                      return t.processingState.isSuccessful()
                  }).length > 0
              })
                , D = {
                  settings: !0,
                  panoramaList: !0
              };
              i.track(D);
              var I = null
                , C = document.querySelector(".initial-view-hint");
              M._viewer.controls().addEventListener("active", U),
              new p(document.querySelector(".panorama-list"),{
                  ghostClass: "ghost",
                  handle: ".handle",
                  onSort: function(t) {
                      var e = w.list
                        , n = e.splice(t.oldIndex, 1)[0];
                      e.splice(t.newIndex, 0, n);
                      var i = e;
                      w.list = [],
                      t.item.parentElement && t.item.parentElement.removeChild(t.item),
                      w.list = i
                  }
              });
              var L = i.observable(null)
                , F = i.observable(!0)
                , k = i.computed(function() {
                  return w.list.length <= 0 && !F()
              })
                , A = i.computed(function() {
                  return !!L()
              })
                , O = i.computed(function() {
                  return k() || A() || F()
              })
                , P = t("./Messages")
                , R = t("./processingFailedMessageHtml")
                , z = t("./processingCompleteMessageHtml")
                , N = new P
                , j = i.observable(!1)
                , H = i.computed(function() {
                  return j() ? N.all() : N.notifying()
              });
              j.subscribe(function(t) {
                  t ? N.setAllRead() : N.setAllNotNotifying()
              }),
              w.addEventListener("processingFailed", function(t) {
                  N.push(R(t), "error")
              }),
              T.subscribe(function(t) {
                  t && setTimeout(function() {
                      N.push(z(), "success")
                  }, 0)
              });
              var B = i.observable(!1)
                , V = {
                  panoramas: w,
                  getPanoramasArchive: G,
                  readyToDownload: X,
                  projectName: "Project Title",
                  editProjectName: function() {
                      var t = document.querySelector(".project-name .input");
                      o(t)
                  },
                  settings: b,
                  accordionToggle: function(t) {
                      D[t] = !D[t]
                  },
                  accordionsOpen: D,
                  setInitialView: function() {
                      if (!Y()) {
                          var t = M.currentViewParams();
                          t && (w.selected.settings.initialViewParameters = t,
                          C.style.opacity = 1,
                          null != I && (clearTimeout(I),
                          I = null),
                          I = setTimeout(U, 3e3),
                          M.interruptAutorotate())
                      }
                  },
                  addLinkHotspot: function() {
                      if (!Y()) {
                          var t = M.currentViewParams()
                            , e = new g(t.yaw,t.pitch,null);
                          w.selected.addLinkHotspot(e),
                          U()
                      }
                  },
                  addInfoHotspot: function() {
                      if (!Y()) {
                          var t = M.currentViewParams()
                            , e = new _(t.yaw,t.pitch,"Title","Text");
                          w.selected.addInfoHotspot(e),
                          U()
                      }
                  },
                  zipProcessingState: L,
                  closeZipState: function() {
                      L(null)
                  },
                  cancelZip: function() {
                      console.log("TODO: cancel zip archive")
                  },
                  startupVisible: k,
                  downloadVisible: A,
                  shadeVisible: O,
                  previewVisible: function() {
                      return w.selected
                  },
                  introVisible: F,
                  hideIntro: function() {
                      F(!1)
                  },
                  messages: N,
                  messagesExpanded: j,
                  messagesVisible: H,
                  toggleMessagesExpanded: function() {
                      j(!j())
                  },
                  showMessages: function() {
                      return j(!0),
                      !0
                  },
                  closeMessages: function() {
                      return j(!1),
                      !1
                  },
                  previewedFailed: Y,
                  helpVisible: B,
                  toggleHelp: function() {
                      B(!B())
                  },
                  closeHelp: function() {
                      B(!1)
                  },
                  previewFailedMessage: function() {
                      return w.selected && w.selected.processingState.data.message
                  },
                  equirectangularSizeLimit: function() {
                      return y.equirectangularWidth + "x" + y.equirectangularWidth / 2 + "px"
                  },
                  cubeSizeLimit: function() {
                      return y.cubeFaceWidth + "x" + y.cubeFaceWidth + "px"
                  },
                  hotspots: M.hotspots
              };
              window.addEventListener("beforeunload", function(t) {
                  if (w.list.length > 0) {
                      return (t || window.event).returnValue = "Your work is lost when you leave the application",
                      "Your work is lost when you leave the application"
                  }
              });
              var W = i.computed(function() {
                  if (w.list.length <= 0)
                      return null;
                  var t = w.list.map(function(t) {
                      return t.processingState.isFailed() ? 1 : t.processingState.userProgress()
                  });
                  return t.reduce(function(e, n) {
                      return e + n / t.length
                  }, 0)
              });
              W.subscribe($),
              W.subscribe(K),
              $(),
              K(),
              window.setFavicon = m,
              b.mouseViewMode.subscribe(function(t) {
                  "drag" === t ? M.setDragMode() : "qtvr" === t && M.setQtvrMode()
              }),
              b.autorotateEnabled.subscribe(function(t) {
                  M.setAutorotate(t)
              }),
              b.mouseViewMode.notifySubscribers(b.mouseViewMode()),
              b.autorotateEnabled.notifySubscribers(b.autorotateEnabled()),
              i.track(V),
              i.applyBindings(V),
              e.exports = {
                  version: f,
                  viewModel: V,
                  getPanoramasArchiveFromNotification: function(t) {
                      G()
                  }
              }
          }
          function q(t) {
              console.log(t)
              r(t, function(t, e) {
                console.log(t, e)
                  function n(t) {
                      w.push(t.type, t.name, t.fileData, t.width, t.height)
                  }
                  e.equirectangulars.forEach(n),
                  e.cubes.forEach(n);
                  var i = v(e);
                  i && N.push(i, "warning")
              })
          }
          function Y() {
              return w.selected && w.selected.processingState.isFailed()
          }
          function X() {
              return T() && !!x
          }
          function U() {
              C.style.opacity = 0
          }
          function G() {
              if (X()) {
                  var t = w.list.filter(function(t) {
                      return t.processingState.isSuccessful()
                  })
                    , e = l(t, V.projectName, i.toJS(b))
                    , n = a(e, t, x(), {
                      workerSource: d.zip
                  });
                  L(n)
              }
          }
          function $() {
              var t = "Marzipano Tool";
              null != W() && W() < 1 && (t = "(" + (100 * W()).toFixed(0) + "%) " + t);
              document.title = t
          }
          function K() {
              m(W())
          }
      }
      , {
          "../tmp/version": 258,
          "./InfoHotspot": 213,
          "./LinkHotspot": 214,
          "./Messages": 215,
          "./Panoramas": 216,
          "./generateData": 219,
          "./getArchive": 220,
          "./getTemplate": 221,
          "./ignoredFilesMessageHtml": 222,
          "./imageSizeLimits": 223,
          "./knockout/alignOnBlur": 224,
          "./knockout/contenteditable": 225,
          "./knockout/stopKeyPropagation": 226,
          "./matchFilesToPanoramas": 227,
          "./oneShotEdit": 228,
          "./panoramaView/Previewer": 230,
          "./processingCompleteMessageHtml": 237,
          "./processingFailedMessageHtml": 238,
          "./setFavicon": 243,
          "./setFileDrop": 244,
          "./supported": 245,
          "./workers": 256,
          "knockout-es5": 17,
          sortablejs: 212
      }],
      219: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e, n) {
            console.log(t[0].levels)
            var arr = [];
              return {
                  
                  scenes: t.map(function(t) {
                      var e = t.settings.linkHotspots.filter(function(t) {
                          return t.hasValidTarget()
                      }).map(function(t) {
                          return t.toObject()
                      })
                        , n = t.settings.infoHotspots.map(function(t) {
                          return t.toObject()
                      });
                      e.length === 2 ? arr.push(e) : null;
                      return {
                          id: t.uniqueId(),
                          // name: t.name,
                          // levels: t.levels,
                          // faceSize: t.faceSize,
                          // initialViewParameters: t.settings.initialViewParameters,
                          linkHotspots: e,
                          // infoHotspots: n
                      }
                  }),
                  levels: t[0].levels,
                  faceSize: t[0].faceSize,
                  initialViewParameters: t[0].settings.initialViewParameters,
                  defaultLinkHotspots: arr[0],
                  name: e,
                  settings: n
              }
          }
      }
      , {}],
      220: [function(t, e, n) {
          "use strict";
          var i = t("async")
            , r = t("./zip/Zip")
            , o = t("./util/delay")
            , s = t("lodash/string/template")
            , a = t("./util/fileExt")
            , l = t("./util/fileNoExt")
            , u = t("filesaver.js")
            , c = t("./processingState/ProcessingState")
            , h = (t("./util/endianess"),
          t("./util/slug"))
            , p = "application/zip";
          e.exports = function(t, e, n, d) {
              d = d || {};
              var f = new c("zip",{
                  panoramaNum: e.length
              }).started()
                , m = new r({
                  workerSource: d.workerSource
              })
                , v = f.addChild("add_data").started();
              !function(t, e) {
                  var n = JSON.stringify(t, null, 2)
                    , i = "var APP_DATA = " + (n = (n = n.replace(/\u2028/g, "\\u2028")).replace(/\u2029/g, "\\u2029")) + ";\n"
                    , j = (n = (n = n.replace(/\u2028/g, "\\u2028")).replace(/\u2029/g, "\\u2029"));
                  e.add(["app-files"], "data.js", i)
                  e.add(["app-files"], "imgData.json", j)
              }(t, m),
              v.successful({
                  tourData: t
              });
              var y = f.addChild("add_template_files").started();
              return function(t, e, n, r) {
                  if (!t)
                      throw new Error("Template files not loaded");
                  i.eachSeries(t, function(t, i) {
                      var r = t.name
                        , u = t.data;
                      if ("tpl" === a(t.name)) {
                          try {
                              u = s(t.data)(e)
                          } catch (t) {
                              return void i(t)
                          }
                          r = l(t.name)
                      }
                      n.add([], r, u),
                      o(i)
                  }, r)
              }(n, t, m, function(n) {
                  if (n)
                      throw n;
                  y.successful();
                  var r = f.addChild("add_tiles").started();
                  !function(t, e, n) {
                      var r = 0;
                      i.eachSeries(t, function(t, n) {
                          var i = ["app-files", "tiles", t.uniqueId()];
                          t.cubeMapPreview && e.add(i, "preview.jpg", t.cubeMapPreview, {
                              binary: !0
                          }),
                          t.tileStore.forEach(function(t, n, o, s, a, l) {
                              var u = [t, n, o].map(function(t) {
                                  return t.toString(10)
                              })
                                , c = i.concat(u);
                              e.add(c, s.toString(10) + ".jpg", a, {
                                  binary: !0
                              }),
                              r++,
                              l()
                          }, n)
                      }, function(t) {
                          if (t)
                              return n(t);
                          n(null, r)
                      })
                  }(e, m, function(e, n) {
                      if (e)
                          throw e;
                      r.successful({
                          tileNum: n
                      });
                      var i = f.addChild("generate_zip").started();
                      m.generate({
                          type: "uint8array"
                      }, function(e, n) {
                          if (e)
                              throw e;
                          i.successful(),
                          m.destroy();
                          var r = f.addChild("create_blob").started()
                            , o = new Blob([n],{
                              type: p
                          });
                          r.successful();
                          var s = f.addChild("save_blob").started()
                            , a = (h(t.name) || "marzipano-tour") + ".zip";
                          u(o, a),
                          s.successful(),
                          f.successful({
                              byteLength: n.byteLength
                          })
                      })
                  })
              }),
              f
          }
      }
      , {
          "./processingState/ProcessingState": 239,
          "./util/delay": 247,
          "./util/endianess": 248,
          "./util/fileExt": 251,
          "./util/fileNoExt": 252,
          "./util/slug": 255,
          "./zip/Zip": 257,
          async: 1,
          "filesaver.js": 3,
          "lodash/string/template": 98
      }],
      221: [function(t, e, n) {
          "use strict";
          var i = t("async")
            , r = t("lodash/array/zip")
            , o = t("./util/loadFileXhr")
            , s = t("./util/fileExt")
            , a = t("../tmp/version");
          e.exports = function(t, e) {
              o(t + "/files.json?" + a, "json", function(n, l) {
                  if (n)
                      return e(n);
                  var u = l.map(function(e) {
                      return t + "/" + e
                  });
                  i.mapLimit(u, 5, function(t, e) {
                      var n = "tpl" === s(t) ? "text" : "arraybuffer";
                      o(t + "?" + a, n, e)
                  }, function(t, n) {
                      if (t)
                          return e(t);
                      var i = r(l, n).map(function(t) {
                          return {
                              name: t[0],
                              data: t[1]
                          }
                      });
                      e(null, i)
                  })
              })
          }
      }
      , {
          "../tmp/version": 258,
          "./util/fileExt": 251,
          "./util/loadFileXhr": 253,
          async: 1,
          "lodash/array/zip": 22
      }],
      222: [function(t, e, n) {
          "use strict";
          var i = t("lodash/collection/map")
            , r = t("lodash/array/flatten")
            , o = t("lodash/collection/pluck")
            , s = t("lodash/object/values")
            , a = t("./imageSizeLimits");
          e.exports = function(t) {
              var e = t.badCubes
                , n = t.badFiles
                , l = t.badSizedImages
                , u = t.imagesWithoutSize
                , c = t.equirectangularsOverLimit
                , h = t.cubesOverLimit
                , p = i(e, function(t) {
                  return {
                      name: t.name,
                      width: t.width,
                      height: t.height,
                      files: s(t.fileData)
                  }
              })
                , d = r(o(p, "files"))
                , f = d.length + n.length + l.length + u.length + c.length + 6 * h.length
                , m = "";
              if (m += "<p class='title'>" + f + " files ignored</p>",
              f <= 0)
                  return !1;
              var v = [e, n, l, u, c, h].filter(function(t) {
                  return t.length > 0
              }).length > 1;
              return n.length > 0 && (m += "<details>",
              m += v ? "<summary>" + n.length + " not recognized as images</summary>" : "<summary>Files not recognized as images</summary>",
              m += "  <ul>",
              n.forEach(function(t) {
                  m += "  <li>" + t.name + "</li>"
              }),
              m += "  </ul>",
              m += "</details>"),
              u.length > 0 && (m += "<details>",
              m += v ? "<summary>" + u.length + " images corrupted</summary>" : "<summary>Corrupted images</summary>",
              m += "  <ul>",
              u.forEach(function(t) {
                  m += "  <li>" + t.name + "</li>"
              }),
              m += "  </ul>",
              m += "</details>"),
              l.length > 0 && (m += "<details>",
              m += v ? "<summary>" + l.length + " not 1:1 cube faces or 2:1 spheres</summary>" : "<summary>Images not 1:1 cube faces or 2:1 spheres</summary>",
              m += "  <ul>",
              l.forEach(function(t) {
                  m += "  <li>" + t.file.name + " (" + t.width + "x" + t.height + "px)</li>"
              }),
              m += "  </ul>",
              m += "</details>"),
              d.length > 0 && (m += "<details>",
              m += v ? "<summary>" + d.length + " not matched to cubes</summary>" : "<summary>Files not matched to cubes</summary>",
              m += "  <ul>",
              p.forEach(function(t) {
                  m += "  <li>",
                  m += "    <b>" + t.name + " (" + t.width + "x" + t.height + ")</b>",
                  m += "    <ul>",
                  t.files.forEach(function(t) {
                      m += "    <li>" + t.file.name + "</li>"
                  }),
                  m += "    </ul>",
                  m += "  </li>"
              }),
              m += "  </ul>",
              m += "</details>"),
              c.length > 0 && (m += "<details>",
              m += v ? "<summary>" + c.length + " spheres larger than the size limit</summary>" : "<summary>Spheres larger than the size limit</summary>",
              m += "<p>Maximum size is <b>" + a.equirectangularWidth + "x" + a.equirectangularWidth / 2 + "px</b></p>",
              m += "  <ul>",
              c.forEach(function(t) {
                  m += "  <li>" + t.name + " (" + t.width + "x" + t.height + "px)</li>"
              }),
              m += "  </ul>",
              m += "</details>"),
              h.length > 0 && (m += "<details>",
              m += v ? "<summary>" + h.length + " cubes larger than the size limit</summary>" : "<summary>Cubes larger than the size limit</summary>",
              m += "<p>Maximum size is <b>" + a.cubeFaceWidth + "x" + a.cubeFaceWidth + "px</b></p>",
              m += "  <ul>",
              h.forEach(function(t) {
                  m += "  <li>" + t.name + " (" + t.width + "x" + t.height + "px)</li>"
              }),
              m += "  </ul>",
              m += "</details>"),
              m
          }
      }
      , {
          "./imageSizeLimits": 223,
          "lodash/array/flatten": 20,
          "lodash/collection/map": 28,
          "lodash/collection/pluck": 29,
          "lodash/object/values": 95
      }],
      223: [function(t, e, n) {
          "use strict";
          e.exports = {
              equirectangularWidth: 23e3,
              cubeFaceWidth: 16e3
          }
      }
      , {}],
      224: [function(t, e, n) {
          "use strict";
          var i = t("knockout-es5");
          i.bindingHandlers.alignOnBlur = {
              update: function(t) {
                  i.applyBindingsToNode(t, {
                      event: {
                          blur: function() {
                              t.scrollLeft = 0,
                              t.scrollTop = 0
                          }
                      }
                  })
              }
          }
      }
      , {
          "knockout-es5": 17
      }],
      225: [function(t, e, n) {
          "use strict";
          var i = t("knockout-es5");
          i.bindingHandlers.contenteditable = {
              init: function(t, e, n) {
                  var r = e();
                  t.innerHTML = i.utils.unwrapObservable(r),
                  r.subscribe(function(e) {
                      t.innerHTML !== e && (t.innerHTML = e)
                  }),
                  t.addEventListener("keyup", function() {
                      e()(t.innerHTML)
                  })
              },
              update: function(t, e) {
                  var n = i.utils.unwrapObservable(e());
                  null == n && (n = "")
              }
          }
      }
      , {
          "knockout-es5": 17
      }],
      226: [function(t, e, n) {
          "use strict";
          var i = t("knockout-es5");
          i.bindingHandlers.stopKeyPropagation = {
              update: function(t) {
                  i.applyBindingsToNode(t, {
                      event: {
                          keydown: function(t, e) {
                              return e.stopPropagation(),
                              !0
                          }
                      }
                  })
              }
          }
      }
      , {
          "knockout-es5": 17
      }],
      227: [function(t, e, n) {
          "use strict";
          var i = t("async")
            , r = t("../../vendor/imgsize")
            , o = t("lodash/collection/groupBy")
            , s = t("lodash/collection/contains")
            , a = t("lodash/array/difference")
            , l = t("lodash/array/zipObject")
            , u = t("lodash/array/zip")
            , c = t("./util/fileExt")
            , h = t("./util/fileNoExt")
            , p = t("./imageSizeLimits")
            , d = ["tif", "tiff", "jpg", "jpeg"]
            , f = /^(.*)_([udfblr])\.[^\.]+$/i;
          function m(t) {
              return t.match(f)[1]
          }
          function v(t, e, n) {
              this.file = t,
              this.width = e,
              this.height = n
          }
          function y(t, e) {
              r.async(t, function(t, n) {
                  e(null, t ? null : n)
              })
          }
          e.exports = function(t, e) {
              var n = o(t, function(t) {
                  var e = c(t.name);
                  return s(d, e)
              })
                , r = n[!0] || [];
              i.mapLimit(r, 3, y, function(t, i) {
                  if (t)
                      return e(t);
                  var s = u(r, i)
                    , c = o(s, function(t) {
                      return !!t[1]
                  })
                    , d = c[!1] || []
                    , y = c[!0] || []
                    , g = d.map(function(t) {
                      return t[0]
                  })
                    , _ = y.map(function(t) {
                      return new v(t[0],t[1].width,t[1].height)
                  })
                    , b = o(_, function(t) {
                      return f.test(t.file.name) && t.width === t.height
                  })
                    , w = b[!0] || []
                    , x = b[!1] || []
                    , S = o(x, function(t) {
                      return t.width === 2 * t.height
                  })
                    , M = S[!1] || []
                    , E = (S[!0] || []).map(function(t) {
                      return {
                          type: "equirectangular",
                          name: h(t.file.name),
                          fileData: t,
                          width: t.width,
                          height: t.height
                      }
                  })
                    , T = o(w, function(t) {
                      return m(t.file.name) + "~" + t.width + "~" + t.height
                  })
                    , D = Object.keys(T).map(function(t) {
                      var e = T[t]
                        , n = e.map(function(t) {
                          return t.file.name.match(f)[2].toLowerCase()
                      })
                        , i = l(n, e);
                      return {
                          type: "cube",
                          name: m(e[0].file.name),
                          fileData: i,
                          width: e[0].width,
                          height: e[0].height
                      }
                  })
                    , I = o(D, function(t) {
                      if (6 !== Object.keys(t.fileData).length)
                          return !1;
                      var e = Object.keys(t.fileData);
                      return 0 === a(e, ["f", "b", "l", "r", "u", "d"]).length
                  })
                    , C = o(E, function(t) {
                      return t.width <= p.equirectangularWidth
                  })
                    , L = C[!1] || []
                    , F = C[!0] || []
                    , k = o(I[!0] || [], function(t) {
                      return t.width <= p.cubeFaceWidth
                  })
                    , A = k[!1] || []
                    , O = k[!0] || [];
                  e(null, {
                      cubes: O,
                      equirectangulars: F,
                      badCubes: I[!1] || [],
                      badFiles: n[!1] || [],
                      imagesWithoutSize: g,
                      badSizedImages: M,
                      equirectangularsOverLimit: L,
                      cubesOverLimit: A
                  })
              })
          }
      }
      , {
          "../../vendor/imgsize": 259,
          "./imageSizeLimits": 223,
          "./util/fileExt": 251,
          "./util/fileNoExt": 252,
          async: 1,
          "lodash/array/difference": 18,
          "lodash/array/zip": 22,
          "lodash/array/zipObject": 23,
          "lodash/collection/contains": 24,
          "lodash/collection/groupBy": 26
      }],
      228: [function(t, e, n) {
          "use strict";
          function i() {
              this.setAttribute("disabled", "disabled"),
              this.removeEventListener("blur", i)
          }
          e.exports = function(t) {
              (function() {
                  this.removeAttribute("disabled"),
                  this.select()
              }
              ).apply(t),
              t.addEventListener("blur", i)
          }
      }
      , {}],
      229: [function(t, e, n) {
          "use strict";
          function i() {
              this.removeAttribute("contenteditable"),
              window.getSelection().removeAllRanges(),
              this.removeEventListener("blur", i)
          }
          e.exports = function(t, e) {
              (function() {
                  this.setAttribute("contenteditable", !0);
                  var t = document.createRange();
                  t.selectNodeContents(this);
                  var e = window.getSelection();
                  e.removeAllRanges(),
                  e.addRange(t),
                  this.focus()
              }
              ).apply(t),
              t.addEventListener("blur", function() {
                  i.apply(this),
                  e()
              })
          }
      }
      , {}],
      230: [function(t, e, n) {
          "use strict";
          var i = t("marzipano")
            , r = i.Viewer
            , o = i.CubeGeometry
            , s = i.RectilinearView
            , a = t("./TileStoreSource")
            , l = t("./PreviewerHotspots")
            , u = t("../util/eventEmitter")
            , c = [{
              tileSize: 512,
              size: 512
          }, {
              tileSize: 512,
              size: 1024
          }, {
              tileSize: 512,
              size: 2048
          }, {
              tileSize: 512,
              size: 4096
          }, {
              tileSize: 512,
              size: 8192
          }];
          function h(t, e) {
              this._viewer = new r(t),
              this._panorama = null,
              this._panoramaChangedHandler = this.updatePreview.bind(this),
              this.hotspots = new l(this)
          }
          u(h),
          h.prototype.preview = function(t) {
              if (setTimeout(this._viewer.updateSize.bind(this._viewer), 0),
              t && t === this._panorama) {
                  var e = t.settings.initialViewParameters;
                  e && this._viewer.lookTo(e, {
                      transitionDuration: 0
                  })
              } else {
                  var n = this._panorama
                    , i = t;
                  n && n.removeEventListener("levelsSet", this._panoramaChangedHandler),
                  this._panorama = i,
                  this._panoramaChangedHandler(),
                  i && i.addEventListener("levelsSet", this._panoramaChangedHandler)
              }
          }
          ,
          h.prototype.updatePreview = function() {
              var t = this._panorama;
              if (this._viewer.destroyAllScenes(),
              t) {
                  var e = t.levels || c
                    , n = new o(e)
                    , i = new a(t.tileStore)
                    , r = t.faceSize || e[e.length - 1].size
                    , l = s.limit.traditional(r, 120 * Math.PI / 180)
                    , u = new s(t.settings.initialViewParameters,l)
                    , h = this._viewer.createScene({
                      source: i,
                      geometry: n,
                      view: u
                  });
                  this.hotspots.useScene(h, t),
                  h.switchTo({
                      transitionDuration: 0
                  })
              }
          }
          ,
          h.prototype.currentViewParams = function() {
              var t = this._viewer.view();
              return t ? {
                  yaw: t.yaw(),
                  pitch: t.pitch(),
                  fov: t.fov()
              } : null
          }
          ,
          h.prototype.setDragMode = function() {
              this._viewer.controls().disableMethod("mouseViewQtvr"),
              this._viewer.controls().enableMethod("mouseViewDrag")
          }
          ,
          h.prototype.setQtvrMode = function() {
              this._viewer.controls().disableMethod("mouseViewDrag"),
              this._viewer.controls().enableMethod("mouseViewQtvr")
          }
          ,
          h.prototype.setAutorotate = function(t) {
              if (t) {
                  var e = i.autorotate({
                      yawSpeed: .1,
                      targetPitch: 0,
                      targetFov: Math.PI / 2
                  });
                  this._viewer.setIdleMovement(3e3, e),
                  this._viewer.startMovement(e)
              } else
                  this._viewer.setIdleMovement(1 / 0),
                  this._viewer.stopMovement()
          }
          ,
          h.prototype.interruptAutorotate = function() {
              this._viewer.breakIdleMovement()
          }
          ,
          e.exports = h
      }
      , {
          "../util/eventEmitter": 250,
          "./PreviewerHotspots": 231,
          "./TileStoreSource": 234,
          marzipano: 146
      }],
      231: [function(t, e, n) {
          "use strict";
          var i = t("knockout-es5")
            , r = t("./PreviewerLinkHotspot")
            , o = t("./PreviewerInfoHotspot");
          function s(t) {
              this.list = [],
              this._previewer = t,
              this._panorama = null,
              this._scene = null,
              this._hotspotChangeHandler = this._update.bind(this),
              i.track(this)
          }
          s.prototype.useScene = function(t, e) {
              this._panorama && (this._panorama.removeEventListener("linkHotspotAdded", this._hotspotChangeHandler),
              this._panorama.removeEventListener("linkHotspotRemoved", this._hotspotChangeHandler),
              this._panorama.removeEventListener("infoHotspotAdded", this._hotspotChangeHandler),
              this._panorama.removeEventListener("infoHotspotRemoved", this._hotspotChangeHandler)),
              this._panorama = e,
              this._scene = t,
              e.addEventListener("linkHotspotAdded", this._hotspotChangeHandler),
              e.addEventListener("linkHotspotRemoved", this._hotspotChangeHandler),
              e.addEventListener("infoHotspotAdded", this._hotspotChangeHandler),
              e.addEventListener("infoHotspotRemoved", this._hotspotChangeHandler),
              this._hotspotChangeHandler()
          }
          ,
          s.prototype._update = function() {
              var t = this;
              this._previewer.interruptAutorotate(),
              this.list.forEach(function(t) {
                  t.destroy()
              });
              var e = this._panorama.settings.linkHotspots.map(function(e) {
                  return new r(e,t._panorama,t._scene,t._previewer)
              })
                , n = this._panorama.settings.infoHotspots.map(function(e) {
                  return new o(e,t._panorama,t._scene,t._previewer)
              });
              this.list = [].concat(e, n)
          }
          ,
          e.exports = s
      }
      , {
          "./PreviewerInfoHotspot": 232,
          "./PreviewerLinkHotspot": 233,
          "knockout-es5": 17
      }],
      232: [function(t, e, n) {
          "use strict";
          var i = t("knockout-es5")
            , r = t("../oneShotEditContentEditable");
          function o(t, e, n, r) {
              this._hotspot = t,
              this._panorama = e,
              this._scene = n,
              this._previewer = r,
              this._view = n.view(),
              this.left = null,
              this.top = null,
              this.visible = !1,
              this._updateTransform(),
              this._positionChangeHandler = this._updateTransform.bind(this),
              this._view.addEventListener("change", this._positionChangeHandler),
              this._hotspot.addEventListener("coordinatesChanged", this._positionChangeHandler),
              this.dragging = !1,
              this._mouseUpHandler = this._stopDrag.bind(this),
              window.addEventListener("mouseup", this._mouseUpHandler),
              this._mouseMoveHandler = this._drag.bind(this),
              window.addEventListener("mousemove", this._mouseMoveHandler),
              this.editingTitle = !1,
              this.editingText = !1,
              i.track(this)
          }
          o.prototype.destroy = function() {
              this._view.removeEventListener("change", this._positionChangeHandler),
              this._hotspot.removeEventListener("coordinatesChanged", this._positionChangeHandler),
              window.removeEventListener("mouseup", this._mouseUpHandler),
              window.removeEventListener("mousemove", this._mouseMoveHandler),
              this.left = null,
              this.top = null,
              this.visible = null,
              this.targetSelectorVisible = null
          }
          ,
          o.prototype._updateTransform = function() {
              var t = this._view.coordinatesToScreen({
                  yaw: this._hotspot.yaw,
                  pitch: this._hotspot.pitch
              });
              t ? (this.left = t.x + "px",
              this.top = t.y + "px",
              this.visible = !0) : this.visible = !1
          }
          ,
          o.prototype.editTitle = function() {
              var t = this;
              this.editingTitle = !0;
              var e = document.querySelector(".info-hotspot.editingTitle .title");
              r(e, function() {
                  t.editingTitle = !1
              })
          }
          ,
          o.prototype.finishEditTitle = function() {
              this.editingTitle && document.querySelector(".info-hotspot.editingTitle .title").blur()
          }
          ,
          o.prototype.editText = function() {
              var t = this;
              this.editingText = !0;
              var e = document.querySelector(".info-hotspot.editingText .text");
              r(e, function() {
                  t.editingText = !1
              })
          }
          ,
          o.prototype.finishEditText = function() {
              if (this.editingText)
                  return element = document.querySelector(".info-hotspot.editingText .text"),
                  void element.blur()
          }
          ,
          o.prototype.isUnchanged = function() {
              return this._hotspot.isUnchanged()
          }
          ,
          o.prototype.startDrag = function(t, e) {
              this._previewer.interruptAutorotate(),
              this.dragging = e
          }
          ,
          o.prototype.click = function() {
              this._hotspot.target && this._hotspot.target.select()
          }
          ,
          o.prototype.remove = function() {
              this._previewer.interruptAutorotate(),
              window.confirm("Delete this hotspot?") && this._panorama.removeInfoHotspot(this._hotspot)
          }
          ,
          o.prototype._stopDrag = function() {
              this.dragging = !1
          }
          ,
          o.prototype.interruptAutorotate = function() {
              return this._previewer.interruptAutorotate(),
              !0
          }
          ,
          o.prototype._drag = function(t) {
              if (this.dragging) {
                  this._previewer.interruptAutorotate();
                  var e = this._view.coordinatesToScreen({
                      yaw: this._hotspot.yaw,
                      pitch: this._hotspot.pitch
                  })
                    , n = t.clientX - this.dragging.clientX
                    , i = t.clientY - this.dragging.clientY;
                  e.x += n,
                  e.y += i;
                  var r = this._view.screenToCoordinates(e);
                  this._hotspot.setCoordinates(r),
                  this.dragging = t
              }
          }
          ,
          o.prototype.hotspotInstance = function() {
              return this._hotspot
          }
          ,
          o.prototype.hotspotType = function() {
              return "info"
          }
          ,
          e.exports = o
      }
      , {
          "../oneShotEditContentEditable": 229,
          "knockout-es5": 17
      }],
      233: [function(t, e, n) {
          "use strict";
          var i = t("knockout-es5");
          function r(t, e, n, r) {
              this._hotspot = t,
              this._panorama = e,
              this._scene = n,
              this._previewer = r,
              this._view = n.view(),
              this.left = null,
              this.top = null,
              this.visible = !1,
              this.targetSelectorVisible = !this._hotspot.hasValidTarget(),
              this._updateTransform(),
              this._positionChangeHandler = this._updateTransform.bind(this),
              this._view.addEventListener("change", this._positionChangeHandler),
              this._hotspot.addEventListener("coordinatesChanged", this._positionChangeHandler),
              this.dragging = !1,
              this._mouseUpHandler = this._stopDrag.bind(this),
              window.addEventListener("mouseup", this._mouseUpHandler),
              this._mouseMoveHandler = this._drag.bind(this),
              window.addEventListener("mousemove", this._mouseMoveHandler),
              i.track(this)
          }
          r.prototype.destroy = function() {
              this._view.removeEventListener("change", this._positionChangeHandler),
              this._hotspot.removeEventListener("coordinatesChanged", this._positionChangeHandler),
              window.removeEventListener("mouseup", this._mouseUpHandler),
              window.removeEventListener("mousemove", this._mouseMoveHandler),
              this.left = null,
              this.top = null,
              this.visible = null,
              this.targetSelectorVisible = null
          }
          ,
          r.prototype._updateTransform = function() {
              var t = this._view.coordinatesToScreen({
                  yaw: this._hotspot.yaw,
                  pitch: this._hotspot.pitch
              });
              t ? (this.left = t.x + "px",
              this.top = t.y + "px",
              this.visible = !0) : this.visible = !1
          }
          ,
          r.prototype.imageTransform = function() {
              return "rotate(" + this._hotspot.rotation + "rad)"
          }
          ,
          r.prototype.targetName = function() {
              return this._hotspot.hasValidTarget() && this._hotspot.target.name
          }
          ,
          r.prototype.startDrag = function(t, e) {
              this._previewer.interruptAutorotate(),
              this.dragging = e
          }
          ,
          r.prototype.goToTarget = function() {
              this._hotspot.target && this._hotspot.target.select()
          }
          ,
          r.prototype.remove = function() {
              this._previewer.interruptAutorotate(),
              window.confirm("Delete this hotspot?") && this._panorama.removeLinkHotspot(this._hotspot)
          }
          ,
          r.prototype.editTarget = function() {
              this._previewer.interruptAutorotate(),
              this.targetSelectorVisible = !this.targetSelectorVisible
          }
          ,
          r.prototype.closeTargetSelector = function() {
              this.targetSelectorVisible = !1
          }
          ,
          r.prototype.selectTarget = function(t) {
              this._hotspot.setTarget(t)
          }
          ,
          r.prototype.targetIs = function(t) {
              return this._hotspot.target === t
          }
          ,
          r.prototype.rotateRight = function() {
              this._previewer.interruptAutorotate(),
              this._hotspot.offsetRotation(Math.PI / 4)
          }
          ,
          r.prototype.rotateLeft = function() {
              this._previewer.interruptAutorotate(),
              this._hotspot.offsetRotation(-Math.PI / 4)
          }
          ,
          r.prototype._stopDrag = function() {
              this.dragging = !1
          }
          ,
          r.prototype.interruptAutorotate = function() {
              this._previewer.interruptAutorotate()
          }
          ,
          r.prototype._drag = function(t) {
              if (this.dragging) {
                  this._previewer.interruptAutorotate();
                  var e = this._view.coordinatesToScreen({
                      yaw: this._hotspot.yaw,
                      pitch: this._hotspot.pitch
                  })
                    , n = t.clientX - this.dragging.clientX
                    , i = t.clientY - this.dragging.clientY;
                  e.x += n,
                  e.y += i;
                  var r = this._view.screenToCoordinates(e);
                  this._hotspot.setCoordinates(r),
                  this.dragging = t
              }
          }
          ,
          r.prototype.hotspotType = function() {
              return "link"
          }
          ,
          e.exports = r
      }
      , {
          "knockout-es5": 17
      }],
      234: [function(t, e, n) {
          "use strict";
          var i = t("marzipano")
            , r = i.DynamicAsset
            , o = i.util.cancelize;
          function s(t) {
              this._tileStore = t
          }
          s.prototype.loadAsset = function(t, e, n) {
              var i = this;
              return o(function(t) {
                  var n = !1
                    , o = document.createElement("canvas");
                  o.width = e.width(),
                  o.height = e.height(),
                  function(t, e) {
                      var n = t.getContext("2d")
                        , i = function(t) {
                          var e = t._level;
                          if (1 == e.numHorizontalTiles() && 1 == e.numVerticalTiles())
                              return 112 + 16 * a.indexOf(t.face);
                          var n = 144 + t.x % 2 * 16 + t.y % 2 * 32;
                          return "u" !== t.face && "d" !== t.face || (n += 5),
                          n
                      }(e).toString(16)
                        , r = "#" + i + i + i;
                      n.fillStyle = r,
                      n.fillRect(0, 0, t.width, t.height)
                  }(o, e);
                  var s = new r(o);
                  i._tileStore.addEventListener("tileAdded", u),
                  u();
                  var l = s.destroy.bind(s);
                  function u() {
                      if (!n) {
                          var t = i._tileStore.get(e.z, e.face, e.y, e.x);
                          if (t) {
                              n = !0;
                              var r = new Blob([t],{
                                  type: "image/jpeg"
                              })
                                , a = URL.createObjectURL(r)
                                , l = document.createElement("img");
                              l.src = a,
                              l.onload = function() {
                                  URL.revokeObjectURL(a),
                                  o.getContext("2d").drawImage(l, 0, 0),
                                  s.markDirty()
                              }
                              ,
                              l.onerror = function() {
                                  throw new Error("Bad JPEG data for tile")
                              }
                          }
                      }
                  }
                  s.destroy = function() {
                      i._tileStore.removeEventListener("tileAdded", u),
                      l()
                  }
                  ,
                  setTimeout(function() {
                      t(null, e, s)
                  }, 0)
              })(n)
          }
          ,
          s.prototype.unload = function() {}
          ;
          var a = "bdflru";
          e.exports = s
      }
      , {
          marzipano: 146
      }],
      235: [function(t, e, n) {
          "use strict";
          var i = t("../processingState/ProcessingStateFromWebworker");
          e.exports = function(t, e, n, r, o) {
              (n = n || {}).equirectangularWorkerSource = n.equirectangularWorkerSource || "equirect.worker.js",
              n.cubeWorkerSource = n.cubeWorkerSource || "cube.worker.js";
              var s = null;
              if ("equirectangular" === t.type)
                  s = n.equirectangularWorkerSource;
              else {
                  if ("cube" !== t.type)
                      return void o(new Error("Unknown panorama type " + t.type));
                  s = n.cubeWorkerSource
              }
              var a = new Worker(s)
                , l = new i(a,t.processingState);
              function u(t) {
                  var e = t.data;
                  if ("tile" === e.msg && r(e.tileArray, e.level, e.face, e.v, e.h),
                  "done" === e.msg) {
                      h();
                      var n = {
                          count: e.count,
                          cubeMapPreview: e.cubeMapPreviewArray
                      };
                      o(null, n)
                  }
              }
              function c(t) {
                  t.message || t.target !== a || (t = new Error("Failed to initialize WebWorker")),
                  h(),
                  o(t)
              }
              function h() {
                  l.destroy(),
                  a.removeEventListener("message", u),
                  a.removeEventListener("error", c),
                  a.terminate()
              }
              return a.addEventListener("message", u),
              a.addEventListener("error", c),
              a.postMessage({
                  fileData: t.fileData,
                  levels: e,
                  cubeMapPreviewSize: n.cubeMapPreviewSize,
                  cubeMapPreviewFaceOrder: n.cubeMapPreviewFaceOrder
              }),
              function() {
                  h(),
                  o(new Error("cancelled"))
              }
          }
      }
      , {
          "../processingState/ProcessingStateFromWebworker": 240
      }],
      236: [function(t, e, n) {
          "use strict";
          var i = t("./process/processEquirect")
            , r = t("lodash/lang/isEqual")
            , o = (t("../../vendor/imgsize"),
          t("./workers"))
            , s = t("./util/once");
          e.exports = function(t, e) {
              e = s(e);
              var n = null
                , a = function(t) {
                  if ("cube" === t.type) {
                      if (t.width !== t.height)
                          return new Error("Invalid size for cube face image: " + t.width + "x" + t.height)
                  } else if ("equirectangular" === t.type && t.width !== 2 * t.height)
                      return new Error("Invalid size for equirectangular image: " + t.width + "x" + t.height);
                  return null
              }(t);
              if (a)
                  return e(a);
              var l = function(t, e) {
                  return "cube" === t.type ? e : "equirectangular" === t.type ? e / 4 : void 0
              }(t, t.width)
                , u = function(t) {
                  var e, n = 512, i = [];
                  function r(t) {
                      return n * Math.pow(2, t)
                  }
                  for (e = 0; r(e) <= t; e++)
                      i.push({
                          tileSize: n,
                          size: r(e)
                      });
                  return 1.25 * r(e - 1) < t && i.push({
                      tileSize: n,
                      size: r(e)
                  }),
                  0 === i.length && i.push({
                      tileSize: n,
                      size: n
                  }),
                  i
              }(l);
              t.setLevels(u, {
                  cubeMapPreviewSize: 256,
                  faceSize: l
              });
              var c = {
                  cubeMapPreviewSize: 256,
                  cubeMapPreviewFaceOrder: "bdflru",
                  cubeWorkerSource: o.cube,
                  equirectangularWorkerSource: o.equirect
              };
              return n = i(t, u, c, function(e, n, i, o, s) {
                  t.addTile(function(t, e) {
                      for (var n = 0; n < t.length; n++)
                          if (r(t[n], e))
                              return n;
                      return null
                  }(t.levels, n), i, o, s, e)
              }, function(n, i) {
                  if (n)
                      return e(n);
                  t.setCubeMapPreview(i.cubeMapPreview),
                  e()
              }),
              function() {
                  n && n(),
                  e.apply(null, arguments)
              }
          }
      }
      , {
          "../../vendor/imgsize": 259,
          "./process/processEquirect": 235,
          "./util/once": 254,
          "./workers": 256,
          "lodash/lang/isEqual": 84
      }],
      237: [function(t, e, n) {
          "use strict";
          e.exports = function() {
              return "<p class='title'>Processing complete!</p><p>You may now <a href='javascript:app.getPanoramasArchiveFromNotification()'>export</a> your application</p>"
          }
      }
      , {}],
      238: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return "<p class='title'>Failed to process panorama " + t.name + "</p>"
          }
      }
      , {}],
      239: [function(t, e, n) {
          "use strict";
          var i = t("../util/eventEmitter")
            , r = t("../util/clock")
            , o = t("lodash/object/extend")
            , s = t("lodash/collection/size")
            , a = t("./processingStateUserMessage")
            , l = t("./processingStateUserProgress")
            , u = t("knockout-es5")
            , c = "queued";
          function h(t, e) {
              if (!t)
                  throw new Error("ProcessingStateNode name is required");
              this.name = t,
              this.status = c,
              this.startTime = null,
              this.endTime = null,
              this.data = o({}, e),
              this._children = [],
              u.track(this),
              u.track(this.data)
          }
          h.prototype.started = function(t) {
              if (this.status !== c)
                  throw new Error("Trying to set started on status " + this.status);
              return this.status = "started",
              this.startTime = r(),
              o(this.data, t),
              this.emit("statusChanged"),
              this.emit("changed"),
              this
          }
          ,
          h.prototype.updateData = function(t) {
              return o(this.data, t),
              this.emit("dataChanged"),
              this.emit("changed"),
              this
          }
          ,
          h.prototype.successful = function(t) {
              return this._setEnded("successful", t)
          }
          ,
          h.prototype.failed = function(t) {
              return this._setEnded("failed", t)
          }
          ,
          h.prototype.cancelled = function(t) {
              return this._setEnded("cancelled", t)
          }
          ,
          h.prototype.isQueued = function() {
              return this.status === c
          }
          ,
          h.prototype.isStarted = function() {
              return "started" === this.status
          }
          ,
          h.prototype.isSuccessful = function() {
              return "successful" === this.status
          }
          ,
          h.prototype.isFailed = function() {
              return "failed" === this.status
          }
          ,
          h.prototype.isCancelled = function() {
              return "cancelled" === this.status
          }
          ,
          h.prototype.isEnded = function() {
              return this.isSuccessful() || this.isFailed() || this.isCancelled()
          }
          ,
          h.prototype._setEnded = function(t, e) {
              if ("started" !== this.status)
                  throw new Error("Trying to set " + t + " on status " + this.status);
              return o(this.data, e),
              this.endTime = r(),
              this.status = t,
              this.emit("statusChanged"),
              this.emit("changed"),
              this
          }
          ,
          h.prototype.addChildNode = function(t) {
              this._children.push(t),
              this.emit("childAdded"),
              this.emit("changed");
              var e = this;
              return t.addEventListener("changed", function() {
                  e.emit("childChanged"),
                  e.emit("changed")
              }),
              t
          }
          ,
          h.prototype.addChild = function(t, e) {
              var n = new h(t,e);
              return this.addChildNode(n),
              n
          }
          ,
          h.prototype.time = function() {
              return this.endTime - this.startTime
          }
          ,
          h.prototype.getChildrenByStatus = function(t) {
              return this._children.filter(function(e) {
                  return e.status === t
              })
          }
          ,
          h.prototype.getChildByStatus = function(t) {
              var e = this.getChildrenByStatus(t);
              return e.length > 0 ? e[0] : null
          }
          ,
          h.prototype.getStartedBranch = function() {
              var t = []
                , e = this;
              do {
                  e.isStarted() && (t.push(e),
                  e = e.getChildByStatus("started"))
              } while (e);return t
          }
          ,
          h.prototype.toString = function() {
              var t = this.name + ": " + this.status;
              return this.endTime && (t += " (" + this.time().toFixed(1) + "ms)"),
              s(this.data) > 0 && (t += " " + JSON.stringify(this.data)),
              t
          }
          ,
          h.prototype.toStringTree = function(t) {
              t = t || 0;
              for (var e = "", n = 0; n < t; n++)
                  e += " ";
              return e += this.toString(),
              e += "\n",
              this._children.forEach(function(n) {
                  e += n.toStringTree(t + 2)
              }),
              e
          }
          ,
          h.prototype.userMessage = function() {
              return a(this)
          }
          ,
          h.prototype.userProgress = function() {
              return this._progress = this._progress || 0,
              this._progress = Math.max(this._progress, l(this)),
              this._progress
          }
          ,
          h.prototype.toObject = function() {
              return {
                  name: this.name,
                  status: this.status,
                  startTime: this.startTime,
                  endTime: this.endTime,
                  data: this.data,
                  children: this._children.map(function(t) {
                      return t.toObject()
                  })
              }
          }
          ,
          i(h),
          e.exports = h
      }
      , {
          "../util/clock": 246,
          "../util/eventEmitter": 250,
          "./processingStateUserMessage": 241,
          "./processingStateUserProgress": 242,
          "knockout-es5": 17,
          "lodash/collection/size": 30,
          "lodash/object/extend": 91
      }],
      240: [function(t, e, n) {
          "use strict";
          var i = t("./ProcessingState");
          function r(t, e) {
              this._root = e,
              this._nodes = {},
              this._worker = t;
              var n = this;
              this._handleMessage = function(t) {
                  var e = t.data
                    , r = t.data.msg;
                  if ("processing_state_create" === r)
                      n._nodes[e.id] = new i(e.name,e.createData);
                  else if ("processing_state" === r)
                      n._nodes[e.id][e.method](e.data);
                  else if ("processing_state_add_child_node_to_root" === r) {
                      var o = n._nodes[e.childId];
                      n._root.addChildNode(o)
                  } else if ("processing_state_add_child_node" === r) {
                      var s = n._nodes[e.childId];
                      n._nodes[e.parentId].addChildNode(s)
                  }
              }
              ,
              this._worker.addEventListener("message", this._handleMessage)
          }
          r.prototype.destroy = function() {
              this._worker.removeEventListener("message", this._handleMessage)
          }
          ,
          e.exports = r
      }
      , {
          "./ProcessingState": 239
      }],
      241: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e = t.status;
              return "queued" === e ? "Queued for processing" : "successful" === e ? "Successfully processed" : "failed" === e ? "Processing failed" : "cancelled" === e ? "Cancelled" : "started" === e ? function(t) {
                  var e = t.getChildByStatus("started");
                  if (!e)
                      return "Starting processing";
                  if ("read_and_decode_file" === e.name)
                      return "Loading file";
                  if ("process_faces" === e.name) {
                      var n = e.data.processedFaces
                        , i = "Face " + (n + 1) + "/6: "
                        , r = e.getChildByStatus("started");
                      if (!r)
                          return "";
                      var o = r.getChildByStatus("started");
                      return o ? ("read_and_decode_file" === o.name && (i += "loading file"),
                      "equirectangular_to_face" === o.name && (i += "converting to cube"),
                      "generate_preview" === o.name && (i += "generating preview"),
                      "process_levels" === o.name && (i += function(t) {
                          var e = t.getChildByStatus("started");
                          if (!e)
                              return "";
                          var n = e.data.level.size
                            , i = e.data.generatedTiles
                            , r = e.data.totalTiles;
                          return "level " + n + " (" + (i + 1) + "/" + r + " tiles)"
                      }(o)),
                      i) : ""
                  }
                  return ""
              }(t) : ""
          }
      }
      , {}],
      242: [function(t, e, n) {
          "use strict";
          function i(t) {
              return t.data.generatedTiles / t.data.totalTiles
          }
          e.exports = function(t) {
              var e = t.status
                , n = t.data.type;
              if ("successful" === e)
                  return 1;
              if ("queued" === e || "cancelled" === e || "failed" === e)
                  return null;
              if ("started" === e) {
                  if ("cube" === n)
                      return function(t) {
                          var e = t.getChildByStatus("started");
                          if (!e)
                              return 0;
                          if ("process_faces" === e.name) {
                              var n = e.data.totalFaces
                                , r = e.data.processedFaces
                                , o = e.getChildByStatus("started");
                              return o ? (r + function(t) {
                                  var e = t.getChildByStatus("started");
                                  if (!e)
                                      return 0;
                                  if ("read_and_decode_file" === e.name)
                                      return 0;
                                  if ("generate_preview" === e.name)
                                      return .25;
                                  if ("process_levels" === e.name) {
                                      var n, r = e.data.levelList, o = e.data.totalLevels, s = e.data.processedLevels, a = [];
                                      for (n = 0; n < o; n++)
                                          a.push(r[n].size * r[n].size);
                                      var l = 0;
                                      for (n = 0; n < o; n++)
                                          l += a[n];
                                      var u = 0;
                                      for (n = 0; n < s; n++)
                                          u += a[n];
                                      var c = e.getChildByStatus("started");
                                      if (!c)
                                          return .25 + .75 * u / l;
                                      var h = a[s];
                                      return .25 + .75 * (u + i(c) * h) / l
                                  }
                                  return 0
                              }(o)) / n : r / n
                          }
                          return 0
                      }(t);
                  if ("equirectangular" === n)
                      return function(t) {
                          var e = t.getChildByStatus("started");
                          if (!e)
                              return 0;
                          if ("read_and_decode_file" === e.name)
                              return 0;
                          if ("process_faces" === e.name) {
                              var n = e.data.totalFaces
                                , r = e.data.processedFaces
                                , o = e.getChildByStatus("started");
                              return o ? (r + function(t) {
                                  var e = t.getChildByStatus("started");
                                  if (!e)
                                      return 0;
                                  if ("equirectangular_to_face" === e.name)
                                      return 0;
                                  if ("generate_preview" === e.name)
                                      return .25;
                                  if ("process_levels" === e.name) {
                                      var n, r = e.data.levelList, o = e.data.totalLevels, s = e.data.processedLevels, a = [];
                                      for (n = 0; n < o; n++)
                                          a.push(r[n].size * r[n].size);
                                      var l = 0;
                                      for (n = 0; n < o; n++)
                                          l += a[n];
                                      var u = 0;
                                      for (n = 0; n < s; n++)
                                          u += a[n];
                                      var c = e.getChildByStatus("started");
                                      if (!c)
                                          return .25 + .75 * u / l;
                                      var h = a[s];
                                      return .25 + .75 * (u + i(c) * h) / l
                                  }
                                  return 0
                              }(o)) / n : r / n
                          }
                          return 0
                      }(t)
              }
              return null
          }
      }
      , {}],
      243: [function(t, e, n) {
          "use strict";
          var i = document.querySelector('link[rel="icon"]')
            , r = i.getAttribute("href")
            , o = null
            , s = null
            , a = new Image;
          a.onload = function() {
              (o = document.createElement("canvas")).width = a.naturalWidth,
              o.height = a.naturalHeight;
              var t = o.getContext("2d");
              t.drawImage(a, 0, 0),
              s = t.getImageData(0, 0, o.width, o.height)
          }
          ,
          a.src = i.getAttribute("href");
          var l = document.createElement("canvas")
            , u = l.getContext("2d");
          e.exports = function(t) {
              s && (null != t && t < 1 ? function(t) {
                  var e = o.width
                    , n = o.height;
                  l.width = e,
                  l.height = n;
                  for (var r = u.getImageData(0, 0, e, n), a = Math.floor(n * (1 - t)), c = 0; c < n; c++)
                      for (var h = 0; h < e; h++) {
                          var p = 4 * (c * e + h)
                            , d = s.data[p]
                            , f = s.data[p + 1]
                            , m = s.data[p + 2]
                            , v = s.data[p + 3];
                          if (c < a) {
                              var y = .2126 * d + .7152 * f + .0722 * m;
                              r.data[p] = y,
                              r.data[p + 1] = y,
                              r.data[p + 2] = y,
                              r.data[p + 3] = v
                          } else
                              r.data[p] = d,
                              r.data[p + 1] = f,
                              r.data[p + 2] = m,
                              r.data[p + 3] = v
                      }
                  u.putImageData(r, 0, 0),
                  i.href = l.toDataURL()
              }(t) : i.href = r)
          }
      }
      , {}],
      244: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e) {
              t.addEventListener("dragenter", function(t) {
                  t.preventDefault()
              }),
              t.addEventListener("dragleave", function(t) {
                  t.preventDefault()
              }),
              t.addEventListener("dragover", function(t) {
                  t.preventDefault()
              }),
              t.addEventListener("drop", function(t) {
                  t.preventDefault();
                  var n = function(t) {
                      return t.dataTransfer && t.dataTransfer.files && t.dataTransfer.files && t.dataTransfer.files.length > 0 ? t.dataTransfer.files : null
                  }(t);
                  n && e(n)
              })
          }
      }
      , {}],
      245: [function(t, e, n) {
          "use strict";
          var i = t("bowser").browser
            , r = t("./util/endianess");
          function o() {
              var t = parseFloat(i.version);
              return i.chrome && t >= 40 || i.firefox && t >= 35
          }
          function s() {
              var t = document.createElement("canvas");
              return !!(t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl")))
          }
          function a() {
              return "LE" === r()
          }
          var l = o() && s() && a();
          l || (document.getElementById("unsupported").style.display = "block"),
          o() || (document.getElementById("unsupported-browser").style.display = "block"),
          o() && !s() && (document.getElementById("unsupported-webgl").style.display = "block"),
          o() && s() && !a() && (document.getElementById("unsupported-endianess").style.display = "block"),
          e.exports = l
      }
      , {
          "./util/endianess": 248,
          bowser: 2
      }],
      246: [function(t, e, n) {
          "use strict";
          var i = (window.performance && window.performance.now ? function() {
              return window.performance.now()
          }
          : null) || function() {
              return Date.now()
          }
          ;
          e.exports = i
      }
      , {}],
      247: [function(t, e, n) {
          t("setimmediate"),
          e.exports = setImmediate
      }
      , {
          setimmediate: 211
      }],
      248: [function(t, e, n) {
          e.exports = function() {
              var t = new ArrayBuffer(4)
                , e = new Uint32Array(t)
                , n = new Uint8Array(t);
              if (e[0] = 3735928559,
              239 == n[0])
                  return "LE";
              if (222 == n[0])
                  return "BE";
              throw new Error("unknown endianness")
          }
      }
      , {}],
      249: [function(t, e, n) {
          "use strict";
          var i = t("lodash/object/pick");
          e.exports = function(t) {
              return i(t, ["message", "colno", "lineno", "filename"])
          }
      }
      , {
          "lodash/object/pick": 94
      }],
      250: [function(t, e, n) {
          "use strict";
          function i() {}
          i.prototype.addEventListener = function(t, e) {
              var n = this.__events = this.__events || {};
              (n[t] = n[t] || []).push(e)
          }
          ,
          i.prototype.removeEventListener = function(t, e) {
              var n = (this.__events = this.__events || {})[t];
              if (n) {
                  var i = n.indexOf(e);
                  i >= 0 && n.splice(i, 1)
              }
          }
          ,
          i.prototype.emit = function(t, e, n, i, r, o) {
              var s = (this.__events = this.__events || {})[t];
              if (s)
                  for (var a = 0; a < s.length; a++) {
                      s[a].call(this, e, n, i, r, o)
                  }
          }
          ,
          e.exports = function(t) {
              for (var e = Object.keys(i.prototype), n = 0; n < e.length; n++) {
                  var r = e[n];
                  t.prototype[r] = i.prototype[r]
              }
          }
      }
      , {}],
      251: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e = /\.([^\.]*)$/.exec(t);
              return e ? e[1].toLowerCase() : ""
          }
      }
      , {}],
      252: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e = /^(.*)\.[^\.]*$/.exec(t);
              return e ? e[1] : ""
          }
      }
      , {}],
      253: [function(t, e, n) {
          "use strict";
          e.exports = function(t, e, n) {
              var i = new XMLHttpRequest;
              i.open("GET", t, !0),
              i.responseType = e,
              i.onload = function() {
                  200 <= this.status && this.status < 300 ? n(null, this.response) : n(new Error("Error loading " + t + " via XHR"))
              }
              ,
              i.onerror = function(t) {
                  n(t)
              }
              ,
              i.send()
          }
      }
      , {}],
      254: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              var e, n = !1;
              return function() {
                  return n || (n = !0,
                  e = t.apply(null, arguments)),
                  e
              }
          }
      }
      , {}],
      255: [function(t, e, n) {
          "use strict";
          e.exports = function(t) {
              return t.replace(/ /g, "-").replace(/[^A-Za-z0-9\-\_]/g, "").toLowerCase()
          }
      }
      , {}],
      256: [function(t, e, n) {
          e.exports = {
              zip: document.querySelector('script[type="x-worker-zip"]').src,
              cube: document.querySelector('script[type="x-worker-cube"]').src,
              equirect: document.querySelector('script[type="x-worker-equirect"]').src
          }
      }
      , {}],
      257: [function(t, e, n) {
          "use strict";
          function i(t) {
              (t = t || {}).workerSource = t.workerSource,
              this._worker = new Worker(t.workerSource)
          }
          i.prototype.add = function(t, e, n, i) {
              this._worker.postMessage({
                  cmd: "file",
                  folders: t,
                  name: e,
                  data: n,
                  opts: i
              })
          }
          ,
          i.prototype.generate = function(t, e) {
              this._worker.onmessage = function(t) {
                  var n = t.data.zipFile;
                  e(null, n)
              }
              ,
              this._worker.postMessage({
                  cmd: "generate",
                  opts: t
              })
          }
          ,
          i.prototype.destroy = function() {
              this._worker.terminate()
          }
          ,
          e.exports = i
      }
      , {}],
      258: [function(t, e, n) {
          e.exports = "1cdef76"
      }
      , {}],
      259: [function(e, n, i) {
          (function(r) {
              !function(e) {
                  if ("object" == typeof i && void 0 !== n)
                      n.exports = e();
                  else if ("function" == typeof t && t.amd)
                      t([], e);
                  else {
                      ("undefined" != typeof window ? window : void 0 !== r ? r : "undefined" != typeof self ? self : this).imgsize = e()
                  }
              }(function() {
                  return function t(n, i, r) {
                      function o(a, l) {
                          if (!i[a]) {
                              if (!n[a]) {
                                  var u = "function" == typeof e && e;
                                  if (!l && u)
                                      return u(a, !0);
                                  if (s)
                                      return s(a, !0);
                                  var c = new Error("Cannot find module '" + a + "'");
                                  throw c.code = "MODULE_NOT_FOUND",
                                  c
                              }
                              var h = i[a] = {
                                  exports: {}
                              };
                              n[a][0].call(h.exports, function(t) {
                                  var e = n[a][1][t];
                                  return o(e || t)
                              }, h, h.exports, t, n, i, r)
                          }
                          return i[a].exports
                      }
                      for (var s = "function" == typeof e && e, a = 0; a < r.length; a++)
                          o(r[a]);
                      return o
                  }({
                      1: [function(t, e) {
                          "use strict";
                          function n(t, e, n) {
                              var i = r(t);
                              i ? i(e(t), n) : n(new Error("Unsupported file type"))
                          }
                          var i = t("./src/reader")
                            , r = t("./src/handler");
                          e.exports = {
                              sync: function(t) {
                                  var e, r;
                                  if (n(t, i.sync, function(t, n) {
                                      e = t,
                                      r = n
                                  }),
                                  e)
                                      throw e;
                                  return r
                              },
                              async: function(t, e) {
                                  n(t, i.async, e)
                              }
                          }
                      }
                      , {
                          "./src/handler": 2,
                          "./src/reader": 5
                      }],
                      2: [function(t, e) {
                          "use strict";
                          var n = t("./jpeg")
                            , i = t("./tiff");
                          e.exports = function(t) {
                              var e = t.type
                                , r = function(t) {
                                  var e = /\.([^\.]*)$/.exec(t);
                                  return e ? e[1].toLowerCase() : ""
                              }(t.name);
                              return "image/jpeg" === e ? n : "image/tiff" === e ? i : "jpg" === r || "jpeg" === r ? n : "tif" === r || "tiff" === r ? i : null
                          }
                      }
                      , {
                          "./jpeg": 3,
                          "./tiff": 6
                      }],
                      3: [function(t, e) {
                          "use strict";
                          function n(t, e, r) {
                              t(e, 4, function(o, s) {
                                  if (o)
                                      r(o);
                                  else if (s.length < 2 || 255 !== s[0])
                                      r(new Error("Not a valid JPEG file"));
                                  else {
                                      var a = s[1];
                                      if (255 !== a)
                                          if (192 > a || a > 207 || 196 === a || 204 === a) {
                                              if (1 === a || 216 === a || 217 === a || a >= 208 && 215 >= a)
                                                  return void n(t, e + 2, r);
                                              if (s.length < 4)
                                                  return void r(new Error("Not a valid JPEG file"));
                                              var l = i(s, 2);
                                              n(t, e + 2 + l, r)
                                          } else
                                              !function(t, e, n) {
                                                  t(e, 9, function(t, e) {
                                                      if (t)
                                                          n(t);
                                                      else if (e.length < 9)
                                                          n(new Error("Not a valid JPEG file"));
                                                      else {
                                                          var r = {
                                                              height: i(e, 5),
                                                              width: i(e, 7)
                                                          };
                                                          n(null, r)
                                                      }
                                                  })
                                              }(t, e, r);
                                      else
                                          n(t, e + 1, r)
                                  }
                              })
                          }
                          var i = t("./parse").be16;
                          e.exports = function(t, e) {
                              n(t, 0, e)
                          }
                      }
                      , {
                          "./parse": 4
                      }],
                      4: [function(t, e) {
                          "use strict";
                          e.exports = {
                              be16: function(t, e) {
                                  return (t[e] << 8) + t[e + 1]
                              },
                              le16: function(t, e) {
                                  return (t[e + 1] << 8) + t[e]
                              },
                              be32: function(t, e) {
                                  return (t[e] << 24) + (t[e + 1] << 16) + (t[e + 2] << 8) + t[e + 3]
                              },
                              le32: function(t, e) {
                                  return (t[e + 3] << 24) + (t[e + 2] << 16) + (t[e + 1] << 8) + t[e]
                              }
                          }
                      }
                      , {}],
                      5: [function(t, e) {
                          "use strict";
                          e.exports = {
                              sync: function(t) {
                                  return function(e, n, i) {
                                      var r, o, s = t.slice(e, e + n), a = new FileReaderSync;
                                      try {
                                          o = new Uint8Array(a.readAsArrayBuffer(s))
                                      } catch (t) {
                                          r = t
                                      } finally {
                                          i(r, r ? o : null)
                                      }
                                  }
                              },
                              async: function(t) {
                                  return function(e, n, i) {
                                      var r = t.slice(e, e + n)
                                        , o = new FileReader;
                                      o.addEventListener("error", function() {
                                          i(o.error)
                                      }),
                                      o.addEventListener("load", function() {
                                          i(null, new Uint8Array(o.result))
                                      }),
                                      o.readAsArrayBuffer(r)
                                  }
                              }
                          }
                      }
                      , {}],
                      6: [function(t, e) {
                          "use strict";
                          function n(t, e, n) {
                              var l = e[0]
                                , u = e[1]
                                , c = 77 === l
                                , h = {
                                  short: c ? r : o,
                                  long: c ? a : s
                              };
                              if (73 !== l && 77 !== l || l !== u || 42 !== h.short(e, 2))
                                  n(new Error("Not a valid TIFF file"));
                              else {
                                  var p = h.long(e, 4);
                                  i(t, h, p, 2, n)
                              }
                          }
                          function i(t, e, n, r, o) {
                              t(n, r, function(s, a) {
                                  if (s)
                                      o(s);
                                  else if (a.length < r)
                                      o(new Error("Not a valid TIFF file"));
                                  else {
                                      var l = e.short(a, 0)
                                        , u = 2 + 12 * l;
                                      u > r ? i(t, e, n, u, o) : function(t, e, n, i, r) {
                                          for (var o = null, s = null, a = 0; n > a; a++) {
                                              var l = 12 * a
                                                , u = e.short(i, l)
                                                , c = e.short(i, l + 2)
                                                , h = 3 === c ? e.short : e.long;
                                              256 === u && (o = h(i, l + 8)),
                                              257 === u && (s = h(i, l + 8))
                                          }
                                          if (null === o && null === s)
                                              return void r(new Error("Not a valid TIFF file"));
                                          r(null, {
                                              width: o,
                                              height: s
                                          })
                                      }(0, e, l, a.subarray(2), o)
                                  }
                              })
                          }
                          var r = t("./parse").be16
                            , o = t("./parse").le16
                            , s = t("./parse").le32
                            , a = t("./parse").be32;
                          e.exports = function(t, e) {
                              !function(t, e) {
                                  t(0, 8, function(i, r) {
                                      return i ? void e(i) : r.length < 8 ? void e(new Error("Not a valid TIFF file")) : void n(t, r, e)
                                  })
                              }(t, e)
                          }
                      }
                      , {
                          "./parse": 4
                      }]
                  }, {}, [1])(1)
              })
          }
          ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
      }
      , {}]
  }, {}, [218])(218)
});