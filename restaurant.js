function getMenu() {
    fetch('https://free-food-menus-api-production.up.railway.app/burgers')
    .then(response => response.json())
    .then(data => {
    const menuList = document.getElementById('menu-list');
    data.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML =`<span>${item.name}</span><span>${item.price}</span>;` 
    menuList.appendChild(menuItem);
    });
    });
    }
    
    // Function 2: takeOrder
    function takeOrder() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const burgers = [
    { name: 'Burger A', price: 10 },
    { name: 'Burger B', price: 12 },
    { name: 'Burger C', price: 15 }
    ];
    const order = {
    burgers: burgers,
    total: burgers.reduce((acc, burger) => acc + burger.price, 0)
    };
    resolve(order);
    }, 2500);
    });
    }
    
    // Function 3: orderPrep
    function orderPrep() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve({ order_status: true, paid: false });
    }, 1500);
    });
    }
    
    // Function 4: payOrder
    function payOrder() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve({ order_status: true, paid: true });
    }, 1000);
    });
    }
    
    // Function 5: thankyouFnc
    function thankyouFnc() {
    alert('Thank you for your payment!');
    }
    
    // Function to place an order
    function placeOrder() {
    takeOrder()
    .then(order => {
    console.log(order);
    return orderPrep();
    })
    .then(orderStatus => {
    console.log(orderStatus);
    return payOrder();
    })
    .then(paymentStatus => {
    console.log(paymentStatus);
    if (paymentStatus.paid) {
    thankyouFnc();
    }
    })
    .catch(error => {
    console.error(error);
    });
    }
