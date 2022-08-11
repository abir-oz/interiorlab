const menuConfig = [
    {
        title: 'Home',
        path: '/'
    },
    { title: 'About', path: '/about' },
    {
        title: 'Our Works', path: '/our-works', children: [
            { title: 'Residential', path: '/residential' },
            { title: 'Commercial', path: '/commercial' },
        ]
    },
    { title: 'Careers', path: '/careers' },
    { title: 'Testimonials', path: '/testimonials' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
]
export default menuConfig;