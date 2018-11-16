const products = [
  {"name": "Snikers #1","sex": "w", "color" :"бежевый", "price": 103.50, "image": "bg-01.jpg", "description": "1This is very cool snikers. Nice colorfull and quality", "id":"0" , "more": "описание 1 го товара"},
  {"name": "Snikers #2","sex": "m","color" :"синий", "price": 152.14, "image": "bg-02.jpg", "description": "2This is very cool snikers. Nice colorfull and quality", "id":"1", "more": "описание 2 го товара"},
  {"name": "Snikers #3","sex": "w","color" :"зеленый", "price": 202.22, "image": "bg-03.jpg", "description": "3This is very cool snikers. Nice colorfull and quality", "id":"2", "more": "описание 3 го товара"},
  {"name": "Snikers #4","sex": "m","color" :"бежевый", "price": 240.00, "image": "bg-04.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"3", "more": "описание 4 го товара"},
  {"name": "Snikers #5","sex": "m","color" :"бежевый", "price": 180.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"4", "more": "описание 5 го товара"},
  {"name": "Snikers #6","sex": "w","color" :"бежевый", "price": 186.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"5", "more": "описание 6 го товара"},
  
  {"name": "Snikers #7","sex": "m","color" :"синий", "price": 111.60, "image": "bg-07.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"6", "more": "описание 7 го товара"},
  {"name": "Snikers #8","sex": "m","color" :"синий", "price": 169.64, "image": "bg-08.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"7", "more": "описание 8 го товара"},
  {"name": "LeBron 16 #9","sex": "m","color" :"зеленый", "price": 215.20, "image": "bg-09.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"8", "more": "описание 9 го товара"},
  {"name": "Nike Zoom KD11 #10", "price": 245.00, "image": "bg-10.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"9", "more": "описание 9 го товара"},
  {"name": "Snikers #11","sex": "m","color" :"бежевый", "price": 109.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"10", "more": "описание 11 го товара"},
  {"name": "Snikers #12","sex": "m","color" :"бежевый", "price": 198.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"11", "more": "описание 12 го товара"},
  
  {"name": "Snikers #13","sex": "w","color" :"бежевый", "price": 128.69, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"12", "more": "описание 13 го товара"},
  {"name": "Snikers #14","sex": "m","color" :"синий", "price": 179.00, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"13", "more": "описание 14 го товара"},
  {"name": "Snikers #15","sex": "m","color" :"зеленый", "price": 260.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality", "id":"14", "more": "описание 15 го товара"},
  {"name": "Snikers #16","sex": "m","color" :"зеленый", "price": 301.20, "image": "bg-03.jpg", "description": "This is very cool aaa. Nice colorfull and quality", "id":"15", "more": "описание 16 го товара"},];

const per_page = 6;
let current_page = 0;
var pagination_buttons = document.getElementsByClassName("page-link");
var pag_li = document.getElementsByClassName("page-item");
const search_button = document.getElementById("search");
let pagination = document.getElementById("pagination"); 
let s = document.getElementById("s");
const addToProduct = document.getElementById("addToProduct");
////////////////////////////////////////////////////////////////////////////
function createPagination(array_products){//ПАГИНАЦИЯ И КНОПОЧКА ПОДРОБНЕЕ
    let link, li, ul;
    const data_link = "page-item";
    pagination.innerHTML = "";
    ul = createNewElement("ul", null, "pagination");
      for(let i = 0; i < Math.ceil(array_products.length / per_page); i++){
        link = createNewElement("a", i+1, "page-link",[{"name":"data-link", "value":i}]);

        if (i==current_page) {
        li = attachChilderToParent(createNewElement("li", null, data_link + " active"), [link]);}
        else {li = attachChilderToParent(createNewElement("li", null, data_link), [link]);}
        ul.appendChild(li);
      }
    
    pagination.appendChild(ul);

      Array.from(pagination_buttons).map((el)=>{
      el.addEventListener("click", (e)=>{
      current_page = e.target.dataset.link;
      renderProducts(array_products);
      createPagination(array_products);
      });});

  
    var product_more = document.getElementsByClassName("product_more");   // КНОПОЧКА ПОДРОБНЕЕ
    Array.from(product_more).map((el)=>{
    el.addEventListener("click", (e)=>{
    e.preventDefault();
    const modal = document.getElementById ("product_more");
   
    document.getElementById ("modal_name").innerHTML=products[e.target.dataset.id].name;
    document.getElementById ("modal_img").src="images/"+products[e.target.dataset.id].image;

    document.getElementById ("modal_discription").innerHTML=products[e.target.dataset.id].description;
    modal.style.display = "block";
    modal.setAttribute("class","modal fade show");
    console.log(products[e.target.dataset.id]);
    
    var modal_close = document.getElementsByClassName ("modal_close");
    Array.from(modal_close).map((el)=>{
    el.addEventListener("click", (e)=>{
    modal.style.display = "none";
    });});});});




var product_buy = document.getElementsByClassName("product_buy");   // КНОПОЧКА КУПИТЬ
    console.log(product_buy);
    Array.from(product_buy).map((el)=>{

    el.addEventListener("click", (e)=>{

    e.preventDefault();
    // const modal = document.getElementById ("product_buy");
    
    window.localStorage.setItem(products[e.target.dataset.buy].id, products[e.target.dataset.buy].id);
    cart();

  });});

 var product_delete = document.getElementsByClassName("product_delete");
console.log(product_delete);
    Array.from(product_delete).map((el)=>{

    el.addEventListener("click", (e)=>{

    e.preventDefault();
    // const modal = document.getElementById ("product_buy");
    
    window.localStorage.removeItem(e.target.dataset.delete);
    cart();

  });});

};
////////////////////////////////////////////////////////////////////////////    
function createNewElement(tag, innerContent=null, classStr=null, attr=null){//СОЗДАЕМ КАРТОЧКИ
  var el = document.createElement(tag);
  el.innerHTML = (innerContent)?innerContent:"";
  el.className = (classStr)?classStr:"";

  if(attr){
    attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
  } return el;}

  function attachChilderToParent(html, array_el){
    array_el.map((el)=>html.appendChild(el));
    return html;
   }
 
 function createCard(product, i){
  var link = createNewElement("a", "Add to cart", "btn btn-primary product_buy",[{"name":"href", "value":"#"},{"name":"data-buy", "value":i}]);
  var linkmore = createNewElement("a", "more", "btn btn-success product_more", [{"name":"href", "value":"#"},{"name":"data-id", "value":i}]);
 
 var headline = createNewElement("h4", product.price, "headline-price");
  var p = createNewElement("p", product.description, "card-text");
  var title = createNewElement("h5", product.name, "card-title");

  var cardBody = attachChilderToParent(createNewElement("div", null, "card-body"), [title,p,headline,link,linkmore]);

  var image = createNewElement("img", null, "card-img-top", [{"name":"src", "value":"images/"+product.image},{"name":"alt", "value":product.name}]);

  var card = attachChilderToParent(createNewElement("div", null, "card"), [image,cardBody]);

  var catalogItem = attachChilderToParent(createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);

  return catalogItem;
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
    catalog.appendChild(createCard(array_products[i],i));
   }
 }
////////////////////////////////////////////////////////////////////////////
function filterAndRenderProducts(){// функция фильтров
  let search_products = [];
  let s = document.getElementById("s");

  const reg = new RegExp(s.value);
  search_products = products.filter((el)=>reg.test(el.name) || reg.test(el.description));

    var rad=document.getElementsByName('inlineRadioOptions');
  
    for (var i=0;i<rad.length; i++) {
        if (rad[i].checked) {
        	
        	const reg_rad = new RegExp(rad[i].value);
        	 search_products = search_products.filter((el)=>reg_rad.test(el.sex));
          }}


      var check=document.getElementsByName('inlineCheckbox');
    for (var i=0;i<check.length; i++) {
        if (check[i].checked) {
        	
        	let reg_check = check[i].value;
        	 search_products  = search_products.filter((el)=>reg_check==(el.color));
          }}


      var check=document.getElementsByName('inlineCheckboxPrice');
      
  function compareNumeric(a, b) {
         if (a.price > b.price) return 1;
         if (a.price < b.price) return -1;
        };

         for (var i=0;i<check.length; i++) {
           if (check[i].checked) {
         
           if (check[i].value == 0) {
            search_products.sort(compareNumeric);}

          else{
            search_products.sort(compareNumeric);
            search_products.reverse();
           }}}
         
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
////////////////////////////////////////////////////////////////////////////
function add_Pruduct (){ //ДОБАВЛЕНИЕ ПРОДУКТОВ
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
////////////////////////////////////////////////////////////////////////////
const submitHandler = (e) => {// регистрация 
    e.preventDefault();
  

      function submit (){
          if (errorslist.length == 0 && errorslist1.length == 0) {
            window.localStorage.userName = userName;
            window.localStorage.mail = mail;
            document.getElementById("login_form").style.display = "none";
           document.getElementById("welcome").innerHTML = "Welcome "+ userName;
           document.getElementById("Cart").innerHTML = '<a class="nav-link" href="#">Cart</a>';
         
          }
           };

    let errorslist = [];

    const userName = document.getElementById("inlineFormInput").value;

    let errorslist1 = [];

    const mail = document.getElementById("inlineFormInputGroup").value;
    

    if (! isLoverCaseInPass(userName)){
      errorslist.push("enter a-z");
    }

    if (! isUpperCaseInPass(userName)){
      errorslist.push("enter A-Z");
    }

    // if (! isNumberInPass(userName)){
    //   errorslist.push("enter 0-9");
    // }

    if (errorslist.length >0) {
      const foo = document.getElementById("errorName");
      foo.innerHTML = errorslist.join(" ");
      document.getElementById("inlineFormInput").classList.add("is-invalid");
    }
    else{
      document.getElementById("inlineFormInput").classList.remove("is-invalid");
     
    }

    if (! mailInPass(mail)){
      errorslist1.push("a-z @mail.com");
    }


    if (errorslist1.length >0) {
      const foo1 = document.getElementById("mailName");
      foo1.innerHTML = errorslist1;
      document.getElementById("inlineFormInputGroup").classList.add("is-invalid");
    }else{
      document.getElementById("inlineFormInputGroup").classList.remove("is-invalid");
       submit ();

    }}

    document.addEventListener("submit", submitHandler, false);

    function isLoverCaseInPass(pass){
        return /[a-z]/.test(pass);
    }

    function isUpperCaseInPass(pass){
        return /[A-Z]/.test(pass);
    }

    // function isNumberInPass(pass){
    //     return /\d/.test(pass);
    // }


    function mailInPass(pass){
     var r = /^\w+@\w+\.\w{2,4}$/i;
       return r.test(pass);
    }
////////////////////////////////////////////////////////////////////////////


function cart(){
var cart = document.getElementById("cart");
        cart.innerHTML= "";


      for (var i=0; i <= products.length; i++) { 
      if (localStorage.getItem(i)==i) {
        
         var image_cart = createNewElement("img", null, "w-100 img-thumbnail", [{"name":"src", "value":"images/"+products[localStorage.getItem(i)].image},{"name":"id", "value":"cart_img"}]);
        var p_cart1 = createNewElement("p", products[localStorage.getItem(i)].name, "card-text", [{"name":"id", "value":"name_cart"}]);
        var p_cert2 = createNewElement("p", products[localStorage.getItem(i)].price, "card-text",[{"name":"id", "value":"price_cart"}]);
        var button_cart1 = createNewElement("a", "delete", "btn btn-success product_delete", [{"name":"href", "value":"#"},{"name":"data-delete", "value":i}]);
        var cart_col2 = attachChilderToParent(createNewElement("div", null, "col-2"), [image_cart]);
        var cart_col6 = attachChilderToParent(createNewElement("div", null, "col-6  m-auto"), [p_cart1]);
        var cart_col1 = attachChilderToParent(createNewElement("div", null , "col-1 text-right m-auto"[{"name":"id", "value":"cart_check"}]),[button_cart1]);
        var cart_col3 = attachChilderToParent(createNewElement("div", null, "col-3 m-auto"), [p_cert2]);
        var cart_oll = attachChilderToParent(createNewElement("div", null, "row border-bottom border-dark box"), [cart_col2,cart_col6,cart_col3,cart_col1]);
        cart.appendChild(cart_oll);
        } }
         };


//////////////////////////////////////////////////////////////////////////////
document.getElementById("Cart").addEventListener("click", (e)=>{
   document.getElementById("cart_oll").style.display = 'block';
  });
  

   document.getElementById("cart_close").addEventListener("click", (e)=>{
   document.getElementById("cart_oll").style.display = 'none';
   });


// ferst load page
renderProducts(products);
createPagination(products);
cart();

