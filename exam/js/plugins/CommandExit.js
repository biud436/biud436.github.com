/*:
 * CommandExit.js
 * @plugindesc 게임 종료
 *
 * @param URL
 * @desc 제작자 개인 홈페이지 주소
 * @default http://www.naver.com/
 * 
 * @param WebSite
 * @desc 
 * @default 제작자 블로그 가기
 *
 * @param Exit
 * @desc 버튼명
 * @default Game Exit
 *
*/

(function() {

  var parameters = PluginManager.parameters('CommandExit');
  var szExit = String(parameters['Exit'] || "게임 종료");
  var szURL = String(parameters['URL'] || "http://www.naver.com/");
  var szWebSite = String(parameters['WebSite'] || "제작자 홈페이지");

Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    this.addCommand(szWebSite, 'website');
    this.addCommand(szExit,   'exit');
};

Scene_Title.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_TitleCommand();
    this._commandWindow.setHandler('newGame',  this.commandNewGame.bind(this));
    this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    this._commandWindow.setHandler('website',  this.commandWebSite.bind(this));
    this._commandWindow.setHandler('exit',  this.commandExit.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Title.prototype.commandWebSite = function() {
    window.open(URL, '_blank');
};

Scene_Title.prototype.commandExit = function() {
    this._commandWindow.close();
    this.fadeOutAll();
    window.close();
};

})();