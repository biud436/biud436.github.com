/*:
 * @plugindesc 아이템 머릿말에 변수 표시
 */

Window_ItemList.prototype.drawItemName = function(item, x, y, width) {
    width = width || 312;
    if (item) {
        var iconBoxWidth = Window_Base._iconWidth + 4;
        this.resetTextColor();
        this.drawIcon(item.iconIndex, x + 2, y + 2);
        this.drawTextEx(item.name, x + iconBoxWidth, y);
    }
};