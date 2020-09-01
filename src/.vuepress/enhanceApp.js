/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  router.addRoutes([
    {
      path: "/fr/articles/canaux.html",
      redirect: "/articles/parametres/canaux.html",
    },
    {
      path: "/fr/articles/escalade.html",
      redirect: "/articles/outils/escalade.html",
    },
    {
      path: "/fr/articles/accessibilites du chatbot.html",
      redirect: "/articles/parametres/accessibilite_de_chatbot.html",
    }
  ])
}
