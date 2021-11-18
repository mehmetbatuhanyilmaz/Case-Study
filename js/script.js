MaterialList=[];

 $(document).ready(function() {

  debugger;
  var st=localStorage.getItem("Materials");

  if(st!=null)
  {
  MaterialList=JSON.parse(st);
  }

  GetMaterialList();
  

});

function GetMaterialList() {
  document.getElementById("MaterialListing").innerHTML="";

  MaterialList.forEach(Listing);
}

function Listing(item, index) { 

  if(document.getElementById("Dizi").checked && item.Type!="Dizi")
  {
   return;
  }
  else if (document.getElementById("Film").checked && item.Type!="Film")
  {
    return;
  }

  document.getElementById("MaterialListing").innerHTML+='<div id="liste1"><div id="filmism">'+item.MaterialName+'</div><div id="Delete"><span id="'+item.MaterialName+'" class="fa fa-trash" onclick=DeleteItem(this)></span> </div><div id="yldz"><span class="fa fa-star checked"></span> '+item.Puan+'</div><div id="rate">Puan Ver<div class="rating"><div class="like grow"><i class="fa fa-caret-up fa-3x" aria-hidden="true"></i></div></br><div class="dislike grow"><i class="fa fa-caret-down fa-3x" aria-hidden="true"></i></div></div></div>'

 }
 

 function DeleteItem(name) {
   
  var newMaterialList=[];

  MaterialList.forEach(function(entry) {

    if(entry.MaterialName!=name.id)
    {
      newMaterialList.push(entry);
    }

});

MaterialList=newMaterialList;
localStorage.setItem("Materials",JSON.stringify(MaterialList));

GetMaterialList()

 }
 



  document.getElementById("#changepage").onclick = function () {
  location.href = "Saving.html";
};




$('.like, .dislike').on('click', function() {
event.preventDefault();
$('.active').removeClass('active');
$(this).addClass('active');
});