export interface CourseResource {
  title: string;
  type: 'book' | 'video' | 'documentation' | 'repository' | 'course';
  url: string;
  author?: string;
}

export interface Course {
  code: string;
  title: string;
  credits: number;
  weeklyTopics: string[];
  prerequisites: string[];
  resources: CourseResource[];
  assessment: string;
  project?: string;
}

export interface Semester {
  number: number;
  title: string;
  duration: string;
  courses: Course[];
}

export interface RefresherMonth {
  month: number;
  title: string;
  focus: string;
  topics: string[];
  resources: CourseResource[];
}

export const refresherCurriculum: RefresherMonth[] = [
  {
    month: 1,
    title: "Programming + Math Foundations",
    focus: "Core programming skills and mathematical prerequisites",
    topics: [
      "Python Programming (Advanced OOP, Design Patterns)",
      "Linear Algebra (Vectors, Matrices, Eigenvalues)",
      "Calculus (Derivatives, Optimization)",
      "Discrete Mathematics (Logic, Proofs, Graph Theory)",
      "Statistics & Probability Theory"
    ],
    resources: [
      {
        title: "Effective Python",
        type: "book",
        url: "https://effectivepython.com/",
        author: "Brett Slatkin"
      },
      {
        title: "Linear Algebra and Its Applications",
        type: "book",
        url: "https://www.pearson.com/us/higher-education/program/Lay-Linear-Algebra-and-Its-Applications-5th-Edition/PGM333934.html",
        author: "David Lay"
      }
    ]
  },
  {
    month: 2,
    title: "Core CS Foundations",
    focus: "Essential computer science theoretical foundations",
    topics: [
      "Data Structures (Advanced Trees, Graphs, Hash Tables)",
      "Algorithms Analysis (Big O, Sorting, Searching)",
      "Computer Architecture (CPU, Memory, Assembly)",
      "Operating Systems Concepts",
      "Database Systems Fundamentals"
    ],
    resources: [
      {
        title: "Introduction to Algorithms (CLRS)",
        type: "book",
        url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
        author: "Cormen, Leiserson, Rivest, Stein"
      },
      {
        title: "Computer Systems: A Programmer's Perspective",
        type: "book",
        url: "https://csapp.cs.cmu.edu/",
        author: "Bryant & O'Hallaron"
      }
    ]
  },
  {
    month: 3,
    title: "Systems & Applied",
    focus: "Practical systems knowledge and software engineering",
    topics: [
      "Software Engineering Principles (SOLID, Design Patterns)",
      "System Design Fundamentals",
      "Network Programming & Protocols",
      "Version Control & DevOps Basics",
      "Security Fundamentals"
    ],
    resources: [
      {
        title: "Designing Data-Intensive Applications",
        type: "book",
        url: "https://dataintensive.net/",
        author: "Martin Kleppmann"
      },
      {
        title: "Clean Architecture",
        type: "book",
        url: "https://www.pearson.com/us/higher-education/program/Martin-Clean-Architecture-A-Craftsman-s-Guide-to-Software-Structure-and-Design/PGM333935.html",
        author: "Robert C. Martin"
      }
    ]
  }
];

