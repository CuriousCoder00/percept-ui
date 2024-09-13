## How to contribute

There are many ways to contribute to the project. Code is just one possible means of contribution.
- **Feedback.** : Tell us what we're doing well or where we can improve.
- **Report.** : Create issues with bug reports so we can make Percept UI even better.

## Working on your first Pull Request?

There are a lot of great resources on creating a good pull request. We've included a few below, but don't be shy—we appreciate all contributions and are happy to help those who are willing to help us!

- [How to Contribute to a Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Preparing a Pull Request

[Pull Requests](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) are always welcome, but before working on a large change, it is best to open an issue first to discuss it with maintainers.

A good PR is small, focuses on a single feature or improvement, and clearly communicates the problem it solves. Try not to include more than one issue in a single PR. It's much easier for us to review multiple small pull requests than one that is large and unwieldy.

1. [Fork the repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo).

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/percept-ui.git
cd percept-ui
git remote add upstream https://github.com/CuriousCoder00/percept-ui.git
```

3. Synchronize your local `main` branch with the upstream remote:

```sh
git checkout main
git pull upstream main
```

4. Install dependencies with [npm](https://www.npmjs.com/):

```sh
npm run docs:install
npm run package:install
```


5. Create a new branch related to your PR:

```sh
git checkout -b my-bug-fix
```

6. Make changes, then commit and push to your forked repository:

```sh
git push -u origin HEAD
```
7. Go to [the repository](https://github.com/CuriousCoder00/percept-ui/pulls) and [make a Pull Request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

8. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

### Development

Node version > = 20

```bash
# install dependencies as whole ( docs + package )
npm run install
```

or

```bash
# install dependencies individually for both directories
npm run docs:install
npm run package:install
```

 or

```bash
# install dependencies normally for docs
cd docs
npm install

# install dependencies normally for package
cd package
npm install
```

To run the project locally
```bash
# To run docs - uses nextra + next.js
npm run docs

# To run package - uses storybook + react
npm run package
```

Run manually with usual/normal commands
```bash
# To run docs - uses nextra + next.js
cd docs
npm run dev

# To run package - uses storybook + react
cd package
npm run dev
```

> After staring the development server:
- To view the docs navigate to `http://localhost:3000/` and it if doesn't work navigate to `http://localhost:3000/docs/getting-started`.
- To view the storybook playground to play with components navigate to `http://localhost:6006/`.

Make your changes and check that they resolve the problem.

Lastly, run `npm run build` to ensure that the build runs successfully before submitting the pull request.