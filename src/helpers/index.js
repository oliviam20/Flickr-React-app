export const formatTags = (tagsArr) => {
  return tagsArr.split(' ').map(tag => tag.replace(/[^0-9a-z]/gi, '')).filter(tag => tag !== '').join(',');
}
