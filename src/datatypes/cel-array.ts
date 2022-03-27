
export function findAndDelete(arr: Array<any>,thing:any) : any {
    if (typeof thing === 'function') {
        let index = arr.find(thing)
        if (index) {
            arr.splice(index,1)
        }
    } else {
        let index = arr.indexOf(thing)
        if (~index) {
            arr.splice(index,1)
        }
    }
    return arr;
}