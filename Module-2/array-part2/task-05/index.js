// Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
// Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın, 
// hansıki proqramlaşma şöbəsinin işçilərini, və s. texniki işçiləri özündə saxlayacaq, 
// yəni department özəlliyinin dəyəri «development» olan işçiləri.


let employees = [
    ['Jaylee Macy', 'marketing'],
    ['John Smith', 'management'],
    ['Blossom Hartley', 'design'],
    ['Austin Carpenter', 'marketing'],
    ['Joan Knowles', 'development'],
    ['Sally Nunez', 'management'],
    ['Laurel Ward', 'development'],
    ['Lark Simon', 'marketing'],
    ['Jane Stone', 'management'],
    ['Courtney Olson', 'development'],
];

let development = employees.filter((e) => e[1] == 'development');
console.log(development);