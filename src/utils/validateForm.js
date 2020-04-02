export default function validateForm(values) {
    let errors = {};
    const { email, content } = values;

    // Email errors

    if (!email) {
        errors.email = "Required email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = "Invalid email address";
    }

    // content errors
    if (!content) {
        errors.content = "Please add some content";
    } else if (content.length < 6) {
        errors.content = "content must be at least 6 characters";
    }

    return errors;
}