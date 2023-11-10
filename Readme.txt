1.Npm is a software package manager which manages the packages
=>It is free to use
=>it is created as a package manager
=>all npm packages are defined in package.json
=>can manage dependencies

2. Parcel is super power ,It is one of the most popular bundler
=>It makes our life easy like It has all packages which is used for different functions
=>It minifies the code processes,combines the code
=>HMR,TREE-SHAKING,TRANSPILATION BY BABEL,IMAGE OPTIMISING,DEV SERVER
=>DIAGNODTICS,CACHING,MINIFICATION,COMPRESSION,CONTENT HASHING,CODE-SPLITTING
3.Parcel-cache is cache which is used for enabling future requests fast
4.npx is command used for executing the task like npx parcel "the-pageurl"
5.Dependencies are used in all cases such as for producxtion and development
whjeras dev-dependencies used only in the development phase
6.TreeShaking is an algorithm which is used to remove the unwanted code to reduce the space
7.HMR=>responsible for faster implementation with out refresh the page
8. .gitignore file responsible for storing the unwanted folders which we can 
ctreate instantly the folders wont effect the further implementation
9.package.json contains versions of all dependencies where as package-lock json 
conatains all the current versions of the packages in the project
10.We should not push node_modules code in git because it can automatically 
creates it folder on the particular server when it wants
11. In dist folder we can see minimised code of all the files
12.browserslist are used to mention the specified versions of browsers which we want to 
support that browser versions for our project
13.caret- ^ can support minor versions and below versions where as for tilda~ can support 
the specified versions and below versions



APP
/*
header logo and nav items
body searchbar  and button restaurent_card image name ratings deliverytime
footer copyrights and some links

*/

 const filterSearch = (searchText) => {
        if(searchText.trim() === ""){
            return setListofRestaurant(jsonvalue?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
       
        else{
            const list1 = ListofRestaurant.filter((val) =>
            val.info.name.toLowerCase().includes(text.toLowerCase())
          );
          setListofRestaurant(list1);

         
        }
     }