/*
 * @plugindesc 간단 말풍선 예제
 * 
 */

 function Balloon() {
  this.initialize.apply(this, arguments);
 }
 
(function() {

  /*****************************************************
  /* Balloon
   *****************************************************/
  Balloon.prototype = Object.create(Window_Base.prototype);
  Balloon.prototype.constructor = Balloon;
   
  Balloon.prototype.initialize = function() { 
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.width / 4, this.lineHeight() * 2);
    this.openness = 0;
  };

  // Balloon.prototype.width = function() { return Graphics.width / 4; }
  // Balloon.prototype.height = function() { return this.lineHeight() * 2; }
 
  Balloon.prototype.open = function(balloonEvent) {
  
    var x = balloonEvent.event.screenX();
    var y = balloonEvent.event.screenY();
    
    this.move(x, y, Graphics.width / 4, this.lineHeight() * 2);
    
    if(this.contents) { 
      this.contents.clear(); 
    }
    this.contents.fontSize = 12;
    this.contents.drawText(String(balloonEvent.text || ""), 0, 0, Graphics.width / 4, this.lineHeight() * 2);    
    
    Window_Base.prototype.open.call(this);
    setTimeout(function() { this.close(); }.bind(this), 1000 * sec);
  }
  
  Balloon.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    
    if($gameMessage.balloonTextSize() > 0) {
      this.open( $gameMessage.getBalloonEvent() );
      $gameMessage._balloonEvent = {};
    }  
   
  }
  
  /*****************************************************
  /* Game_Message
   *****************************************************/
  Game_Message.prototype.addBalloon = function(balloonEvent) {
    this._balloonEvent = balloonEvent;
  };  
  
  Game_Message.prototype.getBalloonEvent = function() {
    return this._balloonEvent || {event: null, text: "", sec: 5};
  };
  
  Game_Message.prototype.balloonTextSize = function() {
    return this.getBalloonEvent().text.length;
  }

  /*****************************************************
  /* Game_Interpreter
   *****************************************************/
  Game_Interpreter.prototype.createBalloon = function(eventId, text, sec) {
    var __event = this.character(eventId);
    var __text = text;
    var __sec = sec || 5;
    $gameMessage.addBalloon({
    event: function() { return __event; }, 
    text: function() { return __text; }, 
    sec: function() { return __sec; }});
  }
    
})();

(function() {

  var _Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function() {
    _Scene_Map_onMapLoaded.call(this);
      this._balloonWindow = new Balloon();
      this.addWindow(this._balloonWindow);
  }
  
})();
