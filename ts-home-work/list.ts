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
    next: MyListItem|null = null;
    value: any = null;
}

class MyList {
    first: MyListItem|null = null;

    /* определения длины списка */
    get length(): number {
        if(this.first === null) {
            return 0;
        }

        let length: number = 0
        for(let item: MyListItem|null = this.first; item !== null; item = item.next) {
            length += 1;
        }
        return length;
    }

    /* вставка элемента (в начало) */
    addToBegin(value: any) {
            let new_item: MyListItem = new MyListItem();
            new_item.value = value;
            new_item.next = this.first;
            this.first = new_item;
    }

    /* вставка элемента (в конец) */
    addToEnd(value: any) {
        let new_item: MyListItem|null = new MyListItem();
        new_item.value = value;
        if(this.first === null) {
            this.first = new_item;
            return;
        }
        
        let current_item: MyListItem|null = this.first;
        while (current_item.next !== null) {
            current_item = current_item.next;
        }
        current_item.next = new_item;
    }

    /* получение элемента
     *   position - порядковый номер элемента (индексация с нуля)
     */
    getValue(position: number): any {
        if(this.first === null) {
            return undefined;
        }

        let current_item: MyListItem|null = this.first;
        let current_position: number = 0;
        while (current_item !== null) {
            if(position == current_position) {
                return current_item.value;
            }
            current_position++;
            current_item = current_item.next;
        }
        return undefined;
    }

    /* поиск позиции элемента по значени */
    find(value: any): number|undefined{
        if(this.first === null) {
            return undefined;
        }

        let current_item: MyListItem|null = this.first;
        let current_position: number = 0;
        while(current_item !== null) {
            if(current_item.value == value) {
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
    modify(position: number, value: any ): any|undefined {
        if(this.first === null) {
            return undefined;
        }

        let current_item: MyListItem|null = this.first;
        let current_position: number = 0;
        while (current_item !== null) {
            if(position == current_position) {
                let old_value: any = current_item.value;
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
    remove(position: number): any|undefined {
        if(this.first === null) {
            return undefined;
        }

        let old_value: any;
        if(position == 0)
        {
            old_value = this.first.value;
            this.first = this.first.next;
            return old_value;
        }

        if(position >= this.length) {
            return undefined;
        }
        
        for(let current_item:MyListItem|null = this.first, current_position:number = 0;
             current_item.next !== null;
             current_item = current_item.next, current_position++) {
            if( position == (current_position + 1) ) {
                let old_value: any = current_item.next.value;
                current_item.next = current_item.next.next;
                return old_value;
            }
        }

        return undefined;
    }

    _debugPrint(): void {
        if(this.first === null) {
            return;
        }

        for(let item: MyListItem|null = this.first; item !== null; item = item.next){
            console.log (item.value);
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
let index:number|undefined = list.find("2");
if( index !== undefined ) {
    list.modify(index, "222" );
}
list.remove(3);

console.log("");
for(let i = 0; i < list.length; i ++) {
    console.log( "list [" + i + "] = " + list.getValue(i) );
}