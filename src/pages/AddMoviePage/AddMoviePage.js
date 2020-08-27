import React, { useState } from 'react';
import Swal from 'sweetalert2';

import classes from './AddMoviePage.module.scss';
import InputForm from '../../components/Form/InputForm/InputForm';
import Navbar from '../../components/Navbar/Navbar';
import { useMutation } from '@apollo/client';
import { CREATE_MOVIE, GET_MOVIES, EDIT_MOVIE } from '../../queries';

const AddMoviePage = (props) => {
  let initialName = '';
  let initialReleaseDate = null;
  let initialDuration = 0;
  let initialCoverImage = '';
  let initialActors = [];
  let isEditing = false;
  let id = '';

  if (props.location.state && props.location.state.movie) {
    initialName = props.location.state.movie.name;
    initialReleaseDate = new Date(+props.location.state.movie.releaseDate);
    initialDuration = props.location.state.movie.duration;
    initialCoverImage = props.location.state.movie.coverImage;
    initialActors = props.location.state.movie.actors;
    id = props.location.state.movie._id;
    isEditing = true;
  }

  const [createMovie, { loading, error }] = useMutation(CREATE_MOVIE, {
    onCompleted(data) {
      Swal.fire('Success!', 'You created the movie successfully!', 'success');
    },
    onError(error) {
      Swal.fire('Error!', 'Something wrong happened!', 'error');
    },
  });

  const [editMovie, { loadingEdit, errorEdit }] = useMutation(EDIT_MOVIE, {
    onCompleted(data) {
      Swal.fire('Success!', 'You edited the movie successfully!', 'success');
    },
    onError(error) {
      Swal.fire('Error!', 'Something wrong happened!', 'error');
    },
  });

  const [name, setName] = useState(initialName);
  const [releaseDate, setReleaseDate] = useState(initialReleaseDate);
  const [duration, setDuration] = useState(initialDuration);
  const [coverImage, setCoverImage] = useState(initialCoverImage);
  const [actors, setActors] = useState(initialActors);

  const onActorsChange = (e) => {
    const enteredActors = e.target.value.split(',');
    setActors(enteredActors);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      createMovie({
        variables: {
          name,
          releaseDate: new Date(releaseDate),
          duration: +duration,
          coverImage,
          actors,
        },
        refetchQueries: [
          {
            query: GET_MOVIES,
          },
        ],
      });
    } else {
      console.log(id);
      editMovie({
        variables: {
          id,
          name,
          releaseDate: new Date(releaseDate),
          duration: +duration,
          coverImage,
          actors,
        },
      });
    }
  };
  return (
    <div className={classes.addMoviePage}>
      <Navbar />
      <form className={classes.form}>
        <InputForm
          text='Name'
          validator={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
          errorMessage="Name can't be empty"
          typeInput='input'
        />
        <InputForm
          text='Image Cover'
          validator={true}
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          errorMessage="This field can't be empty"
          typeInput='input'
        />
        <InputForm
          text='Duration'
          validator={true}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          errorMessage="Duration can't be empty"
          typeInput='input'
        />
        <InputForm
          text='Release Date'
          validator={true}
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          errorMessage="Duration can't be empty"
          typeInput='input'
          type='date'
          style={{ postion: 'relative', zIndex: '1000' }}
        />
        )
        <InputForm
          text='Actors (Split actors by comma ,)'
          validator={true}
          value={actors}
          onChange={onActorsChange}
          errorMessage="This field can't be empty"
          typeInput='input'
        />
        <div className={classes.btnRow}>
          <button
            type='button'
            className={classes.btn}
            onClick={(e) => onSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMoviePage;
