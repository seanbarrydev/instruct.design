---
title: Digital Campaign Workflow
description: Interactive model that illustrates the planning, activation, and management workflow used in digital marketing campaigns
format: Visual Application
faIconClass: ['fas','tablet-alt']
img: workflow-mock.png
alt: person with iPad viewing timeline with graphic icons
artwork:
  image: ../workflow.gif
  alt: animated image of visual campaign model
publishDate: 2017-12-10T12:00:00Z
---

## Company

[Mediabrands](https://www.ipgmediabrands.com/) is a a group of media agencies, including [UM](https://www.umww.com/), [Initiative](https://initiative.com/), [Reprise](https://reprisedigital.com/) and others, that focus on the planning, strategy, and execution of digital marketing campaigns.

## Project

Mediabrands provides a range of services across its various agencies for running digital campaigns of various types and each of its agencies has a specific focus at different stages in a campaign's lifecycle. These stages range from planning, to strategy design, to building and launching the campaign, to drawing optimization insights.
<!--
<artwork :artwork="artwork"></artwork>
-->
The Digital Campaign Workflow is an interactive visual model that illustrates the full workflow across different stages. Users can select specific groups to show or hide, as well as use a navigation menu to shift between different stages of a campaign. In doing so, they're able to evaluate their own responsibilities at different stages, understand what others are responsible for, and ultimately gain a deeper understanding of all moving parts in a digital campaign.

## Tools

- ### **Keynote**
  An initial prototype of the workflow model was created in [Keynote](https://www.apple.com/keynote/) to create a template and organize stages and inputs across a campaign.

- ### **Adobe Illustrator**
  Once the initial prototype was approved by key stakeholders, each stage in the campaign lifecycle was designed on a separate artboard within [Adobe Illustrator](https://www.adobe.com/products/illustrator.html). Layers and shapes were named strategically in order to export artboards as SVG files with appropriate id and class names.

- ### **Bulma**
  [Bulma](https://bulma.io/) is a CSS Flexbox-based framework for designing websites, apps, user interfaces and more. It was used to create the general layout for the interactive model as well as the navigation features.

- ### **Greensock**
  [Greensock](https://greensock.com/) is a JavaScript library for designing responsive animations in websites and apps. It was used to program the interactivity for navigating between different stages in the model.