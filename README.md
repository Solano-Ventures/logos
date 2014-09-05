logos
=====================
# Project Description

# Algorithm Philosophy 
The design philosophy behind this application is simple: visualize an algorithm which takes a data set and returns an array of colors unique to those inputs. To achieve this goal, the algorithm takes in four inputs and returns a single output.  

## Inputs
The input is an object with four properties. Each property is a string, however the color property contains a string in the form similar to an RGBA color with an opacity of 1.0.
```
{
  firstname: 'Jon',
  lastname: 'Sadka',
  definedBy: 'I relate to ...',
  color: 'RGBA(123,123,123,1.0)'
}
```

## Output
The algorithm returns one array as a result. The length of the array is a perfect square (i.e. Math.sqrt(logoarray.length) returns an integer) and each index is a RGBA string with a unique opacity value.
```
["RGBA(126,29,15,0.9788)","RGBA(126,29,15,0.0236)",
  ...,
 "RGBA(126,29,15,0.9968)","RGBA(126,29,15,0)"]
```

# Database Philosophy
For a given user using this application, one might want to save many logos. To acheieve this, each user saved on the server is comprised of an email address, password, and logo inputs as follows:
```
{
  username: 'jonsadka@gmail.com',
  password: 'IamAwesome:)',
  logos: [{
            firstname: 'Jon',
            lastname: 'Sadka',
            definedBy: 'I love avocadoes!!',
            color: 'RGBA(33,188,215,1.0)'
          },
          ...
          {
            firstname: 'Greatest',
            lastname: 'Ever',
            definedBy: 'I relate to horrible music.',
            color: 'RGBA(60,60,60,1.0)'
          }]
}
```

# Project Stack
- Angular
- D3
- Node
- Express
- MongoDB