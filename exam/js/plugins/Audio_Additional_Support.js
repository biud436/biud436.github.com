/*:
 * Audio_Additional_Support.js
 * @plugindesc Audio Additional Support
 */

(function() {
  
  /**
   * @static
   * @method _createContext
   * @private
   */
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
          this._canPlayWav = audio.canPlayType('audio/wav; codecs="1"');
          this._canPlayMp3 = audio.canPlayType("audio/mpeg");
          this._canPlayMp4 = audio.canPlayType("audio/mp4");
          WebAudio._Suppot['ogg'] = !!this._canPlayOgg;
          WebAudio._Suppot['m4a'] = !!this._canPlayM4a
          WebAudio._Suppot['wav'] = !!this._canPlayWav;          
          WebAudio._Suppot['mp3'] = !!this._canPlayMp3;          
          WebAudio._Suppot['mp4'] = !!this._canPlayMp4;
      }
  };
  
  WebAudio.canPlayType = function(type) {
      if (!this._initialized) {
          this.initialize();
      }
      return WebAudio._Suppot[type];
  };
  
  AudioManager.audioFileExt = function() {
      var type = ['ogg','m4a','wav','mp3','mp4'];
      type.forEach(function(i,e,arr) {
        if(WebAudio.canPlayType(i)) {
          return '.' + arr[i];
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
            var url = this._path + folder + '/' + encodeURIComponent(name) + ext;
            return new WebAudio(
      }
  };

})();