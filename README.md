# Flickr React App

This uses the Flickr public api
```
http://api.flickr.com/services/feeds/photos_public.gne
```

[Live Demo 1 - Heroku](https://om-flickr-react-app.herokuapp.com/)

[Live Demo 2 - Netlify](https://flickr-react-app.netlify.app/)

*note to myself* - deployed using cb86 account for heroku

## Deployment

Followed this [guide](https://github.com/mars/create-react-app-buildpack) to deploy a create-react-app to heroku.

## Outcomes

1. The app can locally run and deployed.

2. Used React and Context for state management.

3. Used ReactCSSTransitionGroup for transitions.

4. Can fetch images from the flickr API and used the `tags` query parameter to search the query, and display the results.

5. Designed and implemented a responive web app.

## Known Issues

The api is blocked by CORS. Need to download a [chrome extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf) to get around this.

## Other possible features

1. Photo editor + download

2. Social sharing options
