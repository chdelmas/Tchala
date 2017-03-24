'use strict';
btnEntrer.onclick=function(){
   frmSearch.show();
}
function search() {
    var query, sqlList, args;
    args= [txtFind.value] + "%";
    sqlList = [];
     query= " Select * from TReves where reve like (?) order by _id;";
   sqlList[0] = [ query,  args ,  dreamFound];
   Sql(DB, sqlList);
 }

function dreamFound(transaction, results){
  var record, valeur, dreamName, ImgSrc, boules;
  var result = [];
  var rs, concatResult, concatNumber, result;
      rs = results;
     
      
      frmSearchList1.deleteItem("all");
     frmSearchList1.addItem(" Taper Reve : ","","",True);
    
        if (rs.rows.length > 0)   {
          for(var i=0; i<rs.rows.length; i++) {
            record = rs.rows.item(i)
            dreamName = record["reve"];
            boules = record["boules"];
            concatResult = dreamName +    " : "  + boules;
            ImgSrc = "list_img.png";
            
            frmSearchList1.addItem(concatResult,"",i+1);
            
           }  // fin boucle repetitive fot
         } else {
           frmSearchList1.deleteItem("all"); 
        }   
           concatResult= " " ;
           concatNumber = " ";
           rs= null;
           
}
 
function success(transaction, result) {
    
    NSB.Print("Hello");
    
}

function fail(transaction, results) {
    NSB.Print("Fail function ");
}

function populate_list1() {
    var record;
 }

function AddZero(param) {
   var p;
   if (param.length<2){
      p= "0" +  param;
    } else {
      p=param;
    }
     return     p;
}      
      
  
 
btnFind.onclick=function(){
  search();
}
 

FooterBar1.onclick=function(choice){
   var msg;
   //info, calendar, gear,action, bullet
  if(typeof choice == "object") return;
      switch (choice) {
    case "Info":
        msg = "Info";
           ChangeForm(frm_List);
        break;
    case "Calendar":
           alert("Button is " + choice);
        break;
  case "update" :
          window.applicationCache.update();
          break;
    case "gear":
        day = "Saturday";
        
  }  
}

  
frmSearch.onshow=function(){
frmSearch.width="100%";
frmSearch.height="100%";
frmSearch.width="100%";
frmSearchimage.Width="99%";
frmSearchHB.refresh();
}

 

frmSearchHB.onclick=function(choice){
   var msg, day;
 // NSB.MsgBox(choice);
   switch (choice) {
    case "bullets":
        msg = "Info";
           frmMain.show();
        break;
    case "bars":
            msg = "Info";
            
          //  Panel1.Visible=True;
          //  Panel1.show();
             break;
    case "Calendar":
           alert("Button is " + choice);
        break;
    
    case "gear":
        day = "Saturday";
  }  
}

frmSearchList1.onclick=function(i){
  if(typeof i == "object") return;
     return;
     /*
      Cette methode va permettre d'afficher une description du reve
     
     
     */
     
  //alert("Menu item chosen: " + i + " " + frmSearchList1.getItem(i));
}
    
FooterBar1.onclick=function(choice){
 if(typeof choice == "object") return;
   switch (choice) {
      case "home":
        break;
    case "gear" :
       break;
     case "info" :
       break;
    }   
       
  alert("Button is " + choice);
}
Button1.onclick = function() {
   
     var boule1 ,boule2,boule3,boule4,boule5 ;
     var b1 = new Array();
     var b2 = new Array();
    var b3 = new Array();
    for (var i=0; i<=7; i++) {
        boule1 = Math.floor(Math.random() * 99);
        boule2 = Math.floor(Math.random() * 99);
        boule3 = Math.floor(Math.random() * 99);
         
      }
  
  var rs_boule1=CStr(boule1);
      if(rs_boule1.length==1) {
           b1[0]="boules/" + "0.png";
           b1[1]= "boules/" + rs_boule1 + ".png";
        //   rs_boule1= "0" + rs_boule1;
      } else {
            b1[0]= "boules/" + Left(rs_boule1,1) + ".png";
            b1[1]= "boules/" + Right(rs_boule1,1) + ".png"
        }
        
        // Pour afficher la boule 2
  var rs_boule2=CStr(boule2);
      if(rs_boule2.length==1) {
           b2[0]="boules/" + "0.png";
           b2[1]= "boules/" + rs_boule2 + ".png";
       
      } else {
            b2[0]= "boules/" + Left(rs_boule2,1) + ".png";
            b2[1]= "boules/" + Right(rs_boule2,1) + ".png"
        }      
        
       
         // Pour afficher la boule 3
  var rs_boule3=CStr(boule3);
      if(rs_boule3.length==1) {
           b3[0]="boules/" + "0.png";
           b3[1]= "boules/" + rs_boule3 + ".png";
       
      } else {
            b3[0]= "boules/" + Left(rs_boule3,1) + ".png";
            b3[1]= "boules/" + Right(rs_boule3,1) + ".png"
        }         
       
       
        // boule 1
      Image1.src= b1[0];
      Image2.src= b1[1];
      
        // boule 2
      Image3.src= b2[0];
      Image4.src= b2[1];
      
      
        // boule 3
      Image5.src= b3[0];
      Image6.src= b3[1];
  
 };
 
