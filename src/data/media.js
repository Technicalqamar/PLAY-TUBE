import thumbReactRoadmap from '../assets/thumbnails/01-react-roadmap.jpg'
import thumb70mViews from '../assets/thumbnails/02-70m-views.jpg'
import thumbDenoNpm from '../assets/thumbnails/03-deno-npm.jpg'
import thumbSocketIo from '../assets/thumbnails/04-socket-io.jpg'
import thumbTerraformCloud from '../assets/thumbnails/05-terraform-cloud.jpg'
import thumbReactScratch from '../assets/thumbnails/06-react-scratch.jpg'
import thumbGoogleIdx from '../assets/thumbnails/07-google-idx.jpg'
import thumbAiPieces from '../assets/thumbnails/08-ai-pieces.jpg'
import thumbFlutterUi from '../assets/thumbnails/09-flutter-ui.jpg'
import thumbDatabase from '../assets/thumbnails/10-database.jpg'
import thumbDevProduct from '../assets/thumbnails/11-dev-product.jpg'
import thumbBrowser from '../assets/thumbnails/12-browser.jpg'

const videos = [
  {
    id: 1, title: 'How to learn react | A React Roadmap', channel: 'CodeJourney',
    views: '482K views', timestamp: '3 days ago', duration: '1:12:45', image: thumbReactRoadmap,
    description: 'A comprehensive roadmap for learning React from the ground up. We cover hooks, context, state management, routing, and real-world project patterns to help you become a confident React developer.',
    likes: '12K', subscribers: '85.2K',
  },
  {
    id: 2, title: 'How much I made with 70M views', channel: 'CreatorDiaries',
    views: '1.1M views', timestamp: '1 week ago', duration: '12:34', image: thumb70mViews,
    description: 'Breaking down my earnings, sponsorships, and ad revenue after hitting 70 million total views on my developer content channel. Full transparency on what it takes to build an audience.',
    likes: '45K', subscribers: '320K',
  },
  {
    id: 3, title: 'Deno just got 2M npm packages', channel: 'DenoNews',
    views: '238K views', timestamp: '2 days ago', duration: '15:22', image: thumbDenoNpm,
    description: 'Deno now supports over 2 million npm packages natively. We explore what this means for the JavaScript ecosystem, how the compatibility layer works, and when to consider switching.',
    likes: '8.7K', subscribers: '42.1K',
  },
  {
    id: 4, title: 'Best way to learn Socket IO', channel: 'WebDevLab',
    views: '176K views', timestamp: '5 days ago', duration: '18:09', image: thumbSocketIo,
    description: 'Learn Socket.IO from scratch — real-time bidirectional events, rooms, namespaces, and building a live chat application. Perfect for backend and fullstack developers.',
    likes: '6.3K', subscribers: '28.5K',
  },
  {
    id: 5, title: 'Terraform, fig & FreeAPI | Updates', channel: 'CloudCraft',
    views: '94K views', timestamp: '4 days ago', duration: '22:41', image: thumbTerraformCloud,
    description: 'Latest updates in the cloud infrastructure space — Terraform new features, fig CLI improvements, and the FreeAPI project gaining traction for rapid prototyping.',
    likes: '3.1K', subscribers: '19.8K',
  },
  {
    id: 6, title: "Let's learn react from scratch", channel: 'FrontendFoundry',
    views: '362K views', timestamp: '2 weeks ago', duration: '2:05:10', image: thumbReactScratch,
    description: 'Complete beginner-to-intermediate React course. Build 3 projects from scratch, understand JSX, components, props, state, effects, and custom hooks. No frameworks — just React.',
    likes: '15K', subscribers: '97.4K',
  },
  {
    id: 7, title: "Google's IDX Unveiled", channel: 'GoogleTech',
    views: '518K views', timestamp: '1 day ago', duration: '11:56', image: thumbGoogleIdx,
    description: 'Google\'s IDX is a cloud-based AI-powered development environment. We explore its features, Gemini integration, live preview, and how it compares to Codespaces and StackBlitz.',
    likes: '22K', subscribers: '180K',
  },
  {
    id: 8, title: 'Google and Pieces dropped some interesting...', channel: 'AIBriefs',
    views: '205K views', timestamp: '3 days ago', duration: '14:03', image: thumbAiPieces,
    description: 'Breaking down the latest AI announcements from Google and Pieces — new models, developer tools, and what these advances mean for building intelligent applications.',
    likes: '7.8K', subscribers: '55.3K',
  },
  {
    id: 9, title: 'Flutter Dart Case Study', channel: 'FlutterFlow',
    views: '127K views', timestamp: '6 days ago', duration: '34:27', image: thumbFlutterUi,
    description: 'Deep dive into Flutter and Dart — real-world case study of building a production app. Performance benchmarks, widget architecture, and platform-specific optimizations.',
    likes: '4.2K', subscribers: '61.7K',
  },
  {
    id: 10, title: 'How database works | Engineering side', channel: 'DataDive',
    views: '689K views', timestamp: '1 month ago', duration: '25:18', image: thumbDatabase,
    description: 'Under the hood of modern databases — B-trees, LSM trees, WAL, indexing strategies, query optimization, and how PostgreSQL and MySQL handle millions of queries per second.',
    likes: '31K', subscribers: '210K',
  },
  {
    id: 11, title: 'Building a multi million dollar developer product', channel: 'StartupStories',
    views: '305K views', timestamp: '2 months ago', duration: '28:44', image: thumbDevProduct,
    description: 'How we built a developer tool from zero to millions in ARR. Lessons on product-market fit, pricing, developer experience, community building, and scaling a SaaS.',
    likes: '14K', subscribers: '88.6K',
  },
  {
    id: 12, title: 'How does a browser work?', channel: 'Internals',
    views: '744K views', timestamp: '3 months ago', duration: '19:52', image: thumbBrowser,
    description: 'From URL bar to pixels on screen — how browsers parse HTML, build the DOM, compute styles, layout, paint, and composite. Understanding the critical rendering path for better performance.',
    likes: '28K', subscribers: '165K',
  },
]

export const homeVideos = videos

export const searchVideos = (query) => {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return videos.filter(
    (video) =>
      video.title.toLowerCase().includes(q) || video.channel.toLowerCase().includes(q),
  )
}

export const getVideoById = (id) => videos.find((v) => v.id === Number(id))
