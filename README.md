#### Requerment
// structure
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

// Data
### 1. **List of Movies**
### 2. **List of Directors**
### 3. **List of Movies with Their Directors**
### 4. **List of Directors with Their Movies**

---

### ✅ 1. **List of Movies**
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

### ✅ 2. **List of Directors**
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

### ✅ 3. **List of Movies with Their Directors**
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

### ✅ 4. **List of Directors with Their Movies**

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
