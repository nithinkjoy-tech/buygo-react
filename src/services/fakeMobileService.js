let mobiles=[
    {
        _id:1,
        mobileName:"Redmi 1",
        feature1:"1 gb RAM",
        feature2:"10 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:1000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:10,
        imageUrl:"https://image.shutterstock.com/image-photo/currently-most-popular-phone-xiaomi-600w-1364733191.jpg"
    },
    {
        _id:2,
        mobileName:"Redmi 2",
        feature1:"2 gb RAM",
        feature2:"20 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:2000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:20,
        imageUrl:"data:image/jpeg;base64,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"
    },
    {
        _id:3,
        mobileName:"Redmi 3",
        feature1:"3 gb RAM",
        feature2:"30 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:3000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:30,
        imageUrl:"data:image/jpeg;base64,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"
    },
    {
        _id:4,
        mobileName:"Redmi 4",
        feature1:"4 gb RAM",
        feature2:"40 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:4000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:40,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvEdUu8t9TotDC-57Vm97GgMl4D76VbPBg9Q&usqp=CAU"
    },
    {
        _id:5,
        mobileName:"Redmi 5",
        feature1:"5 gb RAM",
        feature2:"50 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:5000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:50,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTX8e4SLWXjeoE64NlH1gJrxgoMz3TW_YOsQ&usqp=CAU"
    },
    {
        _id:6,
        mobileName:"Redmi 6",
        feature1:"6 gb RAM",
        feature2:"60 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:6000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:60,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlES5IuUI5egEfd_3WJnRsgp603OWxRg1yPw&usqp=CAU"
    },
    {
        _id:7,
        mobileName:"Redmi 7",
        feature1:"7 gb RAM",
        feature2:"70 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:7000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:70,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXDpC1itQGXIfqOtK8Ib8RXPQqOK_gkJPFkg&usqp=CAU"
    },
    {
        _id:8,
        mobileName:"Redmi 8",
        feature1:"8 gb RAM",
        feature2:"80 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:8000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:80,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTafeXQQODOaiSLV6Zu0ArABHL36X5FQ5FaOA&usqp=CAU"
    },
    {
        _id:9,
        mobileName:"Redmi 9",
        feature1:"9 gb RAM",
        feature2:"90 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:9000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:90,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFgicY_Qt76S8Zi2PUfyWFaVo5akPcoiKp8A&usqp=CAU"
    },
    {
        _id:10,
        mobileName:"Redmi 10",
        feature1:"10 gb RAM",
        feature2:"100 ROM",
        feature3:"snp",
        feature4:"HD video",
        price:10000,
        description:"If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
        numberInStock:100,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFRZSp2bSBQxIbCEkm89SnB_7NhAtmQX3_YQ&usqp=CAU"
    },
]

export default mobiles