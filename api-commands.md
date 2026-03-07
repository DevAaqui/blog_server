# API Commands — Populate Resume Data

> Run these in order. First login to get the token, then use it for all other requests.

---

## 1. LOGIN (Get Token)

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "admin123456"
  }'
```

> Copy the `token` from the response. Replace `YOUR_TOKEN` in all commands below.

---

## 2. UPDATE PROFILE

```bash
curl -X PUT http://localhost:5000/api/profile \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Aaquib Rais",
    "title": "MERN Stack Developer",
    "bio": "Experienced MERN Stack Developer specializing in React, Next.js, Node.js, and scalable web architectures. Building high-performance applications for enterprise clients worldwide.",
    "aboutMe": "I am a seasoned MERN Stack Developer with 4+ years of professional experience building enterprise-grade web applications. I have worked across solar energy platforms, manufacturing traceability systems, and IoT data pipelines. My expertise spans React, Next.js, React Native, Node.js, Express, MySQL, and MongoDB. I thrive on architecting scalable systems — from custom dashboard builders serving 2000+ B2B clients to real-time data forwarding microservices handling millions of records. Currently open to freelance projects — let us build something great together.",
    "phone": "+91-6394941128",
    "location": "India (Available Worldwide)",
    "availableForHire": true
  }'
```

---

## 3. ADD SKILLS

### Frontend Skills

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "JavaScript", "category": "frontend", "proficiency": 95, "order": 1}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "React.js", "category": "frontend", "proficiency": 95, "order": 2}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "Next.js", "category": "frontend", "proficiency": 90, "order": 3}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "React Native", "category": "mobile", "proficiency": 80, "order": 4}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "HTML5 & CSS", "category": "frontend", "proficiency": 95, "order": 5}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "NextUI", "category": "frontend", "proficiency": 85, "order": 6}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "Material UI", "category": "frontend", "proficiency": 85, "order": 7}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "Charting Libraries (ECharts)", "category": "frontend", "proficiency": 85, "order": 8}'
```

### Backend Skills

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "Node.js", "category": "backend", "proficiency": 90, "order": 1}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "Express.js", "category": "backend", "proficiency": 90, "order": 2}'
```

### Database Skills

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "MySQL", "category": "database", "proficiency": 85, "order": 1}'
```

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "MongoDB", "category": "database", "proficiency": 85, "order": 2}'
```

### DevOps Skills

```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"name": "Git", "category": "devops", "proficiency": 90, "order": 1}'
```

---

## 4. ADD EXPERIENCES

### Experience 1: Senior FrontEnd Developer — CMMS (Quadrical AI)

```bash
curl -X POST http://localhost:5000/api/experiences \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "company": "Quadrical AI",
    "position": "Senior FrontEnd Developer — CMMS (Solar Maintenance Mobile App)",
    "description": "• Developed a Work Order Management system that streamlined solar plant maintenance operations by providing real-time job tracking, task-level progress monitoring, and instant status visibility, reducing missed deadlines and improving team coordination across field operations.\n• Developed a Ticketing System that centralized solar plant issue tracking with severity-based prioritization and asset association, reducing response time to critical alerts and enabling seamless ticket-to-work-order conversion for maintenance teams.\n• Developed Inventory and Asset Management features that provided real-time visibility into spare parts availability and equipment status, reducing maintenance delays through low-stock alerts and enabling proactive warranty claim tracking before coverage expiration.",
    "startDate": "2025-12-01",
    "endDate": null,
    "isCurrent": true,
    "location": "Gurgaon, Haryana",
    "order": 1
  }'
```

### Experience 2: Senior FrontEnd Developer — Solar Asset Management (Quadrical AI)

```bash
curl -X POST http://localhost:5000/api/experiences \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "company": "Quadrical AI",
    "position": "Senior FrontEnd Developer — Solar Asset Management",
    "description": "• Analyzed performance bottlenecks in the Next.js backend, then restructured API routes and optimized data flow to create a scalable architecture, resulting in significantly faster platform response times.\n• Developed a Custom Dashboard feature using a schema-driven, widget-based architecture to give customers full control over dashboard design, resulting in widespread adoption across 2000+ B2B clients.\n• Developed a platform-wide i18n translation system using locale-driven routing, dynamic dictionary loading, and centralized translation management to meet multilingual client requirements, improving accessibility for international users.\n• Architected a centralized auto-refresh system leveraging Redux for callback storage and settings persistence, implementing a reusable header hook for interval management to enable page-specific refresh registration and user-controlled pause/resume functionality, ensuring real-time data accuracy across the platform.",
    "startDate": "2024-12-01",
    "endDate": null,
    "isCurrent": true,
    "location": "Gurgaon, Haryana",
    "order": 2
  }'
