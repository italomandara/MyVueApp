<template>
  <ul v-if="paginator.pages.length > 1" class="pagination" role="navigation" aria-label="Pagination">
    <li :class="{ disabled: paginator.prev.is_current }" class="pagination-previous">
      <a v-if="!paginator.prev.is_current" @click="updatePagination(paginator.prev)"> Previous <span class="show-for-sr">{{ paginator.prev.number }}</span></a>
      <span v-else> Previous 
        <span class="show-for-sr">{{ paginator.prev.number }}</span>
      </span>
    </li>
    
    <li v-for="page in paginator.pages" :key="page.number">
      <a :class="{ current: page.is_current, ellipsis: page.is_ellipsis }" :aria-label="'Page ' + page.number" @click="updatePagination(page)">{{ page.is_ellipsis ? '' : page.number }}</a>
    </li>

    <li :class="{ disabled: paginator.next.is_current }" class="pagination-next">
      <a  v-if="!paginator.next.is_current" aria-label="Next page" @click="updatePagination(paginator.next)">Next <span class="show-for-sr">{{ paginator.prev.number }}</span></a>
      <span v-else> Next 
        <span class="show-for-sr">{{ paginator.prev.number }}</span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['pagesinfo'],
  name: 'pagination',
  computed: {
    paginator: function () {
      var pagesinfo = this.pagesinfo
      var q = pagesinfo.q
      var tot = pagesinfo.tot
      var lim = pagesinfo.lim
      var off = pagesinfo.off
      var cur = (off / lim)
      var pages = Math.ceil(tot / lim)
      var pag = []
      var ell = {
        index: 0,
        number: 0,
        is_first: false,
        is_last: false,
        is_ellipsis: true,
        is_current: false,
        offset: 0,
        q: ''
      }
      for (var i = 0; i <= pages - 1; i++) {
        pag.push({
          index: i,
          number: i + 1,
          is_first: !i,
          is_last: i === pages - 1,
          is_ellipsis: false,
          is_current: cur === i,
          offset: i * lim,
          q: q
        })
      }
      var calculatedPages = []
      if (pag.length < 20) {
        calculatedPages = pag.length > 1 ? pag : []
      } else {
        var first = [pag[0]]
        var last = [pag[pag.length - 1]]
        var relcur = Math.min(last[0].index - 4, Math.max(5, cur))
        var sliced = pag.slice(relcur - 4, relcur + 4)
        var simplifiedPag
        console.log(relcur + 5, last[0].index, first[0].index)
        if (relcur - 5 === first[0].index) {
          simplifiedPag = first.concat(sliced).concat([ell]).concat(last)
        } else if (relcur + 4 === last[0].index) {
          simplifiedPag = first.concat([ell]).concat(sliced).concat(last)
        } else {
          simplifiedPag = first.concat([ell]).concat(sliced).concat([ell]).concat(last)
        }
        calculatedPages = pag.length > 1 ? simplifiedPag : []
      }
      var paginatorObj = {
        next: pag[Math.min(pages - 1, cur + 1)],
        prev: pag[Math.max(0, cur - 1)],
        pages: calculatedPages,
        paginateBy: lim
      }
      return paginatorObj
    }
  },
  methods: {
    updatePagination: function (pageObj) {
      this.$emit('pagination', pageObj)
      this.pagesinfo.offset = pageObj.offset
    }
  }
}
</script>
