# Employee Directory

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/ramonpbarros/)

> React applications let user view his entire employee directory at once so that he can have quick access to their information.

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## General info

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Screenshots

![Example](/public/img/project.png)

## Technologies

- JavaScript
- CSS 3
- HTML 5
- React
- Randomuser API

## Setup

This application runs in the browser. Nothing needs to be installed except for your default browser.

- Repository can be found here: [GitHub](https://github.com/ramonpbarros/employee-directory) Check out the code!

## Code Examples

    import axios from "axios";
    const BASEURL = "https://randomuser.me/api/?results=300&nat=us";

    export default {
      getEmployees: function () {
      return axios.get(BASEURL);
      },
    };

## Features

List of features:

- Search employees by name.

To-do list:

- Better UI.
- Sort by age.

## Status

Project is: _in progress_

- Make sure to check the application [here](http://ramonbarros.me/employee-directory/).

## Contact

Created by [@ramonpbarros](https://ramonbarros.me/) - feel free to contact me!
