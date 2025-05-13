import imageOne from '../../public/assets/images/blog/blog-01.png';
import imageTwo from '../../public/assets/images/blog/blog-02.png';
import blogThree from '../../public/assets/images/blog/blog-03.png';
import blogFour from '../../public/assets/images/blog/blog-04.png';
import blogFive from '../../public/assets/images/blog/blog-05.png';
import blogSix from '../../public/assets/images/blog/blog-06.png';
import blogSeven from '../../public/assets/images/blog/blog-07.png';
import blogEight from '../../public/assets/images/blog/blog-08.png';
import blogNine from '../../public/assets/images/blog/blog-09.png';
import blogTen from '../../public/assets/images/blog/blog-10.png';
import blogEleven from '../../public/assets/images/blog/blog-11.png';
import blogTwelve from '../../public/assets/images/blog/blog-12.png';
import blogThirteen from '../../public/assets/images/blog/blog-13.png';
import blogFourteen from '../../public/assets/images/blog/blog-14.png';
import blogFifteen from '../../public/assets/images/blog/blog-15.png';
import blogSixteen from '../../public/assets/images/blog/blog-16.png';
import blogSeventeen from '../../public/assets/images/blog/blog-17.png';
import blogEighteen from '../../public/assets/images/blog/blog-18.png';
import blogNineteen from '../../public/assets/images/blog/blog-19.png';

//user-image
import userOne from '../../public/assets/images/user/user-03.png';
import userTwo from '../../public/assets/images/user/user-02.png';
import userThree from '../../public/assets/images/user/user-01.png';
import userFour from '../../public/assets/images/user/user-08.png';
import userFive from '../../public/assets/images/user/user-09.png';
import { TBlog } from '@/interFace/type';
//blog inner page img 
import blogImg19 from '../../public/assets/images/blog/post/blog-post-01.png';
import blogImg20 from '../../public/assets/images/blog/post/blog-post-02.png';
//blog grid image
import image1 from '../../public/assets/images/blog/blog-23.png';
import image2 from '../../public/assets/images/blog/blog-24.png';
import image3 from '../../public/assets/images/blog/blog-25.png';
import image4 from '../../public/assets/images/blog/blog-26.png';
import image5 from '../../public/assets/images/blog/blog-27.png';
import image6 from '../../public/assets/images/blog/blog-28.png';
//blog masonary image
import masonaryImg1 from '../../public/assets/images/blog/masonary/blog-masonary-02.png';
import masonaryImg2 from '../../public/assets/images/blog/masonary/blog-masonary-01.png';
import masonaryImg3 from '../../public/assets/images/blog/masonary/blog-masonary-03.png';
import masonaryImg4 from '../../public/assets/images/blog/masonary/blog-masonary-05.png';
import masonaryImg5 from '../../public/assets/images/blog/masonary/blog-masonary-04.png';
import masonaryImg6 from '../../public/assets/images/blog/masonary/blog-masonary-06.png';
import masonaryImg7 from '../../public/assets/images/blog/masonary/blog-masonary-07.png';
import masonaryImg8 from '../../public/assets/images/blog/masonary/blog-masonary-09.png';
import masonaryImg9 from '../../public/assets/images/blog/masonary/blog-masonary-08.png';
//blog list sidebar 
import blogListImg1 from '../../public/assets/images/blog/blog-29.png';
import blogListImg2 from '../../public/assets/images/blog/blog-30.png';
import blogListImg3 from '../../public/assets/images/blog/blog-31.png';
import blogListImg4 from '../../public/assets/images/blog/blog-32.png';
// blog details 02 image  
import postImg1 from '../../public/assets/images/blog/blog-20.png';
import postImg2 from '../../public/assets/images/blog/blog-21.png';


