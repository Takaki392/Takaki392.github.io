/* MVCモデルで設計 */

/* Model */
/* 問い合わせフォームの部分 */
class Form {
    constructor(name, mail, subject, messege){
        this.name = name;
        this.mail = mail;
        this.subject = subject;
        this.messege = messege;
    }

    isAllEmpty(){
        return this.name === "" && this.mail === "" && this.subject === "" && this.messege === "";
    }
}

/* View */
class View {

}

/* Controler */
class Controler {

}