export const sendPreOrder = (
	fullName: string, phoneNumber: string, email: string, quantity: string, formattedDateTime: string, price: string, totalPrice: string, title: string, imageUrl: string
) => {
	return `<!DOCTYPE html>
  <html lang="en">
	<head>
	  <meta charset="UTF-8" />
	  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	  <style>
		body {
		  font-family: "Arial", sans-serif;
		  margin: 0;
		  padding: 0;
		  background-color: #f4f4f4;
		}
		.container {
		  max-width: 600px;
		  margin: 20px auto;
		  padding: 20px;
		  background-color: #ffffff;
		  border-radius: 8px;
		  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}
		h2 {
		  margin: 0;
		  background-color: #004aff;
		  text-align: center;
		  color: #ffffff;
		  padding: 10px 0;
		  border-radius: 10px 10px 0 0;
		}
		h3 {
		  color: #333333;
		  margin-bottom: 10px;
		}
		p {
		  color: #555555;
		  margin: 10px 0;
		}
		.user-details,
		.order-details {
		  margin-bottom: 20px;
		}
		.section-heading {
		  font-size: 18px;
		  color: #007bff;
		  margin-bottom: 10px;
		  border-bottom: 2px solid #007bff;
		  padding-bottom: 5px;
		}
		.product-image {
		  display: block;
		  max-width: 100%;
		  height: auto;
		  margin: 20px 0;
		  border-radius: 5px;
		}
		.verification-link {
		  display: inline-block;
		  padding: 10px 20px;
		  background-color: #007bff;
		  color: #ffffff;
		  text-decoration: none;
		  border-radius: 5px;
		  margin-top: 20px;
		  text-align: center;
		}
		.footer {
		  text-align: center;
		  color: #999999;
		  font-size: 12px;
		  margin-top: 20px;
		}
	  </style>
	</head>
	<body>
	  <div class="container">
		<h2>Bulk Pre-Order Confirmation</h2>
  
		<!-- User Details Section -->
		<div class="user-details">
		  <h3 class="section-heading">Customer Details</h3>
		  <p><strong>Full Name:</strong> ${fullName}</p>
		  <p><strong>Phone Number:</strong> ${phoneNumber}</p>
		  <p><strong>Email:</strong> ${email}</p>
		</div>
  
		<!-- Order Details Section -->
		<div class="order-details">
		  <h3 class="section-heading">Order Details</h3>
		  <p><strong>Expected Delivery Date:</strong> ${formattedDateTime}</p>
		    <p><strong>Item Title:</strong>   ${title}</p>
		  <p><strong>Item Price:</strong>  &#8358; ${price}</p>
		  <p><strong>Quantity:</strong> ${quantity}</p>
		  <p><strong>Total Price:</strong> &#8358; ${totalPrice}</p>
		</div>
  
		<!-- Product Image Section -->
		<div class="product-image-section">
		  <h3 class="section-heading">Product Image</h3>
		  <img src="${imageUrl}"  alt="Product Image" class="product-image" />
		  <a href="${imageUrl}" class="verification-link">click to view Image in browser</a>
		</div>
  
		<a href="${"/"}" class="verification-link">Visit Website</a>
  
		<div class="footer">
		  <p>This message is a pre-order submission from the website.</p>
		</div>
	  </div>
	</body>
  </html>`;
};
