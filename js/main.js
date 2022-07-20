/* MVCモデルで設計 */
const config = {
    backColor: "bg-defult",
};

/* Model */
class DateFormatter extends Date {
    constructor(){
       super();
    }

    getDateOfToday(){
        let year = this.getFullYear();
        let month = this.getMonth() + 1;
        let day = this.getDate();

        return year + "/" + month+ "/" + day;
    }

    getCurrentTime(){
        let hours = this.getHours().toString()
        let minutes = this.getMinutes().toString();
        let seconds = this.getSeconds().toString();

        if(minutes.length == 1) minutes = "0" + minutes; 
        if(seconds.length == 1) seconds = "0" + seconds;

        return hours + ":" + minutes + ":" + seconds;
    }
}

/* View */
class View {
    static updateTimePage(dateFormatter){
        let timeP = document.querySelectorAll(".currentTime")[0];
        timeP.innerHTML = ``;
        timeP.innerHTML = `
        ${dateFormatter.getDateOfToday()} ${dateFormatter.getCurrentTime()}
        `;
    }

    static openModal(){
        let isVisibleDiv = document.querySelectorAll(".visible")[0];
        isVisibleDiv.classList.replace("d-none", "d-block");
    }

    static closeModal(){
        let isVisibleDiv = document.querySelectorAll(".visible")[0];
        isVisibleDiv.classList.replace("d-block", "d-none");
    }

    static changeBackColor(backColor){
        let headerEle = document.querySelectorAll(".header")[0];
        let asideEle = document.querySelectorAll(".aside")[0];
        let footerEle = document.querySelectorAll(".footer")[0];
        let asideBtnEle = document.querySelectorAll(".asideBtn")[0];

        if(headerEle !== undefined) headerEle.classList.replace(config.backColor, backColor);
        if(asideEle !== undefined) asideEle.classList.replace(config.backColor, backColor);
        if(footerEle !== undefined) footerEle.classList.replace(config.backColor, backColor);
        if(asideBtnEle !== undefined) asideBtnEle.classList.replace(config.backColor, backColor);
        
        config.backColor = backColor;
    }

    static submit(){
        alert("送信しました");
    }
}

/* Controler */
class Controler {
    static launchMainPage(){
        let defultBackColor = "bg-royalblue";
        View.changeBackColor(defultBackColor);

        let dateFormatter = new DateFormatter();
        View.updateTimePage(dateFormatter);
        Controler.setDateTimer();
    }

    static setDateTimer(){
        setInterval(function(){
            let dateFormatter = new DateFormatter();
            View.updateTimePage(dateFormatter);
        }, 1000);
    }

    static openModal(){
        View.openModal();
    }

    static closeModal(){
        View.closeModal();
    }

    static changeBackColor(backColor){
        View.changeBackColor(backColor);
    }

    static submit(){
        View.submit();
    }
}

Controler.launchMainPage();