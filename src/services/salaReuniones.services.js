import service from './service';

const URL = '/salaReuniones';

const getSalaReunionesService = () => {
	return service.get(`${URL}`);
};

export {getSalaReunionesService };