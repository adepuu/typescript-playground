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

