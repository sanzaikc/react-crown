import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectColletions } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectColletions,
});

export default connect(mapStateToProps)(CollectionOverview);
