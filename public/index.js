function viewCart() {
	//Change the URL so that it registers on the server end. Also send the username of the
	//logged in person so that the server can tell who to send the cart to
	console.log("click viewCart");
	location.pathname = "/viewCart";
}

var likeButton = document.getElementsByClassName("item-like-button");
var addToCartButton = document.getElementsByClassName("item-addtocart-button");
var viewCartButton = document.getElementById("navbar-shopping-cart-button");

viewCartButton.addEventListener("click", viewCart);

for (i = 0; i < likeButton.length; i++) {
	(function(index) {// This function is used to check which like button is clicked so item can be propperly updated
		likeButton[index].addEventListener("click", function() {
			console.log("location", location.pathname);
			var request = new XMLHttpRequest();

			if (location.pathname == "/clothes.html") {
				request.open('POST', ('/likeItem/clothes/' + index));
			} else if (location.pathname == "/stickers.html") {
				request.open('POST', ('/likeItem/stickers/' + index));
			} else {
				request.open('POST', ('/likeItem/main/' + index));
			}

			request.setRequestHeader(
				'Content-Type',
				'text/plain'
			);

			request.send();
		})
	})(i);

	(function(index) {
		addToCartButton[i].addEventListener("click", function() {
			//Make Post request that sends i the index of the item to add to someone's cart
			//Will also have to send the username which will have to be stored in the URL
			var request = new XMLHttpRequest();

			if (location.pathname == "/clothes.html") {
				request.open('POST', ('/addItem/clothes/' + index));
			} else if (location.pathname == "/stickers.html") {
				request.open('POST', ('/addItem/stickers/' + index));
			} else {
				request.open('POST', ('/addItem/main/' + index));
			}

			request.setRequestHeader(
				'Content-Type',
				'text/plain'
			);

			request.send();
		})
	})(i);
}
