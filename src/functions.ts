function rectangle(length:number, width:number){
    return length*width;
}

function circle(radius:number){
    let diameter:number = radius * 2;
    let circumference:number = Math.PI * diameter;
    let area:number = Math.PI * (radius)**2;

    return `Diameter: ${diameter}, Circumference: ${circumference}, Area: ${area}`;
}

function triangle(a:number, b:number){
    return 180-a-b;
}

function dateDiff(date1:Date, date2:Date){
    let difference:number = date2.getTime() - date1.getTime();
    let diffDays:number = difference/(1000 * 3600 * 24);
    return diffDays
}

function initials(name:string){
    let nameStr:string = "";
    let nameArr:string[] = name.split(" ");
    nameArr.forEach(
        (i) => {
            nameStr+=i[0]
        }
    );

    return nameStr;
}

export { rectangle, circle, triangle, dateDiff, initials };