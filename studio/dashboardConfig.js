export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5eb992b82c80c6ddcd31d084',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-428vshdn',
                  apiId: 'c1c1af89-7017-4a0b-ba35-99d86027d174'
                },
                {
                  buildHookId: '5eb992b9861e5a78f2902b25',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4sf6uahn',
                  apiId: '1ac4c93b-444b-4460-a3ed-1a1f8c52d419'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Lane/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4sf6uahn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
