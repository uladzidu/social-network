export const requiredField = (value: any) => value ? undefined : 'Field is required'

export const maxLengthThunk = (maxLength : number) => (value: any) =>
    value.length <= maxLength ? undefined : 'Max length is 30 symbols'





