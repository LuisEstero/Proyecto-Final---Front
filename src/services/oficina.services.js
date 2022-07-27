import service from './service';

const URL = '/oficina';

const getOficinaService = () => {
	return service.get(`${URL}`);
};

export { getOficinaService };