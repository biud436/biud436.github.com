/*:
 * RS_TitleSkip.js
 * @plugindesc Title Skip
 * @author biud436
 */

var Imported = Imported || {};
Imported.RS_TitleSkip = true;

(function() {

  /**
   * @static
   * @method _paintUpperCanvas
   * @private
   */
  Graphics._paintUpperCanvas = function() {
      this._clearUpperCanvas();
      if (this._loadingImage && this._loadingCount >= 20) {
          var context = this._upperCanvas.getContext('2d');
          var dx = (this._width - this._loadingImage.width) / 2;
          var dy = (this._height - this._loadingImage.height) / 2;

          console.log(this._loadingCount);

          var count = (this._loadingCount - 20) / 30;
          var alpha = count.clamp(0, 1);
          var per = Math.floor(count * 25).clamp(0, 100);
          var text = String('Loading ' + per + "%");
          context.save();
          context.globalAlpha = alpha;
          //context.drawImage(this._loadingImage, dx, dy);

          context.font = "30px Arial";
          context.textBaseline = 'alphabetic';

          context.strokeStyle = 'black';
          context.lineWidth = 1;
          context.lineJoin = 'round';

          context.strokeText(text, dx, dy, 200);

          context.fillStyle = 'white';
          context.fillText(text, dx, dy, 200);

          context.restore();
      }
  };

  Scene_Boot.prototype.start = function() {
      Scene_Base.prototype.start.call(this);
      SoundManager.preloadImportantSounds();
      if (DataManager.isBattleTest()) {
          DataManager.setupBattleTest();
          SceneManager.goto(Scene_Battle);
      } else if (DataManager.isEventTest()) {
          DataManager.setupEventTest();
          SceneManager.goto(Scene_Map);
      } else {
          this.checkPlayerLocation();
          DataManager.setupNewGame();
          SceneManager.goto(Scene_Map);
          Window_TitleCommand.initCommandPosition();
      }
      this.updateDocumentTitle();
  };
})()
