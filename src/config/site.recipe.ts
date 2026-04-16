import type { SiteRecipe } from '@/design/factory/recipe-types'

export const SITE_RECIPE: SiteRecipe = {
  productFamily: 'visual',
  themePack: 'visual-portfolio',
  homepageTemplate: 'image-profile-home',
  navbarTemplate: 'floating-bar',
  footerTemplate: 'columns-footer',
  motionPack: 'studio-stagger',
  primaryTask: 'image',
  enabledTasks: ['image', 'listing'],
  taskTemplates: {
    image: 'image-portfolio',
    listing: 'listing-showcase'
  },
  manualOverrides: {
    navbar: false,
    footer: false,
    homePage: false,
    taskListPage: false,
    taskDetailPage: false,
    taskCard: false,
    contactPage: false,
    loginPage: false,
    registerPage: false,
  },
}


