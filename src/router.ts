import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./views/AboutView.vue'),
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('./views/OurServices.vue'),
    },
    {
        path: '/services/:id',
        name: 'service',
        component: () => import('./views/ServiceDetails.vue'),
    },
    {
        path: '/contact-us',
        name: 'contact',
        component: () => import('./views/ContactUs.vue'),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('./views/OurProjects.vue'),
    },
    {
        path: '/projects/:id',
        name: 'project',
        component: () => import('./views/ProjectDetails.vue'),
    },
    {
        path: '/docs',
        name: 'docs',
        component: () => import('./views/Documentation.vue'),
        children: [
            {
                path: 'architectural-overview',
                name: 'architectural-overview',
                component: () => import('./components/docs/ArchitecturalOverview.vue'),
            },
            {
                path: 'typography',
                name: 'typography',
                component: () => import('./components/docs/Typography.vue'),
            },
            {
                path: 'color-system',
                name: 'color-system',
                component: () => import('./components/docs/ColorSystem.vue'),
            },
            {
                path: 'buttons',
                name: 'buttons',
                component: () => import('./components/docs/Buttons.vue'),
            },
        ],
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log(to, from)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    next();
    
});

export default router;