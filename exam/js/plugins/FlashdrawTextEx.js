/*:
 * @plugindesc FlashdrawTextEx
 * @help
 * 텍스트띄워 message sec
 * drawTextEx message sec
 */
(function() {

  Game_Interpreter.prototype.drawTextEx = function(message, wait) {
      return (function() {
        var oWindow = new Window_Base(0,0,Graphics.boxWidth, 96);
        oWindow.drawTextEx(message, 24, 12);
        SceneManager._scene.addWindow(oWindow);
        
        setTimeout(function(){
          SceneManager._scene._windowLayer.removeChild(oWindow);
        },1000 * parseInt(wait || 1));
      })(message, wait);
    };

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
      if(command === ("텍스트띄워" || "drawTextEx")) {
        this.drawTextEx.apply(this, args);
      }
  };
  
})();