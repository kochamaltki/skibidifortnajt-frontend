import { formatDistance } from 'date-fns'

const format = (date: number) => {
	return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

export default format;
