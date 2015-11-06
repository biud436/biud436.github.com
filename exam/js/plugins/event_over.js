/*:
 * @plugindesc 대화 시 주인공을 바라보지 않는 플러그인
 * 
 * @param 스위치
 * @desc 토글 스위치 번호
 * @default 1
 */

 (function() {
 
  var parameters = PluginManager.parameters('event_over');
  var switchNumber = Number(parameters['스위치'] || 1);
  
  Game_Event.prototype.lock = function() {
      if (!this._locked) {
          this._prelockDirection = this.direction();
          if($gameSwitches.value(switchNumber)) {
            this.turnTowardPlayer();
          }
          this._locked = true;
      }
  };

})();