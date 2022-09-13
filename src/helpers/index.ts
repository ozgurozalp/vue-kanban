export function prepareData(data: any[]) {
	return data.reduce((acc: any, curr: any) => {
		return {
			...acc,
			[`cf_${curr.id}`]: curr.default_value ?? '',
		};
	}, {});
}
