// function to get rectangle area
export function rectangleArea (length:number, width:number):number{
    return length*width;
}

// function to get detailcircle
export function detailCircle (radius:number):string{
    const pi:number = 3.14159;
    let diameter:number = 2*radius;
    let circum:number = 2*radius* pi;
    let area:number = (radius**2)* pi;

    return `diameter = ${diameter}, circumference = ${circum.toFixed(4)}, area = ${area.toFixed(4)}`;
}


// function to get angle 
export function findAngle  (a:number, b:number):number{
    return 180-(a+b);
}

// function to get diff day 
export function findDiffDate(x: string, y: string): number {
    let firstDate: Date = new Date(x);
    let secondDate: Date = new Date(y)

    let timeDif: number = secondDate.getTime() - firstDate.getTime();
    const result: number = timeDif / (24 * 3600 * 1000);

    return result;
}


// function to get initial from fullname
export function findInitial (a:string):string{
    let initial: string  = "";
    const names = a.split(' ');

    for (const n of names) {
        if (n.trim() !== '') {
            initial += n.trim()[0].toUpperCase();
        }
    }
    return initial;
}