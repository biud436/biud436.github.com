/*:
 * @plugindesc ScriptVersion
 * @author biud436
 * 
 * @param Version
 * @desc 
 * @default 201510292
 */

(function() {
 
  var parameters = $plugins.filter( function(i) { if(i.name === "RS_HUD") return true; }.bind(this))[0].parameters;
  var scriptVersion = "?version=" + (String(parameters["Version"] || '201510292'));
   
  Utils.canReadGameFiles = function() {
      var scripts = document.getElementsByTagName('script');
      var lastScript = scripts[scripts.length - 1];
      var xhr = new XMLHttpRequest();
      try {
          xhr.open('GET', lastScript.src + scriptVersion);
          xhr.overrideMimeType('text/javascript');
          xhr.send();
          return true;
      } catch (e) {
          return false;
      }
  };

})();