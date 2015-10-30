/*:
 * @plugindesc ScriptVersion
 * @author biud436
 * 
 * @param Version
 * @desc 
 * @default 201510292
 */

(function() {
 
  var metaData = document.getElementsByName("scripts-version")[0];
  var scriptVersion = metaData.content;
  
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
  
  DataManager.loadDataFile = function(name, src) {
      var xhr = new XMLHttpRequest();
      var url = 'data/' + src + scriptVersion;
      xhr.open('GET', url);
      xhr.overrideMimeType('application/json');
      xhr.onload = function() {
          if (xhr.status < 400) {
              window[name] = JSON.parse(xhr.responseText);
              DataManager.onLoad(window[name]);
          }
      };
      xhr.onerror = function() {
          DataManager._errorUrl = DataManager._errorUrl || url;
      };
      window[name] = null;
      xhr.send();
  };  

})();