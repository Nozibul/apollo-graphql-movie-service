import { directors, movies } from "../data/sampleData.js";

export const resolvers = {
  // Query resolvers
  Query: {
    movies: () => {
      if (movies.length === 0) throw new Error("No movies found");
      return movies;
    },
    directors: () => {
      if (directors.length === 0) throw new Error("No directors found");
      return directors;
    },
  },

  // Mutation resolvers
  Mutation: {
    addMovie: (_, { input }) => {
      const newMovie = {
        id: (movies.length + 1).toString(),
        title: input.title,
        publishedYear: input.publishedYear,
        rating: input.rating,
        language: input.language,
        directorId: input.directorId, // relationship maintained
      };
      movies.push(newMovie);
      return newMovie;
    },

    addDirector: (_, { input }) => {
      const newDirector = {
        id: (directors.length + 1).toString(),
        name: input.name,
        age: input.age,
        nationality: input.nationality,
      };
      directors.push(newDirector);
      return newDirector;
    },
  },

  // Relation setup
  Movie: {
    director: (parent) => {
      return directors.find((d) => d.id === parent.directorId);
    },
  },

  Director: {
    movies: (parent) => {
        console.log(parent)
      // parent হচ্ছে Director অবজেক্ট, তাই parent.id এর সাথে মেলানোর জন্য m.director.id ব্যবহার করতে হবে
      return movies.filter((m) => m.directorId === parent.id);
    },
  },
  
};
