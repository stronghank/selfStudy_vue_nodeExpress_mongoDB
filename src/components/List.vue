<template lang='html'>
  <div class = 'list'>
    <mu-table :fixedHeader='true' :showCheckbox='false'>
      <mu-thead>
        <mu-tr>
          <mu-th>Movie Photo</mu-th>
          <mu-th>Movie Title</mu-th>
          <mu-th>Description</mu-th>
          <mu-th>Rating</mu-th>
          <mu-th>Operation</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr v-for="movie of movies">
          <mu-td><img class='movie-poster' :src="movie.poster"></mu-td>
          <mu-td><h3>{{movie.title}}</h3></mu-td>
          <mu-td>
            <p class="movie-introduction">{{movie.introduction}}</p>
          </mu-td>
          <mu-td class='movie-rating'>{{movie.rating}}</mu-td>
          <mu-td> 
            <mu-raised-button @click='showDetail(movie.title)' label='Detail' primary />
            <mu-raised-button @click='openEditMovieModal(movie)' label='Edit' primary />
            <mu-raised-button @click='remove(movie.title)' label='Delete' secondary />
          </mu-td>
        </mu-tr>
      </mu-tbody>
    </mu-table>

    <mu-float-button icon='add' class='add-movie-button' backgroundColor @click='openAddMovieModal' />
    <vodal :show='adMovieModal' animation='slideDown' :width='500' :height='480' :closeButton='false'>

      <mu-text-field v-model='title' fullWidth icon='movie' label='Movie Title' labelFloat /> <br/>
      <mu-text-field v-model='poster' fullWidth icon='picture_in_pictures' label='Poster address' labelFload/><br/>
      <mu-text-field v-model='introduction'
      multiLine :row='2' :rowMax='6'
      fullWidth icon="description" label='Description' labelFloat/><br/>
      <mu-raised-button @click="closeModal" label='Cancel' icon='undo' />
      <mu-raised-button @click='addMovie' label='Ok' icon='check' primary />
    </vodal>

    <vodal :show='editMovieModal' animation='slideDown' :width='500' :height:'480' :closeButton='false'>
       <mu-text-field v-model='title' fullWidth icon='movie' label='Movie Title' labelFloat /> <br/>
      <mu-text-field v-model='poster' fullWidth icon='picture_in_pictures' label='Poster address' labelFload/><br/>
      <mu-text-field v-model='introduction'
      multiLine :row='2' :rowMax='6'
      fullWidth icon="description" label='Description' labelFloat/><br/>
      <mu-raised-button @click="closeModal" label='Cancel' icon='undo' />
      <mu-raised-button @click='editMovie' label='Ok' icon='check' primary />
    </vodal>
  </div>
</template>
<script>
export default {
  created () {
    this.getMovies()
    document.title = this.$route.name
  },
  data () {
    return {
      activeTab: 'tab1',
      movies: []
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    getMovies () {
      this.$http.get('/api/movie')
        .then(res => {
          console.dir(res.data)
          this.movies = res.data
        })
        .catch(err => {
          this.toastr.error(`${err.message}`, 'ERROR!')
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #7e57c2;
}

.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.content{
  width: 90%;
  margin: 0 auto;
}

.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
}

.footer{
  padding: 20px 0;
  text-align: center;
}
</style>