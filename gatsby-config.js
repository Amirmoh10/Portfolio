module.exports = {
  siteMetadata: {
    siteTitle: 'Amir Ghezala',
    siteDescription: 'Frontend Developer',
    siteImage: '/siteShot.png', // main image of the site for metadata
    siteUrl: 'https://www.amirghezala.com/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Amir Ghezala',
    authorDescription: 'Frontend Developer', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `facebook`,
        url: `https://www.facebook.com/amir.ghezala.7`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/amir_ghezala`
      },
      {
        icon: `github`,
        url: `https://github.com/Amirmoh10`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '⬈ '
            }
          }
        },
        feedSearch: {
          symbol: ''
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amir Ghezala`,
        short_name: `Amir`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
