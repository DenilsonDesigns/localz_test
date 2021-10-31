interface IMortiosResponse {
  config: object;
  data: {
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string | null;
    };
    results: IMortiosDataObj[];
  };
}

interface IMortiosDataObj {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}
