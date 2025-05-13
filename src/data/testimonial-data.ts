import { StaticImageData } from 'next/image';
//testimonial element style one, four and seven img
import userImgOne from '../../public/assets/images/user/user-03.png';
import userImgTwo from '../../public/assets/images/user/user-01.png';
import userImgThree from '../../public/assets/images/user/user-02.png';
import userImgFour from '../../public/assets/images/user/user-11.png';
import userImgFive from '../../public/assets/images/user/user-12.png';
import userImgSix from '../../public/assets/images/user/user-08.png';
import userImgSeven from '../../public/assets/images/user/user-09.png';
import userImgEight from '../../public/assets/images/user/user-10.png';
//testimonial element style two img
import quoteImg from '../../public/assets/images/shape/testimonial-quote-02.png';
//testimonial element style three img
import testimonialImg from '../../public/assets/images/testimonial/testimonial-03.png';
import testimonialImgTwo from '../../public/assets/images/testimonial/testimonial-05.png';



type TTestimonial = {
    id: number;
    rating?: number;
    description: string;
    image: StaticImageData;
    userName: string;
    designation: string
}
const testimonial_data: TTestimonial[] = [
    //testimonial element style one data
    {
        id: 1,
        rating: 5,
        description: "“The improved user experience our website immediately noticeable. Navigation are more intuitive and the layout our visitors through our content seamlessly. The responsive design ensures.”",
        image: userImgOne,
        userName: "Louis",
        designation: "Founder"
    },
    {
        id: 2,
        rating: 4,
        description: "The enhanced user experience on our website is immediately evident. Navigation is more intuitive, guiding our visitors seamlessly through our content. The responsive layout guarantees.",
        image: userImgTwo,
        userName: "Alexa",
        designation: "Designer"
    },
    {
        id: 3,
        rating: 5,
        description: "The upgraded user experience on our website is readily apparent. Navigation is now more intuitive, effortlessly guiding our visitors through our content. The responsive layout guarantees.",
        image: userImgThree,
        userName: "Morish",
        designation: "Director"
    },
    {
        id: 4,
        rating: 5,
        description: "“The improved user experience our website immediately noticeable. Navigation are more intuitive and the layout our visitors through our content seamlessly. The responsive design ensures.”",
        image: userImgOne,
        userName: "Louis",
        designation: "Founder"
    },
    {
        id: 5,
        rating: 4,
        description: "The enhanced user experience on our website is immediately evident. Navigation is more intuitive, guiding our visitors seamlessly through our content. The responsive layout guarantees.",
        image: userImgTwo,
        userName: "Alexa",
        designation: "Designer"
    },
    //testimonial element style one data end
    //testimonial element style two data
    {
        id: 6,
        description: "“The improved user experience our website immediately noticeable. Navigation are more intuitive and the layout our visitors through our content seamlessly. The responsive design ensures.”",
        image: quoteImg,
        userName: "Ryan",
        designation: "Web Designer"
    },
    {
        id: 7,
        description: "The enhanced user experience on our website is immediately evident. Navigation is more intuitive, guiding our visitors seamlessly through our content. The responsive layout guarantees.",
        image: quoteImg,
        userName: "Alexa",
        designation: "Designer"
    },
    {
        id: 8,
        description: "The upgraded user experience on our website is readily apparent. Navigation is now more intuitive, effortlessly guiding our visitors through our content. The responsive layout guarantees.",
        image: quoteImg,
        userName: "Morish",
        designation: "Director"
    },
    {
        id: 9,
        description: "“The improved user experience our website immediately noticeable. Navigation are more intuitive and the layout our visitors through our content seamlessly. The responsive design ensures.”",
        image: quoteImg,
        userName: "Louis",
        designation: "Founder"
    },
    {
        id: 10,
        description: "The enhanced user experience on our website is immediately evident. Navigation is more intuitive, guiding our visitors seamlessly through our content. The responsive layout guarantees.",
        image: quoteImg,
        userName: "Alexa",
        designation: "Designer"
    },
    {
        id: 11,
        description: "The upgraded user experience on our website is readily apparent. Navigation is now more intuitive, effortlessly guiding our visitors through our content. The responsive layout guarantees.",
        image: quoteImg,
        userName: "Morish",
        designation: "Director"
    },
    //testimonial element style Two data end
    //testimonial element style three data
    {
        id: 12,
        description: "I've had the pleasure of working with them for the past, and I can confidently say they have exceeded all of our expects. From the moment we engaged with their team, we knew we were in good and I can confidently hands.",
        image: testimonialImg,
        userName: "Chamain Louis",
        designation: "Web Designer",
        rating: 5,
    },
    {
        id: 13,
        description: "enhanced user experience on our website is immediately evident. Navigation is more intuitive, guiding our visitors seamlessly through our content. The responsive layout guaranteTheesin good and I can confidently hands.",
        image: testimonialImgTwo,
        userName: "Alexa",
        designation: "Director",
        rating: 4,
    },
    {
        id: 14,
        description: "The upgraded user experience on our website is readily apparent. Navigation is now more intuitive, effortlessly guiding our visitors through our content. The responsive layout guarantees in good and I can confidently hands.",
        image: testimonialImg,
        userName: "Morish",
        designation: "Designer",
        rating: 5,
    },
    {
        id: 15,
        description: "“The improved user experience our website immediately noticeable. Navigation are more intuitive and the layout our visitors through our content seamlessly. The responsive design ensures in good and I can confidently hands.",
        image: testimonialImgTwo,
        userName: "Louis",
        designation: "Founder",
        rating: 4,
    },
    {
        id: 16,
        description: "The enhanced user experience on our website is immediately evident. Navigation is more intuitive, guiding our visitors seamlessly through our content. The responsive layout guarantees in good and I can confidently hands.",
        image: testimonialImg,
        userName: "Alexa",
        designation: "Designer",
        rating: 5,
    },
    {
        id: 17,
        description: "The upgraded user experience on our website is readily apparent. Navigation is now more intuitive, effortlessly guiding our visitors through our content. The responsive layout guarantees in good and I can confidently hands.",
        image: testimonialImgTwo,
        userName: "Morish",
        designation: "Director",
        rating: 4,
    },
    //testimonial element style three data end
    //testimonial element style four data
    {
        id: 18,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all our expectations. From the moment we engaged with their team, we knew.",
        image: userImgOne,
        userName: "Chamain Louis",
        designation: "Web Designer",
        rating: 5,
    },
    {
        id: 19,
        description: "enhanced user experience on our website is immediately evident. Navigation is more intuitive, guiding our visitors seamlessly through our content. The responsive layout guaranteTheesin good.",
        image: userImgTwo,
        userName: "Alexa",
        designation: "Director",
        rating: 4,
    },
    {
        id: 20,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all our expectations. From the moment we engaged with their team, we knew.",
        image: userImgThree,
        userName: "Morish",
        designation: "Designer",
        rating: 5,
    },
    {
        id: 21,
        description: "“The improved user experience our website immediately noticeable. Navigation are more intuitive and the layout our visitors through our content seamlessly. The responsive design ensures in good and I can confidently hands.",
        image: userImgOne,
        userName: "Louis",
        designation: "Founder",
        rating: 4,
    },
    {
        id: 22,
        description: "The enhanced user experience on our website is immediately evident. Navigation is more intuitive, guiding our visitors seamlessly through our content. The responsive layout guarantees in good and I can confidently hands.",
        image: userImgTwo,
        userName: "Alexa",
        designation: "Designer",
        rating: 5,
    },
    {
        id: 23,
        description: "The upgraded user experience on our website is readily apparent. Navigation is now more intuitive, effortlessly guiding our visitors through our content. The responsive layout guarantees in good and I can confidently hands.",
        image: userImgThree,
        userName: "Morish",
        designation: "Director",
        rating: 4,
    },
    //testimonial element style four data end
    //testimonial element style five data
    {
        id: 24,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgThree,
        userName: "Chamain Louis",
        designation: "Creative Strategist",
        rating: 5,
    },
    {
        id: 25,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgTwo,
        userName: "Henry Marker",
        designation: "Innovation Architect",
        rating: 4,
    },
    {
        id: 26,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgSix,
        userName: "Morish Lemon",
        designation: "Experience Engineer",
        rating: 5,
    },
    {
        id: 27,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgSeven,
        userName: "Louis Bentek",
        designation: "User Journey Orchestrator",
        rating: 4,
    },
    {
        id: 28,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgEight,
        userName: "Alexa Louis",
        designation: "Designer & Davelopment",
        rating: 5,
    },
    //testimonial element style five data end
    //testimonial element style six data
    {
        id: 29,
        description: "I've had the pleasure of working with them for the past, and I can confidently say they have exceeded all of our expects. From the moment we engaged with their team, we knew we were in good and I can confidently hands.",
        image: userImgThree,
        userName: "Chamain Louis",
        designation: "Web Designer",
        rating: 5,
    },
    {
        id: 30,
        description: "Over the course of our partnership, which has endured for quite some time, I am pleased to assert that they have consistently gone above and beyond our expectations. From the outset of our collaboration with their team",
        image: userImgTwo,
        userName: "Henry Louis",
        designation: "CEO & FOUNDER",
        rating: 4,
    },
    {
        id: 31,
        description: "Having collaborated with them for an extended period, I am delighted to express that they have continually exceeded our anticipations. Right from our initial engagement with their team, it was evident that we had entrusted",
        image: userImgThree,
        userName: "Morish",
        designation: "Designer",
        rating: 5,
    },
    //testimonial element style six data end
    //testimonial element style seven data
    {
        id: 32,
        description: "I've had the pleasure of working with them for the past, and I can confidently say they have exceeded all of our expects. From the moment we engaged with their team, we knew we were in good and I can confidently hands.",
        image: userImgThree,
        userName: "Chamain Louis",
        designation: "Web Designer",
        rating: 5,
    },
    {
        id: 33,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgTwo,
        userName: "Henry Louis",
        designation: "CEO & FOUNDER",
        rating: 4,
    },
    {
        id: 34,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgThree,
        userName: "Morish",
        designation: "Designer",
        rating: 5,
    },
    //testimonial element style seven data end
    //testimonial element style seven data
    {
        id: 35,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgFour,
        userName: "Alexa",
        designation: "Designer",
        rating: 5,
    },
    {
        id: 36,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgFive,
        userName: "Henry Louis",
        designation: "CEO & FOUNDER",
        rating: 4,
    },
    {
        id: 37,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgFour,
        userName: "Morish",
        designation: "Designer",
        rating: 5,
    },
    {
        id: 38,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgFive,
        userName: "Louis",
        designation: "Founder",
        rating: 4,
    },
    {
        id: 39,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgFour,
        userName: "Alexa",
        designation: "Designer",
        rating: 5,
    },
    {
        id: 40,
        description: "I've had the pleasure of working with them for the past year, and I can confidently say they have exceeded all of our expectations From the moment",
        image: userImgFive,
        userName: "Henry Louis",
        designation: "CEO & FOUNDER",
        rating: 4,
    },
    //testimonial element style seven data end

]
export default testimonial_data;