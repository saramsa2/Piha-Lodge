function openPage1()
{
    document.getElementById('page1').style.display = "";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('pageSummary').style.display = "none";
}

function openPage2()
{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "none";
    document.getElementById('pageSummary').style.display = "none";
}

function openPage3()
{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "";
    document.getElementById('page4').style.display = "none";
    document.getElementById('pageSummary').style.display = "none";
}

function openPage4()
{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "";
    document.getElementById('pageSummary').style.display = "none";
}

function openPageSummary()
{
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "none";
    document.getElementById('pageSummary').style.display = "";
}
function calStayDays()
{    
    var checkIn = document.getElementById("inDay").value;
    var checkOut = document.getElementById("outDay").value;                     
    if(checkIn != "" && checkOut != "")
    {
        if(checkIn < checkOut)
        {
            var checkInDay = new Date(checkIn);
            var checkOutDay = new Date(checkOut);
            var stayDay = (checkOutDay - checkInDay)/(1000*3600*24);            
            document.getElementById("visitNights").innerHTML = stayDay + " nights stay";
        }
        else
        {
            alert("select valid days");
        }        
    }
}

function calVisitors()
{
    var adults = document.getElementById("numAdults").value;
    var children = document.getElementById("numChildren").value;
    var totalPp = Number(adults) + Number(children);
    document.getElementById("numVisit").innerHTML = "Total "+ totalPp + " people";
}

function restartAd()
{   
    var element = document.getElementById("wheel1");
    element.classList.remove("rolling");
    void element.offsetWidth;
    element.classList.add("rolling"); 

    element = document.getElementById("wheel2");
    element.classList.remove("rolling");
    void element.offsetWidth;
    element.classList.add("rolling"); 

    element = document.getElementById("carContainer");
    element.classList.remove("carStop");
    void element.offsetWidth;
    element.classList.add("carStop"); 

    element = document.getElementById("vText1");
    element.classList.remove("vTxtAni1");
    void element.offsetWidth;
    element.classList.add("vTxtAni1"); 

    element = document.getElementById("vText2");
    element.classList.remove("vTxtAni2");
    void element.offsetWidth;
    element.classList.add("vTxtAni2"); 

    element = document.getElementById("myInforamtion2");
    element.classList.remove("myInfoAni");
    void element.offsetWidth;
    element.classList.add("myInfoAni"); 

    element = document.getElementById("restart");
    element.classList.remove("btnAni");
    void element.offsetWidth;
    element.classList.add("btnAni"); 
}