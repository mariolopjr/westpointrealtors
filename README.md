# West Point Real Estate GatsbyJS Frontend

## Build image
```docker build --build-arg FA_TOKEN --build-arg GMAP_KEY --build-arg CACHE_DATE="$(date)" -t registry.gitlab.com/tmwebdev/westpoint .```

## Push image to registry
```docker push registry.gitlab.com/tmwebdev/westpoint```
