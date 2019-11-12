import React from 'react';
import imgWebpack from './assets/img-webpack.png';

const App = () => {
  return (
    <>
      <div>
        <img src={imgWebpack} alt="" style={{ width: '100vh' }} />
      </div>
      <h1>Webpack Practise</h1></hr>
       Test DotEnv : {process.env.PORT}
    </>
  );
};

export default App;
