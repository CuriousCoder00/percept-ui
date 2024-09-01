# Percept-UI Documentation

## Introduction

Welcome to **Percept-UI**, a comprehensive React component library designed to enhance your web applications with high-quality, accessible, and customizable UI components. Whether you're building a simple website or a complex web application, Percept-UI offers a variety of components to meet your needs.

## Why Percept-UI?

- **Customizable**: Easily adapt the components to fit your design requirements.
- **Accessible**: Built with accessibility in mind to ensure your application is usable by everyone.
- **Lightweight**: Focused on performance, Percept-UI components are optimized to load quickly.
- **Well-documented**: Comprehensive documentation to help you integrate components seamlessly.

<h1>An open-source component library optimized for fast development, easy maintenance, and accessibility.</h1>

## Quickstart

**The easiest way to get started with Percept UI is by installing it.**

```code

npm install percept-ui

```

## Documentation

For full documentation, visit [percept-ui.vercel.app/](https://percept-ui.vercel.app/).

## Community

Join our community to get help, share your knowledge, and stay updated on the latest developments.

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
cd percept-ui/package
git remote add upstream https://github.com/CuriousCoder00/percept-ui.git
```

3. Synchronize your local `main` branch with the upstream remote:

```sh
git checkout develop
git pull upstream develop
```

4. Install dependencies with [npm](https://www.npmjs.com/):

```sh
npm install
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

This repo uses storybook 
Node version > = 20

```bash
# install dependencies
npm install

# start Storybook and see examples in the browser
npm run dev
```

After staring the development server, navigate to `http://localhost:6006/` to view the storybook.

Make your changes and check that they resolve the problem.

Lastly, run `npm run build` to ensure that the build runs successfully before submitting the pull request.