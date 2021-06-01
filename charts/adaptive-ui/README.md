# Documentation for adaptive-ui chart

Adaptive UI documentation website

## TL;DR

```console
$ helm repo add asee-platform https://registry.see.asseco.com/chartrepo/platform --username [USERNAME] --password [PASSWORD]
$ helm search repo asee-platform/adaptive-ui [--devel]
$ helm install my-release asee-platform/adaptive-ui [--version x.x.x]
```

## Selected Traits

- [Ingress](https://docs.see.asseco.com/platform/devops-kit/charts/traits/ingress/)

## Default Traits

- [Communication](https://docs.see.asseco.com/platform/devops-kit/charts/traits/communication/)
- [Container Registry](https://docs.see.asseco.com/platform/devops-kit/charts/traits/container-registry/)
- [Core](https://docs.see.asseco.com/platform/devops-kit/charts/traits/core/)
- [Dependencies](https://docs.see.asseco.com/platform/devops-kit/charts/traits/dependencies/)
- [Hardware Resources](https://docs.see.asseco.com/platform/devops-kit/charts/traits/hardware-resources/)
- [Rollout Strategy](https://docs.see.asseco.com/platform/devops-kit/charts/traits/rollout-strategy/)
- [Scaling](https://docs.see.asseco.com/platform/devops-kit/charts/traits/scaling/)
- [Scheduling](https://docs.see.asseco.com/platform/devops-kit/charts/traits/scheduling/)
- [Security](https://docs.see.asseco.com/platform/devops-kit/charts/traits/security/)
- [Trusted Certificates](https://docs.see.asseco.com/platform/devops-kit/charts/traits/trusted-certificates/)

## Prerequisites

- Kubernetes 1.13+
- Helm 3.0+
- Container registry / Helm chart repository credentials

## Installing/Upgrading the Chart from Chart Repository

```console
$ helm repo add asee-platform https://registry.see.asseco.com/chartrepo/platform --username [USERNAME] --password [PASSWORD]
```

To install/upgrade the chart with the release name `my-release`:

```console
$ helm upgrade --install my-release asee-platform/adaptive-ui [--version x.x.x]
```

The command deploys adaptive-ui on the Kubernetes cluster in the default configuration. The Parameters section lists the parameters that can be configured during installation.

## Installing/Upgrading the Chart from source

```console
$ helm repo add asee-charts https://registry.see.asseco.com/chartrepo/charts --username [USERNAME] --password [PASSWORD]
```

> As this helm chart relies on common (shared) chart, we have to add it first.

Update helm chart dependencies:

```console
$ helm dependency update
```

To install/upgrade the chart with the release name `my-release`:

```console
$ helm upgrade --install my-release . [--version x.x.x]
```

## Uninstalling the Chart

To uninstall/delete the `my-release` deployment:

```console
$ helm delete my-release
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Service specific variables

The following tables contains the configurable service specific variables of the adaptive-ui chart and their default values.

[Enter service-specific variables below]: Comment
