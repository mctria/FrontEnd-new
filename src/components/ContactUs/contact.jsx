import React, { useState } from 'react';

const ContactPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Varun Poojari",
      subtitle: "MIT Pass out Batch 2024",
      message: `"ACES has been an invaluable resource to our university, offering students an array of immersive activities that foster growth and development. Their unwavering commitment to student success is truly impressive and aligns perfectly with our academic objectives."`,
      image: "pathak.jpg"
    },
    {
      name: "Arya Shetty",
      subtitle: "CSE, Batch 2025",
      message: `"The support and opportunities provided by ACES have been pivotal in helping me explore my interests and develop new skills. The community is welcoming, inspiring, and filled with enthusiastic members."`,
      image: "pathak.jpg"
    },
    {
      name: "Rohit Rao",
      subtitle: "ECE, Batch 2023",
      message: `"Being a part of ACES has enriched my college experience immensely. From workshops to hands-on projects, they provide everything needed to advance in our careers."`,
      image: "pathak.jpg"
    }
  ];

  const showTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const changeTestimonial = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    showTestimonial(newIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-5 md:p-10 lg:p-20 mt-36">
      <div className="text-center max-w-2xl w-full mb-8 md:mb-16">
        <p className="text-3xl md:text-5xl lg:text-7xl mb-3 font-bold">CONNECT WITH US</p>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-10">
          Let's connect and bring your vision to life in the Computer Science and Engineering community. We're excited to collaborate with you and provide support to turn your ideas into reality.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-start gap-5 mt-5">
          <a href="mailto:parliamentofaces2018@gmail.com" className="bg-[#111111] text-white px-6 py-3 md:py-4 rounded-full font-bold transition duration-300 hover:bg-orchid">
            Let's Collaborate
          </a>
          <form className="flex flex-col gap-3 w-full max-w-sm">
            <input type="text" placeholder="Name" required className="bg-[#111111] text-white p-3 rounded-lg w-full"/>
            <input type="email" placeholder="Email" required className="bg-[#111111] text-white p-3 rounded-lg w-full"/>
            <textarea placeholder="Message" required className="bg-[#111111] text-white p-3 rounded-lg w-full h-24 resize-none"></textarea>
            <button type="submit" className="bg-white text-black px-4 py-2 md:py-3 rounded-full font-bold transition duration-300 hover:bg-orchid hover:text-white">
              Submit
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-5 mt-8 md:mt-10">
          <form className="flex flex-col gap-3 w-full max-w-sm">
            <input type="text" placeholder="Name" required className="bg-[#111111] text-white p-3 rounded-lg w-full"/>
            <input type="email" placeholder="Email" required className="bg-[#111111] text-white p-3 rounded-lg w-full"/>
            <textarea placeholder="Message" required className="bg-[#111111] text-white p-3 rounded-lg w-full h-24 resize-none"></textarea>
            <button type="submit" className="bg-white text-black px-4 py-2 md:py-3 rounded-full font-bold transition duration-300 hover:bg-orchid hover:text-white">
              Request a Blog
            </button>
          </form>
          <a href="mailto:parliamentofaces2018@gmail.com" className="bg-[#111111] text-white px-6 py-3 md:py-4 rounded-full font-bold transition duration-300 hover:bg-orchid">
            Post a Blog
          </a>
        </div>
      </div>

      <div className="relative max-w-2xl w-full text-center overflow-hidden py-5 md:py-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center gap-3 ${index === currentIndex ? 'flex opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-10'} transition duration-500`}
          >
            <img src={testimonial.image} alt={`Person ${index + 1}`} className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-400"/>
            <h3 className="text-lg md:text-xl">{testimonial.name}</h3>
            <p className="text-xs md:text-sm text-gray-300">{testimonial.subtitle}</p>
            <p className="text-sm md:text-lg italic max-w-xl mx-auto">{testimonial.message}</p>
          </div>
        ))}

        <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2">
          <span onClick={() => changeTestimonial(-1)} className="cursor-pointer text-lg md:text-2xl text-white px-3 md:px-4 select-none">&#10094;</span>
          <span onClick={() => changeTestimonial(1)} className="cursor-pointer text-lg md:text-2xl text-white px-3 md:px-4 select-none">&#10095;</span>
        </div>

        <div className="flex justify-center mt-5">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => showTestimonial(index)}
              className={`h-2 w-2 md:h-2.5 md:w-2.5 mx-1 bg-gray-500 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;