const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
const Comment = require('./models/Comment');
require('dotenv').config();

// Function to generate slug from title
function generateSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const samplePosts = [
  {
    title: "The Future of HR Technology in 2024",
    slug: "the-future-of-hr-technology-in-2024",
    content: `
      <p>The landscape of Human Resources is rapidly evolving with the integration of cutting-edge technologies. In 2024, we're seeing unprecedented changes in how organizations manage their workforce.</p>
      
      <h2>Key Trends Shaping HR Technology</h2>
      
      <h3>1. Artificial Intelligence and Machine Learning</h3>
      <p>AI is revolutionizing recruitment processes, from automated resume screening to predictive analytics for employee retention. Companies are leveraging machine learning algorithms to identify the best candidates and predict employee success.</p>
      
      <h3>2. Remote Work Technology</h3>
      <p>With the continued rise of remote work, HR departments are adopting new tools for virtual onboarding, team building, and performance management. Video conferencing platforms and collaboration tools have become essential.</p>
      
      <h3>3. Employee Experience Platforms</h3>
      <p>Modern HR technology focuses on creating seamless employee experiences. From self-service portals to mobile apps, employees now expect intuitive interfaces for managing their work lives.</p>
      
      <h2>Benefits of Modern HR Technology</h2>
      <ul>
        <li>Improved efficiency in recruitment processes</li>
        <li>Better data-driven decision making</li>
        <li>Enhanced employee engagement</li>
        <li>Reduced administrative burden</li>
        <li>Improved compliance and reporting</li>
      </ul>
      
      <p>As we move forward, organizations that embrace these technological advancements will have a significant competitive advantage in attracting and retaining top talent.</p>
    `,
    excerpt: "Discover the latest trends in HR technology and how they're transforming the workplace in 2024.",
    author: "Sarah Johnson",
    category: "HR Technology",
    tags: ["HR Technology", "AI", "Remote Work", "Digital Transformation"],
    featuredImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "published",
    publishedAt: new Date("2024-01-15"),
    views: 1250,
    likes: 89,
    comments: 23,
  },
  {
    title: "Building a Strong Company Culture in Remote Teams",
    slug: "building-a-strong-company-culture-in-remote-teams",
    content: `
      <p>Creating and maintaining a strong company culture is challenging enough in traditional office settings, but it becomes even more complex when your team is distributed across different time zones and locations.</p>
      
      <h2>Strategies for Remote Culture Building</h2>
      
      <h3>1. Regular Virtual Team Building</h3>
      <p>Schedule regular virtual team building activities that go beyond work-related discussions. Consider virtual coffee chats, online games, or shared learning sessions.</p>
      
      <h3>2. Clear Communication Channels</h3>
      <p>Establish clear communication protocols and use the right tools for different types of communication. Slack for quick chats, Zoom for meetings, and email for formal communications.</p>
      
      <h3>3. Recognition and Appreciation</h3>
      <p>Implement systems for recognizing and appreciating employee contributions. This could be through shout-outs in team meetings, virtual awards, or public acknowledgment in company communications.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Set clear expectations and goals</li>
        <li>Foster open communication</li>
        <li>Encourage work-life balance</li>
        <li>Provide opportunities for growth</li>
        <li>Create inclusive environments</li>
      </ul>
      
      <p>Remember, culture is not built overnight. It requires consistent effort and genuine commitment from leadership to create an environment where employees feel valued and connected.</p>
    `,
    excerpt: "Learn effective strategies for building and maintaining a strong company culture in remote work environments.",
    author: "Michael Chen",
    category: "Remote Work",
    tags: ["Remote Work", "Company Culture", "Team Building", "Leadership"],
    featuredImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    status: "published",
    publishedAt: new Date("2024-01-20"),
    views: 980,
    likes: 67,
    comments: 15,
  },
  {
    title: "Effective Employee Retention Strategies for 2024",
    slug: "effective-employee-retention-strategies-for-2024",
    content: `
      <p>Employee retention has become a top priority for organizations worldwide. With the current competitive job market, companies need to implement comprehensive strategies to keep their best talent.</p>
      
      <h2>Key Retention Strategies</h2>
      
      <h3>1. Competitive Compensation and Benefits</h3>
      <p>Ensure your compensation packages are competitive in your industry and region. Consider offering flexible benefits, wellness programs, and performance-based bonuses.</p>
      
      <h3>2. Career Development Opportunities</h3>
      <p>Provide clear career paths and development opportunities. This includes training programs, mentorship initiatives, and internal promotion opportunities.</p>
      
      <h3>3. Work-Life Balance</h3>
      <p>Support employees in maintaining a healthy work-life balance through flexible working arrangements, mental health support, and reasonable workload expectations.</p>
      
      <h2>Additional Considerations</h2>
      <ul>
        <li>Regular feedback and recognition</li>
        <li>Inclusive and diverse workplace</li>
        <li>Strong leadership and management</li>
        <li>Employee engagement initiatives</li>
        <li>Regular employee surveys and feedback</li>
      </ul>
      
      <p>The key to successful retention is understanding that it's not just about salary - it's about creating an environment where employees feel valued, supported, and excited about their future with the company.</p>
    `,
    excerpt: "Discover proven strategies to improve employee retention and reduce turnover in your organization.",
    author: "Emily Rodriguez",
    category: "Employee Retention",
    tags: ["Employee Retention", "HR Strategy", "Talent Management", "Employee Engagement"],
    featuredImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "published",
    publishedAt: new Date("2024-01-25"),
    views: 1100,
    likes: 78,
    comments: 19,
  },
  {
    title: "The Impact of AI on Recruitment and Hiring",
    slug: "the-impact-of-ai-on-recruitment-and-hiring",
    content: `
      <p>Artificial Intelligence is transforming the recruitment landscape, offering both opportunities and challenges for HR professionals. Understanding how to leverage AI effectively is crucial for modern recruitment strategies.</p>
      
      <h2>AI Applications in Recruitment</h2>
      
      <h3>1. Automated Resume Screening</h3>
      <p>AI-powered tools can quickly analyze resumes and identify the most suitable candidates based on predefined criteria, saving recruiters valuable time.</p>
      
      <h3>2. Predictive Analytics</h3>
      <p>Advanced algorithms can predict candidate success and cultural fit based on various data points, helping make more informed hiring decisions.</p>
      
      <h3>3. Chatbots and Virtual Assistants</h3>
      <p>AI chatbots can handle initial candidate interactions, answer questions, and schedule interviews, providing 24/7 support to potential candidates.</p>
      
      <h2>Benefits and Challenges</h2>
      <h3>Benefits:</h3>
      <ul>
        <li>Faster screening processes</li>
        <li>Reduced bias in initial screening</li>
        <li>Improved candidate experience</li>
        <li>Better data-driven decisions</li>
      </ul>
      
      <h3>Challenges:</h3>
      <ul>
        <li>Potential for algorithmic bias</li>
        <li>Loss of human touch</li>
        <li>Data privacy concerns</li>
        <li>Need for human oversight</li>
      </ul>
      
      <p>While AI offers tremendous potential for improving recruitment processes, it's important to maintain a balance between automation and human judgment.</p>
    `,
    excerpt: "Explore how artificial intelligence is reshaping recruitment processes and what it means for HR professionals.",
    author: "David Thompson",
    category: "Recruitment",
    tags: ["AI", "Recruitment", "Technology", "Hiring", "Automation"],
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "published",
    publishedAt: new Date("2024-01-30"),
    views: 1350,
    likes: 92,
    comments: 28,
  },
  {
    title: "Mental Health in the Workplace: A Comprehensive Guide",
    slug: "mental-health-in-the-workplace-a-comprehensive-guide",
    content: `
      <p>Mental health awareness in the workplace has become increasingly important, especially in the wake of the global pandemic. Organizations need to prioritize employee well-being to maintain productivity and retention.</p>
      
      <h2>Creating a Mental Health-Friendly Workplace</h2>
      
      <h3>1. Education and Awareness</h3>
      <p>Provide training for managers and employees on mental health awareness, recognizing signs of distress, and how to offer support.</p>
      
      <h3>2. Access to Mental Health Resources</h3>
      <p>Offer employee assistance programs, counseling services, and mental health benefits as part of your benefits package.</p>
      
      <h3>3. Flexible Work Arrangements</h3>
      <p>Implement flexible working hours, remote work options, and mental health days to support employees' well-being needs.</p>
      
      <h2>Support Strategies</h2>
      <ul>
        <li>Regular check-ins with employees</li>
        <li>Stress management workshops</li>
        <li>Workload management</li>
        <li>Clear communication channels</li>
        <li>Recognition and appreciation programs</li>
      </ul>
      
      <p>Remember, supporting mental health in the workplace is not just about compliance - it's about creating a culture where employees feel safe, supported, and valued.</p>
    `,
    excerpt: "Learn how to create a supportive workplace environment that prioritizes employee mental health and well-being.",
    author: "Lisa Wang",
    category: "Employee Wellness",
    tags: ["Mental Health", "Employee Wellness", "Workplace Culture", "Well-being"],
    featuredImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "published",
    publishedAt: new Date("2024-02-05"),
    views: 890,
    likes: 56,
    comments: 12,
  }
];

