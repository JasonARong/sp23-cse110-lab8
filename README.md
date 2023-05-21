# Lab 8 
## Check Your Understanding
1. Automated test will be best fitted within a github action, because the github action can automatically run the tests every time you push your changes to the repo. As a part of the CI/CD pipeline, github action ensures continuous testing, and detect issues early. Option 2 is manually testing which cannot replace automated testing, and option 3 does makes detect errors early difficult.
2. No, E2E is for emulating user actions from start to finish
3. No, the purpose of unit testing is to make sure individual parts of the code work as expected. However, testing the “message” feature is tetsing on a application/feature level that involves many small individual parts. Hence, it is better to use E2E instead of unit testing in this case.
4. Yes, testing max message length is a small and confined feature that does not involve many moving parts and won't interact with other features. Thus, using a unit test for such small scale individual functionality is a good choice.
