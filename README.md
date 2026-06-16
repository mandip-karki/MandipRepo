This repo is dedicated purply to frontend.

I will be using Angular/Typescript to create front end.

Steps for ng to host automatically:

  1) Open [Path]\PersonalWebSite in Visual Studio Code
  2) Open Terminal -> New Terminal
  3) ng serv --open [This should host the site locally at localhost:4200]
  4) ng build
  5) Access the localhost:4200, to see the site.

Note: Use ng build --watch to make changes to the files to render the frontend automatically without having to call ng build everytime for changes.


Using IIS to host:

  1) Open [Path]\PersonalWebSite in Visual Studio Code
  2) Do a ng build
  5) check if static pages under PersonalWebSite\dist\PersonalWebSite\browser are created
  4) Make sure IIS is turned on in windows feature.
  5) Make a new website and select a port.
  4) point to folder [Path]/PersonalWebSite\dist\PersonalWebSite\browser
  5) After configuring ISS website, point to [Path]/PersonalWebSite\dist\PersonalWebSite\browser
  6) Access the localhost:[port], to see the site.

Resoning to host website using IIS, is I want to use .net for backend on another port, [REPO: DotNetService].
Another port for [REPO: PythonApiService], where .net can commicate to it for heavy lifting of AI procedures and python libraries.

Database wise, .net will handel connecting to it and storing data if needed.


