// Obyekt verilib. Ona növbəti metodları əlavə edin:
//   setAge — istifadəçi yaşını dəyişdirən metoddur.
//   getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
//  qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.

let user = {
    name: 'Elmira',
    gender: 'female',
    age: 20,
    setAge(newAge) {
        this.age = newAge
    },
    getYearsBeforeRetirement(years) {
        return (65 - this.age)
    }
}
user.setAge(22);
console.log(`Your years until retirement: ${user.getYearsBeforeRetirement()}`);
console.log(user);
