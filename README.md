
![Logo]([https://www.vhv.rs/dpng/d/498-4989799_pokemon-pokeball-transparent-pokmon-hd-png-download.png](https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_06/1670529/pokemon-te-main-210205.jpg)
# Pokédex

## About The Project

This repository contains a pokédex app made with React Native cli.

To run the app on your local machine, you must first make sure you have an React Native development environment set up. You can find instructions on how to do this in the React Native documentation.





## Features

- [Add Pokemon](https://github.com/OscarDRT/react-native-pokedex/blob/main/images/AddPokemon.png)

- [Counter](https://github.com/OscarDRT/react-native-pokedex/blob/main/images/Counter.png)

- [Detail Pokemon](https://github.com/OscarDRT/react-native-pokedex/blob/main/images/DetailPokemon.png)

- [Edit Profile](https://github.com/OscarDRT/react-native-pokedex/blob/main/images/EditProfile.png)

- [Pokedex](https://github.com/OscarDRT/react-native-pokedex/blob/main/images/Pokedex.png)

- [Profile](https://github.com/OscarDRT/react-native-pokedex/blob/main/images/Profile.png)













## Built With

- [Redux](https://redux.js.org/) - State management library for JavaScript applications.
- [React Navigation](https://reactnavigation.org/) - Library for navigation between screens in React Native applications.
- [Axios](https://axios-http.com/) - Library for making HTTP requests.
- [FlashList](https://shopify.github.io/flash-list/) - Fast & performant React Native list.
- [Restyle](https://github.com/Shopify/restyle) - The Restyle library provides a type-enforced system for building UI components in React Native with TypeScript. It's a library for building UI libraries, with themability as the core focus.

These are just some of the libraries and tools that have been used in this project. You can find a more complete list of dependencies in the package.json file in the repository.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file(Exclusive variables for testing).

`API_URL`=`https://pokeapi.co/api/v2`


## Getting Started

Once you have the development environment set up, follow these steps:

1. Clone the repo
```sh
git clone https://github.com/OscarDRT/react-native-pokedex.git
```

2. Enter the folder
```sh
cd react-native-pokedex
```

3. install dependencies
```sh
yarn install
```

4. install pods dependencies
```sh
npx pod-install
```

5. Start the development server
```sh
yarn ios 
or
yarn android
```
## Usage/Examples


Build a simple screen
```javascript
import React from 'react'
import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { HeaderBack } from '@components/Header'
import { MainContainer } from '@components/Containers/Main'

export const Profile = () => {
  return (
    <MainContainer>
      <HeaderBack title="Profile" />
      <Box
        flex={1}
        paddingHorizontal={'m'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Profile Screen</Text>
      </Box>
    </MainContainer>
  )
}
```


## Authors

- [@OscarDRT](https://github.com/OscarDRT)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/oscardrt/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Oscar__RT)