boulePaw.onshow=function(){
  boulePaw.style.backgroundRepeat="no-repeat";
}
Button2.onclick=function(){
var listBoules, boule, res,List, Who, All, TopTwo;
var listImg="";
var point="boules/point.png";
  List = "12.45.67.89";
  res="";
  var b_ret= new Array();
  var s="'style='width:25px;height:25px;'";
  var sp= "'style='width:5px;height:5px;'";
  listBoules= List.split(".");
   for (boule in listBoules) {
           res = res + getImage(listBoules[boule]);
           b_ret=getSingleImage(listBoules[boule]);
           listImg= listImg + CellImage(b_ret[0],s);
           listImg= listImg + CellImage(b_ret[1],s);
           listImg= listImg +  CellImage(point,sp);
           res= res + point + ",";
 }
     listImg= "<Table><thead>Boules </thead><tr>" +  listImg + "</td></table>";
    res= Left(res,res.length- (point.length+2));
   
      List1.addItem(listImg);
      TextBox1.text = res;
  }


   
    
Form1.onshow=function(){
  List1.deleteItem("all");
  List1.style="fontsize=10px;";
  Form1.style.backgroundRepeat="no-repeat";
}
function getSingleImage(data) {
  var im;
  var b= new Array();
     im=" ";
         if(data.length==1) {
           b[0]="boules/" + "0.png";
           b[1]= "boules/" + data + ".png";
     
      } else {
            b[0]= "boules/" + Left(data,1) + ".png";
            b[1]= "boules/" + Right(data,1) + ".png";
        }
      //  im=b[0] + "," + b[1] + ",";
  return b;
  }
  
  
function getImage(data) {
  var im;
  var b= new Array();
     im=" ";
         if(data.length==1) {
           b[0]="boules/" + "0.png";
           b[1]= "boules/" + data + ".png";
       } else {
            b[0]= "boules/" + Left(data,1) + ".png";
            b[1]= "boules/" + Right(data,1) + ".png";
        }
        im=b[0] + "," + b[1] + ",";
  return im;
  }
  
  function HtmlImage(value) {
    var cellOpen, cellClose;
          cellOpen="<table><td>";
          var im='<img src=' + value + 'style="width:16px;height:16px;">';
          cellClose="</td></table>";
          
        return cellOpen + im + cellClose;
  
  }  
  
   function CellImage(value, style) {
    var cellOpen, cellClose, im;
          cellOpen="<td>";
          im="<img src='" + value +  style + ">";
          cellClose="</td>";
      return cellOpen + im + cellClose;
   }
var loginname, app_php, siteweb, appname;
var DB;
var isAdmin = false;
var settings = "";
var DoubleQuotes;
var SingleQuotes;
var databaseSize; //number of records in the database
var startTime; //used for timer
var lastSQL; //the last SQL statement. Useful for debugging.
var total; //use to total sales from customers
var DBRecords; //the last set of records selected from DB

        
function Main() {
   var usrFile, cmd, req;
    DB = SqlOpenDatabase ("tchala.sqlite");
    DoubleQuotes = Chr(34); // equals "
    SingleQuotes = Chr(39); // equals '
}

function success() {
    console.log("Success load");
}

function fail() {
    console.log("Fail load");
}

function loadComplete() {
    console.log("Load Complete");

 }