```

### Experience 3: Senior FrontEnd Developer — FDRA (Quadrical AI)

```bash
curl -X POST http://localhost:5000/api/experiences \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "company": "Quadrical AI",
    "position": "Senior FrontEnd Developer — FDRA",
    "description": "• Improved client clarity and engagement by building the FDRE application front-end with dynamic charts, responsive comparison modules, and API-driven data rendering to visualize predictive revenue differences.",
    "startDate": "2024-12-01",
    "endDate": null,
    "isCurrent": true,
    "location": "Gurgaon, Haryana",
    "order": 3
  }'
```

### Experience 4: MERN Stack Developer — Traceability System (Techpearl)

```bash
curl -X POST http://localhost:5000/api/experiences \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "company": "Techpearl",
    "position": "MERN Stack Developer — Traceability System",
    "description": "• Developed a configuration feature that allows users to define products, processes, and parameters to reduce rigid system dependencies by implementing dynamic, schema-driven forms, resulting in greater flexibility and reduced engineering intervention.\n• Built a full Traceability System to prevent process deviations by integrating machine-line raw material verification, sequential workflow enforcement, parallel processing logic, employee authentication, and 40 automated error-code validations, resulting in highly accurate and reliable production tracking.\n• Built comprehensive traceability analytics by integrating raw material flow data, sequential process checkpoints, and more than 40 machine error codes into dynamic, drill-down dashboards, significantly improving visibility into the entire manufacturing lifecycle.\n• Designed both the high-level and low-level architecture for the Traceability System by defining system modules, data flow, validation logic, and process rules end-to-end, ensuring a scalable solution with accurate, reliable production tracking.",
    "startDate": "2024-05-01",
    "endDate": "2024-12-01",
    "isCurrent": false,
    "location": "Bangalore, Karnataka",
    "order": 4
  }'
```

### Experience 5: MERN Stack Developer — Maintenance Module (Techpearl)

```bash
curl -X POST http://localhost:5000/api/experiences \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "company": "Techpearl",
    "position": "MERN Stack Developer — Maintenance Module",
    "description": "• Implemented a configurable setup feature in the Maintenance Module to let users define assets, schedules, and processes through dynamic UI logic, greatly enhancing flexibility and reducing engineering dependency.\n• Engineered a dynamic analytics interface using ECharts that supports multi-type visualizations, real-time data binding, and configurable date presets/ranges, greatly enhancing the system analytical depth and user interpretability.\n• Designed the high-level and low-level architecture for the Maintenance Module by defining workflows, role-based approvals, scheduling logic, and data structures, resulting in a scalable system that improved maintenance accuracy and operational efficiency.",
    "startDate": "2023-07-01",
    "endDate": "2024-05-01",
    "isCurrent": false,
    "location": "Bangalore, Karnataka",
    "order": 5
  }'
```

### Experience 6: Backend Developer — Store And Forward (Myweblink Technologies)

```bash
curl -X POST http://localhost:5000/api/experiences \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "company": "Myweblink Technologies",
    "position": "Backend Developer — Store And Forward",
    "description": "• Developed a data-processing feature in the Store Forward system to ensure reliable packet handling by implementing an algorithm that validates, sequences, and stores incoming data into the database, significantly improving accuracy and preventing data loss.\n• Developed a high-reliability data-forwarding microservice to handle millions of records at configured intervals by implementing queued batch processing, retry logic, and integrity checks, ensuring zero data leakage and consistent delivery.",
    "startDate": "2021-12-01",
    "endDate": "2023-05-01",
    "isCurrent": false,
    "location": "Bangalore, Karnataka",
    "order": 6
  }'