const sampleComments = [
  {
    author: {
      name: "John Smith",
      email: "john.smith@email.com",
      website: "https://johnsmith.dev"
    },
    content: "This is a fantastic article! The insights about AI in recruitment are spot on. We've been implementing similar strategies at our company and the results have been impressive.",
    status: "approved",
    likes: 5
  },
  {
    author: {
      name: "Maria Garcia",
      email: "maria.garcia@email.com"
    },
    content: "Great points about remote work culture. We've been struggling with this at our company. Do you have any specific recommendations for team building activities?",
    status: "approved",
    likes: 3
  },
  {
    author: {
      name: "Alex Johnson",
      email: "alex.johnson@email.com",
      website: "https://alexjohnson.com"
    },
    content: "The mental health section really resonated with me. It's so important for companies to prioritize employee well-being. Thanks for sharing these insights!",
    status: "approved",
    likes: 8
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await BlogPost.deleteMany({});
    await Comment.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample posts
    const posts = await BlogPost.insertMany(samplePosts);
    console.log(`Inserted ${posts.length} blog posts`);

    // Add comments to the first post
    const firstPost = posts[0];
    const comments = sampleComments.map(comment => ({
      ...comment,
      post: firstPost._id
    }));
    
    await Comment.insertMany(comments);
    console.log(`Inserted ${comments.length} comments`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 