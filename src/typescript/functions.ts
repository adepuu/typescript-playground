// function to get rectangle area
export function rectangleArea (length:number, width:number):number{
    return length*width;
}

// function to get diametercircle
export function diameterCircle (radius:number):number{
    return 2*radius;
}

// function to get circumference
export function circumference  (radius:number):number{
    return 2*radius* Math.PI;
}

// function to get area circle
export function areaCircle  (radius:number):number{
    return Math.pow(radius, 2)* Math.PI;
}

// function to get angle 
export function findAngle  (a:number, b:number):number{
    return 180-a-b;
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