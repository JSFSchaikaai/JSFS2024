"use strict";
/*
 *  Написать класс, реализующий список.
 *  Предусмотреть методы:
 *   - поиск элемента
 *   - вставка элемента
 *   - удаление элемента
 *   - изменения элемента
 *   - определения длины списка
 */
var MyListItem = /** @class */ (function () {
    function MyListItem() {
        this.next = null;
        this.value = null;
    }
    return MyListItem;
}());
var MyList = /** @class */ (function () {
    function MyList() {
        this.first = null;
    }
    Object.defineProperty(MyList.prototype, "length", {
        /* определения длины списка */
        get: function () {
            if (this.first === null) {
                return 0;
            }
            var length = 0;
            for (var item = this.first; item !== null; item = item.next) {
                length += 1;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    /* вставка элемента (в начало) */
    MyList.prototype.addToBegin = function (value) {
        var new_item = new MyListItem();
        new_item.value = value;
        new_item.next = this.first;
        this.first = new_item;
    };
    /* вставка элемента (в конец) */
    MyList.prototype.addToEnd = function (value) {
        var new_item = new MyListItem();
        new_item.value = value;
        if (this.first === null) {
            this.first = new_item;
            return;
        }
        var current_item = this.first;
        while (current_item.next !== null) {
            current_item = current_item.next;
        }
        current_item.next = new_item;
    };
    /* получение элемента
     *   position - порядковый номер элемента (индексация с нуля)
     */
    MyList.prototype.getValue = function (position) {
        if (this.first === null) {
            return undefined;
        }
        var current_item = this.first;
        var current_position = 0;
        while (current_item !== null) {
            if (position == current_position) {
                return current_item.value;
            }
            current_position++;
            current_item = current_item.next;
        }
        return undefined;
    };
    /* поиск позиции элемента по значени */
    MyList.prototype.find = function (value) {
        if (this.first === null) {
            return undefined;
        }
        var current_item = this.first;
        var current_position = 0;
        while (current_item !== null) {
            if (current_item.value == value) {
                return current_position;
            }
            current_position++;
            current_item = current_item.next;
        }
        return undefined;
    };
    /* изменения элемента списка
     *   position - порядковый номер элемента (индексация с нуля)
     *   value    - новое значение.
     * Возвращаемое значение:
     *   прежнее значение или undefined при неккоректном значении позиции
     */
    MyList.prototype.modify = function (position, value) {
        if (this.first === null) {
            return undefined;
        }
        var current_item = this.first;
        var current_position = 0;
        while (current_item !== null) {
            if (position == current_position) {
                var old_value = current_item.value;
                current_item.value = value;
                return old_value;
            }
            current_position++;
            current_item = current_item.next;
        }
        return undefined;
    };
    /* удаление элемента
     *   position - порядковый номер элемента (индексация с нуля)
     * возвращаемое значение:
     *   прежнее значение или undefined при неккоректном значении позиции
     */
    MyList.prototype.remove = function (position) {
        if (this.first === null) {
            return undefined;
        }
        var old_value;
        if (position == 0) {
            old_value = this.first.value;
            this.first = this.first.next;
            return old_value;
        }
        if (position >= this.length) {
            return undefined;
        }
        for (var current_item = this.first, current_position = 0; current_item.next !== null; current_item = current_item.next, current_position++) {
            if (position == (current_position + 1)) {
                var old_value_1 = current_item.next.value;
                current_item.next = current_item.next.next;
                return old_value_1;
            }
        }
        return undefined;
    };
    MyList.prototype._debugPrint = function () {
        if (this.first === null) {
            return;
        }
        for (var item = this.first; item !== null; item = item.next) {
            console.log(item.value);
        }
    };
    return MyList;
}());
/* проверяем работу */
var list = new MyList();
list.addToEnd("2");
list.addToEnd("3");
list.addToEnd("4");
list.addToBegin("1");
list.addToBegin("0");
for (var i = 0; i < list.length; i++) {
    console.log("list [" + i + "] = " + list.getValue(i));
}
list.modify(1, "11");
var index = list.find("2");
if (index !== undefined) {
    list.modify(index, "222");
}
list.remove(3);
console.log("");
for (var i = 0; i < list.length; i++) {
    console.log("list [" + i + "] = " + list.getValue(i));
}
