import { createPinia } from 'pinia';
import { useStarshipStore } from '../stores/StarshipStore';

describe('useStarshipStore', () => {
  let store;

  beforeEach(() => {
    const pinia = createPinia();
    store = useStarshipStore(pinia);
  });

  it('should set loading state to true when fetching starships', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ results: [], count: 0 }) }));

    await store.getStarships();

    expect(store.loading).toBe(true);
  });

  it('should set page count based on count', () => {
    store.count = 25;
    store.getPageCount();

    expect(store.pageCount).toBe(3);
  });

  it('should move to a specified page and fetch starships', () => {
    store.getStarships = jest.fn(); // Mock the getStarships method
    store.moveToPageByNumber(3);

    expect(store.page).toBe(3);
    expect(store.getStarships).toHaveBeenCalled();
  });
});

