/*:
 * RS_HUD.js
 * @date 2015.10.29
 * @plugindesc 체력, 마력, 경험치를 표시하는 플러그인입니다.
 * @author 러닝은빛(biud436)
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
 * @desc 화면 경계선과의 간격을 지정합니다.
 * @default 0
 * 
 * @param 가장자리옵션
 * @desc 페이스칩의 가장자리를 다듬어 부드럽게 묘화합니다.
 * @default true
 *
 * @param 블러처리
 * @desc PC Windows(O), PC Chrome(X)
 * @default false
 *
 * @help 이 플러그인은 플러그인 커맨드가 없습니다.
 * 투명도조절
 * 위치지정자
 * 보이기, 숨기기 
 * 대화창이 표시됐을 때 HUD 감추기 옵션
 */

function HUD() {   
  this.initialize.apply(this, arguments); 
}

/**
 * @class HUD
 * @extends PIXI.Stage
 */ 
(function() {

  var parameters = PluginManager.parameters('RS_HUD');
  var width = Number(parameters['가로'] || 317 );
  var height = Number(parameters['세로'] || 101 );
  var pd = Number(parameters['간격'] || 0);
  var smooth = Boolean(parameters['가장자리옵션'] ==="true");
  var blurProcessing = Boolean(parameters['블러처리'] ==="true");
  var angle = Math.PI / 180.0;
  
  HUD.prototype = new PIXI.Stage();

  HUD.prototype.initialize = function() {
      Stage.prototype.initialize.call(this);
      this.createHud();
      this.createFace();
      this.createHp();
      this.createMp();
      this.createExp();
      this.createText();
      this.setPosition();
  };
  
  HUD.prototype.createHud = function() {      
    this._hud = new Sprite(ImageManager.loadPicture('hud_window_empty'));
    this.addChild(this._hud);
    this._hud.x = pd;
    this._hud.y = Graphics.boxHeight - height - pd;
  };
  
  HUD.prototype.createFace = function() {
    var player = $gameParty.members()[0];
    this._face = this.circleClippingMask(player.faceName(), player.faceIndex());
    this.addChild(this._face);  
  };
  
  Bitmap.prototype.drawClippingImage = function(bitmap, maskImage , _x, _y, _sx, _sy) {
    var context = this._context;
    context.save();
    context.drawImage(maskImage._canvas, _x, _y, 96, 96);
    context.globalCompositeOperation = 'source-atop';
    context.drawImage(bitmap._canvas, _sx, _sy, 144, 144, 0, 0, 96, 96);
    context.restore();
    this._setDirty();
  };  
  
  Bitmap.prototype.drawClippingImageNonBlur = function(bitmap, _x, _y, _sx, _sy) {
    var context = this._context;
    context.save();
    context.beginPath();
    context.arc(_x + 45, _y + 45 , 45, 0, Math.PI * 2, false);
    context.clip();
    context.drawImage(bitmap._canvas, _sx, _sy, 144, 144, 0, 0, 96, 96);
    context.restore();
    this._setDirty();
  };    
  
  HUD.prototype.circleClippingMask = function(faceName, faceIndex) {
  
    /*** 변수 */
    var sprite = new Sprite()
        , __bitmap = ImageManager.loadFace(faceName)
        , maskImg = ImageManager.loadPicture("masking")    
        , fw = Window_Base._faceWidth
        , fh = Window_Base._faceHeight
        , sx = (faceIndex % 4) * fw
        , sy = Math.floor(faceIndex / 4) * fh;
    
    /*** 스프라이트 생성 */    
    sprite.x = this._hud.x;
    sprite.y = this._hud.y;
    sprite.bitmap = new Bitmap(96,96);
    
    if(blurProcessing) {
      /*** 이미지 로딩 처리 */        
      __bitmap.addLoadListener( function() {  
           // Graphics.startLoading(); 
           // while(!maskImg.isReady()) {
            // Graphics.updateLoading();
           // }
          sprite.bitmap.drawClippingImage(__bitmap, maskImg, 0, 0, sx, sy);
          // Graphics.endLoading();
      }.bind(this));        
    } else {
        __bitmap.addLoadListener( function() {  
          sprite.bitmap.drawClippingImageNonBlur(__bitmap, 0, 0, sx, sy);
        }.bind(this));
    }
    
    return sprite;
  };  
  
  HUD.prototype.createHp = function() {      
    this._hp = new Sprite(ImageManager.loadPicture('hp'));
    this.addChild(this._hp);
  };
  
  HUD.prototype.createMp = function() {      
    this._mp = new Sprite(ImageManager.loadPicture('mp'));
    this.addChild(this._mp);
  };    

  HUD.prototype.createExp = function() {      
    this._exp = new Sprite(ImageManager.loadPicture('exr'));
    this.addChild(this._exp);
  };        
  
  HUD.prototype.createText = function() {
    this._hpText = this.addText(this.getHp.bind(this));
    this._mpText = this.addText(this.getMp.bind(this)); 
    this._expText = this.addText(this.getExp.bind(this));
    this._levelText = this.addText(this.getLevel.bind(this));
  };
  
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
  
  HUD.prototype.addText = function(strFunc) {
    var text = new Sprite(new Bitmap(120, 20));
    text._tmp = strFunc;
    text._log = strFunc.call(this);
    text.update = function() {
      if(this._tmp.call(this) != this._log) {
        this.bitmap.clear();
        this.bitmap.fontSize = 12;
        this.bitmap.drawText(this._tmp.call(this), 0, 0, 120, 20, 'center');
      }
    };
    
    this.addChildAt(text, this.children.length);
    
    text.bitmap.fontSize = 12;
    text.bitmap.drawText(strFunc(), 0, 0, 120, 20, 'center');    
    
    return text;
  };
  
  HUD.prototype.getPlayer = function() {
    return $gameParty.members()[0];
  };  

  HUD.prototype.getHp = function() {
    var player = $gameParty.members()[0];
    return "%1 / %2".format(player.hp, player.mhp);
  };
  
  HUD.prototype.getMp = function() {
    var player = $gameParty.members()[0];
    return "%1 / %2".format(player.mp, player.mmp);
  };  
  
  HUD.prototype.getExp = function() {
    var player = $gameParty.members()[0];
    return "%1 / %2".format(player.currentExp(), player.nextLevelExp());
  };    
  
  HUD.prototype.getLevel = function() {
    return "%1".format($gameParty.members()[0].level);
  };
  
  // HP (비율)
  HUD.prototype.getHpRate = function() {
    return this._hp.bitmap.width * (this.getPlayer().hp / this.getPlayer().mhp);
  };
  
  // MP (비율)
  HUD.prototype.getMpRate = function() {
    return this._mp.bitmap.width * (this.getPlayer().mp / this.getPlayer().mmp);
  };  
  
  // Exp (비율)
  HUD.prototype.getExpRate = function() {
    return this._exp.bitmap.width * (this.getPlayer().currentExp() / this.getPlayer().nextLevelExp());
  };    
  
  HUD.prototype.setCoord = function(s,x,y) {
    s.x = this._hud.x + x;
    s.y = this._hud.y + y;
  };

  HUD.prototype.update = function() {
    this._hud.update();
    this._face.update();
    this.paramUpdate();
  };
  
  HUD.prototype.paramUpdate = function() {
    this._hp.setFrame(0, 0, this.getHpRate(), this._hp.height );
    this._mp.setFrame(0, 0, this.getMpRate(), this._mp.height );
    this._exp.setFrame(0, 0, this.getExpRate(), this._exp.height );
    this._hpText.update();
    this._mpText.update();
    this._expText.update();
    this._levelText.update(); 

    if(this._face.bitmap._image === (null || 'undefined')) {
      console.log("비트맵 이미지가 생성되지 않았습니다");
      this.removeChild(this._face);
      this.createFace();
    }
    
  };
    
})();

/**
 * @class HUD
 * @extends PIXI.Stage
 */ 
(function() {

  /*** @alias Scene_Map.prorotype.start */
  var _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
  Scene_Map.prototype.createDisplayObjects = function() {
    _Scene_Map_createDisplayObjects.call(this);
    this._hud = new HUD();
    this.addChild(this._hud);
  };  
  
  /*** @alias Scene_Map.prorotype.terminate */
  var _Scene_Map_terminate = Scene_Map.prototype.terminate;  
  Scene_Map.prototype.terminate = function() {
    this.removeChild(this._hud);
    _Scene_Map_terminate.call(this);
  };
})();