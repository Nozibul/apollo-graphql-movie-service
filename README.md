
````markdown
#🎬 GraphQL Server Practice

A practice GraphQL server project built using **Node.js**, **Apollo Server**, and **GraphQL schema definitions**. This project demonstrates how to build a simple movie-director database with fully functional queries and mutations, following GraphQL best practices.


## 🚀 Features

- GraphQL server setup using Apollo Server
- Schema definition with `Movie` and `Director` types
- Query and Mutation implementation
- Nested resolvers for entity relationships
- Input types for structured data input
- Sample in-memory dataset
- Easy to extend and customize



## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/graphql-server-practice.git
cd graphql-server-practice
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
npm run start
```

Or during development (with auto-reload):

```bash
npm run dev
```

### 4️⃣ Open GraphQL Playground

Go to: [http://localhost:4001/](http://localhost:4001/)
Run your queries and mutations interactively.

---

## 📁 Project Structure

```bash
graphql-server-practice/
│
├── data/                  # Sample in-memory data
│   └── sampleData.js
│
├── graphql/
│   ├── schema.js          # GraphQL type definitions
│   ├── resolvers.js       # Query & Mutation resolvers
│
├── index.js               # Server entry point
├── package.json           # Scripts & dependencies
└── README.md              # Project documentation
```



## Data Structure

### 🎥 Movie

```graphql
type Movie {
  id: ID!
  title: String!
  publishedYear: Int!
  rating: Float!
  genre: String
  language: String
  director: Director
}
```

### 🎬 Director

```graphql
type Director {
  id: ID!
  name: String!
  age: Int
  nationality: String
  awards: [String]
  movies: [Movie]
}
```

---

## 📌 Example Queries

### ✅ 1. List of Movies

```graphql
query {
  movies {
    id
    title
    publishedYear
    rating
    genre
    language
  }
}
```

---

### ✅ 2. List of Directors

```graphql
query {
  directors {
    id
    name
    age
    nationality
    awards
  }
}
```

---

### ✅ 3. Movies with Their Directors

```graphql
query {
  movies {
    title
    genre
    director {
      name
      nationality
    }
  }
}
```

---

### ✅ 4. Directors with Their Movies

```graphql
query {
  directors {
    name
    movies {
      title
      rating
    }
  }
}
```

---

## ✅ Mutation Examples

### Add a New Movie

```graphql
mutation {
  addMovie(
    input: {
      title: "Tenet"
      publishedYear: 2020
      rating: 7.5
      genre: "Sci-Fi"
      language: "English"
      directorId: "1"
    }
  ) {
    id
    title
  }
}
```

### Add a New Director

```graphql
mutation {
  addDirector(
    input: {
      name: "Denis Villeneuve"
      age: 56
      nationality: "Canadian"
      awards: ["Oscar Nominee", "BAFTA Winner"]
    }
  ) {
    id
    name
  }
}
```


## 🏁 Final Notes

This project follows best practices including:

* Clear schema definition and separation of concerns
* Resolver functions organized cleanly
* Input validation via GraphQL input types
* Use of `ID`, `!`, and nullable fields strategically
* Scalable and easy to migrate to a real database

---


