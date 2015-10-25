/*:
 * @plugindesc RS_HUD
 * @author biud436
 *
 * @param 가로
 * @desc 가로 크기
 * @default 317 
 *
 * @param 세로
 * @desc 세로 크기
 * @default 101
 * 
 * @param 간격
 * @desc 간격
 * @default 0
 * 
 * @param 가장자리옵션
 * @desc 페이스칩의 가장자리를 다듬어 부드럽게 묘화합니다.
 * @default true
 *
 * @param 각도
 * @desc 라디안
 * @default Math.PI / 180.0
 */
(function() {
  var _Scene_Map_start = Scene_Map.prototype.start;
  Scene_Map.prototype.start = function() {
      _Scene_Map_start.call(this);
      this._spriteText = new Sprite(ImageManager.loadPicture('hud_window_empty'));
      this.addChild(this._spriteText);
  };
})();