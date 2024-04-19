const products = [
    { 
        id: '1', 
        name: 'Gobi III', 
        price: 215, 
        category: 'Men', 
        img:'https://www.vivobarefoot.com/media/catalog/product/3/0/303071-02_side.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=700&width=700', 
        stock: 25, 
        description:'Handcrafted men`s leather desert boots for footloose living.'
    },
    { 
        id: '2', 
        name: 'Ra III Lux Mens', 
        price: 170, 
        category: 'Men', 
        img:'https://www.vivobarefoot.com/media/catalog/product/3/0/301103-03_side.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=700&width=700', 
        stock: 14, 
        description:'The Refined Metal-Free Leather Oxford That Blurs Work And Play.'
    },
    { 
        id: '3', 
        name: 'Ra IV Mens', 
        price: 180, 
        category: 'Men', 
        img:'https://www.vivobarefoot.com/media/catalog/product/3/0/305102-02_side_1.jpg?quality=100&bg-color=255%2C255%2C255&fit=bounds&height=700&width=700', 
        stock: 9, 
        description:'The Natural, Wild Hide Leather Oxford That Blurs Work And Play.'
    },
    { 
        id: '4', 
        name: 'Tracker II FG Men', 
        price: 150, 
        category: 'Men', 
        img:'https://www.vivobarefoot.com/media/catalog/product/3/0/309160-02_side.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=700&width=700', 
        stock: 12, 
        description:'The natural alternative to normal hiking boots.'
    },
    { 
        id: '5', 
        name: 'Primus Trail II', 
        price: 150, 
        category: 'Men', 
        img:'https://www.vivobarefoot.com/media/catalog/product/3/0/309097-01_side.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=700&width=700', 
        stock: 1, 
        description:'Barefoot trail-running sneakers that double as outdoor lifestyle wear.'
    },
    { 
        id: '6', 
        name: 'Novus Womens', 
        price: 130, 
        category: 'Women', 
        img:'https://www.vivobarefoot.com/media/catalog/product/2/0/203250-01_side.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=700&width=700', 
        stock: 4, 
        description:'Barefoot trainers that fuse urban style and outdoor sole.'
    },
    { 
        id: '7', 
        name: 'Ababa II Womens', 
        price: 90, 
        category: 'Women', 
        img:'https://www.vivobarefoot.com/media/catalog/product/2/0/203010-06_side.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=700&width=700', 
        stock: 4, 
        description:'Minimalist slip-ons for barefoot living.'
    },
    { 
        id: '8', 
        name: 'Geo Court III Womens', 
        price: 110, 
        category: 'Women', 
        img:'https://www.vivobarefoot.com/media/catalog/product/2/0/201056-02_side_copy_1.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=700&width=700', 
        stock: 4, 
        description:'Barefoot trainers that tread lightly on the earth.'
    },
    { 
        id: '9', 
        name: 'Opanka Sandal Womens', 
        price: 95, 
        category: 'Women', 
        img:'https://www.vivobarefoot.com/media/catalog/product/2/0/203225-01_side.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=700&width=700', 
        stock: 4, 
        description:'Barefoot sandals made from premium leather offcuts.'
    },
    { 
        id: '10', 
        name: 'Gobi Chelsea Womens', 
        price: 125, 
        category: 'Women', 
        img:'https://www.vivobarefoot.com/media/catalog/product/2/0/201432-01_side.jpg?quality=100&bg-colvscode-file://vscode-app/Users/federicorossi/Desktop/Coding/Software/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlor=255,255,255&fit=bounds&height=700&width=700', 
        stock: 4, 
        description:'Barefoot Chelsea boots for the re-generation.'
    },
    { 
        id: '11', 
        name: 'Toe Spacers', 
        price: 9, 
        category: 'Accessories', 
        img:'https://www.vivobarefoot.com/media/catalog/product/9/0/900004-01_naboso_spacers_gallery_616x616.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=1418&width=2520', 
        stock: 34, 
        description:'Reconnect and restore the natural shape of your toes.'
    },
    { 
        id: '12', 
        name: 'Toe No-Show Running Socks', 
        price: 19, 
        category: 'Accessories', 
        img:'https://www.injinji.com/media/catalog/product/2/8/282130_nvy_front_4.png?optimize=high&fit=bounds&height=700&width=700&canvas=700:700', 
        stock: 40, 
        description:'Our unique toesock design protects each toe from blisters, hotspots, and moisture.'
    },
    { 
        id: '13', 
        name: 'Toe Long Running Socks', 
        price: 20, 
        category: 'Accessories', 
        img:'https://www.injinji.com/media/catalog/product/2/0/201170_opl_3.png?optimize=high&fit=bounds&height=700&width=700&canvas=700:700', 
        stock: 42, 
        description:'This sock delivers performance comfort with minimal bulk.'
    },
    { 
        id: '14', 
        name: 'Artist Designed Running Socks - Limited Edition', 
        price: 42, 
        category: 'Accessories', 
        img:'https://www.injinji.com/media/catalog/product/2/9/293471_snr_front_2.png?optimize=high&fit=bounds&height=700&width=700&canvas=700:700', 
        stock: 14, 
        description:'Unique designs from talented artists in the outdoor community.'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },700)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        },700)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(products => products.category === categoryId))
        },700)
    })
}