```

---

## 5. ADD EDUCATION

```bash
curl -X POST http://localhost:5000/api/educations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "institution": "Raj Kumar Goel Institute of Technology",
    "degree": "Bachelor of Technology",
    "fieldOfStudy": "Engineering",
    "startDate": "2011-07-01",
    "endDate": "2015-06-01",
    "description": "Completed B.Tech degree with focus on engineering fundamentals and software development.",
    "order": 1
  }'
```

---

## 6. ADD PROJECTS

### Project 1: Health Monitoring System

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Health Monitoring System",
    "description": "A real-time health monitoring platform with guest statistics, automated alerts, and data seeding — built with the MERN stack.",
    "longDescription": "A comprehensive real-time health monitoring platform featuring:\n\n• Centralized auto-refresh system using Redux for page-specific refresh callbacks with pause/resume controls.\n• Real-time guest statistics computing total guests, healthy guests, needs-attention cases, and average health scores with threshold-based categorization.\n• Automated data seeding system that progressively creates users, assigns tracking devices, monitors metrics, and simulates activity sessions.\n• Centralized alerts and notifications system with severity levels, 3 status states, team assignment tracking, multi-recipient support, and read/unread tracking.\n• Color-coded visual health indicators for instant decision-making and prioritization of at-risk guests.",
    "techStack": ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Chart.js"],
    "featured": true,
    "order": 1
  }'
```

### Project 2: Solar Asset Management Platform

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Solar Asset Management Platform",
    "description": "Enterprise solar energy management platform with custom dashboards, i18n support, and real-time monitoring serving 2000+ B2B clients.",
    "longDescription": "An enterprise-grade solar asset management platform built at Quadrical AI:\n\n• Custom Dashboard builder using schema-driven, widget-based architecture adopted by 2000+ B2B clients.\n• Platform-wide i18n translation system with locale-driven routing and dynamic dictionary loading.\n• Centralized auto-refresh system for real-time data accuracy across all platform pages.\n• Optimized Next.js backend with restructured API routes for significantly faster response times.",
    "techStack": ["Next.js", "React.js", "Redux", "Node.js", "REST APIs"],
    "featured": true,
    "order": 2
  }'
```

### Project 3: Manufacturing Traceability System

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Manufacturing Traceability System",
    "description": "End-to-end traceability system for manufacturing with raw material verification, workflow enforcement, and 40+ automated validations.",
    "longDescription": "A full-stack traceability system built at Techpearl for manufacturing operations:\n\n• Dynamic, schema-driven configuration for products, processes, and parameters — eliminating rigid system dependencies.\n• Machine-line raw material verification with sequential workflow enforcement and parallel processing logic.\n• 40+ automated error-code validations with employee authentication for highly accurate production tracking.\n• Comprehensive analytics with drill-down dashboards covering raw material flow, process checkpoints, and machine error codes.\n• Designed both high-level and low-level system architecture end-to-end.",
    "techStack": ["React.js", "Node.js", "Express.js", "MongoDB", "ECharts"],
    "featured": true,
    "order": 3
  }'
```

### Project 4: Store And Forward Microservice

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Store And Forward Microservice",
    "description": "High-reliability data forwarding microservice handling millions of records with queued batch processing and zero data leakage.",
    "longDescription": "A backend microservice built at Myweblink Technologies for IoT data pipelines:\n\n• Data-processing algorithm that validates, sequences, and stores incoming packets with zero data loss.\n• High-reliability forwarding engine handling millions of records at configured intervals.\n• Queued batch processing with retry logic and integrity checks ensuring consistent delivery.\n• Zero data leakage architecture designed for mission-critical IoT deployments.",
    "techStack": ["Node.js", "Express.js", "MySQL"],
    "featured": false,
    "order": 4
  }'
```

---

## SQL QUERIES (Alternative -- run directly in MySQL)

```sql
USE blog_server;

-- Profile Update
UPDATE profiles SET
  title = 'MERN Stack Developer',
  bio = 'Experienced MERN Stack Developer specializing in React, Next.js, Node.js, and scalable web architectures. Building high-performance applications for enterprise clients worldwide.',
  aboutMe = 'I am a seasoned MERN Stack Developer with 4+ years of professional experience building enterprise-grade web applications. I have worked across solar energy platforms, manufacturing traceability systems, and IoT data pipelines. My expertise spans React, Next.js, React Native, Node.js, Express, MySQL, and MongoDB. I thrive on architecting scalable systems - from custom dashboard builders serving 2000+ B2B clients to real-time data forwarding microservices handling millions of records. Currently open to freelance projects - let us build something great together.',
  phone = '+91-6394941128',
  location = 'India (Available Worldwide)',
  availableForHire = 1
