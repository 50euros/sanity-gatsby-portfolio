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
                  buildHookId: '5e256e1c153fd7911c129091',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-akmh2r26',
                  apiId: '2380c344-5f48-4116-8c31-16e9e923bde3'
                },
                {
                  buildHookId: '5e256e1c5fb6180f160e52e3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3gnzcwvs',
                  apiId: 'cd972c68-4a88-44c1-aed8-a413eb7a175a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/50euros/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3gnzcwvs.netlify.com',
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
