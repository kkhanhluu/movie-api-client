import { gql } from '@apollo/client';

// Authentication
export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      id
      username
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query currentUser {
    currentUser {
      id
      username
    }
  }
`;

// MOVIES
export const GET_MOVIES = gql`
  query movies {
    movies {
      _id
      name
      duration
      coverImage
      releaseDate
      actors
      ratingsAverage
      ratingsQuantity
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
  query movie($id: String!) {
    movie(id: $id) {
      _id
      name
      duration
      coverImage
      releaseDate
      actors
      ratingsAverage
      ratingsQuantity
      ratings {
        _id
        rating
        review
        user {
          id
          username
        }
      }
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation deleteMovie($id: String!) {
    deleteMovie(id: $id)
  }
`;

export const CREATE_MOVIE = gql`
  mutation createMovie(
    $name: String!
    $releaseDate: String!
    $duration: Int!
    $actors: [String!]!
    $coverImage: String!
  ) {
    addMovie(
      name: $name
      releaseDate: $releaseDate
      durationSeconds: $durationSeconds
      actors: $actors
      coverImage: $coverImage
    ) {
      id
      name
      releaseDate
      durationSeconds
      actors
      coverImage
    }
  }
`;

export const EDIT_MOVIE = gql`
  mutation editMovie(
    $name: String!
    $releaseDate: String!
    $duration: Int!
    $actors: [String!]!
    $coverImage: String!
  ) {
    addMovie(
      name: $name
      releaseDate: $releaseDate
      durationSeconds: $durationSeconds
      actors: $actors
      coverImage: $coverImage
    ) {
      id
      name
      releaseDate
      durationSeconds
      actors
      coverImage
    }
  }
`;

// REVIEW
export const ADD_REVIEW = gql`
  mutation addRating($movie: String!, $rating: Int!, $review: String!) {
    addReview(movie: $movie, rating: $rating, review: $review) {
      id
      rating
      review
      user
    }
  }
`;
