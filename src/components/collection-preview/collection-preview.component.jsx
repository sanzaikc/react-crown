import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, match }) => (
  <div className="collection-preview">
    <Link to={`${match.path}/${title.toLowerCase()}`}>
      <h1 className="title"> {title.toUpperCase()} </h1>
    </Link>
    <div className="preview">
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
