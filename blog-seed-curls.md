# Blog Post Seed Curls

> Login first, then replace YOUR_TOKEN in all commands below.

---

## CASE STUDY (2 posts)

### 1. Multi-Tenant SaaS Platform

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "How We Built a Multi-Tenant SaaS Platform Serving 5,000+ Users",
    "content": "<h2>The Challenge</h2><p>When our client approached us, they had a monolithic application struggling to serve 500 users. They needed a platform that could scale to 5,000+ tenants without sacrificing performance or data isolation.</p><h2>Architecture Decisions</h2><p>We evaluated three multi-tenancy strategies: shared database with tenant column, separate schemas per tenant, and fully isolated databases. After analyzing the trade-offs between cost, isolation, and complexity, we chose a hybrid approach — shared database with row-level security policies and tenant-specific connection pooling.</p><h2>Implementation</h2><p>The core of our solution was a tenant-aware middleware layer that intercepts every request, extracts the tenant identifier from the JWT token, and injects it into the database query context. This ensured complete data isolation without the overhead of managing thousands of separate databases.</p><p>We implemented a custom connection pool manager that allocates dedicated pools for high-traffic tenants while sharing pools among smaller ones. This reduced our database connection count by 60% compared to a naive per-tenant pool approach.</p><h2>Key Technical Highlights</h2><ul><li>Row-level security policies in MySQL ensuring zero cross-tenant data leakage</li><li>Custom connection pool manager reducing database connections by 60%</li><li>Tenant-aware caching layer with Redis namespacing</li><li>Automated tenant provisioning pipeline — new tenants onboarded in under 30 seconds</li><li>Rolling deployment strategy with zero-downtime migrations across all tenants</li></ul><h2>Results</h2><p>The platform now serves 5,000+ active tenants with an average API response time of 45ms. Infrastructure costs dropped 40% compared to the previous architecture. The automated provisioning pipeline reduced tenant onboarding time from 2 days to 30 seconds.</p><h2>Lessons Learned</h2><p>Multi-tenancy is not a one-size-fits-all problem. The key is understanding your tenant distribution — a few large tenants with many small ones calls for a very different strategy than uniformly sized tenants. Start with the simplest isolation model that meets your compliance requirements, and build escape hatches for tenants that outgrow the shared model.</p>",
    "excerpt": "A deep dive into architecting a multi-tenant SaaS product — from database isolation strategies to tenant-aware middleware and automated provisioning serving 5,000+ users.",
    "coverImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
    "category": "case-study",
    "tags": ["Case Study", "SaaS", "Architecture"],
    "status": "published"
  }'
```

### 2. E-Commerce Checkout Rebuild

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Rebuilding an E-Commerce Checkout: From 12s to 1.8s Load Time",
    "content": "<h2>The Problem</h2><p>A client'\''s checkout page was losing 40% of users to abandonment. Analytics showed the page took 12 seconds to fully load on average, with the payment form appearing after 8 seconds. Users were leaving before they could even enter their card details.</p><h2>Diagnosis</h2><p>We ran a comprehensive performance audit and identified several critical bottlenecks: 14 synchronous API calls on page load, unoptimized product images averaging 2.5MB each, a 1.8MB JavaScript bundle with no code splitting, and third-party scripts blocking the main thread for 3+ seconds.</p><h2>The Rebuild Strategy</h2><p>Rather than incremental fixes, we proposed a full checkout rebuild with performance as the primary architectural constraint. Every technical decision was evaluated against its impact on Time to Interactive (TTI).</p><h3>API Consolidation</h3><p>We merged 14 separate API calls into 2 optimized endpoints — one for cart data with inventory validation, and one for shipping and tax calculation. The backend used parallel database queries and Redis caching to respond in under 200ms.</p><h3>Frontend Optimization</h3><p>We implemented aggressive code splitting, loading only the payment form JavaScript when the user reaches that step. Images were converted to WebP with responsive srcsets. Critical CSS was inlined, and non-essential styles were deferred.</p><h3>Third-Party Script Management</h3><p>Analytics and tracking scripts were moved to a web worker using Partytown. The payment processor SDK was lazy-loaded when the user clicks \"Proceed to Payment\" rather than on initial page load.</p><h2>Results</h2><ul><li>Page load time: 12s → 1.8s (85% reduction)</li><li>Time to Interactive: 8s → 1.2s</li><li>Cart abandonment rate: 40% → 18%</li><li>Revenue recovered: $180K/month</li><li>Lighthouse Performance score: 34 → 96</li></ul><h2>Key Takeaway</h2><p>Performance is not a feature — it is the feature. Every 100ms of load time directly impacts conversion rates. When rebuilding for performance, start from the user'\''s critical path and ruthlessly eliminate everything that does not serve it.</p>",
    "excerpt": "A client'\''s checkout page was losing 40% of users to abandonment. Here'\''s how we rebuilt it from scratch and recovered $180K in monthly revenue.",
    "coverImage": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    "category": "case-study",
    "tags": ["Case Study", "E-Commerce", "Performance"],
    "status": "published"
  }'
```

