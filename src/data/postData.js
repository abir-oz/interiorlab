import { FaComments, FaCompressAlt, FaPen, FaPenSquare, FaPhotoVideo, FaUser } from "react-icons/fa";


const postData = (
    [{
        title: "We offer Interior design solutions for our clients",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consectetur qui reprehenderit, harum, veniam quae illum ducimus tempore culpa error obcaecati provident impedit et ipsum reiciendis sit sequi? Laudantium, animi!",
        thumb: "https://i.ibb.co/JdzL2J9/image.jpg",
        buttonText: "Learn More"
    },
    {
        title: "Get design inspirations",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consectetur qui reprehenderit, harum, veniam quae illum ducimus tempore culpa error obcaecati provident impedit et ipsum reiciendis sit sequi? Laudantium, animi!",
        thumb: "https://i.ibb.co/vHYxFJy/image2.jpg",
        buttonText: "Discover More"
    }]
)


const projectData = ([
    {
        title: "37A Pine Lane",
        category: "Residential - HDB",
        thumb: "https://i.ibb.co/dPtYdJq/image3.jpg",
        buttonText: "View Project"
    },
    {
        title: "37A Pine Lane",
        category: "Residential - HDB",
        thumb: "https://i.ibb.co/dPtYdJq/image3.jpg",
        buttonText: "View Project"
    },
    {
        title: "37A Pine Lane",
        category: "Residential - HDB",
        thumb: "https://i.ibb.co/dPtYdJq/image3.jpg",
        buttonText: "View Project"
    },
    {
        title: "37A Pine Lane",
        category: "Residential - HDB",
        thumb: "https://i.ibb.co/dPtYdJq/image3.jpg",
        buttonText: "View Project"
    },
    {
        title: "37A Pine Lane",
        category: "Residential - HDB",
        thumb: "https://i.ibb.co/dPtYdJq/image3.jpg",
        buttonText: "View Project"
    },
    {
        title: "37A Pine Lane",
        category: "Residential - HDB",
        thumb: "https://i.ibb.co/dPtYdJq/image3.jpg",
        buttonText: "View Project"
    },
])


const whatWeDo = ([
    {
        title: "Project Management",
        icon: <FaUser />,
        details: "Proper care and handling of your interior design projects"
    },
    {
        title: "3D Drawing",
        icon: <FaPhotoVideo />,
        details: "Detailed and appropriately furnished floor plans for your reference"
    },
    {
        title: "Consulting",
        icon: <FaComments />,
        details: "Proper care and handling of your interior design projects"
    },
    {
        title: "Interior Design",
        icon: <FaPen />,
        details: "Our workmanship & dedicated services for every project."
    },
    {
        title: "Space Planning",
        icon: <FaPenSquare />,
        details: "Accomplish a beautiful, comfortable, and tasteful interior with decent planning"
    },
    {
        title: "Workmanship",
        icon: <FaCompressAlt />,
        details: "Only the best, nothing less"
    },
])

export { postData, projectData, whatWeDo };