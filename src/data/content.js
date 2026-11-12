export const projects = [
  {
    slug: 'nexusai', number: '01', name: 'NexusAI',
    category: 'Document Intelligence · RAG', status: 'INTERNSHIP PROJECT', image: '/images/nexusai-ui.png',
    shortDescription: 'Upload documents, build a structured knowledge layer, and ask natural-language questions from a single workspace.',
    summary: 'A document intelligence workspace that lets users upload files, build an indexed knowledge layer, and ask questions in natural language.',
    problem: 'Long, structured documents are difficult to query when their content is treated as isolated text chunks. Important relationships between sections and document context can be lost.',
    solution: 'The application brings document upload, indexing and knowledge preparation into one workspace. Its retrieval pipeline uses the prepared document context before a locally hosted model generates an answer.',
    contribution: 'Contributed to document parsing, hierarchical indexing, knowledge-bundle generation, retrieval and local model integration as part of the RateGain internship project.',
    role: 'Backend and AI pipeline development',
    timeline: 'RateGain AI Internship · 2026',
    team: 'Team project',
    stack: ['Python', 'FastAPI', 'React', 'Vite', 'PageIndex', 'RAG', 'Ollama', 'PyMuPDF', 'AnyDoc', 'PostgreSQL', 'SQLAlchemy'],
    github: 'https://github.com/divijalabsX/hybrid-pageindex-rag',
    demo: '', video: 'https://1drv.ms/v/c/ca5fcbd9e6e45b41/IQCZ2yqUfCLlT7mI300iBjEoAW92oulgFZqG-3EZFL5nyHM?e=aM3Ki7',
    decisions: [
      {title:'Hierarchical indexing with PageIndex', choice:'Use a document hierarchy rather than relying only on flat text chunks.', why:'Preserving section relationships gives retrieval structural context and helps navigate long documents.', tradeoff:'Requires index construction and hierarchy-aware retrieval logic.'},
      {title:'Local inference with Ollama', choice:'Run the generation model locally instead of depending on a paid hosted inference API.', why:'Reduces reliance on external API credentials and gives the team control over the inference environment.', tradeoff:'Local inference depends on available hardware and can be slower than hosted models.'},
      {title:'Separate backend responsibilities', choice:'Keep parsing, indexing, retrieval and model integration as distinct components behind the application backend.', why:'Modular components are easier to test, debug and evolve independently.', tradeoff:'Requires clear interfaces and coordination between components.'}
    ],
    architecture: [
      ['Document upload','Accept the source file and pass it into the processing pipeline.'],
      ['Parsing & normalisation','Extract text and prepare a consistent representation for indexing.'],
      ['Hierarchical indexing','Build a PageIndex structure that preserves document sections and relationships.'],
      ['Knowledge representation','Generate the structured knowledge bundle used by the retrieval workflow.'],
      ['Context retrieval','Identify relevant document content for the user question.'],
      ['Local LLM response','Send retrieved context to the local model and return a grounded answer.']
    ],
    challenges: [
      {title:'Preserving document structure',problem:'A plain text representation can flatten headings and section relationships.',approach:'Introduced a hierarchical indexing stage using PageIndex so document structure remains available to downstream retrieval.',result:'The pipeline can use document hierarchy as part of locating relevant content.'},
      {title:'Integrating local model inference',problem:'Moving away from external API calls required a locally managed inference path.',approach:'Integrated Ollama behind a dedicated model client and connected it to the FastAPI workflow.',result:'The application can run inference locally without requiring a personal hosted-model API key.'},
      {title:'Keeping automated tests independent of local models',problem:'Model smoke tests that require a locally running model are not suitable for every CI test run.',approach:'Separate deterministic tests from environment-dependent local inference checks.',result:'A clearer testing boundary between repeatable application tests and local model validation.'}
    ],
    nextSteps: ['Create a repeatable retrieval evaluation set with manually verified relevant sections.','Measure retrieval quality and end-to-end latency across representative document types.','Improve support and validation for complex tables and scanned documents.'],
    takeaways: 'Learned to treat document structure, retrieval and inference as separate engineering concerns—and to validate each stage independently.'
  },
  {
    slug: 'fraudshieldai', number: '02', name: 'FraudShieldAI',
    category: 'Machine Learning · Fraud Detection', status: 'ONGOING', image: '/images/fraudshieldai-ui.png',
    shortDescription: 'An interactive UPI transaction screening app that analyses transaction details and flags potentially suspicious activity.',
    summary: 'An interactive UPI fraud-screening application where users enter transaction details and analyse them for potentially suspicious activity.',
    problem: 'Potentially fraudulent transactions can be difficult to distinguish from normal activity using simple fixed thresholds alone. Anomaly detection offers a way to flag unusual transaction patterns for review.',
    solution: 'Users provide transaction attributes such as amount, payee, UPI ID and time, with optional indicators for a new device or location. The application sends the transaction for analysis and presents a risk-oriented result through its interface.',
    contribution: 'Developed the machine-learning workflow and application integration for transaction risk analysis, including preprocessing, anomaly detection and serving predictions through the project interface.',
    role: 'Machine learning and application integration',
    timeline: 'Academic project',
    team: 'Individual project',
    stack: ['Python', 'Scikit-learn', 'Isolation Forest', 'NumPy', 'StandardScaler', 'Flask', 'Streamlit', 'REST APIs', 'Pickle', 'JSON'],
    github: 'https://github.com/divijalabsX/upi-fraud-detector',
    demo: '', video: 'https://1drv.ms/v/c/ca5fcbd9e6e45b41/IQBy0yPhjpS1R6ZITheooGJ5AfOpCz02CZyN0HDJKiuCKko?e=h0F5gJ',
    decisions: [
      {title:'Isolation Forest for anomaly detection',choice:'Use Isolation Forest to identify transactions that differ from learned patterns.',why:'It is an unsupervised anomaly-detection approach and can flag unusual observations without requiring every suspicious pattern to be labelled.',tradeoff:'An anomaly is not automatically fraud; outputs need careful interpretation and validation.'},
      {title:'Feature scaling in preprocessing',choice:'Apply StandardScaler as part of the preprocessing pipeline.',why:'Scaling keeps feature magnitudes from dominating distance- and distribution-sensitive modelling behaviour.',tradeoff:'The same fitted scaler must be reused consistently during inference.'},
      {title:'Separate model serving from the interface',choice:'Expose prediction functionality through Flask/REST and use Streamlit for the interactive application experience.',why:'Separating the prediction endpoint from the interface keeps model inference reusable and easier to test.',tradeoff:'Introduces an additional service boundary to configure and maintain.'},
      {title:'Persist the fitted model',choice:'Serialize the trained model and preprocessing artefacts for reuse.',why:'Avoids retraining the model for every prediction request.',tradeoff:'Model and preprocessing versions must remain compatible.'}
    ],
    architecture: [
      ['Transaction input','Receive transaction attributes through the application.'],
      ['Preprocessing','Validate and transform input features using the fitted preprocessing steps.'],
      ['Isolation Forest','Score the transaction for anomalous behaviour.'],
      ['Risk logic','Combine model output with the project’s risk-handling logic.'],
      ['Flask API','Expose prediction functionality through REST endpoints.'],
      ['Streamlit interface','Present transaction analysis and risk-oriented results.']
    ],
    challenges: [
      {title:'Preparing consistent model inputs',problem:'The model expects input features in the same format used during training.',approach:'Use a consistent preprocessing path and persist the fitted scaler with the model artefacts.',result:'Inference can reuse the training-time transformation rather than fitting a new scaler for each request.'},
      {title:'Interpreting anomaly scores',problem:'An anomaly detector identifies unusual observations, not confirmed fraudulent transactions.',approach:'Treat the model output as a risk signal and combine it with the application’s risk-handling logic.',result:'The application communicates potential risk rather than presenting every anomaly as proven fraud.'},
      {title:'Connecting prediction logic to the application',problem:'The trained model needs to be accessible from an interactive application.',approach:'Expose prediction functionality through Flask REST endpoints and connect the Streamlit interface.',result:'The model workflow can be exercised through an application rather than only through a training script.'}
    ],
    nextSteps: ['Evaluate on a labelled, representative transaction dataset and report precision, recall, F1 and confusion matrix.','Tune the anomaly threshold against the cost of false positives and false negatives.','Add explainability so users can inspect which transaction features contributed to a risk flag.'],
    takeaways: 'Learned that anomaly detection is a screening signal, not a fraud verdict, and that preprocessing consistency is essential when moving a model into an application.'
  }
]

export const skillGroups = [
  { name: 'Programming languages', items: ['Python', 'SQL', 'Java', 'TypeScript'] },
  { name: 'AI engineering', items: ['Machine Learning', 'RAG', 'Hierarchical Retrieval', 'LLM Applications', 'Ollama', 'MCP', 'FastMCP', 'OCR', 'Anomaly Detection', 'Isolation Forest', 'scikit-learn'] },
  { name: 'Backend & data', items: ['FastAPI', 'Spring Boot', 'Flask', 'REST APIs', 'PostgreSQL', 'SQLAlchemy', 'JSON'] },
  { name: 'Frontend & application', items: ['React.js', 'Vite', 'Streamlit'] },
  { name: 'Engineering tools', items: ['Git', 'GitHub', 'Postman', 'PageIndex', 'PyMuPDF', 'AnyDoc', 'NumPy', 'StandardScaler', 'Pickle'] }
]
