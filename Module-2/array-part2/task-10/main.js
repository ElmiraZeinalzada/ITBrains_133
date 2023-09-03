const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

function printWithDashes(value) {
    console.log('-------------');
    console.log(value);
    console.log('-------------');
}
names.forEach(printWithDashes)

function printWithHearts(value) {
    console.log(`<3<3<3<3 ${value} <3<3<3<3`);
}
names.forEach(printWithHearts)

function printWithIndex(value, index) {
    console.log(`${index} - ${value}`);
}
names.forEach(printWithIndex)