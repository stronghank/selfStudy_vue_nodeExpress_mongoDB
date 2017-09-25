<template lang='html'>
<div>
	<mu-circular-progress class='loading' v-if='loadingData' :size='80' />
	<div class='detail' v-else>
		<div class="detail-left">
			<img class='movie-poster' />
		</div>
		<div class='detail-right'>
          <p class='movie-title'>{{movie.title}}</p>
          <p class='movie-genres'>Rating: {{movie.rating}}</p>
          <p class='movie-summary'>{{movie.introduction}}</p>
          <mu-raised-button @click='goBack' primary>Return</mu-raised-button>
		</div>
	</div>
</div>	

</template>

<script>
export default {
  created () {
    this.getMovie(this.$route.params.id)
    document.title = this.$route.name
  },
  data () {
    return {
      movie: {},
      loadingData: true
    }
  },
  methods: {
    getMovie (id) {
      this.$http.get(`/api/movie/${id}`)
        .then(res => {
          console.log(res.data)
          if (res.data) {
            this.movie = res.data
            setTimeout(() => {
              document.querySelector('.movie-poster').src = this.movie.poster
            }, 0)
            this.loadingData = false
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
a{
	color: #03a9f4;
}
.loading{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.detail{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
}
.detail-left{
  padding: 16px;
  margin-left: 80px;
}
.detail-right{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.movie-title{
  width: 100%;
  font-size: 24px;
}
.movie-genres{
  width: 100%;
}
.movie-summary{
  letter-spacing: 1px;
  text-indent: 2em;
  line-height: 1.4;
  font-size: 16px;
}
</style>