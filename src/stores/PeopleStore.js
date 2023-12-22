import { defineStore } from "pinia";

export const usePeopleStore = defineStore("people", {
    state: () => ({
        people: [],
        loading: true
    }),
    actions: {
        async getPeople(listOfPeople) {
            this.setLoading(true);
            this.people = [];
            const fetchPromises = listOfPeople.map(API_PEOPLE_URL =>
                fetch(API_PEOPLE_URL)
                    .then(res => res.json())
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    })
            );

            try {
                const responses = await Promise.all(fetchPromises);
                this.people = responses.filter(data => data);
                this.setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                this.setLoading(false);
            }
        },
        setLoading(value) {
            this.loading = value;
        }
    }
});
