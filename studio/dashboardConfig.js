export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61fb4e0228b8de7516f26612',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vuqfg3s1',
                  apiId: 'c1726d92-1ad2-46cf-8138-843d27994fad'
                },
                {
                  buildHookId: '61fb4e034df6ad67eb26ec63',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fpwgrufg',
                  apiId: '7b7c6929-9419-412a-b972-8e26c6b16432'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zeppytoh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fpwgrufg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
