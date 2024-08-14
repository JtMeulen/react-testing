import { render, screen } from "@testing-library/react";

import { Users } from "./users";

/**
 * Here we are mocking the global fetch method as it is only available in the browser.
 * Alternatively you can use MSW (Mock Service Worker) library: https://mswjs.io/,
 * but this library has compatibility issues with Jest at the moment.
 *
 * Since we have a fetch call in the initial useEffect hook in the component,
 * we are making a state change after the initial render. RTL throws a warning when you make a synchronous query to an element.
 *
 * To solve this issue, we can use the 'act' function from the '@testing-library/react' library, and wrap the render function in it.
 * Alternatively you can use the findBy* queries, which are asynchronous and will wait for the component to finish state updates.
 */

// Helper function to mock fetch
const mockFetch = (response: unknown, success: boolean = true) => {
  global.fetch = jest.fn(async () =>
    Promise.resolve({
      json: async () =>
        success ? Promise.resolve(response) : Promise.reject(),
    })
  ) as jest.Mock;
};

describe("Users", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly", async () => {
    mockFetch([{ name: "John Doe" },
      { name: "Bruce Wayne" },
      { name: "Clark Kent" },]);

    render(<Users />);

    const usersHeadingEl = await screen.findByRole("heading", { level: 1 });
    expect(usersHeadingEl).toBeInTheDocument();
  });

  it("renders the data after fetching", async () => {
    const mockData = [
      { name: "John Doe" },
      { name: "Bruce Wayne" },
      { name: "Clark Kent" },
    ];

    mockFetch(mockData);

    render(<Users />);

    const listitemsEl = await screen.findAllByRole("listitem");
    expect(listitemsEl).toHaveLength(mockData.length);

    listitemsEl.forEach((item, index) => {
      expect(item).toHaveTextContent(mockData[index].name);
    });
  });

  it("renders error message when the fetch fails", async () => {
    mockFetch(null, false);

    render(<Users />);

    const errorMessage = await screen.findByText("Error fetching users");
    expect(errorMessage).toBeInTheDocument();
  });
});
