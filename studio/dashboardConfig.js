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
                  buildHookId: '5d20cdcdc4da2a4cd7589fb4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-omrp4iob',
                  apiId: '219187dd-9158-4e49-b808-b38e3164e6ae'
                },
                {
                  buildHookId: '5d20cdcdc01913b3540e68b4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zgeuvmie',
                  apiId: '251ac169-0c60-4d7d-87ae-902e151ce90e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sibsfinx/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zgeuvmie.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
