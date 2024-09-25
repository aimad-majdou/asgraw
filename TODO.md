# ⴰⵙⴳⵔⴰⵡ [asgraw]

## TODO

- [x] Deploy the app (vercel)
- [x] Tidy up build process
- [x] Set up a database (neon postgresql)
- [x] Set up OAuth
- [x] Scaffold basic ui
- [x] Attach db to UI
- [x] Implement authentication (w/ next-auth)
- [ ] "Taints" (server only / DAO)
- [ ] Routing/new post page (parallel route)
- [ ] Error management (w/ Sentry)
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)
- [ ] Improve UI/UX
- [ ] Add internationalization
- [ ] Write unit and integration tests (w/ vitest)
- [ ] Write e2e tests (w/ playwright)
- [ ] Add CI/CD (w/ GitHub Actions)
- [ ] (Optional) Typesafe Envs (w/ t3-env)

## upfront design process

- [ ] Home page
  - path: `'/'`
  - data:
    - [ ] list of topics
    - [ ] list of posts
- [ ] View a topic
  - path: `'/topics/[slug]'`
  - data:
    - [ ] single topic
    - [ ] list of posts
- [ ] View a post
  - path: `'/topics/[slug]/posts/[postId]'`
  - data:
    - [ ] single post
    - [ ] list of comments
- [ ] Create a post
  - path: '/new'
  - data:
    - [ ] list of topics
