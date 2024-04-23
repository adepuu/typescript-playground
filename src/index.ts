function rectangleArea(l:number, w:number):number{
    return l*w;
}
console.log(rectangleArea(5,3))

function circleProperties(radius: number): { diameter: number, circumference: number, area: number } {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius ** 2;
    return { diameter, circumference, area };
}
console.log(circleProperties(5))

function thirdAngle(angle1:number,angle2:number):number{
    return 180-angle1-angle2;
}
console.log(thirdAngle(65,50))

function dateDiff(date1:Date, date2:Date):number{
    return Math.round(Math.abs(date1.getTime() - date2.getTime()) / (1000 * 3600 * 24))
}
let date1= new Date("03/19/2024"),date2=new Date("03/21/2024")
console.log(dateDiff(date1,date2))

function getInitials(fullName:String) {
    let names = fullName.split(" ");
    let initials = "";
    names.forEach(name => {
        initials += name.charAt(0).toUpperCase();
    });
    return initials;
}

let fullName = "John Doe";
let initials = getInitials(fullName);
console.log("Initials:", initials); // Output: JD