---

## SCALING & PERFORMANCE (2 posts)

### 3. Scaling Node.js APIs

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Scaling Node.js APIs to Handle 10M Requests per Day",
    "content": "<h2>Where We Started</h2><p>Our API was handling 100K requests per day on a single server. Response times averaged 800ms, and the server would regularly hit 95% CPU during peak hours. We needed to scale to 10M requests per day — a 100x increase — without a proportional increase in infrastructure costs.</p><h2>Step 1: Profiling and Bottleneck Analysis</h2><p>Before throwing hardware at the problem, we profiled every hot path in the application. Using Node.js built-in profiler and clinic.js, we discovered that 60% of response time was spent in database queries, 25% in JSON serialization of large payloads, and 15% in business logic.</p><h2>Step 2: Database Query Optimization</h2><p>We rewrote the top 20 slowest queries, adding composite indexes, eliminating N+1 patterns with eager loading, and implementing cursor-based pagination instead of OFFSET. Query times dropped from an average of 480ms to 35ms.</p><h2>Step 3: Caching Strategy</h2><p>We implemented a three-tier caching architecture: in-memory LRU cache for hot data with 5-second TTL, Redis for session and frequently accessed data with 60-second TTL, and CDN edge caching for public API responses. This eliminated 80% of database reads.</p><h2>Step 4: Horizontal Scaling</h2><p>We containerized the application with Docker and deployed behind an Nginx load balancer with least-connections routing. PM2 cluster mode utilized all available CPU cores per container. Auto-scaling rules added containers when CPU exceeded 70%.</p><h2>Step 5: Response Optimization</h2><p>We implemented response compression with Brotli, field selection (GraphQL-style sparse fieldsets for REST), and pagination limits. Average response payload dropped from 45KB to 8KB.</p><h2>Results</h2><ul><li>Throughput: 100K → 10M+ requests/day</li><li>Average response time: 800ms → 45ms</li><li>P99 latency: 3.2s → 180ms</li><li>Infrastructure cost: increased only 3x for 100x traffic</li><li>Server CPU during peak: 95% → 40%</li></ul><h2>The Principle</h2><p>Scaling is not about adding more servers — it is about doing less work per request. Optimize the hot path first, cache aggressively, and only then scale horizontally.</p>",
    "excerpt": "The patterns, caching strategies, and infrastructure decisions that took our API from struggling at 100K requests to comfortably handling 10M+ per day.",
    "coverImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    "category": "scaling-and-performance",
    "tags": ["Scaling", "Node.js", "Performance"],
    "status": "published"
  }'
