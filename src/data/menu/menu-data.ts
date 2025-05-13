
import { StaticImageData } from "next/image";
import menuThumbOne from "../../../public/assets/images/menu/menu-home-1.jpg";
import menuThumbTwo from "../../../public/assets/images/menu/menu-home-2.jpg";
import menuThumbThree from "../../../public/assets/images/menu/menu-home-3.jpg";
import menuThumbFour from "../../../public/assets/images/menu/menu-home-4.jpg";
import menuThumbFive from "../../../public/assets/images/menu/menu-home-5.jpg";
import menuThumbSix from "../../../public/assets/images/menu/menu-home-6.jpg";
import menuThumbSeven from "../../../public/assets/images/menu/menu-home-7.jpg";
import menuThumbEight from "../../../public/assets/images/menu/menu-home-8.jpg";

type TSubmenu = {
    title: string;
    link: string;
    badgeColor?: string;
}
type TMegaManu = {
    id:number;
    title: string;
    link: string;
    submenus: TSubmenu[]
}

interface MenuItem {
    id: number;
    image?: StaticImageData;
    multiPageLink?: string;
    onePageLink?: string;
    label?: string;
    megaMenu?: boolean;
    menuItem?: any;
    link?: string;
    lastItem?: string;
    hasDropdown?: boolean;
    subMenu?: MenuItem[];
    mega_menus?: TMegaManu[];
    wrapperClass?: string;
}

