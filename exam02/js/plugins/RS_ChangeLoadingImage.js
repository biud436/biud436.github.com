/*:
 * RS_ChangeLoadingImage.js
 * @plugindesc RS_ChangeLoadingImage.js
 * @author biud436
 *
 * @param Atlas Url
 * @desc Sprite Sheet
 * @default data/sprites.css
 *
 * @param background
 * @desc
 * @default img/system/Loading.png
 *
 * @param gauge
 * @desc
 * @default img/system/LoadingGauge.png
 *
 * @param fontSize
 * @desc
 * @default 30
 *
 * @help
 *
 */

var Imported = Imported || {};
var RS = RS || {};

Imported.RS_ChangeLoadingImage = true;
RS.ChangeLoadingImage = RS.ChangeLoadingImage || {};

(function() {

  var parameters = PluginManager.parameters('RS_ChangeLoadingImage');
  var fontFormat = "%0px Arial".format(Number(parameters['fontSize'] || 30));
  RS.ChangeLoadingImage._loadingImage = parameters['background'] || 'img/system/Loading.png';
  RS.ChangeLoadingImage._gaugeImage = parameters['gauge'] || 'img/system/LoadingGauge.png';
  RS.ChangeLoadingImage._atlasURL = parameters['Atlas Url'] || 'data/sprites.css';
  RS.ChangeLoadingImage._count = 0.0;

  RS.ChangeLoadingImage.createSprite = function(name) {
    var img = new Image();
    img.setAttribute('class', name);
    img.style.position = 'absolute';
    img.style.zIndex = 10;
    return img;
  };

  RS.ChangeLoadingImage.createStyleSheet = function() {
    var css;
    css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = RS.ChangeLoadingImage._atlasURL;
    document.getElementsByTagName("head")[0].appendChild(css);
  }

  RS.ChangeLoadingImage.drawLoadingImage = function(context, dx, dy, count) {
    context.save();
    //context.globalAlpha = 1;
    context.drawImage(this._loadingImageBack, dx, dy);
    context.drawImage(this._loadingImageGauge, dx, dy);
    context.drawImage(this._loadingImageText, dx, dy);

    context.restore();
  }

  RS.ChangeLoadingImage.drawText = function(context, text, dx, dy) {
    context.font = fontFormat;
    context.textBaseline = 'alphabetic';

    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.lineJoin = 'round';

    context.strokeText(text, dx, dy, 200);

    context.fillStyle = 'white';
    context.fillText(text, dx, dy, 200);
  }

  RS.ChangeLoadingImage.startLoading = function() {
    SceneManager.onSceneCreate();
  }

  RS.ChangeLoadingImage.updateLoading = function(n) {
    this.count = n;
    Graphics.updateLoading();
  }

  RS.ChangeLoadingImage.endLoading = function() {
    Graphics.endLoading();
  }

  RS.ChangeLoadingImage.setMaxWidth = function(img) {
    var value = Math.floor(this._count * img.width);
    img.style.maxWidth = "%0".format(value);
  }

  Graphics.setLoadingImage = function(src) {
      var container = RS.ChangeLoadingImage;
      this._loadingImageBack = container.createSprite('lback');
      this._loadingImageGauge = container.createSprite('lgauge');
      this._loadingImageText = container.createSprite('ltext');
  };

  SceneManager.initGraphics = function() {
      var type = this.preferableRendererType();
      RS.ChangeLoadingImage.createStyleSheet();
      Graphics.initialize(this._screenWidth, this._screenHeight, type);
      Graphics.boxWidth = this._boxWidth;
      Graphics.boxHeight = this._boxHeight;
      Graphics.setLoadingImage();
      if (Utils.isOptionValid('showfps')) {
          Graphics.showFps();
      }
      if (type === 'webgl') {
          this.checkWebGL();
      }
  };

  Graphics._paintUpperCanvas = function() {
      this._clearUpperCanvas();
      if (this._loadingImageBack &&
        this._loadingImageGauge &&
        this._loadingImageText && RS.ChangeLoadingImage._count > 0) {
          var context = this._upperCanvas.getContext('2d');
          var dx = (this._width - this._loadingImageGauge.width) / 2;
          var dy = (this._height - this._loadingImageGauge.height) / 2;

          RS.ChangeLoadingImage.setMaxWidth(this._loadingImageGauge);

          // var count = (this._loadingCount - 20) / 30;
          // var alpha = count.clamp(0, 1);
          // var per = Math.floor(count * 25).clamp(0, 100);
          // var text = String('Loading ' + per + "%");

          RS.ChangeLoadingImage.drawLoadingImage.call(this, context, dx, dy, count);

      }
  };

  DataManager.loadDataFile = function(name, src) {
      var xhr = new XMLHttpRequest();
      var url = 'data/' + src;
      xhr.open('GET', url);
      xhr.overrideMimeType('application/json');
      xhr.onload = function() {
          if (xhr.status < 400) {
              window[name] = JSON.parse(xhr.responseText);
              DataManager.onLoad(window[name]);
              RS.ChangeLoadingImage.endLoading();
          }
      };
      xhr.onerror = function() {
          DataManager._errorUrl = DataManager._errorUrl || url;
      };

      xhr.addEventListener("progress", function(evt){
        if (evt.lengthComputable) {
          var percentComplete = evt.loaded / evt.total;
          RS.ChangeLoadingImage.updateLoading(percentComplete);
        }
      }, false);

      window[name] = null;
      xhr.send();
      RS.ChangeLoadingImage.startLoading();
  };

})();
