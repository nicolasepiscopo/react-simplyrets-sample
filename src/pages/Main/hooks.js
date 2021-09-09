import { useQuery } from 'react-query';
import { API_URL, get, QUERY_KEYS } from 'utils';

export const usePropertiesList = () =>
  useQuery(QUERY_KEYS.PROPERTIES_LIST, async () =>
    get(`${API_URL}/properties`),
  );
