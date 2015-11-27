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
          this._canPlayOgg = audio.canPlayType('audio/ogg codecs="vorbis"');
          this._canPlayM4a = audio.canPlayType('audio/x-m4a');
          // this._canPlayWav = audio.canPlayType('audio/wav; codecs="1"');
          // this._canPlayMp3 = audio.canPlayType("audio/mpeg");
          // this._canPlayMp4 = audio.canPlayType("audio/mp4");
          WebAudio._setSupport();
      }
  };
  
  WebAudio._setSupport = function() {
    var type = ['Ogg','M4a'];
    // var type = ['Ogg','M4a','Wav','Mp3','Mp4'];
    type.forEach(function(i) {
      WebAudio._Suppot[i] = !!this['_canPlay' + i];    
    }.bind(this));
  }
  
  WebAudio.canPlayType = function(type) {
      if (!this._initialized) {
          this.initialize();
      }
      return WebAudio._Suppot[type];
  };
  
  AudioManager.audioFileExt = function() {
    var type = ['Ogg','M4a'];
    // var type = ['Ogg','M4a','Wav','Mp3','Mp4'];
      type.forEach(function(i,e,arr) {
        if(WebAudio.canPlayType(i)) {
          return '.' + arr[e].toLowerCase();
        }
      }.bind(this));
  };
  
  AudioManager.createBuffer = function(folder, name, ext) {
      ext = ext || this.audioFileExt();
      var url = this._path + folder + '/' + encodeURIComponent(name) + ext;
      try {
            if (this.shouldUseHtml5Audio() && folder === 'bgm') {
                Html5Audio.setup(url);
                return Html5Audio;
            } else {
                return new WebAudio(url);
            }
      } catch(err) {
        ext = undefined;
      }
  };  
  
})();