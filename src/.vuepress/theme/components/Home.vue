<template>
  
  
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    


      <header class="hero">
    <div class="hero_container">  
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        >

        <h1
          v-if="data.heroText !== null"
          id="main-title"
        >
          {{ data.heroText || $title || 'Hello' }}
        </h1>

        <p
          v-if="data.tagline !== null"
          class="description"
        >
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </p>

        <p
          v-if="data.actionText && data.actionLink"
          class="action"
        >
          <NavLink
            class="action-button"
            :item="actionLink"
          />
        </p>
    </div>
      </header>

    <div
      v-if="data.items && data.items.length"
      class="container_items"
    >
      <a
        v-for="(item, index) in data.items"
        :key="index"
        class="container_item"
        :href="item.link"
      >
        <div class="container_image">
          <img :src="item.itemImage" >
        </div>
        <div>
          <h2 class="container_item_title">{{item.title}}</h2>
          <p class="container_item_description">{{ item.itemDescription }}</p>
        </div>
      </a>
    </div>
    


    <div class="description_container">
      <h3>{{ $withBase(data.taglineStartup) }}</h3>
    </div>
    
    
    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <img class="image_index_documentaion" :src="feature.title" >
        <p><strong>{{ feature.details }}</strong></p>
      </div>
    </div>

    <Content class="theme-default-content custom" />
    
   

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>

  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'



export default {
  name: 'Home',
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">

.container_item_title
  font-size 1rem
  margin: 25px

.container_item_description
  font-size 1rem
  margin: 25px

.container_image
  height 70px
  display flex
  justify-content center
  align-items flex-start
  img
    height 50px
    padding 15px

.container_items
  padding 3.2rem 0
  margin-top 2.5rem
  display flex
  flex-wrap wrap
  align-items center
  align-content stretch
  justify-content center

.container_item 
  display flex
  width 300px
  height 200px
  margin 2.5rem
  border: 1px solid #eaecef
  border-radius: 5px

.container_item:hover
  background-color: #903163
  color: white
  transition: all .2s
  cursor: pointer
  transform: scale(1.1)

.description_container
  display flex
  width 100%
  justify-content center
  h3
    width 70%
    padding 0 5em
    text-align center

.hero_container
  display flex
  width 100%
  flex-direction column
  max-width 40%

.image_index_documentaion
  height 150px

// $homePageWidth
.home
  width 100%
  margin 0px auto
  display block
  .hero
    background-image: url("/assets/img/index/smartmockups_k2bygvra.gif");
    opacity 1
    display flex
    flex-direction column
    // text-align center
    align-items flex-start
    justify-content flex-start
    img
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 3.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items center
    align-content stretch
    justify-content center
  .feature
    display flex
    flex-direction column
    flex-grow 1
    flex-basis 30%
    max-width 20%
    justify-content flex-start
    align-items center
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
      padding 55px
      text-align center
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color white
    background-color #202020
@media (max-width: $MQMobile)
  .hero_container
    display flex
    width 100%
    flex-direction column
    max-width 100%
    h1
      font-size 2rem
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem
@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 1.5rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>