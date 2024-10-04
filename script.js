
var i=1,start=1,end=6;         
document.getElementsByClassName("img-div")[0].style.backgroundImage=`url('./asset/1.JPG')`;

    document.getElementById("pre").addEventListener("click",()=>{

        --i;
        if(i==0)
        {
            i=end;
        }
        
        switch (i) {
            case 1:
                document.getElementById("project-head").innerText="calc"
                document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                document.getElementById("project-code").href="https://github.com/igbal0521/calculator.git";
                document.getElementById("project-page").href="https://igbal0521.github.io/calculator/";
                break;
            case 2:
                    document.getElementById("project-head").innerText="clock";
                    document.getElementById("project-para").innerText="An analog clock is a tool for reading the time of day. The longest hand indicates the seconds, the longer one indicates the minutes while the smallest one indicates the hours. The shortest hand indicates the hour, a longer hand indicates the minutes";
                    document.getElementById("project-code").href="https://github.com/igbal0521/clock.git";
                    document.getElementById("project-page").href="https://igbal0521.github.io/clock/";
                    break;
             case 3:
                        document.getElementById("project-head").innerText="Dice"
                        document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                        document.getElementById("project-code").href="https://github.com/igbal0521/mydice.git";
                        document.getElementById("project-page").href="https://igbal0521.github.io/mydice/";
                        break;
              case 4:
                            document.getElementById("project-head").innerText="letter"
                            document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                            document.getElementById("project-code").href="https://github.com/igbal0521/letterspeak.git";
                            document.getElementById("project-page").href="https://igbal0521.github.io/letterspeak/";
                            break;
             case 5:
                                document.getElementById("project-head").innerText="simon"
                                document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                                document.getElementById("project-code").href="https://github.com/igbal0521/simon-game.git";
                                document.getElementById("project-page").href="https://igbal0521.github.io/simon-game/";
                                break;

            case 6:
                                document.getElementById("project-head").innerText="Css Desgin"
                                document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                                document.getElementById("project-code").href="https://github.com/igbal0521/senchola_css_1.git";
                                document.getElementById("project-page").href="https://igbal0521.github.io/senchola_css_1/";
                                break;
            default:
                break;
        }

        document.getElementsByClassName("img-div")[0].style.backgroundImage=`url('./asset/${i}.JPG')`;
    })


    document.getElementById("next").addEventListener("click",()=>{

        ++i;
        if(i==7)
        {
            i=start;
        }

           
        switch (i) {
            case 1:
                document.getElementById("project-head").innerText="calc"
                document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                document.getElementById("project-code").href="https://github.com/igbal0521/calculator.git";
                document.getElementById("project-page").href="https://igbal0521.github.io/calculator/";
                break;
            case 2:
                    document.getElementById("project-head").innerText="clock";
                    document.getElementById("project-para").innerText="An analog clock is a tool for reading the time of day. The longest hand indicates the seconds, the longer one indicates the minutes while the smallest one indicates the hours. The shortest hand indicates the hour, a longer hand indicates the minutes";
                    document.getElementById("project-code").href="https://github.com/igbal0521/clock.git";
                    document.getElementById("project-page").href="https://igbal0521.github.io/clock/";
                    break;
             case 3:
                        document.getElementById("project-head").innerText="Dice"
                        document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                        document.getElementById("project-code").href="https://github.com/igbal0521/mydice.git";
                        document.getElementById("project-page").href="https://igbal0521.github.io/mydice/";
                        break;
              case 4:
                            document.getElementById("project-head").innerText="letter"
                            document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                            document.getElementById("project-code").href="https://github.com/igbal0521/letterspeak.git";
                            document.getElementById("project-page").href="https://igbal0521.github.io/letterspeak/";
                            break;
             case 5:
                                document.getElementById("project-head").innerText="simon"
                                document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                                document.getElementById("project-code").href="https://github.com/igbal0521/simon-game.git";
                                document.getElementById("project-page").href="https://igbal0521.github.io/simon-game/";
                                break;

            case 6:
                                document.getElementById("project-head").innerText="Css Desgin"
                                document.getElementById("project-para").innerText="Dice represent a means of control, or at least the illusion of control, and that is why they are still popular today. How ironic it is that the same tool used to tell us about our lives is also used for games!";
                                document.getElementById("project-code").href="https://github.com/igbal0521/senchola_css_1.git";
                                document.getElementById("project-page").href="https://igbal0521.github.io/senchola_css_1/";
                                break;
            default:
                break;
        }

    document.getElementsByClassName("img-div")[0].style.backgroundImage=`url('./asset/${i}.JPG')`;
})
