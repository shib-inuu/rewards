(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    var ModelViewer = require('metamask-logo');
    window.addEventListener('load', () => {
      var viewer = ModelViewer({
        pxNotRatio: true,
        width: 130,
        height: 130,
        followMouse: true,
      });
    
      var container = document.getElementById('logo-container');
      container.appendChild(viewer.container);
    });
    
    },{"metamask-logo":3}],2:[function(require,module,exports){
    module.exports={
      "positions": [
        [
          111.0246,
          52.6046,
          46.2259
        ],
        [
          114.025,
          87.6733,
          58.9818
        ],
        [
          66.192,
          80.898,
          55.3943
        ],
        [
          72.1133,
          35.4918,
          30.8714
        ],
        [
          97.8045,
          116.561,
          73.9788
        ],
        [
          16.7623,
          58.0109,
          58.0782
        ],
        [
          52.6089,
          30.3641,
          42.5561
        ],
        [
          106.8814,
          31.9455,
          46.9133
        ],
        [
          113.4846,
          38.6049,
          49.1215
        ],
        [
          108.6633,
          43.2332,
          46.3154
        ],
        [
          101.2166,
          15.9822,
          46.3082
        ],
        [
          16.6605,
          -16.2883,
          93.6187
        ],
        [
          40.775,
          -10.2288,
          85.2764
        ],
        [
          23.9269,
          -2.5103,
          86.7365
        ],
        [
          11.1691,
          -7.0037,
          99.3776
        ],
        [
          9.5692,
          -34.3939,
          141.672
        ],
        [
          12.596,
          7.1655,
          88.741
        ],
        [
          61.1809,
          8.8142,
          76.9968
        ],
        [
          39.7195,
          -28.9271,
          88.9638
        ],
        [
          13.7962,
          -68.5757,
          132.057
        ],
        [
          15.2674,
          -62.32,
          129.688
        ],
        [
          14.8446,
          -52.6096,
          140.113
        ],
        [
          12.8917,
          -49.7716,
          144.741
        ],
        [
          35.6042,
          -71.758,
          81.0639
        ],
        [
          47.4625,
          -68.6061,
          63.3697
        ],
        [
          38.2486,
          -64.7302,
          38.9099
        ],
        [
          -12.8917,
          -49.7716,
          144.741
        ],
        [
          -13.7962,
          -68.5757,
          132.057
        ],
        [
          17.8021,
          -71.758,
          81.0639
        ],
        [
          19.1243,
          -69.0168,
          49.4201
        ],
        [
          38.2486,
          -66.2756,
          17.7762
        ],
        [
          12.8928,
          -36.7035,
          141.672
        ],
        [
          109.284,
          -93.5899,
          27.8243
        ],
        [
          122.118,
          -36.8894,
          35.025
        ],
        [
          67.7668,
          -30.197,
          78.4178
        ],
        [
          33.1807,
          101.852,
          25.3186
        ],
        [
          9.4063,
          -35.5898,
          150.722
        ],
        [
          -9.5692,
          -34.3939,
          141.672
        ],
        [
          -9.4063,
          -35.5898,
          150.722
        ],
        [
          11.4565,
          -37.8994,
          150.722
        ],
        [
          -12.596,
          7.1655,
          88.741
        ],
        [
          -11.1691,
          -7.0037,
          99.3776
        ],
        [
          70.2365,
          62.8362,
          -3.9475
        ],
        [
          47.2634,
          54.294,
          -27.4148
        ],
        [
          28.7302,
          91.7311,
          -24.9726
        ],
        [
          69.1676,
          6.5862,
          -12.7757
        ],
        [
          28.7302,
          49.1003,
          -48.3596
        ],
        [
          31.903,
          5.692,
          -47.822
        ],
        [
          35.0758,
          -34.4329,
          -16.2809
        ],
        [
          115.2841,
          48.6815,
          48.6841
        ],
        [
          110.8428,
          28.4821,
          49.1762
        ],
        [
          -19.1243,
          -69.0168,
          49.4201
        ],
        [
          -38.2486,
          -66.2756,
          17.7762
        ],
        [
          -111.0246,
          52.6046,
          46.2259
        ],
        [
          -72.1133,
          35.4918,
          30.8714
        ],
        [
          -66.192,
          80.898,
          55.3943
        ],
        [
          -114.025,
          87.6733,
          58.9818
        ],
        [
          -97.8045,
          116.561,
          73.9788
        ],
        [
          -52.6089,
          30.3641,
          42.5561
        ],
        [
          -16.7623,
          58.0109,
          58.0782
        ],
        [
          -106.8814,
          31.9455,
          46.9133
        ],
        [
          -108.6633,
          43.2332,
          46.3154
        ],
        [
          -113.4846,
          38.6049,
          49.1215
        ],
        [
          -101.2166,
          15.9822,
          46.3082
        ],
        [
          -16.6605,
          -16.2883,
          93.6187
        ],
        [
          -23.9269,
          -2.5103,
          86.7365
        ],
        [
          -40.775,
          -10.2288,
          85.2764
        ],
        [
          -61.1809,
          8.8142,
          76.9968
        ],
        [
          -39.7195,
          -28.9271,
          88.9638
        ],
        [
          -14.8446,
          -52.6096,
          140.113
        ],
        [
          -15.2674,
          -62.32,
          129.688
        ],
        [
          -47.4625,
          -68.6061,
          63.3697
        ],
        [
          -35.6042,
          -71.758,
          81.0639
        ],
        [
          -38.2486,
          -64.7302,
          38.9099
        ],
        [
          -17.8021,
          -71.758,
          81.0639
        ],
        [
          -12.8928,
          -36.7035,
          141.672
        ],
        [
          -67.7668,
          -30.197,
          78.4178
        ],
        [
          -122.118,
          -36.8894,
          35.025
        ],
        [
          -109.284,
          -93.5899,
          27.8243
        ],
        [
          -33.1807,
          101.852,
          25.3186
        ],
        [
          -11.4565,
          -37.8994,
          150.722
        ],
        [
          -70.2365,
          62.8362,
          -3.9475
        ],
        [
          -28.7302,
          91.7311,
          -24.9726
        ],
        [
          -47.2634,
          54.294,
          -27.4148
        ],
        [
          -69.1676,
          6.5862,
          -12.7757
        ],
        [
          -28.7302,
          49.1003,
          -48.3596
        ],
        [
          -31.903,
          5.692,
          -47.822
        ],
        [
          -35.0758,
          -34.4329,
          -16.2809
        ],
        [
          -115.2841,
          48.6815,
          48.6841
        ],
        [
          -110.8428,
          28.4821,
          49.1762
        ]
      ],
      "chunks": [
        {
          "color": [
            246,
            133,
            27
          ],
          "faces": [
            [
              17,
              33,
              10
            ],
            [
              17,
              18,
              34
            ],
            [
              34,
              33,
              17
            ],
            [
              10,
              6,
              17
            ],
            [
              11,
              15,
              31
            ],
            [
              31,
              18,
              11
            ],
            [
              18,
              12,
              11
            ],
            [
              14,
              16,
              40
            ],
            [
              40,
              41,
              14
            ],
            [
              59,
              5,
              35
            ],
            [
              35,
              79,
              59
            ],
            [
              67,
              63,
              77
            ],
            [
              67,
              77,
              76
            ],
            [
              76,
              68,
              67
            ],
            [
              63,
              67,
              58
            ],
            [
              64,
              68,
              75
            ],
            [
              75,
              37,
              64
            ],
            [
              68,
              64,
              66
            ],
            [
              14,
              41,
              37
            ],
            [
              37,
              15,
              14
            ],
            [
              5,
              59,
              40
            ],
            [
              40,
              16,
              5
            ]
          ]
        },
        {
          "color": [
            228,
            118,
            27
          ],
          "faces": [
            [
              31,
              24,
              18
            ],
            [
              6,
              5,
              16
            ],
            [
              16,
              17,
              6
            ],
            [
              24,
              32,
              33
            ],
            [
              33,
              34,
              24
            ],
            [
              5,
              4,
              35
            ],
            [
              75,
              68,
              71
            ],
            [
              58,
              67,
              40
            ],
            [
              40,
              59,
              58
            ],
            [
              71,
              76,
              77
            ],
            [
              77,
              78,
              71
            ]
          ]
        },
        {
          "color": [
            118,
            61,
            22
          ],
          "faces": [
            [
              0,
              1,
              2
            ],
            [
              2,
              3,
              0
            ],
            [
              4,
              5,
              2
            ],
            [
              6,
              3,
              2
            ],
            [
              2,
              5,
              6
            ],
            [
              7,
              8,
              9
            ],
            [
              10,
              3,
              6
            ],
            [
              10,
              50,
              7
            ],
            [
              7,
              3,
              10
            ],
            [
              7,
              9,
              3
            ],
            [
              49,
              0,
              9
            ],
            [
              3,
              9,
              0
            ],
            [
              53,
              54,
              55
            ],
            [
              55,
              56,
              53
            ],
            [
              57,
              56,
              55
            ],
            [
              58,
              59,
              55
            ],
            [
              55,
              54,
              58
            ],
            [
              60,
              61,
              62
            ],
            [
              63,
              58,
              54
            ],
            [
              63,
              60,
              89
            ],
            [
              60,
              63,
              54
            ],
            [
              60,
              54,
              61
            ],
            [
              88,
              61,
              53
            ],
            [
              54,
              53,
              61
            ],
            [
              2,
              1,
              4
            ],
            [
              55,
              59,
              57
            ]
          ]
        },
        {
          "color": [
            22,
            22,
            22
          ],
          "faces": [
            [
              36,
              15,
              37
            ],
            [
              37,
              38,
              36
            ],
            [
              31,
              39,
              22
            ],
            [
              22,
              21,
              31
            ],
            [
              31,
              15,
              36
            ],
            [
              36,
              39,
              31
            ],
            [
              75,
              69,
              26
            ],
            [
              26,
              80,
              75
            ],
            [
              75,
              80,
              38
            ],
            [
              38,
              37,
              75
            ],
            [
              38,
              80,
              39
            ],
            [
              39,
              36,
              38
            ],
            [
              39,
              80,
              26
            ],
            [
              26,
              22,
              39
            ]
          ]
        },
        {
          "color": [
            215,
            193,
            179
          ],
          "faces": [
            [
              21,
              20,
              24
            ],
            [
              24,
              31,
              21
            ],
            [
              69,
              71,
              70
            ],
            [
              71,
              69,
              75
            ]
          ]
        },
        {
          "color": [
            192,
            173,
            158
          ],
          "faces": [
            [
              19,
              20,
              21
            ],
            [
              21,
              22,
              19
            ],
            [
              20,
              19,
              23
            ],
            [
              23,
              24,
              20
            ],
            [
              23,
              25,
              24
            ],
            [
              19,
              22,
              26
            ],
            [
              26,
              27,
              19
            ],
            [
              23,
              28,
              29
            ],
            [
              23,
              29,
              30
            ],
            [
              25,
              23,
              30
            ],
            [
              29,
              51,
              52
            ],
            [
              52,
              30,
              29
            ],
            [
              27,
              26,
              69
            ],
            [
              69,
              70,
              27
            ],
            [
              70,
              71,
              72
            ],
            [
              72,
              27,
              70
            ],
            [
              72,
              71,
              73
            ],
            [
              51,
              74,
              72
            ],
            [
              52,
              51,
              72
            ],
            [
              73,
              52,
              72
            ],
            [
              19,
              27,
              74
            ],
            [
              74,
              28,
              19
            ],
            [
              51,
              29,
              28
            ],
            [
              28,
              74,
              51
            ],
            [
              74,
              27,
              72
            ],
            [
              28,
              23,
              19
            ]
          ]
        },
        {
          "color": [
            205,
            97,
            22
          ],
          "faces": [
            [
              24,
              34,
              18
            ],
            [
              16,
              13,
              12
            ],
            [
              12,
              17,
              16
            ],
            [
              13,
              16,
              11
            ],
            [
              71,
              68,
              76
            ],
            [
              40,
              67,
              66
            ],
            [
              66,
              65,
              40
            ],
            [
              65,
              64,
              40
            ]
          ]
        },
        {
          "color": [
            35,
            52,
            71
          ],
          "faces": [
            [
              11,
              12,
              13
            ],
            [
              64,
              65,
              66
            ]
          ]
        },
        {
          "color": [
            228,
            117,
            31
          ],
          "faces": [
            [
              14,
              15,
              11
            ],
            [
              11,
              16,
              14
            ],
            [
              17,
              12,
              18
            ],
            [
              41,
              64,
              37
            ],
            [
              67,
              68,
              66
            ]
          ]
        },
        {
          "color": [
            226,
            118,
            27
          ],
          "faces": [
            [
              35,
              4,
              42
            ],
            [
              4,
              1,
              42
            ],
            [
              42,
              43,
              44
            ],
            [
              44,
              35,
              42
            ],
            [
              45,
              43,
              42
            ],
            [
              42,
              10,
              45
            ],
            [
              30,
              32,
              24
            ],
            [
              24,
              25,
              30
            ],
            [
              30,
              33,
              32
            ],
            [
              33,
              30,
              10
            ],
            [
              44,
              43,
              46
            ],
            [
              43,
              45,
              47
            ],
            [
              47,
              46,
              43
            ],
            [
              48,
              47,
              45
            ],
            [
              45,
              30,
              48
            ],
            [
              30,
              45,
              10
            ],
            [
              49,
              42,
              0
            ],
            [
              8,
              7,
              42
            ],
            [
              50,
              42,
              7
            ],
            [
              50,
              10,
              42
            ],
            [
              1,
              0,
              42
            ],
            [
              42,
              9,
              8
            ],
            [
              42,
              49,
              9
            ],
            [
              64,
              41,
              40
            ],
            [
              57,
              59,
              79
            ],
            [
              79,
              81,
              57
            ],
            [
              57,
              81,
              56
            ],
            [
              82,
              79,
              35
            ],
            [
              35,
              44,
              82
            ],
            [
              81,
              79,
              82
            ],
            [
              82,
              83,
              81
            ],
            [
              84,
              63,
              81
            ],
            [
              81,
              83,
              84
            ],
            [
              44,
              46,
              85
            ],
            [
              85,
              82,
              44
            ],
            [
              52,
              73,
              71
            ],
            [
              71,
              78,
              52
            ],
            [
              52,
              78,
              77
            ],
            [
              77,
              63,
              52
            ],
            [
              82,
              85,
              83
            ],
            [
              83,
              85,
              86
            ],
            [
              86,
              84,
              83
            ],
            [
              87,
              52,
              84
            ],
            [
              84,
              86,
              87
            ],
            [
              52,
              63,
              84
            ],
            [
              88,
              53,
              81
            ],
            [
              62,
              81,
              60
            ],
            [
              89,
              60,
              81
            ],
            [
              89,
              81,
              63
            ],
            [
              56,
              81,
              53
            ],
            [
              81,
              62,
              61
            ],
            [
              81,
              61,
              88
            ],
            [
              48,
              87,
              86
            ],
            [
              86,
              47,
              48
            ],
            [
              47,
              86,
              85
            ],
            [
              85,
              46,
              47
            ],
            [
              48,
              30,
              52
            ],
            [
              52,
              87,
              48
            ]
          ]
        }
      ]
    }
    
    },{}],3:[function(require,module,exports){
    var perspective = require('gl-mat4/perspective')
    var multiply = require('gl-mat4/multiply')
    var lookAt = require('gl-mat4/lookAt')
    var invert = require('gl-mat4/invert')
    var rotate = require('gl-mat4/rotate')
    var transform = require('gl-vec3/transformMat4')
    var foxJSON = require('./fox.json')
    var colors = [
        '#01888C', // teal
      '#FC7500', // bright orange
      '#034F5D', // dark teal
      '#F73F01', // orangered
      '#FC1960', // magenta
      '#C7144C', // raspberry
      '#F3C100', // goldenrod
      '#1598F2', // lightning blue
      '#2465E1', // sail blue
      '#F19E02', // gold
    ]
    var MersenneTwister = require('mersenne-twister');
    
    var SVG_NS = 'http://www.w3.org/2000/svg'
    
    function createNode (type) {
      return document.createElementNS(SVG_NS, type)
    }
    
    function setAttribute (node, attribute, value) {
      node.setAttributeNS(null, attribute, value)
    }
    
    module.exports = function createLogo (options_) {
      var options = options_ || {}
    
      var followCursor = !!options.followMouse
      var followMotion = !!options.followMotion
      var slowDrift = !!options.slowDrift
      var colorSeed = options.colorSeed
      var twister
      if (colorSeed) {
        twister = new MersenneTwister(colorSeed)
      }
      var shouldRender = true
    
      var DISTANCE = 400
      var lookCurrent = [0, 0]
      var lookRate = 0.3
    
      var width = options.width || 400
      var height = options.height || 400
      var container = createNode('svg')
      var mouse = {
        x: 0,
        y: 0
      }
    
      var NUM_VERTS = foxJSON.positions.length
    
      var positions = new Float32Array(3 * NUM_VERTS)
      var transformed = new Float32Array(3 * NUM_VERTS)
    
      var toDraw = []
    
      if (!options.pxNotRatio) {
        width = (window.innerWidth * (options.width || 0.25)) | 0
        height = ((window.innerHeight * options.height) || width) | 0
    
        if ('minWidth' in options && width < options.minWidth) {
          width = options.minWidth
          height = (options.minWidth * options.height / options.width) | 0
        }
      }
    
      setAttribute(container, 'width', width + 'px')
      setAttribute(container, 'height', height + 'px')
    
      function setLookAt (target) {
        var bounds = container.getBoundingClientRect()
        mouse.x = 1.0 - 2.0 * (target.x - bounds.left) / bounds.width
        mouse.y = 1.0 - 2.0 * (target.y - bounds.top) / bounds.height
      }
    
      document.body.appendChild(container)
    
      ;(function () {
        var pp = foxJSON.positions
        var ptr = 0
        for (var i = 0; i < pp.length; ++i) {
          var p = pp[i]
          for (var j = 0; j < 3; ++j) {
            positions[ptr++] = p[j]
          }
        }
      })()
    
      function Polygon (svg, indices, chunk) {
        this.svg = svg
        this.indices = indices
        this.zIndex = 0
        this.chunk = chunk
      }
    
      var polygons = (function () {
        var polygons = []
        for (var i = 0; i < foxJSON.chunks.length; ++i) {
          var chunk = foxJSON.chunks[i]
    
          if (!chunk.polygons) {
            chunk.polygons = []
          }
    
          var color
          if (twister) {
            color = colors[Math.floor(twister.random() * colors.length)]
          } else {
            color = 'rgb(' + chunk.color + ')'
          }
          var faces = chunk.faces
          for (var j = 0; j < faces.length; ++j) {
            var f = faces[j]
            var polygon = createNode('polygon')
            setAttribute(
              polygon,
              'fill',
              color)
            setAttribute(
              polygon,
              'stroke',
              color)
            setAttribute(
              polygon,
              'points',
              '0,0, 10,0, 0,10')
            container.appendChild(polygon)
            const poly = new Polygon(polygon, f, chunk)
            polygons.push(poly)
            chunk.polygons.push(poly)
          }
        }
        return polygons
      })()
    
      var computeMatrix = (function () {
        var objectCenter = new Float32Array(3)
        var up = new Float32Array([0, 1, 0])
        var projection = new Float32Array(16)
        var model = new Float32Array(16)
        var view = lookAt(
          new Float32Array(16),
          new Float32Array([0, 0, DISTANCE]),
          objectCenter,
          up)
        var invView = invert(new Float32Array(16), view)
        var invProjection = new Float32Array(16)
        var target = new Float32Array(3)
        var transformed = new Float32Array(16)
    
        var X = new Float32Array([1, 0, 0])
        var Y = new Float32Array([0, 1, 0])
        var Z = new Float32Array([0, 0, 1])
    
        return function () {
          var rect = container.getBoundingClientRect()
          var viewportWidth = rect.width
          var viewportHeight = rect.height
          perspective(
            projection,
            Math.PI / 4.0,
            viewportWidth / viewportHeight,
            100.0,
            1000.0)
          invert(invProjection, projection)
          target[0] = lookCurrent[0]
          target[1] = lookCurrent[1]
          target[2] = 1.2
          transform(target, target, invProjection)
          transform(target, target, invView)
          lookAt(
            model,
            objectCenter,
            target,
            up)
          if (slowDrift) {
            var time = (Date.now() / 1000.0)
            rotate(model, model, 0.1 + (Math.sin(time / 3) * 0.2), X)
            rotate(model, model, -0.1 + (Math.sin(time / 2) * 0.03), Z)
            rotate(model, model, 0.5 + (Math.sin(time / 3) * 0.2), Y)
          }
    
          multiply(transformed, projection, view)
          multiply(transformed, transformed, model)
    
          return transformed
        }
      })()
    
      function updatePositions (M) {
        var m00 = M[0]
        var m01 = M[1]
        var m02 = M[2]
        var m03 = M[3]
        var m10 = M[4]
        var m11 = M[5]
        var m12 = M[6]
        var m13 = M[7]
        var m20 = M[8]
        var m21 = M[9]
        var m22 = M[10]
        var m23 = M[11]
        var m30 = M[12]
        var m31 = M[13]
        var m32 = M[14]
        var m33 = M[15]
    
        for (var i = 0; i < NUM_VERTS; ++i) {
          var x = positions[3 * i]
          var y = positions[3 * i + 1]
          var z = positions[3 * i + 2]
    
          var tw = x * m03 + y * m13 + z * m23 + m33
          transformed[3 * i] =
            (x * m00 + y * m10 + z * m20 + m30) / tw
          transformed[3 * i + 1] =
            (x * m01 + y * m11 + z * m21 + m31) / tw
          transformed[3 * i + 2] =
            (x * m02 + y * m12 + z * m22 + m32) / tw
        }
      }
    
      function compareZ (a, b) {
        return b.zIndex - a.zIndex
      }
    
      function updateFaces () {
        var i
        var rect = container.getBoundingClientRect()
        var w = rect.width
        var h = rect.height
        toDraw.length = 0
        for (i = 0; i < polygons.length; ++i) {
          var poly = polygons[i]
          var indices = poly.indices
    
          var i0 = indices[0]
          var i1 = indices[1]
          var i2 = indices[2]
          var ax = transformed[3 * i0]
          var ay = transformed[3 * i0 + 1]
          var bx = transformed[3 * i1]
          var by = transformed[3 * i1 + 1]
          var cx = transformed[3 * i2]
          var cy = transformed[3 * i2 + 1]
          var det = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax)
          if (det < 0) {
            continue
          }
    
          var points = []
          var zmax = -Infinity
          var zmin = Infinity
          var element = poly.svg
          for (var j = 0; j < 3; ++j) {
            var idx = indices[j]
            points.push(
              0.5 * w * (1.0 - transformed[3 * idx]) + ',' +
              0.5 * h * (1.0 - transformed[3 * idx + 1]))
            var z = transformed[3 * idx + 2]
            zmax = Math.max(zmax, z)
            zmin = Math.min(zmin, z)
          }
          poly.zIndex = zmax + 0.25 * zmin
          var joinedPoints = points.join(' ')
    
          if (joinedPoints.indexOf('NaN') === -1) {
            setAttribute(element, 'points', joinedPoints)
          }
    
          toDraw.push(poly)
        }
        toDraw.sort(compareZ)
        container.innerHTML = ''
        for (i = 0; i < toDraw.length; ++i) {
          container.appendChild(toDraw[i].svg)
        }
      }
    
      function stopAnimation () { shouldRender = false }
      function startAnimation () { shouldRender = true }
      function setFollowMouse (state) { followCursor = state }
      function setFollowMotion (state) { followMotion = state }
    
      window.addEventListener('mousemove', function (ev) {
        if (!shouldRender) { startAnimation() }
        if (followCursor) {
          setLookAt({
            x: ev.clientX,
            y: ev.clientY
          })
          renderScene()
        }
      })
    
      window.addEventListener('deviceorientation', function (event) {
        if (!shouldRender) { startAnimation() }
        if (followMotion) {
          // gamma: left to right
          const leftToRight = event.gamma
          // beta: front back motion
          const frontToBack = event.beta
          // x offset: needed to correct the intial position
          const xOffset = 200
          // y offset: needed to correct the intial position
          const yOffset = -300
          // acceleration
          const acceleration = 10
    
          setLookAt({
            x: xOffset + leftToRight * acceleration,
            y: yOffset + frontToBack * acceleration
          })
          renderScene()
        }
      })
    
      function renderScene () {
        if (!shouldRender) return
        window.requestAnimationFrame(renderScene)
    
        var li = (1.0 - lookRate)
        var bounds = container.getBoundingClientRect()
    
        lookCurrent[0] = li * lookCurrent[0] + lookRate * mouse.x
        lookCurrent[1] = li * lookCurrent[1] + lookRate * mouse.y + 0.085
    
        var matrix = computeMatrix()
        updatePositions(matrix)
        updateFaces()
        stopAnimation()
      }
    
      function recolor (opts) {
        const {
          colorSeed, // The seed from which to deterministically generate
          oddsOfPolygonVisibility, // 0 to 1, odds that a given polygon is visible.
          colorByBlock, // Whether polygons or blocks should be colored.
                        // Defaults to true.
          randomness, // 0 to 1, divergence from colorSeed result.
        } = opts
        
    
        var twister
        if (colorSeed) {
          twister = new MersenneTwister(colorSeed)
        }
    
        for(const chunk of foxJSON.chunks) {
          let color, opacity
          
          if (twister) {
            color = colors[Math.floor(twister.random() * colors.length)]
          } else {
            color = 'rgb(' + chunk.color + ')'
          }
    
          for (const polygon of chunk.polygons) {
    
            if (oddsOfPolygonVisibility !== undefined &&
              oddsOfPolygonVisibility < 1 && Math.random() > oddsOfPolygonVisibility) {
              opacity = '0.0'
            } else {
              opacity = '1'
            }
    
            setAttribute(polygon.svg, 'opacity', opacity)
            let localColor = color
            if (randomness && Math.random() < randomness) {
              localColor = colors[Math.floor(Math.random() * colors.length)]
            }
    
            setAttribute(
              polygon.svg,
              'fill',
              localColor)
              setAttribute(
                polygon.svg,
                'stroke',
                localColor)
          }
        }    
        renderScene()
      }
    
      renderScene()
    
      return {
        container: container,
        lookAt: setLookAt,
        recolor: recolor,
        setFollowMouse: setFollowMouse,
        setFollowMotion: setFollowMotion,
        stopAnimation: stopAnimation,
        startAnimation: startAnimation
      }
    }
    
    },{"./fox.json":2,"gl-mat4/invert":5,"gl-mat4/lookAt":6,"gl-mat4/multiply":7,"gl-mat4/perspective":8,"gl-mat4/rotate":9,"gl-vec3/transformMat4":10,"mersenne-twister":11}],4:[function(require,module,exports){
    module.exports = identity;
    
    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
    };
    },{}],5:[function(require,module,exports){
    module.exports = invert;
    
    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function invert(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
            a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
            a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
            a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],
    
            b00 = a00 * a11 - a01 * a10,
            b01 = a00 * a12 - a02 * a10,
            b02 = a00 * a13 - a03 * a10,
            b03 = a01 * a12 - a02 * a11,
            b04 = a01 * a13 - a03 * a11,
            b05 = a02 * a13 - a03 * a12,
            b06 = a20 * a31 - a21 * a30,
            b07 = a20 * a32 - a22 * a30,
            b08 = a20 * a33 - a23 * a30,
            b09 = a21 * a32 - a22 * a31,
            b10 = a21 * a33 - a23 * a31,
            b11 = a22 * a33 - a23 * a32,
    
            // Calculate the determinant
            det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    
        if (!det) { 
            return null; 
        }
        det = 1.0 / det;
    
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    
        return out;
    };
    },{}],6:[function(require,module,exports){
    var identity = require('./identity');
    
    module.exports = lookAt;
    
    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function lookAt(out, eye, center, up) {
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
            eyex = eye[0],
            eyey = eye[1],
            eyez = eye[2],
            upx = up[0],
            upy = up[1],
            upz = up[2],
            centerx = center[0],
            centery = center[1],
            centerz = center[2];
    
        if (Math.abs(eyex - centerx) < 0.000001 &&
            Math.abs(eyey - centery) < 0.000001 &&
            Math.abs(eyez - centerz) < 0.000001) {
            return identity(out);
        }
    
        z0 = eyex - centerx;
        z1 = eyey - centery;
        z2 = eyez - centerz;
    
        len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    
        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
        if (!len) {
            x0 = 0;
            x1 = 0;
            x2 = 0;
        } else {
            len = 1 / len;
            x0 *= len;
            x1 *= len;
            x2 *= len;
        }
    
        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;
    
        len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
        if (!len) {
            y0 = 0;
            y1 = 0;
            y2 = 0;
        } else {
            len = 1 / len;
            y0 *= len;
            y1 *= len;
            y2 *= len;
        }
    
        out[0] = x0;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;
        out[4] = x1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;
        out[8] = x2;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;
        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;
    
        return out;
    };
    },{"./identity":4}],7:[function(require,module,exports){
    module.exports = multiply;
    
    /**
     * Multiplies two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function multiply(out, a, b) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
            a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
            a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
            a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    
        // Cache only the current line of the second matrix
        var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
        out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    
        b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
        out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    
        b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
        out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    
        b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
        out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
        out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
        out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
        out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
        return out;
    };
    },{}],8:[function(require,module,exports){
    module.exports = perspective;
    
    /**
     * Generates a perspective projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function perspective(out, fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(fovy / 2),
            nf = 1 / (near - far);
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = (2 * far * near) * nf;
        out[15] = 0;
        return out;
    };
    },{}],9:[function(require,module,exports){
    module.exports = rotate;
    
    /**
     * Rotates a mat4 by the given angle
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function rotate(out, a, rad, axis) {
        var x = axis[0], y = axis[1], z = axis[2],
            len = Math.sqrt(x * x + y * y + z * z),
            s, c, t,
            a00, a01, a02, a03,
            a10, a11, a12, a13,
            a20, a21, a22, a23,
            b00, b01, b02,
            b10, b11, b12,
            b20, b21, b22;
    
        if (Math.abs(len) < 0.000001) { return null; }
        
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
    
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;
    
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];
    
        // Construct the elements of the rotation matrix
        b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
        b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
        b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;
    
        // Perform rotation-specific matrix multiplication
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    
        if (a !== out) { // If the source and destination differ, copy the unchanged last row
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
        }
        return out;
    };
    },{}],10:[function(require,module,exports){
    module.exports = transformMat4;
    
    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */
    function transformMat4(out, a, m) {
        var x = a[0], y = a[1], z = a[2],
            w = m[3] * x + m[7] * y + m[11] * z + m[15]
        w = w || 1.0
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
        return out
    }
    },{}],11:[function(require,module,exports){
    /*
      https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
      so it's better encapsulated. Now you can have multiple random number generators
      and they won't stomp all over eachother's state.
    
      If you want to use this as a substitute for Math.random(), use the random()
      method like so:
    
      var m = new MersenneTwister();
      var randomNumber = m.random();
    
      You can also call the other genrand_{foo}() methods on the instance.
    
      If you want to use a specific seed in order to get a repeatable random
      sequence, pass an integer into the constructor:
    
      var m = new MersenneTwister(123);
    
      and that will always produce the same random sequence.
    
      Sean McCullough (banksean@gmail.com)
    */
    
    /*
       A C-program for MT19937, with initialization improved 2002/1/26.
       Coded by Takuji Nishimura and Makoto Matsumoto.
    
       Before using, initialize the state by using init_seed(seed)
       or init_by_array(init_key, key_length).
    
       Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
       All rights reserved.
    
       Redistribution and use in source and binary forms, with or without
       modification, are permitted provided that the following conditions
       are met:
    
         1. Redistributions of source code must retain the above copyright
            notice, this list of conditions and the following disclaimer.
    
         2. Redistributions in binary form must reproduce the above copyright
            notice, this list of conditions and the following disclaimer in the
            documentation and/or other materials provided with the distribution.
    
         3. The names of its contributors may not be used to endorse or promote
            products derived from this software without specific prior written
            permission.
    
       THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
       "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
       LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
       A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
       CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
       EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
       PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
       PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
       LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
       NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
       SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    
    
       Any feedback is very welcome.
       http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
       email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
    */
    
    var MersenneTwister = function(seed) {
        if (seed == undefined) {
            seed = new Date().getTime();
        }
    
        /* Period parameters */
        this.N = 624;
        this.M = 397;
        this.MATRIX_A = 0x9908b0df;   /* constant vector a */
        this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
        this.LOWER_MASK = 0x7fffffff; /* least significant r bits */
    
        this.mt = new Array(this.N); /* the array for the state vector */
        this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */
    
        if (seed.constructor == Array) {
            this.init_by_array(seed, seed.length);
        }
        else {
            this.init_seed(seed);
        }
    }
    
    /* initializes mt[N] with a seed */
    /* origin name init_genrand */
    MersenneTwister.prototype.init_seed = function(s) {
        this.mt[0] = s >>> 0;
        for (this.mti=1; this.mti<this.N; this.mti++) {
            var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
            this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
            + this.mti;
            /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
            /* In the previous versions, MSBs of the seed affect   */
            /* only MSBs of the array mt[].                        */
            /* 2002/01/09 modified by Makoto Matsumoto             */
            this.mt[this.mti] >>>= 0;
            /* for >32 bit machines */
        }
    }
    
    /* initialize by an array with array-length */
    /* init_key is the array for initializing keys */
    /* key_length is its length */
    /* slight change for C++, 2004/2/26 */
    MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
        var i, j, k;
        this.init_seed(19650218);
        i=1; j=0;
        k = (this.N>key_length ? this.N : key_length);
        for (; k; k--) {
            var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30)
            this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
            + init_key[j] + j; /* non linear */
            this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
            i++; j++;
            if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
            if (j>=key_length) j=0;
        }
        for (k=this.N-1; k; k--) {
            var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
            this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
            - i; /* non linear */
            this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
            i++;
            if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
        }
    
        this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
    }
    
    /* generates a random number on [0,0xffffffff]-interval */
    /* origin name genrand_int32 */
    MersenneTwister.prototype.random_int = function() {
        var y;
        var mag01 = new Array(0x0, this.MATRIX_A);
        /* mag01[x] = x * MATRIX_A  for x=0,1 */
    
        if (this.mti >= this.N) { /* generate N words at one time */
            var kk;
    
            if (this.mti == this.N+1)  /* if init_seed() has not been called, */
                this.init_seed(5489);  /* a default initial seed is used */
    
            for (kk=0;kk<this.N-this.M;kk++) {
                y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
                this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
            }
            for (;kk<this.N-1;kk++) {
                y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
                this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
            }
            y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
            this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];
    
            this.mti = 0;
        }
    
        y = this.mt[this.mti++];
    
        /* Tempering */
        y ^= (y >>> 11);
        y ^= (y << 7) & 0x9d2c5680;
        y ^= (y << 15) & 0xefc60000;
        y ^= (y >>> 18);
    
        return y >>> 0;
    }
    
    /* generates a random number on [0,0x7fffffff]-interval */
    /* origin name genrand_int31 */
    MersenneTwister.prototype.random_int31 = function() {
        return (this.random_int()>>>1);
    }
    
    /* generates a random number on [0,1]-real-interval */
    /* origin name genrand_real1 */
    MersenneTwister.prototype.random_incl = function() {
        return this.random_int()*(1.0/4294967295.0);
        /* divided by 2^32-1 */
    }
    
    /* generates a random number on [0,1)-real-interval */
    MersenneTwister.prototype.random = function() {
        return this.random_int()*(1.0/4294967296.0);
        /* divided by 2^32 */
    }
    
    /* generates a random number on (0,1)-real-interval */
    /* origin name genrand_real3 */
    MersenneTwister.prototype.random_excl = function() {
        return (this.random_int() + 0.5)*(1.0/4294967296.0);
        /* divided by 2^32 */
    }
    
    /* generates a random number on [0,1) with 53-bit resolution*/
    /* origin name genrand_res53 */
    MersenneTwister.prototype.random_long = function() {
        var a=this.random_int()>>>5, b=this.random_int()>>>6;
        return(a*67108864.0+b)*(1.0/9007199254740992.0);
    }
    
    /* These real versions are due to Isaku Wada, 2002/01/09 added */
    
    module.exports = MersenneTwister;
    
    },{}]},{},[1]);