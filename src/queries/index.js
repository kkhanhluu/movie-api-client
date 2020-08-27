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
  query movies($sortBy: String) {
    movies(sortBy: $sortBy) {
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
      reviews {
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

export const GET_MOVIES_BY_USER = gql`
  query moviesByUser($userId: String!) {
    moviesByUser(userId: $userId) {
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
    createMovie(
      name: $name
      releaseDate: $releaseDate
      duration: $duration
      actors: $actors
      coverImage: $coverImage
    ) {
      _id
      name
      releaseDate
      duration
      actors
      coverImage
    }
  }
`;

export const EDIT_MOVIE = gql`
  mutation editMovie(
    $id: String!
    $name: String!
    $releaseDate: String!
    $duration: Int!
    $actors: [String!]!
    $coverImage: String!
  ) {
    editMovie(
      id: $id
      name: $name
      releaseDate: $releaseDate
      duration: $duration
      actors: $actors
      coverImage: $coverImage
    ) {
      _id
      name
      releaseDate
      duration
      actors
      coverImage
    }
  }
`;

// REVIEW
export const ADD_REVIEW = gql`
  mutation addRating($movie: String!, $rating: Int!, $review: String!) {
    addReview(movie: $movie, rating: $rating, review: $review) {
      _id
      rating
      review
    }
  }
`;