WHERE userId = 1;

UPDATE users SET name = 'Aaquib Rais' WHERE id = 1;
```

```sql
-- Skills
INSERT INTO skills (userId, name, category, proficiency, `order`, createdAt, updatedAt) VALUES
(1, 'JavaScript',                    'frontend', 95, 1, NOW(), NOW()),
(1, 'React.js',                      'frontend', 95, 2, NOW(), NOW()),
(1, 'Next.js',                       'frontend', 90, 3, NOW(), NOW()),
(1, 'React Native',                  'mobile',   80, 4, NOW(), NOW()),
(1, 'HTML5 & CSS',                   'frontend', 95, 5, NOW(), NOW()),
(1, 'NextUI',                        'frontend', 85, 6, NOW(), NOW()),
(1, 'Material UI',                   'frontend', 85, 7, NOW(), NOW()),
(1, 'Charting Libraries (ECharts)',  'frontend', 85, 8, NOW(), NOW()),
(1, 'Node.js',                       'backend',  90, 1, NOW(), NOW()),
(1, 'Express.js',                    'backend',  90, 2, NOW(), NOW()),
(1, 'MySQL',                         'database', 85, 1, NOW(), NOW()),
(1, 'MongoDB',                       'database', 85, 2, NOW(), NOW()),
(1, 'Git',                           'devops',   90, 1, NOW(), NOW());
```

```sql
-- Experience 1: CMMS at Quadrical AI
INSERT INTO experiences (userId, company, position, description, startDate, endDate, isCurrent, location, `order`, createdAt, updatedAt) VALUES
(1, 'Quadrical AI', 'Senior FrontEnd Developer - CMMS (Solar Maintenance Mobile App)',
 CONCAT(
   'Developed a Work Order Management system that streamlined solar plant maintenance operations by providing real-time job tracking, task-level progress monitoring, and instant status visibility, reducing missed deadlines and improving team coordination across field operations.', CHAR(10), CHAR(10),
   'Developed a Ticketing System that centralized solar plant issue tracking with severity-based prioritization and asset association, reducing response time to critical alerts and enabling seamless ticket-to-work-order conversion for maintenance teams.', CHAR(10), CHAR(10),
   'Developed Inventory and Asset Management features that provided real-time visibility into spare parts availability and equipment status, reducing maintenance delays through low-stock alerts and enabling proactive warranty claim tracking before coverage expiration.'
 ),
 '2025-12-01', NULL, 1, 'Gurgaon, Haryana', 1, NOW(), NOW());
```

```sql
-- Experience 2: Solar Asset Management at Quadrical AI
INSERT INTO experiences (userId, company, position, description, startDate, endDate, isCurrent, location, `order`, createdAt, updatedAt) VALUES
(1, 'Quadrical AI', 'Senior FrontEnd Developer - Solar Asset Management',
 CONCAT(
   'Analyzed performance bottlenecks in the Next.js backend, then restructured API routes and optimized data flow to create a scalable architecture, resulting in significantly faster platform response times.', CHAR(10), CHAR(10),
   'Developed a Custom Dashboard feature using a schema-driven, widget-based architecture to give customers full control over dashboard design, resulting in widespread adoption across 2000+ B2B clients.', CHAR(10), CHAR(10),
   'Developed a platform-wide i18n translation system using locale-driven routing, dynamic dictionary loading, and centralized translation management to meet multilingual client requirements, improving accessibility for international users.', CHAR(10), CHAR(10),
   'Architected a centralized auto-refresh system leveraging Redux for callback storage and settings persistence, implementing a reusable header hook for interval management to enable page-specific refresh registration and user-controlled pause/resume functionality, ensuring real-time data accuracy across the platform.'
 ),
 '2024-12-01', NULL, 1, 'Gurgaon, Haryana', 2, NOW(), NOW());
