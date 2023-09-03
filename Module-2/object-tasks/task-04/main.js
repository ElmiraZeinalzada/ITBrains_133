const client = {
    fullName: prompt('Tam adiniz:'),
    creditLimit: +prompt('Kredit limitiniz:'),
    balance: +prompt('Cari balansiniz:'),
    precentOfMinPayment: +prompt('Minimum odenis faizi:'),
    getBalance() {
        console.log(`Balansiniz  ${this.balance}`);
        console.log(`Borcunuz ${(this.creditLimit  - this.balance)}`);
    },
    getMinPaymant() {

    }
}
client.getBalance()