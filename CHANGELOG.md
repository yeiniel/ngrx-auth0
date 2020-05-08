# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.2.0](https://github.com/yeiniel/ngrx-auth0/compare/v0.1.2...v0.2.0) (2020-05-08)


### Features

* **@yeiniel/ngrx-auth0:** add user profile info to feature state ([b5f4f16](https://github.com/yeiniel/ngrx-auth0/commit/b5f4f161322cd9590b1c5e7e260c2eb0a90b7938))
* **@yeiniel/ngrx-auth0:** make auth service provide profile$ observable ([0541b5d](https://github.com/yeiniel/ngrx-auth0/commit/0541b5d6664ae78a033ea108d8f8d498f4d55ea6))
* **@yeiniel/ngrx-auth0:** make init$ effect pass profile into loginComplete action ([5b88181](https://github.com/yeiniel/ngrx-auth0/commit/5b881811fdab082606d1aa792f57a67323d35710))
* **@yeiniel/ngrx-auth0:** provide a new selector used to get the user profile from the store state ([fa921c1](https://github.com/yeiniel/ngrx-auth0/commit/fa921c15820c34844a8451b666480cf75e0c9926))
* **@yeiniel/ngrx-auth0:** type from auth0 lib used to typecheck module and service constructor ([d1a23ab](https://github.com/yeiniel/ngrx-auth0/commit/d1a23ab587d5b01b247280ba577fbae50359614b))
* **@yeiniel/ngrx-auth0:** update internal loginComplete action to include user profile update ([a156c9d](https://github.com/yeiniel/ngrx-auth0/commit/a156c9da957b1b363c986b42ed3d769d48d37e3f))
* **@yeiniel/ngrx-auth0:** update reducer to handle profile on loginComplete action ([99bfe0e](https://github.com/yeiniel/ngrx-auth0/commit/99bfe0e396bb391871b1def9da651bed49c04a60))

## [0.1.2](https://github.com/yeiniel/ngrx-auth0/compare/v0.1.1...v0.1.2) (2020-04-20)



## [0.1.1](https://github.com/yeiniel/ngrx-auth0/compare/v0.1.0...v0.1.1) (2020-04-20)



# [0.1.0](https://github.com/yeiniel/ngrx-auth0/compare/26689688fd1abc520abffd77d5499c1090646df7...v0.1.0) (2020-04-20)


### Bug Fixes

* **@yeiniel/ngrx-auth0:** fix the auth service and module to fix typing ([f220292](https://github.com/yeiniel/ngrx-auth0/commit/f220292ff43d400f4557c7e10f8af1698e7d573b))
* add missing @auth0/auth0-spa-js dependency ([cc2b855](https://github.com/yeiniel/ngrx-auth0/commit/cc2b85516b1c285754ce902c94131443e249ec53))
* **@yeiniel/ngrx-auth0-example:** add missing import to the app module ([ec88795](https://github.com/yeiniel/ngrx-auth0/commit/ec887958991153a23a561568949026370bc4a720))


### Features

* **@yeiniel/ngrx-auth0:** add a login action to initiate authentication flow ([7740f60](https://github.com/yeiniel/ngrx-auth0/commit/7740f60c7270993e64fe194e59089197ac658bda))
* **@yeiniel/ngrx-auth0:** add a new init action used to signal the initialization of the module ([a060a7e](https://github.com/yeiniel/ngrx-auth0/commit/a060a7e70512003dfeccc77d04b0a3fc368b60e2))
* **@yeiniel/ngrx-auth0:** add a ngrx action used to change the state of isLoggedIn ([1d34df2](https://github.com/yeiniel/ngrx-auth0/commit/1d34df2e8351195dfa96b2ffdf7a8b1e9c3a8c32))
* **@yeiniel/ngrx-auth0:** add an injection token to configure Auth0 client using DI ([6069130](https://github.com/yeiniel/ngrx-auth0/commit/6069130878166b78da6667f77417c66a5c3b186e))
* **@yeiniel/ngrx-auth0:** add initial ngrx/store feature infraestructure ([ab3ec93](https://github.com/yeiniel/ngrx-auth0/commit/ab3ec933cf953eb9fc4ed325f59a247c3029648d))
* **@yeiniel/ngrx-auth0:** add the logout action ([ae6ac32](https://github.com/yeiniel/ngrx-auth0/commit/ae6ac325fa9e7f09a7c9b836c4945da56012baa0))
* **@yeiniel/ngrx-auth0:** implement state reducer ([c96ac54](https://github.com/yeiniel/ngrx-auth0/commit/c96ac542ef3d0b06e2292d7e13223dce75ebc78f))
* **@yeiniel/ngrx-auth0:** implement the auth effects ([da0cf29](https://github.com/yeiniel/ngrx-auth0/commit/da0cf2961dea3a520d359b068245551823c0bc70))
* **@yeiniel/ngrx-auth0:** implement the auth service ([f97ff90](https://github.com/yeiniel/ngrx-auth0/commit/f97ff90ac84852629247d8ac10792e465ee2e58d))
* **@yeiniel/ngrx-auth0:** provide feature selector ([d42b750](https://github.com/yeiniel/ngrx-auth0/commit/d42b750a7fb0cbe51892a9a7ef0955a2f3aadf18))
* **@yeiniel/ngrx-auth0:** provide isLoggedIn selector ([1bd9138](https://github.com/yeiniel/ngrx-auth0/commit/1bd9138b42b6f7a278065cc77805916e0a24f98c))
* **@yeiniel/ngrx-auth0:** update ngrx-auth0 module to pass configuration and setup ngrx effects ([41e4191](https://github.com/yeiniel/ngrx-auth0/commit/41e4191ea7177663df169dd3178cd29afebcb960))
* **@yeiniel/ngrx-auth0-example:** make app dispatch loginAction() when login button clicked ([1ac12a5](https://github.com/yeiniel/ngrx-auth0/commit/1ac12a58b436fea67e30680d59cb406211c200d6))
* **@yeiniel/ngrx-auth0-example:** make app dispatch logoutAction() when logout button clicked ([25a7bbe](https://github.com/yeiniel/ngrx-auth0/commit/25a7bbeef4526ebe139fe377589fb30d76002809))
* **@yeiniel/ngrx-auth0-example:** make app dispatch logoutAction() when logout button clicked ([b846489](https://github.com/yeiniel/ngrx-auth0/commit/b8464898cf810bbacf3a42c9a20515bf0ec05298))
* add an example app ([cb7d2e5](https://github.com/yeiniel/ngrx-auth0/commit/cb7d2e566cb1872f08f216dec7368d1b08ffe4b2))
* add the @yeiniel/ngrx-auth0 library ([2668968](https://github.com/yeiniel/ngrx-auth0/commit/26689688fd1abc520abffd77d5499c1090646df7))
