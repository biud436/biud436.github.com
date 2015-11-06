
/*:
 * Drag_Test.js
 * @plugindesc 테스트
 */

 function onDragStart(event)
{
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    console.log("onDragStart");
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd()
{
    console.log("onDragEnd");
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove()
{
    if (this.dragging)
    {
        console.log("onDragMove");
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}      

(function() {
  
  var _Scene_Map_start = Scene_Map.prototype.start;
  Scene_Map.prototype.start = function() {
    _Scene_Map_start.call(this);
    this.createDragSprite();
  };
  
  Sprite.prototype.on = function(str, func2) {
    this.bitmap._image['on' + str] = func2;
    return this;
  };
  
  Scene_Map.prototype.createDragSprite = function() {
    this._dragSprite = new Sprite(ImageManager.loadPicture('hp'));
    
    // var texture = PIXI.Texture.fromImage('img/pictures/hp.png');
    // this._dragSprite = new PIXI.Sprite(texture);
    
    this._dragSprite.interactive = true;
    this._dragSprite.buttonMode = true;
    this._dragSprite.anchor.set(0.5);
    this._dragSprite.scale.set(3);
    
    this._dragSprite._bitmap._image.onmouseover = function() { console.log("wow") }.bind(this);
        
    this._dragSprite.position.x = Graphics.width / 2;
    this._dragSprite.position.y = Graphics.height / 2;
    
    this.addChild(this._dragSprite);
    
  };  

})();