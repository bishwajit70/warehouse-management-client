import React from 'react';
import SingleSupplier from './SingleSupplier/SingleSupplier';

const OurSuppliers = () => {
    const suppliers = [
        {
            "_id": "6277875d08292ef9d036776a",
            "image": "https://i.ibb.co/98wWns9/supplier-1.webp",
            "name": "Abdul Matin Parsons",
            "company": "Karim Enterprise",
            "address": "424 Anchorage Place, Morriston, Dhaka, 1200",
            "phone": "+880 1713237889",
            "about": "They are supplying us products for a long time. The ensures quality. They also supply products on time. We appreciate their services.\r\n"
        },
        {
            "_id": "6277875d1b19818ee83cccee",
            "image": "https://i.ibb.co/pPmqmx5/supplier-2.webp",
            "name": "Delgado Reilly",
            "company": "Hamid Enterprise",
            "address": "243 Irving Avenue, Ezel, Chattogram, 1877",
            "phone": "+880 1714577889",
            "about": "It's a pleasure to say that they have a strong goodwill. They always try to keep the word and supply quality products as well as on time. We are happy on their activities.\r\n"
        },
        {
            "_id": "6277875d6e05d1f221d62ee7",
            "image": "https://i.ibb.co/grMG6pK/supplier-4.webp",
            "name": "Baird Hall",
            "company": "Armanitola Spice House",
            "address": "694 Ovington Court, Idledale, Faridpur, 6873",
            "phone": "+880 1734223788",
            "about": "Basically they are maintaining their business a long time with us. We are happy and they also keep their words. They supply their products on time and it's an endless process.\r\n"
        }
    ]

    return (
        <div className='pt-20 bg-purple-100 border-xl shadow-2xl pb-10'>
            <h1 className='text-4xl md:text-5xl text-purple-600 font-semibold pb-5 md:pb-10'>Our Suppliers</h1>
            <div className='px-1 py-10 md:px-5 lg:px-10 xl:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-3 md:gap-5 lg:gap-5 xl:gap-7'>


                {
                    suppliers.map(supplier => <SingleSupplier
                        key={supplier._id}
                        supplier={supplier}
                    ></SingleSupplier>)
                }
            </div>
        </div>
    );
};

export default OurSuppliers;