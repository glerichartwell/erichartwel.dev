import type { ExperienceItem } from "@/types/myExperience"
import type { PortfolioItem } from "@/types/myPortfolio"

export const email = "glerichartwell@gmail.com"
export const linkedinUrl = 'https://linkedin.com/in/glerichartwell'
export const githubUrl = 'https://github.com/glerichartwell'
export const linkedInLogoBlueSrc = "src/assets/LinkedIn-Logos/In-Blue-128@2x.png"
export const linkedInLogoWhiteSrc = "src/assets/LinkedIn-Logos/In-White-128@2x.png"
export const githubLogoBlackSrc = "src/assets/github-logos/github-mark/github-mark.svg"
export const githubLogoWhiteSrc = "src/assets/github-logos/github-mark/github-mark-white.svg"

export const photoGallerySources = [
    "src/assets/photo-gallery/eric-selfie.jpg",
    "src/assets/photo-gallery/eric-and-alex.jpg",
    "src/assets/photo-gallery/eric-felix.jpg",
    "src/assets/photo-gallery/eric-anees.jpg",
    "src/assets/photo-gallery/eric-oliver.jpg",
    "src/assets/photo-gallery/eric-escape-room.jpg",
]


export const experienceItems: ExperienceItem[] = [
    {
        key: 1,
        company: "Retail Business Services",
        title: "Full Stack Developer Co-op",
        location: "Quincy, MA",
        dates: "January 2023 - June 2023",
        year: "2023",
        bullets: [
            {
                content: "Developed proof of concept application to facilitate local produce vendor ordering for grocery stores",
                bullets: [
                    {
                        content: "Created and updated several RESTful API endpoints using Node/Express"
                    },
                    {
                        content: "Implemented React layouts and components from scratch using Figma prototypes"
                    }
                ]
            },
            {
                content: "Converted legacy MS Access application to internal web-based solution",
                bullets: [
                    {
                        content: "Utilized Vue Quasar framework to create client layouts and components"
                    },
                    {
                        content: "Upgraded Oracle database access using Java Spring Boot framework"
                    }
                ]
            },
            {
                content: "Designed and implemented new instant messaging components for an internal private component library"
            },
            {
                content: "Participated in Scrum/Agile ceremonies including stand-ups, sprint planning, backlog refinement, and retrospectives"
            }
        ]
    },
    {
        key: 2,
        company: "Maggiano's Little Italy",
        title: "Server",
        location: "Orlando, FL",
        dates: "June 2018 - December 2022",
        year: "2018",
        bullets: [
            {
                content: "Effectively serviced a 8 table station",
            },
            {
                content: "Accurately accounted for and balance all sales and receipts"
            },
            {
                content: "Communicated clearly with the kitchen both verbally and utilizing the computer register system"
            },
            {
                content: "Presented and encouraged current promotional information and materials to guest"
            },
            {
                content: "Managed duties calmly and effectively under pressure"
            },
            {
                content: "Communicated with guest clearly, patiently, courteously and with good humor"
            },
            {
                content: "Performed varied duties to ensure all aspects of service according to standing operating procedure"
            },
            {
                content: "Coordinated training for various front of house roles including servers, runners, bussers, and baristas"
            }
        ]
    },
    {
        key: 3,
        company: "Ford's Garage",
        title: "Server",
        location: "Brandon, FL",
        dates: "January 2017 - June 2018",
        year: "2017",
        bullets: [
            {
                content: "Effectively serviced a 6 table station",
            },
            {
                content: "Presented beer and cocktail recommendation based on customer’s taste profile and food selections",
            },
            {
                content: "Provided accurate descriptions and explain food safety guidelines for various burger temperatures"
            },
            {
                content: "Maintained free pour accuracy of liquors through weekly testing"
            },
            {
                content: "Assisted with restaurant cleanliness through various upkeep initiatives"
            }
        ]
    },
]

export const portfolioItems: PortfolioItem[] = [
    {
        key: "adventour",
        src: "src/assets/project-photos/Logo_Adventour_Sky.png",
        title: "Adventour",
        info: "Adventour, a portmanteau of the words “adventure” and “tour”, is the brainchild of \
                University of Central Florida student Wanyea Barbel. He crafted this idea at Shell \
                Hacks 2021 and later pitched it as a Senior Design project in the spring of 2022. \
                Adventour gives users the ability to fill a day with activities on a stop-by-stop basis. \
                The application leveraged Foursquare's location API to gather points of interest in the \
                chosen city that match the categories selected by the user. We then created an algorithm \
                that would choose a location or activity to do based on factors like distance, rating, \
                popularity, and whether or not the user had passed on that particular activity. I decided \
                to join this team for my senior capstone project because it would give me an opportunity \
                to build a mobile application which is something I did not have previous experience with. \
                The project consists of two separate applications which were built natively for iOS and \
                Android devices. The applications are no longer active due to this being a student sponsored \
                project lacking the necessary funds to keep the project active beyond the scope of the course.",
        url: "https://github.com/Wanyea/Adventour",
    },
    {
        key: "lonestarbetta",
        src: "src/assets/project-photos/lone-star-betta-text-logo.png",
        title: "Lone Star Betta",
        info: "After I graduated from UCF, I started taking on some freelance work building Shopify \
                e-commerce sites. I built this site for an online betta fish retailer based in Texas. \
                I customized the theme to fit their Lone Star branding as well as designed an additional \
                photo gallery component that is fully editable for the Shopify store owner in the online \
                theme editor. This gives them the opportunity to style the component themselves without \
                the need to learn any code. I also enhanced the branding of the company by creating a new \
                logo, designing product category graphics, choosing appropriate fonts, and selecting and \
                editing various icons for their online presence.",
        url: "https://lone-star-betta-co.myshopify.com/",
    },
    {
        key: "courtneygenix",
        src: "src/assets/project-photos/courtneygenix.png",
        title: "CourtneyGenix",
        info: "CourtneyGenix is a trainer-client web portal that was built to help a local nutritionist \
                and personal trainer better facilitate interaction, planning, and execution with her clients.\
                This full stack project was built in six weeks for COP4331, Processes of Object Oriented Software\
                Development, at UCF. This project was both mine and my team's first introduction to single page \
                application development and was an incredible learning experience. We built the user interface using \
                the Material UI React component library, and used Node, Express, and MongoDB to implement the back-end \
                infrastructure for this application. The final demo for this project went very well, but there was still \
                much room for improvement in this project. Overall, the mistakes made and lessons learned in the project \
                helped us all become strong software engineers with better understanding of web programming paradigms.",
        url: "https://github.com/glerichartwell/COP4331-Large-Project",
    },
    {
        key: "ehdev",
        src: "src/assets/project-photos/ehdev.png",
        title: "erichartwell.dev",
        info: "This is the website you are currently browsing! I wanted to take the time to design and implement \
                my personal website from scratch in a UI framework that was new to me. I developed this site using \
                Vue. I have some work experience building web clients using Vue, but this was my first opportunity \
                to build all of the components I would be using from scratch instead of using a library. Many of the \
                components I created for this site are built with reusability in mind. After the time I have spent on \
                this project, I can easily say that Vue has become my favorite UI framework to build web clients with. \
                In my opinion, the built in functionality and organization that Vue has is just unrivaled.",
        url: "https://github.com/glerichartwell/erichartwell.dev",
    },
    
]