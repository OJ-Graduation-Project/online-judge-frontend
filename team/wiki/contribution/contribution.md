
# Contribution
- [Contribution](#contribution)
  * [Folder Structure](#folder-structure)
    + [Assets](#assets)
    + [Components](#components)
    + [Data](#data)
    + [Helpers](#helpers)
    + [Pages](#pages)
  * [Styling](#styling)
    + [Create Your Own Styles](#create-your-own-styles)
    + [Use Styles Components from Material UI](#use-styles-components-from-material-ui)
  * [Contribution guidelines](#contribution-guidelines)

## Folder Structure

```
src/
├── assets
├── components
├── data
├── helpers
└── pages
```

### Assets

Contains files like images, fonts, videos ... 

Assume we want to add use logo image in our project, we may have file structure that looks like:

```
assets/
└── images
    └── logo.svg
```

### Components

Contains **common custom components**  that can be reused multiple times across the project.

Assume we want to create `Header` component we may have file structure that looks like this:

```
components/
└── Header
    ├── index.tsx
    └── styles.module.css
```

```typescript
import React from 'react';

interface HeaderProps {
	prop1: string; //mandatory prop
	prop2?: string; //optional prop
    prop3: (x: string) => void; //method prop
}

const Header : React.FC<HeaderProps> = (
	props: HeaderProps
) => {
  return <div> </div>;
};

export default Header;
```

### Data

Contains dummy data that can be used to populate components.

Assume we want to create users data, we may have file structure that looks like this:

```
data/
└── Users
    └── example.ts
```

`example.ts` 

```typescript
interface User{
    name: string;
    id: number;
    optional?: {};
}

export const UserArr: User[]=  [
    {
        name: "Youssef",
        id: 1,
    },
    {
        name: "Tarek",
        id: 2,
    }
]

export default UserArr;
```

First we defined the blueprint of the data we want to create (Data Model) which is `interface User`

Then we created `UserArr` of type `User[]`

Later on we can use the data we created to populate react component.

### Helpers

Contains helper functions  like password validation, email validation ...

Assume we want to create password validation function, we may have file structure that looks like this:

```
helpers/
└── validators.ts
```

`validators.ts` can contain

```typescript
export const passwordValidation = (value: string) => {
	return value.length() >= 8;
}
```

### Pages

Contains pages in the website.

Assume we want to create contest page, we may have file structure that looks like this:

```
pages/
└── contest
    ├── components
    ├── index.tsx
    └── styles.module.css
```

`components` folder contains components that will be used only in this page.

## Styling

### Create Your Own Styles

Each component/page should have `styles.module.css` file to define local styling of this component.

example of `styles.module.css` file

```css
.title{
    color: black;
}
```

Then you can use this style in your component:

```typescript
import React from "react";
import styles from "./styles.module.css";

const Problem: React.FC = () =>{
    return (
        <h1 className={styles["title"]} ></h1>
    );
}

export default Problem;
```

### Use Styles Components from Material UI

you can use [material ui](https://mui.com) to add icons/styled-components/fonts

## Contribution guidelines

- Branch name of each pull request should be `OJ-#` where `#` corresponds to story id on jira, as example if I'm working on story with id = 1, branch name should be `OJ-1`.

- Each feature story on jira should have one commit corresponding to it. 

  If you have already made multiple commits before pushing your branch, squash the commits to one commit  then push, see [squash.md](../git/squash/squash.md).

- First line of commit message is the title of the commit, it should describe the goal of the commit

- The commit message should also include important modifications made in the commit

- Verbs in the commit message should be in imperative form, example: Add, Implement, Remove ..

  Example commit message of creating user profile page

  ```
  Implement User Profile Page
  
  * Create Dummy User data
  * Create Card Component
  ```