```

### 4. Reducing Next.js Bundle Size

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "How I Reduced a Next.js App'\''s Bundle Size by 65%",
    "content": "<h2>The Discovery</h2><p>Running next build with the bundle analyzer revealed a shocking 1.2MB initial JavaScript bundle. For a dashboard application, this meant users were downloading megabytes of code before seeing a single chart. Mobile users on 3G connections waited 15+ seconds for the page to become interactive.</p><h2>Audit Results</h2><p>The bundle analyzer treemap showed several major offenders: moment.js (300KB) used in only 3 components, the entire lodash library (70KB) imported for 5 utility functions, a charting library loaded on every page despite charts only appearing on 2 routes, and duplicate dependencies from conflicting package versions.</p><h2>Fix 1: Replace Heavy Libraries</h2><p>We replaced moment.js with day.js (2KB) — a drop-in replacement with an identical API. Full lodash imports were replaced with individual function imports (lodash/debounce instead of lodash). This alone saved 350KB.</p><h2>Fix 2: Dynamic Imports for Route-Specific Code</h2><p>Charts, rich text editors, and PDF generators were wrapped in next/dynamic with ssr: false. These heavy components only load when the user navigates to pages that need them. Combined with route-based code splitting, this removed 400KB from the initial bundle.</p><h2>Fix 3: Dependency Deduplication</h2><p>Running npm dedupe and resolving conflicting version ranges in package.json eliminated 80KB of duplicate code. We also switched from a full icon library (150KB) to importing only the 23 icons we actually used.</p><h2>Fix 4: Tree Shaking and Barrel File Cleanup</h2><p>Our shared component library used barrel files (index.ts re-exports) that defeated tree shaking. Refactoring to direct imports allowed webpack to eliminate unused components, saving another 60KB.</p><h2>Fix 5: Image and Font Optimization</h2><p>Custom fonts were subset to include only Latin characters, reducing from 180KB to 35KB. next/image with automatic WebP conversion and lazy loading eliminated layout shifts and reduced image transfer by 70%.</p><h2>Final Results</h2><ul><li>Initial JS bundle: 1.2MB → 420KB (65% reduction)</li><li>First Contentful Paint: 4.2s → 1.1s</li><li>Time to Interactive: 8.5s → 2.3s</li><li>Lighthouse Performance: 42 → 91</li></ul>",
    "excerpt": "A practical walkthrough of the tools and techniques I used to cut a Next.js production bundle from 1.2MB to 420KB — without sacrificing any functionality.",
    "coverImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    "category": "scaling-and-performance",
    "tags": ["Performance", "Next.js", "Optimization"],
    "status": "published"
  }'
```

---

## AI INTEGRATION (2 posts)

### 5. Adding AI-Powered Search to a Node.js App

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Adding AI-Powered Semantic Search to a Node.js Application",
    "content": "<h2>Why Keyword Search Falls Short</h2><p>Traditional keyword search breaks when users describe what they want in natural language. Searching for \"fix my app crashing on login\" returns zero results when the actual article is titled \"Debugging Authentication Token Expiry Errors.\" Semantic search understands meaning, not just matching words.</p><h2>The Architecture</h2><p>We built a semantic search pipeline with three components: an embedding service that converts text to vectors using OpenAI'\''s embedding API, a vector database (Pinecone) for similarity search, and a Node.js API layer that orchestrates queries and combines results with traditional filters.</p><h2>Step 1: Generating Embeddings</h2><p>Every piece of searchable content — articles, products, documentation — is passed through OpenAI'\''s text-embedding-3-small model to generate a 1536-dimensional vector. We batch-process existing content on ingestion and generate embeddings in real-time for new content via a background queue.</p><h2>Step 2: Vector Storage and Indexing</h2><p>Vectors are stored in Pinecone with metadata (category, date, author) attached. Pinecone'\''s approximate nearest neighbor algorithm returns the top-K most semantically similar results in under 50ms, even across millions of vectors.</p><h2>Step 3: Hybrid Search</h2><p>Pure semantic search can miss exact matches that keyword search handles well. We implemented a hybrid approach: run both semantic and keyword searches in parallel, merge results with reciprocal rank fusion, and boost exact title matches. This gives the best of both worlds.</p><h2>Step 4: Query Enhancement</h2><p>Before searching, we pass the user'\''s query through a lightweight prompt that expands abbreviations, corrects typos, and generates related terms. This improves recall without the user needing to craft perfect queries.</p><h2>Integration Code</h2><p>The Express.js endpoint accepts a search query, generates its embedding, queries Pinecone for the top 20 nearest neighbors, fetches full documents from MySQL, and returns ranked results — all in under 200ms for most queries.</p><h2>Results</h2><ul><li>Search relevance (measured by click-through): improved 340%</li><li>Zero-result searches: reduced from 35% to 4%</li><li>Average search latency: 180ms (acceptable for real-time)</li><li>Cost: approximately $0.0004 per search query</li></ul>",
    "excerpt": "How we replaced basic keyword search with AI-powered semantic search using OpenAI embeddings and Pinecone, improving search relevance by 340%.",
    "coverImage": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    "category": "ai-integration",
    "tags": ["AI Integration", "Search", "OpenAI"],
    "status": "published"
  }'
