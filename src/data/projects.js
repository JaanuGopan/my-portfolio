/**
 * Projects data for Janugopan's portfolio.
 *
 * To add a real image:
 *   1. Place the file in  public/images/your-image.jpg
 *   2. Set  imageSrc: '/images/your-image.jpg'
 *
 * To add GitHub / live URLs replace the '#' strings.
 */

export const PROJECTS = [
  {
    id: 1,
    num: '001',
    name: 'QR Code-Based Attendance Tracking System',
    date: 'Jan 2024 – Jun 2024',
    shortDesc:
      'Full-stack attendance system with QR check-in, GPS validation, JWT authentication, and CI/CD — deployed in a real university environment.',
    fullDesc:
      'Designed and developed a full-stack attendance system for real university use. Students check in by scanning QR codes, validated using GPS location and device verification to prevent proxy attendance.',
    highlights: [
      'Built a React.js web app for lecturers to create modules and sessions, generate QR codes, and manage attendance reports.',
      'Developed admin features to manage students, lecturers, events, and attendance records.',
      'Built a Flutter mobile app for students with module enrollment, QR scanning, attendance marking, and history tracking.',
      'Developed backend services using Spring Boot and PostgreSQL with JWT-based authentication.',
      'Implemented QR-based attendance with GPS validation and device verification.',
      'Deployed and tested the system in a real university environment.',
      'Set up CI/CD pipeline using GitHub Actions for automated deployment to a faculty Linux server.',
    ],
    tags: ['Flutter', 'Spring Boot', 'PostgreSQL', 'JWT', 'GitHub Actions', 'CI/CD'],
    imageSections: [
      {
        title: 'Web App',
        images: [
          //'/images/projects/skyticker/webapp/1.png',
          '/images/projects/skyticker/webapp/2.png',
          '/images/projects/skyticker/webapp/3.png',
          '/images/projects/skyticker/webapp/4.png',
          '/images/projects/skyticker/webapp/5.png',
          '/images/projects/skyticker/webapp/6.png',
          '/images/projects/skyticker/webapp/7.png',
          '/images/projects/skyticker/webapp/8.png',
          '/images/projects/skyticker/webapp/9.png',
          '/images/projects/skyticker/webapp/10.png',
          '/images/projects/skyticker/webapp/11.png',
          '/images/projects/skyticker/webapp/12.png',
          '/images/projects/skyticker/webapp/13.png',
          '/images/projects/skyticker/webapp/14.png'
        ]
      },
      {
        title: 'Mobile App',
        images: [
          '/images/projects/skyticker/mobileapp/1.jpg',
          '/images/projects/skyticker/mobileapp/2.jpg',
          '/images/projects/skyticker/mobileapp/3.jpg',
          '/images/projects/skyticker/mobileapp/4.jpg',
          '/images/projects/skyticker/mobileapp/5.jpg',
          '/images/projects/skyticker/mobileapp/6.jpg',
          '/images/projects/skyticker/mobileapp/7.jpg',
          '/images/projects/skyticker/mobileapp/8.jpg',
          '/images/projects/skyticker/mobileapp/9.jpg',
          '/images/projects/skyticker/mobileapp/10.jpg',
          '/images/projects/skyticker/mobileapp/11.jpg',
          '/images/projects/skyticker/mobileapp/12.jpg',
          '/images/projects/skyticker/mobileapp/13.jpg',
          '/images/projects/skyticker/mobileapp/14.jpg',
          '/images/projects/skyticker/mobileapp/15.jpg',
          '/images/projects/skyticker/mobileapp/16.jpg',
          '/images/projects/skyticker/mobileapp/17.jpg',
          '/images/projects/skyticker/mobileapp/18.jpg',
          '/images/projects/skyticker/mobileapp/19.png',
          '/images/projects/skyticker/mobileapp/20.jpg',
          '/images/projects/skyticker/mobileapp/21.jpg'
        ]
      },
      {
        title: 'Backend Architecture',
        images: [
          '/images/projects/skyticker/backend/skyticker_system_architecture.svg',
          '/images/projects/skyticker/backend/skyticker_attendance_flow.svg',
          '/images/projects/skyticker/backend/skyticker_package_structure.svg'
        ]
      }
    ],  
    images :['/images/projects/skyticker/webapp/1.png'],      
    githubUrl: [
      { label: 'GitHub (Backend)', url: 'https://github.com/JaanuGopan/Software-Project-QRBATS-BackEnd.git' },
      { label: 'GitHub (Frontend)', url: 'https://github.com/JaanuGopan/Software-Project-QRBATS-WebApp-FrontEnd.git' },
      { label: 'GitHub (Mobile App)', url: 'https://github.com/JaanuGopan/Software-Project-QRBATS-MobileApp.git' },
    ],
    liveUrl: null,
    customLinks: [
      { label: 'SkyTicker', url: 'http://192.248.50.239/' },
      { label: 'Mobile App', url: 'https://skyticker-mobile.vercel.app/' }
    ],

  },
  {
    id: 2,
    num: '002',
    name: 'Scientific Paper Summarizer & Chatbot',
    date: 'Jan 2025 – Apr 2025',
    shortDesc:
      'LLM-powered tool for scientific paper summarization and interactive Q&A — fine-tuned on arXiv with a full PDF processing pipeline.',
    fullDesc:
      'An AI-powered research assistant that allows users to upload PDF papers and interact with them via natural language. The system summarises abstracts and answers domain-specific questions using a fine-tuned transformer and retrieval-augmented generation.',
    highlights: [
      'Built an LLM-powered system for scientific paper summarization and Q&A over PDF documents.',
      'Fine-tuned transformer models on the arXiv dataset for abstract generation.',
      'Implemented a full PDF processing pipeline with text extraction, preprocessing, and chunking.',
      'Used RAG (Retrieval-Augmented Generation) for accurate contextual answers.',
    ],
    tags: ['Python', 'PyTorch', 'FastAPI', 'LLM', 'RAG', 'Transformers', 'arXiv'],
    images: [
      '/images/projects/scientific_paper_chatbot/1.jpeg',
      '/images/projects/scientific_paper_chatbot/2.png',
      '/images/projects/scientific_paper_chatbot/3.png'
    ],
    githubUrl: 'https://github.com/hasee-k/abstract-generator.git',
    liveUrl: null,
  },
  {
    id: 3,
    num: '003',
    name: 'Book Stall Reservation System – Microservices',
    date: 'Aug 2025 – Dec 2025',
    shortDesc:
      'Microservices-based reservation platform built with Spring Boot and React, using Kafka for async messaging and Docker for containerisation.',
    fullDesc:
      'A distributed reservation system for book fair stall management. Each service — reservations, user management, notifications, and payments — runs independently and communicates asynchronously through Kafka, making the system highly scalable and resilient.',
    highlights: [
      'Developed a microservices-based system with Spring Boot and a React.js frontend.',
      'Built RESTful APIs for stall reservations, user management, notifications, and payments.',
      'Integrated Kafka for asynchronous inter-service communication.',
      'Containerised the full system using Docker and Docker Compose for easy deployment.',
    ],
    tags: ['Spring Boot', 'React.js', 'Kafka', 'Docker', 'PostgreSQL', 'Microservices'],
    images: ['/images/projects/book_stall/1.png'],
    githubUrl: 'https://github.com/H-Neethika/stalls-reservation-system.git',
    liveUrl: null,
  },
  {
    id: 4,
    num: '004',
    name: 'Secure Chat Application',
    date: 'Mar 2025 – Jun 2025',
    shortDesc:
      'Real-time chat with end-to-end encryption, HMAC integrity, replay attack protection, and forward secrecy.',
    fullDesc:
      'A security-first real-time messaging application that implements rigorous cryptographic principles. Every message is encrypted end-to-end using a hybrid cryptographic scheme, with audit logging and key rotation built in from the ground up.',
    highlights: [
      'Built a secure real-time chat application using Spring Boot and React.',
      'Implemented end-to-end encryption with asymmetric/symmetric cryptography and HMAC integrity checks.',
      'Ensured authentication, session key exchange, replay attack protection, and forward secrecy.',
      'Added audit logging for all critical security events and key exchanges.',
    ],
    tags: ['Spring Boot', 'React', 'Cryptography', 'WebSockets', 'JWT', 'Security'],
    images: [
      '/images/projects/secure_chat/1.jpeg',
      '/images/projects/secure_chat/2.jpeg',
      '/images/projects/secure_chat/3.jpeg',
      '/images/projects/secure_chat/4.jpeg',
      '/images/projects/secure_chat/5.jpeg',
      '/images/projects/secure_chat/6.jpeg',
    ],
    githubUrl: '#',
    liveUrl: null,
  },
  {
    id: 5,
    num: '005',
    name: 'SHEAF: Secure Heterogeneity-Aware Efficient Aggregation for Federated Learning',
date: 'Feb 2025 – Nov 2025',
shortDesc:
  'Final Year Research Project — Proposed a secure, heterogeneity-aware federated learning framework achieving ~84.7% accuracy with ~75% communication cost reduction under non-IID settings.',
fullDesc:
  'Developed SHEAF, a novel federated learning framework addressing real-world data heterogeneity, security, and communication efficiency. The system introduces aggregation strategies based on Jensen-Shannon Divergence and Shannon Entropy, combined with peer validation signals to improve convergence and model robustness. Integrated a post-quantum secure client–server communication protocol and optimized system performance using model quantization. Evaluated on CIFAR-10 and 5G-NIDD datasets, demonstrating improved accuracy, stability, and cost efficiency compared to existing methods.',
highlights: [
  'Proposed heterogeneity-aware aggregation methods (1-JSD, SEBW, AB(1-JSD), AB-SEBW) combining statistical divergence and peer validation.',
  'Achieved up to 84.7% accuracy on CIFAR-10 with improved convergence under highly non-IID data distributions.',
  'Reduced communication overhead by ~75% using post-training model quantization with minimal accuracy loss (~±1%).',
  'Designed and implemented a post-quantum secure communication protocol using ML-KEM, Falcon-512, and Ascon/AES-GCM.',
  'Formally verified security properties (confidentiality and authentication) using the Scyther tool.',
  'Optimized FL performance using techniques like selective quantization, mixed precision analysis, and adaptive aggregation strategies.',
  'Benchmarked against FedAvg and CAFA, consistently outperforming in accuracy and stability.',
],
tags: ['Python', 'PyTorch', 'Federated Learning', 'Post-Quantum Cryptography', 'Machine Learning', 'Distributed Systems', 'Research'],
images: [
      '/images/projects/fyp/1.gif',
      '/images/projects/fyp/2.png',
      '/images/projects/fyp/3.png',
      '/images/projects/fyp/4.png',
      '/images/projects/fyp/5.png',
      '/images/projects/fyp/6.png',
      '/images/projects/fyp/7.png',
      '/images/projects/fyp/8.png',
      '/images/projects/fyp/9.png',
      '/images/projects/fyp/10.png',
      '/images/projects/fyp/11.png',
      '/images/projects/fyp/12.png',
      
    ],
    githubUrl: '#',
    liveUrl: null,
    customLinks: [
      { label: 'Conference Paper', url: '/PDF/FYP/IEEE_ICC_2026____SHEAF__Secure_Heterogeneity_Aware_Efficient_Aggregation_for_Federated_Learning.pdf' },
      { label: 'Report', url: '/PDF/FYP/FYP_Ruhuna_2025_Final_Report.pdf' }
    ],
  },
  {
    id: 6,
    num: '006',
    name: 'Cloud-Native Salon Management Platform',
    date: 'Academic Group Project (EC7204)',
    shortDesc:
      'Microservices-based platform for salon owners and customers, built with Spring Boot, RabbitMQ, and Keycloak.',
    fullDesc:
      'A comprehensive Salon Management Platform designed with cloud-native principles at its core. It empowers Salon Owners to advertise services, manage appointments, and handle payments, while enabling Customers to discover salons, book slots, and pay securely online.',
    highlights: [
      'Built a Microservices architecture consisting of 8 dedicated Spring Boot services.',
      'Configured API Gateway & Service Discovery using Spring Cloud Gateway and Eureka.',
      'Implemented asynchronous communication using RabbitMQ for payments & notifications.',
      'Secured the system with Keycloak for robust authentication & role-based access.',
      'Containerised the entire ecosystem using Docker and docker-compose orchestration.',
    ],
    tags: ['Cloud', 'Microservices', 'Spring Boot', 'Spring Cloud', 'Docker', 'RabbitMQ', 'Keycloak'],
    images: [
      '/images/projects/saloon/1.png',
      '/images/projects/saloon/2.png',
      '/images/projects/saloon/3.png'
    ],
    githubUrl: '#',
    liveUrl: null,
  },
  {
    id: 7,
    num: '007',
    name: 'Image Caption Prediction AI',
    date: 'Personal Project',
    shortDesc:
      'AI model generating natural, context-aware image captions using a combination of VGG16 CNN and LSTM networks.',
    fullDesc:
      'An advanced AI project designed to whip up natural, context-aware captions for images. By leveraging the Flickr8k dataset and combining Convolutional Neural Networks (CNN) with Long Short-Term Memory (LSTM) networks, this model bridges the gap between computer vision and natural language processing to truly understand and describe picture contents.',
    highlights: [
      'Feature Extraction: Utilized a pre-trained VGG16 CNN model to extract high-level features from input images.',
      'Text Generation: Integrated robust LSTM networks to generate meaningful and contextual captions based on extracted features.',
      'Training Pipeline: Implemented and trained a sequence model with CNN and LSTM layers on the structural Flickr8k dataset.',
      'Bridged visual data and textual descriptions to explore accessibility and smart content management potentials.'
    ],
    tags: ['Python', 'CNN', 'LSTM', 'VGG16', 'NLP', 'Computer Vision', 'AI'],
    images: ['/images/projects/image_captioning/1.jpeg',
      '/images/projects/image_captioning/2.jpeg',
      '/images/projects/image_captioning/3.jpeg',
      '/images/projects/image_captioning/4.jpeg',
      '/images/projects/image_captioning/5.jpeg',
      
      ],
    githubUrl: 'https://colab.research.google.com/drive/1gl0oW-y0i4TPATDGIftYdDQBu9AZritf?usp=sharing',
    liveUrl: null,
  },
]
