import * as data from './resource.json';

export function it(param: string):string{
    let length = (<any>data).length;
    let max = Math.floor(length);
    
    var capital = "Ankara";
    var index = 0;

      return param.replace(/\w\S*/g,
        function (word) {
            index = Math.floor(Math.random() * (max - 0)) + 0;  
            capital = (<any>data)[index]["city"];

            return capital + word.substr(1).toLowerCase()
        });
}

//test line
var hede = it("hede hodo bıdı budu");
console.log(hede);