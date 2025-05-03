# GraphQL Server Practice

A practice GraphQL server project built using **Node.js**, **Apollo Server**, and **GraphQL schema definitions**. This project demonstrates how to build a simple movie-director database with fully functional queries and mutations, following GraphQL best practices.


## 🚀 Features

- GraphQL server setup using Apollo Server
- Schema definition with `Movie` and `Director` types
- Query and Mutation implementation
- Nested resolvers for relationships
- Sample in-memory data
- Input types for structured mutations


### Requerment
### structure
movies {
    id,
    title,
    publishedYear,
    rating,
    genre,              
    language,            
    director             
}

director {
    id,
    name,
    age,
    nationality,
    awards,              
    movies               
}

### Data
#### 1. **List of Movies**
#### 2. **List of Directors**
#### 3. **List of Movies with Their Directors**
#### 4. **List of Directors with Their Movies**

---

#### ✅ 1. **List of Movies**
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

#### ✅ 2. **List of Directors**
```graphql
query {
  directors {
    id
    name
    age
    nationality
    experienceInYears
  }
}
```

---

#### ✅ 3. **List of Movies with Their Directors**
```graphql
query {
  movies {
    id
    title
    rating
    genre
    director {
      id
      name
      nationality
    }
  }
}
```

---

#### ✅ 4. **List of Directors with Their Movies**

```graphql
query {
  directors {
    id
    name
    movies {
      id
      title
      rating
    }
  }
}
```

---
