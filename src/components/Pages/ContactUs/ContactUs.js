import React from 'react';

const ContactUs = () => {


    const handleSubmitContact = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const requirements = event.target.requirements.value;
        const telephone = event.target.telephone.value;

        const contactInfo = { name, email, address, requirements, telephone }

        console.log(contactInfo)

        fetch('https://frozen-inlet-73952.herokuapp.com/contactinfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Information Saved Successfully.");
                event.target.reset();
            })
    }

    return (
        <div>
            <h1 className='text-4xl pt-20 md:text-5xl text-purple-600 font-semibold pb-20'>Get In Touch</h1>
            <div className='px-1 py-10 bg-purple-50 md:px-5 lg:px-10 xl:px-40 grid md:grid-cols-2 gap-y-10 md:gap-4 gap-20 items-center shadow-xl'>

                <div className='order-2 p-3 md:order-1 text-left'>

                    <form onSubmit={handleSubmitContact} className='grid'>
                        <input className='border-2 border-purple-200 p-2 mb-2 rounded-md' type="text" name="name" id="name" placeholder='Your Name' required />
                        <input className='border-2 p-2 border-purple-200 mb-2 rounded-md' type="email" name="email" id="email" placeholder='Your Email' required />
                        <textarea className='border-2 border-purple-200 p-2 mb-2 rounded-md' name="address" id="address" cols="30" rows="2" placeholder='Address' required></textarea>
                        <textarea className='border-2 border-purple-200 p-2 mb-2 rounded-md' name="requirements" id="requirements" cols="30" rows="3" placeholder='Requirements' required></textarea>
                        <input className='border-2 p-2 border-purple-200 mb-2 rounded-md' type="tel" name="telephone" id="telephone" placeholder='Telephone' required />
                        <input className='bg-purple-500 hover:bg-purple-600 uppercase text-xl text-white duration-700 p-2 rounded-md cursor-pointer' type="submit" Value="Submit" />

                    </form>
                </div>
                <div className='order-1 md:order-2'>
                    <img className='rounded-lg shadow-2xl' src="https://img.freepik.com/free-photo/woman-working-call-center_23-2148094886.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default ContactUs;