import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'

const Preview = ({ isPreview, ...props }) => {
  if (isPreview === false) return 'Not a preview!'
  return null;
};

export default withPrismicPreviewResolver(Preview);