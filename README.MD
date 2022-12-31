For this book review project, I want to take what I have learned in the list app and apply it whilst adding a few things to jazz it up a bit.

MVP
-Custom Fonts
-Images
-Multiple screens
-Form

https://docs.expo.dev/guides/using-custom-fonts/ 

Had a play around with custom fonts, the above doc explains how it works - essentially you use the imported StyleSheet hook to create a keyvalue pair. The pair being the name of the style and an object containing the CSS/styles being applied. 
To do that globally, rather than have an individual stylesheet for each componenet, have a global one that you import then pick and choose the styles you want the component to have.