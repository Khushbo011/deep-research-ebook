export interface Product {
  id: string;
  title: string;
  slug: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  downloadLink: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Deep Research: Autonomous Robots & Smart Systems",
    slug: "deep-research-autonomous-robots",
    category: "Industry Report",
    image: "/images/ebook-robots-cover.jpg", // We can use CSS styles to render a beautiful mockup instead of a raw image if missing
    price: 85,
    rating: 4.9,
    description: "Explore the technologies, architectures, market trends, and innovations shaping the future of intelligent automation. An exclusive executive intelligence publication.",
    longDescription: "This comprehensive research report provides a deep-dive analysis of the next generation of autonomous systems. Designed for executives, investors, and lead engineers, this publication bypasses the hype to deliver technical architectures, market forecasts, and real-world deployment challenges of autonomous robots and smart factories.",
    features: [
      "220+ Pages of Rigorous Analysis",
      "Dynamic Swarm Intelligence Systems Breakdown",
      "Edge-vs-Cloud Latency Metrics & Trade-offs",
      "Detailed Case Studies from 12 Industry Leaders",
      "Full PDF & EPUB Format Access",
      "Includes Raw Data Spreadsheet (XLSX) of Market Projections"
    ],
    benefits: [
      "Navigate Architecture Shifts: Transition from simple automation to cognitive autonomous robots.",
      "Evaluate Compute Paradigms: Compare edge, cloud, and hybrid compute strategies with verified latency and cost data.",
      "Access Exclusive Case Studies: Learn from deployment reports of top automotive, aerospace, and logistics companies.",
      "Inform Investment Decisions: Use detailed market and venture trends to direct your technology budget."
    ],
    faqs: [
      {
        question: "Who is this research report for?",
        answer: "This report is written specifically for CTOs, product builders, robotics engineers, investors, and researchers who need deep technical and strategic insights into modern intelligent systems."
      },
      {
        question: "What formats are provided upon purchase?",
        answer: "You will receive high-quality PDF and EPUB versions of the report, along with access to the raw data files (XLSX) covering our market size and adoption rate forecasts."
      },
      {
        question: "Is there a refund policy?",
        answer: "Yes, we offer a 100% satisfaction guarantee. If the insights do not add value to your business, email support within 14 days for a full refund."
      }
    ],
    downloadLink: "https://drive.google.com/file/d/1Gl0Ga9vX6iBjON6B12T3Bgel3FD0lFHx/view?usp=drive_link"
  },
  {
    id: "2",
    title: "AI Orchestration: Next-Gen Agentic Workflows",
    slug: "ai-orchestration-agentic-workflows",
    category: "Technical Guide",
    image: "/images/ebook-ai-cover.jpg",
    price: 199,
    rating: 4.8,
    description: "The complete guide to architecting multi-agent networks, autonomous planning loops, and production LLM orchestrations.",
    longDescription: "Step-by-step systems architectures and deployment playbooks for building reliable multi-agent systems. Learn how to address non-determinism, handle state tracking, and build resilient self-correcting agent chains.",
    features: [
      "150+ Pages with Code Architectures",
      "LangChain, AutoGen, and CrewAI Blueprint Compares",
      "Token Optimization & Caching Strategies",
      "Interactive Playground Access Code",
      "Production-ready Python & TS Templates"
    ],
    benefits: [
      "Master Agent Coordination: Learn how to scale agent coordination without infinite routing loops.",
      "Drastically Lower Cost: Deploy semantic caching and task delegation to save up to 60% on API fees.",
      "Reliable Error Correction: Implement self-healing code models to recover from non-deterministic failures."
    ],
    faqs: [
      {
        question: "Does this include code repositories?",
        answer: "Yes. Purchasing gives you access to a private GitHub repository containing production-ready TypeScript and Python boilerplate code."
      },
      {
        question: "What knowledge level is required?",
        answer: "We assume intermediate knowledge of Python or Node.js, and familiarity with LLM APIs (OpenAI, Anthropic, or Gemini)."
      }
    ],
    downloadLink: "https://drive.google.com/file/d/1Gl0Ga9vX6iBjON6B12T3Bgel3FD0lFHx/view?usp=drive_link"
  }
];
