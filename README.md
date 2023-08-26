# Apify Scraper - DMP Clients

This project involves creating an Apify actor to scrape client information from a DMP website and convert it into JSON format. The actor is written in JavaScript and uses the Crawlee library for web crawling, along with your choice of web scraping technology: Cheerio, Puppeteer, or Playwright.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Configuration ](#configuration)
- [Legal and Ethical Considerations](#legal-and-ethical-considerations)

## Project Overview

Web crawling is the process of automatically navigating through websites and systematically fetching data from web pages. It's a fundamental technique used in web scraping, search engines, data mining, and various other applications that require extracting information from the internet. Web crawling involves a program, often referred to as a "crawler," "spider," or "bot," traversing through a website's structure to gather data for various purposes.

The objective of this project is to create an Apify actor that automates the process of extracting client information from a DMP website. The extracted data is then converted into JSON format for further processing or analysis.

### Vocabulary
this part is to explain the tasks vocabulary:
- Apify Actor: a JavaScript script that defines a set of instructions to perform specific tasks, such as navigating through web pages, extracting data, and processing the results.
- Crawlee:  a library that provides tools and functionalities for web crawling and data extraction. It simplifies the process of navigating through web pages, interacting with elements, and extracting information. Crawlee is often used within Apify Actors to facilitate web scraping tasks.

## Technologies

- Apify: The Apify platform is used to create and manage the actor.
- Crawlee: Crawlee is a library employed for web crawling and data extraction.
- Puppeteer: A powerful library for controlling headless Chrome or Chromium browsers.
- NodeJS: Version 20
- JavaScript: The programming language used for writing the actor script.
- Git: Version control system for tracking code changes and collaborating with others.

## Setup

1. Clone this repository to your local machine.
2. Install the required dependencies using npm or yarn:

## Usage

1. Configure the Apify actor on the Apify platform, providing the necessary input parameters (e.g., starting URL, scraping options).
2. Run the actor on the Apify platform.
3. The actor will navigate the DMP website, scrape client information, and generate a JSON output.

## Code Structure

- `main.js`: The main script containing the Apify actor logic.
- `scraping.js`: This module contains the web scraping logic using the chosen technology (Cheerio, Puppeteer, or Playwright).
- `utils.js`: Utility functions for data processing and JSON conversion.
## Configuration
To run this project you need to provide an env.yamn file as env.example.yaml, this a fields explination
## Legal and Ethical Considerations

When scraping websites, ensure that you are following legal and ethical guidelines. Review the terms of use of the website you are scraping and ensure compliance. Avoid sending too many requests in a short period to prevent overloading the server. Be respectful and responsible in your scraping activities.

---

For more information about Apify, Crawlee, and web scraping with the chosen technology, refer to the provided documentation links.

For any questions or assistance, contact [your-email@example.com].