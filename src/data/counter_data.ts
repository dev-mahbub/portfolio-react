import { TCounter } from '@/interFace/type';
import counterImgOne from '../../public/assets/images/skill/01.png';
import counterImgTwo from '../../public/assets/images/skill/02.png';
import counterImgThree from '../../public/assets/images/skill/03.png';
import counterImgFour from '../../public/assets/images/skill/04.png';

const counter_data: TCounter[] = [
    //counter style one data
    {
        id: 1,
        cunterNum: 88,
        image: counterImgOne,
        skillName: "Figma",
        bgColor: "white-bg",
        wowDelay: ".3s"
    },
    {
        id: 2,
        cunterNum: 98,
        image: counterImgTwo,
        skillName: "Vision",
        bgColor: "pink-bg",
        wowDelay: ".5s"
    },
    {
        id: 3,
        cunterNum: 78,
        image: counterImgThree,
        skillName: "Sketch",
        bgColor: "white-bg",
        wowDelay: ".7s"
    },
    {
        id: 4,
        cunterNum: 68,
        image: counterImgFour,
        skillName: "Cloud",
        bgColor: "red-bg",
        wowDelay: ".9s"
    },
    //counter style one data end
    //counter style two data
    {
        id: 5,
        wowDelay: ".3s",
        cunterNum: 92,
        text: "K",
        icon: "icon-member",
        desc: "Stratified Clients",
    },
    {
        id: 6,
        wowDelay: ".5s",
        cunterNum: 40,
        text: "+",
        icon: "icon-support",
        desc: "Years of Operate",
    },
    {
        id: 7,
        wowDelay: ".7s",
        cunterNum: 250,
        text: "+",
        icon: "icon-rocket",
        desc: "Projects Delivered",
    },
    {
        id: 8,
        wowDelay: ".9s",
        cunterNum: 150,
        text: "%",
        icon: "icon-employe",
        desc: "Experts Employer",
    },
    //counter style two data end
    //counter style three data
    {
        id: 9,
        cunterNum: 112,
        desc: "Happy Clients",
    },
    {
        id: 10,
        cunterNum: 200,
        desc: "Comments Reserved",
    },
    {
        id: 11,
        cunterNum: 120,
        desc: "Review",
    },
    {
        id: 12,
        cunterNum: 70,
        desc: "Stratified Customers",
    },
    //counter style three data end
    //creative agency counter data
    {
        id: 13,
        cunterNum: 112,
        desc: "Happy Clients",
    },
    {
        id: 14,
        cunterNum: 200,
        desc: "Comments",
    },
    {
        id: 15,
        cunterNum: 120,
        desc: "Review",
    },
    //creative agency counter data end
]

export default counter_data;