```

```sql
-- Experience 3: FDRA at Quadrical AI
INSERT INTO experiences (userId, company, position, description, startDate, endDate, isCurrent, location, `order`, createdAt, updatedAt) VALUES
(1, 'Quadrical AI', 'Senior FrontEnd Developer - FDRA',
 'Improved client clarity and engagement by building the FDRE application front-end with dynamic charts, responsive comparison modules, and API-driven data rendering to visualize predictive revenue differences.',
 '2024-12-01', NULL, 1, 'Gurgaon, Haryana', 3, NOW(), NOW());
```

```sql
-- Experience 4: Traceability System at Techpearl
INSERT INTO experiences (userId, company, position, description, startDate, endDate, isCurrent, location, `order`, createdAt, updatedAt) VALUES
(1, 'Techpearl', 'MERN Stack Developer - Traceability System',
 CONCAT(
   'Developed a configuration feature that allows users to define products, processes, and parameters to reduce rigid system dependencies by implementing dynamic, schema-driven forms, resulting in greater flexibility and reduced engineering intervention.', CHAR(10), CHAR(10),
   'Built a full Traceability System to prevent process deviations by integrating machine-line raw material verification, sequential workflow enforcement, parallel processing logic, employee authentication, and 40 automated error-code validations, resulting in highly accurate and reliable production tracking.', CHAR(10), CHAR(10),
   'Built comprehensive traceability analytics by integrating raw material flow data, sequential process checkpoints, and more than 40 machine error codes into dynamic, drill-down dashboards, significantly improving visibility into the entire manufacturing lifecycle.', CHAR(10), CHAR(10),
   'Designed both the high-level and low-level architecture for the Traceability System by defining system modules, data flow, validation logic, and process rules end-to-end, ensuring a scalable solution with accurate, reliable production tracking.'
 ),
 '2024-05-01', '2024-12-01', 0, 'Bangalore, Karnataka', 4, NOW(), NOW());
```

```sql
-- Experience 5: Maintenance Module at Techpearl
INSERT INTO experiences (userId, company, position, description, startDate, endDate, isCurrent, location, `order`, createdAt, updatedAt) VALUES
(1, 'Techpearl', 'MERN Stack Developer - Maintenance Module',
 CONCAT(
   'Implemented a configurable setup feature in the Maintenance Module to let users define assets, schedules, and processes through dynamic UI logic, greatly enhancing flexibility and reducing engineering dependency.', CHAR(10), CHAR(10),
   'Engineered a dynamic analytics interface using ECharts that supports multi-type visualizations, real-time data binding, and configurable date presets/ranges, greatly enhancing the system analytical depth and user interpretability.', CHAR(10), CHAR(10),
   'Designed the high-level and low-level architecture for the Maintenance Module by defining workflows, role-based approvals, scheduling logic, and data structures, resulting in a scalable system that improved maintenance accuracy and operational efficiency.'
 ),
 '2023-07-01', '2024-05-01', 0, 'Bangalore, Karnataka', 5, NOW(), NOW());
```

```sql
-- Experience 6: Store And Forward at Myweblink Technologies
INSERT INTO experiences (userId, company, position, description, startDate, endDate, isCurrent, location, `order`, createdAt, updatedAt) VALUES
(1, 'Myweblink Technologies', 'Backend Developer - Store And Forward',
 CONCAT(
   'Developed a data-processing feature in the Store Forward system to ensure reliable packet handling by implementing an algorithm that validates, sequences, and stores incoming data into the database, significantly improving accuracy and preventing data loss.', CHAR(10), CHAR(10),
   'Developed a high-reliability data-forwarding microservice to handle millions of records at configured intervals by implementing queued batch processing, retry logic, and integrity checks, ensuring zero data leakage and consistent delivery.'
 ),
 '2021-12-01', '2023-05-01', 0, 'Bangalore, Karnataka', 6, NOW(), NOW());
