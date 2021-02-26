---
title: AIGA Unidos
description: Event page for the AIGA multi-chapter collaboration's first annual Hispanic Heritage Talks 2020. A series of virtual events that celebrate the lives, work, and stories of creatives with a Latinx and Hispanic cultural heritage.
skills: Design & Development
image: /assets/img/projects/unidos-thumbnail-1.jpg
date: 2021-01-20
tags:
  - design-projects
  - design-feat
layout: layouts/design-projects.njk
webLink: https://aigaunidos.com/ 
githubLink: https://github.com/ximenavf92/aiga-unidos
---

Between the months of September and October of 2020 I had the opportunity to work with an amazing group of [AIGA](https://www.aiga.org/) leaders form 14 chapters across the country. Reina Castellanos (Orlando Chapter), Dio Jensen (Atlanta Chapter), and yours truly (San Antonio Chapter) co-lead this multi-chapter collaboration to create a space that empowers and celebrates the lives, work, stories, and needs of creatives with a Latinx and Hispanic cultural heritage.

![AIGA Unidos' website header](/assets/img/projects/unidos-header.jpg)

For our kick-off event, we organized a series of virtual talks for Hispanic Heritage Month from September 15th - October 15th with over 40 speakers from the United States and Latin America. This idea came to life pretty quickly as there was a need for this space in the community and a lot of excitement from chapter leaders.

![AIGA Unidos' website header](/assets/img/projects/unidos-hht.jpg)

We had to move quickly and with so many chapters involved we needed one site that gave an overview of who we are and what we are trying to do as well as a schedule to all of the talks with their respective registrations links. I had the opportunity to design and develop this site in less than a month to get out promotional efforts of the ground.

![AIGA Unidos' website header](/assets/img/projects/unidos-onespeaker.jpg)

We kept the design simple to highlight the colorful brand developed by Reina Castellanos from AIGA Orlando. After a few quick wireframes and Adobe XD mockups it was coding time, clock was ticking. We needed something fast and simple with an easy workflow that could handle quick updates to design and content as we working simultaneously with the event planning team.

![AIGA Unidos' website header](/assets/img/projects/unidos-speakers.jpg)

It was a clear choice, we would be hosting with [Netlify](https://www.netlify.com/) for a quick and simple deploy workflow using git and GitHub as our version control. There was no need to deal with WordPress installs and plugins, we just needed something up quickly. [Eleventy](https://www.11ty.dev/) to the rescue. [Zach Leatherman's](https://twitter.com/zachleat) static site generator is zero-config yet flexible and with a powerful data model behind it. With 11ty we were able to quickly create templates using [Nunjucks](https://mozilla.github.io/nunjucks/templating.html), JSON and Markdown files to quickly populate the site with event and speaker info as it became available. 

Thanks to [Netlify's](https://netlify.com/) simple CLI deploy features we were up and running in no time and ready for the upcoming *chisme* with the amazing speaker lineup and chapter leaders.
