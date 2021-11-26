import { useState, useEffect } from 'react';
import axios from 'axios';
import type {
  AxiosRequestConfig,
  AxiosError,
} from 'axios';

interface StateType {
  loading: Boolean;
  data: any;
  error: Error | AxiosError | null;
};

function useFetchData(
  url: string,
  requestConfig?: AxiosRequestConfig
): StateType {
  const [state, setState] = useState<StateType>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    axios.get(url, requestConfig)
      .then((res) => {
        console.log(res);
        setState({
          ...state,
          data: res.data,
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

export default useFetchData;