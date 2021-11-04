import axios from 'axios';
import { useState, useEffect } from 'react';

// Types
import type{ AxiosError } from 'axios'
import type { Blog } from '../../../types';

interface StateType {
  loading: Boolean;
  blog: Blog | null;
  error: Error | AxiosError | null;
};

function useFetchBlogData(blogId: number): StateType {
  const [state, setState] = useState<StateType>({
    loading: true,
    blog: null,
    error: null,
  });

  useEffect(() => {
    axios.get(`https://localhost:5001/api/Blogs/${blogId}`)
      .then((res) => {
        console.log(res.data);
        setState({
          ...state,
          blog: res.data,
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

export default useFetchBlogData;