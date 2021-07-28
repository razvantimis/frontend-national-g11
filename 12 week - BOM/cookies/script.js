

const language = document.cookie ?
    document.cookie
        .split('; ')
        .find(row => row.startsWith('language='))
        .split('=')[1] : 'romanian';

document.getElementById(language).checked = true;

const setCookie = (value) => {
    document.cookie = `language=${value};`;
}