```

### 6. Building an AI Content Moderation Pipeline

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Building an AI Content Moderation Pipeline for a Social Platform",
    "content": "<h2>The Problem</h2><p>Our client ran a community platform with 50,000 daily user-generated posts. Their manual moderation team of 5 people could only review 2,000 posts per day, leaving 96% of content unreviewed. Toxic content was driving away users and creating legal liability.</p><h2>Solution Architecture</h2><p>We designed a three-stage moderation pipeline: automated AI classification, confidence-based routing, and human review for edge cases. The goal was not to eliminate human moderators but to focus their attention on the 5% of content that genuinely needs human judgment.</p><h2>Stage 1: Real-Time Classification</h2><p>Every new post is analyzed by OpenAI'\''s moderation API for toxicity, hate speech, violence, and self-harm categories. Posts scoring below the safe threshold are auto-approved. Posts scoring above the dangerous threshold are auto-rejected with a user notification. Posts in the gray zone are queued for human review.</p><h2>Stage 2: Context-Aware Analysis</h2><p>For gray-zone posts, we built a custom classification layer that considers context: the user'\''s history, the community'\''s norms, the conversation thread, and whether flagged words are used in harmful or benign contexts. A post saying \"I'\''m going to kill it at the presentation\" should not be flagged the same as a genuine threat.</p><h2>Stage 3: Human-in-the-Loop</h2><p>The moderation dashboard presents queued posts with AI-generated explanations for why each was flagged, suggested actions, and similar past decisions. Moderators can approve, reject, or escalate with one click. Every human decision feeds back into the model as training data.</p><h2>Technical Implementation</h2><p>The pipeline runs on a Node.js worker service processing posts from a Redis queue. Classification results are cached to avoid re-analyzing edited posts that have not materially changed. We implemented rate limiting and cost controls to prevent API cost spikes during traffic surges.</p><h2>Results</h2><ul><li>Content reviewed: 4% → 100% of daily posts</li><li>Average moderation time: 6 hours → 8 seconds for auto-decisions</li><li>False positive rate: 3.2% (humans review all rejections)</li><li>Moderator efficiency: 400 posts/day → 2,000 posts/day (focused on edge cases)</li><li>User-reported toxic content: dropped 78%</li><li>API cost: $45/day for 50K posts</li></ul>",
    "excerpt": "How we built a three-stage AI moderation pipeline that reviews 100% of user content in real-time, reducing toxic posts by 78% while cutting moderation costs.",
    "coverImage": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200",
    "category": "ai-integration",
    "tags": ["AI Integration", "Moderation", "OpenAI"],
    "status": "published"
  }'
```
