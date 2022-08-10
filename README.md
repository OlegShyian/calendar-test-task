# Seaside Web Application

## Overview

### Main Technologies, Frameworks and Libraries
- Package manager: **NPM**
- Application framework: **ReactJS**
- State managing: **Redux**
- Styles: **SCSS**
- Code quality: **Prettier**

---

## Project Setup

### Local Development

#### 1. Install required tools
To run the app locally, you have to install:

1. NodeJS + NPM - https://nodejs.org/en/

#### 2. Run application locally
1. Clone the repo:
```
git clone https://github.com/OlegTehno/calendar-test-task.git
```

2. Open the repo folder:
```
cd calendar-test-task
```

3. Install dependencies:
```
npm install
```

4. Add `.env` to the root folder with required environment variables:
- **NODE_ENV** - project environment `production`, `development` or `staging`.

If you need to see all config properties with default values, please view: `./src/config/appConfig.ts`.

5. Run Web Application:
```
npm run start
```
App will start on port `3000`.