import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/arkarn2020';

const MultipleReturns = () => {
  //default loading : TRUE
  const [isLoading, setIsLoading] = useState(true);
  //default error : FALSE
  const [isError, setIsError] = useState(false);
  //default user
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { id, login, avatar_url, html_url } = user;
        setUser({ id, login, avatar_url, html_url });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>error...404</h2>
      </div>
    );
  }

  return (
    <>
      <ul className="users">
        <li>
          <img src={user.avatar_url} alt={user.id} />
          <div>
            <h6>ID ({user.id})</h6>
            <h4>{user.login}</h4>
            <a href={user.html_url}>profile</a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MultipleReturns;
