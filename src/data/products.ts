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
    image: "/images/ebook-robots-cover.png",
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
        answer: "Yes, we offer a 100% satisfaction guarantee. If the insights do not add value to your business, email support within 45 days for a full refund."
      }
    ],
    downloadLink: "https://drive.google.com/file/d/1Gl0Ga9vX6iBjON6B12T3Bgel3FD0lFHx/view?usp=drive_link"
  },
  {
    id: "2",
    title: "Ultimate AI Prompts Guide",
    slug: "ultimate-ai-prompts-guide",
    category: "Premium AI Resource",
    image: "/images/ebook-ai-prompts-cover.png",
    price: 135,
    rating: 4.8,
    description: "Master the craft of AI prompt engineering with 500+ battle-tested prompts, advanced frameworks, and expert strategies for ChatGPT, Claude, Gemini, and beyond.",
    longDescription: "This definitive guide transforms how professionals interact with AI systems. Designed for marketers, developers, executives, and creators, this publication delivers a curated library of 500+ production-grade prompts organized by use case, along with the underlying frameworks that make them effective. Move beyond trial-and-error and unlock repeatable, high-quality AI outputs every time.",
    features: [
      "500+ Production-Ready AI Prompts",
      "Advanced Chain-of-Thought Frameworks",
      "Platform-Specific Optimization (ChatGPT, Claude, Gemini)",
      "Role-Based Prompt Templates for 15+ Industries",
      "Full PDF & EPUB Format Access",
      "Includes Prompt Cheat Sheet (Printable PDF)"
    ],
    benefits: [
      "Eliminate Trial & Error: Use proven prompt architectures that deliver consistent, high-quality AI outputs on the first attempt.",
      "Accelerate Workflows: Cut hours of manual work with ready-to-deploy prompts for content creation, data analysis, coding, and strategy.",
      "Maximize AI ROI: Extract the full potential of your AI subscriptions with techniques most users never discover.",
      "Stay Platform-Agnostic: Master prompts that work across ChatGPT, Claude, Gemini, and emerging AI platforms."
    ],
    faqs: [
      {
        question: "Who is this guide designed for?",
        answer: "This guide is built for marketers, content creators, developers, business analysts, executives, and anyone who uses AI tools professionally and wants to dramatically improve their results."
      },
      {
        question: "What formats are provided upon purchase?",
        answer: "You will receive high-quality PDF and EPUB versions of the complete guide, along with a printable prompt cheat sheet for quick daily reference."
      },
      {
        question: "Is there a refund policy?",
        answer: "Yes, we offer a 100% satisfaction guarantee. If the guide does not elevate your AI workflow, email support within 45 days for a full refund."
      }
    ],
    downloadLink: "https://drive.google.com/file/d/1hSM5bf6vpM0E4acNnA9fQ6HPGG-ccn0a/view?usp=sharing"
  }
];
