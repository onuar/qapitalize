import * as data from './resource.json';

export function it(param: string):string{
    console.log((<any>data));
    return param;
}

//test line
it("hede");