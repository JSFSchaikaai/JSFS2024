"use strict";
/*
 * Задание: Написать класс, реализующий дерево.
 * Предусмотреть методы поиска, вставки элемента и определения высоты дерева.
 */
/*
 * Описание:
 * Дерево будет храниться в виде массива пар "имя родительского элемента" - "имя элемента".
 * В качестве "имени элемента" допускаются значения типа string, number и null (для корневого элемента).
 */
var TreeItem = /** @class */ (function () {
    function TreeItem(parent, name) {
        this.parent = parent;
        this.name = name;
    }
    return TreeItem;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.items = [];
    }
    Tree.prototype.add = function (parent, name) {
        if (this.find(name) == true) {
            return false;
        }
        if (parent === null) {
            this.items.push(new TreeItem(null, name));
            return true;
        }
        if (this.find(parent) != true) {
            return false;
        }
        this.items.push(new TreeItem(parent, name));
        return true;
    };
    /* под "поиском" понимаем проверку наличия элемента в дереве */
    Tree.prototype.find = function (name) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].name === name) {
                return true;
            }
        }
        return false;
    };
    Tree.prototype._getSubtreeHeight = function (parent, cur_depth) {
        var max_depth = cur_depth;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].parent === parent) {
                var depth = this._getSubtreeHeight(this.items[i].name, cur_depth + 1);
                if (depth > max_depth) {
                    max_depth = depth;
                }
            }
        }
        return max_depth;
    };
    Object.defineProperty(Tree.prototype, "height", {
        /* получение "высоты" дерева */
        get: function () {
            return this._getSubtreeHeight(null, 0);
        },
        enumerable: false,
        configurable: true
    });
    Tree.prototype._debugPrintSubTree = function (parent, shift) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].parent === parent) {
                if ((typeof this.items[i].name) == "string") {
                    console.log(shift + "[ \"" + this.items[i].name + "\" ]");
                }
                else {
                    console.log(shift + "[ #" + this.items[i].name + " ]");
                }
                this._debugPrintSubTree(this.items[i].name, shift + "     ");
            }
        }
    };
    Tree.prototype._debugPrintTree = function () {
        this._debugPrintSubTree(null, "");
    };
    return Tree;
}());
var tree = new Tree();
tree.add(null, "1");
tree.add(null, 2);
tree.add(null, "3");
tree.add("1", "11");
tree.add("1", "12");
tree.add("12", "121");
tree.add("12", "122");
tree.add("1", "13");
tree.add(2, 21);
tree.add(2, 22);
console.log("height = ", tree.height);
tree._debugPrintTree();
