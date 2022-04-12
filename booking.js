function myPrevious()
{
    document.getElementById("progress").value--;
    myProgress();
}

function myNext()
{
    document.getElementById("progress").value++;
    myProgress();
}

function openPage1()
{
    document.getElementById('bookingHeadBox').style.display ="";
    document.getElementById('page1').style.display = "";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "none";
    document.getElementById('pageSummary').style.display = "none";
}

function openPage2()
{
    document.getElementById('bookingHeadBox').style.display ="";
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "none";
    document.getElementById('pageSummary').style.display = "none";
}

function openPage3()
{
    document.getElementById('bookingHeadBox').style.display ="";
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "";
    document.getElementById('page4').style.display = "none";
    document.getElementById('pageSummary').style.display = "none";
}

function openPage4()
{
    document.getElementById('bookingHeadBox').style.display ="";
    document.getElementById('page1').style.display = "none";
    document.getElementById('page2').style.display = "none";
    document.getElementById('page3').style.display = "none";
    document.getElementById('page4').style.display = "";
    document.getElementById('pageSummary').style.display = "none";
}

function openPageSummary()
{
    if(validateInput())
    {
        document.getElementById('bookingHeadBox').style.display ="none";
        document.getElementById('page1').style.display = "none";
        document.getElementById('page2').style.display = "none";
        document.getElementById('page3').style.display = "none";
        document.getElementById('page4').style.display = "none";
        document.getElementById('pageSummary').style.display = "";    
    }
    else
    {
        alert("Please, enter every inputs.");
    }
    
}

function openPageSummit()
{    
    alert("Thank you for your booking.");
    location.reload();
}

function myProgress()
{
    var numPage = document.getElementById("progress").value;
    
    switch(numPage){
        case "1":
            openPage1();
            break;
        case "2":
            openPage2();
            break;
        case "3":
            openPage3();
            break;
        case "4":
            openPage4();
            break;
        case "5":
            openPageSummit();
            break;
    }
}

function validateInput()
{
    try
    {
        if(document.getElementById("twoSingle").checked) document.getElementById("lbBedType").innerHTML = document.getElementById("twoSingle").value;
        else if(document.getElementById("queenBed").checked) document.getElementById("lbBedType").innerHTML = document.getElementById("queenBed").value;
        else if(document.getElementById("bunkBed").checked) document.getElementById("lbBedType").innerHTML = document.getElementById("bunkBed").value;

        debugger
        var xx = document.getElementById("rgArravalTime").value;
        document.getElementById("lbTime").innerHTML = document.getElementById("rgArravalTime").value + " PM";
        xx = document.getElementById("lbTime").innerHTML;
        document.getElementById("lbNumRoom").innerHTML = document.getElementById("numRooms").value;
        document.getElementById("lbBreakfast").innerHTML = document.getElementById("breakfast").value;    

        document.getElementById("lbColour").style.backgroundColor = document.getElementById("favouriteColor").value;        

        document.getElementById("lbName").innerHTML = document.getElementById("txtFirstName").value + " " + document.getElementById("txtLastName").value;
        document.getElementById("lbEmail").innerHTML = document.getElementById("txtEmail").value;
        document.getElementById("lbPhone").innerHTML = document.getElementById("txtPhoneNo").value;

        document.getElementById("lbChoice").innerHTML = "";
        if(document.getElementById("ckBabaCot").checked) document.getElementById("lbChoice").innerHTML += document.getElementById("ckBabaCot").value + "<br>";
        if(document.getElementById("ckBicycle").checked) document.getElementById("lbChoice").innerHTML += document.getElementById("ckBicycle").value + "<br>";
        if(document.getElementById("ckGoggles").checked) document.getElementById("lbChoice").innerHTML += document.getElementById("ckGoggles").value + "<br>";
        if(document.getElementById("ckSurfBoard").checked) document.getElementById("lbChoice").innerHTML += document.getElementById("ckSurfBoard").value;

        if((document.getElementById("inDay").value != "") && (document.getElementById("outDay").value != "") && 
            (document.getElementById("numAdults").value + document.getElementById("numChildren").value > 0) &&
            (document.getElementById("txtFirstName").value !="") && (document.getElementById("txtLastName").value !="") && 
            (document.getElementById("txtEmail").value != "") && (document.getElementById("txtPhoneNo").value != ""))
        {   
            return true;
        }
        else
        {
            return false;
        }
    }
    catch(err)
    {
        return false;
    }
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
            document.getElementById("lbCheckIn").innerHTML = checkIn;
            document.getElementById("lbCheckOut").innerHTML = checkOut;
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
    document.getElementById("lbVisitor").innerHTML = totalPp + " people";
}

function ArrivalTimeChange()
{
    document.getElementById("lbArrivalTime").innerHTML = document.getElementById("rgArravalTime").value + " PM";
}


/////////////////////// Task2 AD function  ////////////////////////////////////////////////////////

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