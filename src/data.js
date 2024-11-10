export const experience = [
  {
    title: "Part-time Coding Teacher",
    company: "Timedoor Academy",
    duration: "April 2024 - Now"
  },
  {
    title: "Student Mentor",
    company: "Binus Student Learning Community",
    duration: "Sep 2023 - Feb 2024"
  }
]

export const featuredProject = [
{
  name: "BeatBuddy / Music Recommender",
  stack: ["python", "react", "flask"],
  img: 'beatBuddy/recommendations.png'
},
{
  name: "DiabeTest / Machine Learning Classifier",
  stack: ["python", "react", "flask"],
  img: 'diabeTest/dashboard.png'
}
]

export const projects = [
  {
    name: "BeatBuddy",
    desc: "BeatBuddy is a machine learning project (Music Recommender System) hosted in a full-stack web application made with react and flask.",
    stack: ["python", "react", "flask"],
    year: 2024,
    label: "Music Recommender",
    role: "Lead Developer",

    developmentProcess: [
    <p><b>What this project aim to solve:</b> Recommend similar musics to a music given by the user and a playlist of song  based on the user's taste.</p>,
    <p><b>Background:</b> Using a dataset we get from kaggle containing music mined from spotify. We create a recommender system, where user can pick a song from said dataset and find songs similar to that song. User can also create a "taste profile", which is a list of song that the user like.</p>,
    <p><b>Development:</b> We want to divide the songs to groups of "genre". But since there are no clear objective division of music genre. We decide to use "Optimal K Algorithm" {"("}Elbow & Silhoutte Method{")"} and decide to divide it to 11 group. We recommend similar musics by using the cosine-similarity function on the features compared to songs within the same cluster. Finally for user's taste we divide the songs within their "taste profile" based on their cluster, calculate the average, and then return songs that are most similar to the average of each division.</p>
    ],

    features: ["Data Preprocessing", "Optimal K Algorithm", "PCA Algorithm", "K-Means Clustering", "RESTful API made with Flask"],
    thumbnail: "beatBuddy/search.png",
    images: ["beatBuddy/search.png", "beatBuddy/recommendations.png"]
  },
  {
    name: "DiabeTest",
    desc: "Diabetest is an app designed to predicting diabetes using few parameter to help diagnose diabetes probability quickly and easy using Machine Learning model.",
    stack: ["python", "react", "flask"],
    year: 2024,
    label: "ML Classifier",
    role: "Developer",
    
    developmentProcess: [
    <p><b>What this project aim to solve:</b> Give a prediction whether or not someone is diabetic by only using measurement that a regular person can get access to without proffesional help.</p>,
    <p><b>Background:</b> This project is develop using a dataset we get from kaggle containing data of patients, their health measurement, and a label measuring whether they are diabetic or not.</p>,
    <p><b>Development:</b> We want to only use features that a regular person can get access to without proffesinal help. So we decide to only use these features {'('}age, bmi, blood pressire, and pregnancies count{')'}. We preprocess the data and then train three different model: KNN, SVM, and Logistic Regression. The final accuracy result is KNN: 96.7%; SVM: 68.8%; and Logistic Regression: 64.8%. So finally we use the KNN model for the production.</p>
    ],
  
    features: ["Data Preprocessing (scaling & handling imbalance)", "KNN", "SVM", "Logistic Regression" , "K-Means Clustering", "RESTful API made with Flask"],
    thumbnail: "diabeTest/dashboard.png",
    images: ["diabeTest/dashboard.png"]
  },
  {
    name: "Bee-a-Scholar",
    desc: "Bee-a-Scholar is a Web Application that I'm working on in a team of five people. We are tasked to create a market analysis for a service that we'll make. We decide to create a web application that connects scholarship provider and receiver.",
    stack: ["react", "figma", "firebase"],
    year: 2024,
    label: "Full-Stack CRUD Web",
    role: "Tech Lead",
    developmentProcess: "",
    features: [""],
    thumbnail: "beeAScholar/splashScreen.png",
    images: [""]
  },
  {
    name: "Lend-a-Hand",
    desc: "Lend-a-Hand is concept web application that acts as a platform that facilitates connections between donors and social activity organizers. Our mission is to empower individuals and organizations by streamlining the process of supporting local initiatives and community projects. It's a full-stack web application that implements CRUD functionality with react and firebase.",
    stack: ["react", "figma", "firebase"],
    year: 2024,
    label: "Full-Stack CRUD Web",
    role: "Tech Lead",
    developmentProcess: "",
    features: [""],
    thumbnail: "lendAHand/dashboard.png",
    images: [""]
  },
  {
    name: "Garden to Table",
    desc: "This is a web design for a fictional service named Garden to Table that serve fresh natural food straight to consumer.",
    stack: ["figma"],
    year: 2024,
    label: "UI/UX Design",
    role: "Designer",
    developmentProcess: "",
    features: [""],
    thumbnail: "gardenToTable/dashboard.png",
    images: [""]
  }
]

export const techStack = [
  {
    name: "Python",
    img: "python",
    focus: true
  },
  {
    name: "Tensorflow",
    img: "tensorflow",
    focus: true
  },
  {
    name: "Hugging Face",
    img: "huggingFace",
    focus: true
  },
  {
    name: "Java",
    img: "java",
    focus: true
  },
  {
    name: "Android",
    img: "android",
    focus: true
  },
  {
    name: "Figma",
    img: "figma",
    focus: false
  },
  {
    name: "React",
    img: "react",
    focus: false
  },
  {
    name: "Tailwind",
    img: "tailwind",
    focus: false
  },
  {
    name: "Firebase",
    img: "firebase",
    focus: false
  },
  {
    name: "Flask",
    img: "flask",
    focus: false
  }
]

export const links = {
  linkedin: "https://www.linkedin.com/in/derren-malaka/",
  github: "https://github.com/dewennn",
  instagram: "https://www.instagram.com/drrn.m/",
  cv: "https://drive.google.com/file/d/160GYDsl6MQKkscIRTpaiFcwTlSRYN71D/view"
}