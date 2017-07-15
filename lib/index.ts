import * as data from './resource.json';

export function it(param: string):string{
    let length = (<any>data).length;
    let max = Math.floor(length);
    let index = Math.floor(Math.random() * (max - 0)) + 0;
    
    console.log((<any>data)[index]);
    // console.log((<any>data));
    return param;
}

//test line
it("hede");