const navMenuData: MenuItem[] = [
    {
        id: 1,
        label: "Demos",
        link: "#",
        hasDropdown: true,
        subMenu: [
            { id: 1, image: menuThumbOne, label: "Personal Portfolio", multiPageLink: "/portfolio/personal-portfolio", onePageLink: "/portfolio/personal-portfolio-one-page" },
            { id: 2, image: menuThumbTwo, label: "Minimal Portfolio", multiPageLink: "/portfolio/minimal-portfolio-agency", onePageLink: "/portfolio/minimal-portfolio-agency-one-page" },
            { id: 3, image: menuThumbThree, label: "Creative Agency", multiPageLink: "/portfolio/creative-agency", onePageLink: "/portfolio/creative-agency-one-page" },
            { id: 4, image: menuThumbFour, label: "Creative Agency 02", multiPageLink: "/portfolio/creative-agency-02", onePageLink: "/portfolio/creative-agency-one-page-02" },
            { id: 5, image: menuThumbFive, label: "Digital Agency", multiPageLink: "/portfolio/digital-agency", onePageLink: "/portfolio/digital-agency-one-page" },
            { id: 6, image: menuThumbSix, label: "Digital Agency 02", multiPageLink: "/portfolio/digital-agency-02", onePageLink: "/portfolio/digital-agency-one-page-02" },
            { id: 7, image: menuThumbSeven, label: "Corporate Business", multiPageLink: "/portfolio/corporate-business", onePageLink: "/portfolio/corporate-business-one-page" },
            { id: 8, image: menuThumbEight, label: "Startup Business", multiPageLink: "/portfolio/startup-business", onePageLink: "/portfolio/startup-business-one-page" },
        ],
    },
    {
        id: 2,
        label: "Pages",
        link: "#",
        megaMenu: true,
        hasDropdown: true,
        // pages: true,
        menuItem: true,
        mega_menus: [
            {
                id:1,
                title: "Page Layout 01", link: "#",
                submenus: [
                    { title: "About Us", link: "/about" },
                    { title: "About Creative", link: "/about-creative" },
                    { title: "Service Creative", link: "/service" },
                    { title: "Service Standard", link: "/service/service-standard" },
                    { title: "Service Agency", link: "/service/service-agency" },
                    { title: "Service Details", link: "/service/service-details" },
                    { title: "Team", link: "/team" },
                    { title: "Team Details", link: "/team/team-details" },
                ],
            },
            {
                id:2,
                title: "Page Layout 02", link: "#",
                submenus: [
                    { title: "Portfolio Standard", link: "/portfolio" },
                    { title: "Portfolio Grid", link: "/portfolio/portfolio-grid" },
                    { title: "Portfolio Gallery", link: "/portfolio/portfolio-gallery" },
                    { title: "Portfolio Masonary", link: "/portfolio/portfolio-masonary" },
                    { title: "Portfolio Slider Details", link: "/portfolio/portfolio-slider-details" },
                    { title: "Portfolio List Details", link: "/portfolio/portfolio-list-details" },
                    { title: "Portfolio Video Details", link: "/portfolio/portfolio-video-details" },
                    { title: "Portfolio Classic Details", link: "/portfolio/portfolio-details" },
                ],
            },
            {
                id:3,
                title: "Page Layout 03", link: "#",
                submenus: [
                    { title: "Blog Standard", link: "/blog" },
                    { title: "Blog Grid", link: "/blog/blog-grid" },
                    { title: "Blog Grid Sidebar", link: "/blog/blog-grid-sidebar" },
                    { title: "Blog Masonary", link: "/blog/blog-masonary" },
                    { title: "Blog List", link: "/blog/blog-list-sidebar" },
                    { title: "Blog Details", link: "/blog/blog-details" },
                    { title: "Blog Details 02", link: "/blog/blog-details-02" },
                    { title: "Pricing Plan", link: "/pricing" },
                ],
            },
            {
                id:4,
                title: "Page Layout 04", link: "#",
                submenus: [
                    { title: "Testimonial", link: "/testimonial" },
                    { title: "Contact", link: "/contact" },
                    { title: "Login", link: "/login" },
                    { title: "Register", link: "/register" },
                    { title: "Forgot Password", link: "/forgot" },
                    { title: "FAQ's", link: "/faq" },
                    { title: "Error 404", link: "/404-page" },
                ],
            },
        ],
    },
    {
        id: 3,
        label: "Elements",
        link: "#",
        megaMenu: true,
        hasDropdown: true,
        wrapperClass: "mega-menu mega-menu-grid-3",
        menuItem: true,
        mega_menus: [
            {
                id:1,
                title: "Elements Layout 1", link: "#",
                submenus: [
                    { title: "Style Guide", link: "/element/style-guide", badgeColor: "badge__card bg-success" },
                    { title: "Accordion", link: "/element/elements-accordion" },
                    { title: "Blog", link: "/element/elements-blog" },
                    { title: "Brand", link: "/element/elements-brand" },
                    { title: "Button", link: "/element/elements-button" },
                    { title: "Team", link: "/element/elements-team" }
                ],
            },
            {
                id:2,
                title: "Elements Layout 2", link: "#",
                submenus: [
                    { title: "Breadcrumb", link: "/element/elements-breadcrumb" },
                    { title: "form", link: "/element/elements-form" },
                    { title: "Call To Action", link: "/element/elements-cta" },
                    { title: "pricing", link: "/element/elements-pricing" },
                    { title: "Service", link: "/element/elements-service" },
                    { title: "Counter", link: "/element/elements-counter" }
                ],
            },
            { 
                id:3,
                title: "Elements Layout 3", link: "#",
                submenus: [
                    { title: "About Us", link: "/element/elements-about" },
                    { title: "Portfolio", link: "/element/elements-portfolio" },
                    { title: "Testimonial", link: "/element/elements-testimonial" },
                    { title: "Progressbar", link: "/element/elements-progressbar" },
                    { title: "Footer", link: "/element/elements-footer" },
                    { title: "Award", link: "/element/elements-award" }
                ],
            },
        ],
    },

    { id: 4, hasDropdown: false, label: "Contact", link: "/contact" },

];

export default navMenuData;


type TOnePageData = {
    id: number,
    label: string;
    link: string
}

export const one_page_menu: TOnePageData[] = [
    { id: 1, label: "Home", link: "#" },
    { id: 2, label: "About", link: "#homeabout" },
    { id: 3, label: "Services", link: "#homeservices" },
    { id: 4, label: "Works", link: "#homeworks" },
    { id: 5, label: "Blog", link: "#homeblog" },
    { id: 6, label: "Contact", link: "#homecontact" },
]