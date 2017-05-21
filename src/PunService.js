export const getPuns = (keywords) => {
  const serialized = keywords.join(',');
  return fetch(`https://localhost:4201/puns?q=${serialized}`)
            .then(response => response.json())
            .catch(err => {
              console.error(err);
              return err;
            });
};

export const suggestKeywords = (partial) => {
  return fetch(`https://localhost:4201/suggest-keywords?q=${partial}`)
            .then(res => res.json())
            .catch(err => {
              console.error(err);
              return err;
            });
}