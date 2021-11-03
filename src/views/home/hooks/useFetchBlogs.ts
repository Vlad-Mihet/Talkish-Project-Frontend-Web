import axios from 'axios';
import { useState, useEffect } from 'react';

// Types
import type{ AxiosError } from 'axios'
import type { Blog } from '../../../types';

interface StateType {
  loading: Boolean;
  blogs: Blog[];
  error: Error | AxiosError | null;
};

function useFetchBlogs(): StateType {
  const [state, setState] = useState<StateType>({
    loading: true,
    blogs: [],
    error: null,
  });

  useEffect(() => {
    axios.get('https://localhost:5001/api/Blogs')
      .then((res) => {
        console.log(res.data);
        setState({
          ...state,
          blogs: res.data,
          loading: false,
        });
      })
      .catch((err: Error | AxiosError) => {
        setState({
          ...state,
          error: err
        });
      });
      // eslint-disable-next-line
  }, []);

  return state;
}

export default useFetchBlogs;