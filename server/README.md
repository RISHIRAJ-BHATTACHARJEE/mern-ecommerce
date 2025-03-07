This flowchart represents the **User and Admin flow** for an **E-Commerce Website**. Below is the step-by-step breakdown of the user journey and the features you need to build.

---

## **User Flow**
1. **Start**
   - The user enters the website. ✅

2. **User Choice: Login or Register**
   - If the user is **not registered**, they must **sign up**. ✅
   - If the user is **already registered**, they log in. ✅

3. **Search for Products**
   - Users can browse or **search for products**.

4. **View Product**
   - Users can click on a product to **view its details**, such as price, description, and stock.

5. **Add to Cart & Buy Product**
   - Users can add the product to their **cart**.

6. **Payment Decision**
   - If the user decides **not to proceed with payment**, they stay on the cart page.
   - If the user decides to proceed, they move to the **payment page**.

7. **Payment Method Selection**
   - Users can choose **Online Payment** or **Cash on Delivery**.
   - If Online Payment is chosen, integrate **payment gateways** (Razorpay, Stripe, PayPal, etc.).
   - If Cash on Delivery is chosen, the order is placed without online payment.

8. **Order Confirmation**
   - Once payment is successful (or COD is chosen), the **order is placed**.

9. **Logout**
   - The user can log out after placing the order.

10. **Stop**
   - End of the user journey.

------------------------------------------

## **Admin Flow**
1. **Start**
   - The admin logs in to manage the platform.

2. **Admin Choice: Login or Exit**
   - If not logged in, the admin needs to **authenticate**.

3. **Admin Functionalities**
   - **Add Category**: Admin can create **product categories** (e.g., Electronics, Clothing, etc.).
   - **Add Product**: Admin can add **new products** to the system.
   - **Manage Orders**: Admin can **view, approve, or cancel orders**.
   - **Manage Payments**: Admin can verify payments and handle disputes.
   - **Check Feedback**: Admin can **review user feedback** and ratings.

4. **Generate Reports**
   - Admin can generate reports on **sales, orders, payments, and feedback**.

5. **Logout**
   - Admin can log out after managing the system.

6. **Stop**
   - End of the admin journey.

---

## **What You Need to Build**
### **1. User Authentication**
- User **Register/Login** with authentication (JWT, bcrypt for password hashing).
- User **roles** (Customer/Admin).

### **2. Product Management**
- Users should be able to **search and view** products.
- Admin should be able to **add, update, and delete** products.

### **3. Shopping Cart & Order Management**
- Users should be able to **add items to the cart**.
- Implement **order placement and tracking**.

### **4. Payment Integration**
- Users should be able to choose **Online Pay or Cash on Delivery**.
- Implement **payment gateway integration**.

### **5. Feedback & Reviews**
- Users should be able to **rate products and leave reviews**.
- Admin can **monitor feedback**.

### **6. Admin Dashboard**
- Admin can **add categories, products, manage orders, payments, and feedback**.
- Admin can **generate reports**.

### **7. User & Admin Logout**
- Implement **secure logout functionality**.

------------------------------------------------------------------------------------
------------------------------------------------------------------------------------

API Endpoints
These RESTful API endpoints will be used to manage the E-Commerce system.

1. User Authentication
Method	Endpoint	        Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	    Login and get JWT token
GET	    /api/auth/profile	Get user profile (protected)
PUT	    /api/auth/update	Update user profile (protected)

2. Product Management
Method	Endpoint	        Description
GET	    /api/products	    Get all products
GET	    /api/products/:id	Get product details by ID
POST	/api/products	    Add a new product (Admin only)
PUT	    /api/products/:id	Update product (Admin only)
DELETE	/api/products/:id	Delete product (Admin only)

3. Categories
Method	Endpoint	        Description
GET	    /api/categories	    Get all categories
POST	/api/categories	    Add a new category (Admin only)
DELETE	/api/categories/:id	Delete a category (Admin only)

4. Orders
Method	Endpoint	        Description
POST	/api/orders	        Create an order
GET	    /api/orders/:userId	Get user orders
PUT	    /api/orders/:id	    Update order status (Admin only)
DELETE	/api/orders/:id	    Cancel order

5. Payments
Method	Endpoint	            Description
POST	/api/payments	        Process payment
GET	    /api/payments/:orderId	Get payment details

6. Feedback
Method	Endpoint	                Description
POST	/api/feedback	            Submit feedback
GET	    /api/feedback/:productId    Get product feedback

-----------------------------------------------
For the Admin Panel, we need additional endpoints to manage products, orders, payments, and user feedback. 
These endpoints should be protected so that only an admin user (with role: "admin") can access them.

Admin API Endpoints
These endpoints allow the admin to manage the entire system.

1. Admin Authentication
Admins will use the same login system as users but will have a different role.

Method	Endpoint	        Description
POST	/api/admin/login	Login as admin (returns JWT token)
GET	    /api/admin/profile	Get admin profile (protected)
✅ Implementation Note:
When an admin logs in, the system should check role: "admin".
If the role is not admin, return a 403 Forbidden response.

2. Manage Categories
Method	Endpoint	                Description
POST	/api/admin/categories	    Add a new category
PUT	    /api/admin/categories/:id	Update category details
DELETE	/api/admin/categories/:id	Delete a category

3. Manage Products
Method	Endpoint	                Description
POST	/api/admin/products	        Add a new product
PUT	    /api/admin/products/:id	    Update product details
DELETE	/api/admin/products/:id	    Delete a product

4. Manage Orders
Method	Endpoint	            Description
GET	    /api/admin/orders	    Get all orders
GET	    /api/admin/orders/:id	Get order details
PUT	    /api/admin/orders/:id	Update order status (Pending → Completed)
DELETE	/api/admin/orders/:id	Cancel an order
✅ Implementation Note:
Admin should be able to update order statuses (Pending, Shipped, Completed, Canceled).

5. Manage Payments
Method	Endpoint	                Description
GET	    /api/admin/payments	        Get all payments
GET	    /api/admin/payments/:id	    Get payment details by order ID
✅ Implementation Note:
Admin can view all transactions and verify payments.

6. Manage User Feedback
Method	Endpoint	            Description
GET	    /api/admin/feedback	    View all feedback
DELETE	/api/admin/feedback/:id	Delete inappropriate feedback
✅ Implementation Note:
Admin should be able to remove spam or inappropriate feedback.

7. Generate Reports
Method	Endpoint	                Description
GET	    /api/admin/reports/sales	Get sales report
GET	    /api/admin/reports/orders	Get order summary
GET	    /api/admin/reports/payments	Get payment summary
✅ Implementation Note:

These endpoints should generate monthly reports on sales, orders, and payments.
