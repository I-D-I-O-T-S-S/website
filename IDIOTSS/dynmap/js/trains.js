"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x2 + '" is not supported');
  });

  // src/polyfill.ts
  window.require = (module) => {
    return {
      leaflet: L,
      jquery: $
    }[module];
  };

  // node_modules/.pnpm/@elfalem+leaflet-curve@0.9.2_leaflet@1.9.4/node_modules/@elfalem/leaflet-curve/dist/leaflet.curve.js
  L.Curve = L.Path.extend({ options: {}, initialize: function(t, n) {
    L.setOptions(this, n), this._setPath(t);
  }, setLatLngs: function(t) {
    return this.setPath(t);
  }, getLatLngs: function() {
    return this.getPath();
  }, _updateBounds: function() {
    var t = this._clickTolerance(), n = new L.Point(t, t);
    this._pxBounds = new L.Bounds([this._rawPxBounds.min.subtract(n), this._rawPxBounds.max.add(n)]);
  }, getPath: function() {
    return this._coords;
  }, setPath: function(t) {
    return this._setPath(t), this.redraw();
  }, getBounds: function() {
    return this._bounds;
  }, _setPath: function(t) {
    this._coords = t, this._bounds = this._computeBounds();
  }, _computeBounds: function() {
    for (var t, n, i, e = new L.LatLngBounds(), a = 0; a < this._coords.length; a++)
      if ("string" == typeof (i = this._coords[a]) || i instanceof String)
        n = i;
      else if ("H" == n)
        e.extend([t.lat, i[0]]), t = new L.latLng(t.lat, i[0]);
      else if ("V" == n)
        e.extend([i[0], t.lng]), t = new L.latLng(i[0], t.lng);
      else if ("C" == n) {
        var s = new L.latLng(i[0], i[1]);
        i = this._coords[++a];
        var o = new L.latLng(i[0], i[1]);
        i = this._coords[++a];
        var r = new L.latLng(i[0], i[1]);
        e.extend(s), e.extend(o), e.extend(r), r.controlPoint1 = s, r.controlPoint2 = o, t = r;
      } else if ("S" == n) {
        if (o = new L.latLng(i[0], i[1]), i = this._coords[++a], r = new L.latLng(i[0], i[1]), s = t, t.controlPoint2) {
          var h = t.lat - t.controlPoint2.lat, c = t.lng - t.controlPoint2.lng;
          s = new L.latLng(t.lat + h, t.lng + c);
        }
        e.extend(s), e.extend(o), e.extend(r), r.controlPoint1 = s, r.controlPoint2 = o, t = r;
      } else if ("Q" == n) {
        var l = new L.latLng(i[0], i[1]);
        i = this._coords[++a], r = new L.latLng(i[0], i[1]), e.extend(l), e.extend(r), r.controlPoint = l, t = r;
      } else
        "T" == n ? (r = new L.latLng(i[0], i[1]), l = t, t.controlPoint && (h = t.lat - t.controlPoint.lat, c = t.lng - t.controlPoint.lng, l = new L.latLng(t.lat + h, t.lng + c)), e.extend(l), e.extend(r), r.controlPoint = l, t = r) : (e.extend(i), t = new L.latLng(i[0], i[1]));
    return e;
  }, getCenter: function() {
    return this._bounds.getCenter();
  }, _update: function() {
    this._map && this._updatePath();
  }, _updatePath: function() {
    this._usingCanvas ? this._updateCurveCanvas() : this._updateCurveSvg();
  }, _project: function() {
    var t, n, i, e;
    this._points = [];
    for (var a = 0; a < this._coords.length; a++)
      if ("string" == typeof (t = this._coords[a]) || t instanceof String)
        this._points.push(t), i = t;
      else {
        switch (t.length) {
          case 2:
            e = this._map.latLngToLayerPoint(t), n = t;
            break;
          case 1:
            "H" == i ? (e = this._map.latLngToLayerPoint([n[0], t[0]]), n = [n[0], t[0]]) : (e = this._map.latLngToLayerPoint([t[0], n[1]]), n = [t[0], n[1]]);
        }
        this._points.push(e);
      }
    if (this._bounds.isValid()) {
      var s = this._map.latLngToLayerPoint(this._bounds.getNorthWest()), o = this._map.latLngToLayerPoint(this._bounds.getSouthEast());
      this._rawPxBounds = new L.Bounds(s, o), this._updateBounds();
    }
  }, _curvePointsToPath: function(t) {
    for (var n, i, e = "", a = 0; a < t.length; a++)
      if ("string" == typeof (n = t[a]) || n instanceof String)
        e += i = n;
      else
        switch (i) {
          case "H":
            e += n.x + " ";
            break;
          case "V":
            e += n.y + " ";
            break;
          default:
            e += n.x + "," + n.y + " ";
        }
    return e || "M0 0";
  }, beforeAdd: function(t) {
    L.Path.prototype.beforeAdd.call(this, t), this._usingCanvas = this._renderer instanceof L.Canvas, this._usingCanvas && (this._pathSvgElement = document.createElementNS("http://www.w3.org/2000/svg", "path"));
  }, onAdd: function(t) {
    if (this._usingCanvas && (this._canvasSetDashArray = !this.options.dashArray), L.Path.prototype.onAdd.call(this, t), this._usingCanvas)
      this.options.animate && "object" == typeof TWEEN ? (this._normalizeCanvasAnimationOptions(), this._tweenedObject = { offset: this._pathSvgElement.getTotalLength() }, this._tween = new TWEEN.Tween(this._tweenedObject).to({ offset: 0 }, this.options.animate.duration).delay(this.options.animate.delay).repeat(this.options.animate.iterations - 1).onComplete((i = this, function() {
        i._canvasAnimating = false;
      })).start(), this._canvasAnimating = true, this._animateCanvas()) : this._canvasAnimating = false;
    else if (this.options.animate && this._path.animate) {
      var n = Math.min(this._svgSetDashArray(), 1e3);
      this._path.pathLength.baseVal = n, this._path.animate([{ strokeDashoffset: n }, { strokeDashoffset: 0 }], this.options.animate);
    }
    var i;
  }, _updateCurveSvg: function() {
    this._renderer._setPath(this, this._curvePointsToPath(this._points)), this.options.animate && this._svgSetDashArray();
  }, _svgSetDashArray: function() {
    var t = this._path, n = t.getTotalLength();
    return this.options.dashArray || (t.style.strokeDasharray = n + " " + n), n;
  }, _containsPoint: function(t) {
    return !!this._bounds.isValid() && this._bounds.contains(this._map.layerPointToLatLng(t));
  }, _normalizeCanvasAnimationOptions: function() {
    var t = { delay: 0, duration: 0, iterations: 1 };
    "number" == typeof this.options.animate ? t.duration = this.options.animate : (this.options.animate.duration && (t.duration = this.options.animate.duration), this.options.animate.delay && (t.delay = this.options.animate.delay), this.options.animate.iterations && (t.iterations = this.options.animate.iterations)), this.options.animate = t;
  }, _updateCurveCanvas: function() {
    var t = this._curvePointsToPath(this._points);
    this._pathSvgElement.setAttribute("d", t), this.options.animate && "object" == typeof TWEEN && this._canvasSetDashArray && (this.options.dashArray = this._pathSvgElement.getTotalLength() + "", this._renderer._updateDashArray(this)), this._curveFillStroke(new Path2D(t), this._renderer._ctx);
  }, _animateCanvas: function() {
    TWEEN.update(), this._renderer._updatePaths(), this._canvasAnimating && (this._animationFrameId = L.Util.requestAnimFrame(this._animateCanvas, this));
  }, _curveFillStroke: function(t, n) {
    n.lineDashOffset = this._canvasAnimating ? this._tweenedObject.offset : 0;
    var i = this.options;
    i.fill && (n.globalAlpha = i.fillOpacity, n.fillStyle = i.fillColor || i.color, n.fill(t, i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (n.setLineDash && n.setLineDash(this.options && this.options._dashArray || []), n.globalAlpha = i.opacity, n.lineWidth = i.weight, n.strokeStyle = i.color, n.lineCap = i.lineCap, n.lineJoin = i.lineJoin, n.stroke(t));
  }, trace: function(t) {
    if (void 0 === this._map || null === this._map)
      return [];
    var n, i, e, a, s, o, r;
    t = t.filter(function(t2) {
      return t2 >= 0 && t2 <= 1;
    });
    for (var h = [], c = 0; c < this._points.length; c++)
      if ("string" == typeof (n = this._points[c]) || n instanceof String)
        "Z" == (i = n) && (h = h.concat(this._linearTrace(t, a, e)));
      else
        switch (i) {
          case "M":
            e = n, a = n;
            break;
          case "L":
          case "H":
          case "V":
            h = h.concat(this._linearTrace(t, a, n)), a = n;
            break;
          case "C":
            s = n, o = this._points[++c], r = this._points[++c], h = h.concat(this._cubicTrace(t, a, s, o, r)), a = r;
            break;
          case "S":
            s = this._reflectPoint(o, a), o = n, r = this._points[++c], h = h.concat(this._cubicTrace(t, a, s, o, r)), a = r;
            break;
          case "Q":
            s = n, o = this._points[++c], h = h.concat(this._quadraticTrace(t, a, s, o)), a = o;
            break;
          case "T":
            s = this._reflectPoint(s, a), o = n, h = h.concat(this._quadraticTrace(t, a, s, o)), a = o;
        }
    return h;
  }, _linearTrace: function(t, n, i) {
    return t.map((t2) => {
      var e = this._singleLinearTrace(t2, n.x, i.x), a = this._singleLinearTrace(t2, n.y, i.y);
      return this._map.layerPointToLatLng([e, a]);
    });
  }, _quadraticTrace: function(t, n, i, e) {
    return t.map((t2) => {
      var a = this._singleQuadraticTrace(t2, n.x, i.x, e.x), s = this._singleQuadraticTrace(t2, n.y, i.y, e.y);
      return this._map.layerPointToLatLng([a, s]);
    });
  }, _cubicTrace: function(t, n, i, e, a) {
    return t.map((t2) => {
      var s = this._singleCubicTrace(t2, n.x, i.x, e.x, a.x), o = this._singleCubicTrace(t2, n.y, i.y, e.y, a.y);
      return this._map.layerPointToLatLng([s, o]);
    });
  }, _singleLinearTrace: function(t, n, i) {
    return n + t * (i - n);
  }, _singleQuadraticTrace: function(t, n, i, e) {
    var a = 1 - t;
    return Math.pow(a, 2) * n + 2 * a * t * i + Math.pow(t, 2) * e;
  }, _singleCubicTrace: function(t, n, i, e, a) {
    var s = 1 - t;
    return Math.pow(s, 3) * n + 3 * Math.pow(s, 2) * t * i + 3 * s * Math.pow(t, 2) * e + Math.pow(t, 3) * a;
  }, _reflectPoint: function(t, n) {
    return x = n.x + (n.x - t.x), y = n.y + (n.y - t.y), L.point(x, y);
  } }), L.curve = function(t, n) {
    return new L.Curve(t, n);
  };

  // src/index.ts
  var import_jquery = __require("jquery");

  // src/Stream.ts
  var Stream = class {
    constructor(url) {
      this.url = url;
    }
    #events = null;
    #listeners = /* @__PURE__ */ new Set();
    connect() {
      this.disconnect();
      this.#events = new EventSource(this.url);
      this.#events.onmessage = (ev) => {
        this.#onMessage(JSON.parse(ev.data));
      };
      return new Promise((resolve, reject) => {
        const _end = () => {
          this.#events?.removeEventListener("open", _resolve);
          this.#events?.removeEventListener("error", _reject);
          return true;
        };
        const _resolve = () => _end() && resolve();
        const _reject = (e) => _end() && reject(e);
        this.#events?.addEventListener("open", _resolve, { once: true });
        this.#events?.addEventListener("error", _reject, { once: true });
      });
    }
    disconnect() {
      if (this.#events && this.#events.readyState != this.#events.CLOSED) {
        this.#events.close();
      }
      this.#events = null;
    }
    #onMessage(data) {
      for (const callback of this.#listeners)
        callback(data);
    }
    onMessage(callback) {
      return this.#listeners.add(callback);
    }
    off(callback) {
      return this.#listeners.delete(callback);
    }
  };

  // src/utils/Vector.ts
  var Vector = class _Vector {
    x = 0;
    y = 0;
    z = 0;
    constructor(init, y2, z) {
      if (init != void 0) {
        if (typeof init === "number") {
          if (y2 === void 0) {
            this.x = this.y = this.z = init;
          } else {
            this.x = init;
            this.y = y2;
            this.z = z ?? 0;
          }
        } else if ("x" in init) {
          Object.assign(this, init);
        } else if ("lat" in init) {
          this.x = init.lat;
          this.y = init.alt ?? 0;
          this.z = init.lng;
        } else {
          this.x = init[0];
          this.y = init[1];
          this.z = init[2];
        }
      }
    }
    /** Always return a vector from given value */
    #coerce(init) {
      if (init instanceof _Vector)
        return init;
      return new _Vector(init);
    }
    /** Calculate the pythagoras length of the vector  */
    getLength() {
      return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
    /** Calculate current horizontal angle of the vector */
    getAngle() {
      const angle = Math.atan2(this.x, this.z);
      return 180 * angle / Math.PI;
    }
    /** Convert this vector to a LatLng object on given Dynmap */
    toLatLng(dynmap) {
      return dynmap.getProjection().fromLocationToLatLng(this);
    }
    /** Convert this vector to an array consting of lat and lng on given dynmap */
    toLatLngArray(dynmap) {
      const latLng = this.toLatLng(dynmap);
      return [latLng.lat, latLng.lng];
    }
    /** Return a copy of this vector but horizontally perpendicular to itself */
    toPerpendicular() {
      return new _Vector(-this.z, this.y, this.x);
    }
    /** Returns a copy of the vector but horizontally flipped */
    toFlipped() {
      return this.multiply([-1, 1, -1]);
    }
    /** Return a new vector thats result of adding given vector/scalar to this vector */
    add(vector) {
      const _vector = this.#coerce(vector);
      return new _Vector(this.x + _vector.x, this.y + _vector.y, this.z + _vector.z);
    }
    /** Return a new vector thats result of substracting given vector/scalar from this vector */
    substract(vector) {
      const _vector = this.#coerce(vector);
      return new _Vector(this.x - _vector.x, this.y - _vector.y, this.z - _vector.z);
    }
    /** Return a new vector thats result of multipliying this vector by given vector/scalar */
    multiply(vector) {
      const _vector = this.#coerce(vector);
      return new _Vector(this.x * _vector.x, this.y * _vector.y, this.z * _vector.z);
    }
    /** Return a new vector thats result of dividing this vector by given vector/scalar */
    divide(vector) {
      const _vector = this.#coerce(vector);
      return new _Vector(this.x / _vector.x, this.y / _vector.y, this.z / _vector.z);
    }
    /** Returns whether or not is the vector equal to given vector */
    equals(vector) {
      const _vector = this.#coerce(vector);
      return this.x == _vector.x && this.y == _vector.y && this.z == _vector.z;
    }
    /** Rotate vector around the Y axis. Modifies IN PLACE and returns the same vector
     * @param angle The angle in degrees
     */
    rotate(angle) {
      angle = -angle * (Math.PI / 180);
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x2 = this.x;
      const z = this.z;
      this.x = x2 * cos - z * sin;
      this.z = x2 * sin + z * cos;
      return this;
    }
    /** Make this into a unit vector. Modifies IN PLACE and returns the same vector */
    normalise() {
      const length = this.getLength();
      this.x /= length;
      this.y /= length;
      this.z /= length;
      return this;
    }
  };

  // src/utils/index.ts
  function getMapForDimension(dimension, dynmap, config) {
    const worldName = Object.entries(config.worlds).find(([_, v]) => v == dimension)?.[0];
    const world = worldName ? dynmap.worlds[worldName] : null;
    return world.maps[dynmap.maptype.options.name] ?? world.maps[Object.keys(world.maps)[0]];
  }

  // src/types/Renderer.ts
  var Renderer = class {
    constructor(dynmap, config) {
      this.dynmap = dynmap;
      this.config = config;
    }
  };

  // src/renderers/TrackBlockRenderer.ts
  var TrackBlockRenderer = class extends Renderer {
    render(block) {
      const commands = [];
      let lastPoint = null;
      const ll = (v) => v.toLatLngArray(this.dynmap);
      for (const segment of block.segments) {
        const points = segment.path.map((v) => new Vector(v));
        if (segment.dimension != this.config.worlds[this.dynmap.world.name])
          continue;
        if (!lastPoint?.equals(points[0])) {
          commands.push("M", ll(points[0]));
        }
        if (points.length == 2) {
          commands.push("L", ll(points[1]));
          lastPoint = points[1];
        } else {
          commands.push("C", ll(points[1]), ll(points[2]), ll(points[3]));
          lastPoint = points[3];
        }
      }
      if (!commands.length)
        return;
      return new L.LayerGroup([
        // Shadow line
        L.curve(commands, {
          lineCap: this.config.trackSeparationOutline ? "square" : "butt",
          color: "black",
          opacity: 0.25,
          interactive: false
        }),
        // The actual line
        L.curve(commands, {
          lineCap: "square",
          interactive: false
        })
      ]);
    }
    update(block, object) {
      const curves = object.getLayers();
      if (!curves.length)
        return;
      let color = "var(--track-free)";
      if (block.occupied)
        color = "var(--track-occupied)";
      else if (block.reserved)
        color = "var(--track-reserved)";
      const lineWidth = this.dynmap.map.getZoom() * this.config.trackWidth;
      const shadowWidth = this.dynmap.map.getZoom() * (this.config.trackWidth + this.config.trackOutline);
      curves[0].setStyle({ weight: shadowWidth });
      curves[1].setStyle({ color, weight: lineWidth });
    }
  };

  // src/renderers/TrainRenderer.ts
  var TRAIN_OFFSET = { x: 0, y: -1, z: 0 };
  var TrainRenderer = class extends Renderer {
    render(train) {
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute("viewBox", "0 0 200 200");
      svgElement.innerHTML = '<g><g transform="rotate(-90)"></g></g>';
      const object = L.svgOverlay(
        svgElement,
        [
          [0, 0],
          [0, 0]
        ],
        {
          interactive: true,
          pane: "ctm-trains"
        }
      );
      object.bindTooltip(
        [
          `<small>${this.config.labels.train}</small>`,
          `<b>${train.name}</b>`,
          train.owner ? `${this.config.labels.owner}: ${train.owner}` : ""
        ].join("<br>")
      );
      return object;
    }
    update(train, object) {
      const svgElement = object.getElement();
      const outerG = svgElement.childNodes[0];
      const innerG = outerG.childNodes[0];
      for (let i = 0; i < train.cars.length; i++) {
        const car = train.cars[i];
        if (car.leading?.dimension != this.config.worlds[this.dynmap.world.name] || car.trailing?.dimension != this.config.worlds[this.dynmap.world.name])
          continue;
        let viewPath = innerG.childNodes[i * 2];
        let calcPath = innerG.childNodes[i * 2 + 1];
        if (!viewPath) {
          viewPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
          calcPath = viewPath.cloneNode();
          calcPath.style.opacity = "0";
          innerG.appendChild(viewPath);
          innerG.appendChild(calcPath);
        }
        const leading = new Vector(car.leading.location);
        const trailing = new Vector(car.trailing.location);
        const vector = leading.substract(trailing).normalise();
        const offset = vector.multiply(0.5);
        const negOffset = offset.toFlipped();
        const offsetPerp = vector.toPerpendicular().multiply(this.config.trainWidth * 0.5);
        const negOffsetPerp = offsetPerp.toFlipped();
        const points = [
          leading.add(offsetPerp.add(offset)),
          leading.add(negOffsetPerp.add(offset)),
          trailing.add(negOffsetPerp.add(negOffset)),
          trailing.add(offsetPerp.add(negOffset))
        ];
        let isLead = false;
        if (!train.stopped) {
          if (train.backwards && i == train.cars.length - 1) {
            points.splice(3, 0, trailing.add(vector.toFlipped().multiply(this.config.trainWidth)));
            isLead = true;
          } else if (!train.backwards && i == 0) {
            points.splice(1, 0, leading.add(vector.multiply(this.config.trainWidth)));
            isLead = true;
          }
        }
        viewPath.style.transition = `all ${Math.min(1, this.config.updateInterval)}s linear`;
        viewPath.style.fill = isLead ? "var(--lead-car-color)" : "var(--train-color)";
        const d = points.map((v, i2) => {
          const _v = v.add(TRAIN_OFFSET).toLatLng(this.dynmap);
          return `${i2 ? "L" : "M"} ${_v.lat},${_v.lng}`;
        }).join(" ");
        viewPath.setAttribute("d", d);
        calcPath.setAttribute("d", d);
      }
      const startLatLng = new Vector(train.cars[0].leading.location).toLatLng(this.dynmap);
      const outerBox = outerG.getBBox();
      const innerBbox = innerG.getBBox();
      svgElement.setAttribute("viewBox", `${outerBox.x} ${outerBox.y} ${outerBox.width} ${outerBox.height}`);
      outerG.setAttribute(
        "transform-origin",
        `${innerBbox.x + innerBbox.width / 2} ${innerBbox.y + innerBbox.height / 2}`
      );
      object.setBounds(
        L.latLngBounds([
          L.latLng(innerBbox.x, innerBbox.y, startLatLng.alt),
          L.latLng(innerBbox.x + innerBbox.width, innerBbox.y + innerBbox.height, startLatLng.alt)
        ])
      );
    }
  };

  // src/utils/NamedLayerGroup.ts
  var NamedLayerGroupBase = L.LayerGroup;
  var NamedLayerGroup = class extends NamedLayerGroupBase {
    #layers = /* @__PURE__ */ new Map();
    addLayer(name, layer) {
      if (this.#layers.has(name))
        throw new Error(`Layer named '${name}' already exists`);
      this.#layers.set(name, layer);
      return L.LayerGroup.prototype.addLayer.call(this, layer);
    }
    getLayer(name) {
      return this.#layers.get(name);
    }
    removeLayer(name) {
      const layer = this.#layers.get(name);
      if (!layer)
        return;
      this.#layers.delete(name);
      return L.LayerGroup.prototype.removeLayer.call(this, layer);
    }
  };

  // src/renderers/SignalRenderer.ts
  var SIGNAL_SCALE = 5;
  var SIGNAL_DIRECTIONS = ["forward", "reverse"];
  var SignalRenderer = class extends Renderer {
    render(signalPair) {
      if (signalPair.dimension != this.config.worlds[this.dynmap.world.name])
        return;
      const group = new NamedLayerGroup();
      for (const direction of SIGNAL_DIRECTIONS) {
        const signal = signalPair[direction];
        if (!signal)
          continue;
        const vector = new Vector(1, 0, 0).rotate(-signal.angle);
        const offset = vector.multiply(2).substract(vector.toPerpendicular());
        const position = new Vector(signalPair.location).add(offset);
        const location = new Vector(new Vector(signalPair.location).toLatLng(this.dynmap));
        const offsettedLoc = new Vector(new Vector(signalPair.location).add(vector).toLatLng(this.dynmap));
        const angle3d = offsettedLoc.substract(location).getAngle();
        const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.setAttribute("viewBox", "0 0 150 150");
        svgElement.innerHTML = `
        <g stroke="black" transform="rotate(${-angle3d})" transform-origin="75 75">
          <circle cx="75" cy="75" r="40" stroke-width="10" style="transition: fill 0.3s" />
          <polyline points="35,115 115,115" stroke-width="15" stroke-linecap="round" /> 
        </g>
      `;
        const layer = L.svgOverlay(svgElement, position.toLatLng(this.dynmap).toBounds(SIGNAL_SCALE * 1e4));
        group.addLayer(direction, layer);
      }
      return group;
    }
    update(signalPair, object) {
      for (const direction of SIGNAL_DIRECTIONS) {
        const signal = signalPair[direction];
        if (!signal)
          continue;
        const svgOverlay = object.getLayer(direction);
        if (!svgOverlay)
          continue;
        const svgElement = svgOverlay.getElement();
        if (!svgElement)
          continue;
        const g = svgElement.children[0];
        g.style.fill = {
          GREEN: "var(--signal-green)",
          YELLOW: "var(--signal-yellow)",
          RED: "var(--signal-red)"
        }[signal.state];
      }
    }
  };

  // src/renderers/PortalRenderer.ts
  var PortalRenderer = class extends Renderer {
    render(portal) {
      if (portal.from.dimension != this.config.worlds[this.dynmap.world.name])
        return;
      const position = new Vector(portal.from.location).toLatLng(this.dynmap);
      const img = L.imageOverlay(this.dynmap.options.url.markers + "_markers_/portal.png", position.toBounds(6e4), {
        pane: "markerPane",
        alt: "Portal",
        interactive: true
      });
      const target = getMapForDimension(portal.to.dimension, this.dynmap, this.config);
      img.bindTooltip(this.config.labels.portal + (target?.options.world.title ?? portal.to.dimension), {});
      if (target) {
        img.on("click", () => {
          this.dynmap.selectMapAndPan(target, portal.to.location);
        });
      }
      return img;
    }
    update() {
    }
  };

  // src/renderers/StationRenderer.ts
  var StationRenderer = class extends Renderer {
    render(station) {
      if (station.dimension != this.config.worlds[this.dynmap.world.name])
        return;
      const vector = new Vector(-1, 0, 0).rotate(-station.angle);
      const sideOffset = vector.multiply(2);
      const sideOffsetFlipped = sideOffset.toFlipped();
      const frontOffset = vector.toPerpendicular().multiply(1.5);
      const frontOffsetFlipped = frontOffset.toFlipped();
      const location = new Vector(station.location);
      const points = [
        location.add(sideOffset.add(frontOffset)),
        location.add(frontOffset.multiply(2)),
        location.add(sideOffsetFlipped.add(frontOffset)),
        location.add(sideOffsetFlipped.add(frontOffsetFlipped)),
        location.add(sideOffset.add(frontOffsetFlipped))
      ];
      const polygon = L.polygon(
        points.map((v) => v.toLatLng(this.dynmap)),
        {
          fillColor: "var(--station-color)",
          fillOpacity: 0.5,
          color: "var(--station-outline)",
          pane: "ctm-stations"
        }
      );
      polygon.bindTooltip(
        [
          `<small>${this.config.labels.station}</small>`,
          `<b>${station.name}</b>`,
          `${this.config.labels.assembling}: ${station.assembling}`
        ].join("<br>")
      );
      return polygon;
    }
    update() {
    }
  };

  // src/RenderManager.ts
  var BATCH_SIZE = 256;
  var RenderManager = class {
    #streams;
    #objects = {
      blocks: /* @__PURE__ */ new Map(),
      signals: /* @__PURE__ */ new Map(),
      stations: /* @__PURE__ */ new Map(),
      trains: /* @__PURE__ */ new Map(),
      portals: /* @__PURE__ */ new Map()
    };
    #layers = {
      blocks: L.layerGroup(),
      signals: L.layerGroup(),
      stations: L.layerGroup(),
      trains: L.layerGroup(),
      portals: L.layerGroup()
    };
    #cache = {
      blocks: [],
      signals: [],
      stations: [],
      trains: [],
      portals: []
    };
    #timeouts = {
      blocks: void 0,
      signals: void 0,
      stations: void 0,
      trains: void 0,
      portals: void 0
    };
    #renderers;
    #lastTrainsUpdate = 0;
    constructor(dynmap, config) {
      this.#streams = {
        network: new Stream(config.baseUrl + "/api/network.rt"),
        signals: new Stream(config.baseUrl + "/api/signals.rt"),
        blocks: new Stream(config.baseUrl + "/api/blocks.rt"),
        trains: new Stream(config.baseUrl + "/api/trains.rt")
      };
      this.#renderers = {
        signals: new SignalRenderer(dynmap, config),
        stations: new StationRenderer(dynmap, config),
        blocks: new TrackBlockRenderer(dynmap, config),
        trains: new TrainRenderer(dynmap, config),
        portals: new PortalRenderer(dynmap, config)
      };
      this.#streams.signals.onMessage(this.#createHandler("signals"));
      this.#streams.blocks.onMessage(this.#createHandler("blocks"));
      this.#streams.trains.onMessage(this.#createHandler("trains"));
      this.#streams.network.onMessage((data) => {
        this.#cache.portals = data.portals;
        this.#cache.stations = data.stations;
        this.rerender();
      });
      this.#streams.trains.onMessage(() => {
        const time = Date.now();
        if (this.#lastTrainsUpdate) {
          const delta = time - this.#lastTrainsUpdate;
          if (delta) {
            const weightedSum = delta / 1e3 * 0.25 + config.updateInterval * 0.75;
            config.updateInterval = Math.trunc(weightedSum * 100) / 100;
          }
        }
        this.#lastTrainsUpdate = time;
      });
      $(dynmap).on("zoomchanged", () => {
        this.update();
      });
      const trainSection = SidebarUtils.createListSection(config.layers.trains.label);
      trainSection.section.appendTo(dynmap.sidebarPanel);
      dynmap.sidebarSections.push(trainSection);
      const trainList = trainSection.content;
      $(trainList).addClass("playerlist");
      this.#streams.trains.onMessage((data) => {
        for (const train of data.trains) {
          const position = train.cars[0].leading;
          const map = getMapForDimension(position.dimension, dynmap, config);
          let $el = $("#train-" + train.id);
          if (!$el.length) {
            $el = $("<li>").attr("id", "train-" + train.id).addClass("player").append($("<a>").attr("href", "#").text(train.name)).appendTo(trainList);
          }
          $el.off();
          $el.on("click", () => {
            if (dynmap.world.name == map?.options.world.name)
              dynmap.panToLocation(position.location);
            else
              dynmap.selectMapAndPan(map, position.location);
          });
        }
      });
    }
    #createHandler(type) {
      return (data) => {
        this.#cache[type] = data[type];
        this.#updateLayer(type);
      };
    }
    #updateLayer(type) {
      const renderer = this.#renderers[type];
      const layer = this.#layers[type];
      const cache = this.#cache[type];
      const queue = [...cache];
      if (this.#timeouts[type]) {
        clearTimeout(this.#timeouts[type]);
      }
      const processBatch = () => {
        for (let i = 0; i < Math.min(BATCH_SIZE, queue.length); i++) {
          const object = queue.shift();
          if (!object)
            break;
          const id = "id" in object ? object.id : i + "";
          let layerObj = this.#objects[type].get(id);
          if (!layerObj) {
            layerObj = renderer.render(object);
            if (!layerObj)
              continue;
            layer.addLayer(layerObj);
            this.#objects[type].set(id, layerObj);
          }
          renderer.update(object, layerObj);
        }
        if (queue.length) {
          this.#timeouts[type] = setTimeout(processBatch);
        } else {
          this.#timeouts[type] = void 0;
        }
      };
      processBatch();
    }
    /** Update all layers  */
    update() {
      for (const key in this.#renderers) {
        this.#updateLayer(key);
      }
    }
    /** Re-render all layers  */
    rerender() {
      for (const key in this.#renderers) {
        const type = key;
        this.#layers[type].clearLayers();
        this.#objects[type].clear();
        this.#updateLayer(type);
      }
    }
    getLayers() {
      return { ...this.#layers };
    }
    /** Connect all streams  */
    async connect() {
      return Promise.resolve().then(() => this.#streams.network.connect()).then(() => this.#streams.blocks.connect()).then(() => this.#streams.trains.connect()).then(() => this.#streams.signals.connect());
    }
    /** Disconnect all streams */
    disconnect() {
      Object.values(this.#streams).forEach((v) => v.disconnect());
    }
  };

  // src/index.ts
  var DEFAULT_WORLDS = {
    world: "minecraft:overworld",
    "DIM-1": "minecraft:the_nether",
    DIM1: "minecraft:the_end"
  };
  var DEFAULT_LABELS = {
    trains: "Trains",
    blocks: "Train Tracks",
    signals: "Train Signals",
    stations: "Train Stations",
    portals: "Train Portals"
  };
  componentconstructors["trains"] = function(dynmap, inConfig) {
    const config = {
      baseUrl: inConfig["base-url"] || "",
      worlds: Object.assign({}, DEFAULT_WORLDS, inConfig.worlds || {}),
      layers: Object.entries(DEFAULT_LABELS).reduce((acc, [layer, defLabel]) => {
        const _layer = layer;
        const conf = inConfig["layers"]?.[_layer];
        acc[_layer] = {
          hidden: conf?.["hidden"] ?? false,
          label: conf?.["label"] ?? defLabel
        };
        return acc;
      }, {}),
      trainWidth: inConfig["train-width"] ?? 3,
      trackWidth: inConfig["track-width"] || 0.75,
      trackOutline: inConfig["track-outline"] || 1,
      trackSeparationOutline: inConfig["track-separation-outline"] ?? true,
      updateInterval: inConfig["update-interval"] || 0.5,
      labels: {
        portal: inConfig["labels"]?.portal ?? "Portal to ",
        station: inConfig["labels"]?.station ?? "Station",
        assembling: inConfig["labels"]?.assembling ?? "Assembling",
        train: inConfig["labels"]?.train ?? "Train",
        owner: inConfig["labels"]?.owner ?? "Owner"
      }
    };
    dynmap.map.createPane("ctm-stations").style.zIndex = 450;
    dynmap.map.createPane("ctm-trains").style.zIndex = 451;
    loadcss(config.baseUrl + "/api/style.css", () => null);
    const renderer = new RenderManager(dynmap, config);
    $(dynmap).on("mapchanged worldchanged", () => renderer.rerender());
    let shownLayers = 0;
    const onAdd = () => {
      shownLayers++;
      if (shownLayers == 1)
        renderer.connect();
    };
    const onRemove = () => {
      shownLayers--;
      if (shownLayers == 0)
        renderer.disconnect();
    };
    const layers = Object.entries(renderer.getLayers());
    for (let i = 0; i < layers.length; i++) {
      const [layerName, layer] = layers[i];
      const layerConf = config.layers[layerName];
      layer.on("add", onAdd);
      layer.on("remove", onRemove);
      if (!layerConf.hidden)
        dynmap.map.addLayer(layer);
      dynmap.addToLayerSelector(layer, layerConf.label, 1);
    }
  };
})();
