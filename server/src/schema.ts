export const typeDefs = `#graphql
  type Person {
    _id:String
    index: String
    picture:String
    age: String
    eyeColor:String
    name:String
    company:String
    email:String
    phone:String
    greeting: String
    friends: [Person]
  }

  type Query {
    list(search:String): [Person]
  }
  
`;

