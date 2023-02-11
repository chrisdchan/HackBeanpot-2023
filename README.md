# HackBeanpot-2023

## An app to connect athletes to coaches and recruiters

### Tech Stack
SvelteKit with TypeScript FrontEnd

Flask on the Backend

SQLAlchemy database

Detect Language API


## Endpoints we need

GET: "/user/{id}

  username: string
  
  firstname: string
  
  lastname: string
  
  posts: [ 
  
    { 
    
      userid: number,
      
      username: string,
      
      content: string
      
    } ...
    
  ]
  
  GET: "/users"
    
    firstname: string
   
    lastname: string
    
  
  GET: "/teams"
    
     teamname: string
  
 
  
  
 
