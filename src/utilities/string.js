export const slugify = string => {
  return string.toString()
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
}