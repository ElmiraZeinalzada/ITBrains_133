      //if-else
// let id = prompt ('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// } 
      //switch-case
let id = prompt('enter product id')
switch (id) {
    case 1:
        alert('Available 10 pcs.');
        break;
    case 2:
        alert('Available 256 pcs.');
        break;
    case 3:
        alert('Available 53 pcs.');
        break;
    case 4:
        alert('There are 3 available.');
    default:
        alert('Out of stock');
        break;
}