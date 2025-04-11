# Fourbank - SPI

## About the project
> The system is responsible for managing financial transactions, which serve as the source 
> of funds used in operations such as Pix transfers. Whenever a customer initiates a transaction, 
> the amount is debited from this account. To ensure continuous operation, the system issues 
> notifications when the balance reaches a critical level, indicating the need for a 
> transfer from the current account.

## Project Url:
[Fourbank](https://fourbank-poc.web.app)

## Project Documentation
[Fourbank Doc](https://github.com/jhonatan-costa-deliverit/fourbank-bootstrap-poc/blob/main/src/assets/docs/fourbank-poc-doc.pdf)

## Main technologies used in the project
>* This project was generated with [Node.js](https://nodejs.org) version 22.14.0.
>* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.
>* This project has implemented [Standalone Components](https://v17.angular.io/guide/standalone-components)
>* This project has implemented [Bootstrap](https://getbootstrap.com) version 5.3.5
>* This project has implemented [Bootstrap Icons](https://icons.getbootstrap.com) version 1.11.3
>* This project has implemented [Chart.js](https://www.chartjs.org) version 4.4.8
>* This project has implemented [ng2-charts](https://www.npmjs.com/package/ng2-charts) version 8.0.0
>* This project has implemented [Firebase](https://firebase.google.com/) version 11.4.0

## About ChartJs
>Chart.js provides a set of frequently used chart types, plugins, 
> and customization options. In addition to a reasonable set of built-in chart 
> types, you can use additional community-maintained chart types . On top of that, 
> it’s possible to combine several chart types into a mixed chart 
> (essentially, blending multiple chart types into one on the same canvas).

## About ng2-charts
>ng2-charts is an Angular wrapper for Chart.js, a popular JavaScript charting library. 
> It allows developers to easily integrate responsive and customizable charts 
> (such as line, bar, pie, radar, and more) into Angular applications using simple 
> components and directives.

## Bootstrap componentes
>You can view the available components for using bootstrap and ng-bootstrap by clicking on the links below:
>* [bootstrap components](https://getbootstrap.com/docs/5.3/components)

## About bootstrap
>For standardization, best practices and responsiveness, when developing new pages,
> think about the structure of rows and columns following the grid pattern.

**Example:**

| Grid pattern class | Description                                                                    |
|:-------------------|:-------------------------------------------------------------------------------|
| `.container`       | Container with spacing on the sides (width: 1200px).                           |
| `.container-fluid` | Container without spacing on the sides(width: 100%).                           |
| `.row`             | Single div, must be used as a parent div that will have 1 to 12 col child divs |
| `.col`             | Single div, must be used as a parent div that will have 1 to 12 child divs     | 

>***The pattern shown above in the table shows the structure of the project's html pages, new pages must follow the pattern.***

**Page grid example**

~~~html
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>Page title</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p>First container</p>
    </div>
    <div class="col">
      <p>Second container</p>
    </div>
  </div>
</div>
~~~

## How to clone and setup up the project
> - [x] Clone the project, use de code: `git clone <project-url>` to clone the project.
> - [x] Install npm packages, use de code: `npm i` to install the packages.
> - [x] Run the project, use de code: `npm start` to run the project.

## Development server
> Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Preview app
![image](https://github.com/jhonatan-costa-deliverit/fourbank-bootstrap-poc/blob/main/src/assets/previews/preview-one.png)
![image](https://github.com/jhonatan-costa-deliverit/fourbank-bootstrap-poc/blob/main/src/assets/previews/preview-two.png)
![image](https://github.com/jhonatan-costa-deliverit/fourbank-bootstrap-poc/blob/main/src/assets/previews/preview-three.png)
