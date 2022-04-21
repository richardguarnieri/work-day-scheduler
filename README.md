<!-- This template was created following The Markdown Guide - https://www.markdownguide.org/ -->

<!-- If you are editing this README.md on VS Code, please highlight and replace the following keywords enclosed in backticks (``) using:
* MacOS: CMD + Shift + L
* Windows: CRTL + Shift + L

GitHub Username: `richardguarnieri`
GitHub Repository: `work-day-scheduler`
Your Name: `Richard Guarnieri`
Email: `richard.gm@outlook.com`
LinkedIn Username: `rguarnieri`
Twitter Username: `ric_guarnieri`
Project Title: `Work Day Scheduler`
Project Description: `A simple calendar app for scheduling your work day!`
-->

<!-- Please also update the following links -->
[logo]: ./img/logo.png
[application-image]: ./img/app-image.png
[application-url]: https://richardguarnieri.github.io/work-day-scheduler/

<div id="home"><div> 

<!-- Badges / Shields -->
<!-- These were created using https://shields.io/ - feel free to replace / create yours by modifying links below: -->

<div align="center">
    <a href="https://github.com/richardguarnieri/work-day-scheduler/graphs/contributors">
        <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/richardguarnieri/work-day-scheduler?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/work-day-scheduler/network/members">
        <img alt="GitHub forks" src="https://img.shields.io/github/forks/richardguarnieri/work-day-scheduler?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/work-day-scheduler/stargazers">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/richardguarnieri/work-day-scheduler?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/work-day-scheduler/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/richardguarnieri/work-day-scheduler?style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/work-day-scheduler/blob/main/LICENSE">
        <img alt="GitHub license" src="https://img.shields.io/github/license/richardguarnieri/work-day-scheduler?label=license&style=for-the-badge">
    <a>
     <a href="https://github.com/richardguarnieri/work-day-scheduler/commits/main">
        <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/richardguarnieri/work-day-scheduler?style=for-the-badge">
    <a>
    <a href="https://www.linkedin.com/in/rguarnieri/">
        <img alt="LinkedIn shield" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555">
    <a>
</div>
<br>


<!-- Header -->

<div align="center">
    <a href="https://github.com/richardguarnieri/work-day-scheduler">
        <img src="./img/logo.png" alt="Logo" width="300" height="auto">
    </a>
    <h1 align="center">Work Day Scheduler</h1>
    <div>
        A simple calendar app for scheduling your work day!
        <br>
        <a href="https://github.com/richardguarnieri/work-day-scheduler">
            <strong>Explore Documentation</strong>
        </a>
        <br>
        <br>
        <a href="https://github.com/richardguarnieri/work-day-scheduler">View Demo</a>
        ·
        <a href="https://github.com/richardguarnieri/work-day-scheduler/issues">Report Bug / Request Feature</a>
    </div>
</div>
<br>


<!-- Table of Contents -->
## Table of Contents

* [The Project](#the-project)
    * [Technology Stack](#technology-stack)
* [How to Use](#how-to-use)
    * [Prerequisites](#prerequisites)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#handshake-contact)
* [Miscellaneous](#miscellaneous)
    * [User Story](#user-story)
    * [Pseudocode](#pseudocode)
<br>


<!-- The Project -->
## The Project

[![Application Image][application-image]][application-url]

In this deployed responsive application you will find a simple calendar application that allows a user to save events for each standard working hour of the day.

The application runs in the browser and feature dynamically updated HTML and CSS powered by **native** JavaScript.

<p align="right"> - <a href="#home">Return to Home</a></p>

### Technology Stack

* [HTML](https://html.spec.whatwg.org/)
* [CSS](https://www.w3.org/TR/CSS/#css)
* [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- How to Use -->
## How to Use

This application shows a calendar that displays standard working hours of the day, which is between 8:00 a.m. and 5:00 p.m.

At the top of the page, the current date is displayed (this comes from JavaScript's Date object)

There are a total of 10 time-blocks, each colored differently depending if the hour already passed (gray), if it's the current hour (red) or future hour (green).

Each time-block is made up of a textarea HTML element, which provides a way for users to input data.

There's a save button on the far right of the time-block, allowing users to save the input in their local storage.

As the data is saved on the local storage, it remains there throughout sessions or until user clears the data.

_For more examples, please refer to the [Documentation][documentation-url]._

<p align="right"> - <a href="#home">Return to Home</a></p>

### Prerequisites

Only a web brower is required to run the application.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contribuiting -->
## Contributing

Contributions are much welcomed! If you have suggestions to make this application better, please fork the repo and create a pull request. 

You can also open an issue [here][github-issues-url] and tag it with the **"enhancement"** label.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- License -->
## License

This project is licensed under the terms of the MIT license. 

See `LICENSE` for more information.

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Contact -->
## Contact

Richard Guarnieri: richard.gm@outlook.com · LinkedIn: [rguarnieri][linkedin-url] · Twitter: [@ric_guarnieri][twitter-url]

Application URL: [https://richardguarnieri.github.io/work-day-scheduler/][application-url]

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- Miscellaneous -->
## Miscellaneous
### User Story
```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
### Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

<p align="right"> - <a href="#home">Return to Home</a></p>


<!-- References, Links and Images -->
<!-- Badges / Shields Styles -->
[github-contributors-shield]: https://img.shields.io/github/contributors/richardguarnieri/work-day-scheduler?style=for-the-badge
[github-forks-shield]: https://img.shields.io/github/forks/richardguarnieri/work-day-scheduler?style=for-the-badge
[github-stars-shield]: https://img.shields.io/github/stars/richardguarnieri/work-day-scheduler?style=for-the-badge
[github-issues-shield]: https://img.shields.io/github/issues/richardguarnieri/work-day-scheduler?style=for-the-badge
[github-license-shield]: https://img.shields.io/github/license/richardguarnieri/work-day-scheduler?style=for-the-badge
[github-last-commit-shield]: https://img.shields.io/github/last-commit/richardguarnieri/work-day-scheduler?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Badges / Shields URL -->
[github-contributors-url]: https://github.com/richardguarnieri/work-day-scheduler/graphs/contributors
[github-forks-url]: https://github.com/richardguarnieri/work-day-scheduler/network/members
[github-stars-url]: https://github.com/richardguarnieri/work-day-scheduler/stargazers
[github-issues-url]: https://github.com/richardguarnieri/work-day-scheduler/issues
[github-license-url]: https://github.com/richardguarnieri/work-day-scheduler/blob/main/LICENSE
[linkedin-url]: https://linkedin.com/in/rguarnieri

<!-- Non Badge / Shield Reference Links -->
[documentation-url]: https://github.com/richardguarnieri/work-day-scheduler
[twitter-url]: https://twitter.com/ric_guarnieri