export const curriculum: Semester[] = [
  {
    number: 1,
    title: "Foundations & Mathematical Modeling",
    duration: "4 months",
    courses: [
      {
        code: "CS-501",
        title: "Advanced Algorithms & Complexity Theory",
        credits: 4,
        weeklyTopics: [
          "Advanced Graph Algorithms",
          "Dynamic Programming Mastery",
          "NP-Completeness & Approximation",
          "Randomized & Probabilistic Algorithms"
        ],
        prerequisites: ["Data Structures", "Discrete Mathematics"],
        assessment: "Algorithm Implementation Portfolio + Complexity Analysis Report",
        project: "Implement and benchmark 5 advanced algorithms",
        resources: [
          {
            title: "Algorithm Design Manual",
            type: "book",
            url: "https://www.algorist.com/",
            author: "Steven Skiena"
          },
          {
            title: "MIT 6.046J Algorithms",
            type: "course",
            url: "https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/"
          }
        ]
      },
      {
        code: "CS-502",
        title: "Machine Learning Foundations",
        credits: 4,
        weeklyTopics: [
          "Statistical Learning Theory",
          "Supervised Learning (Linear Models, Trees, Ensembles)",
          "Unsupervised Learning (Clustering, Dimensionality Reduction)",
          "Model Evaluation & Hyperparameter Optimization"
        ],
        prerequisites: ["Linear Algebra", "Statistics", "Python Programming"],
        assessment: "ML Pipeline Implementation + Research Paper Analysis",
        project: "End-to-end ML project with real dataset",
        resources: [
          {
            title: "The Elements of Statistical Learning",
            type: "book",
            url: "https://web.stanford.edu/~hastie/ElemStatLearn/",
            author: "Hastie, Tibshirani, Friedman"
          },
          {
            title: "Scikit-learn Documentation",
            type: "documentation",
            url: "https://scikit-learn.org/"
          }
        ]
      }
    ]
  },
  {
    number: 2,
    title: "Deep Learning & Neural Networks",
    duration: "4 months",
    courses: [
      {
        code: "CS-601",
        title: "Deep Learning Architectures",
        credits: 4,
        weeklyTopics: [
          "Neural Network Fundamentals & Backpropagation",
          "Convolutional Neural Networks (CNNs)",
          "Recurrent Networks (RNNs, LSTMs, Transformers)",
          "Generative Models (GANs, VAEs, Diffusion)"
        ],
        prerequisites: ["CS-502 Machine Learning Foundations"],
        assessment: "Neural Architecture Implementation + Performance Analysis",
        project: "Custom neural network architecture for specific domain",
        resources: [
          {
            title: "Deep Learning",
            type: "book",
            url: "https://www.deeplearningbook.org/",
            author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville"
          },
          {
            title: "PyTorch Tutorials",
            type: "documentation",
            url: "https://pytorch.org/tutorials/"
          }
        ]
      },
      {
        code: "CS-602",
        title: "Computer Vision & NLP",
        credits: 4,
        weeklyTopics: [
          "Image Processing & Feature Extraction",
          "Object Detection & Segmentation",
          "Natural Language Processing Fundamentals",
          "Transformer Models & Large Language Models"
        ],
        prerequisites: ["CS-601 Deep Learning Architectures"],
        assessment: "Multi-modal AI System + Technical Report",
        project: "Build vision-language model application",
        resources: [
          {
            title: "Computer Vision: Algorithms and Applications",
            type: "book",
            url: "http://szeliski.org/Book/",
            author: "Richard Szeliski"
          },
          {
            title: "Hugging Face Transformers",
            type: "documentation",
            url: "https://huggingface.co/docs/transformers/"
          }
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Systems & Infrastructure",
    duration: "4 months",
    courses: [
      {
        code: "CS-701",
        title: "Distributed Systems & Cloud Computing",
        credits: 4,
        weeklyTopics: [
          "Distributed System Principles",
          "Microservices Architecture",
          "Cloud Platforms (AWS/GCP/Azure)",
          "Container Orchestration (Docker, Kubernetes)"
        ],
        prerequisites: ["Operating Systems", "Networks"],
        assessment: "Scalable System Design + Implementation",
        project: "Deploy distributed application on cloud platform",
        resources: [
          {
            title: "Designing Data-Intensive Applications",
            type: "book",
            url: "https://dataintensive.net/",
            author: "Martin Kleppmann"
          },
          {
            title: "AWS Documentation",
            type: "documentation",
            url: "https://docs.aws.amazon.com/"
          }
        ]
      },
      {
        code: "CS-702",
        title: "MLOps & Production AI Systems",
        credits: 4,
        weeklyTopics: [
          "ML Pipeline Automation",
          "Model Versioning & Experiment Tracking",
          "Production Deployment & Monitoring",
          "A/B Testing & Model Performance Analysis"
        ],
        prerequisites: ["CS-502 Machine Learning Foundations", "CS-701 Distributed Systems"],
        assessment: "Full MLOps Pipeline + Production Deployment",
        project: "Production-ready ML system with CI/CD",
        resources: [
          {
            title: "Building Machine Learning Pipelines",
            type: "book",
            url: "https://www.oreilly.com/library/view/building-machine-learning/9781492053187/",
            author: "Hannes Hapke, Catherine Nelson"
          },
          {
            title: "MLflow Documentation",
            type: "documentation",
            url: "https://mlflow.org/"
          }
        ]
      }
    ]
  },
  {
    number: 4,
    title: "Advanced AI & Research",
    duration: "4 months",
    courses: [
      {
        code: "CS-801",
        title: "Advanced Machine Learning & AI",
        credits: 4,
        weeklyTopics: [
          "Reinforcement Learning",
          "Few-Shot & Meta-Learning",
          "Federated Learning",
          "AI Safety & Alignment"
        ],
        prerequisites: ["CS-601 Deep Learning Architectures"],
        assessment: "Research Paper Implementation + Novel Contribution",
        project: "Original research in advanced AI topic",
        resources: [
          {
            title: "Reinforcement Learning: An Introduction",
            type: "book",
            url: "http://incompleteideas.net/book/the-book.html",
            author: "Sutton & Barto"
          },
          {
            title: "Papers With Code",
            type: "repository",
            url: "https://paperswithcode.com/"
          }
        ]
      },
      {
        code: "CS-802",
        title: "AI Ethics & Responsible AI",
        credits: 3,
        weeklyTopics: [
          "Bias & Fairness in AI Systems",
          "Explainable AI (XAI)",
          "Privacy-Preserving ML",
          "AI Governance & Policy"
        ],
        prerequisites: ["CS-502 Machine Learning Foundations"],
        assessment: "Ethics Case Study Analysis + Framework Proposal",
        project: "Audit existing AI system for bias and propose improvements",
        resources: [
          {
            title: "Weapons of Math Destruction",
            type: "book",
            url: "https://weaponsofmathdestructionbook.com/",
            author: "Cathy O'Neil"
          },
          {
            title: "AI Ethics Guidelines",
            type: "documentation",
            url: "https://ai.google/principles/"
          }
        ]
      }
    ]
  },
  {
    number: 5,
    title: "Specialization & Innovation",
    duration: "4 months",
    courses: [
      {
        code: "CS-901",
        title: "AI Product Development",
        credits: 4,
        weeklyTopics: [
          "AI Product Strategy & Market Analysis",
          "User Experience for AI Applications",
          "Rapid Prototyping & MVP Development",
          "AI Business Model Innovation"
        ],
        prerequisites: ["CS-702 MLOps & Production AI Systems"],
        assessment: "AI Product Launch + Market Validation",
        project: "Launch AI-powered product with user feedback",
        resources: [
          {
            title: "AI Product Management",
            type: "course",
            url: "https://www.coursera.org/learn/ai-product-management-duke"
          },
          {
            title: "The Lean Startup",
            type: "book",
            url: "http://theleanstartup.com/",
            author: "Eric Ries"
          }
        ]
      },
      {
        code: "CS-902",
        title: "Emerging AI Technologies",
        credits: 4,
        weeklyTopics: [
          "Quantum Machine Learning",
          "Neuromorphic Computing",
          "Edge AI & Embedded Systems",
          "AI Hardware Acceleration (GPUs, TPUs)"
        ],
        prerequisites: ["CS-801 Advanced Machine Learning & AI"],
        assessment: "Technology Evaluation + Proof of Concept",
        project: "Implement emerging AI technology prototype",
        resources: [
          {
            title: "Quantum Machine Learning",
            type: "book",
            url: "https://www.springer.com/gp/book/9783319964232",
            author: "Peter Wittek"
          },
          {
            title: "TensorFlow Quantum",
            type: "documentation",
            url: "https://www.tensorflow.org/quantum"
          }
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Capstone & Portfolio",
    duration: "4 months",
    courses: [
      {
        code: "CS-999",
        title: "Master's Capstone Project",
        credits: 6,
        weeklyTopics: [
          "Project Planning & Research Phase",
          "System Architecture & Design",
          "Implementation & Development",
          "Evaluation, Testing & Documentation"
        ],
        prerequisites: ["All previous courses"],
        assessment: "Production-Ready AI SaaS + Thesis Defense",
        project: "Launch a complete AI-powered SaaS product",
        resources: [
          {
            title: "The Pragmatic Programmer",
            type: "book",
            url: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
            author: "Dave Thomas, Andy Hunt"
          },
          {
            title: "GitHub Actions Documentation",
            type: "documentation",
            url: "https://docs.github.com/en/actions"
          }
        ]
      }
    ]
  }
];

export const projectCategories = [
  {
    title: "Machine Learning Projects",
    projects: [
      {
        title: "Predictive Analytics Dashboard",
        description: "Real-time ML pipeline for business forecasting",
        github: "https://github.com/username/predictive-dashboard",
        status: "completed" as const
      }
    ]
  },
  {
    title: "AI Applications",
    projects: [
      {
        title: "Intelligent Document Processing",
        description: "NLP-powered document analysis and extraction",
        github: "https://github.com/username/doc-processor",
        status: "in-progress" as const
      }
    ]
  },
  {
    title: "System Design",
    projects: [
      {
        title: "Distributed ML Training Platform",
        description: "Scalable infrastructure for training large models",
        github: "https://github.com/username/ml-platform",
        status: "planned" as const
      }
    ]
  }
];