import PropTypes from 'prop-types';
import { useState } from 'react';
import { BEM, isHiRes, useEventListenter } from '../utils';
import Punc from './punc';

const { block, element, modifier } = BEM('section');

const PrimarySection = (props) => {
  const { children, heading, headingPunctuation, image } = props;

  return (
    <section className={block()}>
      <div className={element('inner')}>
        <h2 className={element('heading')}>
          {heading}
          <Punc>{headingPunctuation}</Punc>
        </h2>
        <div className={element('content')}>{children}</div>
      </div>
      <div className={element('inner')}>
        <div className={element('artwork')}>
          <svg
            className={element('svg')}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 320 240"
          >
            <path
              className={element('path')}
              d="M212.339 58.5178C211.925 59.2352 212.171 60.1526 212.888 60.5668C213.605 60.981 214.523 60.7352 214.937 60.0178C215.351 59.3003 215.105 58.383 214.388 57.9688C213.671 57.5545 212.753 57.8003 212.339 58.5178ZM212.339 58.5178L159.944 28.2678"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className={element('path')}
              d="M107.651 58.5138C107.237 57.7964 106.319 57.5506 105.602 57.9648C104.885 58.379 104.639 59.2964 105.053 60.0138C105.467 60.7313 106.385 60.9771 107.102 60.5629C107.819 60.1487 108.065 59.2313 107.651 58.5138ZM107.651 58.5138L160.046 28.2638"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className={element('path')}
              d="M159.99 4.63243e-06V28.38"
              vectorEffect="non-scaling-stroke"
            />
            <image
              className={element('image')}
              height="100%"
              href={isHiRes ? image.retina : image.default}
              width="106%"
              x="-3%"
              y="-22.25%"
            />
            <path
              className={element('path')}
              d="M107.651 181.482C108.065 180.765 107.819 179.847 107.102 179.433C106.385 179.019 105.467 179.265 105.053 179.982C104.639 180.7 104.885 181.617 105.602 182.031C106.319 182.445 107.237 182.2 107.651 181.482ZM107.651 181.482L160.046 211.732"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className={element('path')}
              d="M212.339 181.486C212.753 182.203 213.671 182.449 214.388 182.035C215.105 181.621 215.351 180.703 214.937 179.986C214.523 179.269 213.605 179.023 212.888 179.437C212.171 179.851 211.925 180.769 212.339 181.486ZM212.339 181.486L159.944 211.736"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className={element('path')}
              d="M160 240V211.62"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

const SecondarySection = (props) => {
  const { children, heading, headingPunctuation } = props;

  return (
    <section className={`${block()} ${modifier('secondary')}`}>
      <div className={element('inner')}>
        <h2 className={element('heading')}>
          {heading}
          <Punc>{headingPunctuation}</Punc>
        </h2>
        <div className={element('content')}>{children}</div>
      </div>
    </section>
  );
};

const TertiarySection = (props) => {
  const { children, heading, headingPunctuation, image } = props;
  const [imgSize, setImgSize] = useState(
    window.innerWidth > 768 ? 'lge' : 'sml',
  );

  const handleResize = () => {
    if (window.innerWidth > 768) {
      if (imgSize !== 'lge') {
        setImgSize('lge');
      }
    } else {
      if (imgSize !== 'sml') {
        setImgSize('sml');
      }
    }
  };

  useEventListenter('resize', handleResize);

  return (
    <section className={`${block()} ${modifier('tertiary')}`}>
      <div className={element('inner')}>
        <h2 className={element('heading')}>
          {heading}
          <Punc>{headingPunctuation}</Punc>
        </h2>
        <div className={element('content')}>{children}</div>
        {imgSize === 'sml' ? (
          <div
            className={element('image')}
            style={{
              backgroundImage: isHiRes
                ? `url(${image.sml.retina})`
                : `url(${image.sml.default})`,
            }}
          />
        ) : (
          <div
            className={element('image')}
            style={{
              backgroundImage: isHiRes
                ? `url(${image.lge.retina})`
                : `url(${image.lge.default})`,
            }}
          />
        )}
      </div>
    </section>
  );
};

const Section = (props) => {
  const { type, ...rest } = props;

  let Component = PrimarySection;

  if (type === 'secondary') {
    Component = SecondarySection;
  }

  if (type === 'tertiary') {
    Component = TertiarySection;
  }

  return <Component {...rest} />;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  heading: PropTypes.string.isRequired,
  headingPunctuation: PropTypes.oneOf(['.', '?', '!', '...', ',']),
  image: PropTypes.oneOf([
    PropTypes.shape({
      default: PropTypes.string.isRequired,
      retina: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
      lge: PropTypes.shape({
        default: PropTypes.string.isRequired,
        retina: PropTypes.string.isRequired,
      }).isRequired,
      sml: PropTypes.shape({
        default: PropTypes.string.isRequired,
        retina: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ]),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

Section.defaultProps = {
  headingPunctuation: '.',
  type: 'primary',
};

export { Section as default };
