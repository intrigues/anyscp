/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useParams } from 'react-router';

export default function Index(props) {
  const params = useParams();
  return (
    <div className="sect">
      <h2>Dynamic : {params?.id}</h2>
    </div>
  );
}
