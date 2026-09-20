interface Product{
    item: string,
    sku: string,
    brand: string,
    color: string,
    price: number,
    category: string,
    image: string,
    id: number,
    size: string[]
}

interface Category{
    men: Product[],
    women: Product[],
}


export const products : Category | any = {
    men:[
        {
            id:1,
            item:'Delvor Classy pants',
            sku:'sku223344',
            brand:'Delvor',
            price: 599.99,
            color:'blue',
            category: 'men',
            image:'https://images.pexels.com/photos/3977441/pexels-photo-3977441.jpeg',
            size:['XS','S','M','L']
        },
        {
            id:2,
            item:'Dragon Jeans',
            sku:'sku119347',
            brand:'Dragon',
            price: 399.99,
            color:'blue',
            category: 'men',
            image:'https://images.pexels.com/photos/35033750/pexels-photo-35033750.jpeg',
            size:['XS','S','M','L']
        },
        {
            id:3,
            item:'Toronto Jeans',
            sku:'sku267378',
            brand:'Toronto',
            price: 499.99,
            color:'blue',
            category: 'men',
            image:'https://images.pexels.com/photos/27602235/pexels-photo-27602235.jpeg',
            size:['XS','S','M','L']
        },
        {
            id:4,
            item:'Razor sports pants',
            sku:'sku267328',
            brand:'Razor',
            price: 399.99,
            color:'white',
            category: 'men',
            image:'https://images.pexels.com/photos/15868727/pexels-photo-15868727.jpeg',
            size:['XS','S','M','L']
        },
    ],
    women:[
        {
            id:5,
            item:'Lovelly classy dress',
            sku:'sku267565',
            brand:'Lovelly',
            price: 799.99,
            color:'yellow',
            category: 'women',
            image:'https://images.pexels.com/photos/31684498/pexels-photo-31684498.jpeg',
            size:['XS','S','M','L']
        },
        {
            id:6,
            item:'Revene classy dress',
            sku:'sku327105',
            brand:'Revene',
            price: 699.99,
            color:'black',
            category: 'women',
            image:'https://images.pexels.com/photos/39296301/pexels-photo-39296301.jpeg',
            size:['XS','S','M','L']
        },
        {
            id:7,
            item:'Africano Traditional dress',
            sku:'sku487216',
            brand:'Africano',
            price: 699.99,
            color:'black',
            category: 'women',
            image:'https://images.pexels.com/photos/30235259/pexels-photo-30235259.jpeg',
            size:['XS','S','M','L']
        },
          {
            id:8,
            item:'Africano Pattern dress',
            sku:'sku487216',
            brand:'Africano',
            price: 699.99,
            color:'blue',
            category: 'women',
            image:'https://images.pexels.com/photos/3195980/pexels-photo-3195980.jpeg',
            size:['XS','S','M','L']
        },
    ]
}