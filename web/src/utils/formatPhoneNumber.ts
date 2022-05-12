export function formatPhoneNumber(number: string) {
  const exp = new RegExp(
    "s{0,1}[(]d{2,2}[)]s{0,1}d{4,5}s{0,1}[-]{0,1}s{0,1}d{4,4}s{0,1}"
  );

  return exp.test(number);
}

//\s{0,1}[(]\d{2,2}[)]\s{0,1}\d{4,5}\s{0,1}[\-]{0,1}\s{0,1}\d{4,4}\s{0,1}

//^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}
