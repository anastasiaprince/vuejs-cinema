import Vue from 'vue';
import './style.scss';
new Vue({
	el: '#app',
	components: {
		'movie-list': {
			template: `<div id="movie-list">
							<div v-for="movie in movies" class="movie">{{ movie.title }}</div>
						</div>`,
			data() {
				return {
					movies: [
						{ title: 'A League of Their Own' },
						{ title: 'Fried Green Tomatoes' },
						{ title: 'Thelma & Louise' }
					]
				};
			}
		},
		'movie-filter': {
			template: `<div id="movie-filter">
							<h2>Filter results</h2>
						</div>`
		}
	}
});