const blog_data: TBlog[] = [
    //blog one style data
    {
        id: 1,
        image: imageOne,
        date: "25",
        month: "OCT",
        blogTitle: "The Impact of Micro interactions User Engagement",
        desc: "Explore how subtle micro interactions can enhance user and satisfaction Stay up to-date with the latest trends in web develop including new technologies"
    },
    {
        id: 2,
        image: imageTwo,
        date: "20",
        month: "FEB",
        blogTitle: "The Impact of Micro interactions User Engagement",
        desc: "Explore how subtle micro interactions can enhance user and satisfaction Stay up to-date with the latest trends in web develop including new technologies"
    },
    //blog one style data end
    //blog two style data
    {
        id: 3,
        image: blogThree,
        wowDelay: ".3s",
        blogTag: "Development",
        date: "Nov 12, 2023",
        blogTitle: "The Role of interactions in User Engagement",
        authorName: 'John',
        desination: "By Admin",
        authorImg: userOne
    },
    {
        id: 4,
        image: blogFour,
        wowDelay: ".5s",
        blogTag: "Technology",
        date: "Dec 21, 2023",
        blogTitle: "Talent Acquisition and Global Workforce",
        authorName: 'Alex',
        desination: "By Designer",
        authorImg: userTwo
    },
    {
        id: 5,
        image: blogFive,
        wowDelay: ".7s",
        blogTag: "Project",
        date: "Dec 21, 2023",
        blogTitle: "Work and Company Culture Program",
        authorName: 'Jermon',
        desination: "By Developer",
        authorImg: userThree
    },
    //blog two style end
    //blog there style data
    {
        id: 6,
        image: blogSix,
        wowDelay: ".3s",
        blogTag: "Development",
        date: "Feb 12, 2023",
        comment: 10,
        blogTitle: "The Role of Microinteractions in User Engagement",
    },
    {
        id: 7,
        image: blogSeven,
        wowDelay: ".5s",
        blogTag: "Project",
        date: "Mar 20, 2023",
        comment: 20,
        blogTitle: "The Artistry of Ideas Exploring Creative Agency",
    },
    {
        id: 8,
        image: blogEight,
        wowDelay: ".7s",
        blogTag: "Agency",
        date: "Apr 10, 2023",
        comment: 12,
        blogTitle: "Crafting Dreams Unleashing the Creativity Our Agency",
    },
    //blog Four style data
    {
        id: 9,
        image: blogNine,
        wowDelay: ".3s",
        blogTag: "Development",
        date: "Feb 12, 2023",
        comment: 10,
        blogTitle: "Beyond Boundaries Chronicle Our Creative Agency",
    },
    {
        id: 10,
        image: blogTen,
        wowDelay: ".5s",
        blogTag: "Project",
        date: "Mar 20, 2023",
        comment: 20,
        blogTitle: "Unveiling the Creative Trusty of Our Agency Work",
    },
    {
        id: 11,
        image: blogEleven,
        wowDelay: ".7s",
        blogTag: "Agency",
        date: "Apr 10, 2023",
        comment: 12,
        blogTitle: "A Creative Journey Through Our Agency's Work",
    },
    //blog four style data end
    //blog Five style data
    {
        id: 12,
        image: blogTwelve,
        wowDelay: ".3s",
        blogTag: "Development",
        date: "Feb 12, 2023",
        comment: 10,
        blogTitle: "The Role of actions in User Engagement",
    },
    {
        id: 13,
        image: blogThirteen,
        wowDelay: ".5s",
        blogTag: "Project",
        date: "Mar 20, 2023",
        comment: 20,
        blogTitle: "Talent Acquisition and Global Work Force",
    },
    {
        id: 14,
        image: blogFourteen,
        wowDelay: ".7s",
        blogTag: "Agency",
        date: "Apr 10, 2023",
        comment: 12,
        blogTitle: "Work and Company Culture Program",
    },
    //blog five style data end
    //blog Six style data
    {
        id: 15,
        image: blogFifteen,
        wowDelay: ".3s",
        blogTag: "Development",
        date: "Feb 12, 2023",
        comment: 10,
        blogTitle: "The Role of interactions in User Agency Work",
        authorName: "Annte",
        authorImg: userOne
    },
    {
        id: 16,
        image: blogSixteen,
        wowDelay: ".5s",
        blogTag: "Design",
        date: "Mar 20, 2023",
        comment: 20,
        blogTitle: "Tech Tricks A Chronicle of Our Agency World",
        authorName: "Yanky",
        authorImg: userFour
    },
    {
        id: 17,
        image: blogSeventeen,
        wowDelay: ".7s",
        blogTag: "Project",
        date: "Apr 10, 2023",
        comment: 12,
        blogTitle: "Creativity Dive into the Digital World Agency",
        authorName: "Alexa",
        authorImg: userFive
    },
    //blog Six style data end
    //blog Seven style data
    {
        id: 18,
        image: blogEighteen,
        wowDelay: ".3s",
        blogTag: "Development",
        date: "Feb 12, 2023",
        comment: 10,
        blogTitle: "Strategy Glimpse into Our Corporate Success Stories",
        desc: "Explore how subtle micro actions can enhance user engagement and satisfaction Stay up to date with latest trends",
    },
    {
        id: 19,
        image: blogNineteen,
        wowDelay: ".5s",
        blogTag: "Design",
        date: "Mar 20, 2023",
        comment: 20,
        blogTitle: "Excellence Corporate into Showcase of Achievement",
        desc: "Remote work can enhance include allowing employees with various needs and backgrounds to in the workforce.",
    },
    //blog Seven style data end
    //blog Eight style data
    {
        id: 20,
        image: blogThree,
        wowDelay: ".3s",
        blogTag: "Development",
        date: "Nov 12, 2023",
        blogTitle: "The Role of interactions in User Engagement",
        authorName: 'John',
        desination: "By Admin",
        authorImg: userOne
    },
    {
        id: 21,
        image: blogFour,
        wowDelay: ".5s",
        blogTag: "Technology",
        date: "Dec 21, 2023",
        blogTitle: "Talent Acquisition and Global Workforce",
        authorName: 'Lucas',
        desination: "Designer",
        authorImg: userTwo
    },
    {
        id: 22,
        image: blogFive,
        wowDelay: ".7s",
        blogTag: "Project",
        date: "Dec 21, 2023",
        blogTitle: "Remote Work and Company Culture",
        authorName: 'Alexa',
        desination: "Director",
        authorImg: userThree
    },
    //blog eight style data
    {
        id: 23,
        image: blogImg19,
        blogTitle: "How to Design Your Project Faster and More Efficiently",
        date: "June 22, 2020",
        authorName: 'Allex Berly',
        desc: "Some mistakenly believe that because you’re offering a certification it must be generalized and meant to give anyone a wide range of digital skills. But the benefits of continuous This is also a flexible form of learning. You may have a suite of microlearning courses. employees who feel that their skills are not being put to good use in their current job Choose which ones are important for any specific role within your company.",
    },
    {
        id: 24,
        image: blogImg20,
        blogTitle: "Easiest Way To Manage Project Employee And Others Work",
        date: "Dec 09, 2023",
        authorName: 'Nayeem',
        comment: 14,
        videoId: "vWLcyFtni6U",
        desc: "Investing in offering those paths early on can help you retain staff instead of letting them go. After all, this is the era of hybrid and remote working so flexibility and career advancement. employees who feel that their skills are not being put to good use in their current job",
    },
    //blog sidebar recenet post data
    {
        id: 25,
        image: blogThree,
        blogTitle: "Prepare for the Future of and idea",
        date: "June 22, 2020",
    },
    {
        id: 26,
        image: blogFour,
        blogTitle: "Developing privacy user centric apps",
        date: "March 15, 2023",
    },
    {
        id: 27,
        image: blogFive,
        blogTitle: "Starting and Growing Design",
        date: "July 22, 2021",
    },
        //blog grid inner page data
        {
            id: 28,
            image: blogTwelve,
            blogTag:"Development",
            blogTitle: "The Role of actions in User Engagement",
            date: "Nov 12, 2023",
            comment:10
        },
        {
            id: 29,
            image: blogThirteen,
            blogTag:"Project",
            blogTitle: "Talent Acquisition and Global Work Force",
            date: " Mar 20, 2023",
            comment:20
        },
        {
            id: 30,
            image: blogFourteen,
            blogTag:"Agency",
            blogTitle: "Work and Company Culture Program",
            date: "May 10, 2023",
            comment:12
        },
        {
            id: 31,
            image: image1,
            blogTag:"Agency",
            blogTitle: "Clearly outline the purpose of your goal",
            date: "May 10, 2023",
            comment:27
        },
        {
            id: 32,
            image: image2,
            blogTag:"Project",
            blogTitle: "Select a memorable and relevant domain",
            date: "Jun 05, 2023",
            comment:22
        },
        {
            id: 33,
            image: image3,
            blogTag:"Agency",
            blogTitle: "Choose a website building platform works",
            date: "Jan 18, 2023",
            comment:14
        },
        {
            id: 34,
            image: image4,
            blogTag:"Agency",
            blogTitle: "Personalize the template by customizing colors",
            date: "Feb 28, 2023",
            comment:11
        },
        {
            id: 35,
            image: image5,
            blogTag:"Development",
            blogTitle: "Work and Company Culture Program",
            date: "Mar 12, 2023",
            comment:13
        },
        {
            id: 36,
            image: image6,
            blogTag:"Development",
            blogTitle: "include a brief info about yourself and others",
            date: "Apr 23, 2023",
            comment:21
        },
        //blog grid sidebar data
        {
            id: 37,
            image: blogTwelve,
            blogTag:"Development",
            blogTitle: "The Role of actions in User Engagement",
            date: "Nov 12, 2023",
            comment:10
        },
        {
            id: 38,
            image: blogThirteen,
            blogTag:"Project",
            blogTitle: "Talent Acquisition and Global Work Force",
            date: " Mar 20, 2023",
            comment:20
        },
        {
            id: 39,
            image: blogFourteen,
            blogTag:"Agency",
            blogTitle: "Work and Company Culture Program",
            date: "May 10, 2023",
            comment:12
        },
        {
            id: 40,
            image: image1,
            blogTag:"Agency",
            blogTitle: "Clearly outline the purpose of your goal",
            date: "May 10, 2023",
            comment:27
        },
        {
            id: 41,
            image: image2,
            blogTag:"Project",
            blogTitle: "Select a memorable and relevant domain",
            date: "Jun 05, 2023",
            comment:22
        },
        {
            id: 42,
            image: image3,
            blogTag:"Agency",
            blogTitle: "Choose a website building platform works",
            date: "Jan 18, 2023",
            comment:14
        },
        {
            id: 43,
            image: image4,
            blogTag:"Agency",
            blogTitle: "Personalize the template by customizing colors",
            date: "Feb 28, 2023",
            comment:11
        },
        {
            id: 44,
            image: image5,
            blogTag:"Development",
            blogTitle: "Work and Company Culture Program",
            date: "Mar 12, 2023",
            comment:13
        },
        //blog masonary data
        {
            id: 45,
            image: masonaryImg1,
            blogTag:"Development",
            blogTitle: "The Role of actions in User Engagement",
            date: "Nov 12, 2023",
            comment:10
        },
        {
            id: 46,
            image: masonaryImg2,
            blogTag:"Project",
            blogTitle: "Talent Acquisition and Global Work Force",
            date: " Mar 20, 2023",
            comment:20
        },
        {
            id: 47,
            image: masonaryImg3,
            blogTag:"Agency",
            blogTitle: "Work and Company Culture Program",
            date: "May 10, 2023",
            comment:12
        },
        {
            id: 48,
            image: masonaryImg4,
            blogTag:"Agency",
            blogTitle: "Select a memorable and relevant domain",
            date: "May 10, 2023",
            comment:27
        },
        {
            id: 49,
            image: masonaryImg5,
            blogTag:"Project",
            blogTitle: "Clearly outline the purpose of your goal",
            date: "Jun 05, 2023",
            comment:22
        },
        {
            id: 50,
            image: masonaryImg6,
            blogTag:"Agency",
            blogTitle: "Choose a website building platform works",
            date: "Jan 18, 2023",
            comment:14
        },
        {
            id: 51,
            image: masonaryImg7,
            blogTag:"Agency",
            blogTitle: "Work and Company Culture Program",
            date: "Feb 28, 2023",
            comment:11
        },
        {
            id: 52,
            image: masonaryImg8,
            blogTag:"Development",
            blogTitle: "Personalize the template by customizing colors",
            date: "Mar 12, 2023",
            comment:13
        },
        {
            id: 53,
            image: masonaryImg9,
            blogTag:"Development",
            blogTitle: "include a brief info about yourself and others",
            date: "Jan 18, 2023",
            comment:13
        },
        //blog list data
        {
            id: 54,
            image: blogEighteen,
            blogTag:"Development",
            blogTitle: "Strategy A Glimpse into Our Corporate Success Stories",
            date: "Nov 12, 2023",
            desc:"Explore how subtle micro actions can enhance user engagement and satisfaction Stay up to date with latest trends",
            comment:10
        },
        {
            id: 55,
            image: blogNineteen,
            blogTag:"Project",
            blogTitle: "Excellence A Corporate into Showcase of Achievement",
            date: " Mar 20, 2023",
            desc:"Remote work can enhance include allowing employees with various needs and backgrounds to in the workforce.",
            comment:20
        },
        {
            id: 56,
            image: blogListImg1,
            blogTag:"Agency",
            blogTitle: "Clearly outline the purpose of your blog and what you want to achieve",
            date: "May 10, 2023",
            desc:"Explore how subtle micro actions can enhance user engagement and satisfaction Stay up to date with latest trends",
            comment:12
        },
        {
            id: 57,
            image: blogListImg2,
            blogTag:"Agency",
            blogTitle: "Select a memorable and relevant domain name for your website",
            date: "May 10, 2023",
            desc:"Remote work can enhance include allowing employees with various needs and backgrounds to in the workforce.",
            comment:27
        },
        {
            id: 58,
            image: blogListImg3,
            blogTag:"Project",
            blogTitle: "Pick a clean and responsive template that aligns with your style",
            date: "Jun 05, 2023",
            desc:"Remote work can enhance include allowing employees with various needs and backgrounds to in the workforce.",
            comment:22
        },
        {
            id: 59,
            image: blogListImg4,
            blogTag:"Agency",
            blogTitle: "Share a more detailed bio, including your background and interests",
            date: "Jan 18, 2023",
            desc:"Explore how subtle micro actions can enhance user engagement and satisfaction Stay up to date with latest trends",
            comment:14
        },
        //blog details post related data
        {
            id: 60,
            image: blogTwelve,
            blogTag:"Development",
            blogTitle: "The Role of actions in User Engagement",
            date: "Jun 05, 2023",
            wowDelay:".3s",
            comment:22
        },
        {
            id: 61,
            image: blogThirteen,
            blogTag:"Project",
            blogTitle: "Talent Acquisition and Global Work Force",
            date: "Jan 18, 2023",
            wowDelay:".5s",
            comment:14
        },
        //blog details two post related data
        {
            id: 62,
            image: postImg1,
            blogTag:"Development",
            blogTitle: "The Role of interactions in User Engagement",
            authorName:"John",
            authorImg:userOne,
            desination:"admin",
            date: "Jun 05, 2023",
            wowDelay:".3s",
        },
        {
            id: 63,
            image: postImg2,
            blogTag:"Technology",
            blogTitle: "Talent Acquisition and Global Work Force",
            authorName:"Lucas",
            authorImg:userTwo,
            desination:"Designer",
            date: "Jan 18, 2023",
            wowDelay:".5s",
        },
] 

export default blog_data;