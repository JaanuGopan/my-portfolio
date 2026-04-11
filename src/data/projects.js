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
      'Full-stack attendance system with QR check-in, GPS validation, JWT auth, and CI/CD — deployed in a real university environment.',
    fullDesc:
      'Designed and developed a full-stack attendance system targeting real university use. Students check in by scanning a generated QR code, which is validated against their GPS location and device fingerprint to prevent proxy attendance.',
    highlights: [
      'Built mobile app in Flutter and backend services with Spring Boot and PostgreSQL.',
      'Implemented QR-based attendance with GPS validation and secured it using JWT and device verification.',
      'Deployed and tested the system live in a university environment.',
      'Implemented a CI/CD pipeline using GitHub Actions for automated deployment to a Faculty Linux server.',
    ],
    tags: ['Flutter', 'Spring Boot', 'PostgreSQL', 'JWT', 'GitHub Actions', 'CI/CD'],
    images: [
      '/src/assets/images/projects/skyticker/1.jpeg',
      '/src/assets/images/projects/skyticker/2.jpeg', 
      '/src/assets/images/projects/skyticker/3.jpeg',
      '/src/assets/images/projects/skyticker/4.jpeg',
      '/src/assets/images/projects/skyticker/5.jpeg',
      '/src/assets/images/projects/skyticker/6.jpeg',
      '/src/assets/images/projects/skyticker/7.jpeg',
      '/src/assets/images/projects/Mobile App Images/1.jpg',
      '/src/assets/images/projects/Mobile App Images/2.jpg',
      '/src/assets/images/projects/Mobile App Images/3.jpg',
      '/src/assets/images/projects/Mobile App Images/4.jpg',
      '/src/assets/images/projects/Mobile App Images/5.jpg',
      '/src/assets/images/projects/Mobile App Images/6.jpg',
      '/src/assets/images/projects/Mobile App Images/7.jpg',
      '/src/assets/images/projects/Mobile App Images/8.jpg',
      '/src/assets/images/projects/Mobile App Images/9.jpg',
      '/src/assets/images/projects/Mobile App Images/10.jpg',
      '/src/assets/images/projects/Mobile App Images/11.jpg',
      '/src/assets/images/projects/Mobile App Images/12.jpg',
      '/src/assets/images/projects/Mobile App Images/13.jpg',
      '/src/assets/images/projects/Mobile App Images/14.jpg',
      '/src/assets/images/projects/Mobile App Images/15.jpg',
      '/src/assets/images/projects/Mobile App Images/16.jpg',
      '/src/assets/images/projects/Mobile App Images/17.jpg',
      '/src/assets/images/projects/Mobile App Images/18.jpg',
      '/src/assets/images/projects/Mobile App Images/19.png',
      '/src/assets/images/projects/Mobile App Images/20.jpg',
      '/src/assets/images/projects/Mobile App Images/21.jpg'

      
    ],        
    githubUrl: '#',
    liveUrl: null,
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
    images: ['/src/assets/images/projects/scientific_paper_chatbot/1.jpeg'],
    githubUrl: '#',
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
    images: [],
    githubUrl: '#',
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
      '/src/assets/images/projects/secure_chat/1.jpeg',
      '/src/assets/images/projects/secure_chat/2.jpeg',
      '/src/assets/images/projects/secure_chat/3.jpeg',
      '/src/assets/images/projects/secure_chat/4.jpeg',
      '/src/assets/images/projects/secure_chat/5.jpeg',
      '/src/assets/images/projects/secure_chat/6.jpeg',
    ],
    githubUrl: '#',
    liveUrl: null,
  },
  {
    id: 5,
    num: '005',
    name: 'Federated Learning Framework',
    date: 'Feb 2025 – Nov 2025',
    shortDesc:
      'Final Year Project — Heterogeneity-aware federated learning framework reducing communication cost by 75% with minimal accuracy loss.',
    fullDesc:
      'A novel federated learning framework designed to handle real-world heterogeneity in distributed machine learning. The system proposes a new aggregation method that uses statistical divergence and peer validation to improve model accuracy while drastically cutting communication overhead.',
    highlights: [
      'Proposed a heterogeneity-aware aggregation method using statistical divergence and peer validation.',
      'Implemented post-quantum security to future-proof the communication layer.',
      'Applied model quantization, reducing communication cost by 75% with minimal accuracy loss.',
      'Evaluated across multiple non-IID data distributions with consistent performance gains.',
    ],
    tags: ['Python', 'PyTorch', 'Federated Learning', 'Post-Quantum', 'Cryptography', 'ML', 'Research'],
    images: ['/src/assets/images/projects/fyp/1.png'],
    githubUrl: '#',
    liveUrl: null,
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
    images: ['/src/assets/images/projects/saloon/1.jpeg'],
    githubUrl: '#',
    liveUrl: null,
  },
]
