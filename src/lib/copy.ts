import { string } from "prop-types";

let copyTextFallback = (textToCopy: string) => {
  let currentActive = document.activeElement;
  let textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  try {
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
  } catch (e) {
    console.info('Copy text fail somehow');
    throw e;
  }

  document.body.removeChild(textarea);

  if (currentActive && currentActive !== document.body) {
    (currentActive as HTMLElement).focus();
  }
};

export let copyText = (textToCopy: string): object  => {
  if (!navigator.clipboard) {
    try {
      copyTextFallback(textToCopy);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  return navigator.clipboard.writeText(textToCopy);
};
