export default [
    {
        path: '/prueba/view',
        name: 'prueba-view',
        component: () => import('@/views/prueba/prueba.vue'),
        meta: {
            pageTitle: 'Lista',
            resource: 'VER MENU prueba',
            breadcrumb: [
                {
                    text: 'Lista prueba',
                },
                {
                    text: 'prueba',
                    active: true,
                },
            ],
        },
    },
  ]
  