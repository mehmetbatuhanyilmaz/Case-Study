MaterialList=[];

 

 $(document).ready(function() {
  var st=localStorage.getItem("Materials");
  MaterialList=JSON.parse(st);
});


document.getElementById("backListing").onclick = function () {
  location.href = "Listing.html";
};




function Save(){

  var sMaterialName=document.getElementById("ad").value;
  var sMaterialPuan=document.getElementById("puan").value;
  var sMaterialType="";

  if(document.getElementById("cins1").checked)
  {
    sMaterialType="Film";
  }
  else if (document.getElementById("cins2").checked)
  {
    sMaterialType="Dizi"
  }
  else{
    alert("Tip Seçilmedi");
    return;
  }

  MaterialList.push({MaterialName:sMaterialName,Puan:sMaterialPuan,Type:sMaterialType});
 
  localStorage.setItem("Materials",JSON.stringify(MaterialList));

  alert("Kaydedildi");
}