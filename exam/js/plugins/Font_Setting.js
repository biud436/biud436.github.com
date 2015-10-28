/*:
 * Font_Setting.js
 *
 * @plugindesc 폰트 설정 플러그인입니다.
 *
 * @param fontFace
 * @desc 
 * @default GameFont
 *
 * @param fontUrl
 * @desc 
 * @default mplus-1m-regular.ttf
 *
 * @param fontSize
 * @desc 
 * @default 28
 *
 * @param fontItalic
 * @desc 
 * @default false
 *
 * @param textColor
 * @desc 
 * @default #ffffff
 * 
 * @param outlineColor
 * @desc 
 * @default rgba(0, 0, 0, 0.5)
 *  
 * @param outlineWidth 
 * @desc 
 * @default 4
 *  
 * @help 플러그인 커맨드가 없습니다.
 */

(function() {

  var parameters = PluginManager.parameters('FontSetting');
  var _fontFace = String(parameters['fontFace'] || 'GameFont');
  var _fontUrl = String(parameters['fontUrl'] || 'mplus-1m-regular.ttf');
  var _fontSize = Number(parameters['fontSize'] || 28);
  var _fontItalic = Boolean(parameters['fontItalic'] === true);
  var _textColor = String(parameters['textColor'] || '#ffffff');
  var _outlineColor = String(parameters['outlineColor '] || 'rgba(0, 0, 0, 0.5)');  
  var _outlineWidth = Number(parameters['outlineWidth'] || 4);

  var _fontSettings = Bitmap.prototype.initialize;
  Bitmap.prototype.initialize = function(width, height) {
  
    _fontSettings.call(this, width, height);
    
    // this.fontFace = (function() {   
      // if(_fontFace === 'GameFont') {
        // return 'GameFont'; 
      // } else { 
        // try { 
          // Graphics.loadFont(_fontFace, _fontUrl); 
          // if(Graphics.isFontLoaded(_fontFace) === false) {
            // throw new Error('폰트 파일을 찾을 수 없었습니다.');
          // }
          // return _fontFace;
          // }
        // } catch(e) {
          // return 'GameFont'; 
        // };  
      // }
    // })();
    
    this.fontSize = _fontSize;
    this.fontItalic = _fontItalic;
    this.textColor = _textColor;
    this.outlineColor = _outlineColor;
    this.outlineWidth = _outlineWidth;
  };

  Window_Base.prototype.standardFontFace = function() {
      if ($gameSystem.isChinese()) {
          return 'SimHei, Heiti TC, sans-serif';
      } else if ($gameSystem.isKorean()) {
          return '%1 Dotum, AppleGothic, sans-serif'.format(_fontFace);
      } else {
          return 'GameFont';
      }
  };

  Window_Base.prototype.standardFontSize = function() {
      return _fontSize;
  };
  
  Window_Base.prototype.resetFontSettings = function() {
    this.contents.fontFace = this.standardFontFace();
    this.contents.fontSize = _fontSize;
    this.resetTextColor();
};  
  
  
})();