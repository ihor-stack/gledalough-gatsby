import React from 'react';

import { privacy as items } from '../constants/pages';

const PrivacyPage = () => {

  const privacy_items = items.sections.map((item, i) => {

    const paragraphs = item.ps.map((paragraph, pi) => (
        <p>{paragraph}</p>
    ))

    return (
      <div key={i}>
        <h3>{item.title}</h3>
        {paragraphs}
      </div>
    )
});

return (
  <>
    <h1>Privacy</h1>
    <hr />
    { privacy_items }
  </>
)};

export default PrivacyPage;