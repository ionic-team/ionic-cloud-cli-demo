# Ionic Cloud CLI + GitHub Actions

A demo repository with GitHub Actions workflows for the [Ionic Cloud CLI](https://ionic.io/docs/appflow/cli/overview) from [Appflow](https://ionic.io/appflow).

## Get started
To use these examples, an Appflow account with a [Scale or Enterprise plan](https://ionic.io/appflow/pricing) is required. Set your [Appflow personal access token](https://ionic.io/docs/appflow/personal-access-tokens) as a GitHub Secret as 'IONIC_TOKEN' in your project repository. Update the environment variables to use your own App ID and signing certificate and destination names.

## Android examples

- [Debug build and upload APK](https://github.com/ceceliacreates/ionic-cloud-cli-demo/blob/main/.github/workflows/android-debug-build.yml)
- [Release build and upload AAB](https://github.com/ceceliacreates/ionic-cloud-cli-demo/blob/main/.github/workflows/android-release-build.yml)
- [Release build, deploy to Google Play Store, upload AAB](https://github.com/ceceliacreates/ionic-cloud-cli-demo/blob/main/.github/workflows/android-deploy.yml)

## TODO: iOS Examples
