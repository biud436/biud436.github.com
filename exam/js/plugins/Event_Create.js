/*:
 * @plugindesc 이벤트 생성 플러그인입니다.
 * @author biud436
 * @since 2015.10.16
 * @version 1.0
 * @help 
 * 
 * 플러그인 커맨드
 * InstanceCreate(x, y, charName, charIdx)
 * InstanceDestroy(이벤트번호)
 * InstanceCopy(x, y, mapID, eventID )
 */
 
var RS = RS || {}; 
 
Object.defineProperty(Array.prototype, "first", {
  get: function() {
    return this[0];
  }
});

Object.defineProperty(Array.prototype, "last", {
  get: function() {
    var idx = this.length - 1;
    return this[idx];
  }
});

Array.prototype.delete = function(deleteItem) {
  var tmp = this.filter(
    function(findValue) {
      return findValue != deleteItem;
    }
  );
  return tmp;
};
  
(function() {
  
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    switch(command) {
    case '이벤트생성':
      RS.instanceCreate.apply(this, args);
      break;
    case '이벤트복제':
      RS.instanceCopy.apply(this, args);
      break;         
    case '이벤트삭제':
      RS.instanceDestroy($gameMap.events(Number(args[0])));
      break;                   
    }
  };  
  
  RS.loadDataFile = DataManager.loadDataFile;
  
  RS.loadMapData = function(mapId) {
      if (mapId > 0) {
          var filename = 'Map%1.json'.format(mapId.padZero(3));
          this.loadDataFile('$dataMap', filename);
      } else {
          this.makeEmptyMap();
      }
  };  
  
  RS.instanceCreate = function(x, y, charName, charIdx) {
    var oEvent = $gameMap._events.last;
    var eventID = oEvent.eventId() + 1;
    var eventName = "EV" + String(eventID / 100).replace(".","")
    $dataMap.events.push(  {
      "id": eventID,
      "name": eventName,
      "note": "",
      "pages": [{
        "conditions": {
          "actorId": 1,
          "actorValid": false,
          "itemId": 1,
          "itemValid": false,
          "selfSwitchCh": "A",
          "selfSwitchValid": false,
          "switch1Id": 1,
          "switch1Valid": false,
          "switch2Id": 1,
          "switch2Valid": false,
          "variableId": 1,
          "variableValid": false,
          "variableValue": 0
        },
        "directionFix": false,
        "image": {
          "tileId": 0,
          "characterName": charName || "Actor1",
          "direction": 2,
          "pattern": 1,
          "characterIndex": charIdx || 4
        },
        "list": [{
          "code": 101,
          "indent": 0,
          "parameters": [charName || "Actor1", charIdx || 4, 0, 2]
        },
        {
          "code": 401,
          "indent": 0,
          "parameters": ["\\c[4]-테스트-\\c[0]"]
        },
        {
          "code": 401,
          "indent": 0,
          "parameters": ["안녕하세요. 테스트 캐릭터입니다. "]
        },
        {
          "code": 0,
          "indent": 0,
          "parameters": []
        }],
        "moveFrequency": 3,
        "moveRoute": {
          "list": [{
            "code": 0,
            "parameters": []
          }],
          "repeat": true,
          "skippable": false,
          "wait": false
        },
        "moveSpeed": 3,
        "moveType": 0,
        "priorityType": 1,
        "stepAnime": false,
        "through": false,
        "trigger": 0,
        "walkAnime": true
      }],
      "x": Number(x),
      "y": Number(y)
    });
    return RS.instanceCopy(Number(x), Number(y), $gameMap.mapId, eventID);
  }
 
  RS.instanceCopy = function(x, y, mapID, eventID ) {
    var _event = new Game_Event(Number(mapID) || $gameMap.mapId, Number(eventID) || 1);
    _event.setPosition(Number(x) || $gamePlayer._x, Number(y) || $gamePlayer._y + 1);
    _event.lock();
    $gameMap._events.push(_event);
    
    SceneManager._scene._spriteset.createCharacters();
    _event.unlock();
    return $gameMap._events.last;
  };
  
  RS.instanceDestroy = function(_event) {
    if(_event instanceof Game_Event)
    {
      $gameMap._events.forEach( function(event) {
        if(event.eventId() === _event.eventId()) {
          $gameMap._events = $gameMap._events.delete(_event);
        }
      });
      SceneManager._scene.stage._spriteset.createLowerLayer();
    }
  };  
 
})();
 