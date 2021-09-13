# CYPRESS_FRAMEWORK

Complete cypress framework

To run:

npm test

Jenkins shell script to run with cypress dashboard:

npm install
npm test

Jenkins shell script to run with browserstack:

npm install
npx browserstack-cypress run --sync -u ${BROWSERSTACK_USERNAME} -k ${BROWSERSTACK_ACCESS_KEY} --build-name ${BROWSERSTACK_BUILD_NAME}
