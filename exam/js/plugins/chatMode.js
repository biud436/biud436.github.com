/*:
 * @plugindesc 채팅박스 생성
 * @author
 *
 * @param head Text
 * @desc 채팅 머릿말
 * @default \\c[2][러닝은빛]\\c[0] : 
 *
 * @param refresh Time
 * @desc 텍스트 소멸 시간
 * @default 10
 *
 */
 
 /**
  * @class ChatBox
  * @constructor  
  * @param x {Number}
  * @param y {Number}
  * @param width {Number}
  * @param height {Number}  
  */
function ChatBox() {
  this.initialize.apply(this, arguments);
};

ChatBox.prototype = Object.create(Window_Base.prototype);
ChatBox.prototype.constructor = ChatBox;
  
ChatBox.prototype.initialize = function() {
  Window_Base.prototype.initialize.apply(this, arguments);
  this.opacity = 0;
};

ChatBox.prototype.standardPadding = function() {
    return 0;
};

ChatBox.prototype.standardFontSize = function() {
    return 12;
};

ChatBox.prototype.resetFontSettings = function() {
    this.contents.fontFace = this.standardFontFace();
    this.contents.fontSize = this.standardFontSize();
    this.resetTextColor();
};
 
(function() {

  /**
   * @function createEditBox
   * @param yPosition {Number}
   * @return {input}
   */
  Scene_Map.prototype.createEditBox = function(yPosition) {
    // div 생성
    var divc = document.createElement('div');
    divc.id = 'inputField';
    divc.innerHTML = "<input id='input1' type='text'></input>";
    divc.style.position="absolute";
    divc.style.left="0px";
    divc.style.top= "0px";
    divc.style.width="100%";
    divc.style.height="100%";
    divc.style.zIndex="1000";
    document.body.appendChild(divc);    
    // EditBox 생성
    var inp =document.getElementById('input1');
    inp.style.backgroundColor =  'rgba(0,0,0,0.6)';
    inp.style.position="absolute";
    inp.style.left = "10px";
    inp.style.top = String(yPosition) + "px";
    inp.style.width= String(Graphics.boxWidth / 2) + "px";
    inp.style.borderColor = inp.style.backgroundColor;        
    return inp;
  };

  /*** @alias Scene_Map.prorotype.start */
  var _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
  Scene_Map.prototype.createDisplayObjects = function() {
    _Scene_Map_createDisplayObjects.call(this);
    this.createChatBox();
  };
    
  Input._shouldPreventDefault = function(keyCode) {
      switch (keyCode) {
      // case 8:     // backspace
      case 33:    // pageup
      case 34:    // pagedown
      case 37:    // left arrow
      case 38:    // up arrow
      case 39:    // right arrow
      case 40:    // down arrow
          return true;
      }
      return false;
  };
  
  Game_Temp.prototype.isDestinationValid = function() {
    return (this._destinationX !== null) && !$gameTemp.chatFocus;
  };
  
  Scene_Map.prototype.createChatBox = function() {
    // 박스 추가
    this._chatBox = new ChatBox(0, 0, Graphics.boxWidth / 2, Graphics.boxHeight / 3);
    this.addWindow(this._chatBox);
    
    // 기본 색상 설정
    var color = 'rgba(0, 0, 0, 0.6)';
    
    // 묘화 및 위치 설정
    this._chatBox.contents.fillAll(color);
    this._chatBox.x = 10;
    this._chatBox.y = Graphics.boxHeight - this._chatBox.height - 80;  

    // 콜백 함수 설정
    this._inputBox = this.createEditBox(this._chatBox.y + this._chatBox.height + 10);
    this._inputBox.style.color = 'rgb(255,255,255)';
    
    this._inputBox.onchange = function() {
      $gameMessage.addChat(this._inputBox.value);
      this._inputBox.value = "";
    }.bind(this);
    
    this._inputBox.onfocus = function() { 
      $gameTemp.chatFocus = true; 
    }.bind(this);
    
    this._inputBox.onblur = function() { 
      $gameTemp.chatFocus = false;
    }.bind(this);    
    
    // 업데이트 설정
    var _chatBox_update = this._chatBox.update;
    this._chatBox.update = function() {
      _chatBox_update.call(this);
      if($gameMessage._textList && $gameMessage._textList instanceof Array) {
      
        // 초기화
        this.contents.clear();
        
        // 기본 색상 설정
        var color = 'rgba(0, 0, 0, 0.6)';
        
        // 기본 색상으로 채우기
        this.contents.fillAll(color);
        
        // 텍스트 추가
        $gameMessage._textList.forEach( function(nowText, index, array) {
          this.drawTextEx(nowText, 0, (index) * 20); 
        }.bind(this));
        
      }
    };
    
  };
  
  /**
   * 텍스트 추가
   * @method addChat
   * @param text {String}
   */                   
  Game_Message.prototype.addChat = function(text) {
    this._textList = this._textList || [];
    var headText = "\\c[2][러닝은빛]\\c[0] : "
    this._textList.push(headText + text);
    setTimeout(function() { this._textList.shift(); }.bind(this), 1000 * 10);
  };
  
  /*** @alias Scene_Map.prorotype.terminate */
  var _Scene_Map_terminate = Scene_Map.prototype.terminate;  
  Scene_Map.prototype.terminate = function() {
    _Scene_Map_terminate.call(this);
    if(this._inputBox) {
      var __inputField = document.getElementById('inputField');
      var __inputBox = document.getElementById('input1');
      __inputField.removeChild(__inputBox);
      document.body.removeChild(__inputField);
    }
  };  

})();

  
 