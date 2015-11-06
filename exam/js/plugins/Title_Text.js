/*
 * @plugindesc
 * @author
 */

(function() {
 
  Scene_Title.prototype.drawGameTitle = function() {
    var x = 20;
    var y = Graphics.height / 4;
    var maxWidth = Graphics.width - x * 2;
    var text = $dataSystem.gameTitle;
    this._gameTitleSprite.bitmap.outlineColor = 'black';
    this._gameTitleSprite.bitmap.outlineWidth = 8;
    this._gameTitleSprite.bitmap.fontSize = 72;
    this._gameTitleSprite.bitmap._canvas.style = "h1 { text-shadow: 2px 2px 4px #000000; }";
    this._gameTitleSprite.bitmap.drawText(text, x, y, maxWidth, 48, 'center');
  };

})();