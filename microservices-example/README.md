# jhipster-microservices-example
Jhipster microservices example 

## Configuration
Create an env file, replace the placeholders and source it before running the application 

```
export SECURITY_OAUTH2_CLIENT_ACCESS_TOKEN_URI="https://{yourOktaDomain}/oauth2/default/v1/token"
export SECURITY_OAUTH2_CLIENT_USER_AUTHORIZATION_URI="https://{yourOktaDomain}/oauth2/default/v1/authorize"
export SECURITY_OAUTH2_RESOURCE_USER_INFO_URI="https://{yourOktaDomain}/oauth2/default/v1/userinfo"
export SECURITY_OAUTH2_CLIENT_CLIENT_ID=<clientId>
export SECURITY_OAUTH2_CLIENT_CLIENT_SECRET=<clientSecret>
```

## Build images
```
bash build-all.sh
```

## Run with docker-compose
```
cd docker-compose
docker-compose up -d
```