```

```sql
-- Education
INSERT INTO educations (userId, institution, degree, fieldOfStudy, startDate, endDate, description, `order`, createdAt, updatedAt) VALUES
(1, 'Raj Kumar Goel Institute of Technology', 'Bachelor of Technology', 'Engineering', '2011-07-01', '2015-06-01', 'Completed B.Tech degree with focus on engineering fundamentals and software development.', 1, NOW(), NOW());
```

```sql
-- Project 1: Health Monitoring System
INSERT INTO projects (userId, title, description, longDescription, techStack, featured, `order`, createdAt, updatedAt) VALUES
(1, 'Health Monitoring System',
 'A real-time health monitoring platform with guest statistics, automated alerts, and data seeding - built with the MERN stack.',
 CONCAT(
   'A comprehensive real-time health monitoring platform featuring:', CHAR(10), CHAR(10),
   'Centralized auto-refresh system using Redux for page-specific refresh callbacks with pause/resume controls.', CHAR(10), CHAR(10),
   'Real-time guest statistics computing total guests, healthy guests, needs-attention cases, and average health scores with threshold-based categorization.', CHAR(10), CHAR(10),
   'Automated data seeding system that progressively creates users, assigns tracking devices, monitors metrics, and simulates activity sessions.', CHAR(10), CHAR(10),
   'Centralized alerts and notifications system with severity levels, 3 status states, team assignment tracking, multi-recipient support, and read/unread tracking.', CHAR(10), CHAR(10),
   'Color-coded visual health indicators for instant decision-making and prioritization of at-risk guests.'
 ),
 '["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Chart.js"]', 1, 1, NOW(), NOW());
```

```sql
-- Project 2: Solar Asset Management Platform
INSERT INTO projects (userId, title, description, longDescription, techStack, featured, `order`, createdAt, updatedAt) VALUES
(1, 'Solar Asset Management Platform',
 'Enterprise solar energy management platform with custom dashboards, i18n support, and real-time monitoring serving 2000+ B2B clients.',
 CONCAT(
   'An enterprise-grade solar asset management platform built at Quadrical AI:', CHAR(10), CHAR(10),
   'Custom Dashboard builder using schema-driven, widget-based architecture adopted by 2000+ B2B clients.', CHAR(10), CHAR(10),
   'Platform-wide i18n translation system with locale-driven routing and dynamic dictionary loading.', CHAR(10), CHAR(10),
   'Centralized auto-refresh system for real-time data accuracy across all platform pages.', CHAR(10), CHAR(10),
   'Optimized Next.js backend with restructured API routes for significantly faster response times.'
 ),
 '["Next.js", "React.js", "Redux", "Node.js", "REST APIs"]', 1, 2, NOW(), NOW());
```

```sql
-- Project 3: Manufacturing Traceability System
INSERT INTO projects (userId, title, description, longDescription, techStack, featured, `order`, createdAt, updatedAt) VALUES
(1, 'Manufacturing Traceability System',
 'End-to-end traceability system for manufacturing with raw material verification, workflow enforcement, and 40+ automated validations.',
 CONCAT(
   'A full-stack traceability system built at Techpearl for manufacturing operations:', CHAR(10), CHAR(10),
   'Dynamic, schema-driven configuration for products, processes, and parameters - eliminating rigid system dependencies.', CHAR(10), CHAR(10),
   'Machine-line raw material verification with sequential workflow enforcement and parallel processing logic.', CHAR(10), CHAR(10),
   '40+ automated error-code validations with employee authentication for highly accurate production tracking.', CHAR(10), CHAR(10),
   'Comprehensive analytics with drill-down dashboards covering raw material flow, process checkpoints, and machine error codes.', CHAR(10), CHAR(10),
   'Designed both high-level and low-level system architecture end-to-end.'
 ),
 '["React.js", "Node.js", "Express.js", "MongoDB", "ECharts"]', 1, 3, NOW(), NOW());
```

```sql
-- Project 4: Store And Forward Microservice
INSERT INTO projects (userId, title, description, longDescription, techStack, featured, `order`, createdAt, updatedAt) VALUES
(1, 'Store And Forward Microservice',
 'High-reliability data forwarding microservice handling millions of records with queued batch processing and zero data leakage.',
 CONCAT(
   'A backend microservice built at Myweblink Technologies for IoT data pipelines:', CHAR(10), CHAR(10),
   'Data-processing algorithm that validates, sequences, and stores incoming packets with zero data loss.', CHAR(10), CHAR(10),
   'High-reliability forwarding engine handling millions of records at configured intervals.', CHAR(10), CHAR(10),
   'Queued batch processing with retry logic and integrity checks ensuring consistent delivery.', CHAR(10), CHAR(10),
   'Zero data leakage architecture designed for mission-critical IoT deployments.'
 ),
 '["Node.js", "Express.js", "MySQL"]', 0, 4, NOW(), NOW());
```
