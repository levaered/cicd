import { defineStore } from "pinia";

export const useStarshipStore = defineStore("straships", {
    state: () => ({
        API_STARSHIPS_URL: 'https://swapi.dev/api/starships/?page=',
        starships: [],
        count: 0,
        loading: true,
        pageCount: 0,
        page: 1
    }),
    actions: {
        async getStarships() {
            this.setLoading(true);
            fetch(this.API_STARSHIPS_URL + this.page)
                .then(res => res.json())
                .then(data => {
                    this.starships = data.results;
                    this.count = data.count;
                    this.setLoading(false);
                    this.getPageCount(this.count);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    this.setLoading(false);
                });
        },
        setLoading(value) {
            this.loading = value;
        },
        getPageCount(){
            this.pageCount = Math. ceil(this.count / 10)
        },
        moveToPageByNumber(index){
            this.page = index;
            this.getStarships();
        },
    }
});
