export const UiOverlay = ({ isVisible }) => {
  if (!isVisible) return null;

  return <div className="absolute inset-0 rounded-2xl backdrop-blur-sm"></div>;
};
