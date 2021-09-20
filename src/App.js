import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const fetchJoke = async () => {
      const data = await fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json());
      setJoke(data);
      setIsLoading(false);
    };
    fetchJoke();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div>
      <img src={joke.icon_url} alt="logo" />
      <p>{joke.value}</p>
    </div>
  );
}

export default App;
