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
  name: "BeatBuddy",
  stack: ["python", "react", "flask"],
  img: 'beatBuddy/recommendations.png',
  desc: "BeatBuddy is a machine learning project (Music Recommender System) hosted in a full-stack web application made with react and flask."
},
{
  name: "DiabeTest",
  stack: ["python", "react", "flask"],
  img: 'diabeTest/dashboard.png',
  desc: "Diabetest is an app designed to predicting diabetes using few parameter to help diagnose diabetes probability quickly and easy using Machine Learning model."
}
]

export const projects = [
  {
    name: "ASL Recognition",
    desc: "This project develops an American Sign Language (ASL) recognition system using deep learning. It preprocesses ASL gesture images, applies feature extraction with OpenCV, and trains a neural network using TensorFlow. The workflow integrates data loading, clustering, and classification, showcasing practical applications for assistive technologies and enhanced communication solutions.",
    stack: ["python", "react", "flask"],
    year: 2024,
    label: "Computer Vision",
    role: "Lead Developer",
    link: "https://github.com/dewennn/Sign_Language_Recognition",
    type: "project",

    developmentProcess: [
      <>
      <p>
        <b>What this project aims to solve:</b> Recognize American Sign Language (ASL) alphabet gestures to facilitate communication for individuals with hearing or speech impairments through a machine-learning-based system.</p>,
        <p><b>Background:</b> Using an ASL dataset containing gesture images, we aim to build a deep learning model that identifies and classifies gestures into their respective letters. This system can potentially assist in educational and assistive communication tools for the hearing-impaired community.</p>,
        <p><b>Development:</b> We preprocess gesture images from a dataset by resizing and labeling them. We use clustering and scaling techniques to refine features and employ TensorFlow to train a neural network. The model is evaluated for accuracy and optimized to predict gestures reliably, enabling accurate recognition of ASL alphabets based on visual input.
      </p>
    </>
    ],

    keyComponents: ["Image Preprocessing", "Edge Detection", "Bag of Words Model", "CNN", "Streamlit"],
    thumbnail: "asl/mockup.png",
    images: ["asl/mockup.png"]
  },
  {
    name: "BeatBuddy",
    desc: "BeatBuddy is a machine learning project (Music Recommender System) hosted in a full-stack web application made with react and flask.",
    stack: ["python", "react", "flask"],
    year: 2024,
    label: "Music Recommender",
    role: "Lead Developer",
    link: "https://github.com/dewennn/Beat-Buddy",
    type: "project",

    developmentProcess: [
    <p><b>What this project aim to solve:</b> Recommend similar musics to a music given by the user and a playlist of song  based on the user's taste.</p>,
    <p><b>Background:</b> Using a dataset we get from kaggle containing music mined from spotify. We create a recommender system, where user can pick a song from said dataset and find songs similar to that song. User can also create a "taste profile", which is a list of song that the user like.</p>,
    <p><b>Development:</b> We want to divide the songs to groups of "genre". But since there are no clear objective division of music genre. We decide to use "Optimal K Algorithm" {"("}Elbow & Silhoutte Method{")"} and decide to divide it to 11 group. We recommend similar musics by using the cosine-similarity function on the features compared to songs within the same cluster. Finally for user's taste we divide the songs within their "taste profile" based on their cluster, calculate the average, and then return songs that are most similar to the average of each division.</p>
    ],

    keyComponents: ["Data Preprocessing", "Optimal K Algorithm", "PCA Algorithm", "K-Means Clustering", "RESTful API made with Flask"],
    thumbnail: "beatBuddy/search.png",
    images: ["beatBuddy/search.png", "beatBuddy/recommendations.png"]
  },
  {
    name: "Hology Data Mining Competition",
    desc: 'This is a team submission for the "Hology" Data Mining Competition hosted by Universitas Brawijaya, finishing in the top 20 out of over 90 teams. As my first competition experience, it was incredibly rewarding and offered valuable lessons. I learned how to collaborate effectively under tight deadlines, engage in meaningful discussions, and coordinate efforts to maximize our strengths as a team.',
    stack: ["python", "tensorflow"],
    year: 2024,
    label: "Multi Label Image Classification",
    role: "Co-developer",
    link: "https://github.com/Hndra04/CompetitionHology7.0",
    type: "project",

    developmentProcess: [
      <p><b>What this project aims to solve:</b> Classify images with multiple labels {'type (t-shirt or hoodie) and color (red, yellow, blue, black, white)'}, focusing on accuracy and efficiency in handling image data.</p>,
      <p><b>Background:</b> The project utilizes a dataset provided for the Hology competition by Universitas Brawijaya. The dataset includes images with multiple labels, presenting a complex classification challenge. The goal was to implement an efficient, accurate model to handle this multi-label classification task. Besides the final model performance, the code structure, decription, and explanation are also graded.</p>,
      <p><b>Development:</b> From the given dataset we preprocess the images by normalizing the pixels value and using tensorlow to covert it to a tensor. Then we use SMOTE oversampling to balance the dataset. We use two different model to each predict the color and type. For color we use a CNN model and for type we use a CNN model with VGG16 architecture. Our final model performance measured with Exact Match Ratio is: 92.7%.
      </p>
    ],

    keyComponents: ["Image Preprocessing", "Handling data imbalance", "CNN Model", "Hyperparameter Tuning"],
    thumbnail: "hology/prediction.png",
    images: ["hology/prediction.png", "hology/result.png"]
  },
  {
    name: "DiabeTest",
    desc: "Diabetest is an app designed to predicting diabetes using few parameter to help diagnose diabetes probability quickly and easy using Machine Learning model.",
    stack: ["python", "react", "flask"],
    year: 2024,
    label: "ML Classifier",
    role: "Developer",
    link: "https://github.com/Hndra04/Diabetest",
    type: "project",
    
    developmentProcess: [
    <p><b>What this project aim to solve:</b> Give a prediction whether or not someone is diabetic by only using measurement that a regular person can get access to without proffesional help.</p>,
    <p><b>Background:</b> This project is develop using a dataset we get from kaggle containing data of patients, their health measurement, and a label measuring whether they are diabetic or not.</p>,
    <p><b>Development:</b> We want to only use features that a regular person can get access to without proffesinal help. So we decide to only use these features {'('}age, bmi, blood pressire, and pregnancies count{')'}. We preprocess the data and then train three different model: KNN, SVM, and Logistic Regression. The final accuracy result is KNN: 96.7%; SVM: 68.8%; and Logistic Regression: 64.8%. So finally we use the KNN model for the production.</p>
    ],
  
    keyComponents: ["Data Preprocessing (scaling & handling imbalance)", "KNN", "SVM", "Logistic Regression" , "K-Means Clustering", "RESTful API made with Flask"],
    thumbnail: "diabeTest/dashboard.png",
    images: ["diabeTest/dashboard.png"]
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
  cv: "https://drive.google.com/file/d/1Z2n_WT3iv1WpQVjkffD7PdSjbL-4wZwT/view?usp=sharing",
  kaggle: "https://www.kaggle.com/derrenmalaka/"
}