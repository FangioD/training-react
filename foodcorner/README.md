# Exercise 1: Create an easy application that shows some random trending recipes

## Step 0

In order to start with react, nodejs should be installed.
Write the following code in your favorite terminal to create your first ever react application:

```
npx create-react-app appname
```

This will create your first ever react application.
In order to view it in the browser, navigate to your newly created folder and execute:

```
npm start
```

## Step 1

Clean-up the src-folder.
Delete `App.css`, `App.test.js`, `logo.svg`, `reportWebVitals.js`, `setupTests.js`.
Replace the content inside the div of `App.js` to just a header for now.
Remove unused code and imports inside `index.js`.

Check if your app still works.

Create 2 folders, `components` and `pages`.
Inside components, create a file `Trending.jsx` and add basic react code.
Inside pages, create a file `Home.jsx` and `Pages.jsx` with also basic code.
(The file `Pages.jsx` is actually unnecessary for this project in particular but I think it is good practice in order to keep your `App.js` as clean as possible.

`App.js` should use `Pages.jsx` which uses `Home.jsx` which uses `Trending.jsx`.

In the end, your browser should show a screen with only the content inside `Trending.jsx` and the header in `App.js`.

## Step 2

Make an account on https://spoonacular.com/food-api.
Make a `.env` file in the root of your folder and add it to `.gitignore`.
Add the following inside your `.env` file.

```
REACT_APP_API_KEY=your-api-key
```

After creating the `.env` file you must restart the server with `npm start`.

Now you can fetch data inside `Trending.jsx` by using the fetch-api.
Create a function that fetches 9 random recipes and prints their name on the screen.
Make sure that the information is shown when **reloaded** and save it in a **state**.
Also limit your API calls by setting and checking localStorage before fetching.

In the end, your browser should show a screen with your 9 recipe titles and refreshing won't make it fetch data.

## Step 3

Update the layout, therefore use https://splidejs.com/integration/react-splide/ and update `index.css` with the one in this repo.
Go to Google fonts and search for `MontSerrat`(medium looks the best) and add the style-tag to the `index.html`.

Below code shows the structure to mimmick the lay-out as in the example. **Note:** this is pseudo-code, `wrapper` and `card` do not exist but can be created using a `div` with the class given in the `index.css`.

```
  <wrapper>
      <h3>Trending</h3>
      <Splide>
            <!-- for each recipe>
            <SplideSlide>
              <card>
                <p>title</p>
                <img/>
              </card>
              <gradient/>
            </SplideSlide>
      </Splide>
   </wrapper>
```

If you managed to do the above structure, you will see that it is still not exactly what we want. Search the documentation of Splide for edit options.
