export const projects = [
  {
    slug: 'nexusai', number: '01', monogram: 'NX', name: 'NexusAI', category: 'Document Intelligence · RAG', shortCategory: 'DOCUMENT INTELLIGENCE', status: 'INTERNSHIP PROJECT',
    shortDescription: 'A hybrid document intelligence system that indexes documents and answers questions using retrieved context.',
    description: 'A hybrid document intelligence system designed to turn lengthy documents into searchable, structured knowledge and grounded answers.',
    contribution: 'Worked on document parsing, hierarchical indexing, knowledge bundle generation, retrieval and model integration as part of the internship project.',
    stack: ['Python', 'FastAPI', 'Streamlit', 'PyMuPDF', 'Ollama', 'PostgreSQL', 'pgvector'],
    outcome: 'The workflow combines a hierarchical document index and a knowledge representation layer with retrieval before answer generation. The goal is to help users ask questions about uploaded documents and receive responses grounded in relevant source content.',
    github: '', demo: ''
  },
  {
    slug: 'fraudshieldai', number: '02', monogram: 'FS', name: 'FraudShieldAI', category: 'Machine Learning · Fraud Detection', shortCategory: 'FRAUD DETECTION', status: 'MACHINE LEARNING PROJECT',
    shortDescription: 'A machine-learning project exploring the identification of potentially fraudulent UPI transactions.',
    description: 'FraudShieldAI explores how machine-learning classification can help identify potentially fraudulent UPI transactions.',
    contribution: 'Built as an applied machine-learning project, focusing on the fraud-detection problem and a classification workflow.',
    stack: ['Python', 'Machine Learning', 'scikit-learn'],
    outcome: 'The project demonstrates an applied machine-learning use case in financial technology. Evaluation metrics and implementation details will be included once verified against the project repository.',
    github: '', demo: ''
  },
  {
    slug: 'bharatextractai', number: '03', monogram: 'BE', name: 'BharatExtractAI', category: 'AI · Document Processing', shortCategory: 'DOCUMENT AI', status: 'IN PROGRESS',
    shortDescription: 'An intelligent document-processing project focused on extracting and validating structured information from PDF documents.',
    description: 'BharatExtractAI focuses on extracting structured information from sample PDF documents and validating the extracted data.',
    contribution: 'Developing the data-validation and document-processing workflow, including tests against representative PDF templates.',
    stack: ['Python', 'PDF Processing', 'Data Validation', 'Pytest'],
    outcome: 'The project explores reliable document extraction, validation and handling variations in document layouts. Current work includes validating the dataset and testing against representative PDF samples.',
    github: '', demo: ''
  },
  {
    slug: 'automation', number: '04', monogram: 'AU', name: 'Automation', category: 'Workflow Automation', shortCategory: 'AUTOMATION', status: 'DETAILS TO BE ADDED',
    shortDescription: 'Workflow automation work. The specific use case, tools and implementation will be documented here.',
    description: 'A dedicated space for Divija’s automation project. The project scope and implementation details will be added after confirming the exact workflow.',
    contribution: 'Project-specific contribution details are pending confirmation.',
    stack: ['Automation', 'APIs', 'Workflow Design'],
    outcome: 'The use case, workflow, integrations and results will be documented once the project details are confirmed.',
    github: '', demo: ''
  }
]

export const skillGroups = [
  { name: 'Programming', items: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS', 'Kotlin'] },
  { name: 'AI & intelligent systems', items: ['Machine Learning', 'Deep Learning', 'Generative AI', 'LLMs', 'RAG', 'AI Agents', 'NLP', 'Computer Vision', 'Prompt Engineering', 'Embeddings'] },
  { name: 'Frameworks & libraries', items: ['FastAPI', 'Flask', 'Streamlit', 'scikit-learn', 'OpenCV', 'LangChain'] },
  { name: 'Tools & platforms', items: ['Git', 'GitHub', 'PostgreSQL', 'pgvector', 'Ollama', 'Hugging Face', 'Google Colab', 'APIs'] }
]
