import PropTypes from "prop-types";

// Common Props
export const CommonProps = {
  className: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export const ContactProps = {
  className: PropTypes.string.isRequired,
};

export const AboutProps = {
  className: PropTypes.string.isRequired,
};

export const HomeProps = {
  className: PropTypes.string.isRequired,
};

export const WorkProps = {
  className: PropTypes.string.isRequired,
};

export const WrapperProps = {
  ...CommonProps,
  onMouseEnter: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export const TextFieldProps = {
  classNameForm: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  classNameLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classNameTextArea: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export const TextInputProps = {
  classNameForm: PropTypes.string,
  onSubmit: PropTypes.func,
  inputLists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ),
  classNameLabelInput: PropTypes.string,
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
};

export const TextInputDefaultProps = { inputList: [] };

export const VideoProps = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export const TooltipProps = {
  ...CommonProps,
};

export const SymbolProps = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export const SpiralProgressBarProps = {
  ...CommonProps,
  size: PropTypes.number,
  progress: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export const SkillbarProps = {
  classNameCard: PropTypes.string.isRequired,
  classNameCircle: PropTypes.string.isRequired,
  classNameBar: PropTypes.string.isRequired,
  classNamePercent: PropTypes.string.isRequired,
  classNameText: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  skillName: PropTypes.string.isRequired,
};

export const ProgressBarProps = {
  ...CommonProps,
};

export const ParagraphProps = {
  ...CommonProps,
};

export const NavbarProps = {
  ...CommonProps,
  classNameMenuBtn: PropTypes.string.isRequired,
  classNameList: PropTypes.string.isRequired,
  idList: PropTypes.string.isRequired,
  urlLink: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  classNameItem: PropTypes.string.isRequired,
  classNameLinkIcon: PropTypes.string.isRequired,
  classNameLink: PropTypes.string.isRequired,
};

export const LoadingProps = {
  ...CommonProps,
};

export const LinkProps = {
  ...CommonProps,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const ImageProps = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
};

export const HeadingProps = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
};

export const GraphProps = {
  ...CommonProps,
};

export const FooterProps = {
  className: PropTypes.string.isRequired,
};

export const ContainerProps = {
  ...CommonProps,
  onMouseMove: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export const CarouselProps = {
  ...CommonProps,
};

export const CardProps = {
  ...CommonProps,
};

export const ButtonProps = {
  ...CommonProps,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export const BarProps = {
  ...CommonProps,
};

export const PillProps = {
  ...CommonProps,
};

export const LineProps = {
  ...CommonProps,
};

export const CircleProps = {
  ...CommonProps,
};

export const BlobProps = {
  ...CommonProps,
  viewBox: PropTypes.number,
  xmlns: PropTypes.string,
  fill: PropTypes.string,
  d: PropTypes.string.isRequired,
};

export const InfoProps = {
  ...CommonProps,
};
