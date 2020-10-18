module.exports = {
  pathPrefix: '',
  siteUrl: 'https://jinyoung.dev',
  siteTitle: 'Derrick kang(강진영)',
  siteDescription: 'Derrick personal site',
  author: 'Derrick kang',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/superbderrick',
    facebook: 'https://www.facebook.com/jinyeoung.kang/',
    linkedin: 'https://www.linkedin.com/in/sensational/',
    instagram: 'https://www.instagram.com/derricks2/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    Cocoapods: {
      name: 'Cocoapods',
      description: 'Cocoapods is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
