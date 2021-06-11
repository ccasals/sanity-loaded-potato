export default {
  widgets: [
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
                  buildHookId: '60c3ba5850b57300b0a227e8',
                  title: 'Sanity Studio',
                  name: 'sanity-loaded-potato-studio',
                  apiId: 'e2af0600-c771-4250-b008-6739fcfbae38'
                },
                {
                  buildHookId: '60c3ba5869ec5c00e5d91902',
                  title: 'Blog Website',
                  name: 'sanity-loaded-potato',
                  apiId: 'e618def9-a496-4bd3-a04f-f8859e8cd8d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ccasals/sanity-loaded-potato',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-loaded-potato.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
