/*
 *  Написать класс, реализующий список.
 *  Предусмотреть методы:
 *   - поиск элемента
 *   - вставка элемента
 *   - удаление элемента
 *   - изменения элемента
 *   - определения длины списка
 */

class MyListItem {
    next = null;
    value = null;
}

class MyList {
    constructor() {
        this.first = null;
    }

    /* определения длины списка */
    get length() {
        if(this.first === null) {
            return 0;
        }

        let length = 0
        for(let i = this.first; i !== null; i = i.next) {
            length += 1;
        }
        return length;
    }

    /* вставка элемента (в начало) */
    addToBegin(value) {
        let new_item = new MyListItem();
        new_item.value = value;
        new_item.next = this.first;
        this.first = new_item;
    }

    /* вставка элемента (в конец) */
    addToEnd(value) {
        let new_item = new MyListItem();
        new_item.value = value;
        if(this.first === null) {
            this.first = new_item;
            return;
        }
        let current_item = this.first;
        while (current_item.next !== null) {
            current_item = current_item.next;
        }
        current_item.next = new_item;
    }

    /* получение элемента
     *   position - порядковый номер элемента (индексация с нуля)
     */
    getValue(position) {
        if(this.first === null) {
            return undefined;
        }

        let current_item = this.first;
        let current_position = 0;
        while (current_item !== null) {
            if(position == current_position) {
                return current_item.value;
            }
            current_position++;
            current_item = current_item.next;
        }
        return undefined;
    }

    /* поиск позиции элемента по значени (не строгое сравнение) */
    find(value) {
        if(this.first === null) {
            return undefined;
        }

        let current_item = this.first;
        let current_position = 0;
        while(current_item !== null) {
            if(current_item.value == value) {
                return current_position
            }
            current_position++;
            current_item = current_item.next;
        }
        return undefined;
    }

    /* поиск позиции элемента по значени (строгое сравнение) */
    findStrict(value) {
        if(this.first === null) {
            return undefined;
        }

        let current_item = this.first;
        let current_position = 0;
        while(current_item !== null) {
            if(current_item.value === value) {
                return current_position
            }
            current_position++;
            current_item = current_item.next;
        }
        return undefined;
    }

    /* изменения элемента списка
     *   position - порядковый номер элемента (индексация с нуля)
     *   value    - новое значение.
     * Возвращаемое значение:
     *   прежнее значение или undefined при неккоректном значении позиции
     */
    modify(position, value) {
        if(this.first === null) {
            return undefined;
        }

        let current_item = this.first;
        let current_position = 0;
        while (current_item !== null) {
            if(position == current_position) {
                let old_value = current_item.value;
                current_item.value = value;
                return old_value;
            }
            current_position++;
            current_item = current_item.next;
        }
        return undefined;
    }

    /* удаление элемента
     *   position - порядковый номер элемента (индексация с нуля)
     * возвращаемое значение:
     *   прежнее значение или undefined при неккоректном значении позиции
     */
    remove(position) {
        if(this.first === null) {
            return undefined;
        }

        let old_value;
        if(position == 0)
        {
            old_value = this.first.value;
            this.first = this.first.next;
            return old_value;
        }

        if(position >= this.length) {
            return undefined;
        }

        for(let current_item = this.first, current_position = 0; current_item.next !== null; current_item = current_item.next, current_position++) {
            if( position == (current_position + 1) ) {
                let old_value = current_item.next.value;
                current_item.next = current_item.next.next;
                return old_value;
            }
        }

        return undefined;
    }

    print() {
        if(this.first === null) {
            return;
        }

        for(let i = this.first; i !== null; i = i.next){
            console.log (i.value);
        }
    }
}


/* проверяем работу */
let list = new MyList();
list.addToEnd("2");
list.addToEnd("3");
list.addToEnd("4");
list.addToBegin("1");
list.addToBegin("0");

for(let i = 0; i < list.length; i ++) {
    console.log( "list [" + i + "] = " + list.getValue(i) );
}

list.modify(1, "11");
list.modify( list.find("2"), "222" );
list.remove(3);

console.log("");
for(let i = 0; i < list.length; i ++) {
    console.log( "list [" + i + "] = " + list.getValue(i) );
}
