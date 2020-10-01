<template lang="pug">
  .page
    b-table.page-films(
      :data="data"
      :debounce-search="300"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page="currentPage"
      :pagination-simple="false"
      pagination-position="bottom"
      default-sort-direction="asc"
      sort-icon="arrow-up"
      sort-icon-size="is-small"
      default-sort="episode"
    )
      template(v-for="column in columns")
        b-table-column(:key="column.id" v-bind="column" sortable)
          template(
            v-if="column.searchable"
            slot="searchable"
            slot-scope="props"
            )
            b-input(
              v-model="props.filters[props.column.field]"
              placeholder="Search..."
              icon="magnify"
              size="is-small"
            )

          template(v-slot="props")
            template(v-if="column.field === 'date'")
              span.tag.is-success {{ props.row.date }}

            template(v-else) {{ props.row[column.field] }}

      b-input.page-films__per-page-input(v-model="perPage" type="number" slot="bottom-left" title="Items per Page")

</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  name: 'page',
  data() {
    return {
      isPaginated: true,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 3,
      columns:[
        {
          field: 'episode',
          label: 'Episode'
        },
        {
          field: 'title',
          label: 'Title',
          searchable: true
        },
        {
          field: 'director',
          label: 'Director',
          searchable: true
        },
        {
          field: 'producer',
          label: 'Producer',
          searchable: true
        },
        {
          field: 'date',
          label: 'Release date'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['films']),
    data () {
      return _.map(this.films.results, (item) => {
        let date = new Date(item.release_date).toLocaleDateString()
        return {
          episode: item.episode_id,
          title: item.title,
          director: item.director,
          producer: item.producer,
          date
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.page
  min-width 320px
  width 100%
  background #fcfcfc
  padding-top 20px
  &-films
    width 96%
    margin 0 auto
    &__per-page-input
      width 100%
      @media (min-width 768px)
        width 100px

</style>
