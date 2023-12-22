import { createPinia } from 'pinia';
import { useStarshipStore } from '../stores/StarshipStore';

describe('useStarshipStore', () => {
  let store;

  beforeEach(() => {
    const pinia = createPinia();
    store = useStarshipStore(pinia);
  });


  it('calculates page count correctly', () => {
    store.count = 30;
    store.getPageCount();
    expect(store.pageCount).toBe(3);
  });

  it('moves to a specific page', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ results: [], count: 10 }) }));

    store.page = 2;
    await store.moveToPageByNumber(2);

    expect(store.page).toBe(2);

    global.fetch.mockClear();
    delete global.fetch;
  });
});
