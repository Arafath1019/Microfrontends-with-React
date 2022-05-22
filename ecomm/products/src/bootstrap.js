const mount = (el) =>{
    products = `<div>Mobile</div><div>Monitor</div><div>Computer</div>`

    el.innerHTML = products;    
};

if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');

   if (el){
        mount(el);
    }
} 

export { mount };

