import { useState, useEffect } from 'react';
import axios from 'axios';
import type {
  AxiosRequestConfig,
  AxiosError,
} from 'axios';

interface StateType {
  loading: boolean;
  data: any;
  error: Error | AxiosError | null;
}

function useAxiosRequest(
  url: string,
  requestConfig?: AxiosRequestConfig,
): StateType {
  const axiosRequestConfig = requestConfig || {};

  const [state, setState] = useState<StateType>({
    loading: true,
    data: null,
    error: null,
  });

  if (!axiosRequestConfig?.method) {
    axiosRequestConfig.method = 'GET';
  }

  useEffect(() => {
    axios(url, axiosRequestConfig)
      .then((res) => {
        setState({
          ...state,
          data: res.data.payload,
          loading: false,
        });
      })
      .catch((err: Error | AxiosError) => {
        setState({
          ...state,
          error: err,
          loading: false,
        });
      });
    // eslint-disable-next-line
  }, []);

  return state;
}

export default useAxiosRequest;
