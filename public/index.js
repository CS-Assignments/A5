function viewCart() {
	//Change the URL so that it registers on the server end. Also send the username of the
	//logged in person so that the server can tell who to send the cart to
	var url = location.pathname;
	console.log("url", url);
}

var likeButton = document.getElementsByClassName("item-like-button");
var addToCartButton = document.getElementsByClassName("item-addtocart-button");
var viewCartButton = document.getElementById("navbar-shopping-cart-button");

viewCartButton.addEventListener("click", viewCart);

for (i = 0; i < likeButton.length; i++) {
	(function(index) {// This function is used to check which like button is clicked so item can be propperly updated
		likeButton[index].addEventListener("click", function() {
			//Make Post request that sends i the index of of item to add the like to 
			console.log("index of liked item:", index);

		})
	})(i);

	(function(index) {
		addToCartButton[i].addEventListener("click", function() {
			//Make Post request that sends i the index of the item to add to someone's cart
			//Will also have to send the username which will have to be stored in the URL
			console.log("index of added to cart item:", index);
		})
	})(i);
}
