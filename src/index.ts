// 1. Rectangle area
const areaRectangle = (length: number, width: number): number => {
    return length * width;
}

const result = areaRectangle(5, 3);
console.log(result);

// 2. Circle Area, Radius, circumference
interface CircleProps {
    d: number;
    circum: number;
    circArea: number;
}

const circle = (radius: number): CircleProps => {
    const d = radius * 2;
    const circum = Math.PI * d;
    const circArea = Math.PI * (radius ** 2);

    return { d, circum, circArea }
}

const { d, circum, circArea } = circle(5);

console.log(`diameter: ${d}, circumference: ${circum}, area: ${circArea}`);

// 3. Find angle
const angle = (a: number, b: number): number => {
    return 180 - (a + b);
}

const c = angle(90, 35);
console.log(c);

// 4. Differences between date
function time(x: string, y: string): number {
    let initDate: Date = new Date(x);
    let laterDate: Date = new Date(y)

    let timeDif: number = laterDate.getTime() - initDate.getTime();
    const res: number = timeDif / (24 * 3600 * 1000);

    return res;
}

const result4 = time("2024-03-19", "2024-03-21");
console.log(result4);

// 5. Initial Name
function initName(yourName: string): string {
    let init = "";
    const arr = yourName.split(" ");
    arr.map((v) => {
        init += v[0];
    })

    return init;
}

const myName: string = initName("John Doe");
console.log(myName);