
/*
 * Задание: Написать класс, реализующий дерево.
 * Предусмотреть методы поиска, вставки элемента и определения высоты дерева.
 */


/*
 * Описание:
 * Дерево будет храниться в виде массива пар "имя родительского элемента" - "имя элемента".
 * В качестве "имени элемента" допускаются значения типа string, number и null (для корневого элемента).
 */
class TreeItem {
    parent: number|string|null;
    name: number|string;
    constructor(parent:number|string|null, name:string|number){
        this.parent = parent;
        this.name = name;
    }
}

class Tree {
    items: Array<TreeItem>;
    constructor(){
        this.items = [];
    }

    add(parent:string|number|null, name:string|number): boolean {

        if(this.find(name) == true) {
            return false;
        }

        if(parent === null) {
            this.items.push( new TreeItem(null, name));
            return true;
        }

        if(this.find(parent) != true) {
            return false;
        }
        this.items.push( new TreeItem(parent, name));
        return true;
    }

    /* под "поиском" понимаем проверку наличия элемента в дереве */ 
    find(name:string|number):boolean{
        for(let i:number = 0; i< this.items.length; i++) {
            if( this.items[i].name === name ){
                return true;
            }
        }
        return false;
    }

    _getSubtreeHeight(parent:string|number|null, cur_depth:number):number {
        let max_depth:number = cur_depth;
        for(let i:number = 0; i < this.items.length; i++) {
            if(this.items[i].parent === parent) {
                let depth:number = this._getSubtreeHeight(this.items[i].name, cur_depth + 1);
                if (depth > max_depth) {
                    max_depth = depth;
                }
            }
        }
        return max_depth;
    }

    /* получение "высоты" дерева */ 
    get height():number {
        return this._getSubtreeHeight(null, 0);
    }

    _debugPrintSubTree(parent:string|number|null, shift:string){
        for(let i:number = 0; i < this.items.length; i++) {
            if(this.items[i].parent === parent) {
                if( (typeof this.items[i].name)  == "string" ){
                    console.log( shift + "[ \"" + this.items[i].name + "\" ]");
                } else {
                    console.log( shift + "[ #" + this.items[i].name + " ]");
                }
                this._debugPrintSubTree(this.items[i].name ,shift + "     ");
            } 
        }
    }
    _debugPrintTree(){
        this._debugPrintSubTree(null, "");
    }

}

let tree = new Tree();

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

console.log("height = ", tree.height );
tree._debugPrintTree();
