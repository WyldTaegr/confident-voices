import images from "./images";
const data = {
    services: [{
            id: 1,
            picture: images.searchDoctor,
            title: "Search Therapist",
            description: "Choose your speech therapist from thousands of specialist, general, and trusted hospitals",
        },
        {
            id: 2,
            picture: images.consultation,
            title: "Online Speech Therapy Tools",
            description: "Access therapeutic exercises and tools with our mobile application, tailored for effective speech improvement.",
        },
        {
            id: 3,
            picture: images.detailsInfo,
            title: "Expert Consultation",
            description: "Get a free consultation with trusted speech therapists and receive the best guidance tailored for you or your child.",
        },
        {
            id: 4,
            picture: images.emergancyCare,
            title: "Support",
            description: "Get 24/7 immediate assistance for speech-related concerns, ensuring you and your family always have help when you need it.",
        },
        {
            id: 5,
            picture: images.tracking,
            title: "Progress Tracking",
            description: "Monitor and save your speech therapy progress and milestones achieved over time. ",
        },
    ],

    testimonial: [{
            id: 1,
            userImage: images.testimonialAvatar,
            userName: "Rachel Yamamoto",
            userSubHeading: "Case Western Reserve University",
            reviewText: "Our goal is to transform educational experiences by providing innovative and interactive web-based solutions that make learning inclusive and enjoyable for children from diverse communities.",
        },
        {
            id: 2,
            userImage: images.testimonialAvatar2,
            userName: "Isha Das",
            userSubHeading: "Case Western Reserve University",
            reviewText: "Our vision is to empower the next generation of learners by creating an engaging web application that makes speech therapy accessible to children of all backgrounds.",
        },
        {
            id: 3,
            userImage: images.testimonialAvatar3,
            userName: "Dhananjay Surti",
            userSubHeading: "Case Western Reserve University",
            reviewText: "We are committed to bridging the educational gap by developing a user-friendly digital platform that simplifies and enhances the learning process for young minds everywhere.",
        },
        {
            id: 4,
            userImage: images.testimonialAvatar4,
            userName: "Tiger Tian",
            userSubHeading: "Case Western Reserve University",
            reviewText: "Our mission is to revolutionize the way children learn, offering a dynamic and inclusive online environment that supports and nurtures every child's potential, regardless of their background.",
        },
    ],
};
export default data;