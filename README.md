# Angular Tutorial EclipseCon Europe 2017

## Exercise 4 solution

This is the final state of the application. Congrats :)


## Preparations

1. **Install Java 8 or higher**

   If you don't have Java already installed, please download and install Java 
   according to the guidelines 
   [here](https://java.com/en/download/help/download_options.xml). 

2. **Install Node.js >= 6.x.x**

   Download and install Node.js >= 6.x.x from [here](https://nodejs.org/en/download/). 
   Follow the instructions for your OS (note that there are separate sections
   for installing Node.js via a package manager). If you use the tarball for
   installing Node.js, follow the instructions [here](http://www.thegeekstuff.com/2015/10/install-nodejs-npm-linux/).
   Once you finished the installation you can verify it by opening up a terminal 
                                                                                                                                                                                                                                                                                                                                                     and typing `node -v`.

3. **Install Angular CLI**

   Node.js ships with a package management tool called npm. 
   [Install the Angular CLI tooling](https://github.com/angular/angular-cli#installation)
   via npm. You can verify that the installation succeeded by opening up a 
   terminal and typing the command `ng`.

4. **Install Chrome**

   Download and install a recent version of [Chrome](https://www.google.com/chrome/index.html).
   We'll be using Chrome for testing the application throughout the tutorial.

5. **Download the provided Eclipse instance**

   To make sure all participants use the same tooling, we provide already 
   configured Eclipse instances
   [ready for download](https://drive.google.com/open?id=0B0on8LO2mrLDQUpUaGMteTFERTg).
   Pick the one suitable for your OS from the provided subfolders.
   Once the download is finished, extract the archive to a folder of your choice and start Eclipse
   If you are using a 32-bit OS, please let us know and we'll provide 32-bit versions as well. 
   
   **Windows users**: pay attention to the maximal length of a path when extracting.
   
   **macOS users**: Since the provided Eclipse instance is unsigned you need to 
   open it via the context-menu.
   
6. **Configure Eclipse**

   Once Eclipse has started, please set the following option: 
   
   *Window → Preferences → General → Workspace → Refresh using native hooks 
   or polling*

7. **Download and import the first example**

   Download the TutorialExamples.zip [from the tutorial folder](https://drive.google.com/open?id=0B0on8LO2mrLDQUpUaGMteTFERTg).
   This is an archive containing all code that is used throughout the tutorial 
   as separate Eclipse projects. Extract the archive to a folder of your choice. 
   Once finished, extract the `angular-tutorial-econ-2017-exercise-1.zip` and 
   import it into your Eclipse instance by selecting 
   
   *File → Existing Projects into Workspace → Select root directory*
   
   and selecting the folder where you extracted `angular-tutorial-econ-2017-exercise-1.zip`
   to.  Make sure that you do **NOT**
   
   * select the *Select archive* file 
   * check the option *Copy projects into workspace*
   
   Confirm by clicking *Finish*.

8. **Run**

   Open up the context menu of the project by right-clicking it and selecting:
   
   *Run As → ng test*
   
   Chrome should open and display that a test case has failed.
   
   To cancel test execution, select the terminal view that has been opened during
   test execution and enter *Ctrl + C*. Closing the browser will not work, as 
   the tests keep running in the background.

9. **Download Slides**

   Download the slides [from the Tutorial folder](https://drive.google.com/open?id=0B0on8LO2mrLDQUpUaGMteTFERTg).
   Note that the slides are subject to change.

## Running

For a complete overview of the Angular CLI usage, see [here](https://github.com/angular/angular-cli#usage).

### Dev server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Help
Questions, issues or any feedback? Please open an issue. We are ready to help!
