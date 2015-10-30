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
 * @default true
 *
 * @param 처음부터 켜기
 * @desc 게임이 시작되자마자 HUD 가 켜집니다
 * @default true 
 *
 * @help 
 * [스크립트]
 * $gameHud.opacity = 0 ~ 255;
 * $gameHud.visible = false / true;
 * $gameHud.x = x좌표;
 * $gameHud.y = y좌표;
 */

var $gameHud = null;
 
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

  HUD._visible = HUD._visible || true;
  HUD._opacity = HUD._opacity || 255;
  HUD.__x = HUD.__x || 0;
  HUD.__y = HUD.__y || 0;
  
  HUD.prototype.initialize = function() {
      Stage.prototype.initialize.call(this);
      HUD.__x = pd;
      HUD.__y = Graphics.boxHeight - height - pd;
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
    this._hud.x = HUD.__x;
    this._hud.y = HUD.__y;
  };
  
  HUD.prototype.createFace = function() {
    var player = $gameParty.members()[0];
    this._faceBitmap = ImageManager.loadFace(player.faceName());
    this._maskBitmap = ImageManager.loadPicture("masking");
    this._maskBitmap.addLoadListener(function() {
        this._faceBitmap.addLoadListener(this.circleClippingMask.bind(this, player.faceIndex()));
    }.bind(this));
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
  
  HUD.prototype.circleClippingMask = function(faceIndex) {        
    /*** 변수 */
    var sprite = new Sprite()
        , fw = Window_Base._faceWidth, fh = Window_Base._faceHeight
        , sx = (faceIndex % 4) * fw, sy = Math.floor(faceIndex / 4) * fh;  
        
    sprite.x = this._hud.x;
    sprite.y = this._hud.y;
    sprite.bitmap = new Bitmap(96, 96);
    
    try {

      /*** 플랫폼 확인 */
      var agent = navigator.userAgent;
      var data = agent.match(/Chrome/) && agent.match(/Windows/) && chrome.runtime;
      
      if(blurProcessing && Utils.isMobileDevice()) {
        /*** /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/ */
        sprite.bitmap.drawClippingImage(this._faceBitmap, this._maskBitmap, 0, 0, sx, sy);
      } else {
        if(data["getManifest"] === undefined) {
          /*** PC Chrome 46*/
          sprite.bitmap.drawClippingImageNonBlur(this._faceBitmap, 0, 0, sx, sy);
        } else if(data["getManifest"]().name === "node-webkit") {
          /*** PC (MV node-webkit) */
          sprite.bitmap.drawClippingImage(this._faceBitmap, this._maskBitmap, 0, 0, sx, sy);
        }
      }
    
    } catch { 
    
    }

    this._face = sprite;
    this.addChild(this._face);         
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
    if(this.face) { this.setCoord(this._face, 0, 0); }
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
    if(this._face) { this._face.update(); }
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
  
  Object.defineProperty(HUD.prototype, 'visible', {
      get: function() {
          return HUD._visible;
      },
      set: function(value) {
          this.children.forEach( function(i) {
            i.visible = value;
          }.bind(this));
          HUD._visible = value;
      },
      configurable: true
  });

  Object.defineProperty(HUD.prototype, 'opacity', {
      get: function() {
          return HUD._opacity;
      },
      set: function(value) {
          this.children.forEach( function(i) {
            i.opacity = value.clamp(0, 255);
          }.bind(this));
          HUD._opacity = value.clamp(0, 255);
      },
      configurable: true
  });  
  
  Object.defineProperty(HUD.prototype, 'x', {
      get: function() {
          return HUD.__x;
      },
      set: function(value) {
          this._hud.x = HUD.__x = value.clamp(0, Graphics.boxWidth);
          this.setPosition();
      },
      configurable: true
  });    
  
  Object.defineProperty(HUD.prototype, 'y', {
      get: function() {
          return HUD.__y;
      },
      set: function(value) {
          this._hud.y = HUD.__y = value.clamp(0, Graphics.boxHeight);
          this.setPosition();
      },
      configurable: true
  });      
    
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
    $gameHud = new HUD();
    $gameHud.opacity = HUD._opacity;
    $gameHud.visible = HUD._visible;    
    this.addChild($gameHud);
  };  
  
  /*** @alias Scene_Map.prorotype.terminate */
  var _Scene_Map_terminate = Scene_Map.prototype.terminate;  
  Scene_Map.prototype.terminate = function() {
    this.removeChild($gameHud);
    $gameHud = null;
    _Scene_Map_terminate.call(this);
  };
})();
