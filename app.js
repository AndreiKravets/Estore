const products = [
  {"name": "Snikers #1","sex": "w", "color" :"бежевый", "price": 103.50, "image": "bg-01.jpg", "description": "1This is very cool snikers. Nice colorfull and quality", "id":"1" , "more": "описание 1 го товара"},
  {"name": "Snikers #2","sex": "m","color" :"синий", "price": 152.14, "image": "bg-02.jpg", "description": "2This is very cool snikers. Nice colorfull and quality", "id":"2", "more": "описание 2 го товара"},
  {"name": "Snikers #3","sex": "w","color" :"зеленый", "price": 202.22, "image": "bg-03.jpg", "description": "3This is very cool snikers. Nice colorfull and quality", "id":"3", "more": "описание 3 го товара"},
  {"name": "Snikers #4","sex": "m","color" :"бежевый", "price": 240.00, "image": "bg-04.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"4", "more": "описание 4 го товара"},
  {"name": "Snikers #5","sex": "m","color" :"бежевый", "price": 180.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"5", "more": "описание 5 го товара"},
  {"name": "Snikers #6","sex": "w","color" :"бежевый", "price": 186.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"6", "more": "описание 6 го товара"},
  
  {"name": "Snikers #7","sex": "m","color" :"синий", "price": 111.60, "image": "bg-07.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"7", "more": "описание 7 го товара"},
  {"name": "Snikers #8","sex": "m","color" :"синий", "price": 169.64, "image": "bg-08.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"8", "more": "описание 8 го товара"},
  {"name": "LeBron 16 #9","sex": "m","color" :"зеленый", "price": 215.20, "image": "bg-09.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"9", "more": "описание 9 го товара"},
  {"name": "Nike Zoom KD11 #10", "price": 245.00, "image": "bg-10.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"10", "more": "описание 10 го товара"},
  {"name": "Snikers #11","sex": "m","color" :"бежевый", "price": 109.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"11", "more": "описание 11 го товара"},
  {"name": "Snikers #12","sex": "m","color" :"бежевый", "price": 198.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"12", "more": "описание 12 го товара"},
  
  {"name": "Snikers #13","sex": "w","color" :"бежевый", "price": 128.69, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"13", "more": "описание 13 го товара"},
  {"name": "Snikers #14","sex": "m","color" :"синий", "price": 179.00, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"14", "more": "описание 14 го товара"},
  {"name": "Snikers #15","sex": "m","color" :"зеленый", "price": 260.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"15", "more": "описание 15 го товара"},
  {"name": "Snikers #16","sex": "m","color" :"зеленый", "price": 301.20, "image": "bg-03.jpg", "description": "This is very cool aaa. Nice colorfull and quality", "id":"16", "more": "описание 16 го товара"},
];

const per_page = 6;
let current_page = 0;
var pagination_buttons = document.getElementsByClassName("page-link");
var pag_li = document.getElementsByClassName("page-item");
const search_button = document.getElementById("search");
let pagination = document.getElementById("pagination"); 
let s = document.getElementById("s");
const addToProduct = document.getElementById("addToProduct");

function createPagination(array_products){
  let link, li, ul;
  pagination.innerHTML = "";
  ul = createNewElement("ul", null, "pagination");
  for(let i = 0; i < Math.ceil(array_products.length / per_page); i++){
    link = createNewElement("a", i+1, "page-link",[{"name":"data-link", "value":i}]);
    li = attachChilderToParent(createNewElement("li", null, "page-item"), [link]);
    ul.appendChild(li);
  }
  pagination.appendChild(ul);

    Array.from(pagination_buttons).map((el)=>{
    el.addEventListener("click", (e)=>{

      current_page = e.target.dataset.link;
      renderProducts(array_products);

      Array.from(pag_li).map((el)=>el.classList.remove("active"));
      e.target.parentElement.classList.add("active");
      
    });
  });
};
  
 
    
      
    

function createNewElement(tag, innerContent=null, classStr=null, attr=null){
  var el = document.createElement(tag);
  el.innerHTML = (innerContent)?innerContent:"";
  el.className = (classStr)?classStr:"";

  if(attr){
    attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
  }

  return el;
}
// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Запустить модальное окно
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>


function createCard(product){
  var link = createNewElement("a", "Add to cart", "btn btn-primary",[{"name":"href", "value":"#"}]);
  var linkmore = createNewElement("button", "подробнее", "btn btn-warning", [{"name":"data-toggle", "value":"modal"}, {"name":"data-target", "value":"#exampleModal"+product.id}]);
 


var span = createNewElement("span", "&times;", null,[{"name":"aria-hidden", "value":"true"}]);
var btn_close = attachChilderToParent(createNewElement("button", null, "close", [{"name":"data-dismiss", "value":"modal"}, {"name":"type", "value":"button"},{"name":"aria-label", "value":"Close"}]),[span]);
var h5 = createNewElement("h5", "подробнее" , "modal-title" , [{"name":"id", "value":"exampleModalLabel"}]);


var div_modal_heder = attachChilderToParent(createNewElement("div", null, "modal-header"), [h5,btn_close]);

var description = createNewElement("p", product.more ,null);

var div_modal_body = attachChilderToParent(createNewElement("div", null, "modal-body"), [description]);

var btn_secondary = createNewElement("button", "Close" , "btn btn-secondary", [{"name":"data-dismiss", "value":"modal"}, {"name":"type", "value":"button"}]);
var btn_save = createNewElement("button", "Save" , "btn btn-primary", [{"name":"type", "value":"button"}]);

var div_modal_footer = attachChilderToParent(createNewElement("div", null, "modal-footer"), [btn_secondary,btn_save]);


var div_modal_content = attachChilderToParent(createNewElement("div", null, "modal-content"), [div_modal_heder,div_modal_body,div_modal_footer]);


var div_modal_dialog = attachChilderToParent(createNewElement("div", null, "modal-dialog" ,[{"name":"role", "value":"document"}]), [div_modal_content]);

var modal_fade = attachChilderToParent(createNewElement("div", null, "modal fade", [{"name":"id", "value":"exampleModal"+product.id}, {"name":"tabindex", "value":"-1"},{"name":"role", "value":"dialog"},{"name":"aria-labelledby", "value":"exampleModalLabel"},{"name":"aria-hidden", "value":"true"}]),[div_modal_dialog]);

console.log(div_modal_body)







  var headline = createNewElement("h4", product.price, "headline-price");
  var p = createNewElement("p", product.description, "card-text");
  var title = createNewElement("h5", product.name, "card-title");

  var cardBody = attachChilderToParent(createNewElement("div", null, "card-body"), [title,p,headline,link,linkmore,modal_fade]);

  var image = createNewElement("img", null, "card-img-top", [{"name":"src", "value":"images/"+product.image},{"name":"alt", "value":product.name}]);

  var card = attachChilderToParent(createNewElement("div", null, "card"), [image,cardBody]);

  var catalogItem = attachChilderToParent(createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);

  return catalogItem;
}

function attachChilderToParent(html, array_el){
  array_el.map((el)=>html.appendChild(el));
  return html;
}

var catalog = document.getElementById("catalog");

function startFromFirstProducts(){
  return current_page*per_page;
}

function isLastProductInPage(i, array_products){
  return i < current_page*per_page + per_page && i < array_products.length;
}

function renderProducts(array_products){
  catalog.innerHTML = "";
  for(var i = startFromFirstProducts(); isLastProductInPage(i,array_products); i++){
    catalog.appendChild(createCard(array_products[i]));
  }
}

function filterAndRenderProducts(){
  let search_products = [];
  let s = document.getElementById("s");

  const reg = new RegExp(s.value);
  search_products = products.filter((el)=>reg.test(el.name) || reg.test(el.description));

    var rad=document.getElementsByName('inlineRadioOptions');
  
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
        	
        	const reg_rad = new RegExp(rad[i].value);
        	 search_products = search_products.filter((el)=>reg_rad.test(el.sex));
           
        }
    }



    var check=document.getElementsByName('inlineCheckbox');
    for (var i=0;i<check.length; i++) {
        if (check[i].checked) {
        	
        	let reg_check = check[i].value;
        	 search_products  = search_products.filter((el)=>reg_check==(el.color));
      
          
        }
    }






  current_page = 0;
  
  renderProducts(search_products);
  createPagination(search_products);

   search_rez.innerHTML = "Вы искали " + s.value + ". Нашло " + search_products.length +" шт";
   s.value = ""; }


search_button.addEventListener("click", (e)=>{
  filterAndRenderProducts();
});

s.addEventListener("keypress", (e)=>{
  if (e.keyCode == 13) {
    console.log("keypress");
    
    filterAndRenderProducts();
  }
});

// ferst load page
renderProducts(products);
createPagination(products);



function add_Pruduct (){
var name_form = document.getElementById("name_form").value;
var description_form = document.getElementById("description_form").value;
var price_form = document.getElementById("price_form").value;
var image_form = document.getElementById("image_form").value;

products.push ({"name": name_form, "price": price_form, "image": image_form, "description": description_form});

};



addToProduct.addEventListener("click", (e)=>{
  add_Pruduct();
  renderProducts(products);
  createPagination(products);
});


