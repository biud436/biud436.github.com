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
 */

function HUD() { 
  this.initialize.apply(this, arguments); 
};

var RS = RS || {};
RS.Text = RS.Text || function() { this.initialize.apply(this, arguments); };

(function() {

  RS.Text.prototype = new Sprite();
  
  RS.Text.prototype.drawParam = function(strFunc) {
    this._strFunc = strFunc;
    this._text = strFunc();
    this.bitmap.drawText(strFunc(), this._x, this._y, this._width, this._height, "center");
  };
  
  RS.Text.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if(this._strFunc() === this._text) {
      return false;
    } else {
      this.bitmap.clear();
       this.bitmap.drawText(this._text, this._x, this._y, this._width, this._height, "center");
    }
  };

})();
 
(function() {

  var parameters = PluginManager.parameters('RS_HUD');
  var width = Number(parameters['가로'] || 317 );
  var height = Number(parameters['세로'] || 101 );
  var pd = Number(parameters['간격'] || 0);
  var angle = Math.PI / 180.0;
  var smooth = (parameters['가장자리옵션'] == "true")? true : false;
 
  HUD.prototype = new PIXI.Stage();

  HUD.prototype.initialize = function() {
      Stage.prototype.initialize.call(this);
      this.createHud();
      this.createHp();
      this.createMp();
      this.createExp();
      this.createText();
      this.setPosition();
  };
  
  // 틀 생성
  HUD.prototype.createHud = function() {      
    this._hud = new Sprite(ImageManager.loadPicture('hud_window_empty'));
    this.addChild(this._hud);
    this._hud.x = pd;
    this._hud.y = Graphics.boxHeight - height - pd;         
    var player = $gameParty.members()[0];
    this._face = this.circleClippingMask(0,0,45,2,player.faceName(),player.faceIndex(), 360);
  };
  
  // 원형 클리핑 마스크
  HUD.prototype.circleClippingMask = function(x, y, r, zoom, faceName, faceIndex, angle) {
  
    var myMask = new PIXI.Graphics();
    var sprite = new Sprite();
    var __bitmap = ImageManager.loadFace(faceName);
    var sx = (faceIndex % 4) * 96 + 48;
    var sy = (faceIndex / 4) * 96 + 48;    
    
    // /*** Mask */  
    myMask.beginFill();
    myMask.drawEllipse(this._hud.x, this._hud.y, r, r);
    myMask.endFill();  
    myMask.x = myMask.x + myMask.width / 2;
    myMask.y = myMask.y + myMask.height / 2;
    this.addChild(myMask);
    
    /*** Face Sprite */  
    this.addChild(sprite); 
    sprite.x = this._hud.x;
    sprite.y = this._hud.y;
    
    /*** Add Face Bitmap */
    sprite.bitmap = new Bitmap(96,96);
    sprite.bitmap.blt(__bitmap, sx, sy, 96, 96, this._hud.x, this._hud.y );
    __bitmap = null;
    
    // /*** Add Mask */
    sprite._mask = myMask;    
    return sprite
  };  
  
  // HP 생성
  HUD.prototype.createHp = function() {      
    this._hp = new Sprite(ImageManager.loadPicture('hp'));
    this.addChild(this._hp);
  };
  
  // MP 생성
  HUD.prototype.createMp = function() {      
    this._mp = new Sprite(ImageManager.loadPicture('mp'));
    this.addChild(this._mp);
  };    

  // EXP 생성
  HUD.prototype.createExp = function() {      
    this._exp = new Sprite(ImageManager.loadPicture('exr'));
    this.addChild(this._exp);
  };        
  
  // 텍스트 생성
  HUD.prototype.createText = function() {
    this._hpText = this.addText(this.getHp);
    this._mpText = this.addText(this.getMp); 
    this._expText = this.addText(this.getExp);
    this._levelText = this.addText(this.getLevel, 16);
  };
  
  // 좌표 설정
  HUD.prototype.setPosition = function() {      
    this.setCoord(this._face, 0, 0);
    this.setCoord(this._hp, 160, 43);
    this.setCoord(this._mp, 160, 69);
    this.setCoord(this._exp, 83, 91);
    this.setCoord(this._hpText, 160, 43);
    this.setCoord(this._mpText, 160, 69);
    this.setCoord(this._levelText, 60, 71);
    this.setCoord(this._expText, 120.5, 83);
  };

  // 플레이어의 현재 레벨
  HUD.prototype.setPlayer = function() {
    this._actor = $gameParty.members()[0];
    this._level = this._actor.level;
  };

  Object.definePropertie(Game_BattlerBase.prototype, );
  
  // 텍스트 비트맵 생성
  HUD.prototype.addText = function(strFunc, size) {
    var t = new RS.Text(new Bitmap(120, 20));
    t.bitmap._fontSize = size || 14;
    t.bitmap.drawParam(strFunc);
    this.addChild(t);
    return t;
  };
  
  HUD.prototype.getPlayer = function() {
    return $gameParty.members()[0];
  };  
  

  
  // HUD.prototype.getHpStr = function() {
    // var player = $gameParty.members()[0];
    // return String(player.s, 
  // }  
  
  // HP (비율)
  HUD.prototype.getHpRate = function() {
    return this._hp.bitmap.width * (this.getPlayer().hp.to_f / this.getPlayer().mhp);
  };
  

  HUD.prototype.setCoord = function(s,x,y) {
    s.x = this._hud.x + x
    s.y = this._hud.y + y
  }

  HUD.prototype.update = function() {
      // Sprite.prototype.update.call(this);
      this.paramUpdate();
  };
  
  // HP, MP, EXP 업데이트
  HUD.prototype.paramUpdate = function() {
    this._hp.setFrame(0, 0, this.getHpRate(), this._hp.height );
  };
    
})();

(function() {

  var _Scene_Map_start = Scene_Map.prototype.start;
  Scene_Map.prototype.start = function() {
    _Scene_Map_start.call(this);
    this._hud = new HUD();
    this.addChild(this._hud);
  };  
  var _Scene_Map_terminate = Scene_Map.prototype.terminate;  
  Scene_Map.prototype.terminate = function() {
    this.removeChild(this._hud);
    _Scene_Map_terminate.call(this);
  };
})();