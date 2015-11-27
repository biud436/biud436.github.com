/*:
 * Audio_Additional_Support.js
 * @plugindesc Audio Additional Support
 * 
 */

(function() {

  WebAudio._Suppot = {};

  WebAudio._createContext = function() {
      try {
          this._context =  new (AudioContext || webkitAudioContext || mozAudioContext)();
      } catch (e) {
          this._context = null;
      }
  };
  
  WebAudio._detectCodecs = function() {
      var audio = document.createElement('audio');
      if (audio.canPlayType) {
          this._canPlayOgg = audio.canPlayType('audio/ogg; codecs="vorbis"');
          this._canPlayM4a = audio.canPlayType('audio/x-m4a');
          this._canPlayWav = audio.canPlayType('audio/wav; codecs="1"');
          this._canPlayMp3 = audio.canPlayType("audio/mpeg");
          this._canPlayMp4 = audio.canPlayType("audio/mp4");
          WebAudio._setSupport();
      }
  };
   
  WebAudio._setSupport = function() {
      WebAudio._Suppot['Ogg'] = !!this._canPlayOgg;
      WebAudio._Suppot['M4a'] = !!this._canPlayM4a;
      WebAudio._Suppot['Wav'] = !!this._canPlayWav;
      WebAudio._Suppot['Mp3'] = !!this._canPlayMp3;
      WebAudio._Suppot['Mp4'] = !!this._canPlayMp4;
  }
  
  WebAudio.canPlayType = function(type) {
      if (!this._initialized) {
          this.initialize();
      }
      return WebAudio._Suppot[type];
  };
  
  // AudioManager.audioFileExt = function() {
    // var type = ['Ogg','M4a'];
    // type.forEach(function(i,e,arr) {
      
    // }.bind(this));
  // };
  
  // AudioManager.createBuffer = function(folder, name) {
      // var ext = this.audioFileExt();
      // var url = this._path + folder + '/' + encodeURIComponent(name) + ext;
      // if (this.shouldUseHtml5Audio() && folder === 'bgm') {
          // Html5Audio.setup(url);
          // return Html5Audio;
      // } else {
          // return new WebAudio(url);
      // }
  // };  
  
})();