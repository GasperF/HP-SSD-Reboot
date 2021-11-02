export default function VaInfo(values) {
    let errors = {}

    if (!values.firstName) {
        errors.firstName = 'First Name is Required'
    }

    if (!values.lastName) {
        errors.lastName = 'Last Name is Required'
    }

    if (!values.birthday) {
        errors.birthday = 'Date of Birth is Required'
    }

    if (!values.email) {
        errors.email = 'Email is Required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'A phone number is Required'
    }


    if (!values.reason) {
        errors.reason = 'The reason for your appt. is Required'
    }

    return errors;

};